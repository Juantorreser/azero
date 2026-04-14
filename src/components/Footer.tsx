export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070d1a] text-slate-500">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              AZero
            </p>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Websites for small businesses, fully managed.
            </h2>
            <p className="max-w-md text-sm leading-relaxed">
              Custom landing pages, hosting, and updates on a simple monthly plan.
              <span className="text-slate-400"> $0 upfront cost — </span>
              we build it, you run your business.
            </p>
          </div>

          {/* On this page — same order as the main story */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              On this page
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "The problem", href: "#problem" },
                { label: "The solution", href: "#solution" },
                { label: "How it works", href: "#how-it-works" },
                { label: "What's included", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-slate-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Plans
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Starter", price: "$39/mo", href: "#pricing" },
                { name: "Premium", price: "$69/mo", href: "#pricing" },
                { name: "Booking", price: "$99/mo", href: "#pricing" },
              ].map((plan) => (
                <li key={plan.name}>
                  <a href={plan.href} className="transition-colors hover:text-slate-200">
                    <span className="text-slate-300">{plan.name}</span>
                    <span className="text-slate-600"> — </span>
                    {plan.price}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-600">
              Questions?{" "}
              <a href="#contact" className="text-slate-400 underline-offset-2 hover:text-slate-200 hover:underline">
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs sm:flex-row sm:text-sm">
          <p>© {new Date().getFullYear()} AZero. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
