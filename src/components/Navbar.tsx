"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Included" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1525]/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:py-6">
        <Link
          href="/"
          className="shrink-0 text-md font-bold uppercase tracking-[0.4em] text-slate-400 transition-colors hover:text-slate-200 sm:text-base"
        >
          AZero
        </Link>

        {/* Desktop: full page order (wraps on mid widths) */}
        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 md:flex lg:gap-x-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-slate-400 transition-colors hover:text-white lg:text-sm"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 active:bg-blue-700 lg:px-5"
          >
            Book a Free Call
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-1 border-t border-slate-800 bg-[#0d1525]/95 px-6 py-4 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg py-2.5 text-base font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-2 w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
