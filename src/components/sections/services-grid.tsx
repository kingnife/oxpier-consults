"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/ui/service-card";

const SERVICES = [
  {
    id: "01",
    title: "Video Production",
    features: ["Brand Films", "Testimonials", "Commercials"],
  },
  {
    id: "02",
    title: "Websites",
    features: ["UX/UI Design", "Next.js Development", "SEO Architecture"],
  },
  {
    id: "03",
    title: "Brand Identity",
    features: ["Logo Systems", "Typography", "Visual Guidelines"],
  },
  {
    id: "04",
    title: "Outbound Systems",
    features: ["Cold Email", "CRM Architecture", "Lead Scoring"],
  },
  {
    id: "05",
    title: "Copywriting",
    features: ["Landing Pages", "Email Sequences", "Ad Creatives"],
  },
  {
    id: "06",
    title: "Paid Media",
    features: ["Google Ads", "LinkedIn Ads", "Retargeting"],
  },
  {
    id: "07",
    title: "Operational Ops",
    features: ["Workflow Automation", "EA Placements", "Data Structuring"],
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-[#0F1113] py-24 md:py-32 px-4"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-3">
              Our Disciplines
            </p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-serif font-semibold text-white"
            >
              Seven ways we move
              <br className="hidden md:block" /> your business forward.
            </h2>
          </div>
          <p className="text-[#ECEDEF]/60 max-w-xs text-sm leading-relaxed md:text-right">
            Each discipline is a standalone engagement or part of a unified embedded programme.
          </p>
        </div>

        {/* Grid: 1-col → 2-col → 3-col → 4-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              features={service.features}
              // Card 07 spans 2 cols on XL to fill the 4-column row cleanly
              className={cn(index === 6 ? "xl:col-span-2" : "")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
