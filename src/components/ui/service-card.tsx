import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  features: string[];
  className?: string;
}

export function ServiceCard({ id, title, features, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        // White card on dark background — the "white touch"
        "card-white p-8 rounded-2xl flex flex-col group",
        "transition-all duration-300 cursor-default",
        className
      )}
    >
      <span className="text-xs font-bold tracking-widest text-[#3E5871] mb-6 font-sans">
        {id}
      </span>
      <h3 className="text-2xl font-serif font-semibold text-[#0F1113] mb-6">
        {title}
      </h3>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, i) => (
          <li key={i} className="text-[#3A3E44] text-sm flex items-start gap-2">
            <span className="text-[#3E5871] mt-0.5 shrink-0">▹</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
