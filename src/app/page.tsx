import React from "react";
import { Hero } from "@/components/sections/hero";
import { AboutStatement } from "@/components/sections/about-statement";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { ServiceCard } from "@/components/ui/service-card";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Teaser: first 3 services only
const SERVICES_PREVIEW = [
  { id: "01", title: "Video Production", features: ["Brand Films", "Testimonials", "Commercials"] },
  { id: "02", title: "Websites", features: ["UX/UI Design", "Next.js Development", "SEO Architecture"] },
  { id: "03", title: "Brand Identity", features: ["Logo Systems", "Typography", "Visual Guidelines"] },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* About Statement */}
      <AboutStatement />

      {/* Services preview (3 cards) */}
      <section className="bg-[#0F1113] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-3">
                Our Disciplines
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">
                Seven ways we move <br className="hidden md:block" />your business forward.
              </h2>
            </div>
            <ButtonLink href="/services" variant="outline" size="md" className="shrink-0 gap-2">
              All 7 Services <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map((s) => (
              <ServiceCard key={s.id} id={s.id} title={s.title} features={s.features} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Bottom CTA strip */}
      <section className="bg-[#0F1113] py-20 px-4 border-t border-[#2A2D31]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871]">
            Ready to move?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">
            Execution without drift starts here.
          </h2>
          <p className="text-[#ECEDEF]/60 max-w-xl mx-auto">
            Tell us about your operation and we&apos;ll respond within 24 hours with a proposed engagement structure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <ButtonLink href="/contact" variant="solid-steel" size="lg" className="w-full sm:w-auto gap-2">
              Deploy a Team <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <ButtonLink href="/careers" variant="outline" size="lg" className="w-full sm:w-auto">
              Join the Pipeline
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
