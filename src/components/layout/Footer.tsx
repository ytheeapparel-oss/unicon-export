import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ShieldCheck, Clock, ArrowRight, Download, CheckCircle2, MessageCircle, Linkedin, Facebook, Instagram } from "lucide-react";
import { FOOTER_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { CapabilitiesTicker } from "@/components/ui/CapabilitiesTicker";
import { KeywordTaxonomy } from "@/components/seo/KeywordTaxonomy";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Continuous Capabilities Showcase */}
      <CapabilitiesTicker />

      <footer className="bg-[#FAF8F5] text-charcoal-700 border-t border-charcoal/10">
        {/* 1. Top Value Pillars (Luxury Light Theme) */}
        <div className="border-b border-charcoal/10 bg-[#F4F0E8]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/10">
              <div className="flex flex-col items-start gap-1.5 sm:pr-6">
                <span className="text-cognac font-serif text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cognac" /> Global Direct Export
                </span>
                <p className="text-[11px] sm:text-xs text-charcoal-600 leading-relaxed font-light">
                  Air & sea freight with FOB, CIF, and DDP delivery to USA, UK, EU, UAE, Australia & Japan.
                </p>
              </div>
              <div className="flex flex-col items-start gap-1.5 sm:px-6 pt-5 sm:pt-0">
                <span className="text-cognac font-serif text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cognac" /> International Compliance
                </span>
                <p className="text-[11px] sm:text-xs text-charcoal-600 leading-relaxed font-light">
                  LWG Gold/Silver audited partner tanneries, EU REACH Annex XVII & California Prop 65 tested.
                </p>
              </div>
              <div className="flex flex-col items-start gap-1.5 sm:px-6 pt-5 sm:pt-0">
                <span className="text-cognac font-serif text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cognac" /> Rapid Sample Atelier
                </span>
                <p className="text-[11px] sm:text-xs text-charcoal-600 leading-relaxed font-light">
                  Physical counter-samples dispatched in 7–14 days via DHL Express / FedEx Priority.
                </p>
              </div>
              <div className="flex flex-col items-start gap-1.5 sm:pl-6 pt-5 sm:pt-0">
                <span className="text-cognac font-serif text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cognac" /> Transparent B2B Quotes
                </span>
                <p className="text-[11px] sm:text-xs text-charcoal-600 leading-relaxed font-light">
                  Formal tiered wholesale quotations and tech-pack feasibility returned within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Directory Grid */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Column 1: Brand & Atelier Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <Link href="/" className="inline-block group focus:outline-none">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] text-charcoal uppercase group-hover:text-cognac transition-colors">
                    UNICON <span className="font-normal text-cognac">LEATHER</span>
                  </span>
                </Link>
                <p className="text-[8.5px] sm:text-[9px] tracking-[0.26em] text-charcoal-500 font-mono uppercase mt-0.5 font-medium">
                  Custom Luxury Leather Goods Manufacturer & Registered Exporter
                </p>
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed font-light pr-4">
                Specialized in contract manufacturing, private-label development, and worldwide wholesale export of handcrafted genuine leather bags, wallets, belts, and luxury lifestyle accessories.
              </p>

              {/* Direct Atelier Details */}
              <div className="space-y-2 text-xs text-charcoal-700 font-light pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-cognac shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p><strong className="text-charcoal font-medium">Noida Office:</strong> {COMPANY_INFO.noidaOfficeAddress}</p>
                    <p><strong className="text-charcoal font-medium">Factory:</strong> {COMPANY_INFO.factoryAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-cognac shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-cognac transition-colors font-medium">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <span className="text-charcoal-300">•</span>
                  <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="hover:text-cognac transition-colors font-medium">
                    {COMPANY_INFO.secondaryEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-cognac shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cognac transition-colors font-mono font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                {/* Social Media Profiles */}
                <div className="flex items-center gap-2 pt-2" aria-label="Social Links">
                  {/* 1. LinkedIn */}
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                    className="w-7 h-7 rounded-full bg-white border border-charcoal/15 flex items-center justify-center text-charcoal-600 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  {/* 2. Facebook */}
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    title="Facebook"
                    className="w-7 h-7 rounded-full bg-white border border-charcoal/15 flex items-center justify-center text-charcoal-600 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                  {/* 3. Instagram */}
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    title="Instagram"
                    className="w-7 h-7 rounded-full bg-white border border-charcoal/15 flex items-center justify-center text-charcoal-600 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Product Collections (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal pb-2 border-b border-charcoal/10">
                12 Master Lines
              </h3>
              <ul className="space-y-2 text-xs text-charcoal-600">
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
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal pb-2 border-b border-charcoal/10">
                Private Label & OEM
              </h3>
              <ul className="space-y-2 text-xs text-charcoal-600">
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
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal pb-2 border-b border-charcoal/10">
                Trade & Logistics
              </h3>
              <ul className="space-y-2 text-xs text-charcoal-600">
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
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal pb-2 border-b border-charcoal/10">
                Direct Desk
              </h3>
              
              <div className="bg-white border border-charcoal/12 p-3.5 space-y-2.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-wider uppercase font-bold text-cognac font-mono">
                    Live Export Desk
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                  </span>
                </div>
                <p className="text-[10.5px] text-charcoal-600 leading-relaxed font-light">
                  Direct connection with senior export merchandisers via WhatsApp.
                </p>
                <a
                  href={COMPANY_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#1ea952] border border-[#25d366]/35 px-2.5 py-1.5 text-[11px] font-semibold transition-colors"
                >
                  <MessageCircle className="w-3 h-3" /> WhatsApp Direct
                </a>
              </div>

              <div className="pt-1">
                <Link
                  href="/catalogue-request"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-cognac hover:bg-cognac-light text-white px-2.5 py-2 text-[10.5px] font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Download className="w-3 h-3" /> Request Lookbook
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Verified Compliance Badges Strip */}
          <div className="mt-14 pt-8 border-t border-charcoal/10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-xs text-charcoal-700">
                <span className="font-bold uppercase tracking-wider text-charcoal text-[11px]">
                  Verified Standards:
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] text-charcoal-700 font-mono">
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

          {/* 3.5 B2B Sourcing Keyword Taxonomy */}
          <KeywordTaxonomy />

          {/* 4. Bottom Legal Bar */}
          <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
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
