"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Pause, Play, Eye } from "lucide-react";

export interface ShowcasePanel {
  id: number;
  number: string;
  title: string;
  category: string;
  leather: string;
  moq: string;
  leadTime: string;
  highlight: string;
  image: string;
  href: string;
}

export const SHOWCASE_PANELS: ShowcasePanel[] = [
  {
    id: 1,
    number: "01",
    title: "Full-Grain Executive Briefcase",
    category: "Laptop & Business Bags",
    leather: "Full-Grain Veg-Tan Bovine",
    moq: "MOQ: 50 pcs",
    leadTime: "7–10 Days Prototyping",
    highlight: "Padded 16\" MacBook Pocket & Luggage Trolley Strap",
    image: "/images/panel-4-business.jpg",
    href: "/products/laptop-and-business-bags",
  },
  {
    id: 2,
    number: "02",
    title: "Heritage Weekender Duffel",
    category: "Travel & Duffel Bags",
    leather: "Oil Pull-Up Cowhide",
    moq: "MOQ: 40 pcs",
    leadTime: "10–12 Days Prototyping",
    highlight: "Reinforced Brass Bottom Studs & Shoe Compartment",
    image: "/images/panel-5-travel.jpg",
    href: "/products/travel-bags",
  },
  {
    id: 3,
    number: "03",
    title: "Architectural Day Tote",
    category: "Tote Bags",
    leather: "Italian Tuscan Veg-Tan",
    moq: "MOQ: 50 pcs",
    leadTime: "7–10 Days Prototyping",
    highlight: "Double-Reinforced Handles & Raw-Edge Finish",
    image: "/images/panel-7-tote.jpg",
    href: "/products/tote-bags",
  },
  {
    id: 4,
    number: "04",
    title: "Artisan Commuter Backpack",
    category: "Backpacks",
    leather: "Waxed Pull-Up & Full Grain",
    moq: "MOQ: 50 pcs",
    leadTime: "10–14 Days Prototyping",
    highlight: "Ergonomic Memory Foam Straps & YKK Excella Zippers",
    image: "/images/panel-3-backpack.jpg",
    href: "/products/backpacks",
  },
  {
    id: 5,
    number: "05",
    title: "Sculpted Luxury Handbag",
    category: "Leather Handbags",
    leather: "Calfskin Nappa & Box Calf",
    moq: "MOQ: 50 pcs",
    leadTime: "7–12 Days Prototyping",
    highlight: "Hand-Burnished Edges & Custom Gold PVD Hardware",
    image: "/images/hero-luxury-leather.jpg",
    href: "/products/leather-handbags",
  },
  {
    id: 6,
    number: "06",
    title: "Ultra-Slim Bifold Wallet",
    category: "Wallets & Cardholders",
    leather: "French Box Calfskin",
    moq: "MOQ: 100 pcs",
    leadTime: "5–7 Days Prototyping",
    highlight: "0.4mm Bevel Skiving & RFID Signal Shielding",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    href: "/products/wallets-and-cardholders",
  },
  {
    id: 7,
    number: "07",
    title: "Amber Pull-Up Holdall",
    category: "Travel & Luggage",
    leather: "Drum-Dyed Pull-Up Leather",
    moq: "MOQ: 40 pcs",
    leadTime: "10–12 Days Prototyping",
    highlight: "Heavy-Gauge Seams & Detachable Bridle Strap",
    image: "/images/panel-8-amberduffel.jpg",
    href: "/products/travel-bags",
  },
  {
    id: 8,
    number: "08",
    title: "English Bridle Dress Belt",
    category: "Leather Belts",
    leather: "English Bridle Leather",
    moq: "MOQ: 100 pcs",
    leadTime: "5–7 Days Prototyping",
    highlight: "Solid Cast Brass Buckle & Laser Monogramming",
    image: "/images/craftsmanship-hero.jpg",
    href: "/products/leather-belts",
  },
  {
    id: 9,
    number: "09",
    title: "Hand-Stitched Artisan Satchel",
    category: "Atelier Showcase",
    leather: "Heavy Veg-Tan Cowhide",
    moq: "MOQ: 50 pcs",
    leadTime: "10–14 Days Prototyping",
    highlight: "Generational Two-Needle Saddle Stitch Seam",
    image: "/images/craftsmanship-luxury-leather.jpg",
    href: "/craftsmanship",
  },
  {
    id: 10,
    number: "10",
    title: "Custom OEM Tooling & Moulds",
    category: "Private Label & OEM",
    leather: "Pantone Color Match Leather",
    moq: "Custom Tooling",
    leadTime: "7–14 Days Prototyping",
    highlight: "Custom CNC Brass Logo Dies & PVD Vacuum Plating",
    image: "/images/private-label-hero.jpg",
    href: "/private-label",
  },
  {
    id: 11,
    number: "11",
    title: "Minimalist Leather Cardholder",
    category: "Small Leather Goods",
    leather: "Buttero Italian Veg-Tan",
    moq: "MOQ: 100 pcs",
    leadTime: "5–7 Days Prototyping",
    highlight: "6 Precision Card Pockets & Cash Slot",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    href: "/products/wallets-and-cardholders",
  },
  {
    id: 12,
    number: "12",
    title: "Tailored Lambskin Outerwear",
    category: "Leather Apparel",
    leather: "Supple Lamb Nappa & Goat Suede",
    moq: "MOQ: 30 pcs",
    leadTime: "12–14 Days Prototyping",
    highlight: "Satin Jacquard Lining & Heavy Vintage Zippers",
    image: "/images/about-hero.jpg",
    href: "/products/leather-jackets",
  },
  {
    id: 13,
    number: "13",
    title: "Executive Desk Valet & Tray",
    category: "Corporate Gifts & Deskware",
    leather: "Full-Grain Saddle Leather",
    moq: "MOQ: 100 pcs",
    leadTime: "7–10 Days Prototyping",
    highlight: "Solid Brass Corner Snaps & Heat Debossed Monogram",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    href: "/products/corporate-gifts",
  },
  {
    id: 14,
    number: "14",
    title: "Crossbody Saddle Silhouette",
    category: "Leather Handbags",
    leather: "Full-Grain Calf Nappa",
    moq: "MOQ: 50 pcs",
    leadTime: "7–10 Days Prototyping",
    highlight: "Turn-Lock Clasp & 5-Layer Hand-Painted Edges",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    href: "/products/leather-handbags",
  },
];

export function MovingPanelsShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the 14 panels seamlessly for an infinite continuous loop
  const loopPanels = [...SHOWCASE_PANELS, ...SHOWCASE_PANELS];

  return (
    <section className="relative w-full bg-charcoal-950 py-16 sm:py-24 border-y-2 border-charcoal/30 overflow-hidden text-white">
      {/* Background Decorative Pattern & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(138,79,45,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-charcoal-950 via-charcoal-950/80 to-transparent z-20 pointer-events-none" />

      {/* Header & Controls Bar */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 mb-10 sm:mb-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/20 border border-cognac/40 text-cognac-200 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Active Manufacturing Lines · 14 Production Panels</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Crafted In Motion
            </h2>
            <p className="text-sm sm:text-base text-sand-dark/90 font-light max-w-2xl">
              Continuously moving showcase of our 14 core export manufacturing lines. Hover over any panel to pause and inspect technical specifications, leather grades, and sample MOQs.
            </p>
          </div>

          {/* Interactive Controls & Status */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-widest font-mono text-white transition-colors"
              title={isPaused ? "Resume continuous movement" : "Pause movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-gold fill-gold" /> Resume Motion
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-cognac fill-cognac" /> Pause Motion
                </>
              )}
            </button>
            <span className="hidden sm:inline-block text-xs text-sand/60 font-mono tracking-widest uppercase">
              14 Panels · Infinite Loop
            </span>
          </div>
        </div>
      </div>

      {/* The Continuous Moving Track */}
      <div className="w-full overflow-hidden relative">
        <div
          className={`flex gap-6 sm:gap-8 px-4 ${
            isPaused ? "" : "animate-marquee-forward"
          } transition-all duration-300`}
          style={{
            animationDuration: "56s",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {loopPanels.map((panel, idx) => (
            <Link
              key={`panel-${panel.id}-${idx}`}
              href={panel.href}
              className="group relative flex flex-col justify-between w-[290px] sm:w-[350px] lg:w-[380px] h-[480px] sm:h-[530px] shrink-0 bg-charcoal-900 border-2 border-white/15 hover:border-cognac shadow-2xl transition-all duration-500 overflow-hidden select-none"
            >
              {/* Background Image with Cinematic Hover Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-95"
                  loading="lazy"
                />
                {/* Gradient Overlays for Supreme Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/25" />
                <div className="absolute inset-0 bg-cognac/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Top Bar: Panel Number & Category Badge */}
              <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
                <div className="inline-flex items-center gap-2 bg-charcoal-950/80 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-mono font-bold tracking-widest text-gold">
                  <span>PANEL {panel.number}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/70">14</span>
                </div>
                <div className="bg-cognac text-white text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-1 shadow-md">
                  {panel.moq}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-5 sm:p-6 space-y-3.5 transform transition-transform duration-300">
                {/* Category & Leather Type */}
                <div className="space-y-1">
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cognac-300 block">
                    {panel.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white leading-tight group-hover:text-gold transition-colors">
                    {panel.title}
                  </h3>
                </div>

                {/* Technical Highlight Pill */}
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 p-2.5 text-xs text-sand/90 font-light leading-relaxed">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-sand-dark font-semibold">
                    Specification Highlight:
                  </div>
                  <div className="line-clamp-2 text-white/95 mt-0.5">
                    {panel.highlight}
                  </div>
                </div>

                {/* Footer Metadata & CTA Row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs">
                  <span className="font-mono text-sand/70 text-[11px]">
                    {panel.leather}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold tracking-wider uppercase text-cognac-300 group-hover:text-gold transition-colors text-[11px]">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Hover Glow Edge Effect */}
              <div className="absolute inset-0 border-2 border-cognac opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>

      {/* Sub-bar Prompt */}
      <div className="w-full text-center mt-8 relative z-10">
        <span className="text-xs text-sand/60 font-light tracking-wider inline-flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-cognac" /> Click any panel to view manufacturing details or request a custom OEM prototype
        </span>
      </div>
    </section>
  );
}
