import React from "react";
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
import { Hero } from "@/components/home/Hero";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLdScript, generateFaqSchema } from "@/components/seo/JsonLdScript";

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
      characteristics: "Silky soft napped surface rigorously tested to European REACH Annex XVII standards for zero crocking.",
      idealFor: "Luxury bag interior linings, contrast pocket accents, soft pouches",
      badge: "REACH Certified",
    },
  ];

  return (
    <>
      {/* 0. SEO JSON-LD FAQ SCHEMA FOR GOOGLE & BING RICH RESULTS */}
      <JsonLdScript schema={generateFaqSchema(FAQS)} />

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
              <span className="block font-serif text-xl sm:text-2xl font-medium text-charcoal">7–14 Days</span>
              <span className="text-xs uppercase tracking-wider text-charcoal-800 font-semibold block">Sample Prototyping</span>
              <p className="text-xs text-charcoal-500 font-light hidden sm:block">Express DHL/FedEx counter-samples</p>
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

      {/* 1.2 CONTINUOUS MOVING SHOWCASE: 14 LUXURY PANELS */}
      <MovingPanelsShowcase />

      {/* 2. CORE MANUFACTURING CATEGORIES SHOWCASE */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Direct Factory Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Core Manufacturing Categories
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light leading-relaxed">
              As a dedicated leather wallet manufacturer India, leather belt manufacturer India, and leather accessories manufacturer India, we engineer custom collections to international luxury brand standards with flexible MOQs.
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
              From Concept &amp; Tech Pack to Global Retail Shelves
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              We operate as a seamless extension of your in-house product development team. Whether launching an exclusive seasonal capsule or scaling high-volume retail lines, we execute with master precision under strict NDAs.
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
                Custom leather dyeing (Pantone matching), hardware mould fabrication, and physical counter-samples shipped in 7–14 days.
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

          <div className="mt-12 text-center">
            <Button href="/private-label" variant="primary" size="lg">
              Explore Full Private Label Capabilities <ArrowRight className="w-4 h-4 ml-2.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. ATELIER CRAFTSMANSHIP & MASTER HANDCRAFT */}
      <section className="w-full bg-white space-y-10 sm:space-y-14">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Atelier Standards &amp; Micro-Tolerances
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Rigorous Material Selection &amp; Master Handcraft
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light leading-relaxed">
              Every hide undergoes manual inspection for grain consistency, tensile strength, and color fastness. We blend generational Indian leatherworking techniques with high-precision German skiving and Italian edge-coating chemistry.
            </p>
          </div>
          <Button href="/craftsmanship" variant="outline" size="md" className="self-start md:self-auto border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
            View 11-Stage Production <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Full-Bleed Craftsmanship Showcase Image */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.5/1] min-h-[360px] sm:min-h-[480px] bg-[#FAF8F5] border-y border-charcoal/10 overflow-hidden shadow-sm">
          <img
            src="/images/craftsmanship-hero.jpg"
            alt="Master Leather Artisan Handcrafting and Edge Burnishing Fine Goods"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Craftsmanship Standards Grid */}
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <CheckCircle2 className="w-6 h-6 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Responsible Tannery Partnering</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Hides sourced exclusively from LWG-audited partner tanneries with closed-loop wastewater treatment and chrome-free veg-tan options.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <CheckCircle2 className="w-6 h-6 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Luxury Hardware &amp; Custom Tooling</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Solid forged brass, stainless steel, and zinc alloy hardware with PVD vacuum plating, salt-spray tested for 72+ hours.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <CheckCircle2 className="w-6 h-6 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Micro-Tolerances (0.4mm Edge Skiving)</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Multi-coat hand-sanded Italian edge lacquers that eliminate cracking under extreme temperature fluctuations.
              </p>
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
              Atelier Leather Tannages &amp; Finishing Library
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              We source strictly from Gold and Silver-rated Leather Working Group (LWG) tanneries. Explore our primary export leather categories developed for luxury European fashion houses and North American heritage brands.
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
              Flagship Export Designs
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
                Export Logistics Built for Global Brand Timelines
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
                Global &amp; India Leather Goods Procurement Hub
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
                  <span><strong>Leather Bags Manufacturer India for Canadian Brands:</strong> Dedicated OEM &amp; private label manufacturing for fashion labels in Toronto, Vancouver &amp; Montreal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>CBSA &amp; US Customs Compliant:</strong> Full CARM registration, Canadian GST/HST handled under DDP terms, and pre-classified HTS Chapter 4202 codes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Priority Air &amp; Ocean Corridors:</strong> 3–5 day express air to Toronto (YYZ), Montreal (YUL), NY &amp; LA; container freight to Port of Vancouver.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>CCPSA &amp; California Prop 65:</strong> Third-party tested (SGS/Intertek) for lead &lt;90ppm, cadmium, and phthalates with Amazon FBA prep.</span>
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
                  <span><strong>Leather Bags Manufacturer India for European Brands:</strong> Certified OEM &amp; private-label supplier for luxury labels across UK, Germany, France, Italy &amp; Scandinavia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>EU REACH Annex XVII Compliant:</strong> Zero Chromium VI, Azo-dye free, nickel-free hardware, and traceable LWG Gold/Silver leather hides.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Low MOQ for UK &amp; European Designers:</strong> Flexible 100-piece orders with REX system tariff paperwork and 3–5 day express air to London Heathrow &amp; Frankfurt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>SEDEX SMETA &amp; BSCI Audits:</strong> Verified ethical and social compliance satisfying European department store sourcing codes.</span>
                </li>
              </ul>
            </div>

            {/* 3. Australia & New Zealand (Sydney, Melbourne, Brisbane) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">Australia &amp; New Zealand</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">DDP Sea &amp; Air</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Leather Bags Manufacturer India for Australian Brands:</strong> Direct contract manufacturing &amp; private label bags for Sydney, Melbourne &amp; Brisbane fashion houses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Low MOQ Handbag &amp; Bag Production:</strong> Flexible 100-unit runs and rapid 7–10 day prototype counter-sampling for Australian boutique designers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>DAFF Biosecurity Compliant:</strong> Fully cleared bovine leather export documents, Certificate of Origin, and ocean cargo to Port Botany &amp; Melbourne.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Turnkey DDP Freight:</strong> Air express (4–6 days) and container sea transit with all Australian import duties and GST pre-cleared.</span>
                </li>
              </ul>
            </div>

            {/* 4. Delhi NCR & Domestic India (Delhi, Noida, Gurugram) */}
            <div className="bg-white p-7 border border-charcoal/10 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal">Delhi NCR &amp; Noida Hub</span>
                <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">Pan-India B2B</span>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal-600 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Leather Goods Manufacturer Delhi NCR:</strong> Direct OEM contract manufacturing and bespoke design facilities for premium D2C brands &amp; retail houses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Leather Goods Manufacturer Noida:</strong> Rapid prototype sampling, leather finishing, and direct supply to Noida Sector 62, 63 &amp; Greater Noida industrial zones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>Leather Bag Supplier India:</strong> Trusted sourcing partner supplying verified buying agencies and wholesale leather bags India for domestic distribution and corporate gifting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cognac mt-0.5 shrink-0" />
                  <span><strong>GST &amp; Express Cargo:</strong> 100% GST invoicing, e-way bills, and 48–72h Bluedart/Delhivery priority transit across all Indian states.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUYER TESTIMONIALS */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
            Buyer Trust &amp; Track Record
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
            What Overseas Buying Houses Value
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Representative buyer feedback across North American, European, and Australian export shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-6 flex flex-col justify-between hover:border-cognac/40 transition-colors">
            <p className="font-serif text-base text-charcoal-700 italic leading-relaxed font-normal">
              “UNICON LEATHER’s sampling speed and attention to edge-paint finishing exceeded our expectations. Their transparent AQL 2.5 reports gave our European QC team complete peace of mind.”
            </p>
            <div className="pt-4 border-t border-charcoal/8">
              <span className="block font-semibold text-xs text-charcoal">Head of Accessories Sourcing</span>
              <span className="text-[11px] text-charcoal-500 font-light">Boutique Fashion Label · Stockholm, Sweden</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-6 flex flex-col justify-between hover:border-cognac/40 transition-colors">
            <p className="font-serif text-base text-charcoal-700 italic leading-relaxed font-normal">
              “Our custom hardware moulds and Pantone-matched pull-up leathers were delivered precisely on spec for our Fall catalog rollout. Flawless export packing with zero transit damage.”
            </p>
            <div className="pt-4 border-t border-charcoal/8">
              <span className="block font-semibold text-xs text-charcoal">Managing Director</span>
              <span className="text-[11px] text-charcoal-500 font-light">Menswear Goods Wholesaler · Melbourne, Australia</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-6 flex flex-col justify-between hover:border-cognac/40 transition-colors">
            <p className="font-serif text-base text-charcoal-700 italic leading-relaxed font-normal">
              “Working across timezones with the Unicon export desk has been effortless. Fast counter-samples via DHL and consistent batch-to-batch leather grain quality across 3,000 units.”
            </p>
            <div className="pt-4 border-t border-charcoal/8">
              <span className="block font-semibold text-xs text-charcoal">Senior Sourcing Agent</span>
              <span className="text-[11px] text-charcoal-500 font-light">Department Store Buying House · New York, USA</span>
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
              International B2B Leather Sourcing FAQ
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Direct Factory RFP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Ready to Manufacture Your Next Collection?
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

            <div className="pt-1 text-xs text-charcoal-600">
              <span>Prefer immediate chat? </span>
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
