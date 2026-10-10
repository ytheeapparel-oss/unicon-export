import React from "react";
import Link from "next/link";
import { SEO_KEYWORD_CLUSTERS } from "@/data/keywords";
import { SEO_PILLARS } from "@/data/seoPillars";

export function KeywordTaxonomy() {
  const pillars = Object.values(SEO_PILLARS);

  return (
    <div className="pt-10 pb-6 border-t border-charcoal/10 space-y-8">
      {/* 1. Direct Keyword Pillar Hubs (Exact Matching Landing Pages) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal font-mono">
            Direct Manufacturing Silos &amp; B2B Keyword Portals
          </span>
          <span className="text-[10px] text-charcoal-500 font-mono tracking-wider">
            Verified Indian Production Facilities
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs"
            >
              {pillar.keywordTheme}
            </Link>
          ))}
        </div>
      </div>

      {/* 2. International Export Gateways & Trade Corridors */}
      <div className="space-y-4 pt-4 border-t border-charcoal/8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal font-mono">
            International Trade Corridors &amp; Regional Sourcing Portals
          </span>
          <span className="text-[10px] text-cognac font-mono tracking-wider font-semibold">
            DDP · CIF · ECTA 0% Duty · REACH Annex XVII
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          <Link
            href="/en-us"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇺🇸</span>
            <span>USA Sourcing Portal (DDP / Prop 65)</span>
          </Link>
          <Link
            href="/en-ca"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇨🇦</span>
            <span>Canada Sourcing Portal (CBSA / DDP Freight)</span>
          </Link>
          <Link
            href="/en-gb"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇬🇧</span>
            <span>UK &amp; British Brands Hub (REACH / SEDEX)</span>
          </Link>
          <Link
            href="/en-au"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇦🇺</span>
            <span>Australia &amp; NZ Sourcing (ECTA 0% Duty)</span>
          </Link>
          <Link
            href="/de"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇩🇪</span>
            <span>Deutschland B2B Lederwaren Manufaktur</span>
          </Link>
          <Link
            href="/fr"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇫🇷</span>
            <span>France &amp; Europe Maroquinerie de Luxe</span>
          </Link>
          <Link
            href="/it"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇮🇹</span>
            <span>Italia B2B Pelletteria &amp; Borse in Pelle</span>
          </Link>
          <Link
            href="/es"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇪🇸</span>
            <span>España B2B Marroquinería &amp; Marca Blanca</span>
          </Link>
          <Link
            href="/leather-goods-supplier-europe"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇪🇺</span>
            <span>Pan-European OEM Supplier Portal (REACH / DDP)</span>
          </Link>
        </div>
      </div>

      {/* 3. Deep Taxonomy Search Directory (Clean Collapsible Accordion to Eliminate Clutter) */}
      <div className="pt-2 border-t border-charcoal/8">
        <details className="group bg-white border border-charcoal/10 transition-colors">
          <summary className="cursor-pointer px-4 py-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-charcoal font-semibold select-none hover:text-cognac hover:bg-[#FAF8F5] transition-colors">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cognac"></span>
              <span>B2B Sourcing Taxonomy &amp; Master Capability Index</span>
            </span>
            <span className="text-[10px] text-charcoal-400 group-open:text-cognac font-mono flex items-center gap-1.5">
              <span className="hidden sm:inline">Click to View Indexed Capabilities</span>
              <span className="inline-block transform group-open:rotate-180 transition-transform text-xs">▾</span>
            </span>
          </summary>

          <div className="p-6 border-t border-charcoal/10 bg-[#FAF8F5] space-y-4">
            <p className="text-[11px] text-charcoal-500 font-light">
              UNICON LEATHER verified manufacturing capabilities index across OEM/ODM collections, regional export hubs, and sustainable material certifications:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 pt-2">
              {SEO_KEYWORD_CLUSTERS.slice(0, 12).map((cluster) => (
                <div key={cluster.category} className="space-y-2">
                  <h4 className="text-[11px] font-serif font-medium text-cognac tracking-wide">
                    {cluster.category}
                  </h4>
                  <ul className="space-y-1 text-[10.5px] text-charcoal-600 font-light">
                    {cluster.keywords.slice(0, 5).map((kw) => (
                      <li key={kw}>
                        <Link
                          href={`/products?search=${encodeURIComponent(kw)}`}
                          className="hover:text-cognac transition-colors block py-0.5 capitalize leading-relaxed"
                        >
                          {kw}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
