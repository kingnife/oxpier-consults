"use client";

import React, { useState, useEffect } from "react";
import { OxpierLogo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Results" },
  { href: "/operators", label: "Operators" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1113]/92 backdrop-blur-md border-b border-[#2A2D31] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Oxpier Consults — home">
          <OxpierLogo size="md" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-sans uppercase tracking-[0.12em] text-[#A7AAAD] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ButtonLink href="/careers" variant="ghost" size="sm">
            Join Talent Pool
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="solid-steel"
            size="sm"
            className="gap-1.5"
          >
            Deploy Team
            <ArrowUpRight className="w-3.5 h-3.5" />
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-[#A7AAAD] hover:text-white border border-[#2A2D31] bg-[#16191C] rounded"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mx-4 mt-2 p-5 bg-[#16191C] border border-[#2A2D31] rounded-xl flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-xs font-sans uppercase tracking-[0.14em] text-[#ECEDEF] py-3 border-b border-[#2A2D31] last:border-none hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <ButtonLink
              href="/contact"
              variant="solid-steel"
              size="md"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Deploy Team <ArrowUpRight className="w-3.5 h-3.5" />
            </ButtonLink>
            <ButtonLink
              href="/careers"
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Join Talent Pool
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
