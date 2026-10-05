"use client";

import React, { useState } from "react";
import { CheckCircle2, Trophy, Award, Search, ArrowUpRight } from "lucide-react";

interface Operator {
  rank: number;
  name: string;
  avatarText: string;
  track: string;
  trackCategory: "executive" | "growth" | "systems";
  cohort: string;
  score: string;
  tasksCompleted: number;
  responseLatency: string;
  status: string;
  placed: boolean;
}

const OPERATORS_DATA: Operator[] = [
  {
    rank: 1,
    name: "Tariq Adeleke",
    avatarText: "TA",
    track: "Executive Operator",
    trackCategory: "executive",
    cohort: "Cohort 07",
    score: "99.4%",
    tasksCompleted: 942,
    responseLatency: "2.1 min",
    status: "Placed at US Venture Studio",
    placed: true,
  },
  {
    rank: 2,
    name: "Elena Rostova",
    avatarText: "ER",
    track: "Pipeline & CRM Specialist",
    trackCategory: "growth",
    cohort: "Cohort 07",
    score: "98.9%",
    tasksCompleted: 884,
    responseLatency: "2.8 min",
    status: "Placed at Fintech Series B",
    placed: true,
  },
  {
    rank: 3,
    name: "Kwame Mensah",
    avatarText: "KM",
    track: "Systems & SOP Lead",
    trackCategory: "systems",
    cohort: "Cohort 06",
    score: "98.5%",
    tasksCompleted: 812,
    responseLatency: "3.2 min",
    status: "Placed at SaaS Scale-Up",
    placed: true,
  },
  {
    rank: 4,
    name: "Amara Chen",
    avatarText: "AC",
    track: "Executive Operator",
    trackCategory: "executive",
    cohort: "Cohort 07",
    score: "97.8%",
    tasksCompleted: 756,
    responseLatency: "3.4 min",
    status: "Final Placement Round",
    placed: false,
  },
  {
    rank: 5,
    name: "David O'Connor",
    avatarText: "DO",
    track: "Growth Operations",
    trackCategory: "growth",
    cohort: "Cohort 07",
    score: "97.4%",
    tasksCompleted: 719,
    responseLatency: "3.9 min",
    status: "Ready for Match",
    placed: false,
  },
  {
    rank: 6,
    name: "Zainab Al-Mansoor",
    avatarText: "ZA",
    track: "Executive Operator",
    trackCategory: "executive",
    cohort: "Cohort 06",
    score: "96.9%",
    tasksCompleted: 688,
    responseLatency: "4.1 min",
    status: "Placed at Private Equity",
    placed: true,
  },
  {
    rank: 7,
    name: "Mateo Silva",
    avatarText: "MS",
    track: "Systems & Automation",
    trackCategory: "systems",
    cohort: "Cohort 07",
    score: "96.5%",
    tasksCompleted: 642,
    responseLatency: "4.3 min",
    status: "Ready for Match",
    placed: false,
  },
  {
    rank: 8,
    name: "Chioma Nwosu",
    avatarText: "CN",
    track: "Executive Operator",
    trackCategory: "executive",
    cohort: "Cohort 07",
    score: "96.1%",
    tasksCompleted: 604,
    responseLatency: "4.6 min",
    status: "Ready for Match",
    placed: false,
  },
];

export function TalentLeaderboard() {
  const [filter, setFilter] = useState<"all" | "executive" | "growth" | "systems">("all");
  const [search, setSearch] = useState("");

  const filteredOperators = OPERATORS_DATA.filter((op) => {
    const matchesFilter = filter === "all" || op.trackCategory === filter;
    const matchesSearch =
      op.name.toLowerCase().includes(search.toLowerCase()) ||
      op.track.toLowerCase().includes(search.toLowerCase()) ||
      op.cohort.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="leaderboard" className="py-24 px-4 bg-[#0F1113] border-t border-[#2A2D31]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B7C9C] animate-pulse" />
              Live Performance Benchmarks
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
              Talent Leaderboard.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#ECEDEF]/70 max-w-2xl font-sans">
              Top operators from active cohorts. Placement partners review this live index to extend offers directly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7AAAD]">
              Cohort 07 Active Standings
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-[#16191C] p-4 rounded-t-xl border border-[#2A2D31] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded text-xs font-sans uppercase tracking-[0.12em] font-medium transition-colors ${
                filter === "all"
                  ? "bg-[#3E5871] text-white"
                  : "bg-[#0F1113] text-[#A7AAAD] hover:text-white border border-[#2A2D31]"
              }`}
            >
              All Tracks
            </button>
            <button
              type="button"
              onClick={() => setFilter("executive")}
              className={`px-3.5 py-1.5 rounded text-xs font-sans uppercase tracking-[0.12em] font-medium transition-colors whitespace-nowrap ${
                filter === "executive"
                  ? "bg-[#3E5871] text-white"
                  : "bg-[#0F1113] text-[#A7AAAD] hover:text-white border border-[#2A2D31]"
              }`}
            >
              Executive Support
            </button>
            <button
              type="button"
              onClick={() => setFilter("growth")}
              className={`px-3.5 py-1.5 rounded text-xs font-sans uppercase tracking-[0.12em] font-medium transition-colors whitespace-nowrap ${
                filter === "growth"
                  ? "bg-[#3E5871] text-white"
                  : "bg-[#0F1113] text-[#A7AAAD] hover:text-white border border-[#2A2D31]"
              }`}
            >
              Growth & CRM
            </button>
            <button
              type="button"
              onClick={() => setFilter("systems")}
              className={`px-3.5 py-1.5 rounded text-xs font-sans uppercase tracking-[0.12em] font-medium transition-colors whitespace-nowrap ${
                filter === "systems"
                  ? "bg-[#3E5871] text-white"
                  : "bg-[#0F1113] text-[#A7AAAD] hover:text-white border border-[#2A2D31]"
              }`}
            >
              Systems & SOPs
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#A7AAAD] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search operator or track..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0F1113] border border-[#2A2D31] rounded pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871]"
            />
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto border-x border-b border-[#2A2D31] bg-[#16191C]/60 rounded-b-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2A2D31] text-[11px] font-mono uppercase tracking-[0.14em] text-[#A7AAAD] bg-[#0F1113]/50">
                <th className="py-3.5 px-4 font-normal">Rank</th>
                <th className="py-3.5 px-4 font-normal">Operator</th>
                <th className="py-3.5 px-4 font-normal">Primary Track</th>
                <th className="py-3.5 px-4 font-normal">Cohort</th>
                <th className="py-3.5 px-4 font-normal text-right">Drill Score</th>
                <th className="py-3.5 px-4 font-normal text-right">Tasks Executed</th>
                <th className="py-3.5 px-4 font-normal text-right">Avg Latency</th>
                <th className="py-3.5 px-4 font-normal">Placement Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2D31]/70 text-xs">
              {filteredOperators.map((operator) => (
                <tr
                  key={operator.name}
                  className="hover:bg-[#16191C] transition-colors group"
                >
                  {/* Rank */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {operator.rank === 1 && (
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs">
                          1
                        </span>
                      )}
                      {operator.rank === 2 && (
                        <span className="w-6 h-6 rounded-full bg-slate-400/20 text-slate-300 border border-slate-400/30 flex items-center justify-center font-mono font-bold text-xs">
                          2
                        </span>
                      )}
                      {operator.rank === 3 && (
                        <span className="w-6 h-6 rounded-full bg-amber-700/20 text-amber-600 border border-amber-700/30 flex items-center justify-center font-mono font-bold text-xs">
                          3
                        </span>
                      )}
                      {operator.rank > 3 && (
                        <span className="w-6 h-6 rounded-full bg-[#0F1113] text-[#A7AAAD] border border-[#2A2D31] flex items-center justify-center font-mono text-xs">
                          {operator.rank}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Name and verification */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#2A2D31] text-white font-mono text-xs font-bold flex items-center justify-center border border-white/10">
                        {operator.avatarText}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans font-semibold text-white group-hover:text-[#5B7C9C] transition-colors">
                            {operator.name}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7C9C]" />
                        </div>
                        <span className="text-[10px] text-[#A7AAAD] font-mono">
                          Verified Operator
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Track */}
                  <td className="py-4 px-4 whitespace-nowrap text-[#ECEDEF]">
                    {operator.track}
                  </td>

                  {/* Cohort */}
                  <td className="py-4 px-4 whitespace-nowrap font-mono text-[#A7AAAD]">
                    {operator.cohort}
                  </td>

                  {/* Score */}
                  <td className="py-4 px-4 whitespace-nowrap text-right font-mono font-semibold text-white">
                    {operator.score}
                  </td>

                  {/* Tasks Executed */}
                  <td className="py-4 px-4 whitespace-nowrap text-right font-mono text-[#ECEDEF]">
                    {operator.tasksCompleted}
                  </td>

                  {/* Avg Latency */}
                  <td className="py-4 px-4 whitespace-nowrap text-right font-mono text-[#A7AAAD]">
                    {operator.responseLatency}
                  </td>

                  {/* Placement Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    {operator.placed ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#3E5871]/20 border border-[#3E5871]/40 text-[#5B7C9C] font-mono text-[11px]">
                        <CheckCircle2 className="w-3 h-3" />
                        {operator.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#ECEDEF] font-mono text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {operator.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#A7AAAD] gap-2 px-1">
          <p>
            Standings update weekly every Monday at 08:00 UTC. Scores reflect timed drill completion, accuracy, and latency.
          </p>
          <a
            href="#apply"
            className="text-white hover:text-[#5B7C9C] font-sans font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Apply to enter leaderboard rankings
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
