import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid-steel" | "ghost" | "outline" | "metal";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  variant = "solid-steel",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.12em] font-semibold rounded transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    "solid-steel":
      "bg-[#3E5871] text-white border border-white/10 hover:bg-[#5B7C9C] shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_rgba(62,88,113,0.35)] hover:-translate-y-px active:translate-y-0",
    ghost:
      "bg-transparent text-[#A7AAAD] border border-transparent hover:text-[#ECEDEF] hover:bg-[#16191C]",
    outline:
      "bg-transparent text-[#ECEDEF] border border-[#3A3E44] hover:border-[#C6C9CC] hover:bg-[#16191C] hover:text-white",
    metal:
      "bg-gradient-to-b from-white via-[#E5E5E5] to-[#C6C9CC] text-[#0F1113] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(229,229,229,0.15)] active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-2.5 text-xs",
    lg: "px-8 py-3.5 text-xs",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

// Polymorphic link variant
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid-steel" | "ghost" | "outline" | "metal";
  size?: "sm" | "md" | "lg";
}

export function ButtonLink({
  variant = "solid-steel",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.12em] font-semibold rounded transition-all duration-200 cursor-pointer";

  const variants = {
    "solid-steel":
      "bg-[#3E5871] text-white border border-white/10 hover:bg-[#5B7C9C] shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_rgba(62,88,113,0.35)] hover:-translate-y-px active:translate-y-0",
    ghost:
      "bg-transparent text-[#A7AAAD] border border-transparent hover:text-[#ECEDEF] hover:bg-[#16191C]",
    outline:
      "bg-transparent text-[#ECEDEF] border border-[#3A3E44] hover:border-[#C6C9CC] hover:bg-[#16191C] hover:text-white",
    metal:
      "bg-gradient-to-b from-white via-[#E5E5E5] to-[#C6C9CC] text-[#0F1113] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(229,229,229,0.15)] active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-2.5 text-xs",
    lg: "px-8 py-3.5 text-xs",
  };

  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
