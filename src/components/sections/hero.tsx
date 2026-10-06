"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="bg-[#0F1113] relative px-4 pt-36 pb-28 md:pt-48 md:pb-36 overflow-hidden border-b border-[#2A2D31]"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(62,88,113,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center space-y-7 z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16191C] border border-[#2A2D31]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B7C9C] animate-pulse" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5B7C9C]">
            B2B Growth Agency — Operational Precision
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-semibold tracking-tight text-white leading-[1.06]">
          Your go-to for{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #5B7C9C 0%, #A7AAAD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            effective
          </span>{" "}
          marketing.
        </h1>

        {/* Sub-copy */}
        <p className="text-lg md:text-xl text-[#ECEDEF]/75 max-w-2xl mx-auto leading-relaxed">
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
            className="w-full sm:w-auto"
            aria-label="Book a discovery call"
          >
            Book Discovery Call
            <ArrowUpRight className="w-4 h-4" />
          </ButtonLink>
        </div>

        {/* Social proof strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-sans text-[#A7AAAD] uppercase tracking-widest">
          <span>7 Active Deployments</span>
          <span className="hidden sm:block w-px h-4 bg-[#2A2D31]" />
          <span>4 Countries</span>
          <span className="hidden sm:block w-px h-4 bg-[#2A2D31]" />
          <span>US / Canada / UK Clients</span>
        </div>
      </div>
    </section>
  );
}
