import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck, PhoneCall, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function AnnouncementBar() {
  return (
    <aside aria-label="Export Notice" className="bg-[#F7F5F0] text-[#4A4742] text-[11px] border-b border-[#E8E3DA] py-2 px-4 sm:px-8 tracking-wide">
      <div className="w-full max-w-[1680px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        {/* Left: 4 Social Media Buttons & Origin / Export Capability */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 justify-center sm:justify-start">
          {/* Top Left Social Media Buttons */}
          <div className="flex items-center gap-1.5 pr-2.5 border-r border-[#DCD6CC]" aria-label="Social Media Profiles">
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-6 h-6 rounded-full bg-white border border-[#DDD8CF] flex items-center justify-center text-[#555] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              title="YouTube"
              className="w-6 h-6 rounded-full bg-white border border-[#DDD8CF] flex items-center justify-center text-[#555] hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all shadow-2xs"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              title="Instagram"
              className="w-6 h-6 rounded-full bg-white border border-[#DDD8CF] flex items-center justify-center text-[#555] hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              title="Facebook"
              className="w-6 h-6 rounded-full bg-white border border-[#DDD8CF] flex items-center justify-center text-[#555] hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all shadow-2xs"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="inline-flex items-center gap-1.5 text-cognac font-bold tracking-widest uppercase text-[9px] bg-[#ECE7DF] px-2.5 py-0.5 border border-cognac/30">
            <Globe className="w-3 h-3 text-cognac" /> B2B Export Atelier
          </span>
          <span className="text-[#6A665E] hidden md:inline font-light">
            Direct Custom Manufacturing & Private Label Exports to USA, UK, EU, UAE, Australia & Japan
          </span>
          <span className="text-[#6A665E] md:hidden font-light">
            Luxury Leather Goods Manufacturer & Global Exporter
          </span>
        </div>

        {/* Right: Compliance & Direct Line */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-medium">
          <span className="text-[#6A665E] hidden lg:inline-flex items-center gap-1.5 font-light">
            <ShieldCheck className="w-3.5 h-3.5 text-cognac" /> LWG & REACH Compliant
          </span>
          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A4742] hover:text-cognac transition-colors inline-flex items-center gap-1.5 font-sans"
          >
            <PhoneCall className="w-3 h-3 text-cognac" />
            <span className="hidden sm:inline">WhatsApp Desk:</span> {COMPANY_INFO.whatsapp}
          </a>
          <Link
            href="/catalogue-request"
            className="text-charcoal hover:text-cognac transition-colors inline-flex items-center gap-1 font-bold underline underline-offset-4 decoration-cognac/60 hover:decoration-cognac"
          >
            2025 Lookbook <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
