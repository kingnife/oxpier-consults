"use client";

import React from "react";
import { ArrowUpRight, Mic, BookOpen } from "lucide-react";

const JOURNAL_POSTS = [
  {
    tag: "Pipeline",
    title: "Why most cold email fails before the subject line",
    excerpt:
      "The architecture of a high-converting outbound sequence has nothing to do with templates.",
    readTime: "5 min read",
    href: "#",
  },
  {
    tag: "Operations",
    title: "The EA trap: why you hired wrong and how to fix it",
    excerpt:
      "Hiring an executive assistant without an operating system just moves chaos closer to the founder.",
    readTime: "7 min read",
    href: "#",
  },
  {
    tag: "Systems",
    title: "CRM architecture for sub-50 person companies",
    excerpt:
      "You don't need a Salesforce consultant. You need a structure that survives team turnover.",
    readTime: "6 min read",
    href: "#",
  },
];

export function ContentHub() {
  return (
    <section
      id="content"
      className="bg-[#0F1113] py-24 md:py-32 px-4"
      aria-labelledby="content-heading"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Journal */}
        <div>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-[#3E5871]" />
                <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871]">
                  The Journal
                </p>
              </div>
              <h2
                id="content-heading"
                className="text-3xl md:text-4xl font-serif font-semibold text-white"
              >
                Exact insights. No filler.
              </h2>
            </div>
            <a
              href="#"
              className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A7AAAD] hover:text-white transition-colors inline-flex items-center gap-1.5 shrink-0"
              aria-label="View all journal posts"
            >
              All Posts <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {JOURNAL_POSTS.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="group block bg-[#16191C] border border-[#2A2D31] rounded-xl p-7 hover:border-[#3E5871] transition-all hover:shadow-[0_8px_32px_rgba(62,88,113,0.12)]"
                aria-label={`Read: ${post.title}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3E5871] font-sans">
                    {post.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#3A3E44] group-hover:text-[#5B7C9C] transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-white text-lg leading-snug mb-3 group-hover:text-[#E5E5E5] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#ECEDEF]/55 leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-xs font-sans text-[#A7AAAD] uppercase tracking-wider">
                  {post.readTime}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Podcast embed */}
        <div className="bg-[#16191C] border border-[#2A2D31] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 rounded-xl bg-[#3E5871]/20 border border-[#3E5871]/30 flex items-center justify-center shrink-0">
              <Mic className="w-7 h-7 text-[#3E5871]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-2 font-sans">
                The Oxpier Podcast
              </p>
              <h3 className="font-serif font-semibold text-white text-2xl mb-2">
                The Operational Edge
              </h3>
              <p className="text-sm text-[#ECEDEF]/60 max-w-lg">
                Weekly conversations with operators, founders, and systems architects who run
                businesses without operational chaos.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#3E5871] text-[#3E5871] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#3E5871] hover:text-white transition-all"
              aria-label="Listen to The Operational Edge podcast"
            >
              Listen Now <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Simulated episode list */}
          <div className="mt-8 pt-8 border-t border-[#2A2D31] space-y-4">
            {[
              "Ep. 12 — How to build an EA system that actually scales",
              "Ep. 11 — Cold email in 2025: anatomy of a reply",
              "Ep. 10 — Ops as a growth lever, not a cost centre",
            ].map((ep, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-2 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-[#3E5871] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#ECEDEF]/70 group-hover:text-[#ECEDEF] transition-colors flex-1">
                  {ep}
                </p>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3A3E44] group-hover:text-[#5B7C9C] transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
