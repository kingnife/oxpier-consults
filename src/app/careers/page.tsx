import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight, Briefcase, Zap, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Tracks & Placements | Oxpier Consults",
  description:
    "Join the Oxpier talent pool as an EA, apply for internal agency roles, or enrol in a 6-month operational internship. No vanity titles. Just work that matters.",
};

const TRACKS = [
  {
    track: "Track 01",
    title: "Join the Talent Pool",
    icon: Briefcase,
    desc: "For experienced Virtual and Executive Assistants wanting long-term placements with US/Canada clients.",
    bullets: [
      "Minimum 2 years EA or VA experience",
      "Strong written communication (English)",
      "Proficiency in Notion, ClickUp, or Asana",
      "Availability for GMT-5 / PST overlap hours",
    ],
    cta: "Apply to Talent Pool",
  },
  {
    track: "Track 02",
    title: "Work at Oxpier",
    icon: Zap,
    desc: "Internal agency roles for Outbound Campaign Managers, Copywriters, and List Researchers.",
    bullets: [
      "Experience with cold email or LinkedIn outbound",
      "Comfortable writing B2B copy and sequences",
      "Data-driven mindset — you measure everything",
      "Remote-first, async communication skills",
    ],
    cta: "Apply for Agency Roles",
  },
  {
    track: "Track 03",
    title: "Oxpier Internships",
    icon: GraduationCap,
    desc: "6-month remote programs to learn B2B lead generation. Stipends based on demonstrated value.",
    bullets: [
      "Open to graduates and career-switchers",
      "Structured 6-month learning curriculum",
      "Stipend increases with performance milestones",
      "Strong performers considered for full-time roles",
    ],
    cta: "Apply for Internship",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-[#2A2D31] overflow-hidden text-center bg-[#0F1113]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/12 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#5B7C9C]">
            Open Tracks
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Operational Career Tracks
          </h1>
          <p className="text-[#ECEDEF]/75 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            No office politics. No vanity titles. Just work that matters.
          </p>
        </div>
      </div>

      {/* Track cards */}
      <section className="bg-[#0F1113] py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {TRACKS.map(({ track, title, icon: Icon, desc, bullets, cta }) => (
            <div
              key={track}
              className="bg-[#16191C] border border-[#2A2D31] rounded-2xl p-8 flex flex-col group hover:border-[#3E5871] transition-all hover:shadow-[0_8px_32px_rgba(62,88,113,0.12)]"
            >
              {/* Track number */}
              <span className="text-xs font-bold tracking-widest uppercase text-[#3E5871] mb-6 font-sans">
                {track}
              </span>

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#3E5871]/15 border border-[#3E5871]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#3E5871]" />
                </div>
                <h2 className="text-xl font-serif font-semibold text-white">{title}</h2>
              </div>

              {/* Description */}
              <p className="text-[#ECEDEF]/65 text-sm leading-relaxed mb-6">{desc}</p>

              {/* Bullet requirements */}
              <ul className="space-y-2.5 mb-8 flex-grow">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#ECEDEF]/70">
                    <span className="text-[#3E5871] mt-0.5 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <ButtonLink
                href="/contact"
                variant="outline"
                size="md"
                className="w-full justify-center gap-2 group-hover:border-[#3E5871] group-hover:text-white"
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      {/* Culture strip */}
      <div className="bg-[#16191C] border-t border-[#2A2D31] py-20 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          {[
            { stat: "100%", label: "Remote Placements" },
            { stat: "< 2 wks", label: "Onboarding Time" },
            { stat: "4 Continents", label: "Where our operators work from" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-4xl font-serif font-semibold text-white mb-2">{stat}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-[#A7AAAD]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
