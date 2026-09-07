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
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cognac focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wider uppercase";

    const variantStyles = {
      primary:
        "bg-cognac text-white hover:bg-cognac-600 active:bg-cognac-700 shadow-md hover:shadow-xl border border-cognac-700",
      secondary:
        "bg-charcoal text-white hover:bg-charcoal-800 active:bg-black border border-charcoal",
      outline:
        "bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white active:bg-black",
      gold:
        "bg-gold text-charcoal-950 hover:bg-gold-light active:bg-gold-dark border border-gold-dark/40 font-bold shadow-md",
      ghost:
        "bg-transparent text-charcoal hover:text-cognac hover:bg-black/5",
      dark:
        "bg-espresso text-white hover:bg-espresso-light border border-espresso-dark",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2.5 rounded-none gap-2",
      md: "text-sm px-6 py-3.5 rounded-none gap-2.5",
      lg: "text-base px-8 py-4.5 rounded-none gap-3 font-bold",
      xl: "text-lg px-10 py-5 rounded-none gap-3.5 font-bold",
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
