const reviews = [
  {
    name: "Sarah M.",
    location: "Etobicoke, ON",
    rating: 5,
    text: "Absolutely amazing results on our driveway and house siding. Years of grime gone in a few hours. The team was professional, on time, and cleaned up everything. Will definitely be calling them again next spring!",
    initials: "SM",
    color: "bg-brand-red",
  },
  {
    name: "James K.",
    location: "North York, ON",
    rating: 5,
    text: "I was skeptical my deck could be saved — it was black with mould and algae. Durapest came out the next day and restored it to almost new. The price was fair and the job was done in under 3 hours. Incredible.",
    initials: "JK",
    color: "bg-brand-dark",
  },
  {
    name: "Priya & Raj T.",
    location: "Mississauga, ON",
    rating: 5,
    text: "Had them do the full exterior — driveway, walkway, back patio, and siding. Our house looks like it was just built. Neighbours keep asking what we did! Highly recommend Durapest to anyone in the GTA.",
    initials: "PT",
    color: "bg-brand-red",
  },
  {
    name: "Mike O.",
    location: "Vaughan, ON",
    rating: 5,
    text: "Booked online, got a quick call back to confirm the price, and they showed up right on time. The before and after difference is night and day. Great company — honest pricing, great work.",
    initials: "MO",
    color: "bg-brand-dark",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            What Toronto Homeowners Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="text-slate-500 text-sm">4.9 / 5 based on 120+ Google reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(({ name, location, rating, text, initials, color }) => (
            <div key={name} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <Stars count={rating} />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-brand-dark font-semibold text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
