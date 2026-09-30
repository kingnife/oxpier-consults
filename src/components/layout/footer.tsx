"use client";

import React, { useState } from "react";
import { OxpierLogo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const FOOTER_LINKS = {
  "Client Systems": [
    { label: "People — EA Placements", href: "/services" },
    { label: "Pipeline — Outbound", href: "/services" },
    { label: "Systems — Automation", href: "/services" },
    { label: "Book Discovery Call", href: "/contact" },
  ],
  "Join the Pipeline": [
    { label: "Track 01 — Talent Pool", href: "/careers" },
    { label: "Track 02 — Agency Roles", href: "/careers" },
    { label: "Track 03 — Internships", href: "/careers" },
  ],
  Company: [
    { label: "About Oxpier", href: "/" },
    { label: "The Journal", href: "/journal" },
    { label: "The Podcast", href: "/journal" },
    { label: "Client Results", href: "/case-studies" },
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
    // Simulate API call
    setTimeout(() => setStatus("success"), 1200);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-lg bg-[#16191C] border border-[#3E5871]/50 text-[#ECEDEF]">
        <CheckCircle2 className="w-5 h-5 text-[#3E5871] shrink-0" />
        <span className="text-sm font-medium">
          You&apos;re on the list. Expect exact insights, no filler.
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
            placeholder="you@company.com"
            disabled={status === "loading"}
            error={status === "error"}
            aria-label="Your work email"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "newsletter-error" : undefined}
          />
          {status === "error" && (
            <span
              id="newsletter-error"
              role="alert"
              className="absolute -bottom-5 left-0 text-xs text-red-400"
            >
              Please enter a valid work email.
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3E5871] text-white text-xs font-sans font-semibold uppercase tracking-widest rounded hover:bg-[#5B7C9C] transition-colors disabled:opacity-70 whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Subscribe <ArrowRight className="w-4 h-4" />
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
              The Oxpier Brief
            </p>
            <h3 className="font-serif font-semibold text-white text-2xl mb-1">
              Exact insights. No filler.
            </h3>
            <p className="text-sm text-[#ECEDEF]/55">
              Weekly on operational execution, outbound, and B2B growth. Unsubscribe any time.
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
            <OxpierLogo size="sm" showTagline={false} />
            <p className="mt-4 text-xs text-[#A7AAAD] leading-relaxed max-w-[200px]">
              Operational precision for scaling firms. We fix execution gaps that stall growth.
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
                    <a
                      href={href}
                      className="text-xs text-[#A7AAAD] hover:text-white transition-colors font-sans"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2D31] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6B6B6B]">
          <p>© {new Date().getFullYear()} Oxpier Consults. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#A7AAAD] transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-[#A7AAAD] transition-colors">
              Terms of Service
            </a>
            <span>·</span>
            <span>Anchored in Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
