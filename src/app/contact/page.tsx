import type { Metadata } from "next";
import { ActionFunnel } from "@/components/ui/action-funnel";

export const metadata: Metadata = {
  title: "Contact | Oxpier Consults",
  description:
    "Tell us about your operation. Submit a Founder Operational Audit request or apply to the talent pool. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-[#2A2D31] overflow-hidden text-center bg-[#0F1113]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/12 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            Get Started
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Deploy Your Team
          </h1>
          <p className="text-[#ECEDEF]/75 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            Tell us about your operation. We respond within 24 hours with a proposed engagement structure.
          </p>
        </div>
      </div>

      {/* Action Funnel */}
      <div className="bg-[#0F1113] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ActionFunnel />
        </div>
      </div>

      {/* Contact details strip */}
      <div className="bg-[#16191C] border-t border-[#2A2D31] py-16 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Response Time", value: "< 24 hours" },
            { label: "Engagement Start", value: "2–3 weeks" },
            { label: "Client Locations", value: "US · CA · UK" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-mono uppercase tracking-widest text-[#5B7C9C] mb-2 font-semibold">
                {label}
              </p>
              <p className="text-3xl font-serif font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
