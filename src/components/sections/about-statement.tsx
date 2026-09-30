"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function AboutStatement() {
  return (
    <section
      id="about"
      className="section-cream relative px-4 py-24 md:py-32 border-y border-[#E5E5E5]"
      aria-labelledby="about-heading"
    >
      {/* Light grid texture */}
      <div className="pointer-events-none absolute inset-0 light-grid" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Left */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871]">
            Who We Are
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-[#0F1113] leading-tight"
          >
            Execution without ego.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#3E5871] hover:text-[#0F1113] transition-colors mt-4"
          >
            Work with us <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right */}
        <div className="md:col-span-3 space-y-6 text-[#3A3E44] text-base leading-relaxed">
          <p>
            Oxpier Consults is a B2B operational agency built for founders who are done theorising
            and need things to{" "}
            <strong className="text-[#0F1113] font-semibold">actually move</strong>. We don&apos;t
            advise from the sidelines — we embed inside your operation and get the work done.
          </p>
          <p>
            Our operators have run executive functions for Series A/B companies across the US,
            Canada, and the UK. We bring the same disciplined playbook to outbound pipeline,
            executive coordination, and systems architecture — deployed across your team in weeks,
            not quarters.
          </p>
          <p>
            We are not a consultancy. We are an execution partner. The difference is in the
            deliverables.
          </p>

          {/* Three principles */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#E0E0E0]">
            {[
              { label: "Anchored in Excellence", desc: "Every output held to a higher standard." },
              { label: "Execution Without Drift", desc: "No ambiguity. No dropped threads." },
              { label: "Embedded, Not External", desc: "We work inside your operation." },
            ].map(({ label, desc }) => (
              <div key={label}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#3E5871] mb-1">
                  {label}
                </p>
                <p className="text-sm text-[#6B6B6B]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
