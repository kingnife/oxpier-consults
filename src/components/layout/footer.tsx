"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const FOOTER_LINKS = {
  "Academy Tracks": [
    { label: "Executive Virtual Assistant", href: "/#training" },
    { label: "Pipeline and CRM Operations", href: "/#training" },
    { label: "Systems and SOP Architecture", href: "/#training" },
    { label: "Cohort 08 Application", href: "/#apply" },
  ],
  "Talent Resources": [
    { label: "Talent Leaderboard", href: "/#leaderboard" },
    { label: "Vetting Standards", href: "/#standards" },
    { label: "Graduation Benchmarks", href: "/#training" },
    { label: "Placement Model", href: "/#standards" },
  ],
  Admissions: [
    { label: "Selection Process", href: "/#standards" },
    { label: "Candidate FAQ", href: "/#apply" },
    { label: "Compensation Floor", href: "/#standards" },
    { label: "Active Cohort Schedule", href: "/#apply" },
  ],
};

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulated instant state
    setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-lg bg-[#16191C] border border-[#3E5871]/50 text-[#ECEDEF]">
        <CheckCircle2 className="w-5 h-5 text-[#5B7C9C] shrink-0" />
        <span className="text-sm font-medium">
          You are on the dispatch list. Exact operator drills and placement updates arrive weekly.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="operator@domain.com"
            disabled={status === "loading"}
            error={status === "error"}
            aria-label="Your email address"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "newsletter-error" : undefined}
          />
          {status === "error" && (
            <span
              id="newsletter-error"
              role="alert"
              className="absolute -bottom-5 left-0 text-xs text-rose-400"
            >
              Please enter a valid email address.
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3E5871] text-white text-xs font-sans font-semibold uppercase tracking-widest rounded hover:bg-[#5B7C9C] transition-colors disabled:opacity-70 whitespace-nowrap cursor-pointer"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Join Dispatch <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F1113] border-t border-[#2A2D31]" aria-label="Site footer">
      {/* Newsletter bar */}
      <div className="border-b border-[#2A2D31] py-14 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="md:w-2/5 shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-2 font-sans">
              The Operator Dispatch
            </p>
            <h3 className="font-serif font-semibold text-white text-2xl mb-1">
              Exact techniques. No fluff.
            </h3>
            <p className="text-sm text-[#ECEDEF]/60">
              Weekly simulations, calendar audit frameworks, and direct placement alerts for elite remote talent.
            </p>
          </div>
          <div className="flex-1 pb-4">
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Oxpier Home" className="inline-flex items-center mb-4 transition-opacity hover:opacity-90">
              <Image
                src="/assets/oxpier-logo-transparent.png"
                alt="Oxpier Logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain mix-blend-screen"
              />
            </Link>
            <p className="text-xs text-[#A7AAAD] leading-relaxed max-w-[240px]">
              The training ground and placement pipeline for high-performing virtual assistants, interns, and remote operators.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3E5871] mb-4 font-sans">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-[#A7AAAD] hover:text-white transition-colors font-sans"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2D31] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#A7AAAD]/60">
          <p>© {new Date().getFullYear()} Oxpier Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/#apply" className="hover:text-white transition-colors">
              Admissions Policy
            </Link>
            <span>•</span>
            <Link href="/#standards" className="hover:text-white transition-colors">
              Code of Conduct
            </Link>
            <span>•</span>
            <span>Zero Tuition Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
