import React from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { TrainingModules } from "@/components/academy/training-modules";
import { TalentLeaderboard } from "@/components/academy/leaderboard";
import { VettingPipeline } from "@/components/academy/vetting-pipeline";
import { ApplicationForm } from "@/components/academy/application-form";
import { AcademyFAQ } from "@/components/academy/faq";

export const metadata = {
  title: "Oxpier Academy | Join the Pipeline",
  description:
    "Rigorous remote operator training, live performance benchmarks, and direct placement for ambitious virtual assistants and remote operators.",
};

const OPERATOR_STORIES = [
  {
    quote:
      "Before Oxpier, I took random $5 freelance gigs on Upwork. The academy taught me how to manage executive calendars and document complex SOPs. Within two weeks of finishing Cohort 06, I was placed as lead operator for an Austin venture fund at $2,400 monthly.",
    author: "Tariq Adeleke",
    track: "Executive Operator",
    cohort: "Cohort 06 Graduate",
    currentRole: "Lead Operator at Austin Venture Fund",
  },
  {
    quote:
      "The 48-hour simulation drill pushed me hard. It was the first time an agency tested how I think under real pressure rather than looking at my resume. The training on CRM hygiene and Clay workflows made me indispensable from day one.",
    author: "Elena Rostova",
    track: "Pipeline & CRM Specialist",
    cohort: "Cohort 07 Graduate",
    currentRole: "Revenue Ops Lead at B2B Fintech",
  },
  {
    quote:
      "Most courses teach theory. Oxpier gave me broken client spreadsheets and overlapping scheduling emergencies to solve in real time. My current founder trusts me to run their entire executive inbox without supervision.",
    author: "Kwame Mensah",
    track: "Systems & SOP Lead",
    cohort: "Cohort 06 Graduate",
    currentRole: "Operations Lead at Cloud Platform",
  },
];

export default function OxpierAcademyPage() {
  return (
    <main className="bg-[#0F1113] text-[#ECEDEF] min-h-screen selection:bg-[#3E5871]/40 selection:text-white">
      {/* ──────────────────────────────────────────────────────────────────────────
          HERO SECTION (Directive 1: H1 MUST be exactly "Join the pipeline")
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden border-b border-[#2A2D31]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3E5871]/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16191C] border border-[#2A2D31] text-xs font-mono text-[#A7AAAD]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cohort 08 Intake Open</span>
              <span className="text-[#3E5871]">•</span>
              <span className="text-[#ECEDEF]">25 Seats Available</span>
            </div>

            {/* H1: Exact wording required by specification */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              Join the pipeline
            </h1>

            {/* Hero Subcopy strictly for talent */}
            <p className="text-lg sm:text-xl text-[#ECEDEF]/80 max-w-2xl mx-auto font-sans leading-relaxed">
              We train and deploy high-performing remote operators to elite global firms. Master rigorous executive systems, pass timed operational simulations, and secure top-tier remote placements with guaranteed compensation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#3E5871] hover:bg-[#5B7C9C] text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_12px_rgba(62,88,113,0.35)] cursor-pointer"
              >
                Apply for Cohort 08
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#leaderboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#16191C] hover:bg-[#2A2D31] text-[#ECEDEF] border border-[#2A2D31] text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all cursor-pointer"
              >
                Inspect Leaderboard
                <ArrowUpRight className="w-4 h-4 text-[#A7AAAD]" />
              </a>
            </div>

            {/* Micro banner notice */}
            <p className="text-xs font-mono text-[#A7AAAD] pt-1">
              Zero tuition fees. Stage 01 assessment link dispatched within 24 hours of profile review.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-[#16191C] border border-[#2A2D31] p-5 rounded-xl text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                $1,200 - $3,500
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7AAAD] mt-1 block">
                Monthly Starting Placement
              </span>
            </div>

            <div className="bg-[#16191C] border border-[#2A2D31] p-5 rounded-xl text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                3.2%
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7AAAD] mt-1 block">
                Selection Rate
              </span>
            </div>

            <div className="bg-[#16191C] border border-[#2A2D31] p-5 rounded-xl text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                14 Days
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7AAAD] mt-1 block">
                Intensive Simulation Sprint
              </span>
            </div>

            <div className="bg-[#16191C] border border-[#2A2D31] p-5 rounded-xl text-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                100%
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7AAAD] mt-1 block">
                Graduate Contract Placement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          THE OPERATOR REALITY (Comparison: Assistant vs Trained Operator)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#16191C] border-b border-[#2A2D31]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1113] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
              Career Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
              Why generalist virtual assistants get replaced.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#ECEDEF]/70 font-sans">
              Founders do not need another person to monitor an inbox. They need high-leverage partners who defend their time, automate friction, and run standard operations with zero supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Average Freelancer */}
            <div className="bg-[#0F1113] border border-[#2A2D31] rounded-2xl p-7 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2D31]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block mb-1">
                    Commoditized Path
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-white">
                    Generalist Virtual Assistant
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  High Risk of Replacement
                </span>
              </div>

              <div className="space-y-4 text-xs text-[#ECEDEF]/70 font-sans">
                <div className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
                  <p>Waits for explicit instructions for every single daily task.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
                  <p>Accepts low hourly wages on crowded freelance bidding platforms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
                  <p>Treats calendars as simple lists instead of strategic executive defense.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
                  <p>Lacks CRM validation frameworks, resulting in corrupted sales data.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
                  <p>Easily substituted by low-cost automated tools and basic scripts.</p>
                </div>
              </div>
            </div>

            {/* The Oxpier Trained Operator */}
            <div className="bg-[#0F1113] border-2 border-[#3E5871] rounded-2xl p-7 sm:p-8 space-y-6 relative shadow-[0_4px_24px_rgba(62,88,113,0.15)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2D31]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5B7C9C] block mb-1">
                    The Oxpier Standard
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-white">
                    Certified Remote Operator
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#3E5871]/20 text-[#5B7C9C] border border-[#3E5871]/40">
                  Direct Placement Pipeline
                </span>
              </div>

              <div className="space-y-4 text-xs text-[#ECEDEF] font-sans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7C9C] shrink-0 mt-0.5" />
                  <p>Designs proactive calendar buffers and protects leadership time rigorously.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7C9C] shrink-0 mt-0.5" />
                  <p>Commands long-term monthly contracts with guaranteed compensation floor.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7C9C] shrink-0 mt-0.5" />
                  <p>Maintains clean CRM pipeline hygiene across Apollo, Clay, and HubSpot.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7C9C] shrink-0 mt-0.5" />
                  <p>Authors production-grade Notion standard operating procedures without being asked.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#5B7C9C] shrink-0 mt-0.5" />
                  <p>Verified through timed pressure simulations before ever speaking to a client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: REMOTE OPERATOR TRAINING MODULES (Directive 3)
      ────────────────────────────────────────────────────────────────────────── */}
      <TrainingModules />

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: TALENT LEADERBOARD (Directive 3)
      ────────────────────────────────────────────────────────────────────────── */}
      <TalentLeaderboard />

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: VETTING PIPELINE & SELECTION STANDARDS
      ────────────────────────────────────────────────────────────────────────── */}
      <VettingPipeline />

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: OPERATOR PLACEMENT STORIES (Proof from Talent, not B2B)
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0F1113] border-t border-[#2A2D31]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
              Operator Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
              Voices from the active roster.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#ECEDEF]/70 font-sans">
              Hear directly from remote assistants, project coordinators, and operators who completed the sprint and stepped into high-impact roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPERATOR_STORIES.map((story) => (
              <div
                key={story.author}
                className="bg-[#16191C] border border-[#2A2D31] rounded-xl p-7 flex flex-col justify-between hover:border-[#3E5871] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#ECEDEF]/90 font-sans leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2A2D31]">
                  <h4 className="font-serif font-semibold text-white text-sm">
                    {story.author}
                  </h4>
                  <div className="text-[11px] text-[#5B7C9C] font-mono mt-0.5">
                    {story.currentRole}
                  </div>
                  <div className="text-[10px] text-[#A7AAAD] font-mono mt-0.5">
                    {story.cohort}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: FAQ
      ────────────────────────────────────────────────────────────────────────── */}
      <AcademyFAQ />

      {/* ──────────────────────────────────────────────────────────────────────────
          SECTION: APPLICATION FORM (The Intake Terminal)
      ────────────────────────────────────────────────────────────────────────── */}
      <ApplicationForm />
    </main>
  );
}
