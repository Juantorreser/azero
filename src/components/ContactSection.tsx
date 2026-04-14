"use client";

import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="scroll-mt-[var(--header-scroll-offset)] py-20 md:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Let&apos;s build your page
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Fill out the form and we&apos;ll get back to you within 24 hours with
              a concept for your landing page — no commitment, no cost.
            </p>

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-900/40 bg-indigo-950/60 text-indigo-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Email us</p>
                <a
                  href="mailto:jdtorreser@gmail.com"
                  className="text-sm font-semibold text-white transition-colors hover:text-indigo-300"
                >
                  jdtorreser@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                What happens next
              </p>
              <ol className="space-y-2.5">
                {[
                  "We review your info within 24 hours",
                  "We share a concept for your page",
                  "You approve and we build it",
                  "Your site goes live in 5 days",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="w-5 h-5 bg-indigo-600 text-white rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-800/60 rounded-3xl border border-slate-700/60 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-950/60 border border-green-900/40 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  We&apos;ve got your info!
                </h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  Expect to hear from us within 24 hours with a concept for your
                  landing page.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Tell us about your business
                </h3>
                <p className="text-sm text-slate-500 mb-8">
                  Takes less than 2 minutes. We&apos;ll do the rest.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Maria Garcia"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                      Business name
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Maria's Cleaning Services"
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                      Tell us about your business
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What services do you offer? Who are your ideal clients? Any goals or special requests?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl text-base font-semibold hover:bg-indigo-500 active:bg-indigo-700 transition-all shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-2"
                  >
                    See Your Page Idea
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="text-xs text-center text-slate-600">
                    No commitment. We&apos;ll reply within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
