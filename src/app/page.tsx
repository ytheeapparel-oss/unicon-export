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
    <div className="w-full bg-white space-y-24 sm:space-y-36 pb-32">
      {/* 1. HERO SECTION: 100% FULL-BLEED (100vw Full Breadth x 90vh Full Length) Edge-to-Edge Showcase */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-luxury-leather.png"
            alt="UNICON LEATHER - Luxury Handcrafted Leather Bag"
            className="w-full h-full object-cover object-center lg:object-[center_25%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-32">
          <div className="max-w-4xl bg-white/95 backdrop-blur-md p-8 sm:p-12 lg:p-14 border-2 border-charcoal/15 shadow-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="bg-cognac text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-none shadow-sm">
                ★ OEM / ODM & Private Label Exporter
              </span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono tracking-widest uppercase font-semibold">
                INDIA TO WORLDWIDE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[0.98] tracking-tight uppercase">
              MANUFACTURERS & <br />
              <span className="italic font-normal text-cognac lowercase">exporters of</span> <br />
              LUXURY LEATHER GOODS
            </h1>

            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light max-w-3xl">
              Custom OEM/ODM contract manufacturing and wholesale export of genuine leather handbags, wallets, belts, apparel, and corporate accessories for international brands and buying houses across the USA, UK, Europe, Australia, UAE, and Japan.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="/catalogue-request" variant="primary" size="lg" className="shadow-lg">
                <FileText className="w-5 h-5 mr-2.5" /> Request 2025 Catalogue
              </Button>
              <Button href="/private-label" variant="outline" size="lg" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                <Sliders className="w-5 h-5 mr-2.5" /> Start OEM Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 1.1 Full Breadth Trust Indicators Bar */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 -mt-8 relative z-20">
        <div className="bg-white border-2 border-charcoal/15 shadow-xl p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-5xl font-black text-charcoal">100%</span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-charcoal-700 font-bold">Genuine Leather</span>
            <p className="text-xs text-charcoal-500 font-light mt-1 hidden sm:block">Full-grain, veg-tan & calf nappa</p>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-5xl font-black text-charcoal">7-14 Days</span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-charcoal-700 font-bold">Sample Prototyping</span>
            <p className="text-xs text-charcoal-500 font-light mt-1 hidden sm:block">Express DHL/FedEx counter-samples</p>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-5xl font-black text-charcoal">AQL 2.5</span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-charcoal-700 font-bold">Quality Standard</span>
            <p className="text-xs text-charcoal-500 font-light mt-1 hidden sm:block">Strict pre-shipment audit</p>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-3xl sm:text-5xl font-black text-charcoal">25+</span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-charcoal-700 font-bold">Export Markets</span>
            <p className="text-xs text-charcoal-500 font-light mt-1 hidden sm:block">FOB, CIF, DDP international freight</p>
          </div>
        </div>
      </section>

      {/* 1.2 CONTINUOUS MOVING SHOWCASE: 14 LUXURY PANELS */}
      <MovingPanelsShowcase />

      {/* 2. FULL-BREADTH FEATURED CATEGORIES SHOWCASE */}
      <section className="w-full bg-white px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-cognac uppercase tracking-widest text-xs sm:text-sm font-bold block">
              Direct Factory Collections
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal tracking-tight uppercase">
              Core Manufacturing Categories
            </h2>
            <p className="text-base sm:text-xl text-charcoal-600 max-w-3xl font-light">
              Engineered for international brand requirements. Select a category below to review technical dimensions, leather grades, and MOQ parameters.
            </p>
          </div>
          <Button href="/products" variant="outline" size="lg" className="self-start md:self-auto border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
            View All 12 Product Categories <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.slice(0, 8).map((category, index) => (
            <CategoryCard key={category.id} category={category} panelNumber={index + 1} />
          ))}
        </div>
      </section>

      {/* 3. OEM / PRIVATE LABEL 4-PILLAR WORKFLOW */}
      <section className="w-full bg-white py-16 sm:py-24 border-y border-charcoal/10">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
            <span className="text-cognac uppercase tracking-[0.3em] text-xs sm:text-sm font-bold">
              End-To-End Contract Manufacturing
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight uppercase">
              From Concept & Tech Pack to Global Retail Shelves
            </h2>
            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light">
              We operate as a seamless extension of your in-house product development team. Whether launching an exclusive seasonal capsule or scaling high-volume retail lines, we protect your intellectual property with NDAs and execute with master precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-charcoal/15 p-10 rounded-none space-y-5 relative group hover:border-cognac shadow-sm transition-colors">
              <span className="font-mono text-5xl font-black text-cognac/30 group-hover:text-cognac transition-colors">01</span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Design & Tech Pack</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                Submit your CAD sketches, moodboards, or physical reference samples. Our master patternmakers generate 2D/3D templates and BOM costings.
              </p>
            </div>

            <div className="bg-white border-2 border-charcoal/15 p-10 rounded-none space-y-5 relative group hover:border-cognac shadow-sm transition-colors">
              <span className="font-mono text-5xl font-black text-cognac/30 group-hover:text-cognac transition-colors">02</span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Sampling & Tannages</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                Custom leather dyeing (Pantone matching), hardware mould fabrication, and physical counter-samples shipped in 7–14 days.
              </p>
            </div>

            <div className="bg-white border-2 border-charcoal/15 p-10 rounded-none space-y-5 relative group hover:border-cognac shadow-sm transition-colors">
              <span className="font-mono text-5xl font-black text-cognac/30 group-hover:text-cognac transition-colors">03</span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Batch Manufacturing</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                Precision cutting, hand-skiving, saddle-stitching, and multi-layer Italian edge painting executed in controlled ateliers.
              </p>
            </div>

            <div className="bg-white border-2 border-charcoal/15 p-10 rounded-none space-y-5 relative group hover:border-cognac shadow-sm transition-colors">
              <span className="font-mono text-5xl font-black text-cognac/30 group-hover:text-cognac transition-colors">04</span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">AQL 2.5 & Export Freight</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                Comprehensive in-line and final QC inspection report, export packaging, customs documentation, and FOB/CIF/DDP shipping.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button href="/private-label" variant="primary" size="xl">
              Explore Full Private Label Capabilities <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. FOURTH PANE: FULL LENGTH & BREADTH CRAFTSMANSHIP IMAGE */}
      <section className="w-full bg-white space-y-12 sm:space-y-16">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-cognac uppercase tracking-widest text-xs sm:text-sm font-bold block">
              Atelier Standards & Micro-Tolerances
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal tracking-tight uppercase">
              Rigorous Material Selection & Master Handcraft
            </h2>
            <p className="text-base sm:text-xl text-charcoal-600 max-w-3xl font-light">
              Every hide that enters our facility undergoes triple-stage manual inspection for grain consistency, tensile strength, and color fastness. We blend generational Indian leatherworking techniques with high-precision German skiving and Italian edge-coating chemistry.
            </p>
          </div>
          <Button href="/craftsmanship" variant="outline" size="lg" className="self-start md:self-auto border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
            View 11-Stage Production <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Full-Bleed 100vw 4th Pane Image */}
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] min-h-[400px] sm:min-h-[580px] lg:min-h-[720px] bg-white border-y-2 border-charcoal/10 overflow-hidden shadow-xl">
          <img
            src="/images/craftsmanship-luxury-leather.jpg"
            alt="Atelier Craftsmanship & Handcrafted Leather Goods Manufacturing"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Craftsmanship Standards Grid on Pure White */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4">
              <CheckCircle2 className="w-8 h-8 text-cognac" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Responsible Tannery Partnering</h3>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                Hides sourced exclusively from LWG-audited partner tanneries with closed-loop wastewater treatment and chrome-free veg-tan options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4">
              <CheckCircle2 className="w-8 h-8 text-cognac" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Luxury Hardware & Custom Tooling</h3>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                Solid forged brass, stainless steel, and zinc alloy hardware with PVD vacuum plating, salt-spray tested for 72+ hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4">
              <CheckCircle2 className="w-8 h-8 text-cognac" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Micro-Tolerances (0.4mm Edge Skiving)</h3>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                Multi-coat hand-sanded Italian edge lacquers that eliminate cracking under extreme temperature fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="w-full bg-white px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-cognac uppercase tracking-widest text-xs sm:text-sm font-bold block">
              Sample Showcase
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal tracking-tight uppercase">
              Flagship Export Designs
            </h2>
            <p className="text-base sm:text-xl text-charcoal-600 max-w-2xl font-light">
              Ready for private labeling or custom brand adaptation. Request physical counter-samples directly.
            </p>
          </div>
          <Button href="/products" variant="secondary" size="lg">
            Explore Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. GLOBAL EXPORT LOGISTICS */}
      <section className="w-full bg-white px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="bg-white rounded-none p-10 sm:p-16 border-2 border-charcoal/15 shadow-xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-cognac uppercase tracking-[0.3em] text-xs sm:text-sm font-bold block">
                Seamless International Trade
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal tracking-tight uppercase">
                Export Logistics Built for Global Brand Timelines
              </h2>
              <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed max-w-3xl font-light">
                We handle complete export documentation, Certificate of Origin, phytosanitary checks, packing lists, and door-to-door or port-to-port logistics across major world shipping corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-sm">
                <div className="bg-charcoal-50 p-6 rounded-none border border-charcoal/15">
                  <span className="block text-charcoal font-bold text-base mb-1">North America</span>
                  <span className="text-charcoal-600">USA & Canada (DDP / FOB)</span>
                </div>
                <div className="bg-charcoal-50 p-6 rounded-none border border-charcoal/15">
                  <span className="block text-charcoal font-bold text-base mb-1">Europe & UK</span>
                  <span className="text-charcoal-600">UK, Germany, France, Nordics</span>
                </div>
                <div className="bg-charcoal-50 p-6 rounded-none border border-charcoal/15">
                  <span className="block text-charcoal font-bold text-base mb-1">Asia-Pacific & Gulf</span>
                  <span className="text-charcoal-600">Australia, UAE, Japan</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="bg-white border-2 border-charcoal/20 p-8 sm:p-10 rounded-none w-full space-y-5 shadow-md">
                <h3 className="font-serif font-bold text-charcoal text-2xl">Incoterms Supported</h3>
                <ul className="text-sm text-charcoal-700 space-y-3 font-mono">
                  <li>• FOB (Kolkata / Chennai / Mumbai Ports)</li>
                  <li>• CIF (Major Global Seaports)</li>
                  <li>• DDP (Delivered Duty Paid to Warehouse)</li>
                  <li>• Air Priority (DHL / FedEx Express)</li>
                </ul>
                <div className="pt-4">
                  <Button href="/export" variant="primary" size="lg" className="w-full">
                    View Export Capabilities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUYER TESTIMONIALS */}
      <section className="w-full bg-white px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
          <span className="text-cognac uppercase tracking-widest text-xs sm:text-sm font-bold block">
            Buyer Trust & Track Record
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal tracking-tight uppercase">
            What Overseas Brands Value
          </h2>
          <p className="text-base sm:text-xl text-charcoal-600 font-light">
            Representative buyer feedback across North American, European, and Australian export shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-12 rounded-none border border-charcoal/15 luxury-card-shadow space-y-8 flex flex-col justify-between">
            <p className="font-serif text-lg sm:text-xl text-charcoal-700 italic leading-relaxed font-normal">
              “UNICON LEATHER’s sampling speed and attention to edge-paint finishing exceeded our expectations. Their transparent AQL 2.5 reports gave our European QC team complete peace of mind.”
            </p>
            <div className="pt-6 border-t border-charcoal/10">
              <span className="block font-bold text-sm text-charcoal">Head of Accessories Sourcing</span>
              <span className="text-xs text-charcoal-500 font-medium">Boutique Fashion Label • Stockholm, Sweden</span>
            </div>
          </div>

          <div className="bg-white p-12 rounded-none border border-charcoal/15 luxury-card-shadow space-y-8 flex flex-col justify-between">
            <p className="font-serif text-lg sm:text-xl text-charcoal-700 italic leading-relaxed font-normal">
              “Our custom hardware moulds and Pantone-matched pull-up leathers were delivered precisely on spec for our Fall catalog rollout. Flawless export packing with zero transit damage.”
            </p>
            <div className="pt-6 border-t border-charcoal/10">
              <span className="block font-bold text-sm text-charcoal">Managing Director</span>
              <span className="text-xs text-charcoal-500 font-medium">Menswear Goods Wholesaler • Melbourne, Australia</span>
            </div>
          </div>

          <div className="bg-white p-12 rounded-none border border-charcoal/15 luxury-card-shadow space-y-8 flex flex-col justify-between">
            <p className="font-serif text-lg sm:text-xl text-charcoal-700 italic leading-relaxed font-normal">
              “Working across timezones with the Unicon export desk has been effortless. Fast counter-samples via DHL and consistent batch-to-batch leather grain quality across 3,000 units.”
            </p>
            <div className="pt-6 border-t border-charcoal/10">
              <span className="block font-bold text-sm text-charcoal">Senior Sourcing Agent</span>
              <span className="text-xs text-charcoal-500 font-medium">Department Store Buying House • New York, USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRIMARY CONVERSION INQUIRY SECTION */}
      <section className="w-full bg-white px-6 sm:px-12 lg:px-16 xl:px-20" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-cognac uppercase tracking-widest text-xs sm:text-sm font-bold block">
              Direct Factory RFP
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-charcoal leading-tight tracking-tight uppercase">
              Ready to Manufacture Your Next Collection?
            </h2>
            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light">
              Submit your project requirements, target quantities, and tech pack sketches. Our overseas export engineering desk will review and provide a structured FOB/CIF commercial quotation within 12–24 hours.
            </p>

            <div className="bg-charcoal-50 p-8 rounded-none border border-charcoal/10 space-y-4">
              <h3 className="font-serif font-bold text-charcoal text-lg">
                What to Expect Upon Submitting:
              </h3>
              <ul className="text-sm text-charcoal-700 space-y-3 font-light">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                  NDA agreement signed prior to CAD file analysis
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                  Bill of Materials (BOM) & tiered unit cost breakdown
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                  Prototype sampling timeline & leather swatch dispatch
                </li>
              </ul>
            </div>

            <div className="pt-2 text-sm text-charcoal-600">
              <span>Prefer immediate chat? </span>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cognac font-bold underline underline-offset-4"
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
