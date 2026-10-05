"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Do I pay any tuition or upfront fees for Oxpier Academy?",
    a: "No. You never pay a dime. Oxpier is not a course business. We make money when our hiring partners hire and retain our trained operators. Our interests align completely with your career success.",
  },
  {
    q: "How does the Talent Leaderboard work?",
    a: "Every drill, simulation, and weekly sprint ticket is graded on accuracy, response latency, and procedural rigor. Your cumulative score determines your rank. Partner companies review the top operators on the leaderboard first when hiring.",
  },
  {
    q: "What starting compensation can I expect upon placement?",
    a: "Most full-time remote operators placed through Oxpier start between $1,200 and $3,500 monthly depending on track specialization and partner geography. High-performing operators frequently negotiate retainers with profit-sharing incentives after their first 90 days.",
  },
  {
    q: "Can I participate if I currently have a day job or other commitments?",
    a: "The initial Stage 01 and Stage 02 drills are asynchronous and can be completed outside standard business hours. However, the 14-day Academy Sprint requires dedicated blocks of focused execution. We recommend at least 20 hours per week of uninterrupted availability.",
  },
  {
    q: "What hardware and software tools do I need?",
    a: "You need a fast, reliable computer with at least 16GB RAM, an uninterrupted high-speed internet connection, a quiet environment for recorded simulations, and proficiency with Google Workspace, Slack, and Notion.",
  },
  {
    q: "What happens if I fail the Stage 02 simulation drill?",
    a: "Candidates who fail to meet benchmark scores receive a diagnostic breakdown of their bottlenecks. You may reapply after a 60-day cool-down period with evidence of improved typing, async documentation, or calendar skills.",
  },
];

export function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#16191C] border-t border-[#2A2D31]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1113] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            Candidate Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-base text-[#ECEDEF]/70 font-sans">
            Direct answers on admissions, testing standards, and partner compensation.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-[#0F1113] border border-[#2A2D31] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5B7C9C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#ECEDEF]/80 font-sans leading-relaxed border-t border-[#2A2D31]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
