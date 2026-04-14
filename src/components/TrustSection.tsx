const testimonials = [
  {
    quote:
      "I didn't have a website at all — I was losing clients to competitors. WAAS built me a page in less than a week and now I get calls from people who found me online.",
    name: "Carlos M.",
    role: "Independent Contractor",
    initial: "C",
    color: "bg-indigo-950/60 text-indigo-400 border border-indigo-900/40",
  },
  {
    quote:
      "I'm not tech-savvy at all. This was the easiest thing I've ever done for my business. They handled everything and my booking calendar is filling up.",
    name: "Jasmine T.",
    role: "Personal Trainer",
    initial: "J",
    color: "bg-purple-950/60 text-purple-400 border border-purple-900/40",
  },
  {
    quote:
      "I had an old website that looked terrible on mobile. Within days I had a clean, professional page. My clients keep complimenting it.",
    name: "David R.",
    role: "Barber Shop Owner",
    initial: "D",
    color: "bg-blue-950/60 text-blue-400 border border-blue-900/40",
  },
];

const trustStats = [
  { value: "5 days", label: "Average launch time" },
  { value: "100%", label: "Mobile-optimized pages" },
  { value: "24hr", label: "Edit turnaround time" },
  { value: "0", label: "Upfront cost" },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Why WAAS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for real results, not just design
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;re focused on one thing: helping small businesses get more
            clients online. Everything we build is designed to convert.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-indigo-400 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-7 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-400 leading-relaxed flex-1 mb-6 text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust statements */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-indigo-950/60 border border-indigo-900/40 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Built for real results, not just design</h3>
              <p className="text-sm text-slate-500">
                Every decision — from layout to copy to CTA placement — is made
                to turn visitors into leads. Pretty isn&apos;t enough.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-indigo-950/60 border border-indigo-900/40 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Focused on helping small businesses grow</h3>
              <p className="text-sm text-slate-500">
                We work exclusively with local and small business owners — we
                understand your challenges and what actually drives clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
