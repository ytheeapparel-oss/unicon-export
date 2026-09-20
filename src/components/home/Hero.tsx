"use client";

import React from "react";
import Link from "next/link";
import { FileText, Sliders, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";

export function Hero() {
  return (
    /* <!-- HERO COMPONENT --> */
    <section className="relative w-full bg-[#FAF8F5] text-charcoal border-b border-charcoal/10 overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Information & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
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
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              Custom Leather Goods Manufacturer &amp; <span className="italic text-cognac font-light">Private Label Atelier</span>
            </h1>

            {/* Keyword-Rich Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed font-light max-w-2xl">
              Bespoke OEM/ODM contract manufacturing and wholesale export of luxury full-grain leather bags, minimalist totes, RFID wallets, cardholders, belts, and accessories for international labels, boutique designers, and retail buying houses.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                href="/catalogue-request"
                variant="primary"
                size="lg"
                className="text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <FileText className="w-4 h-4 mr-2" /> Request Export Lookbook
              </Button>
              <Button
                href="/private-label"
                variant="outline"
                size="lg"
                className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-semibold"
              >
                <Sliders className="w-4 h-4 mr-2" /> Start OEM Project
              </Button>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-sans uppercase font-semibold tracking-[0.14em] text-xs bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#1ea952] border border-[#25d366]/35 px-5 py-3.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#1ea952]" /> WhatsApp Desk
              </a>
            </div>

            {/* Atelier Specs Mini Bar (Clean White Cards on Light Sand) */}
            <div className="pt-6 border-t border-charcoal/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-2xl">
              <div className="bg-white p-3.5 border border-charcoal/10 shadow-xs">
                <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Tannages</span>
                <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">LWG Gold Audited</span>
              </div>
              <div className="bg-white p-3.5 border border-charcoal/10 shadow-xs">
                <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Prototyping</span>
                <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">7–14 Days Express</span>
              </div>
              <div className="bg-white p-3.5 border border-charcoal/10 shadow-xs">
                <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Compliance</span>
                <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">EU REACH & Prop 65</span>
              </div>
              <div className="bg-white p-3.5 border border-charcoal/10 shadow-xs">
                <span className="block text-[9.5px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">MOQ</span>
                <span className="text-xs sm:text-sm font-serif text-charcoal font-semibold">100–300 pcs/Style</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Luxury Product Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-charcoal/15 bg-white p-3 group">
              <img
                src="/images/home-hero-leather.jpg"
                alt="UNICON LEATHER - Handcrafted Luxury Leather Bags & Export Workshop"
                className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 border border-charcoal/10 shadow-md flex items-center justify-between">
                <div>
                  <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Export Atelier
                  </span>
                  <span className="block font-serif text-xs font-normal text-charcoal mt-0.5">
                    Kolkata Leather Complex, Bantala
                  </span>
                </div>
                <Link
                  href="/craftsmanship"
                  className="text-cognac hover:underline text-[11px] font-mono font-medium flex items-center gap-1 shrink-0"
                >
                  Our Process <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
