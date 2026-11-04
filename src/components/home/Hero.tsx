"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Sliders,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";

export function Hero() {
  return (
    /* <!-- HERO COMPONENT: 100% Full Breadth x Full Length Immersive Editorial Canvas --> */
    <section
      aria-label="Unicon Leather B2B Custom Leather Manufacturing Overview"
      className="relative w-full !mt-0 min-h-[720px] sm:min-h-[780px] lg:min-h-[850px] flex items-center overflow-hidden border-b border-charcoal/10 bg-[#FAF8F5]"
    >
      {/* 1. Full Length & Full Breadth Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/images/home-hero-leather.jpg"
          alt="UNICON LEATHER - Custom Leather Jackets, Luxury Handbags, Genuine Leather Accessories & Global OEM Export Atelier"
          className="w-full h-full object-cover object-[center_right] lg:object-center transform scale-100"
          loading="eager"
        />
        {/* Soft, Clean Luxury Ivory Scrim for High-Contrast Accessible Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/94 to-[#FAF8F5]/45 sm:from-[#FAF8F5]/98 sm:via-[#FAF8F5]/88 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-90 h-32 bottom-0 top-auto" />
      </div>

      {/* 2. Full Width Content Overlay */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2.5 flex-wrap">
            <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 shadow-xs">
              Kolkata Factory &amp; Noida Export Desk · Est. {COMPANY_INFO.establishedYear}
            </span>
            <span className="text-charcoal/30">·</span>
            <span className="text-[10px] sm:text-xs text-cognac font-mono tracking-widest uppercase font-semibold">
              Handbags · Totes · Jackets · Wallets · Belts
            </span>
          </div>

          {/* Main Luxury Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-normal text-charcoal leading-[1.08] tracking-tight">
            Private Label Leather Bags &amp; Jackets for{" "}
            <span className="italic text-cognac font-light">European &amp; Global Brands</span>
          </h1>

          {/* Buyer-Focused Editorial Lead + Answer-First B2B Summary */}
          <div className="space-y-3 max-w-2xl bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-xs">
            <p className="text-sm sm:text-base lg:text-[17px] text-charcoal-900 leading-relaxed font-normal">
              Discuss your collection with <strong>Unicon Leather</strong>—from material selection and sampling to custom branding and export planning. Share your design, quantity, and destination to request a project-specific quotation.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              Operating from our 4-plot atelier in the Kolkata Leather Complex (Zone 09, Bantala) and our Noida corporate showroom, we craft custom handbags, totes, briefcases, travel duffels, tailored jackets, RFID wallets, and bridle belts using hides from <strong>LWG-audited partner tanneries</strong>—with <strong>50-piece stock-leather trial MOQs (100–200 pcs custom dye)</strong>, <strong>5–7 day SLG / 7–14 day bag &amp; jacket sampling in stock leather</strong> (+7–10 days for custom dye/tooling), batch <strong>EU/UK REACH &amp; US Prop 65 testing</strong>, and FOB, CIF, or DDP delivery in <strong>EUR (€), GBP (£), and USD ($)</strong>.
            </p>
          </div>

          {/* Answer-First Quick Feature Bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700 pt-1 max-w-2xl">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
              <span><strong>Bags, Totes &amp; Jackets:</strong> 50 pcs Stock Trial / 100 pcs Custom Dye</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
              <span><strong>Wallets, SLGs &amp; Belts:</strong> 100 pcs Stock Trial / 200 pcs Custom Dye</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
              <span><strong>European &amp; UK Ready:</strong> Batch REACH Annex XVII (Cr VI &lt; 3ppm) &amp; EUR/GBP Quotes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
              <span><strong>Global Export Terms:</strong> FOB, CIF &amp; DDP Door-to-Door (AQL 2.5 Inspected)</span>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 flex-wrap">
            <Button
              href="#inquiry"
              variant="primary"
              size="lg"
              className="text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              <Sliders className="w-4 h-4 mr-2" /> Request a Quote
            </Button>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="bg-white/95 backdrop-blur-xs border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-semibold shadow-xs"
            >
              <FileText className="w-4 h-4 mr-2" /> Explore the Collection
            </Button>
            <Button
              href="/catalogue-request"
              variant="outline"
              size="lg"
              className="bg-white/95 backdrop-blur-xs border-cognac/40 text-cognac hover:bg-cognac hover:text-white text-xs uppercase tracking-wider font-semibold shadow-xs"
            >
              Download Catalogue
            </Button>
          </div>

          {/* Atelier Specs Mini Bar (Clean White Cards on Light Sand) */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-left max-w-2xl">
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">
                Raw Hides
              </span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">
                LWG Partner Tanneries
              </span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">
                Stock Sampling
              </span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">
                5–7d SLG · 7–14d Bags
              </span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">
                Lab Testing
              </span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">
                EU REACH &amp; Prop 65
              </span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">
                Starting MOQ
              </span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">
                50–100 pcs/Style
              </span>
            </div>
          </div>

          {/* Floating Location & Sourcing Guide Quick-Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-white/95 backdrop-blur-sm px-3 py-1 border border-charcoal/10 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Export Atelier · Bantala, Kolkata &amp; Noida NCR
            </span>
            <Link
              href="/leather-quality-sourcing-guide"
              className="text-charcoal hover:text-cognac text-xs font-mono font-medium underline underline-offset-4 decoration-cognac/40 inline-flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-cognac" /> Read Leather Quality &amp; Sourcing Guide{" "}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
