import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  symbolOnly?: boolean;
}

export function OxpierSymbol({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Metal gradient 1 */}
        <linearGradient id="metalGrad1" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E5E5E5" />
          <stop offset="65%" stopColor="#C6C9CC" />
          <stop offset="100%" stopColor="#8E9296" />
        </linearGradient>

        {/* Metal gradient 2 - inverted for interlocking depth */}
        <linearGradient id="metalGrad2" x1="85%" y1="15%" x2="20%" y2="85%">
          <stop offset="0%" stopColor="#F5F6F7" />
          <stop offset="40%" stopColor="#D2D5D8" />
          <stop offset="75%" stopColor="#A7AAAD" />
          <stop offset="100%" stopColor="#55595E" />
        </linearGradient>

        {/* Inner shadow/bevel filter */}
        <filter id="metallicBevel" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Interlocking brushed-metal ring geometry */}
      {/* Outer loop */}
      <path
        d="M 50 10 
           A 40 40 0 1 0 88 62 
           C 82 52 72 46 60 48 
           C 48 50 42 62 44 72 
           C 46 80 54 86 64 86 
           A 36 36 0 0 1 20 50 
           A 30 30 0 0 1 50 20 
           C 66 20 78 30 82 44 
           C 84 32 76 18 64 12 
           C 59 10 54 10 50 10 Z"
        fill="url(#metalGrad1)"
        filter="url(#metallicBevel)"
      />

      {/* Inner interlock ring arc */}
      <path
        d="M 50 20 
           C 33.4 20 20 33.4 20 50 
           C 20 66.6 33.4 80 50 80 
           C 63 80 74 72 78 60 
           C 74 65 67 68 60 68 
           C 50 68 42 60 42 50 
           C 42 40 50 32 60 32 
           C 67 32 73 35 77 40 
           C 73 28 62 20 50 20 Z"
        fill="url(#metalGrad2)"
        opacity="0.95"
      />

      {/* Central specular highlight ring */}
      <circle
        cx="50"
        cy="50"
        r="18"
        stroke="url(#metalGrad1)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="75 35"
        opacity="0.85"
      />
    </svg>
  );
}

export function OxpierLogo({
  className = "",
  showTagline = true,
  size = "md",
  symbolOnly = false,
}: LogoProps) {
  const symbolSizes = {
    sm: 28,
    md: 38,
    lg: 48,
  };

  const currentSize = symbolSizes[size];

  if (symbolOnly) {
    return <OxpierSymbol size={currentSize} className={className} />;
  }

  return (
    <div
      className={`inline-flex items-center gap-3.5 select-none min-w-[140px] ${className}`}
      aria-label="Oxpier Consults Logo"
    >
      <OxpierSymbol size={currentSize} />
      <div className="flex flex-col">
        <span
          className="font-serif font-semibold tracking-tight text-white leading-none text-[1.125rem] md:text-[1.25rem]"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 70%, #C6C9CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Oxpier Consults
        </span>
        {showTagline && (
          <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#A7AAAD] mt-1 font-medium">
            ANCHORED IN EXCELLENCE...
          </span>
        )}
      </div>
    </div>
  );
}
