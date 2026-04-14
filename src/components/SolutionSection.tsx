const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No upfront cost",
    description: "Start with zero risk. Pay only your monthly subscription — no setup fees, no hidden charges.",
    color: "bg-green-950/50 text-green-400 border border-green-900/40",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Done-for-you setup",
    description: "Tell us about your business. We handle every detail — copywriting, design, and publishing.",
    color: "bg-indigo-950/50 text-indigo-400 border border-indigo-900/40",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Ongoing management",
    description: "Need an update? We handle it. Your page stays fast, modern, and accurate — always.",
    color: "bg-purple-950/50 text-purple-400 border border-purple-900/40",
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d1525]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              A simpler way to get clients online
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              We provide simple, high-converting landing pages built around one
              goal: getting your phone to ring, your inbox to fill, and your
              calendar to book. Everything is included — design, hosting, edits,
              and support.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/50"
            >
              Get started today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
