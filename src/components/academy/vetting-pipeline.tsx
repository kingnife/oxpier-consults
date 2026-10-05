import React from "react";
import { ArrowRight, CheckSquare, Zap, Target, Briefcase } from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Screening & Speed Assessment",
    timeframe: "Day 1",
    icon: CheckSquare,
    summary:
      "We test reading comprehension, logical deduction, and operational speed. You must achieve a minimum typing speed of 65 WPM with zero transcription errors.",
    criteria: [
      "Typing speed audit: 65+ WPM with 98% accuracy",
      "Executive tone and written syntax assessment",
      "Asynchronous video response to a sudden schedule crisis",
    ],
  },
  {
    step: "02",
    name: "48-Hour Asynchronous Drill",
    timeframe: "Day 2 to 3",
    icon: Zap,
    summary:
      "A grueling simulation replicating a real day in a venture-backed tech firm. You receive unorganized inbox dumps, overlapping flight rebookings, and raw dataset requests under strict deadlines.",
    criteria: [
      "Three unannounced calendar conflicts with zero supervisor guidance",
      "Lead list scraping and verification with strict accuracy benchmarks",
      "Zero room for assumptions. Candidate must document every decision.",
    ],
  },
  {
    step: "03",
    name: "14-Day Academy Sprint",
    timeframe: "Weeks 1 & 2",
    icon: Target,
    summary:
      "Admitted candidates enter the intensive Oxpier Academy environment. You execute daily operational tickets, receive line-by-line feedback from senior operators, and compete for leaderboard rank.",
    criteria: [
      "Six core training modules completed with benchmark verification",
      "Daily standups and end-of-day operational handoff logs",
      "Peer review grading and live incident response drills",
    ],
  },
  {
    step: "04",
    name: "Direct Partner Placement",
    timeframe: "Week 3",
    icon: Briefcase,
    summary:
      "Top-ranked operators are matched with vetted US and European founders. You sign a direct engagement contract with guaranteed monthly compensation and structured scope.",
    criteria: [
      "Direct interviews with pre-briefed partner founders",
      "Guaranteed starting compensation between $1,200 and $3,500 monthly",
      "Ongoing check-ins and performance support from Oxpier leadership",
    ],
  },
];

export function VettingPipeline() {
  return (
    <section id="standards" className="py-24 px-4 bg-[#16191C] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1113] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            Selection Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            How to earn your placement.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#ECEDEF]/70 font-sans">
            We do not sell video courses. We select, train, and deploy the top 3.2% of applicants. Here is the exact path from application to an active remote contract.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STAGES.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#0F1113] border border-[#2A2D31] rounded-xl p-6 flex flex-col justify-between hover:border-[#3E5871] transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#3E5871] group-hover:text-[#5B7C9C] transition-colors">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A7AAAD] px-2 py-0.5 rounded bg-[#16191C] border border-[#2A2D31]">
                      {s.timeframe}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded bg-[#16191C] border border-[#2A2D31] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#ECEDEF]" />
                  </div>

                  <h3 className="text-base font-serif font-semibold text-white mb-2 leading-snug">
                    {s.name}
                  </h3>

                  <p className="text-xs text-[#ECEDEF]/70 leading-relaxed mb-6 font-sans">
                    {s.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2D31] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7AAAD] block">
                    Passing Criteria
                  </span>
                  {s.criteria.map((c) => (
                    <div key={c} className="text-[11px] text-[#ECEDEF] flex items-start gap-1.5 leading-snug">
                      <span className="text-[#3E5871] font-bold mt-0.5">•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Acceptance stat bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#0F1113] border border-[#2A2D31] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <span className="text-3xl font-serif font-bold text-white block">3.2%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A7AAAD]">
                Acceptance Rate
              </span>
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#2A2D31]" />
            <div>
              <span className="text-3xl font-serif font-bold text-white block">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A7AAAD]">
                Graduate Placement Rate
              </span>
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#2A2D31]" />
            <div>
              <span className="text-3xl font-serif font-bold text-white block">$0</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A7AAAD]">
                Operator Tuition Cost
              </span>
            </div>
          </div>

          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#3E5871] hover:bg-[#5B7C9C] text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-colors"
          >
            Apply for Screening
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
