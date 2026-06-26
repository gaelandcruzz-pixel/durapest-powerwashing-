const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "House & Siding Wash",
    description: "Remove years of dirt, mildew, and algae from your home's exterior. Safe soft-wash technique that protects your siding and paint.",
    highlight: "Most Popular",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Driveway & Walkway",
    description: "Blast away oil stains, tire marks, and embedded grime from concrete and asphalt. Curb appeal restored in hours.",
    highlight: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Deck & Patio Cleaning",
    description: "Restore weathered wood and composite decks to like-new condition. We remove moss, mold, and grey staining safely.",
    highlight: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Roof Soft Washing",
    description: "Low-pressure soft washing removes black streaks, lichen, and moss from shingles without causing damage or voiding warranties.",
    highlight: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Properties",
    description: "Keep your storefront, parking lot, and building exterior pristine. Flexible scheduling including after-hours to minimize disruption.",
    highlight: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Fence & Gate Cleaning",
    description: "Wood, vinyl, or metal — we remove algae, mildew, and weathering to bring fences back to their original colour.",
    highlight: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Complete Powerwashing Services
          </h2>
          <p className="text-slate-500 text-lg">
            From residential homes to large commercial properties, we handle it all with professional-grade equipment and eco-friendly cleaning solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description, highlight }) => (
            <div
              key={title}
              className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:border-brand-red/30 transition-all duration-300"
            >
              {highlight && (
                <span className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  {highlight}
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl bg-brand-tint text-brand-red flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {icon}
              </div>
              <h3 className="text-brand-dark font-bold text-xl mb-3">{title}</h3>
              <p className="text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
