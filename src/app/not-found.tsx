import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F1113] text-[#ECEDEF] flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3E5871]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-xl mx-auto text-center space-y-6 relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16191C] border border-[#2A2D31] text-xs font-mono text-[#A7AAAD]">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span>Error 404</span>
          <span className="text-[#3E5871]">•</span>
          <span>Route Not Found</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          Execution path not found.
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#ECEDEF]/70 max-w-md mx-auto font-sans leading-relaxed">
          The requested coordinate does not exist or has been relocated to another operational sector.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#3E5871] hover:bg-[#5B7C9C] text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all shadow-[0_2px_12px_rgba(62,88,113,0.35)]"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#16191C] hover:bg-[#2A2D31] text-[#ECEDEF] border border-[#2A2D31] text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all"
          >
            <Compass className="w-4 h-4 text-[#A7AAAD]" />
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
