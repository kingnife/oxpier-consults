import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Oxpier Consults",
  description:
    "Seven disciplines: Video Production, Websites, Brand Identity, Outbound Systems, Copywriting, Paid Media, and Operational Ops. Each a standalone engagement or part of a unified embedded programme.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="section-light border-b border-[#E5E5E5] px-4 py-20 md:py-28 text-center relative">
        <div className="pointer-events-none absolute inset-0 light-grid" />
        <div className="relative">
        <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-4">
          What We Do
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0F1113] mb-4">
          Our Services
        </h1>
        <p className="text-[#3A3E44] max-w-xl mx-auto text-lg">
          Seven disciplines. Each a standalone engagement or part of a unified embedded programme.
        </p>
        </div>
      </div>

      {/* Full services grid */}
      <ServicesGrid />

      {/* CTA */}
      <div className="section-cream border-t border-[#E5E5E5] py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#0F1113] mb-4">
          Not sure which fits your operation?
        </h2>
        <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
          Book a 30-minute discovery call. We&apos;ll map the right engagement to your situation.
        </p>
        <ButtonLink href="/contact" variant="solid-steel" size="lg" className="gap-2">
          Book Discovery Call <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </main>
  );
}
