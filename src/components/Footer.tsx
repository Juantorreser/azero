export function Footer() {
  return (
    <footer className="bg-[#080e1a] border-t border-slate-800/80 text-slate-500">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/40">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white text-lg font-bold">AZero</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              We build, host, and manage simple landing pages for small
              businesses — no upfront cost, fully done for you.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
              <span className="text-green-400 font-medium">Accepting new clients</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Navigation
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Booking Feature", href: "#contact" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <p className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
              Plans
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Starter — $39/mo",
                "Premium — $69/mo",
                "Booking — $99/mo",
              ].map((plan) => (
                <li key={plan}>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {plan}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} AZero. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
