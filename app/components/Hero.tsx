function DurapestOval() {
  return (
    <svg viewBox="0 0 220 100" className="w-64 h-auto mx-auto lg:mx-0" aria-hidden>
      <ellipse cx="110" cy="50" rx="105" ry="44" fill="none" stroke="#dc2626" strokeWidth="6" />
      <ellipse cx="110" cy="50" rx="97" ry="36" fill="none" stroke="#171717" strokeWidth="3.5" />
      <ellipse cx="110" cy="50" rx="93" ry="32" fill="white" />
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-red/8 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[32rem] h-[32rem] rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-red/10 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-red text-sm font-medium">Serving Toronto & the GTA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Toronto&apos;s Most{" "}
            <span className="text-brand-red">Trusted</span>{" "}
            Powerwashing Service
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Professional pressure washing that brings your home, driveway, and business back to life. Fast, affordable, and built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+14161234567"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
            >
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (416) 123-4567
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {["bg-red-400", "bg-red-500", "bg-rose-500", "bg-red-400", "bg-red-600"].map((color, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${color} border-2 border-brand-dark flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["JD", "SM", "KL", "TP", "BR"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {Array(5).fill(null).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-0.5">500+ happy customers</p>
            </div>
          </div>
        </div>

        {/* Visual card */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-8">
          {/* Logo oval */}
          <DurapestOval />

          {/* Info card */}
          <div className="relative w-full max-w-md">
            <div className="relative bg-gradient-to-br from-brand-red to-brand-red-dark rounded-3xl p-px shadow-2xl">
              <div className="bg-brand-dark/90 backdrop-blur-sm rounded-[calc(1.5rem-1px)] p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">Professional Grade</p>
                    <p className="text-slate-400 text-sm">4,000 PSI equipment</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-slate-600 to-brand-red" />
                  </div>
                  <p className="text-slate-400 text-xs mt-1.5 text-right">Results in 1 visit</p>
                </div>

                {[
                  { label: "Driveways & Walkways", done: true },
                  { label: "House & Siding Wash", done: true },
                  { label: "Deck & Patio Cleaning", done: true },
                  { label: "Roof Soft Washing", done: true },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? "bg-brand-red" : "bg-brand-red/30"}`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-brand-dark font-bold text-sm">100% Satisfaction</p>
                <p className="text-slate-500 text-xs">Guaranteed or re-clean free</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 74.7C1200 80 1320 80 1380 80H1440V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V80Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
