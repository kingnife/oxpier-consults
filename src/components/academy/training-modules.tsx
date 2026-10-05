import React from "react";
import {
  Calendar,
  Database,
  FileText,
  Search,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface TrainingModule {
  id: string;
  code: string;
  title: string;
  category: string;
  duration: string;
  icon: React.ElementType;
  description: string;
  coreDrills: string[];
  benchmarkTest: string;
}

const MODULES: TrainingModule[] = [
  {
    id: "module-01",
    code: "ROT-101",
    title: "Executive Calendar Architecture & Gatekeeping",
    category: "Executive Operations",
    duration: "18 Hours",
    icon: Calendar,
    description:
      "Master multi-timezone scheduling, buffer construction, and executive defense. You will protect leadership hours from low-leverage interruptions.",
    coreDrills: [
      "Simulated 40-meeting week conflict triage",
      "Executive timezone handoffs across US, UK, and APAC",
      "VIP travel coordination with contingency routing",
    ],
    benchmarkTest: "Clear a 15-conflict calendar simulation in under 12 minutes with zero double-bookings.",
  },
  {
    id: "module-02",
    code: "ROT-102",
    title: "Outbound Pipeline Operations & CRM Hygiene",
    category: "Revenue & Growth",
    duration: "24 Hours",
    icon: Database,
    description:
      "Build and maintain pristine pipeline infrastructure. You learn data enrichment, list verification, and structured handoffs between operators and account directors.",
    coreDrills: [
      "Apollo and Clay list enrichment with custom waterfall filters",
      "HubSpot and Salesforce stage validation and lifecycle tracking",
      "Outbound message scheduling with strict deliverability guardrails",
    ],
    benchmarkTest: "Enrich and verify 500 decision-maker records with a verified bounce rate under 1.5%.",
  },
  {
    id: "module-03",
    code: "ROT-103",
    title: "Asynchronous Documentation & SOP Synthesis",
    category: "Systems & Infrastructure",
    duration: "16 Hours",
    icon: FileText,
    description:
      "Translate chaotic founder instructions into clean standard operating procedures. Build Notion workspaces that teams can run without real-time guidance.",
    coreDrills: [
      "Transforming raw 10-minute Loom recordings into bulletproof step-by-step guides",
      "Notion relational database architecture and permission hierarchies",
      "Exception handling matrices for operational edge cases",
    ],
    benchmarkTest: "Author a production-grade onboarding handbook that passes a blind operator handoff test.",
  },
  {
    id: "module-04",
    code: "ROT-104",
    title: "Executive Intelligence & Market Briefings",
    category: "Executive Operations",
    duration: "14 Hours",
    icon: Search,
    description:
      "Extract signal from corporate noise. You will synthesize quarterly reports, competitor pricing models, and candidate dossiers into concise executive briefings.",
    coreDrills: [
      "One-page executive pre-meeting dossiers for high-stakes investor calls",
      "Competitor feature tracking and pricing teardown matrices",
      "Fast synthesis of SEC filings and earnings call transcripts",
    ],
    benchmarkTest: "Deliver a comprehensive, verified investor profile within a strict 30-minute timed sprint.",
  },
  {
    id: "module-05",
    code: "ROT-105",
    title: "Crisis Escalation & High-Stakes Communication",
    category: "Client Retention",
    duration: "12 Hours",
    icon: AlertTriangle,
    description:
      "Resolve urgent client fires with speed and composure. You will drill client escalation playbooks, vendor disputes, and preemptive operational updates.",
    coreDrills: [
      "Live simulations of misrouted shipments and critical deadline breaches",
      "Direct Slack messaging frameworks for high-stress stakeholders",
      "Root cause analysis and prevention memos for executive leadership",
    ],
    benchmarkTest: "Defuse a simulated tier-one client incident within 8 minutes using verified protocol.",
  },
  {
    id: "module-06",
    code: "ROT-106",
    title: "Operational Metrics, Ledgers & Weekly Reporting",
    category: "Financial Systems",
    duration: "16 Hours",
    icon: BarChart3,
    description:
      "Own operational numbers with complete accuracy. You will reconcile contractor hours, run monthly expense audits, and prepare clean executive dashboards.",
    coreDrills: [
      "Contractor invoice audits and multi-currency payout reconciliation",
      "Weekly operational scorecards tracking team throughput and error rates",
      "Budget variance tracking in Google Sheets and Airtable",
    ],
    benchmarkTest: "Identify three buried discrepancies across a 200-row ledger drill with 100% accuracy.",
  },
];

export function TrainingModules() {
  return (
    <section id="training" className="py-24 px-4 bg-[#0F1113]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16191C] border border-[#2A2D31] text-[#3E5871] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Academy Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            Remote Operator Training.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#ECEDEF]/70 font-sans">
            Generalist assistants face automation and wage compression. Specialized remote operators command equity, trust, and premium compensation. Our curriculum enforces battle-tested client environments with zero academic fluff.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="bg-[#16191C] border border-[#2A2D31] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#3E5871] transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Code and Duration */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] px-2 py-0.5 rounded bg-[#0F1113] text-[#5B7C9C] border border-[#2A2D31]">
                      {m.code}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#A7AAAD]">
                      <Clock className="w-3 h-3 text-[#3E5871]" />
                      {m.duration}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-[#0F1113] border border-[#2A2D31] flex items-center justify-center shrink-0 group-hover:border-[#3E5871] transition-colors">
                      <Icon className="w-5 h-5 text-[#5B7C9C]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7AAAD] block mb-1">
                        {m.category}
                      </span>
                      <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#ECEDEF] transition-colors leading-snug">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#ECEDEF]/70 leading-relaxed mb-6 font-sans">
                    {m.description}
                  </p>

                  {/* Core Drills */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#2A2D31]/80">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7AAAD] block mb-2">
                      Hands-On Drills
                    </span>
                    {m.coreDrills.map((drill) => (
                      <div key={drill} className="flex items-start gap-2 text-xs text-[#ECEDEF]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3E5871] shrink-0 mt-0.5" />
                        <span>{drill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benchmark Verification Footer */}
                <div className="mt-4 pt-4 border-t border-[#2A2D31] bg-[#0F1113]/60 -mx-6 -mb-6 p-4 rounded-b-xl">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#5B7C9C] mb-1">
                    Graduation Benchmark
                  </div>
                  <p className="text-[11px] text-[#A7AAAD] leading-relaxed">
                    {m.benchmarkTest}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
