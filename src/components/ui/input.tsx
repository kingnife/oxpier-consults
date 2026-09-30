import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "outline" | "filled";
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "outline", error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full text-sm rounded px-4 py-3 font-sans transition-colors duration-200",
          "placeholder:text-[#ECEDEF]/40 text-[#ECEDEF]",
          "focus:outline-none disabled:opacity-50",
          variant === "outline" &&
            "bg-[#16191C] border border-[#2A2D31] focus:border-[#3E5871]",
          variant === "filled" &&
            "bg-[#0F1113] border border-[#2A2D31] focus:border-[#3E5871]",
          error && "border-red-500/60 focus:border-red-400",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
