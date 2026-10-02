"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Pause, Play, ArrowRight, Layers } from "lucide-react";
import { NPD_PANELS, type NpdPanel } from "@/data/newProductDevelopment";

export function NewProductDevelopmentShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the 15 square panels for seamless infinite marquee loop
  const loopPanels = [...NPD_PANELS, ...NPD_PANELS];

  return (
    <section
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 border-b border-charcoal/10 overflow-hidden"
      id="new-product-development"
    >
      {/* Subtle Side Fade Overlays for seamless edge transition */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20 pointer-events-none" />

      {/* Header & Controls Bar */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 mb-8 sm:mb-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-charcoal/10 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/10 border border-cognac/20 text-cognac font-mono text-[10.5px] tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> R&amp;D Atelier &amp; Prototyping Lab · 15 New Silhouettes
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              New Product Development <span className="italic text-cognac font-light">&amp; Innovations</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
              Explore our latest prototype releases, master counter-samples, and custom mould engineering developed for international designer collections. Ready for tech pack evaluation and private-label sample requests.
            </p>
          </div>

          {/* Controls & Quick RFP Action */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="#rfp-form"
              className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal hover:bg-cognac text-white text-[11px] uppercase tracking-wider font-mono transition-colors shadow-xs"
            >
              <span>Request Prototype Sample</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-charcoal/5 border border-charcoal/15 text-[10.5px] uppercase tracking-wider font-mono text-charcoal transition-colors shadow-xs cursor-pointer"
              title={isPaused ? "Resume movement" : "Pause movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-cognac fill-cognac" />
                  <span>Resume Drift</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-charcoal-600 fill-charcoal-600" />
                  <span>Pause</span>
                </>
              )}
            </button>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-charcoal/10 text-[10.5px] font-mono text-charcoal-500 uppercase tracking-widest">
              <Layers className="w-3 h-3 text-cognac" /> 15 Square Panels
            </span>
          </div>
        </div>
      </div>

      {/* Continuous Moving Track: 15 Square Panels */}
      <div className="w-full overflow-hidden relative py-3">
        <div
          className={`flex gap-5 sm:gap-6 px-4 ${
            isPaused ? "" : "animate-marquee-reverse"
          } transition-all duration-300`}
          style={{
            animationDuration: "62s",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loopPanels.map((panel: NpdPanel, idx: number) => (
            <Link
              key={`npd-panel-${panel.id}-${idx}`}
              href={panel.href}
              aria-label={`${panel.code} — ${panel.title}`}
              className="group relative block w-[240px] sm:w-[280px] lg:w-[320px] h-[240px] sm:h-[280px] lg:h-[320px] aspect-square shrink-0 bg-white border border-charcoal/15 hover:border-cognac shadow-xs hover:shadow-2xl transition-all duration-500 overflow-hidden select-none"
            >
              {/* Inner Square Frame */}
              <div className="relative w-full h-full overflow-hidden bg-white">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Top Floating Badge Bar */}
                <div className="absolute inset-x-0 top-0 p-3 flex items-start justify-between pointer-events-none z-10">
                  <span className="inline-block px-2 py-0.5 bg-black/75 backdrop-blur-xs text-white text-[9.5px] font-mono tracking-widest uppercase border border-white/10 shadow-xs">
                    {panel.code}
                  </span>
                  {panel.badge && (
                    <span className="inline-block px-2 py-0.5 bg-cognac/90 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider font-semibold shadow-xs">
                      {panel.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Luxury Editorial Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/55 to-transparent flex flex-col justify-end text-white z-10">
                  <div className="space-y-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-sand-light/80">
                        {panel.category}
                      </span>
                      <span className="text-[8.5px] font-mono text-sand-light/60">·</span>
                      <span className="text-[8.5px] font-mono text-cognac-200">
                        {panel.stage}
                      </span>
                    </div>
                    <h3 className="font-serif text-xs sm:text-[13.5px] font-medium text-white truncate group-hover:text-sand-light transition-colors">
                      {panel.title}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-sand-light">
                      Inquire Prototype
                    </span>
                    <ArrowRight className="w-3 h-3 text-sand-light transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
