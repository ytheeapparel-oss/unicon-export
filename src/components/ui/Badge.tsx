import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "cognac" | "outline" | "charcoal" | "sand";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-sand/30 text-charcoal-800 border-sand/50",
    gold: "bg-gold/15 text-gold-dark border-gold/40 font-medium",
    cognac: "bg-cognac/10 text-cognac-700 border-cognac/30",
    charcoal: "bg-charcoal text-ivory border-charcoal-700",
    outline: "bg-transparent text-charcoal-700 border-charcoal/20",
    sand: "bg-sand-light/60 text-espresso border-sand",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase",
    md: "text-xs px-3 py-1 tracking-wider uppercase",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-sans rounded border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
