"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Get a Quote</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-6">
              Free Estimate — No Obligation
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Tell us about your property and what needs cleaning. We&apos;ll get back to you within a few hours with a written quote. Same-day service available across the GTA.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                  label: "Phone",
                  value: "(905) 782-6332",
                  href: "tel:+19057826332",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Email",
                  value: "hello@durawash.ca",
                  href: "mailto:hello@durawash.ca",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  ),
                  label: "Location",
                  value: "Toronto, ON & GTA",
                  href: "#areas",
                },
              ].map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-tint text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-brand-dark font-semibold">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Jobs Completed" },
                { value: "5.0 ★", label: "Google Rating" },
                { value: "$2M", label: "Liability Coverage" },
                { value: "100%", label: "Satisfaction Rate" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <p className="text-2xl font-extrabold text-brand-red">{value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-brand-dark font-bold text-xl">Thanks! We&apos;ll be in touch soon.</h3>
                  <p className="text-slate-500">We typically respond within a few hours. We can&apos;t wait to help.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-brand-dark font-bold text-xl mb-1">Request a Free Quote</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-sm font-medium mb-1.5">First name</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-sm font-medium mb-1.5">Last name</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">Phone number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(416) 000-0000"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">Email address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">Service needed</label>
                    <select
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition bg-white"
                    >
                      <option value="">Select a service…</option>
                      <option>House & Siding Wash</option>
                      <option>Driveway & Walkway</option>
                      <option>Deck & Patio Cleaning</option>
                      <option>Roof Soft Washing</option>
                      <option>Commercial Property</option>
                      <option>Fence & Gate Cleaning</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 text-sm font-medium mb-1.5">Tell us more (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Size of area, address, any special requirements…"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-xl text-base transition-colors shadow-lg shadow-brand-red/20"
                  >
                    Send My Free Quote Request
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    No spam. We only use your info to get back to you with a quote.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
