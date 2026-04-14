const plans = [
  {
    name: "Starter",
    price: "$39",
    tagline: "Perfect for getting online fast",
    features: [
      "1-page landing site",
      "Contact form",
      "Mobile optimized",
      "Hosting included",
      "1 edit/month",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$69",
    tagline: "The most popular for local businesses",
    features: [
      "Everything in Starter",
      "2-section page (About + Services)",
      "Google Maps embed",
      "Click-to-call button",
      "3 edits/month",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Booking",
    price: "$99",
    tagline: "Built to fill your calendar",
    features: [
      "Everything in Premium",
      "Online booking system",
      "Automated reminders",
      "Calendar integration",
      "5 edits/month",
      "Chat support",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            All plans include setup, hosting, and ongoing management. No
            contracts, cancel anytime.
          </p>
          <div className="inline-flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-full px-5 py-2.5 text-sm font-medium text-slate-400">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No upfront cost
            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Monthly subscription
            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-200 ${
                plan.popular
                  ? "bg-indigo-600 shadow-2xl shadow-indigo-950/60 scale-105 border border-indigo-500/50"
                  : "bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 hover:-translate-y-0.5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
              )}

              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 flex-1">
                <p
                  className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    plan.popular ? "text-indigo-200" : "text-indigo-400"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.popular ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.popular ? "text-indigo-200" : "text-slate-500"
                    }`}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-indigo-100" : "text-slate-500"
                  }`}
                >
                  {plan.tagline}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.popular ? "text-indigo-200" : "text-indigo-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.popular ? "text-indigo-50" : "text-slate-400"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Not sure which plan is right for you?{" "}
          <a href="#contact" className="text-indigo-400 font-medium hover:text-indigo-300 hover:underline">
            Send us a message
          </a>{" "}
          and we&apos;ll help you choose.
        </p>
      </div>
    </section>
  );
}
