const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Outdated or slow websites",
    description:
      "Most small business sites are years old, load slowly on mobile, and hurt your reputation before you even get a chance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: "No clear call-to-action",
    description:
      "Visitors land on your page but don't know what to do next. No button, no form, no direction — just a missed opportunity.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    title: "Visitors leave without contacting",
    description:
      "No follow-up, no capture, no conversion. People browse your site and leave — you never hear from them again.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No website at all",
    description:
      "You're invisible online. When a potential client searches for your service, they find your competitor — not you.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Most websites don&apos;t bring you clients
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            If you have a website that&apos;s hard to use, unclear, or outdated — it&apos;s
            costing you business every single day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-red-950/50 text-red-400 border border-red-900/40 rounded-xl flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-base leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
