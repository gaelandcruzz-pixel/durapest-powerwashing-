"use client";

import { useState } from "react";

function DurapestLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 100" className={className} aria-label="Durapest Powerwashing">
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

const sisterLinks = [
  { label: "Pest Control & Wildlife Removal", href: "https://www.durapest.ca" },
  { label: "Powerwashing", href: "/", active: true },
  { label: "Junk Removal", href: "https://www.durapestjunkremoval.ca" },
  { label: "Snow Removal", href: "https://www.durapestsnowremoval.ca" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Sister company bar */}
      <div className="bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1.5">
            {sisterLinks.map(({ label, href, active }, i) => (
              <span key={label} className="flex items-center gap-1 flex-shrink-0">
                {i > 0 && <span className="text-white/20 text-xs select-none">|</span>}
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-xs px-2 py-0.5 rounded transition-colors ${
                    active
                      ? "text-brand-red font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </span>
            ))}
            <div className="ml-auto flex-shrink-0 pl-4">
              <a
                href="tel:+19057826332"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors font-medium"
              >
                <svg className="w-3 h-3 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (905) 782-6332
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-brand-dark/97 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <DurapestLogo className="h-10 w-auto" />
              <span className="text-white font-bold text-base leading-tight hidden sm:block">
                Powerwashing
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Get a Free Quote
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-300 hover:text-white text-sm font-medium py-2 border-b border-white/5"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              href="tel:+19057826332"
              className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium py-2 border-b border-white/5"
            >
              <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (905) 782-6332
            </a>

            <div className="pt-2 pb-1 border-b border-white/5 flex flex-col gap-2">
              <p className="text-slate-500 text-xs uppercase tracking-wider">Durapest Family</p>
              {sisterLinks.filter(l => !l.active).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-xs"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-3 inline-flex justify-center bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
