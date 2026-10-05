"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    primaryTrack: "Executive Virtual Assistant",
    experienceLevel: "1-3 years",
    portfolioUrl: "",
    weeklyHours: "Full-time (40 hours/week)",
    hardProblemSolved: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="apply" className="py-24 px-4 bg-[#0F1113] border-t border-[#2A2D31]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            Cohort 08 Admissions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            Apply to the Academy.
          </h2>
          <p className="mt-4 text-base text-[#ECEDEF]/70 font-sans">
            Admissions run on a rolling basis. 25 seats per cohort. Once your profile passes initial review, you will receive your timed Stage 01 assessment link within 24 hours.
          </p>
        </div>

        <div className="bg-[#16191C] border border-[#2A2D31] rounded-2xl p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#3E5871]/20 border border-[#5B7C9C] text-[#5B7C9C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white">
                Application Received.
              </h3>
              <p className="text-sm text-[#ECEDEF]/70 max-w-md mx-auto leading-relaxed">
                Check your inbox at <span className="text-white font-mono">{formData.email}</span>. Your Stage 01 speed assessment link and login details will arrive shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-widest text-[#5B7C9C] hover:text-white transition-colors"
                >
                  Submit another application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Samuel Adebayo"
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white placeholder-[#A7AAAD]/40 focus:outline-none focus:border-[#3E5871] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    Primary Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="samuel@example.com"
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white placeholder-[#A7AAAD]/40 focus:outline-none focus:border-[#3E5871] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Primary Track */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    Preferred Operator Track *
                  </label>
                  <select
                    value={formData.primaryTrack}
                    onChange={(e) => setFormData({ ...formData, primaryTrack: e.target.value })}
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3E5871] transition-colors"
                  >
                    <option value="Executive Virtual Assistant">Executive Virtual Assistant</option>
                    <option value="Outbound Pipeline & CRM Operator">Outbound Pipeline & CRM Operator</option>
                    <option value="Systems & SOP Documentation Lead">Systems & SOP Documentation Lead</option>
                    <option value="General Remote Operator">General Remote Operator</option>
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    Remote Work Experience *
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3E5871] transition-colors"
                  >
                    <option value="0-1 years (High-aptitude intern)">0-1 years (High-aptitude intern)</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years senior operator">5+ years senior operator</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Portfolio / LinkedIn */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    LinkedIn or Resume Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white placeholder-[#A7AAAD]/40 focus:outline-none focus:border-[#3E5871] transition-colors"
                  />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                    Target Working Capacity *
                  </label>
                  <select
                    value={formData.weeklyHours}
                    onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                    className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3E5871] transition-colors"
                  >
                    <option value="Full-time (40 hours/week)">Full-time (40 hours/week)</option>
                    <option value="Part-time (20-30 hours/week)">Part-time (20-30 hours/week)</option>
                  </select>
                </div>
              </div>

              {/* Hard problem question */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A7AAAD] mb-2">
                  Describe one complex operational mess you unraveled and resolved. *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.hardProblemSolved}
                  onChange={(e) => setFormData({ ...formData, hardProblemSolved: e.target.value })}
                  placeholder="Focus on the exact operational constraints, the steps you executed, and the final measurable outcome."
                  className="w-full bg-[#0F1113] border border-[#2A2D31] rounded-lg p-4 text-sm text-white placeholder-[#A7AAAD]/40 focus:outline-none focus:border-[#3E5871] transition-colors font-sans"
                />
              </div>

              {/* Notice */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#0F1113] border border-[#2A2D31] text-xs text-[#A7AAAD] leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-[#3E5871] shrink-0 mt-0.5" />
                <span>
                  Oxpier Academy is selective. We evaluate real execution over credential padding. If accepted, you will never pay tuition fees.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#3E5871] hover:bg-[#5B7C9C] text-white font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_10px_rgba(62,88,113,0.3)] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Transmitting Profile..." : "Submit Application & Request Drill Link"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
