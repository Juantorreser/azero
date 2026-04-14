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

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email us",
                  value: "hello@waas.co",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "Message us directly",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-950/60 border border-indigo-900/40 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
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
