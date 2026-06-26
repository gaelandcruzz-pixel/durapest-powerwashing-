/**
 * Generates before/after powerwashing images using DALL-E 3 and saves them to
 * public/images/before-after/. Run once with:
 *
 *   OPENAI_API_KEY=sk-... npx tsx scripts/generate-images.mts
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUT_DIR = join(process.cwd(), "public", "images", "before-after");
mkdirSync(OUT_DIR, { recursive: true });

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("❌  Set OPENAI_API_KEY before running this script.");
  process.exit(1);
}

const images: { filename: string; prompt: string }[] = [
  {
    filename: "driveway-before.jpg",
    prompt:
      "Photorealistic wide-angle photograph of a residential concrete driveway in suburban Toronto, heavily stained with dark oil patches, tire marks, and embedded grime. Overcast Canadian sky, realistic suburban neighbourhood background. Ultra-realistic DSLR photo quality.",
  },
  {
    filename: "driveway-after.jpg",
    prompt:
      "Photorealistic wide-angle photograph of the same residential concrete driveway in suburban Toronto after professional pressure washing — perfectly clean, bright grey concrete, no stains or marks. Overcast Canadian sky, realistic suburban neighbourhood. Ultra-realistic DSLR photo quality.",
  },
  {
    filename: "siding-before.jpg",
    prompt:
      "Photorealistic photograph of the exterior wall and siding of a Toronto-area house covered in green algae streaks, black mould patches, and years of grime and discolouration. Overcast day, realistic neighbourhood. Ultra-realistic DSLR photo quality.",
  },
  {
    filename: "siding-after.jpg",
    prompt:
      "Photorealistic photograph of the same exterior wall and siding of a Toronto-area house after professional soft-wash — gleaming bright white, completely clean, no mould or algae. Overcast day. Ultra-realistic DSLR photo quality.",
  },
  {
    filename: "deck-before.jpg",
    prompt:
      "Photorealistic photograph of a weathered backyard wooden deck in a Toronto suburb — dark grey from UV damage, covered in black mildew streaks, green algae, and surface dirt. Realistic outdoor setting. Ultra-realistic DSLR photo quality.",
  },
  {
    filename: "deck-after.jpg",
    prompt:
      "Photorealistic photograph of the same backyard wooden deck in a Toronto suburb after professional pressure washing and restoration — warm honey-brown wood, clean and bright, no mildew or algae. Ultra-realistic DSLR photo quality.",
  },
];

async function generate(prompt: string): Promise<Buffer> {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "high",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${err}`);
  }

  const json = (await res.json()) as { data: { b64_json?: string; url?: string }[] };
  const item = json.data[0];
  if (item.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item.url) {
    const imgRes = await fetch(item.url);
    if (!imgRes.ok) throw new Error(`Failed to download image: ${imgRes.status}`);
    return Buffer.from(await imgRes.arrayBuffer());
  }
  throw new Error("No image data in response");
}

console.log(`Generating ${images.length} images — this will take ~1-2 min...\n`);

for (const { filename, prompt } of images) {
  process.stdout.write(`  Generating ${filename}...`);
  try {
    const buffer = await generate(prompt);
    writeFileSync(join(OUT_DIR, filename), buffer);
    console.log(" ✓");
  } catch (err) {
    console.error(` ✗\n  Error: ${(err as Error).message}`);
  }
}

console.log("\n✅  Done. Images saved to public/images/before-after/");
