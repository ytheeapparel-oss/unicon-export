"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Factory,
  Phone,
  Clock,
  Compass,
  Search,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

type LocationKey = "noida" | "kolkata";

export function GoogleMapSection() {
  const [activeLocation, setActiveLocation] = useState<LocationKey>("noida");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const loc = COMPANY_INFO.maps[activeLocation];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section className="w-full bg-[#FAF8F5] border-y border-charcoal/10 py-16 sm:py-24" id="google-map-locations">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-charcoal/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/10 border border-cognac/20 text-cognac font-mono text-[11px] tracking-wider uppercase font-semibold">
              <Compass className="w-3.5 h-3.5" /> Official Google Business Profile &amp; Maps Directory
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight">
              Official Profile &amp; Ateliers on <span className="italic text-cognac font-light">Google Maps</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
              Find our verified Google Business Profile <strong className="font-mono text-charcoal font-semibold">"unicon leather"</strong> in Delhi NCR (Noida Sector-106) and our Kolkata export atelier. International buyers and brand partners are welcome for in-person prototype reviews and technical meetings.
            </p>
          </div>

          {/* Location Switcher Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 bg-white border border-charcoal/15 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveLocation("noida")}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeLocation === "noida"
                  ? "bg-charcoal text-white font-semibold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal hover:bg-black/5"
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 ${activeLocation === "noida" ? "text-cognac" : "text-charcoal/50"}`} />
              <span>Noida Corporate HQ</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLocation("kolkata")}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeLocation === "kolkata"
                  ? "bg-charcoal text-white font-semibold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal hover:bg-black/5"
              }`}
            >
              <Factory className={`w-3.5 h-3.5 ${activeLocation === "kolkata" ? "text-cognac" : "text-charcoal/50"}`} />
              <span>Kolkata Manufacturing Atelier</span>
            </button>
          </div>
        </div>

        {/* Map & Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Detail Side Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border border-charcoal/15 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-6">
              {/* Google Verified Profile Card */}
              <div className="bg-[#FAF8F5] border border-charcoal/10 p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Verified Google Profile
                  </span>
                  <span className="text-[10px] text-charcoal/60 font-mono">CID: 10778714827475623535</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif font-bold text-charcoal text-base">unicon leather</span>
                  <span className="text-amber-500 text-xs font-mono font-bold">★★★★★ 5.0</span>
                </div>
                <p className="text-[11px] text-charcoal-600 font-light leading-snug">
                  Leather Goods Manufacturer &bull; Noida, Uttar Pradesh
                </p>
              </div>

              {/* Badge & Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-cognac text-white px-2.5 py-0.5 font-bold">
                    {loc.badge}
                  </span>
                  <span className="text-xs text-charcoal/60 font-mono">
                    {loc.city}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                  {loc.title}
                </h3>
              </div>

              {/* Physical Address */}
              <div className="space-y-2 pt-2 border-t border-charcoal/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 font-bold block">
                  Official Physical Address
                </span>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
                  {loc.address}
                </p>

                <button
                  type="button"
                  onClick={() => handleCopy(loc.address, activeLocation)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cognac hover:underline mt-1 cursor-pointer font-medium"
                >
                  {copiedKey === activeLocation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Address copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Postal Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Visiting Notice */}
              <div className="space-y-1.5 pt-2 border-t border-charcoal/10 text-xs text-charcoal/70">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 font-bold block">
                  Facility Protocol &amp; Visiting Policy
                </span>
                <p className="leading-relaxed font-light">{loc.visitingNotice}</p>
              </div>

              {/* Proximity Information */}
              <div className="space-y-1.5 pt-2 border-t border-charcoal/10 text-xs text-charcoal/70">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 font-bold block">
                  Transit &amp; Cargo Proximity
                </span>
                <p className="leading-relaxed font-light text-[11px] font-mono text-charcoal-600">
                  {loc.proximity}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5 pt-2 border-t border-charcoal/10 text-xs text-charcoal/70">
                <Clock className="w-3.5 h-3.5 text-cognac shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-medium text-charcoal block">Hours of Operation</span>
                  <span className="text-[11px] text-charcoal-600 leading-tight block">
                    Mon–Sat: 09:30 AM – 06:30 PM IST
                  </span>
                  <span className="text-[10px] text-cognac font-mono block">
                    International Export Desk operates 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-charcoal/10">
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white py-3 px-4 text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cognac" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={loc.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-black/5 text-charcoal border border-charcoal/25 py-2.5 px-4 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-cognac" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe Container (8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-white border border-charcoal/15 shadow-sm overflow-hidden">
            {/* Top Bar for Map */}
            <div className="bg-[#F4F0E8] px-4 sm:px-6 py-3 border-b border-charcoal/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-charcoal">Live Google Map View:</span>
                <span className="truncate max-w-[200px] sm:max-w-none text-charcoal/70">
                  {loc.shortTitle}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-cognac hover:underline font-semibold"
                >
                  Full Screen Map <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Responsive Iframe */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-charcoal/5">
              <iframe
                key={activeLocation}
                title={`Google Map - ${loc.title}`}
                src={loc.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.95] contrast-[1.02]"
              />
            </div>

            {/* Bottom Bar: Search UNICON LEATHER on Google Maps Callout */}
            <div className="bg-white p-4 sm:p-5 border-t border-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cognac/10 text-cognac flex items-center justify-center shrink-0">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal">
                    Find UNICON LEATHER on Google Maps &amp; Google Search
                  </p>
                  <p className="text-[11px] text-charcoal-600 font-light">
                    Search <strong className="font-mono text-cognac font-medium">"Unicon Leather Noida"</strong> or click below to view our verified profile, photos, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={COMPANY_INFO.maps.noida.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] hover:bg-cognac/10 border border-charcoal/15 text-charcoal hover:text-cognac text-xs font-mono transition-colors font-medium"
                >
                  <MapPin className="w-3 h-3 text-cognac" /> Google Maps Profile
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cognac hover:bg-cognac-light text-white text-xs font-mono transition-colors font-medium shadow-xs"
                >
                  <Phone className="w-3 h-3" /> Call Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
