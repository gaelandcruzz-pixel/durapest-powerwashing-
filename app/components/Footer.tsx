function DurapestOval() {
  return (
    <svg viewBox="0 0 220 100" className="h-12 w-auto" aria-hidden>
      <ellipse cx="110" cy="50" rx="105" ry="44" fill="none" stroke="#dc2626" strokeWidth="6" />
      <ellipse cx="110" cy="50" rx="97" ry="36" fill="none" stroke="#333" strokeWidth="3.5" />
      <ellipse cx="110" cy="50" rx="93" ry="32" fill="#1a1a1a" />
      <text
        x="110"
        y="58"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#dc2626"
        letterSpacing="-0.5"
      >
        Durapest
      </text>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <DurapestOval />
              <span className="text-white font-bold text-base leading-tight">
                Powerwashing
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Toronto&apos;s trusted powerwashing professionals. Part of the Durapest family of services since 2017.
            </p>
            <a
              href="tel:+19057826332"
              className="inline-flex items-center gap-2 text-brand-red hover:text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (905) 782-6332
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                "House & Siding Wash",
                "Driveway & Walkway",
                "Deck & Patio",
                "Roof Soft Washing",
                "Commercial Cleaning",
                "Fence & Gate",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="flex flex-col gap-3">
              {["Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Oakville"].map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+19057826332" className="text-slate-400 hover:text-white text-sm transition-colors">
                  (905) 782-6332
                </a>
              </li>
              <li>
                <a href="mailto:hello@durapest.ca" className="text-slate-400 hover:text-white text-sm transition-colors">
                  hello@durapest.ca
                </a>
              </li>
              <li className="text-slate-400 text-sm">Toronto, ON</li>
              <li className="text-slate-400 text-sm">Mon–Sat: 7am – 7pm</li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Sister company link */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-slate-500 text-sm text-center">
            Part of the{" "}
            <a href="https://www.durapest.ca" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-white transition-colors font-medium">
              Durapest
            </a>{" "}
            family of home services
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Durapest Powerwashing. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Proudly serving Toronto & the GTA
          </p>
        </div>
      </div>
    </footer>
  );
}
