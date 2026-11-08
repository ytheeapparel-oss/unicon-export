import React from "react";
import Link from "next/link";

const MANUFACTURING_CAPABILITY_GUIDES = [
  { label: "Best Supplier of Leather Goods", href: "/leather-goods-supplier-usa" },
  { label: "Leather Goods Manufacturer India", href: "/leather-goods-manufacturer" },
  { label: "Leather Goods Manufacturer Asia", href: "/leather-goods-supplier-asia" },
  { label: "Leather Goods Supplier Europe", href: "/leather-goods-supplier-europe" },
  { label: "USA Leather Goods Supplier Desk", href: "/en-us" },
  { label: "Handbags & Shoulder Bags", href: "/leather-handbags-manufacturer-india" },
  { label: "Full-Line Bag Production", href: "/leather-bags-manufacturer-india" },
  { label: "Bespoke Bag & Goods Engineering", href: "/custom-leather-goods-manufacturer" },
  { label: "Turnkey OEM/ODM Programs", href: "/oem-leather-goods-manufacturer" },
  { label: "Small Leather Goods (SLGs)", href: "/small-leather-goods-manufacturer" },
  { label: "RFID Wallets & Cardholders", href: "/leather-wallet-manufacturer-india" },
  { label: "Bridle & Dress Belts", href: "/leather-belt-manufacturer-india" },
  { label: "Leather Jackets & Outerwear", href: "/leather-jacket-manufacturer-india" },
  { label: "50–100 Pc Trial MOQ Program", href: "/low-moq-leather-goods-manufacturer" },
  { label: "Luxury Atelier Finishing", href: "/luxury-leather-goods-manufacturer" },
  { label: "Travel & Corporate Accessories", href: "/leather-accessories-manufacturer-india" },
  { label: "Wholesale & Volume Production", href: "/wholesale-leather-goods" },
  { label: "Registered Export House Desk", href: "/leather-goods-exporter-india" },
  { label: "European Brand Sourcing Hub", href: "/leather-goods-supplier-europe" },
  { label: "Asia-Pacific & GCC Supply Desk", href: "/leather-goods-supplier-asia" },
  { label: "Contract Factory Overview", href: "/leather-goods-manufacturer" },
];

const B2B_RESOURCE_DIRECTORY = [
  {
    heading: "Global Sourcing Portals (USA & Europe)",
    links: [
      { label: "Best Supplier of Leather Goods (USA & EU)", href: "/leather-goods-supplier-usa" },
      { label: "Leather Goods Manufacturer in India", href: "/leather-goods-manufacturer" },
      { label: "Leather Goods Manufacturer in Asia", href: "/leather-goods-supplier-asia" },
      { label: "Pan-European Leather Goods Supplier", href: "/leather-goods-supplier-europe" },
      { label: "USA Direct B2B Sourcing Portal (DDP)", href: "/en-us" },
      { label: "UK & British Designer Atelier (REACH)", href: "/en-gb" },
    ],
  },
  {
    heading: "Core Bag & Apparel Categories",
    links: [
      { label: "Custom Leather Handbags & Satchels", href: "/products/leather-handbags" },
      { label: "Full-Grain & Suede Tote Bags", href: "/products/tote-bags" },
      { label: "Executive Laptop Briefcases & Folios", href: "/products/laptop-and-business-bags" },
      { label: "Weekender Travel Duffels & Holdalls", href: "/products/travel-bags" },
      { label: "Urban Commuter & Laptop Backpacks", href: "/products/backpacks" },
      { label: "Custom Leather Jackets & Outerwear", href: "/products/leather-jackets" },
    ],
  },
  {
    heading: "SLGs, Belts & Specialty Capsules",
    links: [
      { label: "13.56 MHz RFID Wallets & Cardholders", href: "/products/wallets-and-cardholders" },
      { label: "Full-Grain Bridle & Dress Leather Belts", href: "/products/leather-belts" },
      { label: "Designer Woven Jacquard & Leather Totes", href: "/products/designer-jacquard-totes" },
      { label: "Artisan Vegetable-Tanned Travel Duffels", href: "/products/artisan-travel-duffels" },
      { label: "Croc-Embossed Executive Briefcases", href: "/products/croc-embossed-briefcases" },
      { label: "Heritage Waxed Pull-Up Rucksacks", href: "/products/heritage-backpacks" },
    ],
  },
  {
    heading: "Technical Sourcing, QC & Compliance",
    links: [
      { label: "Interactive B2B FOB Cost & MOQ Calculator", href: "/cost-calculator" },
      { label: "Private Label & OEM Specification Matrix", href: "/private-label" },
      { label: "Leather Quality, Grades & Gauge Guide", href: "/leather-quality-sourcing-guide" },
      { label: "India vs. China, Vietnam & Italy Matrix", href: "/leather-sourcing-india-vs-china-vietnam-italy" },
      { label: "11-Stage Cut, Skive & Edge-Paint Process", href: "/craftsmanship" },
      { label: "Batch EU/UK REACH, Prop 65 & AQL 2.5 QC", href: "/compliance" },
      { label: "LWG Partner Tannery Traceability", href: "/sustainability" },
      { label: "Download Catalogue & Request Swatch Kit", href: "/catalogue-request" },
    ],
  },
  {
    heading: "City & Regional Export Hubs",
    links: [
      { label: "New York & East Coast Private-Label Hub", href: "/export/usa/private-label-leather-bags-new-york" },
      { label: "Los Angeles & West Coast OEM Leather Hub", href: "/export/usa/oem-leather-goods-los-angeles" },
      { label: "Milan & European Luxury Leather Atelier", href: "/export/europe/artisan-leather-bag-manufacturer-milan-italy" },
      { label: "Dubai, UAE & GCC 0%-Duty CEPA Hub", href: "/export/middle-east/luxury-leather-goods-manufacturer-dubai-uae" },
      { label: "Toronto, Vancouver & Montreal B2B Hub", href: "/export/canada/private-label-leather-bags-toronto-vancouver" },
      { label: "Sydney & Melbourne 0%-Duty ECTA Hub", href: "/export/australia/custom-leather-bags-sydney-melbourne" },
      { label: "Global Incoterms (FOB, CIF, DDP) & Ports", href: "/export" },
      { label: "Noida Corporate Office & Kolkata Atelier", href: "/contact" },
    ],
  },
];

export function KeywordTaxonomy() {
  return (
    <div className="pt-10 pb-6 border-t border-charcoal/10 space-y-8">
      {/* 1. Product & Engineering Guides (Concise Buyer Navigation) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal font-mono">
            Product Engineering &amp; Specialist Production Guides
          </span>
          <span className="text-[10px] text-charcoal-500 font-mono tracking-wider">
            Kolkata Leather Complex (Zone 09) &amp; Noida NCR · 50–100 Pc Stock Trial MOQs
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {MANUFACTURING_CAPABILITY_GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs"
            >
              {guide.label}
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
            EUR · GBP · USD Quotes · DDP / CIF / FOB · Batch REACH &amp; Prop 65
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
            <span>UK &amp; British Brands Hub (UK REACH)</span>
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
            <span>France &amp; Europe Maroquinerie B2B</span>
          </Link>
          <Link
            href="/it"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇮🇹</span>
            <span>Italia Pelletteria B2B &amp; OEM</span>
          </Link>
          <Link
            href="/es"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇪🇸</span>
            <span>España Marroquinería &amp; Marca Blanca</span>
          </Link>
          <Link
            href="/nl"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇳🇱</span>
            <span>Nederland &amp; Benelux Lederwaren</span>
          </Link>
          <Link
            href="/sv"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇸🇪</span>
            <span>Sverige &amp; Nordics Lädervaror</span>
          </Link>
          <Link
            href="/ar"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇦🇪</span>
            <span>UAE &amp; GCC Portal (0% CEPA Duty)</span>
          </Link>
          <Link
            href="/ja"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇯🇵</span>
            <span>日本向けOEM・本革製品製造 (IJCEPA)</span>
          </Link>
          <Link
            href="/ko"
            className="text-[11px] font-mono bg-white hover:bg-cognac hover:text-white border border-charcoal/15 px-3 py-1.5 transition-all text-charcoal-700 shadow-2xs inline-flex items-center gap-1.5"
          >
            <span>🇰🇷</span>
            <span>한국 B2B 가죽 제품 OEM/ODM (IKCEPA)</span>
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

      {/* 3. Clean Buyer Resource & Specification Directory */}
      <div className="pt-2 border-t border-charcoal/8">
        <details open className="group bg-white border border-charcoal/10 transition-colors">
          <summary className="cursor-pointer px-4 py-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-charcoal font-semibold select-none hover:text-cognac hover:bg-[#FAF8F5] transition-colors">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cognac"></span>
              <span>B2B Buyer Resource &amp; Technical Specification Directory</span>
            </span>
            <span className="text-[10px] text-charcoal-400 group-open:text-cognac font-mono flex items-center gap-1.5">
              <span className="hidden sm:inline">Expand Quick Links</span>
              <span className="inline-block transform group-open:rotate-180 transition-transform text-xs">▾</span>
            </span>
          </summary>

          <div className="p-6 border-t border-charcoal/10 bg-[#FAF8F5] space-y-4">
            <p className="text-[11px] text-charcoal-600 font-light">
              Direct links to Unicon Leather&apos;s product lines, FOB cost calculators, leather grade specifications, and regional customs guides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {B2B_RESOURCE_DIRECTORY.map((group) => (
                <div key={group.heading} className="space-y-2">
                  <h4 className="text-[11px] font-serif font-semibold text-cognac tracking-wide">
                    {group.heading}
                  </h4>
                  <ul className="space-y-1.5 text-[11px] text-charcoal-700 font-light">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="hover:text-cognac hover:underline transition-colors block py-0.5 leading-snug"
                        >
                          {item.label}
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
