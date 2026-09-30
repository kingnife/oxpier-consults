"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="section-light relative px-4 pt-36 pb-28 md:pt-48 md:pb-36 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle light grid texture */}
      <div className="pointer-events-none absolute inset-0 light-grid" />

      {/* Very subtle blue radial tint at centre */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(62,88,113,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center space-y-7">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F1113]/[0.06] border border-[#0F1113]/15">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E5871] animate-pulse" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3E5871]">
            B2B Growth Agency — Operational Precision
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-semibold tracking-tight text-[#0F1113] leading-[1.06]">
          Your go-to for{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #3E5871 0%, #5B7C9C 60%, #A7AAAD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            effective
          </span>{" "}
          marketing.
        </h1>

        {/* Sub-copy */}
        <p className="text-lg md:text-xl text-[#3A3E44] max-w-2xl mx-auto leading-relaxed">
          We embed operators, outbound pipelines, and execution systems into founder-led teams — so
          your operation runs without drift and your calendar stays full.
        </p>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink
            href="/services"
            variant="solid-steel"
            size="lg"
            className="w-full sm:w-auto"
            aria-label="Explore client systems"
          >
            Explore Client Systems
            <ArrowRight className="w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto btn-outline-dark"
            aria-label="Book a discovery call"
          >
            Book Discovery Call
            <ArrowUpRight className="w-4 h-4" />
          </ButtonLink>
        </div>

        {/* Social proof strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-sans text-[#6B6B6B] uppercase tracking-widest">
          <span>7 Active Deployments</span>
          <span className="hidden sm:block w-px h-4 bg-[#D4D4D4]" />
          <span>4 Countries</span>
          <span className="hidden sm:block w-px h-4 bg-[#D4D4D4]" />
          <span>US / Canada / UK Clients</span>
        </div>
      </div>

      {/* Bottom edge fade into dark */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#0F1113]/20" />
    </section>
  );
}
