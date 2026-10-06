"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function BehanceIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.938 4.5c-3.834 0-4.938 2.656-4.938 5.748 0 3.25 1.488 5.752 4.938 5.752 1.942 0 3.655-.833 4.417-2.735h-2.128c-.463.844-1.258 1.156-2.289 1.156-1.748 0-2.457-1.375-2.457-3.084h6.914c.148-3.646-.948-6.837-4.457-6.837zm-2.443 5.416c.104-1.479.916-2.417 2.375-2.417 1.417 0 2.229.938 2.313 2.417h-4.688zm12.562-4.416h4.5v1.5h-4.5v-1.5zm.943 4.104h2.557c1.479 0 2.438.75 2.438 1.979 0 .896-.542 1.542-1.375 1.771.979.25 1.688.938 1.688 2.063 0 1.542-1.208 2.583-3.063 2.583h-3.245v-8.4zm2.146 3.417c.667 0 1.146-.354 1.146-.958 0-.583-.458-.938-1.125-.938h-1.167v1.896h1.146zm.188 3.521c.771 0 1.333-.396 1.333-1.042 0-.688-.563-1.042-1.333-1.042h-1.354v2.084h1.354z" />
    </svg>
  );
}

export interface Operator {
  id: string;
  name: string;
  codeName: string;
  role: string;
  pillar: "People" | "Pipeline" | "Systems";
  trackRecord: string;
  metricLabel: string;
  deploymentStatus: "Embedded" | "Available" | "Deploying";
  focusAreas: string[];
  bio: string;
  experienceYears: number;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    behance?: string;
  };
}

const OPERATORS_DATA: Operator[] = [
  {
    id: "op-1",
    name: "Alex V.",
    codeName: "OP-NORTH-01",
    role: "Lead Executive Operations Partner",
    pillar: "People",
    trackRecord: "120h",
    metricLabel: "Reclaimed monthly per founder",
    deploymentStatus: "Embedded",
    focusAreas: ["Calendar Defense", "Executive Comms", "Slack Triage", "Board Prep"],
    bio: "Manages day-to-day operational cadence for US Series A/B founders. Zero dropped threads, zero calendar drift.",
    experienceYears: 7,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      behance: "#",
    },
  },
  {
    id: "op-2",
    name: "Marcus K.",
    codeName: "OP-OUTBOUND-04",
    role: "Senior Outbound Campaign Strategist",
    pillar: "Pipeline",
    trackRecord: "14+",
    metricLabel: "Qualified enterprise calls / mo",
    deploymentStatus: "Available",
    focusAreas: ["Clay Enrichment", "Domain Health", "Personalized Angles", "Reply Conversion"],
    bio: "Engineers outbound infrastructure that converts cold inboxes into booked CEO-to-buyer sales calls without spam patterns.",
    experienceYears: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "op-3",
    name: "Devon T.",
    codeName: "OP-SYSTEMS-02",
    role: "Growth Infrastructure & Automation Architect",
    pillar: "Systems",
    trackRecord: "99.8%",
    metricLabel: "Data hygiene & routing uptime",
    deploymentStatus: "Embedded",
    focusAreas: ["HubSpot Architecture", "Make / Zapier", "Enrichment Loops", "Webhooks"],
    bio: "Builds bulletproof CRM routing, automated enrichment, and attribution so scaling firms run without manual friction.",
    experienceYears: 6,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      behance: "#",
    },
  },
  {
    id: "op-4",
    name: "Sarah L.",
    codeName: "OP-NORTH-03",
    role: "Senior Executive Assistant to Founder",
    pillar: "People",
    trackRecord: "15 min",
    metricLabel: "Maximum response & routing SLA",
    deploymentStatus: "Available",
    focusAreas: ["VIP Client Comms", "Travel Logistics", "Confidential Tasks", "Project Follow-ups"],
    bio: "Trained in executive autonomy. Acts as the founder's right hand to keep all cross-functional initiatives moving.",
    experienceYears: 6,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: "op-5",
    name: "Tariq H.",
    codeName: "OP-OUTBOUND-07",
    role: "Cold Outreach Copywriter & List Researcher",
    pillar: "Pipeline",
    trackRecord: "3.2x",
    metricLabel: "Average reply rate improvement",
    deploymentStatus: "Embedded",
    focusAreas: ["ICP Filtering", "Tone Calibration", "Subject Line Testing", "Deliverability"],
    bio: "Writes short, piercing B2B outreach copy that resonates with C-suite executives and elicits meaningful replies.",
    experienceYears: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      behance: "#",
    },
  },
  {
    id: "op-6",
    name: "Elena R.",
    codeName: "OP-SYSTEMS-05",
    role: "Pipeline Analytics & Operations Specialist",
    pillar: "Systems",
    trackRecord: "48h",
    metricLabel: "Time to deploy complete outbound stack",
    deploymentStatus: "Deploying",
    focusAreas: ["Smartlead Integration", "CRM Sync", "Metrics Dashboards", "A/B Tracking"],
    bio: "Maintains real-time visibility across pipeline stages and ensures outbound handoffs into client CRMs happen seamlessly.",
    experienceYears: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

type PillarFilter = "All" | "People" | "Pipeline" | "Systems";

export function TeamShowcase() {
  const [activeFilter, setActiveFilter] = useState<PillarFilter>("All");
  const [selectedOperatorId, setSelectedOperatorId] = useState<string>("op-1");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  const filteredOperators =
    activeFilter === "All"
      ? OPERATORS_DATA
      : OPERATORS_DATA.filter((op) => op.pillar === activeFilter);

  const selectedOperator =
    OPERATORS_DATA.find((op) => op.id === selectedOperatorId) || OPERATORS_DATA[0];

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="w-full relative">
      {/* Floating Cursor Trailer with Lerp Smooth Tracking */}
      <div
        className="pointer-events-none absolute top-0 left-0 z-50 overflow-hidden rounded-xl shadow-2xl border border-[#2A2D31] bg-[#16191C]/95 backdrop-blur-md hidden md:block"
        style={{
          transform: `translate3d(${smoothPosition.x + 28}px, ${smoothPosition.y - 120}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), scale 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative w-[280px] overflow-hidden p-3.5">
          <div className="relative w-full h-[170px] rounded-lg overflow-hidden bg-[#0F1113] mb-3 border border-[#2A2D31]">
            {filteredOperators.map((operator, index) => (
              <div
                key={operator.id}
                className="absolute inset-0 w-full h-full transition-all duration-400 ease-out"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                  filter: hoveredIndex === index ? "none" : "blur(8px)",
                }}
              >
                <Image
                  src={operator.image}
                  alt={operator.name}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/30 to-transparent" />
            {hoveredIndex !== null && filteredOperators[hoveredIndex] && (
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-sans px-2 py-1 rounded bg-[#16191C]/90 backdrop-blur-md border border-[#2A2D31]">
                <span className="font-mono text-[#3E5871] font-bold">
                  {filteredOperators[hoveredIndex].codeName}
                </span>
                <span className="text-[#ECEDEF]">
                  {filteredOperators[hoveredIndex].pillar}
                </span>
              </div>
            )}
          </div>

          {hoveredIndex !== null && filteredOperators[hoveredIndex] && (
            <div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-white">
                  {filteredOperators[hoveredIndex].trackRecord}
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#3E5871] font-bold">
                  Verified Metric
                </span>
              </div>
              <div className="font-sans text-[11px] text-[#A7AAAD] leading-tight mt-0.5">
                {filteredOperators[hoveredIndex].metricLabel}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pillar Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#2A2D31]">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A7AAAD]">
            Filter Deployment Pillar:
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-[#0F1113] rounded border border-[#2A2D31]">
          {(["All", "People", "Pipeline", "Systems"] as PillarFilter[]).map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveFilter(tab);
                  setHoveredIndex(null);
                  setIsVisible(false);
                }}
                className={`px-3 py-1.5 text-xs font-sans font-medium rounded transition-all duration-150 ${
                  isActive
                    ? "bg-[#3E5871] text-white shadow-sm"
                    : "text-[#A7AAAD] hover:text-[#ECEDEF] hover:bg-[#16191C]"
                }`}
                aria-pressed={isActive}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Operator List on Left, Dossier Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Operator Showcase List */}
        <div className="lg:col-span-7">
          <div className="space-y-0">
            {filteredOperators.map((operator, index) => {
              const isSelected = selectedOperator.id === operator.id;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={operator.id}
                  onClick={() => setSelectedOperatorId(operator.id)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="group relative cursor-pointer block select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedOperatorId(operator.id);
                    }
                  }}
                  aria-label={`Select operator ${operator.name}, ${operator.role}`}
                >
                  <div
                    className={`relative py-5 px-4 rounded-lg border transition-all duration-200 ease-out flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#0F1113] border-[#3E5871] shadow-[0_0_20px_rgba(62,88,113,0.2)] ring-1 ring-[#3E5871]"
                        : "border-[#2A2D31]/70 hover:border-[#3A3E44] hover:bg-[#0F1113]/60"
                    }`}
                  >
                    {/* Background Highlight on hover */}
                    <div
                      className={`
                        absolute inset-0 rounded-lg bg-[#3E5871]/10
                        transition-all duration-200 ease-out pointer-events-none
                        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-98"}
                      `}
                    />

                    {/* Operator Details */}
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#3E5871] font-bold">
                          {operator.codeName}
                        </span>
                        <span className="text-[#3A3E44]">•</span>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#A7AAAD] px-1.5 py-0.5 bg-[#16191C] rounded border border-[#2A2D31]">
                          {operator.pillar}
                        </span>
                      </div>

                      {/* Name with Animated Expanding Underline */}
                      <div className="inline-flex items-center gap-2">
                        <h4 className="font-serif text-lg font-semibold text-white tracking-tight">
                          <span className="relative">
                            {operator.name}
                            <span
                              className={`
                                absolute left-0 -bottom-0.5 h-px bg-[#3E5871]
                                transition-all duration-300 ease-out
                                ${isHovered || isSelected ? "w-full" : "w-0"}
                              `}
                            />
                          </span>
                        </h4>

                        <ArrowUpRight
                          className={`
                            w-4 h-4 text-[#3E5871] transition-all duration-200 ease-out
                            ${
                              isHovered || isSelected
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 -translate-x-2 translate-y-2"
                            }
                          `}
                        />
                      </div>

                      <p className="font-sans text-xs text-[#A7AAAD] mt-1 line-clamp-1">
                        {operator.role}
                      </p>
                    </div>

                    {/* Metric Column & Status with #3E5871 active dot */}
                    <div className="text-right shrink-0 relative z-10">
                      <div className="font-serif text-xl font-semibold text-white leading-tight">
                        {operator.trackRecord}
                      </div>
                      <div className="font-sans text-[10px] text-[#A7AAAD] tracking-wide mt-0.5">
                        {operator.metricLabel}
                      </div>

                      <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-[#16191C] border border-[#2A2D31]">
                        {/* Active indicator dot using #3E5871 Steel Blue background */}
                        <span
                          className={`w-2 h-2 rounded-full ${
                            operator.deploymentStatus === "Available"
                              ? "bg-[#3E5871] animate-pulse"
                              : "bg-[#8E9296]"
                          }`}
                        />
                        <span className="text-[#A7AAAD]">{operator.deploymentStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Operator Dossier (Zero CLS container) */}
        <div className="lg:col-span-5 bg-[#0F1113] border border-[#2A2D31] rounded-lg p-6 lg:p-7 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3E5871] to-transparent" />

          {/* Dossier Header */}
          <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-[#2A2D31]">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="font-sans text-[10px] uppercase font-mono tracking-widest text-[#3E5871] font-bold">
                  OPERATOR DOSSIER // {selectedOperator.codeName}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-semibold text-white">
                {selectedOperator.name}
              </h4>
              <p className="font-sans text-xs text-[#3E5871] font-medium mt-0.5">
                {selectedOperator.role} • {selectedOperator.experienceYears} Years Enterprise Experience
              </p>
            </div>

            <div className="w-12 h-12 rounded bg-[#16191C] border border-[#2A2D31] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#A7AAAD]" />
            </div>
          </div>

          {/* Image + Metric preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="h-28 rounded bg-[#16191C] border border-[#2A2D31] overflow-hidden relative">
              <Image
                src={selectedOperator.image}
                alt={selectedOperator.name}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="bg-[#16191C] border border-[#2A2D31] rounded p-3.5 flex flex-col justify-center">
              <div className="font-sans text-[10px] uppercase tracking-wider text-[#A7AAAD] font-semibold mb-0.5">
                Verified SLA
              </div>
              <div className="font-serif text-2xl font-semibold text-white leading-tight">
                {selectedOperator.trackRecord}
              </div>
              <div className="font-sans text-[11px] text-[#A7AAAD] leading-tight mt-0.5">
                {selectedOperator.metricLabel}
              </div>
            </div>
          </div>

          {/* Operational Scope */}
          <div className="mb-6">
            <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#ECEDEF] font-semibold mb-2">
              Execution Scope
            </div>
            <p className="font-sans text-sm text-[#A7AAAD] leading-relaxed">
              {selectedOperator.bio}
            </p>
          </div>

          {/* Competency Tags */}
          <div className="mb-6">
            <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#ECEDEF] font-semibold mb-2.5">
              Verified Competencies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedOperator.focusAreas.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 font-sans text-[11px] px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#C6C9CC]"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#3E5871]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Operator Socials */}
          <div className="mb-8 pt-4 border-t border-[#2A2D31] flex items-center justify-between">
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#A7AAAD] font-medium">
              Verified Profiles
            </span>
            <div className="flex items-center gap-3">
              {selectedOperator.socials.linkedin && (
                <a
                  href={selectedOperator.socials.linkedin}
                  aria-label={`${selectedOperator.name} LinkedIn`}
                  className="text-[#A7AAAD] hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {selectedOperator.socials.twitter && (
                <a
                  href={selectedOperator.socials.twitter}
                  aria-label={`${selectedOperator.name} Twitter`}
                  className="text-[#A7AAAD] hover:text-white transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {selectedOperator.socials.instagram && (
                <a
                  href={selectedOperator.socials.instagram}
                  aria-label={`${selectedOperator.name} Instagram`}
                  className="text-[#A7AAAD] hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {selectedOperator.socials.behance && (
                <a
                  href={selectedOperator.socials.behance}
                  aria-label={`${selectedOperator.name} Behance`}
                  className="text-[#A7AAAD] hover:text-white transition-colors"
                >
                  <BehanceIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* CTA actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#contact"
              className="btn-solid-steel w-full text-center py-2.5 px-4 text-xs font-sans uppercase tracking-wider rounded"
            >
              Request Operator Placement
            </a>
            <a
              href="#careers"
              className="btn-outline w-full text-center py-2.5 px-4 text-xs font-sans uppercase tracking-wider rounded"
            >
              Apply as Operator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamShowcase;
