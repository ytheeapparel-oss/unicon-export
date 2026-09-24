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

      {/* 2. Deep Taxonomy Search Directory */}
      <div className="space-y-6 pt-4 border-t border-charcoal/8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal font-mono">
            B2B Sourcing Taxonomy &amp; Keyword Index
          </span>
          <span className="text-[10px] text-charcoal-500 font-mono tracking-wider">
            Indexed Global Leather Goods Export Catalog
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {SEO_KEYWORD_CLUSTERS.map((cluster) => (
            <div key={cluster.category} className="space-y-2.5">
              <h4 className="text-[11px] font-serif font-medium text-cognac tracking-wide">
                {cluster.category}
              </h4>
              <ul className="space-y-1.5 text-[10.5px] text-charcoal-600 font-light">
                {cluster.keywords.map((kw) => (
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
    </div>
  );
}
