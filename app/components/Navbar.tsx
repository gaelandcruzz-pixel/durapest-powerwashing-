"use client";

import { useState } from "react";

function DurapestLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 100" className={className} aria-label="Durapest Powerwashing">
      {/* Red outer ellipse */}
      <ellipse cx="110" cy="50" rx="105" ry="44" fill="none" stroke="#dc2626" strokeWidth="6" />
      {/* Black inner ellipse (slightly offset for depth) */}
      <ellipse cx="110" cy="50" rx="97" ry="36" fill="none" stroke="#171717" strokeWidth="3.5" />
      {/* White fill */}
      <ellipse cx="110" cy="50" rx="93" ry="32" fill="white" />
      {/* Durapest wordmark */}
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/97 backdrop-blur-sm shadow-lg">
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
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Why Us", "Areas", "Reviews"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
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
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {["Services", "Why Us", "Areas", "Reviews"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
