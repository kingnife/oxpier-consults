"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function AboutStatement() {
  return (
    <section
      id="about"
      className="bg-[#16191C] relative px-4 py-24 md:py-32 border-y border-[#2A2D31]"
      aria-labelledby="about-heading"
    >
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Left */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            Who We Are
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-white leading-tight"
          >
            Execution without ego.
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#5B7C9C] hover:text-white transition-colors mt-4"
          >
            Work with us <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right */}
        <div className="md:col-span-3 space-y-6 text-[#ECEDEF]/75 text-base leading-relaxed">
          <p>
            Oxpier Consults is a B2B operational agency built for founders who are done theorising
            and need things to{" "}
            <strong className="text-white font-semibold">actually move</strong>. We don&apos;t
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
          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#2A2D31]">
            {[
              { label: "Anchored in Excellence", desc: "Every output held to a higher standard." },
              { label: "Execution Without Drift", desc: "No ambiguity. No dropped threads." },
              { label: "Embedded, Not External", desc: "We work inside your operation." },
            ].map(({ label, desc }) => (
              <div key={label}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#5B7C9C] mb-1">
                  {label}
                </p>
                <p className="text-sm text-[#A7AAAD]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
