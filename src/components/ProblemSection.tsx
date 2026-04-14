const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Outdated or slow websites",
    description: "Slow, dated pages—especially on mobile—erode trust before you ever talk to a lead.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    title: "No clear call-to-action",
    description: "No obvious next step—so visitors leave without booking, calling, or filling a form.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    title: "Visitors leave without contacting",
    description: "Nothing captures the visit—so you never get the name, number, or follow-up.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No website at all",
    description: "You don’t show up in search the way competitors do—so they get the call first.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-[var(--header-scroll-offset)] py-20 md:py-28 bg-slate-900">
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
              className="bg-slate-800/60 rounded-2xl border border-slate-700/60 p-6 text-center transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-900/40 bg-red-950/50 text-red-400">
                {problem.icon}
              </div>
              <h3 className="mb-2 text-base font-bold leading-snug text-white">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
