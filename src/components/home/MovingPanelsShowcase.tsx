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
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    href: "/products/wallets-and-cardholders",
    alt: "Minimalist Leather Cardholder",
  },
  {
    id: 12,
    image: "/images/about-hero.jpg",
    href: "/products/leather-jackets",
    alt: "Tailored Lambskin Outerwear",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    href: "/products/corporate-gifts",
    alt: "Executive Desk Valet & Tray",
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
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 mb-8 sm:mb-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-cognac text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-cognac" />
              <span>Production Gallery · 14 Manufacturing Lines</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal uppercase tracking-tight">
              Crafted In Motion
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-xl">
              Continuous live showcase of our atelier manufacturing lines. Hover over any panel to pause.
            </p>
          </div>

          {/* Pause / Play Toggle */}
          <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-charcoal-50 border border-charcoal/20 text-xs uppercase tracking-widest font-mono text-charcoal transition-colors shadow-sm"
              title={isPaused ? "Resume continuous movement" : "Pause movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-cognac fill-cognac" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-charcoal-600 fill-charcoal-600" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>
            <span className="hidden md:inline-block text-xs text-charcoal-400 font-mono tracking-widest uppercase">
              14 Panels
            </span>
          </div>
        </div>
      </div>

      {/* The Continuous Moving Track of Pure White Panels (No Text) */}
      <div className="w-full overflow-hidden relative py-2">
        <div
          className={`flex gap-6 sm:gap-8 px-4 ${
            isPaused ? "" : "animate-marquee-forward"
          } transition-all duration-300`}
          style={{
            animationDuration: "52s",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loopPanels.map((panel, idx) => (
            <Link
              key={`panel-${panel.id}-${idx}`}
              href={panel.href}
              aria-label={panel.alt}
              className="group relative block w-[260px] sm:w-[320px] lg:w-[350px] h-[370px] sm:h-[440px] lg:h-[480px] shrink-0 bg-white p-3 sm:p-3.5 border-2 border-charcoal/10 hover:border-cognac shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden select-none"
            >
              {/* Inner White Frame with Pure Image & Zero Text */}
              <div className="relative w-full h-full overflow-hidden bg-charcoal-50">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Subtle Luxury Cognac Border Highlight on Hover */}
              <div className="absolute inset-0 border-2 border-cognac opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
