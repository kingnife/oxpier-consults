"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export function ActionFunnel() {
  const [activeTab, setActiveTab] = useState<"client" | "candidate">("client");
  const [submitted, setSubmitted] = useState(false);

  // Client form state
  const [clientEmail, setClientEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<"People" | "Pipeline" | "Systems">("Pipeline");

  // Candidate form state
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateTrack, setCandidateTrack] = useState<"track-01" | "track-02" | "track-03">("track-01");
  const [candidateUrl, setCandidateUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="w-full max-w-4xl mx-auto">
      {/* Container with elevated Charcoal Raise & Graphite border */}
      <div className="bg-[#16191C] border border-[#2A2D31] rounded-lg p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Top subtle metallic hairline */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6C9CC] to-transparent opacity-40" />

        {/* Dual Tab Switcher */}
        <div className="flex border-b border-[#2A2D31] mb-8">
          <button
            type="button"
            onClick={() => {
              setActiveTab("client");
              setSubmitted(false);
            }}
            className={`flex-1 pb-4 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-center transition-all relative ${
              activeTab === "client"
                ? "text-white"
                : "text-[#A7AAAD] hover:text-[#ECEDEF]"
            }`}
          >
            Founder Operational Audit
            {activeTab === "client" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3E5871]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("candidate");
              setSubmitted(false);
            }}
            className={`flex-1 pb-4 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-center transition-all relative ${
              activeTab === "candidate"
                ? "text-white"
                : "text-[#A7AAAD] hover:text-[#ECEDEF]"
            }`}
          >
            Operator Talent Intake
            {activeTab === "candidate" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3E5871]" />
            )}
          </button>
        </div>

        {submitted ? (
          <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#3E5871]/20 border border-[#3E5871] flex items-center justify-center mb-4 text-[#5B7C9C]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">
              Transmission Confirmed
            </h3>
            <p className="font-sans text-sm text-[#A7AAAD] max-w-md">
              {activeTab === "client"
                ? "Your operational parameters have been logged. A lead partner reviews your pipeline and contacts you within one business day."
                : "Your dossier has been added to our intake evaluation queue. Qualified candidates receive assessment details within one business day."}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 btn-outline px-6 py-2 text-xs font-sans uppercase tracking-wider rounded"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : activeTab === "client" ? (
          /* Client Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                Request Operational Execution
              </h3>
              <p className="font-sans text-xs text-[#A7AAAD]">
                Describe your current operational bottlenecks. We evaluate fit and deploy operators directly.
              </p>
            </div>

            {/* Target Pillar */}
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#ECEDEF] font-semibold mb-2">
                Primary Execution Priority
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "Pipeline",
                    label: "Pipeline (Outbound)",
                    desc: "Booked sales calls and qualified pipeline",
                  },
                  {
                    id: "People",
                    label: "People (EAs & Operators)",
                    desc: "Reclaim 100+ hours of founder bandwidth",
                  },
                  {
                    id: "Systems",
                    label: "Systems (Infrastructure)",
                    desc: "CRM hygiene, Zapier/Make automation",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPillar(item.id as "People" | "Pipeline" | "Systems")}
                    className={`p-3.5 rounded text-left border transition-all ${
                      selectedPillar === item.id
                        ? "bg-[#0F1113] border-[#3E5871] ring-1 ring-[#3E5871]"
                        : "bg-[#0F1113] border-[#2A2D31] hover:border-[#3A3E44]"
                    }`}
                  >
                    <div className="font-sans text-xs font-semibold text-white">
                      {item.label}
                    </div>
                    <div className="font-sans text-[11px] text-[#A7AAAD] mt-1">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="work-email"
                  className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#A7AAAD] font-semibold mb-2"
                >
                  Work Email
                </label>
                <input
                  id="work-email"
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-[#0F1113] border border-[#2A2D31] rounded px-3.5 py-2.5 text-sm text-[#ECEDEF] placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871] focus:ring-1 focus:ring-[#3E5871] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="company-name"
                  className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#A7AAAD] font-semibold mb-2"
                >
                  Company & Current ARR
                </label>
                <input
                  id="company-name"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Corp • $1.5M ARR"
                  className="w-full bg-[#0F1113] border border-[#2A2D31] rounded px-3.5 py-2.5 text-sm text-[#ECEDEF] placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871] focus:ring-1 focus:ring-[#3E5871] transition-colors"
                />
              </div>
            </div>

            {/* Helper & Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-sans text-[13px] text-[#A7AAAD] tracking-wide">
                We reply within one business day.
              </span>
              <button
                type="submit"
                className="btn-solid-steel w-full sm:w-auto px-6 py-3 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded inline-flex items-center justify-center gap-2"
              >
                <span>Request Operational Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          /* Candidate Intake Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                Join The Operator Pipeline
              </h3>
              <p className="font-sans text-xs text-[#A7AAAD]">
                Select your designated path. We place high-performing operators with scaling US and Canadian firms.
              </p>
            </div>

            {/* Track Selection */}
            <div>
              <label className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#ECEDEF] font-semibold mb-2">
                Designated Track
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "track-01",
                    code: "TRACK 01",
                    title: "Talent Pool (Remote EA)",
                    sub: "Long-term US/CA client placement",
                  },
                  {
                    id: "track-02",
                    code: "TRACK 02",
                    title: "Internal Agency Hire",
                    sub: "Outbound campaign management & copywriting",
                  },
                  {
                    id: "track-03",
                    code: "TRACK 03",
                    title: "B2B Internship (6 Mo)",
                    sub: "Pipeline mastery with value-based stipend",
                  },
                ].map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setCandidateTrack(track.id as "track-01" | "track-02" | "track-03")}
                    className={`p-3.5 rounded text-left border transition-all ${
                      candidateTrack === track.id
                        ? "bg-[#0F1113] border-[#3E5871] ring-1 ring-[#3E5871]"
                        : "bg-[#0F1113] border-[#2A2D31] hover:border-[#3A3E44]"
                    }`}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#5B7C9C] block mb-1">
                      {track.code}
                    </span>
                    <div className="font-sans text-xs font-semibold text-white">
                      {track.title}
                    </div>
                    <div className="font-sans text-[11px] text-[#A7AAAD] mt-1">
                      {track.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="candidate-name"
                  className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#A7AAAD] font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  id="candidate-name"
                  type="text"
                  required
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="Taylor Sterling"
                  className="w-full bg-[#0F1113] border border-[#2A2D31] rounded px-3.5 py-2.5 text-sm text-[#ECEDEF] placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871] focus:ring-1 focus:ring-[#3E5871] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="candidate-email"
                  className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#A7AAAD] font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  id="candidate-email"
                  type="email"
                  required
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  placeholder="taylor@domain.com"
                  className="w-full bg-[#0F1113] border border-[#2A2D31] rounded px-3.5 py-2.5 text-sm text-[#ECEDEF] placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871] focus:ring-1 focus:ring-[#3E5871] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="candidate-url"
                className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#A7AAAD] font-semibold mb-2"
              >
                LinkedIn Profile or Portfolio URL
              </label>
              <input
                id="candidate-url"
                type="url"
                required
                value={candidateUrl}
                onChange={(e) => setCandidateUrl(e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className="w-full bg-[#0F1113] border border-[#2A2D31] rounded px-3.5 py-2.5 text-sm text-[#ECEDEF] placeholder-[#A7AAAD]/60 focus:outline-none focus:border-[#3E5871] focus:ring-1 focus:ring-[#3E5871] transition-colors"
              />
            </div>

            {candidateTrack === "track-03" && (
              <div className="p-3 bg-[#0F1113] border border-[#2A2D31] rounded text-[11px] text-[#A7AAAD]">
                <span className="font-semibold text-[#5B7C9C] block mb-0.5">Note on Track 03:</span>
                This 6-month intensive teaches cold outbound and CRM systems. Stipends are based strictly on demonstrated performance and client pipeline contribution, not guaranteed upon entry.
              </div>
            )}

            {/* Helper & Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-sans text-[13px] text-[#A7AAAD] tracking-wide">
                We review applications on a rolling 48-hour cadence.
              </span>
              <button
                type="submit"
                className="btn-metal w-full sm:w-auto px-6 py-3 text-xs font-sans uppercase tracking-[0.14em] font-semibold rounded inline-flex items-center justify-center gap-2"
              >
                <span>Submit Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
