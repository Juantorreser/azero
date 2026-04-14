export function BookingSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d1525]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Booking UI mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-10 scale-90"></div>
            <div className="relative bg-slate-900 rounded-3xl shadow-2xl shadow-black/50 border border-slate-800 overflow-hidden">
              {/* Header */}
              <div className="bg-indigo-600 px-7 py-5">
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">
                  Book an Appointment
                </p>
                <h3 className="text-white text-xl font-bold">Mike&apos;s Barbershop</h3>
                <p className="text-indigo-200 text-sm mt-0.5">Select a date and time below</p>
              </div>

              <div className="p-6">
                {/* Calendar mock */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    April 2026
                  </p>
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d} className="text-xs text-slate-600 font-semibold py-1">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={`empty-${i}`} className="py-2"></div>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(
                      (day) => (
                        <button
                          key={day}
                          className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                            day === 14
                              ? "bg-indigo-600 text-white shadow-sm"
                              : day < 7
                              ? "text-zinc-700 cursor-not-allowed"
                              : "text-slate-400 hover:bg-slate-800 hover:text-indigo-400"
                          }`}
                        >
                          {day}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Available times
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map(
                      (time, i) => (
                        <button
                          key={time}
                          className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                            i === 2
                              ? "bg-indigo-600 text-white border-indigo-600"
                              : "border-slate-700 text-slate-400 hover:border-indigo-600/60 hover:text-indigo-400 hover:bg-indigo-950/30"
                          }`}
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <button className="mt-5 w-full bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Booking Feature
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Let clients book{" "}
              <span className="text-indigo-400">instantly</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Stop going back and forth over text and calls. With the Booking
              plan, visitors can schedule appointments directly from your
              website — any time of day.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Clients pick a date and time that works for them",
                "You get notified instantly via email",
                "Automatic reminders reduce no-shows",
                "Syncs with your existing calendar",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-950/60 border border-green-900/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-950/50"
            >
              Add Booking to Your Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
