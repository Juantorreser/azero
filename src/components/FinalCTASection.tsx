export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d1525]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-10"></div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Get Started Today
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to have your website{" "}
            <span className="text-indigo-400">fully managed?</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your business and we&apos;ll show you exactly what your
            landing page could look like — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-indigo-500 active:bg-indigo-700 transition-all shadow-xl shadow-blue-950/60 hover:shadow-indigo-500/20"
            >
              See Your Page Idea
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-300 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all"
            >
              View Pricing
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {[
              "No upfront cost",
              "Live in 5 business days",
              "Cancel anytime",
              "Everything managed for you",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
