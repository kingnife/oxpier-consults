"use client";

import React, { useState, useEffect } from "react";
import { OxpierLogo } from "./logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#242424] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Oxpier Consults Home">
            <OxpierLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <a
              href="#services"
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#6B6B6B] hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#operators"
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#6B6B6B] hover:text-white transition-colors"
            >
              The Operators
            </a>
            <a
              href="#careers"
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#6B6B6B] hover:text-white transition-colors"
            >
              Careers &amp; Tracks
            </a>
            <a
              href="#case-study"
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#6B6B6B] hover:text-white transition-colors"
            >
              Results
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#careers"
              className="btn-ghost px-3.5 py-2 text-xs font-sans uppercase tracking-wider rounded"
            >
              Join Talent Pool
            </a>
            <a
              href="#contact"
              className="btn-solid-steel px-4 py-2 text-xs font-sans uppercase tracking-wider rounded inline-flex items-center gap-1.5"
            >
              Deploy Team
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6B6B6B] hover:text-white rounded border border-[#242424] bg-[#0F0F0F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0F0F0F] border border-[#242424] rounded flex flex-col gap-3 animate-fade-in">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#F2F2F2] py-2 border-b border-[#242424]"
            >
              Services
            </a>
            <a
              href="#operators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#F2F2F2] py-2 border-b border-[#242424]"
            >
              The Operators
            </a>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#F2F2F2] py-2 border-b border-[#242424]"
            >
              Careers &amp; Tracks
            </a>
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#F2F2F2] py-2 border-b border-[#242424]"
            >
              Results
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-solid-steel text-center py-2.5 text-xs uppercase tracking-wider rounded"
              >
                Deploy Team
              </a>
              <a
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-outline text-center py-2.5 text-xs uppercase tracking-wider rounded"
              >
                Join Talent Pool
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
