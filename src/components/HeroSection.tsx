export function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-hidden bg-[#0d1525]">
      {/* Radial spotlight from bottom center */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,rgba(29,78,216,0.12)_35%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar offset (taller bar) + vertical center in remaining viewport */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pb-10 pt-[var(--header-scroll-offset)] sm:pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-4 md:py-6">
        {/* Single frame: copy + mockups + CTA bar */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shadow-2xl shadow-black/30 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:pt-10 lg:pb-6 xl:px-12 xl:pt-12 xl:pb-7">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* Copy */}
            <div className="space-y-6 text-center lg:col-span-5 lg:pr-4 lg:text-left">
              <h1 className="animate-fade-in-up text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[2.75rem] xl:text-5xl">
                A better way to get clients online.
              </h1>

              <p className="animate-fade-in-up-1 mx-auto max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
                We design and launch your website with{" "}
                <strong className="text-white font-semibold">$0 upfront cost</strong>{" "}
                — and manage everything through a simple monthly plan.
              </p>

              <ul className="animate-fade-in-up-2 mx-auto flex max-w-xl flex-col items-center gap-4 pt-2 text-center text-sm text-slate-500 lg:mx-0 lg:items-start lg:text-left">
                {[
                  { icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Designed to generate calls and bookings" },
                  { icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Fully managed — no technical work needed" },
                  { icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Fast, simple, and built for real results" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                    <span className="text-slate-500 mt-0.5">{item.icon}</span>
                    <span className="leading-snug text-left max-w-[280px] lg:max-w-none">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Device mockups */}
            <div className="relative min-h-[220px] w-full sm:min-h-[260px] lg:col-span-7 lg:min-h-[300px]">
              <div className="animate-fade-in-up-3 relative flex items-end justify-center lg:justify-end pr-0 sm:pr-4 lg:pr-2">
                {/* Laptop mockup */}
                <div className="relative animate-float w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none lg:w-[92%] xl:w-[95%]">
                  <div className="bg-[#111827] rounded-t-2xl border border-slate-700/60 shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="bg-[#1e293b] border-b border-slate-700/60 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 bg-[#0f172a] rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-slate-500 text-center truncate">
                        yourbusiness.com
                      </div>
                    </div>

                    <div className="bg-[#0f172a]">
                      <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded shrink-0" />
                          <div className="h-2 sm:h-2.5 bg-slate-200 rounded w-16 sm:w-24" />
                        </div>
                        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
                          <div className="h-1.5 sm:h-2 bg-slate-600 rounded w-8 sm:w-12" />
                          <div className="h-1.5 sm:h-2 bg-slate-600 rounded w-8 sm:w-12" />
                          <div className="h-5 sm:h-6 bg-blue-600 rounded px-2 sm:px-4 w-14 sm:w-20" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden h-[140px] sm:h-[160px] lg:h-[180px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-slate-700/50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-slate-600/50 flex items-center justify-center">
                              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="relative px-3 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4">
                          <div className="h-3 sm:h-4 bg-white rounded w-36 sm:w-48 mb-1.5 sm:mb-2" />
                          <div className="h-2 sm:h-3 bg-white/70 rounded w-40 sm:w-56 mb-3 sm:mb-4" />
                          <div className="flex gap-2">
                            <div className="h-6 sm:h-7 bg-blue-600 rounded px-2 sm:px-3 w-24 sm:w-32 flex items-center justify-center">
                              <div className="h-1 sm:h-1.5 bg-white/80 rounded w-14 sm:w-20" />
                            </div>
                            <div className="h-6 sm:h-7 border border-slate-500 rounded px-2 sm:px-3 w-16 sm:w-24 flex items-center justify-center">
                              <div className="h-1 sm:h-1.5 bg-slate-400 rounded w-10 sm:w-14" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="h-2.5 sm:h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-sm mx-1" />
                    <div className="h-1.5 sm:h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg shadow-xl shadow-black/40" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 sm:h-1 bg-slate-600/30 rounded-full blur-sm" />
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="absolute -right-1 sm:right-2 md:right-4 lg:right-0 bottom-1 w-[88px] sm:w-[104px] md:w-[118px]">
                  <div
                    className="bg-[#111827] rounded-2xl sm:rounded-3xl border border-slate-700/60 shadow-2xl shadow-black/60 overflow-hidden"
                    style={{ animation: "floatUp 5s ease-in-out 0.8s infinite" }}
                  >
                    <div className="flex justify-center pt-1.5 pb-0.5 sm:pt-2 sm:pb-1 bg-[#1e293b]">
                      <div className="w-10 sm:w-14 h-2 sm:h-3 bg-[#0f172a] rounded-full" />
                    </div>

                    <div className="bg-[#0f172a] px-1.5 sm:px-2 py-1.5 sm:py-2">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 pb-1 sm:pb-1.5 border-b border-slate-800">
                        <div className="h-1.5 sm:h-2 bg-slate-300 rounded w-12 sm:w-16" />
                        <div className="w-3 h-3 sm:w-4 sm:h-4 flex flex-col justify-center gap-0.5">
                          <div className="h-px bg-slate-500 rounded w-full" />
                          <div className="h-px bg-slate-500 rounded w-3/4" />
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-md sm:rounded-lg p-1.5 sm:p-2 mb-1.5 sm:mb-2">
                        <div className="h-2 sm:h-2.5 bg-slate-200 rounded w-full mb-1 sm:mb-1.5" />
                        <div className="h-1.5 sm:h-2 bg-slate-300/70 rounded w-4/5 mb-2 sm:mb-2.5" />
                        <div className="h-4 sm:h-5 bg-blue-600 rounded w-full" />
                        <div className="h-4 sm:h-5 border border-slate-600 rounded w-full mt-0.5 sm:mt-1" />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5 mb-0.5 sm:mb-1">
                        <div className="h-1 sm:h-1.5 bg-slate-700 rounded w-full" />
                        <div className="h-1 sm:h-1.5 bg-slate-700 rounded w-3/4" />
                        <div className="h-1 sm:h-1.5 bg-slate-800 rounded w-1/2" />
                      </div>
                    </div>

                    <div className="flex justify-center py-1 sm:py-1.5 bg-[#1e293b]">
                      <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-slate-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating icon badges */}
                <div className="absolute left-0 sm:left-2 lg:left-4 bottom-12 sm:bottom-14 lg:bottom-16 flex flex-col gap-2 sm:gap-3">
                  {[
                    <svg key="a" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                    <svg key="b" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                    <svg key="c" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 sm:w-11 sm:h-11 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ animation: `floatUp 5s ease-in-out ${i * 0.4}s infinite` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA bar — tight strip below main row */}
          <div className="animate-fade-in-up-4 mt-6 border-t border-white/[0.08] pt-4 sm:mt-7 sm:pt-5">
            <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex h-11 w-full max-w-[280px] items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-colors hover:bg-blue-500 active:bg-blue-700 sm:w-auto sm:min-w-[200px]"
              >
                Book a Free Call
              </a>
              <a
                href="#problem"
                className="inline-flex h-11 items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium text-slate-400 transition-colors hover:text-white group sm:px-2"
              >
                Why most sites fail
                <svg className="h-4 w-4 shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
