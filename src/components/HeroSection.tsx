export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d1525]">
      {/* Radial spotlight from bottom center */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,rgba(29,78,216,0.12)_35%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        {/* Subtle star-field dots */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top centered copy */}
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-16 text-center flex-1 flex flex-col items-center justify-center">
          {/* Brand label */}
          <p className="animate-fade-in-up text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">
            AZero
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up-1 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-3xl">
            A better way to get clients online.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up-2 text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            We design and launch your website with{" "}
            <strong className="text-white font-semibold">no upfront cost</strong>{" "}
            — and manage everything through a simple monthly plan.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up-3 flex flex-col sm:flex-row items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-500 active:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 hover:shadow-blue-500/30 min-w-[200px]"
            >
              Book a Free Call
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-white transition-colors group"
            >
              See How It Works
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Designed to generate calls and bookings",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Fully managed — no technical work needed",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Fast, simple, and built for real results",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-slate-500">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Device mockups */}
        <div className="animate-fade-in-up-5 relative max-w-5xl mx-auto px-6 pb-0 w-full">
          <div className="relative flex items-end justify-center">

            {/* Laptop mockup */}
            <div className="relative animate-float w-full max-w-2xl">
              {/* Screen */}
              <div className="bg-[#111827] rounded-t-2xl border border-slate-700/60 shadow-2xl shadow-black/60 overflow-hidden">
                {/* Browser bar */}
                <div className="bg-[#1e293b] border-b border-slate-700/60 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="flex-1 bg-[#0f172a] rounded px-3 py-1 text-xs text-slate-500 text-center">
                    yourbusiness.com
                  </div>
                </div>

                {/* Website content */}
                <div className="bg-[#0f172a]">
                  {/* Site navbar */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded"></div>
                      <div className="h-2.5 bg-slate-200 rounded w-24"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 bg-slate-600 rounded w-12"></div>
                      <div className="h-2 bg-slate-600 rounded w-12"></div>
                      <div className="h-2 bg-slate-600 rounded w-12"></div>
                      <div className="h-6 bg-blue-600 rounded px-4 w-20"></div>
                    </div>
                  </div>

                  {/* Hero area */}
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    {/* Background image simulation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent"></div>
                    {/* Decorative image placeholder blocks */}
                    <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-slate-700/50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-slate-600/50 flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Text overlay */}
                    <div className="relative px-5 pt-5 pb-4">
                      <div className="h-4 bg-white rounded w-48 mb-2"></div>
                      <div className="h-3 bg-white/70 rounded w-56 mb-4"></div>
                      <div className="flex gap-2">
                        <div className="h-7 bg-blue-600 rounded px-3 w-32 flex items-center justify-center">
                          <div className="h-1.5 bg-white/80 rounded w-20"></div>
                        </div>
                        <div className="h-7 border border-slate-500 rounded px-3 w-24 flex items-center justify-center">
                          <div className="h-1.5 bg-slate-400 rounded w-14"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div className="relative">
                <div className="h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-sm mx-1"></div>
                <div className="h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg mx-0 shadow-xl shadow-black/40"></div>
                {/* Keyboard reflection */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600/30 rounded-full blur-sm"></div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="absolute right-4 md:right-8 bottom-2 w-28 md:w-36">
              <div
                className="bg-[#111827] rounded-3xl border border-slate-700/60 shadow-2xl shadow-black/60 overflow-hidden"
                style={{ animation: "floatUp 5s ease-in-out 0.8s infinite" }}
              >
                {/* Notch area */}
                <div className="flex justify-center pt-2 pb-1 bg-[#1e293b]">
                  <div className="w-14 h-3 bg-[#0f172a] rounded-full"></div>
                </div>

                {/* Phone screen content */}
                <div className="bg-[#0f172a] px-2 py-2">
                  {/* Site navbar */}
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div className="h-2 bg-slate-300 rounded w-16"></div>
                    <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
                      <div className="h-0.5 bg-slate-500 rounded w-full"></div>
                      <div className="h-0.5 bg-slate-500 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="bg-slate-800/50 rounded-lg p-2 mb-2">
                    <div className="h-2.5 bg-slate-200 rounded w-full mb-1.5"></div>
                    <div className="h-2 bg-slate-300/70 rounded w-4/5 mb-2.5"></div>
                    <div className="flex gap-1">
                      <div className="h-5 bg-blue-600 rounded w-full"></div>
                    </div>
                    <div className="h-5 border border-slate-600 rounded w-full mt-1"></div>
                  </div>

                  <div className="space-y-1.5 mb-1">
                    <div className="h-1.5 bg-slate-700 rounded w-full"></div>
                    <div className="h-1.5 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-1.5 bg-slate-800 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-1.5 bg-[#1e293b]">
                  <div className="w-10 h-1 bg-slate-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating icon badges */}
            <div className="absolute left-4 md:left-8 bottom-16 flex flex-col gap-3">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="w-11 h-11 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ animation: `floatUp 5s ease-in-out ${i * 0.4}s infinite` }}
                >
                  {badge.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
