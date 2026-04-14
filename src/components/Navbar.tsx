"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/50">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">AZero</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-900/40"
          >
            Book a Free Call
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d1525]/95 backdrop-blur-md border-t border-slate-800 px-6 py-5 flex flex-col gap-4">
          <Link href="#how-it-works" onClick={close} className="text-base font-medium text-slate-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" onClick={close} className="text-base font-medium text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#contact" onClick={close} className="text-base font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="#contact"
            onClick={close}
            className="w-full text-center bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
