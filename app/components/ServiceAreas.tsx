const areas = [
  "Toronto", "Mississauga", "Brampton", "Vaughan",
  "Markham", "Richmond Hill", "Oakville", "Burlington",
  "North York", "Etobicoke", "Scarborough", "East York",
  "Pickering", "Ajax", "Whitby", "Newmarket",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Serving Toronto & the Entire GTA
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Based in Toronto, we provide fast, reliable powerwashing throughout the Greater Toronto Area. No travel fees within our service zone — just great results at fair prices.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Check My Area
            </a>
          </div>

          {/* Right: pill grid */}
          <div className="mt-10 lg:mt-0">
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-colors ${
                    area === "Toronto"
                      ? "bg-brand-blue border-brand-blue text-white"
                      : "bg-white/5 border-white/15 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <svg className={`w-3.5 h-3.5 ${area === "Toronto" ? "text-white" : "text-brand-blue"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5">
              <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-300 text-sm leading-relaxed">
                Don&apos;t see your area? We travel beyond our core zone for larger jobs. Give us a call and we&apos;ll work something out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
