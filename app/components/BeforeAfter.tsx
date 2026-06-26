"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const examples = [
  {
    title: "Driveway Cleaning",
    description: "Oil stains & tire marks removed",
    beforeSrc: "/images/before-after/driveway-before.jpg",
    afterSrc: "/images/before-after/driveway-after.jpg",
    beforeFallback: {
      background: [
        "radial-gradient(ellipse 55px 40px at 22% 55%, rgba(4,4,4,0.95) 0%, transparent 80%)",
        "radial-gradient(ellipse 80px 55px at 68% 72%, rgba(0,0,0,0.9) 0%, transparent 80%)",
        "radial-gradient(ellipse 35px 25px at 48% 28%, rgba(10,10,10,0.75) 0%, transparent 80%)",
        "repeating-linear-gradient(90deg, #2e2e2e 0px, #2e2e2e 3px, #353535 3px, #353535 6px)",
      ].join(", "),
    },
    afterFallback: {
      background:
        "repeating-linear-gradient(90deg, #d4d4d4 0px, #d4d4d4 3px, #e0e0e0 3px, #e0e0e0 6px)",
    },
  },
  {
    title: "House Siding Wash",
    description: "Mould, algae & grime eliminated",
    beforeSrc: "/images/before-after/siding-before.jpg",
    afterSrc: "/images/before-after/siding-after.jpg",
    beforeFallback: {
      background: [
        "radial-gradient(ellipse 120px 90px at 25% 35%, rgba(74,83,42,0.55) 0%, transparent 100%)",
        "radial-gradient(ellipse 90px 70px at 72% 65%, rgba(50,60,20,0.45) 0%, transparent 100%)",
        "repeating-linear-gradient(180deg, #b8a27a 0px, #b8a27a 22px, #a89268 22px, #a89268 24px)",
      ].join(", "),
    },
    afterFallback: {
      background:
        "repeating-linear-gradient(180deg, #f8fafc 0px, #f8fafc 22px, #e2e8f0 22px, #e2e8f0 24px)",
    },
  },
  {
    title: "Deck Restoration",
    description: "Weathering & mildew reversed",
    beforeSrc: "/images/before-after/deck-before.jpg",
    afterSrc: "/images/before-after/deck-after.jpg",
    beforeFallback: {
      background: [
        "radial-gradient(ellipse 50px 250px at 18% 50%, rgba(0,0,0,0.25) 0%, transparent 100%)",
        "repeating-linear-gradient(90deg, #374151 0px, #374151 36px, #1f2937 36px, #1f2937 38px)",
      ].join(", "),
    },
    afterFallback: {
      background: [
        "radial-gradient(ellipse 50px 250px at 18% 50%, rgba(255,200,100,0.15) 0%, transparent 100%)",
        "repeating-linear-gradient(90deg, #92400e 0px, #92400e 36px, #78350f 36px, #78350f 38px)",
      ].join(", "),
    },
  },
];

function Slider({
  title,
  description,
  beforeSrc,
  afterSrc,
  beforeFallback,
  afterFallback,
}: (typeof examples)[number]) {
  const [pos, setPos] = useState(45);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calc = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
        onMouseDown={(e) => { isDragging.current = true; calc(e.clientX); }}
        onMouseMove={(e) => { if (isDragging.current) calc(e.clientX); }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchStart={(e) => calc(e.touches[0].clientX)}
        onTouchMove={(e) => { e.preventDefault(); calc(e.touches[0].clientX); }}
      >
        {/* Before layer */}
        <div className="absolute inset-0" style={!beforeLoaded ? beforeFallback : undefined}>
          <Image
            src={beforeSrc}
            alt={`${title} before`}
            fill
            className={`object-cover transition-opacity duration-300 ${beforeLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setBeforeLoaded(true)}
            onError={() => setBeforeLoaded(false)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* After layer — clipped by slider position */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            ...(afterLoaded ? {} : afterFallback),
          }}
        >
          <Image
            src={afterSrc}
            alt={`${title} after`}
            fill
            className={`object-cover transition-opacity duration-300 ${afterLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setAfterLoaded(true)}
            onError={() => setAfterLoaded(false)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <svg
            className="w-5 h-5 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none z-10">
          BEFORE
        </span>
        <span className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none z-10">
          AFTER
        </span>

        {/* Drag hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full pointer-events-none z-10">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
          Drag to compare
        </div>
      </div>

      <div>
        <p className="text-brand-dark font-bold">{title}</p>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            See the Difference Yourself
          </h2>
          <p className="text-slate-500 text-lg">
            Drag the sliders to reveal the transformation. One visit. Zero hassle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((ex) => (
            <Slider key={ex.title} {...ex} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-brand-red/25"
          >
            Get These Results on Your Property
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
