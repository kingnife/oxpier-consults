import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Oxpier Consults",
  description:
    "Live engagement deliverables and verified outbound metrics from Oxpier Consults client deployments.",
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="section-light border-b border-[#E5E5E5] px-4 py-20 md:py-28 text-center relative">
        <div className="pointer-events-none absolute inset-0 light-grid" />
        <div className="relative">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-4">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0F1113] mb-4">
            Case Studies
          </h1>
          <p className="text-[#3A3E44] max-w-xl mx-auto text-lg">
            Live engagement deliverables and verified outbound metrics.
          </p>
        </div>
      </div>

      {/* Project showcase */}
      <section className="bg-[#0F1113] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ProjectShowcase />
        </div>
      </section>

      {/* CTA */}
      <div className="section-cream border-t border-[#E5E5E5] py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#0F1113] mb-4">
          Want results like these?
        </h2>
        <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
          Submit your Founder Operational Audit request and we&apos;ll scope the right engagement.
        </p>
        <ButtonLink href="/contact" variant="solid-steel" size="lg" className="gap-2">
          Get Started <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </main>
  );
}
