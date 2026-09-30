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
      <div className="section-light border-b border-[#E5E5E5] px-4 py-20 md:py-28 text-center relative">
        <div className="pointer-events-none absolute inset-0 light-grid" />
        <div className="relative">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-4">
            The People
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0F1113] mb-4">
            Meet the Operators
          </h1>
          <p className="text-[#3A3E44] max-w-2xl mx-auto text-lg">
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
      <div className="section-cream border-t border-[#E5E5E5] py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#0F1113] mb-4">
          Want to join the operator pool?
        </h2>
        <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
          We&apos;re always looking for high-precision operators. Explore the open tracks.
        </p>
        <ButtonLink href="/careers" variant="solid-steel" size="lg" className="gap-2">
          See Open Tracks <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </main>
  );
}
