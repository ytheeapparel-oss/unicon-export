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
  Ship
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { MovingPanelsShowcase } from "@/components/home/MovingPanelsShowcase";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full bg-white space-y-20 sm:space-y-28 pb-28">
      {/* 1. FULL-BLEED EXECUTIVE HERO (Full Length & Breadth) */}
      <section className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex items-center overflow-hidden bg-[#11100e] text-white border-b border-[#262421]">
        {/* Full Length & Breadth Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/home-hero-leather.jpg"
            alt="UNICON LEATHER - Handcrafted Luxury Leather Goods Atelier & Export"
            className="w-full h-full object-cover object-[center_40%] lg:object-center transform scale-100 transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* Cinematic Multi-Stop Scrim for Flawless Readability & Luxurious Warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 via-60% to-black/30 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 flex-wrap">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-sand-light uppercase font-medium border-b border-cognac/70 pb-0.5">
                Direct Factory Contract Manufacturing · Est. 1998
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[10px] sm:text-[11px] text-cognac-300 font-mono tracking-widest uppercase font-medium">
                India to 25+ Global Ports
              </span>
            </div>

            {/* Main Luxury Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight drop-shadow-sm">
              Contract Manufacturing &amp; Direct Export of <span className="italic text-sand-light">Fine Leather Goods</span>
            </h1>

            {/* Body Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#e4e0d7] leading-relaxed font-light max-w-2xl drop-shadow-xs">
              Bespoke OEM/ODM contract manufacturing and wholesale export of genuine leather handbags, briefcases, travel duffels, wallets, and accessories for international luxury brands, boutique designers, and department store buying houses.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button href="/catalogue-request" variant="primary" size="lg" className="text-xs uppercase tracking-wider font-semibold shadow-xl">
                <FileText className="w-4 h-4 mr-2" /> Request 2025 Catalogue
              </Button>
              <Button href="/private-label" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-charcoal text-xs uppercase tracking-wider font-semibold backdrop-blur-xs">
                <Sliders className="w-4 h-4 mr-2" /> Start OEM Project
              </Button>
            </div>

            {/* Atelier Specs Mini Bar with glass backdrop */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-6 text-left max-w-xl">
              <div>
                <span className="block text-[10px] font-mono tracking-wider uppercase text-sand-light/75">Tannages</span>
                <span className="text-xs sm:text-sm font-serif text-sand-light font-medium">LWG Gold Audited</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider uppercase text-sand-light/75">Prototyping</span>
                <span className="text-xs sm:text-sm font-serif text-sand-light font-medium">7–14 Days Express</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider uppercase text-sand-light/75">Quality Audit</span>
                <span className="text-xs sm:text-sm font-serif text-sand-light font-medium">AQL 2.5 Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Atelier Bench Badge in Bottom Right */}
        <div className="absolute bottom-6 right-6 sm:right-10 lg:right-16 z-10 hidden sm:flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2.5 border border-white/15 text-white">
          <div className="text-right">
            <span className="block text-[9.5px] font-mono tracking-widest uppercase text-sand-light font-medium">Master Atelier Workshop</span>
            <span className="block font-serif text-xs font-normal text-white">Handcrafted Heritage Leather Goods</span>
          </div>
        </div>
      </section>

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
              Engineered to international brand standards. Review technical silhouettes, leather grades, and MOQ parameters below.
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
              From Concept & Tech Pack to Global Retail Shelves
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              We operate as a seamless extension of your in-house product development team. Whether launching an exclusive seasonal capsule or scaling high-volume retail lines, we execute with master precision under strict NDAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">01</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">Design & Tech Pack</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Submit your CAD sketches, moodboards, or physical reference samples. Our master patternmakers generate 2D/3D templates and BOM costings.
              </p>
            </div>

            <div className="bg-white border border-charcoal/10 p-7 rounded-none space-y-4 relative group hover:border-cognac shadow-xs transition-all duration-300">
              <span className="font-serif text-3xl font-light text-cognac/70 group-hover:text-cognac transition-colors block">02</span>
              <h3 className="font-serif text-lg font-medium text-charcoal">Sampling & Tannages</h3>
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
              <h3 className="font-serif text-lg font-medium text-charcoal">AQL 2.5 & Export Freight</h3>
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
              Atelier Standards & Micro-Tolerances
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Rigorous Material Selection & Master Handcraft
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
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.5/1] min-h-[360px] sm:min-h-[480px] bg-charcoal-900 border-y border-charcoal/10 overflow-hidden shadow-sm">
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
              <h3 className="font-serif text-lg font-medium text-charcoal">Luxury Hardware & Custom Tooling</h3>
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
                  <span className="text-charcoal-600 font-light">USA & Canada (DDP / FOB)</span>
                </div>
                <div className="bg-[#faf8f5] p-5 rounded-none border border-charcoal/8">
                  <span className="block text-charcoal font-semibold text-sm mb-1">Europe & UK</span>
                  <span className="text-charcoal-600 font-light">UK, Germany, France, Nordics</span>
                </div>
                <div className="bg-[#faf8f5] p-5 rounded-none border border-charcoal/8">
                  <span className="block text-charcoal font-semibold text-sm mb-1">Asia-Pacific & Gulf</span>
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

      {/* 7. BUYER TESTIMONIALS */}
      <section className="w-full bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
            Buyer Trust & Track Record
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
                  Bill of Materials (BOM) & tiered unit cost breakdown
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                  Prototype sampling timeline & leather swatch dispatch
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
  );
}
