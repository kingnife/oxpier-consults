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
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-[#2A2D31] overflow-hidden text-center bg-[#0F1113]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/12 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            The Oxpier Brief
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Journal &amp; Insights
          </h1>
          <p className="text-[#ECEDEF]/75 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            Exact insights on execution, outbound, and B2B growth. No filler.
          </p>
        </div>
      </div>

      <ContentHub />
    </main>
  );
}
