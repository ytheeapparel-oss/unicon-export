import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ShieldCheck, Clock, ArrowRight, Download, CheckCircle2, MessageCircle } from "lucide-react";
import { FOOTER_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { CapabilitiesTicker } from "@/components/ui/CapabilitiesTicker";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Continuous Capabilities Showcase */}
      <CapabilitiesTicker />

      <footer className="bg-[#141312] text-[#d6d1c7] border-t border-[#262422]">
        {/* 1. Top Value Pillars (Luxury Dark Theme) */}
        <div className="border-b border-[#242220] bg-[#171614]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2a2825]">
              <div className="flex flex-col items-start gap-2.5 sm:pr-6">
                <span className="text-cognac font-serif text-lg font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cognac" /> Global Direct Export
                </span>
                <p className="text-xs sm:text-sm text-[#a8a297] leading-relaxed font-light">
                  Air & sea freight with FOB, CIF, and DDP delivery to USA, UK, EU, UAE, Australia & Japan.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2.5 sm:px-6 pt-6 sm:pt-0">
                <span className="text-cognac font-serif text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cognac" /> International Compliance
                </span>
                <p className="text-xs sm:text-sm text-[#a8a297] leading-relaxed font-light">
                  LWG Gold/Silver audited partner tanneries, EU REACH Annex XVII & California Prop 65 tested.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2.5 sm:px-6 pt-6 sm:pt-0">
                <span className="text-cognac font-serif text-lg font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cognac" /> Rapid Sample Atelier
                </span>
                <p className="text-xs sm:text-sm text-[#a8a297] leading-relaxed font-light">
                  Physical counter-samples dispatched in 7–14 days via DHL Express / FedEx Priority.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2.5 sm:pl-6 pt-6 sm:pt-0">
                <span className="text-cognac font-serif text-lg font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cognac" /> Transparent B2B Quotes
                </span>
                <p className="text-xs sm:text-sm text-[#a8a297] leading-relaxed font-light">
                  Formal tiered wholesale quotations and tech-pack feasibility returned within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Directory Grid */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Brand & Atelier Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <Link href="/" className="inline-block group focus:outline-none">
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.06em] text-white uppercase group-hover:text-cognac transition-colors">
                    UNICON <span className="font-normal text-cognac">LEATHER</span>
                  </span>
                </Link>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e877c] font-mono mt-1 font-medium">
                  Custom Luxury Leather Goods Manufacturer & Registered Exporter
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#a8a297] leading-relaxed font-light pr-4">
                Specialized in contract manufacturing, private-label development, and worldwide wholesale export of handcrafted genuine leather bags, wallets, belts, and luxury lifestyle accessories.
              </p>

              {/* Direct Atelier Details */}
              <div className="space-y-3 text-xs sm:text-[13px] text-[#b5afa4] font-light pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cognac shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-cognac transition-colors">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <span className="text-[#5a554e]">•</span>
                  <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="hover:text-cognac transition-colors">
                    {COMPANY_INFO.secondaryEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cognac shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cognac transition-colors font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Product Collections (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white pb-2.5 border-b border-[#282624]">
                12 Master Lines
              </h3>
              <ul className="space-y-2.5 text-xs text-[#a8a297]">
                {FOOTER_NAV.products.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Private Label & OEM (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white pb-2.5 border-b border-[#282624]">
                Private Label & OEM
              </h3>
              <ul className="space-y-2.5 text-xs text-[#a8a297]">
                {FOOTER_NAV.manufacturing.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Trade & Export (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white pb-2.5 border-b border-[#282624]">
                Trade & Logistics
              </h3>
              <ul className="space-y-2.5 text-xs text-[#a8a297]">
                {FOOTER_NAV.trade.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Direct Export Desk & Lookbook Card (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white pb-2.5 border-b border-[#282624]">
                Direct Desk
              </h3>
              
              <div className="bg-[#1b1a18] border border-[#2c2a27] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-cognac font-mono">
                    Live Export Desk
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </span>
                </div>
                <p className="text-[11px] text-[#9a9387] leading-relaxed font-light">
                  Connect directly with our senior export merchandising team via WhatsApp.
                </p>
                <a
                  href={COMPANY_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 px-3 py-2 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Direct
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/catalogue-request"
                  className="w-full inline-flex items-center justify-center gap-2 bg-cognac hover:bg-cognac-light text-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" /> Request Lookbook
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Verified Compliance Badges Strip */}
          <div className="mt-14 pt-8 border-t border-[#242220]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-xs text-[#8e877c]">
                <span className="font-bold uppercase tracking-wider text-white text-[11px]">
                  Verified Standards:
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] text-[#a8a297] font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> LWG Partner Tanneries
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> EU REACH Annex XVII
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> California Prop 65 Lab Tested
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> AQL 2.5 Quality Inspection
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> 100% Genuine Full-Grain
                </span>
              </div>
            </div>
          </div>

          {/* 4. Bottom Legal Bar */}
          <div className="mt-8 pt-6 border-t border-[#201e1c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d766b]">
            <p>© {currentYear} UNICON LEATHER. All rights reserved. Registered Export House, Government of India.</p>
            <div className="flex flex-wrap items-center gap-6">
              {FOOTER_NAV.legal.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-cognac transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
