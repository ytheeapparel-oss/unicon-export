"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { cn } from "@/lib/utils";

export function InternationalRegionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Determine current active region
  const activeMarket = Object.values(INTERNATIONAL_MARKETS).find((m) =>
    pathname.startsWith(m.path)
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select International Region"
        className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-[#DDD8CF] hover:border-cognac text-[11px] font-mono uppercase tracking-wider text-charcoal hover:text-cognac transition-colors shadow-2xs"
      >
        <span className="text-xs">{activeMarket ? activeMarket.flag : "🌐"}</span>
        <span className="font-semibold hidden sm:inline">
          {activeMarket ? activeMarket.currency : "GLOBAL"}
        </span>
        <span className="text-[#999] text-[9px]">({activeMarket ? activeMarket.currencySymbol : "FOB"})</span>
        <ChevronDown className={cn("w-3 h-3 text-[#777] transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-72 bg-white border border-charcoal/20 shadow-2xl z-50 divide-y divide-charcoal/10 animate-in fade-in-50 duration-150">
          <div className="p-2.5 bg-[#FAF8F5]">
            <span className="text-[9.5px] font-mono tracking-widest uppercase text-charcoal-500 block">
              International Trade Gateways
            </span>
            <p className="text-[11px] text-charcoal-600 mt-0.5 font-light">
              Select your sourcing region for localized duty & compliance terms:
            </p>
          </div>

          <div className="py-1">
            {/* 1. Global Master */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] transition-colors group",
                !activeMarket && "bg-cognac/5 font-semibold text-cognac"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">🌐</span>
                <div>
                  <span className="block font-medium text-charcoal group-hover:text-cognac">
                    Global Export Portal
                  </span>
                  <span className="text-[10px] text-charcoal-500 font-mono">
                    Worldwide · FOB & CIF Terms
                  </span>
                </div>
              </div>
              {!activeMarket && <Check className="w-3.5 h-3.5 text-cognac" />}
            </Link>

            {/* 2. Target Markets */}
            {Object.values(INTERNATIONAL_MARKETS).map((m) => {
              const isSelected = activeMarket?.code === m.code;

              return (
                <Link
                  key={m.code}
                  href={m.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] transition-colors group",
                    isSelected && "bg-cognac/5 font-semibold text-cognac"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{m.flag}</span>
                    <div>
                      <span className="block font-medium text-charcoal group-hover:text-cognac">
                        {m.countryName}
                      </span>
                      <span className="text-[10px] text-charcoal-500 font-mono">
                        {m.currency} ({m.currencySymbol}) · {m.complianceBadges[0].title}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cognac" />}
                </Link>
              );
            })}
          </div>

          <div className="p-2 bg-[#F7F5F0] text-center">
            <span className="text-[10px] font-mono text-charcoal-500">
              Direct Air & Sea DDP Delivery Worldwide
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
