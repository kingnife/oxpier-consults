import type { Metadata } from "next";
import { ContentHub } from "@/components/sections/content-hub";

export const metadata: Metadata = {
  title: "Journal | Oxpier Consults",
  description:
    "Exact insights on operational execution, B2B outbound, and growth — no filler. Plus The Operational Edge podcast.",
};

export default function JournalPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="section-light border-b border-[#E5E5E5] px-4 py-20 md:py-28 text-center relative">
        <div className="pointer-events-none absolute inset-0 light-grid" />
        <div className="relative">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-4">
            The Oxpier Brief
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0F1113] mb-4">
            Journal &amp; Podcast
          </h1>
          <p className="text-[#3A3E44] max-w-xl mx-auto text-lg">
            Exact insights on execution, outbound, and B2B growth. No filler.
          </p>
        </div>
      </div>

      <ContentHub />
    </main>
  );
}
