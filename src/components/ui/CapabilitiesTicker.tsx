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
    <section className="w-full bg-charcoal-50/50 py-16 sm:py-24 border-t-2 border-charcoal/10 overflow-hidden">
      {/* Header */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 mb-10 text-center max-w-4xl mx-auto space-y-3">
        <span className="text-cognac uppercase tracking-[0.25em] text-xs sm:text-sm font-bold block">
          ★ Atelier Finishing & Techniques
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-black text-charcoal tracking-tight uppercase">
          Comprehensive Manufacturing Capabilities
        </h2>
        <p className="text-xs sm:text-base text-charcoal-600 font-light max-w-2xl mx-auto">
          Explore the proprietary artisanal and industrial techniques executed in-house for international private labels and fashion houses.
        </p>
      </div>

      {/* Row 1: Forward Moving Ticker */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee-forward gap-5 sm:gap-6 px-4">
          {rowOneItems.map((item, idx) => (
            <div
              key={`r1-${item.id}-${idx}`}
              className="bg-white rounded-[24px] border border-charcoal/12 shadow-sm hover:shadow-md p-4 sm:p-5 flex items-center gap-4 min-w-[320px] sm:min-w-[370px] max-w-[370px] transition-all duration-300 select-none shrink-0"
            >
              {/* Left Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] overflow-hidden shrink-0 bg-charcoal-50 border border-charcoal/10 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-1 min-w-0">
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-500 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Moving Ticker */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee-reverse gap-5 sm:gap-6 px-4">
          {rowTwoItems.map((item, idx) => (
            <div
              key={`r2-${item.id}-${idx}`}
              className="bg-white rounded-[24px] border border-charcoal/12 shadow-sm hover:shadow-md p-4 sm:p-5 flex items-center gap-4 min-w-[320px] sm:min-w-[370px] max-w-[370px] transition-all duration-300 select-none shrink-0"
            >
              {/* Left Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] overflow-hidden shrink-0 bg-charcoal-50 border border-charcoal/10 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-1 min-w-0">
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-500 font-light leading-relaxed line-clamp-2">
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
