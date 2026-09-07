import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside aria-label="Export Notice" className="bg-[#11100F] text-white text-xs border-b border-charcoal-800 py-2.5 px-4 sm:px-8">
      <div className="w-full max-w-[1680px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center">
          <span className="inline-flex items-center gap-1.5 text-gold-light font-medium tracking-wide uppercase text-[10px] bg-charcoal-800 px-2.5 py-0.5 rounded border border-gold/30">
            <Globe className="w-3 h-3 text-gold" /> Global Export Desk
          </span>
          <span className="text-gray-300 hidden md:inline text-xs">
            Direct B2B Manufacturing & OEM Exports to USA, UK, EU, UAE, Australia & Japan
          </span>
          <span className="text-gray-300 md:hidden text-[11px]">
            Worldwide B2B Leather Export & OEM Production
          </span>
        </div>

        <div className="flex items-center gap-5 text-[11px]">
          <span className="text-gray-300 hidden lg:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" /> REACH & CA Prop 65 Lab Tested
          </span>
          <Link
            href="/catalogue-request"
            className="text-white hover:text-gold transition-colors inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-gold/50 hover:decoration-gold"
          >
            Download 2025 Lookbook <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
