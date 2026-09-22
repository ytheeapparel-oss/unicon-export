"use client";

import React from "react";
import Link from "next/link";
import { FileText, Sliders, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";

export function Hero() {
  return (
    /* <!-- HERO COMPONENT: 100% Full Breadth x Full Length Immersive Editorial Canvas --> */
    <section className="relative w-full !mt-0 min-h-[720px] sm:min-h-[780px] lg:min-h-[850px] flex items-center overflow-hidden border-b border-charcoal/10 bg-[#FAF8F5]">
      {/* 1. Full Length & Full Breadth Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/images/home-hero-leather.jpg"
          alt="UNICON LEATHER - Handcrafted Luxury Leather Goods Atelier & Global Export Manufacturing"
          className="w-full h-full object-cover object-[center_right] lg:object-center transform scale-100"
          loading="eager"
        />
        {/* Soft, Clean Luxury Ivory Scrim for Perfect Readability and Light Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/92 to-[#FAF8F5]/40 sm:from-[#FAF8F5]/98 sm:via-[#FAF8F5]/85 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-90 h-32 bottom-0 top-auto" />
      </div>

      {/* 2. Full Width Content Overlay */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl space-y-7 text-left">
          
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2.5 flex-wrap">
            <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 shadow-xs">
              Indian Leather Atelier · Est. {COMPANY_INFO.establishedYear}
            </span>
            <span className="text-charcoal/30">·</span>
            <span className="text-[10px] sm:text-xs text-cognac font-mono tracking-widest uppercase font-semibold">
              Direct Exporting to USA, UK & Europe
            </span>
          </div>

          {/* Main Luxury Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-charcoal leading-[1.08] tracking-tight">
            Custom Leather Goods Manufacturer &amp; <span className="italic text-cognac font-light">Private Label Atelier</span>
          </h1>

          {/* Keyword-Rich Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed font-light max-w-2xl bg-white/60 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-xs">
            Bespoke OEM/ODM contract manufacturing and wholesale export of luxury full-grain leather bags, minimalist totes, RFID wallets, cardholders, belts, and bespoke accessories for international labels, boutique designers, and retail buying houses.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              href="/catalogue-request"
              variant="primary"
              size="lg"
              className="text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              <FileText className="w-4 h-4 mr-2" /> Request Export Lookbook
            </Button>
            <Button
              href="/private-label"
              variant="outline"
              size="lg"
              className="bg-white/90 backdrop-blur-xs border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-semibold shadow-xs"
            >
              <Sliders className="w-4 h-4 mr-2" /> Start OEM Project
            </Button>
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans uppercase font-semibold tracking-[0.14em] text-xs bg-[#25d366] hover:bg-[#20ba59] text-white px-5 py-3.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-white" /> WhatsApp Desk
            </a>
          </div>

          {/* Atelier Specs Mini Bar (Clean White Cards on Light Sand) */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-left max-w-2xl">
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Tannages</span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">LWG Gold Audited</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Prototyping</span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">7–14 Days Express</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Compliance</span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">EU REACH & Prop 65</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-3.5 border border-charcoal/12 shadow-xs">
              <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">MOQ</span>
              <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">100–300 pcs/Style</span>
            </div>
          </div>

          {/* Floating Location & Atelier Status */}
          <div className="inline-flex items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-white/95 backdrop-blur-sm px-3 py-1 border border-charcoal/10 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Export Atelier · Bantala, Kolkata
            </span>
            <Link
              href="/craftsmanship"
              className="text-charcoal hover:text-cognac text-xs font-mono font-medium underline underline-offset-4 decoration-cognac/40 flex items-center gap-1 transition-colors"
            >
              Explore Craftsmanship <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
