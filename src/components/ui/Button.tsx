import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, isExternal, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cognac disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-[0.14em] uppercase text-center select-none";

    const variantStyles = {
      primary:
        "bg-cognac text-white hover:bg-cognac-600 active:bg-cognac-700 shadow-xs hover:shadow-md border border-cognac/80",
      secondary:
        "bg-charcoal text-white hover:bg-charcoal-800 active:bg-black border border-charcoal shadow-xs",
      outline:
        "bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-white active:bg-black",
      gold:
        "bg-gold text-charcoal-950 hover:bg-gold-light active:bg-gold-dark border border-gold-dark/40 shadow-xs",
      ghost:
        "bg-transparent text-charcoal hover:text-cognac hover:bg-black/5",
      dark:
        "bg-espresso text-white hover:bg-espresso-light border border-espresso-dark shadow-xs",
    };

    const sizeStyles = {
      sm: "text-[11px] px-3.5 py-2 rounded-none gap-2",
      md: "text-xs px-5 py-2.5 rounded-none gap-2",
      lg: "text-xs sm:text-sm px-6 py-3 rounded-none gap-2.5 font-medium",
      xl: "text-xs sm:text-sm px-7 py-3.5 rounded-none gap-3 font-semibold tracking-[0.16em]",
    };

    const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
