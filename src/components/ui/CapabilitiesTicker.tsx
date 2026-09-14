"use client";

import React from "react";
import Image from "next/image";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ROW_ONE_CAPABILITIES: CapabilityItem[] = [
  {
    id: "embossing",
    title: "Embossing & Debossing",
    description: "Blind deboss, gold foil, silver foil, heated branding iron.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "saddle-stitch",
    title: "Hand Saddle-Stitching",
    description: "Generational waxed linen thread, double-needle artisan seam.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "edge-inking",
    title: "Italian Edge Inking",
    description: "3–5 coats hand-painted, heat-sealed Italian Fenice lacquer.",
    image: "/images/craftsmanship-hero.jpg",
  },
  {
    id: "skiving",
    title: "Micro-Skiving & Splitting",
    description: "German Fortuna bevel skiving down to 0.4mm tolerances.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "metal-tooling",
    title: "Custom Metal Tooling",
    description: "Solid brass cast moulds, PVD vacuum plating, laser-etched hardware.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "pantone-dyeing",
    title: "Pantone Leather Dyeing",
    description: "Custom drum dyeing, aniline dip, pull-up wax finish to exact codes.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=200&q=80",
  },
];

const ROW_TWO_CAPABILITIES: CapabilityItem[] = [
  {
    id: "laser-cutting",
    title: "Laser Cutting & Filigree",
    description: "CNC optical cutting, micro-perforation, intricate leather cutouts.",
    image: "/images/craftsmanship-luxury-leather.jpg",
  },
  {
    id: "burnishing",
    title: "Artisan Hand-Burnishing",
    description: "Natural beeswax and carnauba edge burnishing with bone slickers.",
    image: "/images/hero-luxury-leather.png",
  },
  {
    id: "rfid",
    title: "RFID Signal Shielding",
    description: "Aerospace-grade copper/nickel shielding foil embedded in lining.",
    image: "/images/about-hero.jpg",
  },
  {
    id: "quilting",
    title: "Quilting & Padding",
    description: "Diamond, chevron, and custom matelassé padding with EVA foam.",
    image: "/images/catalogue-hero.png",
  },
  {
    id: "exotic-emboss",
    title: "Exotic Texture Pressing",
    description: "Crocodile, python, lizard, and ostrich heat-embossed bovine leather.",
    image: "/images/hero-luxury-leather.jpg",
  },
  {
    id: "custom-linings",
    title: "Custom Silk & Twill Linings",
    description: "Yarn-dyed jacquard, organic cotton twill, and sueded microfibers.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=200&q=80",
  },
];

export function CapabilitiesTicker() {
  // Double arrays for seamless infinite loop
  const rowOneItems = [...ROW_ONE_CAPABILITIES, ...ROW_ONE_CAPABILITIES];
  const rowTwoItems = [...ROW_TWO_CAPABILITIES, ...ROW_TWO_CAPABILITIES];

  return (
    <section className="w-full bg-[#faf8f5] py-10 sm:py-14 border-t border-charcoal/10 overflow-hidden">
      {/* Header */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mb-8 text-center max-w-3xl mx-auto space-y-2">
        <span className="text-cognac uppercase tracking-[0.22em] text-[10px] font-bold block">
          ★ Atelier Finishing & Craftsmanship
        </span>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight uppercase">
          In-House Manufacturing Capabilities
        </h2>
        <p className="text-xs text-charcoal-500 font-light max-w-xl mx-auto leading-relaxed">
          Proprietary artisanal and industrial techniques executed in-house for international private labels and luxury houses.
        </p>
      </div>

      {/* Row 1: Forward Moving Ticker */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee-forward gap-3.5 sm:gap-5 px-4">
          {rowOneItems.map((item, idx) => (
            <div
              key={`r1-${item.id}-${idx}`}
              className="bg-white rounded-none border border-charcoal/12 hover:border-cognac shadow-xs hover:shadow-md p-3.5 sm:p-4 flex items-center gap-3.5 min-w-[300px] sm:min-w-[340px] max-w-[340px] transition-all duration-300 select-none shrink-0 group"
            >
              {/* Left Thumbnail */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-none overflow-hidden shrink-0 bg-charcoal-50 border border-charcoal/10 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-serif text-xs sm:text-[13px] font-semibold text-charcoal group-hover:text-cognac transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[10.5px] text-charcoal-500 font-light leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Moving Ticker */}
      <div className="w-full overflow-hidden py-2.5">
        <div className="animate-marquee-reverse gap-4 sm:gap-6 px-4">
          {rowTwoItems.map((item, idx) => (
            <div
              key={`r2-${item.id}-${idx}`}
              className="bg-white rounded-none border border-charcoal/15 hover:border-cognac shadow-xs hover:shadow-md p-4 sm:p-4.5 flex items-center gap-4 min-w-[320px] sm:min-w-[360px] max-w-[360px] transition-all duration-300 select-none shrink-0 group"
            >
              {/* Left Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none overflow-hidden shrink-0 bg-charcoal-50 border border-charcoal/10 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-1 min-w-0">
                <h3 className="font-serif text-sm sm:text-base font-bold text-charcoal group-hover:text-cognac transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-charcoal-500 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
