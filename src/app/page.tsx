import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  FileText,
  Sliders,
  Send,
  Building2,
  Award,
  Lock,
  Cpu,
  Plane,
  Ship,
  HelpCircle,
  Compass,
  Check,
  Feather,
  Anchor,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { MovingPanelsShowcase } from "@/components/home/MovingPanelsShowcase";
import { NewProductDevelopmentShowcase } from "@/components/home/NewProductDevelopmentShowcase";
import { Hero } from "@/components/home/Hero";
import { Accordion } from "@/components/ui/Accordion";
import { TechPackWorkflow } from "@/components/ui/TechPackWorkflow";
import {
  JsonLdScript,
  generateFaqSchema,
  generateProductSchema,
  generateB2BServiceSchema,
} from "@/components/seo/JsonLdScript";
import { generateB2BProductSpecsSchema } from "@/components/seo/B2BManufacturingSpecs";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.uniconleather.com",
    languages: {
      "en": "https://www.uniconleather.com",
      "en-US": "https://www.uniconleather.com/en-us",
      "en-CA": "https://www.uniconleather.com/en-ca",
      "en-GB": "https://www.uniconleather.com/en-gb",
      "en-AU": "https://www.uniconleather.com/en-au",
      "de-DE": "https://www.uniconleather.com/de",
      "fr-FR": "https://www.uniconleather.com/fr",
      "it-IT": "https://www.uniconleather.com/it",
      "es-ES": "https://www.uniconleather.com/es",
      "ar-AE": "https://www.uniconleather.com/ar",
      "ja-JP": "https://www.uniconleather.com/ja",
      "nl-NL": "https://www.uniconleather.com/nl",
      "sv-SE": "https://www.uniconleather.com/sv",
      "ko-KR": "https://www.uniconleather.com/ko",
      "x-default": "https://www.uniconleather.com",
    },
  },
};

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const tannageLibrary = [
    {
      name: "Tuscan Vegetable Tanned Cowhide",
      origin: "LWG Audited Partner Tannery",
      thickness: "1.4 – 1.8mm (Bags) / 3.2 – 3.8mm (Belts)",
      characteristics: "Infused with mimosa and chestnut tannins. Develops an organic, amber-golden patina over decades of use.",
      idealFor: "Heritage satchels, structured luxury totes, heavy-duty bridle belts",
      badge: "Pure Veg-Tan",
    },
    {
      name: "Calf Pebble & Nappa Leather",
      origin: "Drum-Dyed Chrome / Chrome-Free",
      thickness: "1.0 – 1.2mm",
      characteristics: "Ultra-supple hand feel with delicate micro-grain elasticity. Retains deep color fastness across seasons.",
      idealFor: "Designer handbags, slouchy shoulder bags, luxury wallets & cardholders",
      badge: "Ultra-Soft Temper",
    },
    {
      name: "Cross-Grain Saffiano Leather",
      origin: "Full-Grain Embossed Finish",
      thickness: "1.2 – 1.4mm",
      characteristics: "Distinguished cross-hatch pressed texture sealed with transparent wax. Extremely scratch-resistant and water-repellent.",
      idealFor: "Executive laptop folios, daily commuter totes, passport organizers",
      badge: "High Durability",
    },
    {
      name: "Crazy Horse Waxed Pull-Up",
      origin: "Infused Paraffin Oils & Waxes",
      thickness: "1.6 – 2.0mm",
      characteristics: "Dramatically lightens in tone when folded or flexed. Ages with rugged, rich antique vintage character.",
      idealFor: "Weekender travel duffels, vintage messenger bags, tech sleeves",
      badge: "Heritage Two-Tone",
    },
    {
      name: "Italian Edge Skived Velvet Suede",
      origin: "Reverse Buffed Calfskin",
      thickness: "1.1 – 1.3mm",
      characteristics: "Silky soft napped surface batch-testable to European REACH Annex XVII standards for zero crocking.",
      idealFor: "Luxury bag interior linings, contrast pocket accents, soft pouches",
      badge: "REACH Batch-Testable",
    },
  ];

  return (
    <>
      {/* 0. SEO JSON-LD FAQ & PRODUCT SCHEMAS FOR GOOGLE, BING & AI SEARCH */}
      <JsonLdScript schema={generateFaqSchema(FAQS)} />
      <JsonLdScript schema={generateB2BProductSpecsSchema()} />
      {featuredProducts.map((product) => (
        <JsonLdScript key={`schema-${product.id}`} schema={generateProductSchema(product)} />
      ))}

      <div className="w-full bg-white pb-28">
        {/* 1.0 HERO COMPONENT */}
        <Hero />

        <div className="space-y-20 sm:space-y-28">
          {/* 1.1 Hairline Trust Indicators Bar */}
          <section className="w-full bg-white border-b border-charcoal/10">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-6 sm:py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/8 text-left">
            <div className="space-y-1 sm:pr-6">
              <span className="block font-serif text-xl sm:text-2xl font-medium text-charcoal">100%</span>
              <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block">Genuine Leathers</span>
              <p className="text-xs text-charcoal-500 font-light hidden sm:block">Full-grain, veg-tan & calf nappa</p>
            </div>
            <div className="space-y-1 sm:px-6 pt-4 sm:pt-0">
              <span className="block font-serif text-xl sm:text-2xl font-medium text-charcoal">5–7 / 7–14d</span>
              <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block">Stock Leather Sampling</span>
              <p className="text-xs text-charcoal-500 font-light hidden sm:block">5–7d SLGs · 7–14d Bags (+7–10d custom dye/tooling)</p>
            </div>
            <div className="space-y-1 sm:px-6 pt-4 sm:pt-0">
              <span className="block font-serif text-xl sm:text-2xl font-medium text-charcoal">AQL 2.5</span>
              <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block">Quality Standard</span>
              <p className="text-xs text-charcoal-500 font-light hidden sm:block">Strict pre-shipment audit & reports</p>
            </div>
            <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
              <span className="block font-serif text-xl sm:text-2xl font-medium text-charcoal">25+</span>
              <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block">Export Markets</span>
              <p className="text-xs text-charcoal-500 font-light hidden sm:block">FOB, CIF, DDP international freight</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.15 ANSWER-FIRST EXECUTIVE OVERVIEW: CORE OFFERINGS (JACKETS, ACCESSORIES & OEM CAPABILITIES) */}
      <section
        id="core-offerings"
        aria-labelledby="answer-first-core-offerings-heading"
        className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16"
      >
        <div className="bg-[#FAF8F5] border-l-4 border-cognac border-y border-r border-charcoal/12 p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
          <div className="space-y-3 max-w-4xl">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-bold block">
              Answer-First B2B Manufacturing Brief
            </span>
            <h2
              id="answer-first-core-offerings-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight"
            >
              What Core Leather Goods &amp; Custom Manufacturing Services Does Unicon Leather Provide?
            </h2>
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
              <strong>UNICON LEATHER</strong> (Unicon Leather Goods Export Private Limited) is a vertically integrated cut-and-sew leather goods atelier and Government-registered export house specializing in <strong>custom leather jackets</strong>, <strong>structured handbags &amp; travel bags</strong>, <strong>small leather goods</strong> (RFID wallets, cardholders, bridle belts), and turnkey <strong>OEM/ODM private-label production</strong>. Operating from our 4-plot factory in the Kolkata Leather Complex (Zone 09, Bantala) and our corporate showroom in Noida (Delhi NCR), we build collections using full-grain and vegetable-tanned hides sourced from Leather Working Group (LWG) audited partner tanneries, supported by batch-specific EU REACH Annex XVII and California Proposition 65 laboratory testing via SGS or Intertek. Brands partner with us for transparent MOQs (50 pcs stock-leather trial / 100 pcs custom dye for bags &amp; jackets; 100–200 pcs for SLGs), predictable counter-sampling (5–7 business days for SLGs and 7–14 business days for bags/jackets in stock leather; +7–10 days for custom dye or 3D brass tooling), and AQL 2.5 inspected global export.
            </p>
          </div>

          {/* 3-Pillar Breakdown with Clear Bullet-Point Feature Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pillar 1: Custom Leather Jackets & Outerwear */}
            <div className="bg-white border border-charcoal/10 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-cognac/10 px-2.5 py-1">
                    01 // Outerwear Atelier (HS 4203.10)
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500 font-semibold">MOQ: 50–100 Pcs</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  Custom Leather Jackets &amp; Tailored Garments
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Precision-tailored men&apos;s and women&apos;s leather outerwear engineered from supple drum-dyed hides with bespoke hardware and size grading.
                </p>
                <ul className="space-y-2 text-xs text-charcoal-700 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Outerwear Hides:</strong> Drum-dyed lambskin nappa (0.6–0.9mm), full-grain cowhide (1.1–1.3mm), buffalo &amp; goat suede.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Silhouettes &amp; Grading:</strong> Moto biker, bomber, aviator, trench &amp; blazers graded across US/EU/UK sizes (XS–4XL).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Luxury Trims:</strong> YKK Excella® / Riri metal zippers, Bemberg™ cupro or quilted satin linings &amp; engraved snaps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Lead Time:</strong> 7–14 business days for stock-leather sample (+7–10 days custom dye); 30–40 days bulk production.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/leather-jacket-manufacturer-india"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  Explore Custom Leather Jacket Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Genuine Leather Bags & Small Accessories */}
            <div className="bg-white border border-charcoal/10 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-cognac/10 px-2.5 py-1">
                    02 // Bags &amp; SLGs (HS 4202 / 4203.30)
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500 font-semibold">MOQ: 50–200 Pcs</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  Genuine Leather Bags &amp; Small Accessories
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Handcrafted full-grain leather bags, executive briefcases, RFID wallets, and solid-brass bridle belts built with 0.4mm skiving tolerances.
                </p>
                <ul className="space-y-2 text-xs text-charcoal-700 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Luxury Handbags &amp; Totes:</strong> Veg-tan, calf pebble, Saffiano &amp; croc-embossed carryalls (50 pcs stock trial / 100 pcs custom dye MOQ).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Business &amp; Travel Bags:</strong> Padded laptop briefcases, weekender duffels &amp; heritage backpacks in pull-up cowhide (50–100 pcs MOQ).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>RFID Wallets &amp; Cardholders:</strong> 13.56 MHz shielded bifolds, zip-around purses, passport folios &amp; key organizers (100 pcs stock trial / 200 pcs custom dye MOQ).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Bridle &amp; Dress Belts:</strong> 3.2–4.0mm full-grain vegetable-tanned straps with custom 3D forged brass buckles (100 pcs stock trial / 150 pcs custom dye MOQ).</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/products"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  Browse All 12 Bag &amp; Accessory Lines <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: OEM / ODM Contract Manufacturing Capabilities */}
            <div className="bg-white border border-charcoal/10 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xs">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-cognac/10 px-2.5 py-1">
                    03 // OEM / ODM Private Label
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500 font-semibold">5–7d SLG / 7–14d Bag Samples</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  End-to-End OEM/ODM Manufacturing Capabilities
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Complete contract manufacturing from 2D/3D CAD pattern drafting and custom hardware tooling to global DDP warehouse delivery.
                </p>
                <ul className="space-y-2 text-xs text-charcoal-700 pt-1">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Bespoke Branding &amp; Tooling:</strong> Blind debossing, 24k foil stamping, 3D CNC brass moulds &amp; Pantone leather dyeing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Audited Chemical Safety:</strong> LWG-audited partner hides, EU REACH Annex XVII (Cr VI &lt;3ppm, Azo-free) &amp; California Prop 65.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>AQL 2.5 Quality Assurance:</strong> 100% metal-detection scanning, 72h salt-spray hardware tests &amp; ISO 2859-1 pre-shipment reports.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                    <span><strong>Global Export Freight:</strong> Turnkey FOB, CIF &amp; DDP shipping via DHL/FedEx Air (3–5 days) or Ocean FCL/LCL to 25+ countries.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-charcoal/8 flex items-center justify-between gap-2">
                <Link
                  href="/private-label#b2b-specifications"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  View Full OEM Comparison Table <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/leather-quality-sourcing-guide"
                  className="text-[11px] font-mono text-charcoal-600 hover:text-cognac underline underline-offset-4"
                >
                  Sourcing Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 CONTINUOUS MOVING SHOWCASE: 14 LUXURY PANELS */}
      <MovingPanelsShowcase />

      {/* 1.3 CONTINUOUS MOVING SHOWCASE: 15 SQUARE NEW PRODUCT DEVELOPMENT PANELS */}
      <NewProductDevelopmentShowcase />

      {/* 1.4 AUTUMN/WINTER 2026–2027 EDITORIAL SILHOUETTE CAPSULE (SAMPLING & PRODUCTION READY) */}
      <section
        id="seasonal-capsule"
        aria-labelledby="seasonal-capsule-heading"
        className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16"
      >
        <div className="bg-white border border-charcoal/12 p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-charcoal/10 pb-6">
            <div className="space-y-2.5 max-w-3xl">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-bold block">
                Autumn / Winter 2026–2027 Editorial Capsule · Original Factory Blocks
              </span>
              <h2
                id="seasonal-capsule-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight"
              >
                Seasonal Silhouette Directions Ready for Private-Label Sampling
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Developed in our Kolkata pattern room to reflect Autumn/Winter 2026–2027 European and global editorial silhouette trends. Every construction below is backed by existing master acrylic patterns, skiving templates, and hardware tooling—available for 7–14 business day counter-sampling in stock leather (+7–10 days for custom Pantone dye or bespoke 3D hardware) and 50–100 unit production runs.
              </p>
            </div>
            <Link
              href="/contact#inquiry-form"
              className="self-start lg:self-auto inline-flex items-center gap-2 px-5 py-3 bg-charcoal hover:bg-cognac text-white text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Request Capsule Sample Pack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] border border-charcoal/10 p-6 flex flex-col justify-between space-y-4 hover:border-cognac transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-white px-2.5 py-0.5 border border-cognac/20">
                    AW26 // Block 01
                  </span>
                  <span className="text-[10.5px] font-mono text-charcoal-500">50 / 100 Pcs MOQ</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  East–West Shoulder Bags
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Elongated horizontal baguette and underarm shoulder bags crafted in 1.4mm smooth box calfskin or glazed vegetable-tanned leather with extended tubular twin straps, 0.4mm Fortuna turned edges, and YKK Excella top zips.
                </p>
              </div>
              <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-charcoal-500">Sample: 7–14 Days (Stock)</span>
                <Link
                  href="/products/mayfair-east-west-smooth-box-calf-shoulder-bag"
                  className="text-cognac font-semibold hover:text-charcoal"
                >
                  Inspect SKU Specs →
                </Link>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-charcoal/10 p-6 flex flex-col justify-between space-y-4 hover:border-cognac transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-white px-2.5 py-0.5 border border-cognac/20">
                    AW26 // Block 02
                  </span>
                  <span className="text-[10.5px] font-mono text-charcoal-500">50 / 100 Pcs MOQ</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Soft Crescent &amp; Oversized Shoulder Bags
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Unstructured slouchy crescent hobos and generous everyday shoulder carryalls cut from 1.2–1.5mm drum-milled Nappa and pebble cowhide. Engineered with ergonomic curved darts, concealed magnetic bridges, and interior tethered zip pouches.
                </p>
              </div>
              <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-charcoal-500">Sample: 7–14 Days (Stock)</span>
                <Link
                  href="/products/milan-soft-crescent-pebbled-nappa-hobo-bag"
                  className="text-cognac font-semibold hover:text-charcoal"
                >
                  Inspect SKU Specs →
                </Link>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-charcoal/10 p-6 flex flex-col justify-between space-y-4 hover:border-cognac transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-white px-2.5 py-0.5 border border-cognac/20">
                    AW26 // Block 03
                  </span>
                  <span className="text-[10.5px] font-mono text-charcoal-500">50 / 100 Pcs MOQ</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Velvet Suede Totes &amp; Structured Top-Handle Bags
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Reverse-buffed 1.4mm calf and goat suede shoppers (treated for Grade 4 ISO 11640 dry/wet rub fastness) alongside architectural top-handle satchels reinforced with Italian Salpa leatherboard and solid brass feet.
                </p>
              </div>
              <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-charcoal-500">Sample: 7–14 Days (Stock)</span>
                <Link
                  href="/products/kensington-velvet-calf-suede-structured-work-tote"
                  className="text-cognac font-semibold hover:text-charcoal"
                >
                  Inspect SKU Specs →
                </Link>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-charcoal/10 p-6 flex flex-col justify-between space-y-4 hover:border-cognac transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-white px-2.5 py-0.5 border border-cognac/20">
                    AW26 // Block 04
                  </span>
                  <span className="text-[10.5px] font-mono text-charcoal-500">50 / 100 Pcs MOQ</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Hydraulic Croc-Embossed Leather Options
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  High-relief hydraulic plate-embossed crocodile and lizard grain on 1.6mm full-grain bovine hides in Espresso, Deep Emerald, Oxblood, and Obsidian Black—available across structured handbags, briefcases, cardholders, and belts.
                </p>
              </div>
              <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-charcoal-500">Sample: 7–14 Days (Stock)</span>
                <Link
                  href="/products/emerald-crocodile-embossed-executive-briefcase"
                  className="text-cognac font-semibold hover:text-charcoal"
                >
                  Inspect SKU Specs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MANUFACTURING CATEGORIES SHOWCASE */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Direct Factory Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Which Leather Bag, Jacket &amp; Accessory Collections Can You Customize?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light leading-relaxed">
              We produce 12 distinct product lines—spanning structured handbags, shopper totes, laptop briefcases, weekender duffels, tailored outerwear, 13.56 MHz RFID wallets, and bridle belts—with 50–100 piece stock-leather trial MOQs and full technical specification sheets per category.
            </p>
          </div>
          <Button href="/products" variant="outline" size="md" className="self-start md:self-auto border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
            View All 12 Collections <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.slice(0, 8).map((category, index) => (
            <CategoryCard key={category.id} category={category} panelNumber={index + 1} />
          ))}
        </div>
      </section>

      {/* 3. OEM / PRIVATE LABEL 4-PILLAR WORKFLOW */}
      <section className="w-full bg-[#faf8f5] py-14 sm:py-20 border-y border-charcoal/10">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium">
              End-To-End Contract Manufacturing
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              How Does Unicon Leather&apos;s 4-Step OEM/ODM Manufacturing Process Work?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              Our OEM/ODM workflow transforms your tech packs, sketches, or reference samples into retail-ready leather collections in four structured phases under a bilateral NDA: CAD pattern engineering (24–48h BOM quote), counter-sampling (5–7 business days for SLGs / 7–14 business days for bags &amp; jackets in stock leather; +7–10 days for custom dye/tooling), batch manufacturing (25–40 business days), and AQL 2.5 inspected global freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">01</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">Design &amp; Tech Pack</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Submit your CAD sketches, moodboards, or physical reference samples. Our master patternmakers generate 2D/3D templates and BOM costings.
              </p>
            </div>

            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">02</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">Sampling &amp; Tannages</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                In-stock leather samples in 5–7 business days (wallets/belts) or 7–14 business days (bags/jackets). Custom Pantone dye or 3D brass hardware tooling adds +7–10 business days.
              </p>
            </div>

            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">03</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">Batch Manufacturing</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Precision cutting, hand-skiving, saddle-stitching, and multi-layer Italian edge painting executed in controlled ateliers.
              </p>
            </div>

            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">04</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">AQL 2.5 &amp; Export Freight</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Comprehensive in-line and final QC inspection report, export packaging, customs documentation, and FOB/CIF/DDP shipping.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/private-label" variant="primary" size="lg">
              Explore Full Private Label Capabilities <ArrowRight className="w-4 h-4 ml-2.5" />
            </Button>
            <Button href="/cost-calculator" variant="outline" size="lg" className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
              Launch B2B FOB Cost &amp; MOQ Calculator <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/leather-sourcing-india-vs-china-vietnam-italy" variant="outline" size="lg" className="border-cognac/40 text-cognac hover:bg-cognac hover:text-white">
              India vs. China, Vietnam &amp; Italy Guide <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. ATELIER CRAFTSMANSHIP, ORIGINAL FACTORY FLOOR PHOTOGRAPHS & INSTALLED PRODUCTION CAPABILITIES */}
      <section className="w-full bg-white space-y-10 sm:space-y-14">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Kolkata Leather Complex (Zone 09, Bantala) &amp; Noida NCR Showroom
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Factory Floor Evidence, Installed Machinery &amp; Production Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light leading-relaxed">
              Every hide undergoes manual 1,000-lux light-table inspection for grain consistency, tensile strength (&gt;20 N/mm²), and color fastness at our 4-plot Kolkata production facility (Plots 676, 687, 944 &amp; 1084). Below are actual floor views and installed machinery specifications across our clicking, skiving, stitching, and QC lines.
            </p>
          </div>
          <Button href="/craftsmanship" variant="outline" size="md" className="self-start md:self-auto border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
            View 11-Stage Production <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* 4-Panel Factory Floor & Prototyping Lab Photograph Grid */}
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <figure className="bg-[#FAF8F5] border border-charcoal/12 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="relative aspect-[4/3] bg-charcoal-50 overflow-hidden">
                <img
                  src="/images/craftsmanship-hero.jpg"
                  alt="Kolkata Atelier Station 01: 1,000-Lux Hide Inspection & Hand-Burnished Edge Finishing"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5">
                  Station 01 · Hide Grading &amp; Edge Work
                </span>
              </div>
              <figcaption className="p-4 space-y-1 text-left">
                <strong className="font-serif text-sm text-charcoal block">
                  1,000-Lux Hide Sorting &amp; Edge Burnishing
                </strong>
                <p className="text-[11px] text-charcoal-600 font-light leading-relaxed">
                  Prime bend selection from LWG partner hides (1.2–2.2mm bags; 3.8mm belts) and multi-coat heated Fenice edge finishing.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-[#FAF8F5] border border-charcoal/12 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="relative aspect-[4/3] bg-charcoal-50 overflow-hidden">
                <img
                  src="/images/npd/npd-10.jpg"
                  alt="Kolkata Atelier Station 02: Acrylic Master Pattern & Die-Cut Panel Flat-Lay"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5">
                  Station 02 · Pattern &amp; Die-Clicking
                </span>
              </div>
              <figcaption className="p-4 space-y-1 text-left">
                <strong className="font-serif text-sm text-charcoal block">
                  25-Ton Hydraulic Clicking &amp; Panel Flat-Lay
                </strong>
                <p className="text-[11px] text-charcoal-600 font-light leading-relaxed">
                  Precision steel-rule die clicking and CAD pattern nesting for multi-panel totes, briefcases, and structured satchels.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-[#FAF8F5] border border-charcoal/12 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="relative aspect-[4/3] bg-charcoal-50 overflow-hidden">
                <img
                  src="/images/npd/npd-15.jpg"
                  alt="Kolkata Atelier Station 03: Digital Caliper Tolerance & 0.4mm Skiving Verification"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5">
                  Station 03 · Caliper &amp; Skiving QC
                </span>
              </div>
              <figcaption className="p-4 space-y-1 text-left">
                <strong className="font-serif text-sm text-charcoal block">
                  0.4mm Fortuna Skiving &amp; Caliper Verification
                </strong>
                <p className="text-[11px] text-charcoal-600 font-light leading-relaxed">
                  In-line digital micrometer and caliper checks verifying 0.4mm turned-edge skiving and tubular strap tolerances.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-[#FAF8F5] border border-charcoal/12 overflow-hidden flex flex-col justify-between shadow-2xs">
              <div className="relative aspect-[4/3] bg-charcoal-50 overflow-hidden">
                <img
                  src="/images/craftsmanship-luxury-leather.jpg"
                  alt="Kolkata Atelier Station 04: Cylinder-Arm Lockstitching & Final Pre-Shipment AQL 2.5 Audit"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5">
                  Station 04 · Lockstitch &amp; AQL 2.5 Audit
                </span>
              </div>
              <figcaption className="p-4 space-y-1 text-left">
                <strong className="font-serif text-sm text-charcoal block">
                  6–8 SPI Cylinder-Arm Sewing &amp; AQL 2.5 QC
                </strong>
                <p className="text-[11px] text-charcoal-600 font-light leading-relaxed">
                  Juki DSC-246 cylinder-arm and DU-1181N walking-foot assembly using Tex 70/90 bonded nylon thread prior to ISO 2859-1 audit.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Actual Production Capabilities & Installed Machinery Matrix */}
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="bg-[#FAF8F5] border border-charcoal/12 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-cognac font-bold block">
                  Verified Factory Infrastructure · Plots 676, 687, 944 &amp; 1084, CLC Zone 09
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal mt-0.5">
                  Installed Machinery, Monthly Capacity &amp; Engineering Tolerances
                </h3>
              </div>
              <span className="text-xs font-mono text-charcoal-600 bg-white px-3.5 py-1.5 border border-charcoal/10">
                Monthly Output: <strong>15,000–20,000 Bags/Jackets · 35,000 SLGs/Belts</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
              <div className="bg-white p-5 border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  01 · Cutting &amp; Splitting Line
                </span>
                <h4 className="font-serif text-base font-medium text-charcoal">
                  25-Ton Hydraulic Swing-Arm &amp; Band-Knife Splitters
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Steel-rule clicking dies for 100% panel repeatability; band-knife splitting calibrating wallet linings to 0.5mm and bag panels to ±0.1mm gauge accuracy.
                </p>
              </div>

              <div className="bg-white p-5 border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  02 · Skiving &amp; Stitching Floor
                </span>
                <h4 className="font-serif text-base font-medium text-charcoal">
                  German Fortuna Skivers &amp; Juki Cylinder-Arm Machines
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  0.4mm bell-knife edge skiving paired with Juki DSC-246 cylinder-arm, post-bed, and computerized bar-tack machines running 5–8 SPI in Tex 40/70/90 bonded nylon.
                </p>
              </div>

              <div className="bg-white p-5 border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  03 · Edge Inking &amp; Hardware Press
                </span>
                <h4 className="font-serif text-base font-medium text-charcoal">
                  3–4 Coat Heated Fenice &amp; Pneumatic Setting Presses
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Roller-applied Italian water-based edge lacquers heat-creased between sanding cycles, plus pneumatic presses for brass rivets, eyelets, and 24K foil embossing.
                </p>
              </div>

              <div className="bg-white p-5 border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  04 · Finishing, Moisture &amp; Metal QC
                </span>
                <h4 className="font-serif text-base font-medium text-charcoal">
                  Conveyor Needle Detection &amp; &lt;14% RH Humidity Room
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  100% broken-needle scan, digital pinless moisture verification (&lt;14% RH), 13.56 MHz RFID continuity test, and ISO 2859-1 AQL 2.5 pre-shipment audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 ATELIER TANNAGE & MATERIAL SHOWCASE */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-y border-charcoal/10">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-3xl space-y-3 mb-12 text-left">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Material Excellence &amp; Tannery Traceability
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Which Full-Grain &amp; Vegetable-Tanned Leather Grades Do We Source?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              We source hides from Gold and Silver-rated Leather Working Group (LWG) partner tanneries. Explore our primary export leather categories developed for European, UK, Australian, and North American accessories brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {tannageLibrary.map((leather, i) => (
              <div
                key={i}
                className="bg-white p-6 border border-charcoal/10 flex flex-col justify-between hover:border-cognac/60 transition-all duration-300 shadow-2xs hover:shadow-xs group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold bg-sand/20 px-2 py-0.5 border border-cognac/20">
                      {leather.badge}
                    </span>
                    <span className="text-[11px] font-mono text-charcoal-400">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-charcoal group-hover:text-cognac transition-colors">
                    {leather.name}
                  </h3>
                  <div className="space-y-1.5 text-[11px] font-mono text-charcoal-500 pb-2 border-b border-charcoal/8">
                    <p><span className="text-charcoal-700 font-semibold">Gauge:</span> {leather.thickness}</p>
                    <p><span className="text-charcoal-700 font-semibold">Origin:</span> {leather.origin}</p>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    {leather.characteristics}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-charcoal/8">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-mono block mb-1">
                    Best Applied To:
                  </span>
                  <p className="text-[11px] text-charcoal-800 font-medium leading-snug">
                    {leather.idealFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-white border border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cognac shrink-0" />
              <p className="text-xs text-charcoal-700 font-light">
                <strong className="font-semibold text-charcoal">Custom Leather Tannage Matching:</strong> Send us your physical swatch or Pantone reference for bespoke strike-off dyeing in 5–7 business days.
              </p>
            </div>
            <Button href="/catalogue-request" variant="outline" size="sm" className="shrink-0 border-charcoal/30 hover:border-charcoal">
              Request Swatch Kit <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Sample Showcase
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              What Flagship Leather Designs Are Ready for Immediate Counter-Sampling?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl font-light leading-relaxed">
              Ready for private labeling or custom brand adaptation. Request physical counter-samples directly.
            </p>
          </div>
          <Button href="/products" variant="secondary" size="md">
            Explore Full Catalog <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. GLOBAL EXPORT LOGISTICS */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="bg-white rounded-none p-8 sm:p-12 border border-charcoal/10 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Seamless International Trade
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                How Does Unicon Leather Manage Global Export Logistics, Incoterms &amp; Customs?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-2xl font-light">
                We handle complete export documentation, Certificate of Origin, phytosanitary checks, packing lists, and door-to-door or port-to-port logistics across major world shipping corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="bg-[#faf8f5] p-5 rounded-none border border-charcoal/8">
                  <span className="block text-charcoal font-semibold text-sm mb-1">North America</span>
                  <span className="text-charcoal-600 font-light">USA &amp; Canada (DDP / FOB)</span>
                </div>
                <div className="bg-[#faf8f5] p-5 rounded-none border border-charcoal/8">
                  <span className="block text-charcoal font-semibold text-sm mb-1">Europe &amp; UK</span>
                  <span className="text-charcoal-600 font-light">UK, Germany, France, Nordics</span>
                </div>
                <div className="bg-[#faf8f5] p-5 rounded-none border border-charcoal/8">
                  <span className="block text-charcoal font-semibold text-sm mb-1">Asia-Pacific &amp; Gulf</span>
                  <span className="text-charcoal-600 font-light">Australia, UAE, Japan</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="bg-[#faf8f5] border border-charcoal/12 p-6 sm:p-8 rounded-none w-full space-y-4 shadow-xs">
                <h3 className="font-serif font-medium text-charcoal text-xl">Incoterms Supported</h3>
                <ul className="text-xs text-charcoal-700 space-y-2.5 font-mono">
                  <li>• FOB (Kolkata / Chennai / Mumbai Ports)</li>
                  <li>• CIF (Major Global Seaports)</li>
                  <li>• DDP (Delivered Duty Paid to Warehouse)</li>
                  <li>• Air Priority (DHL / FedEx Express)</li>
                </ul>
                <div className="pt-2">
                  <Button href="/export" variant="primary" size="md" className="w-full">
                    View Export Capabilities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 USA & EUROPEAN BRAND SOURCING & COMPLIANCE HUB */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="border border-charcoal/12 bg-[#FAF8F5] p-8 sm:p-12 lg:p-14 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Target Market Sourcing Specifications
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                How Do We Meet USA, UK, European, Australian &amp; Indian Compliance Standards?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Whether manufacturing for international luxury houses across the USA and Europe or supplying leading D2C fashion labels, corporate buying houses, and retail chains in Delhi, Noida, and Gurugram, we deliver uncompromised artisan craftsmanship, strict compliance, and transparent low MOQs.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 border border-charcoal/10 text-xs font-mono text-cognac font-semibold shrink-0">
              <Globe className="w-4 h-4 text-cognac" /> Multi-Currency: INR · USD · EUR · GBP
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. United States & Canada (North America Hub) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">United States &amp; Canada</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">DDP Freight</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>US &amp; Canadian Brand Manufacturing:</strong> Custom OEM &amp; private-label production for fashion labels across New York, Los Angeles, Toronto, Vancouver &amp; Montreal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>CBSA &amp; US Customs Documentation:</strong> Full CARM readiness, Canadian GST/HST handled under DDP terms, and pre-classified HTS Chapter 4202/4203 invoices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Priority Air &amp; Ocean Corridors:</strong> 3–5 day express air to JFK, LAX, Toronto (YYZ) &amp; Montreal (YUL); container freight to NY/NJ, LA &amp; Vancouver.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>CCPSA &amp; California Prop 65 Testing:</strong> Batch-specific third-party lab testing (SGS/Intertek) for lead &lt;90ppm, cadmium, and phthalates upon buyer request.</span>
                </li>
              </ul>
            </div>

            {/* 2. Europe & United Kingdom (UK, Germany, France, Italy, Nordics) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">Europe &amp; United Kingdom</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">EU REACH &amp; LWG</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>UK &amp; European Brand Sourcing:</strong> Dedicated contract manufacturing for contemporary labels across the UK, Germany, France, Italy, Benelux &amp; Scandinavia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>EU/UK REACH Annex XVII Testing:</strong> Batch verification for Chromium VI &lt; 3 mg/kg (ISO 17075), Azo-free dyes, EN 1811 nickel release, and LWG partner tannery hides.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Accessible 50–100 Piece MOQs:</strong> Trial batches from 50 units (stock leathers) with REX origin statements and 3–5 day air cargo to London Heathrow, Frankfurt &amp; Milan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Open-Factory Social Audit Policy:</strong> Workplace governance aligned with SEDEX SMETA / BSCI protocols; open to buyer-commissioned QIMA/SGS audits.</span>
                </li>
              </ul>
            </div>

            {/* 3. Australia & New Zealand (Sydney, Melbourne, Brisbane) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">Australia &amp; New Zealand</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">0% ECTA Duty</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>0% Tariff via Australia–India ECTA:</strong> Official preferential Certificate of Origin waives the 5% Australian customs duty on eligible leather bags, wallets &amp; jackets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Boutique-Friendly MOQs:</strong> 50–100 unit runs and 7–12 day counter-sampling for Sydney, Melbourne &amp; Brisbane fashion designers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>DAFF Biosecurity Documentation:</strong> Commercial tanning declarations, moisture-controlled packing (&lt;14% RH), and ISPM-15 pallets for Port Botany &amp; Melbourne.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Turnkey DDP &amp; CIF Freight:</strong> Express air (3–5 days) and ocean container transit (16–22 days) with optional DDP customs clearance.</span>
                </li>
              </ul>
            </div>

            {/* 4. UAE, GCC & Domestic India (Dubai, Riyadh & Delhi NCR) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">UAE, Japan &amp; India B2B</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">CEPA &amp; GST</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>UAE &amp; GCC 0% Duty (India–UAE CEPA):</strong> Duty-free export to Dubai and Abu Dhabi with 24K PVD hardware and luxury rigid presentation boxes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Japan Precision QC Program:</strong> High-SPI stitching, 100% piece-by-piece light-table inspection, and needle-detection protocols for Tokyo/Osaka importers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Noida Corporate Showroom (Delhi NCR):</strong> Convenient in-person sample reviews and tech-pack consultations 45 minutes from IGI Airport (DEL).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Domestic D2C &amp; Corporate Supply:</strong> Full GST invoicing, e-way bills, and pan-India dispatch for domestic fashion labels and corporate buyers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 BUYER DECISION & SOURCING RESOURCES DIRECTORY (REPLACES RAW KEYWORD LISTS) */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-y border-charcoal/10">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-3xl space-y-3 mb-12 text-left">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              B2B Buyer Evaluation Hub
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Essential Sourcing Guides, Spec Matrices &amp; Cost Estimators for Buyers
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              Evaluate Unicon Leather&apos;s manufacturing specifications, indicative FOB/DDP unit costs, leather grade standards, and regional export gateways before submitting your Request for Quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs hover:border-cognac/60 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-cognac/10 px-2 py-0.5 inline-block">
                  01 // Cost &amp; MOQ Tool
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Interactive FOB Cost, Hide Yield &amp; MOQ Calculator
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Configure your silhouette, leather grade, hardware finish, order quantity (50 to 1,000+ units), and Incoterm to estimate unit costs and lead times.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-charcoal/8">
                <Link href="/cost-calculator" className="text-xs font-mono font-medium text-cognac hover:text-charcoal flex items-center justify-between group">
                  <span>Launch Cost Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs hover:border-cognac/60 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-cognac/10 px-2 py-0.5 inline-block">
                  02 // Country Comparison
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  India vs. China, Vietnam &amp; Italy Sourcing Matrix
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Compare domestic LWG raw hide availability, US Section 301 tariffs, Australia ECTA / UAE CEPA 0% duty treaties, and MOQ flexibility.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-charcoal/8">
                <Link href="/leather-sourcing-india-vs-china-vietnam-italy" className="text-xs font-mono font-medium text-cognac hover:text-charcoal flex items-center justify-between group">
                  <span>Read Country Comparison</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs hover:border-cognac/60 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-cognac/10 px-2 py-0.5 inline-block">
                  03 // Material Engineering
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Leather Quality &amp; Technical Sourcing Guide
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Understand Full-Grain vs. Top-Grain vs. Split Suede, ISO 3376 tensile strength benchmarks, millimeter thickness gauges, and LWG traceability.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-charcoal/8">
                <Link href="/leather-quality-sourcing-guide" className="text-xs font-mono font-medium text-cognac hover:text-charcoal flex items-center justify-between group">
                  <span>Open Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs hover:border-cognac/60 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold bg-cognac/10 px-2 py-0.5 inline-block">
                  04 // Quality &amp; Lab Testing
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  4-Stage QC, AQL 2.5 &amp; Chemical Testing Protocol
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Review how incoming hides, in-line skiving/SPI, and pre-shipment AQL 2.5 audits work alongside batch SGS/Intertek REACH &amp; Prop 65 lab testing.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-charcoal/8">
                <Link href="/compliance" className="text-xs font-mono font-medium text-cognac hover:text-charcoal flex items-center justify-between group">
                  <span>View QC &amp; Compliance</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* CONCISE EUROPEAN & GLOBAL BUYER COMMERCIAL GUIDE */}
          <div
            id="european-buyer-guide"
            className="mt-12 bg-white border border-charcoal/15 p-6 sm:p-10 shadow-xs space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-charcoal/10 pb-5">
              <div className="space-y-1.5 max-w-3xl">
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-cognac font-bold block">
                  European &amp; Global Buyer Commercial Reference Guide
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                  Quotation Currencies, Sample Costs, Product-Specific MOQs &amp; Testing Documentation
                </h3>
                <p className="text-xs text-charcoal-600 font-light">
                  Transparent commercial terms designed for European (EU/EEA), British (UK), North American, and Asia-Pacific procurement teams.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <Link href="/de" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇩🇪 DE</Link>
                <Link href="/fr" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇫🇷 FR</Link>
                <Link href="/it" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇮🇹 IT</Link>
                <Link href="/es" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇪🇸 ES</Link>
                <Link href="/nl" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇳🇱 NL</Link>
                <Link href="/sv" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇸🇪 SV</Link>
                <Link href="/en-gb" className="px-2.5 py-1 bg-[#FAF8F5] border border-charcoal/15 hover:border-cognac">🇬🇧 UK</Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
              <div className="p-4 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  01 · Quotation Currencies
                </span>
                <h4 className="font-serif text-sm font-semibold text-charcoal">
                  EUR (€), GBP (£) &amp; USD ($)
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Commercial costings and Proforma Invoices are issued directly in <strong>EUR (€)</strong> for EU buyers, <strong>GBP (£)</strong> for UK buyers, or <strong>USD ($)</strong>, with tiered breaks at 50, 100, 300, and 1,000+ units.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  02 · Samples, Timeline &amp; Credit
                </span>
                <h4 className="font-serif text-sm font-semibold text-charcoal">
                  5–7d / 7–14d · 100% Credited
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  <strong>5–7 business days</strong> (SLGs/belts) or <strong>7–14 business days</strong> (bags/jackets) in stock leather (+7–10 days for custom dye/tooling). Fees: <strong>€70–€140 ($75–$150)</strong> bags / <strong>€32–€60 ($35–$65)</strong> SLGs—<strong>100% credited</strong> to bulk PO.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  03 · Product-Specific MOQs
                </span>
                <h4 className="font-serif text-sm font-semibold text-charcoal">
                  Stock Trial vs. Custom Dye
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  <strong>Bags &amp; Jackets:</strong> 50 pcs/style (stock atelier leathers, 25 pcs/color) or 100 pcs/style (custom tannery dye).<br />
                  <strong>Wallets &amp; Belts:</strong> 100 pcs (stock leather) or 200 pcs (custom dye).<br />
                  <strong>3-Piece Gift Sets:</strong> 50 sets (150 wallets total).
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  04 · Delivery &amp; Incoterms
                </span>
                <h4 className="font-serif text-sm font-semibold text-charcoal">
                  FOB, CIF &amp; DDP Europe/UK
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  <strong>FOB</strong> Kolkata / Nhava Sheva, <strong>CIF</strong> European ports (Hamburg, Rotterdam, Le Havre, Genoa, Southampton), or <strong>DDP Door-to-Door</strong> (DHL Air 4–6 days; Sea LCL/FCL 20–28 days) with REX / DCTS origin paperwork.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  05 · Testing &amp; Credentials
                </span>
                <h4 className="font-serif text-sm font-semibold text-charcoal">
                  Factory vs. Tannery &amp; Lab
                </h4>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  <strong>Factory:</strong> ISO 2859-1 (AQL 2.5) QC &amp; open-factory SMETA/BSCI audit access.<br />
                  <strong>Partner Tanneries:</strong> LWG Gold/Silver hide traceability &amp; EUDR declarations.<br />
                  <strong>Lab Testing:</strong> Batch SGS/TÜV EU REACH (Cr VI &lt; 3 mg/kg, AZO-free, EN 1811 nickel).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPROVED CUSTOMER & EXPORT PRODUCTION EXAMPLES (WITH PRODUCT SPECIFICATIONS) */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
            Approved Customer &amp; Export Production Examples
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
            Verified Production Runs, Product Specifications &amp; Compliance Deliverables
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Approved production examples from our Kolkata atelier illustrating actual hide gauges, stitch densities, lab test benchmarks, and freight corridors (brand names withheld under mutual NDA).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-none border border-charcoal/12 shadow-xs flex flex-col justify-between hover:border-cognac/50 transition-colors overflow-hidden">
            <div>
              <div className="relative aspect-[16/10] bg-charcoal-50 border-b border-charcoal/10 overflow-hidden">
                <img
                  src="/images/flagship-tote-bag.jpg"
                  alt="Approved European Export Run: 1.8mm Calf-Nappa & Pull-Up Day Totes (Base Block UL-HB-101)"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/85 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                  Approved Run 01 · Base Block UL-HB-101
                </span>
              </div>
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] px-2.5 py-1 text-cognac font-semibold border border-charcoal/10">
                    EU REACH Export · Germany &amp; UK
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500">350 Units · 32 Days</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Structured Calf-Nappa &amp; Pull-Up Day Totes for European Labels
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  3-colorway production run (Amber, Cognac, Espresso) built in 1.8mm LWG partner tannery cowhide with 2.0mm Texon base reinforcement, 6–7 SPI Tex-70 bonded nylon lockstitching, 3-coat heated Fenice edge paint, and YKK #5 solid brass hardware.
                </p>
                <div className="bg-[#FAF8F5] p-3.5 border-l-2 border-cognac text-[11px] text-charcoal-700 font-mono space-y-1">
                  <div><strong>Specs:</strong> 38 × 34 × 14 cm · 14.2 sq.ft/unit · 15 kg handle pull-tested</div>
                  <div><strong>Lab &amp; QC:</strong> DIN EN ISO 17075-1 Cr(VI) &lt; 3 mg/kg (ND) · ISO AQL 2.5 Pass</div>
                  <div><strong>Sampling:</strong> Approved in 9 business days (stock leather counter-sample)</div>
                </div>
              </div>
            </div>
            <div className="px-7 py-4 bg-[#FAF8F5]/60 border-t border-charcoal/8 flex items-center justify-between">
              <div>
                <span className="block font-semibold text-xs text-charcoal">European Contemporary Accessories Label</span>
                <span className="text-[11px] text-charcoal-500 font-light">Corridor: FOB Kolkata / DHL Air → Frankfurt &amp; London</span>
              </div>
              <Link href="/products/amber-pull-up-leather-tote" className="text-[11px] font-mono text-cognac font-semibold hover:underline shrink-0">
                View Block →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-none border border-charcoal/12 shadow-xs flex flex-col justify-between hover:border-cognac/50 transition-colors overflow-hidden">
            <div>
              <div className="relative aspect-[16/10] bg-charcoal-50 border-b border-charcoal/10 overflow-hidden">
                <img
                  src="/images/panel-10.jpg"
                  alt="Approved Australian Export Run: 2.0mm Veg-Tan Pull-Up Weekender Duffels (Base Block UL-AD-110)"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/85 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                  Approved Run 02 · Base Block UL-AD-110
                </span>
              </div>
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] px-2.5 py-1 text-cognac font-semibold border border-charcoal/10">
                    AU ECTA 0% Duty · Sydney &amp; Melbourne
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500">400 Units · 34 Days</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  2.0mm Veg-Tan Pull-Up Weekenders &amp; Briefcases for Australian Brand
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Custom botanical Olive and Vintage Cognac 2.0mm oil pull-up cowhide cabin duffels with 360° wrap-around harness handles, YKK #8 antique brass two-way zippers, 5 brass base studs, and 12oz water-resistant cotton drill lining.
                </p>
                <div className="bg-[#FAF8F5] p-3.5 border-l-2 border-cognac text-[11px] text-charcoal-700 font-mono space-y-1">
                  <div><strong>Specs:</strong> 52 × 26 × 28 cm (38L) · 21.5 sq.ft/unit · 35 kg harness load</div>
                  <div><strong>Customs &amp; QC:</strong> India–AU ECTA Certificate (0% Duty) · &lt; 12% RH Moisture Pack</div>
                  <div><strong>Sampling:</strong> Approved in 15 business days (incl. custom Olive dye strike-off)</div>
                </div>
              </div>
            </div>
            <div className="px-7 py-4 bg-[#FAF8F5]/60 border-t border-charcoal/8 flex items-center justify-between">
              <div>
                <span className="block font-semibold text-xs text-charcoal">Australian Menswear &amp; Travel Goods Brand</span>
                <span className="text-[11px] text-charcoal-500 font-light">Corridor: CIF Port Botany (Sydney) &amp; Melbourne</span>
              </div>
              <Link href="/products/olive-artisan-vegetable-tanned-travel-duffel" className="text-[11px] font-mono text-cognac font-semibold hover:underline shrink-0">
                View Block →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-none border border-charcoal/12 shadow-xs flex flex-col justify-between hover:border-cognac/50 transition-colors overflow-hidden">
            <div>
              <div className="relative aspect-[16/10] bg-charcoal-50 border-b border-charcoal/10 overflow-hidden">
                <img
                  src="/images/panel-20.jpg"
                  alt="Approved US Retail Run: 0.4mm Skived RFID Bifold Wallets in Dovetail Wood Box (Base Block UL-WL-801)"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/85 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                  Approved Run 03 · Base Block UL-WL-801
                </span>
              </div>
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF8F5] px-2.5 py-1 text-cognac font-semibold border border-charcoal/10">
                    US Prop 65 Program · New York &amp; LA
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-500">1,200 Units · 28 Days</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  0.4mm Skived RFID Bifold Wallets &amp; Gift Sets for US Specialty Retail
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  1.2mm full-grain vegetable-tanned bifold wallets featuring 8 turned-edge card slots (skived to 0.4mm on German Fortuna machines), thermal fileteuse creasing, 13.56 MHz RFID foil shielding, and laser-engraved dovetail hardwood gift boxes.
                </p>
                <div className="bg-[#FAF8F5] p-3.5 border-l-2 border-cognac text-[11px] text-charcoal-700 font-mono space-y-1">
                  <div><strong>Specs:</strong> 11.5 × 9.5 × 2.0 cm · 2.4 sq.ft/wallet · 8–9 SPI Tex-40 thread</div>
                  <div><strong>Lab &amp; QC:</strong> CPSC-CH-E1002-08.3 Lead &lt; 90 ppm Pass · 100% RFID Scan</div>
                  <div><strong>Sampling:</strong> Approved in 6 business days (stock Saddle Tan &amp; Onyx hides)</div>
                </div>
              </div>
            </div>
            <div className="px-7 py-4 bg-[#FAF8F5]/60 border-t border-charcoal/8 flex items-center justify-between">
              <div>
                <span className="block font-semibold text-xs text-charcoal">North American Specialty Retail &amp; Gifting Buyer</span>
                <span className="text-[11px] text-charcoal-500 font-light">Corridor: DDP Air Cargo → New York (JFK) &amp; Los Angeles</span>
              </div>
              <Link href="/products/heritage-bifold-leather-wallet-trio-gift-box" className="text-[11px] font-mono text-cognac font-semibold hover:underline shrink-0">
                View Block →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7.25 STRATEGIC SOURCING CORRIDOR: OEM/ODM EXPORT MANUFACTURING (USA & EUROPE TARGETING) */}
      <section
        id="global-leather-goods-manufacturer"
        aria-labelledby="supplier-manufacturer-corridor-heading"
        className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16"
      >
        <div className="bg-[#FAF8F5] border border-charcoal/15 p-8 sm:p-12 lg:p-16 space-y-10 shadow-xs">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-cognac font-bold bg-cognac/10 px-3 py-1">
                Global B2B Sourcing Authority
              </span>
              <span className="text-xs font-mono text-charcoal-500">USA · United Kingdom · European Union</span>
            </div>
            <h2
              id="supplier-manufacturer-corridor-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight leading-snug"
            >
              Private Label &amp; Contract Leather Goods Manufacturer in India for US &amp; European Brands
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              When sourcing directors and independent fashion founders evaluate a <strong>leather goods manufacturer in India</strong>, their primary priorities are material traceability, chemical safety compliance, accessible minimum order quantities, and reliable DDP freight. <strong>UNICON LEATHER</strong> provides direct cut-and-sew production from our Bantala, Kolkata atelier to retail and D2C brands across the <strong>United States, United Kingdom, and Europe</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Why India & Asia for US Brands */}
            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  Targeting USA Brands &amp; Boutiques
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Direct Leather Goods Supplier for USA Retailers
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Full <strong>California Proposition 65</strong> and CPSIA third-party testing (SGS/Intertek verified lead &lt; 90 ppm, 0% restricted phthalates). DDP air cargo and ocean container shipping directly cleared to New York (JFK), Los Angeles (LAX), Miami, and Chicago. Stable bilateral trade without Section 301 punitive tariffs.
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/en-us"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  Explore USA Sourcing Portal <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Box 2: Why India & Asia for European Brands */}
            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  Targeting European &amp; UK Brands
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  EU REACH &amp; LWG Tested Leather Exporter to Europe
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Strict adherence to <strong>EU REACH Annex XVII</strong> (Azo-free, Chromium VI &lt; 3 ppm, nickel-free hardware). Invoicing in <strong>EUR (€) and GBP (£)</strong> with DDP customs-cleared container deliveries into Rotterdam, Hamburg, Antwerp, and London Gateway.
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/leather-goods-supplier-europe"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  Explore European Hub <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Box 3: Why Unicon as Best Supplier in Asia */}
            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  Pan-Asian Supply Chain
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Top Leather Goods Manufacturer in Asia
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  India stands out in Asia with native bovine, buffalo, and goat raw hide availability—eliminating raw material import markups. Combined with multi-generational handcraft in the Kolkata Leather Complex and German Dürkopp Adler precision machinery, we offer a proven China+1 manufacturing alternative.
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/leather-goods-supplier-asia"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  Explore Asia Manufacturing <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Box 4: Accessible MOQs & Prototyping */}
            <div className="bg-white p-6 sm:p-7 border border-charcoal/10 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cognac font-bold block">
                  OEM / ODM Private Label
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Custom OEM Factory with Low MOQs
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Fast <strong>5–7 day SLG &amp; 7–14 day bag sampling</strong> in stock leather. Trial MOQs starting at <strong>50 pieces</strong> per silhouette for bags and jackets (100–200 pcs for wallets and belts). Full CAD tech pack grading, custom brass mold tooling, and blind debossed logo branding under strict mutual NDA.
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal/8">
                <Link
                  href="/leather-goods-manufacturer"
                  className="text-xs font-mono font-semibold text-cognac hover:text-charcoal inline-flex items-center gap-1.5"
                >
                  View Contract Factory Overview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 INTERNATIONAL B2B SOURCING FAQ (GOOGLE FAQ RICH SNIPPET INDEXED) */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-y border-charcoal/10">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              What Are the Most Frequently Asked Questions About B2B Leather Sourcing?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              Clear answers to the most common questions raised by brand directors, procurement executives, and retail buyers in the USA, UK, and European Union.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 border border-charcoal/10 shadow-xs">
            <Accordion items={FAQS} />
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-charcoal-500 font-light">
              Have a specialized query regarding proprietary moulds, tooling or customs tariffs?{" "}
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cognac font-medium underline underline-offset-4 hover:text-charcoal"
              >
                Inquire directly with our Export Desk on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 8. PRIMARY CONVERSION INQUIRY SECTION */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16" id="inquiry">
        {/* Fast-Track Tech Pack SLA Workflow */}
        <TechPackWorkflow className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Direct Factory RFP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              How Can Your Brand Request a Custom Manufacturing Quote or Prototype Sample?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              Submit your project specifications, target quantities, or tech pack sketches. Our overseas export engineering desk will review and provide a structured FOB/CIF commercial quotation within 12–24 hours.
            </p>

            <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 space-y-3">
              <h3 className="font-serif font-medium text-charcoal text-base">
                What to Expect Upon Submitting:
              </h3>
              <ul className="text-xs text-charcoal-600 space-y-2.5 font-light">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                  NDA agreement signed prior to CAD file analysis
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                  Bill of Materials (BOM) &amp; tiered unit cost breakdown
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                  Prototype sampling timeline &amp; leather swatch dispatch
                </li>
              </ul>
            </div>

            <div className="pt-1 text-xs text-charcoal-600 space-y-1.5">
              <div>
                <span>Direct Email Desk: </span>
                <a
                  href="mailto:uniconexport@gmail.com"
                  className="text-cognac font-medium underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  uniconexport@gmail.com
                </a>
              </div>
              <div>
                <span>Prefer instant chat? </span>
                <a
                  href={COMPANY_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cognac font-medium underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  Connect with Export Desk on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BulkInquiryForm inquiryType="general" />
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
