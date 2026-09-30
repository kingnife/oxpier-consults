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
      <div className="section-light border-b border-[#E5E5E5] px-4 py-20 md:py-28 text-center relative">
        <div className="pointer-events-none absolute inset-0 light-grid" />
        <div className="relative">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-4">
            Get Started
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0F1113] mb-4">
            Deploy your team.
          </h1>
          <p className="text-[#3A3E44] max-w-xl mx-auto text-lg">
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
      <div className="section-cream border-t border-[#E5E5E5] py-16 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Response Time", value: "< 24 hours" },
            { label: "Engagement Start", value: "2–3 weeks" },
            { label: "Client Locations", value: "US · CA · UK" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3E5871] mb-1 font-sans">
                {label}
              </p>
              <p className="text-3xl font-serif font-semibold text-[#0F1113]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
