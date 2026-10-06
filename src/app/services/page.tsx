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
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-[#2A2D31] overflow-hidden text-center bg-[#0F1113]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/12 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Our Services &amp; Disciplines
          </h1>
          <p className="text-[#ECEDEF]/75 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            Seven disciplines. Each a standalone engagement or part of a unified embedded programme.
          </p>
        </div>
      </div>

      {/* Full services grid */}
      <ServicesGrid />

      {/* CTA */}
      <div className="bg-[#16191C] border-t border-[#2A2D31] py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
          Not sure which fits your operation?
        </h2>
        <p className="text-[#A7AAAD] mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Book a 30-minute discovery call. We&apos;ll map the right engagement to your situation.
        </p>
        <ButtonLink href="/contact" variant="solid-steel" size="lg" className="gap-2">
          Book Discovery Call <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </main>
  );
}
