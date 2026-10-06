import type { Metadata } from "next";
import TeamShowcase from "@/components/ui/team-showcase";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Operators | Oxpier Consults",
  description:
    "Meet the internal minds structuring workflows, managing campaigns, and overseeing client placements at Oxpier Consults.",
};

export default function OperatorsPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-[#2A2D31] overflow-hidden text-center bg-[#0F1113]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/12 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            The People
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Meet the Operators
          </h1>
          <p className="text-[#ECEDEF]/75 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
            The internal minds structuring workflows, managing campaigns, and overseeing client placements.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <section className="bg-[#0F1113] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <TeamShowcase />
        </div>
      </section>

      {/* Join CTA */}
      <div className="bg-[#16191C] border-t border-[#2A2D31] py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
          Want to join the operator pool?
        </h2>
        <p className="text-[#A7AAAD] mb-8 max-w-md mx-auto text-sm leading-relaxed">
          We&apos;re always looking for high-precision operators. Explore the open tracks.
        </p>
        <ButtonLink href="/careers" variant="solid-steel" size="lg" className="gap-2">
          See Open Tracks <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </main>
  );
}
