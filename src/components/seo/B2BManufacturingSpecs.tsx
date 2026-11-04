import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Clock,
  Sliders,
  Sparkles,
  FileText,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const LEATHER_GRADE_SPECS = [
  {
    grade: "Full-Grain Vegetable-Tanned Cowhide (Tuscan Style)",
    thickness: "1.4–1.8 mm (Bags) / 3.2–3.8 mm (Belts)",
    tanneryStandard: "LWG-Audited Partner Tannery · 100% Chrome-Free (Mimosa & Chestnut Bark)",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Drum-Dyed)",
    leadTime: "Sample: 7–12 Days | Bulk: 30–40 Days",
    customization:
      "Blind heat debossing, Pantone hand-dyed patina, solid brass CNC hardware, contrast saddle stitching, Italian edge burnishing",
    idealApplications: "Structured luxury totes, executive briefcases, bridle belts, heritage satchels",
  },
  {
    grade: "Full-Grain Calf Pebble & Smooth Nappa Leather",
    thickness: "1.0–1.4 mm (Handbags) / 0.8–1.0 mm (SLGs)",
    tanneryStandard: "LWG-Audited Partner Tannery · Batch-Testable to EU REACH Annex XVII",
    moq: "50 pcs Bags / 100 pcs SLGs (Stock Trial) | 100–200 pcs (Custom Dye)",
    leadTime: "Sample: 7–10 Days | Bulk: 28–35 Days",
    customization:
      "24k gold/silver foil stamping, custom Pantone drum-dyeing, PVD vacuum-plated locks, micro-suede or jacquard lining, RFID shielding",
    idealApplications: "Designer handbags, slouchy shoulder bags, bifold wallets, cardholders",
  },
  {
    grade: "Drum-Dyed Garment Lambskin Nappa & Goat Suede",
    thickness: "0.6–0.9 mm (Ultra-Supple Outerwear Grade)",
    tanneryStandard: "LWG-Audited Partner Tannery · Azo-Free & Chromium VI < 3 ppm (ISO 17075)",
    moq: "50–100 pcs per style across size run (XS–4XL)",
    leadTime: "Sample: 10–14 Days | Bulk: 30–45 Days",
    customization:
      "Bespoke CAD size grading, YKK Excella custom pullers, quilted Bemberg/silk linings, shearling collars, laser-engraved snaps",
    idealApplications: "Custom leather jackets, moto jackets, tailored blazers, shearling outerwear",
  },
  {
    grade: "Cross-Grain Saffiano & Croc-Embossed Calfskin",
    thickness: "1.2–1.5 mm (Scratch & Water-Resistant Wax Finish)",
    tanneryStandard: "LWG-Audited Partner Tannery · Batch-Testable CA Prop 65 & CPSIA",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Pantone Dye)",
    leadTime: "Sample: 7–12 Days | Bulk: 30–38 Days",
    customization:
      "Custom hydraulic embossing plates, 3D metal pin-mount logos, multi-coat Fenice Italian edge paint, custom rigid magnetic gift boxes",
    idealApplications: "Executive laptop folios, structured business bags, luxury cosmetic cases, passport covers",
  },
  {
    grade: "Crazy Horse Waxed Pull-Up & Oil-Tanned Bovine",
    thickness: "1.6–2.0 mm (Heavy-Duty Heritage Temper)",
    tanneryStandard: "LWG-Audited Partner Tannery · High Tear Strength (>60 N ISO 3377)",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Drum-Dyed)",
    leadTime: "Sample: 7–10 Days | Bulk: 30–40 Days",
    customization:
      "Two-tone pull-up wax formulation, antique brass rivets & buckles, waterproof canvas lining, reinforced stress-point riveting",
    idealApplications: "Weekender travel duffels, heritage rucksacks, messenger bags, field satchels",
  },
];

export const PRODUCT_LINE_SPECS = [
  {
    category: "Custom Leather Jackets & Outerwear",
    hsCode: "HS 4203.10",
    leatherGrades: "Lambskin Nappa (0.7–0.9mm), Full-Grain Cowhide (1.1–1.3mm), Goat Suede",
    moq: "50–100 pcs / style (across XS–4XL size run)",
    sampleTime: "10–14 Business Days",
    bulkLeadTime: "30–45 Business Days",
    customization: "Custom size grading (XS–4XL), YKK Excella zips, woven labels, custom snap moulds, garment bags",
  },
  {
    category: "Luxury Leather Handbags & Totes",
    hsCode: "HS 4202.21",
    leatherGrades: "Full-Grain Calf Nappa, Tuscan Veg-Tan, Saffiano, Pebble Cowhide (1.2–1.6mm)",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Dye)",
    sampleTime: "7–12 Business Days",
    bulkLeadTime: "30–40 Business Days",
    customization: "Custom 3D brass hardware, Pantone leather dyeing, Italian edge paint, organic cotton dustbags",
  },
  {
    category: "Executive Laptop Bags & Briefcases",
    hsCode: "HS 4202.11",
    leatherGrades: "Full-Grain Vegetable-Tanned, Cross-Grain Saffiano, Croc-Embossed (1.4–1.8mm)",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Dye)",
    sampleTime: "7–12 Business Days",
    bulkLeadTime: "30–40 Business Days",
    customization: "High-density shockproof laptop sleeves, trolley straps, combination locks, blind logo debossing",
  },
  {
    category: "Travel Duffels & Heritage Backpacks",
    hsCode: "HS 4202.91",
    leatherGrades: "Crazy Horse Pull-Up, Oil-Tanned Full-Grain Bovine, Bridle Trim (1.6–2.0mm)",
    moq: "50 pcs (Stock Leather Trial) / 100 pcs (Custom Dye)",
    sampleTime: "7–14 Business Days",
    bulkLeadTime: "30–42 Business Days",
    customization: "Solid brass feet/buckles, ergonomic air-mesh or suede straps, shoe compartments, luggage tags",
  },
  {
    category: "Genuine Leather Wallets & Small Goods (SLGs)",
    hsCode: "HS 4202.31",
    leatherGrades: "Full-Grain Calfskin, Chevre Goatskin, Veg-Tan Bridle (0.8–1.2mm)",
    moq: "100 pcs (Stock Trial) / 200 pcs (Custom Dye)",
    sampleTime: "5–7 Business Days",
    bulkLeadTime: "25–35 Business Days",
    customization: "13.56 MHz RFID blocking lining, 0.4mm skived turned edges, foil stamping, FSC rigid gift boxes",
  },
  {
    category: "Full-Grain Bridle & Dress Leather Belts",
    hsCode: "HS 4203.30",
    leatherGrades: "Full-Grain English Bridle Hide, Vegetable-Tanned Strap, Nubuck Lining (3.2–4.0mm)",
    moq: "100–150 pcs / style",
    sampleTime: "5–7 Business Days",
    bulkLeadTime: "25–30 Business Days",
    customization: "Custom forged solid brass/stainless buckles, feather-edged construction, size stamping (28\"–44\")",
  },
];

export function generateB2BProductSpecsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.uniconleather.com/private-label#b2b-product-specifications",
    name: "Unicon Leather B2B OEM/ODM Custom Manufacturing Specifications",
    description:
      "Structured B2B manufacturing specifications covering Leather Grade, Minimum Order Quantity (MOQ), Sample & Bulk Lead Time, and Customization Options for custom leather jackets, handbags, wallets, belts, and travel bags.",
    numberOfItems: PRODUCT_LINE_SPECS.length,
    itemListElement: PRODUCT_LINE_SPECS.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: `${item.category} — OEM/ODM Private Label Manufacturing`,
        serviceType: `Custom ${item.category} Manufacturing (${item.hsCode})`,
        description: `Bespoke B2B contract manufacturing for ${item.category} (${item.hsCode}) using ${item.leatherGrades}. MOQ: ${item.moq}. Lead Time: ${item.bulkLeadTime}. Customization: ${item.customization}.`,
        provider: {
          "@type": "Organization",
          name: "Unicon Leather Goods Export Private Limited",
          url: "https://www.uniconleather.com",
        },
        category: item.category,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Leather Grade",
            value: item.leatherGrades,
          },
          {
            "@type": "PropertyValue",
            name: "Minimum Order Quantity (MOQ)",
            value: item.moq,
          },
          {
            "@type": "PropertyValue",
            name: "Prototype Sample Lead Time",
            value: item.sampleTime,
          },
          {
            "@type": "PropertyValue",
            name: "Bulk Production Lead Time",
            value: item.bulkLeadTime,
          },
          {
            "@type": "PropertyValue",
            name: "Customization Options",
            value: item.customization,
          },
          {
            "@type": "PropertyValue",
            name: "Harmonized System (HS) Code",
            value: item.hsCode,
          },
          {
            "@type": "PropertyValue",
            name: "Quality Inspection Standard",
            value: "ISO 2859-1 (ANSI/ASQ Z1.4) AQL 2.5 Major / 4.0 Minor",
          },
          {
            "@type": "PropertyValue",
            name: "Supply Chain & Chemical Compliance",
            value: "LWG Partner Tanneries, EU REACH Annex XVII & California Proposition 65 Lab Verified (SGS / Intertek)",
          },
        ],
      },
    })),
  };
}

interface B2BManufacturingSpecsProps {
  showGuideBanner?: boolean;
}

export function B2BManufacturingSpecs({ showGuideBanner = true }: B2BManufacturingSpecsProps) {
  return (
    <section
      id="b2b-specifications"
      aria-labelledby="why-choose-unicon-heading"
      className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-14"
    >
      {/* 1. 3-SENTENCE ANSWER-FIRST SUMMARY BOX */}
      <div className="bg-[#FAF8F5] border-l-4 border-cognac border-y border-r border-charcoal/10 p-6 sm:p-10 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-cognac font-bold bg-white px-3 py-1 border border-cognac/20">
            <Sparkles className="w-3.5 h-3.5 text-cognac" /> Executive Answer-First Summary (OEM / ODM Brief)
          </span>
          <span className="text-[11px] font-mono text-charcoal-500 uppercase tracking-wider">
            ISO 2859-1 AQL 2.5 · LWG Gold/Silver · EU REACH &amp; Prop 65
          </span>
        </div>

        <h2
          id="why-choose-unicon-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight"
        >
          Why Choose Unicon Leather for OEM/ODM Leather Manufacturing?
        </h2>

        {/* Exact 3-Sentence Summary for Generative AI & Procurement Executives */}
        <p
          className="text-sm sm:text-base lg:text-[17px] text-charcoal-800 leading-relaxed font-normal max-w-5xl"
          data-aeo-summary="why-choose-unicon-leather"
        >
          Unicon Leather is a vertically integrated Indian leather goods manufacturer and Government-registered export house delivering bespoke OEM/ODM leather jackets, luxury handbags, RFID wallets, belts, and executive accessories to fashion brands across the USA, UK, Europe, and Australia. We combine flexible low Minimum Order Quantities (starting at 50–100 pieces per style for stock-leather trials) and rapid 5–14 day DHL prototype counter-sampling with full-grain hides sourced from Leather Working Group (LWG) Gold and Silver-rated partner tanneries, supported by batch-specific EU REACH Annex XVII and California Proposition 65 laboratory testing via SGS or Intertek. Every production run is protected by bilateral NDAs, crafted with 0.4mm precision German skiving and multi-coat Italian edge lacquer, audited to strict AQL 2.5 quality benchmarks, and delivered globally under turnkey FOB, CIF, or DDP Incoterms.
        </p>

        {/* Key Quantitative Proof Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-white p-4 border border-charcoal/10">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-charcoal-500">Flexible Trial MOQ</span>
            <span className="font-serif text-lg sm:text-xl font-semibold text-charcoal">50–100 Pcs / Style</span>
          </div>
          <div className="bg-white p-4 border border-charcoal/10">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-charcoal-500">Counter-Sample SLA</span>
            <span className="font-serif text-lg sm:text-xl font-semibold text-charcoal">5–14 Business Days</span>
          </div>
          <div className="bg-white p-4 border border-charcoal/10">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-charcoal-500">Bulk Turnaround</span>
            <span className="font-serif text-lg sm:text-xl font-semibold text-charcoal">25–40 Business Days</span>
          </div>
          <div className="bg-white p-4 border border-charcoal/10">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-charcoal-500">Defect Tolerance</span>
            <span className="font-serif text-lg sm:text-xl font-semibold text-charcoal">AQL 2.5 Audited</span>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY COMPARISON TABLE: LEATHER GRADE, MOQ, LEAD TIME & CUSTOMIZATION OPTIONS */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Structured B2B Specification Matrix · Table 01
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
              What Are Unicon Leather&apos;s Specifications by Leather Grade, MOQ, Lead Time &amp; Customization?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-3xl leading-relaxed">
              Engineered for brand directors, technical designers, and procurement teams: compare our five primary export leather grades across gauge thickness, tannery compliance, minimum order quantities, sampling/production lead times, and bespoke customization options.
            </p>
          </div>
          <Button href="#inquiry" variant="primary" size="sm" className="self-start md:self-auto shrink-0">
            Request Custom Tech Pack Quote <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        <div className="w-full overflow-x-auto border border-charcoal/15 bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[920px]">
            <thead>
              <tr className="bg-charcoal text-white text-[11px] font-mono uppercase tracking-wider">
                <th scope="col" className="py-4 px-5 border-r border-white/15 w-[22%]">
                  Leather Grade &amp; Gauge
                </th>
                <th scope="col" className="py-4 px-5 border-r border-white/15 w-[18%]">
                  Tannery &amp; Chemical Standard
                </th>
                <th scope="col" className="py-4 px-5 border-r border-white/15 w-[15%]">
                  Minimum Order Quantity (MOQ)
                </th>
                <th scope="col" className="py-4 px-5 border-r border-white/15 w-[17%]">
                  Lead Time (Sample &amp; Bulk)
                </th>
                <th scope="col" className="py-4 px-5 w-[28%]">
                  Customization Options &amp; Applications
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10 text-xs text-charcoal-700">
              {LEATHER_GRADE_SPECS.map((row, index) => (
                <tr
                  key={row.grade}
                  className={index % 2 === 0 ? "bg-white hover:bg-[#FAF8F5]/80" : "bg-[#FAF8F5]/50 hover:bg-[#FAF8F5]"}
                >
                  <th scope="row" className="py-4 px-5 font-serif text-sm font-semibold text-charcoal align-top border-r border-charcoal/10">
                    <span className="block">{row.grade}</span>
                    <span className="inline-block mt-1.5 text-[11px] font-mono font-normal text-cognac bg-cognac/10 px-2 py-0.5">
                      Gauge: {row.thickness}
                    </span>
                  </th>
                  <td className="py-4 px-5 align-top border-r border-charcoal/10 font-light leading-relaxed">
                    {row.tanneryStandard}
                  </td>
                  <td className="py-4 px-5 align-top border-r border-charcoal/10 font-mono font-semibold text-charcoal">
                    {row.moq}
                  </td>
                  <td className="py-4 px-5 align-top border-r border-charcoal/10 font-mono text-[11.5px] leading-relaxed">
                    {row.leadTime}
                  </td>
                  <td className="py-4 px-5 align-top space-y-1.5 leading-relaxed">
                    <p className="font-light text-charcoal-700">{row.customization}</p>
                    <p className="text-[11px] font-mono text-charcoal-500">
                      <strong className="text-charcoal font-semibold">Best For:</strong> {row.idealApplications}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. SECONDARY COMPARISON TABLE: BY PRODUCT CATEGORY (JACKETS, HANDBAGS, WALLETS, BELTS) */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
            Category Production Benchmarks · Table 02
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal tracking-tight">
            How Do MOQs, Lead Times &amp; Leather Specifications Vary by Product Line?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-3xl leading-relaxed">
            Direct comparison of Harmonized System (HS) tariff classifications, recommended leather grades, per-style MOQs, and production schedules across our six core export lines.
          </p>
        </div>

        <div className="w-full overflow-x-auto border border-charcoal/15 bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[920px]">
            <thead>
              <tr className="bg-[#F4F0E8] text-charcoal text-[11px] font-mono uppercase tracking-wider border-b border-charcoal/15">
                <th scope="col" className="py-3.5 px-5 border-r border-charcoal/10">
                  Product Category (HS Code)
                </th>
                <th scope="col" className="py-3.5 px-5 border-r border-charcoal/10">
                  Recommended Leather Grade
                </th>
                <th scope="col" className="py-3.5 px-5 border-r border-charcoal/10">
                  Minimum Order Quantity
                </th>
                <th scope="col" className="py-3.5 px-5 border-r border-charcoal/10">
                  Sample / Bulk Lead Time
                </th>
                <th scope="col" className="py-3.5 px-5">
                  Hardware, Branding &amp; Trim Options
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10 text-xs text-charcoal-700">
              {PRODUCT_LINE_SPECS.map((item) => (
                <tr key={item.category} className="hover:bg-[#FAF8F5]/70 transition-colors">
                  <th scope="row" className="py-3.5 px-5 font-serif text-sm font-semibold text-charcoal border-r border-charcoal/10 align-top">
                    <span className="block">{item.category}</span>
                    <span className="text-[10.5px] font-mono text-cognac font-normal">{item.hsCode}</span>
                  </th>
                  <td className="py-3.5 px-5 border-r border-charcoal/10 align-top font-light">
                    {item.leatherGrades}
                  </td>
                  <td className="py-3.5 px-5 border-r border-charcoal/10 align-top font-mono font-semibold text-charcoal">
                    {item.moq}
                  </td>
                  <td className="py-3.5 px-5 border-r border-charcoal/10 align-top font-mono text-[11px]">
                    <span className="block text-cognac font-semibold">Sample: {item.sampleTime}</span>
                    <span className="block text-charcoal-600">Bulk: {item.bulkLeadTime}</span>
                  </td>
                  <td className="py-3.5 px-5 align-top font-light leading-relaxed">
                    {item.customization}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. CROSS-LINK BANNER TO SOURCING GUIDE */}
      {showGuideBanner && (
        <div className="bg-white border border-charcoal/15 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
              Technical Buyer Resource
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal">
              Need Help Selecting Between Full-Grain, Top-Grain, Veg-Tan, or Chrome-Free Leather?
            </h3>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Read our engineering manual, <strong>The Ultimate Leather Quality &amp; Sourcing Guide for Brands</strong>, featuring ISO tensile benchmarks, LWG sustainability metrics, and millimetric thickness charts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button href="/leather-quality-sourcing-guide" variant="outline" size="md" className="border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
              <FileText className="w-4 h-4 mr-2" /> Read Leather Sourcing Guide
            </Button>
            <Button href="#inquiry" variant="primary" size="md">
              Request Swatch Kit &amp; Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
