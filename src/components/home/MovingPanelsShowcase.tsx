"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Pause, Play } from "lucide-react";

export interface ShowcasePanel {
  id: number;
  image: string;
  href: string;
  alt: string;
}

export const SHOWCASE_PANELS: ShowcasePanel[] = [
  {
    id: 1,
    image: "/images/panel-4-business.jpg",
    href: "/products/laptop-and-business-bags",
    alt: "Full-Grain Executive Briefcase",
  },
  {
    id: 2,
    image: "/images/panel-5-travel.jpg",
    href: "/products/travel-bags",
    alt: "Heritage Weekender Travel Duffel",
  },
  {
    id: 3,
    image: "/images/panel-7-tote.jpg",
    href: "/products/tote-bags",
    alt: "Architectural Day Tote",
  },
  {
    id: 4,
    image: "/images/panel-3-backpack.jpg",
    href: "/products/backpacks",
    alt: "Artisan Commuter Backpack",
  },
  {
    id: 5,
    image: "/images/hero-luxury-leather.jpg",
    href: "/products/leather-handbags",
    alt: "Sculpted Luxury Handbag",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    href: "/products/wallets-and-cardholders",
    alt: "Ultra-Slim Bifold Wallet",
  },
  {
    id: 7,
    image: "/images/panel-8-amberduffel.jpg",
    href: "/products/travel-bags",
    alt: "Amber Pull-Up Holdall",
  },
  {
    id: 8,
    image: "/images/craftsmanship-hero.jpg",
    href: "/products/leather-belts",
    alt: "English Bridle Leather Belt",
  },
  {
    id: 9,
    image: "/images/craftsmanship-luxury-leather.jpg",
    href: "/craftsmanship",
    alt: "Hand-Stitched Artisan Satchel",
  },
  {
    id: 10,
    image: "/images/private-label-hero.jpg",
    href: "/private-label",
    alt: "Custom OEM Tooling & Moulds",
  },
  {
    id: 11,
    image: "/images/panel-11-bucket-bag.png",
    href: "/products/leather-handbags",
    alt: "Handcrafted Cognac Leather Bucket Shoulder Bag",
  },
  {
    id: 12,
    image: "/images/about-hero.jpg",
    href: "/products/leather-jackets",
    alt: "Tailored Lambskin Outerwear",
  },
  {
    id: 13,
    image: "/images/panel-13-tote-bag.png",
    href: "/products/tote-bags",
    alt: "Luxury Pebbled Calfskin Handbag & Tote",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    href: "/products/leather-handbags",
    alt: "Crossbody Saddle Silhouette",
  },
];

export function MovingPanelsShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the 14 panels seamlessly for continuous infinite loop
  const loopPanels = [...SHOWCASE_PANELS, ...SHOWCASE_PANELS];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 border-y border-charcoal/10 overflow-hidden">
      {/* Subtle Side Fade Overlays in White */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Header & Controls Bar */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 mb-6 sm:mb-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal/10 pb-5">
          <div className="space-y-1.5">
            <span className="text-cognac text-[10.5px] font-mono font-medium uppercase tracking-[0.2em] block">
              Atelier Production Showcase · 14 Manufacturing Lines
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Curated Export Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-xl leading-relaxed">
              Active contract manufacturing and private-label collections. Hover over any silhouette to inspect details.
            </p>
          </div>

          {/* Pause / Play Toggle */}
          <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-charcoal-50 border border-charcoal/15 text-[10.5px] uppercase tracking-wider font-mono text-charcoal transition-colors shadow-xs"
              title={isPaused ? "Resume continuous movement" : "Pause movement"}
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
            <span className="hidden md:inline-block text-[11px] text-charcoal-400 font-mono tracking-widest uppercase">
              14 Lines
            </span>
          </div>
        </div>
      </div>

      {/* The Continuous Moving Track of Luxury Panels */}
      <div className="w-full overflow-hidden relative py-2">
        <div
          className={`flex gap-5 sm:gap-6 px-4 ${
            isPaused ? "" : "animate-marquee-forward"
          } transition-all duration-300`}
          style={{
            animationDuration: "58s",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loopPanels.map((panel, idx) => (
            <Link
              key={`panel-${panel.id}-${idx}`}
              href={panel.href}
              aria-label={panel.alt}
              className="group relative block w-[260px] sm:w-[310px] lg:w-[340px] h-[370px] sm:h-[430px] lg:h-[460px] shrink-0 bg-white border border-charcoal/15 hover:border-cognac shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden select-none"
            >
              {/* Inner Frame with 100% Full Length and Breadth Image */}
              <div className="relative w-full h-full overflow-hidden bg-white">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Refined Luxury Editorial Label Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between text-white">
                  <div className="space-y-0.5 min-w-0 pr-2">
                    <span className="block text-[9px] font-mono tracking-widest uppercase text-sand-light font-medium">
                      Line {panel.id < 10 ? `0${panel.id}` : panel.id}
                    </span>
                    <span className="block font-serif text-xs sm:text-[13px] font-medium text-white truncate group-hover:text-sand-light transition-colors">
                      {panel.alt}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sand-light/80 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
