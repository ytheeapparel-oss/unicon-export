"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  FileText,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { CategoryInfo, Product } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { QuickQuoteModal } from "@/components/forms/QuickQuoteModal";
import {
  JsonLdScript,
  generateCategoryCollectionSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/components/seo/JsonLdScript";

interface CategoryDetailViewProps {
  category: CategoryInfo;
  products: Product[];
}

export function CategoryDetailView({ category, products }: CategoryDetailViewProps) {
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const isSmallGoods =
    category.slug.includes("wallet") ||
    category.slug.includes("belt") ||
    category.slug.includes("small") ||
    category.slug.includes("gift") ||
    category.slug.includes("accessor");

  const stockSampleWindow = isSmallGoods ? "5–7 business days" : "7–14 business days";
  const customSampleWindow = isSmallGoods ? "12–15 business days" : "14–21 business days";

  const categoryFaqs = [
    {
      question: `What is the minimum order quantity (MOQ) for custom ${category.name.toLowerCase()}?`,
      answer: `Our wholesale MOQ for ${category.name.toLowerCase()} is ${category.moqSummary}. Stock-leather trial orders can be split across 2 core colorways (Black, Cognac, Espresso, Saddle Tan, or Navy), while custom Pantone drum-dyed tannery runs require 100–200 units per color.`,
    },
    {
      question: `How long does sample prototyping and bulk production take for ${category.name.toLowerCase()}?`,
      answer: `Physical counter-samples using in-stock atelier leathers and standard hardware are completed in ${stockSampleWindow} and shipped via DHL/FedEx Express. When custom Pantone drum-dyed hides, specialty embossing plates, or custom 3D CNC brass hardware molds are required, please allow +7–10 additional business days (${customSampleWindow} total). Bulk production takes 25–40 business days after Pre-Production Sample (PPS) approval.`,
    },
    {
      question: `What leather gauges, hide yields, and construction standards are used for ${category.name.toLowerCase()}?`,
      answer: `We engineer ${category.name.toLowerCase()} under HS Code ${category.hsCode} using ${category.hideSpecs} with an average material yield of ${category.sqftYield}. Construction specs include ${category.constructionAndStitching} and ${category.hardwareAndLining}.`,
    },
    {
      question: `Do your ${category.name.toLowerCase()} comply with EU REACH and US Proposition 65 standards?`,
      answer: `Yes. All ${category.name.toLowerCase()} exported to the European Union, UK, USA, Canada, Australia, UAE, and Japan use LWG-audited partner tannery hides and can be batch-verified via third-party SGS, Intertek, or TÜV SÜD lab testing for EU/UK REACH Annex XVII (Chromium VI < 3 mg/kg per ISO 17075, Azo-free dyes per ISO 17234, EN 1811 nickel release) and California Proposition 65 compliance, alongside pre-shipment ISO 2859-1 AQL 2.5 inspection.`,
    },
  ];

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Catalogue", url: "https://www.uniconleather.com/products" },
    { name: category.name, url: `https://www.uniconleather.com/products/${category.slug}` },
  ]);

  const collectionSchema = generateCategoryCollectionSchema({
    name: `${category.name} — ${category.distinctH1}`,
    description: category.description,
    url: `https://www.uniconleather.com/products/${category.slug}`,
    image: category.image.startsWith("http")
      ? category.image
      : `https://www.uniconleather.com${category.image}`,
  });

  const faqSchema = generateFaqSchema(categoryFaqs);

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={collectionSchema} />
      <JsonLdScript schema={faqSchema} />

      <div className="w-full bg-white pb-24">
        {/* 1. Category Hero Banner */}
        <section className="relative w-full !mt-0 min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end justify-start overflow-hidden bg-[#FAF8F5] border-b border-charcoal/10">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={category.image}
              alt={`${category.name} — ${category.distinctH1} | UNICON LEATHER`}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/90 to-[#FAF8F5]/30 sm:from-[#FAF8F5]/98 sm:via-[#FAF8F5]/85 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
          </div>

          <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
            <div className="max-w-3xl space-y-5 text-left">
              <Breadcrumbs
                items={[
                  { label: "Catalogue", href: "/products" },
                  { label: category.name },
                ]}
              />

              <div className="inline-flex items-center gap-2.5 flex-wrap">
                <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 shadow-xs">
                  {category.name} · HS Code {category.hsCode}
                </span>
                <span className="text-charcoal/30">·</span>
                <span className="text-[10px] sm:text-xs text-cognac font-mono tracking-widest uppercase font-semibold">
                  LWG Partner Tanneries · EU REACH &amp; Prop 65 Ready
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-charcoal leading-[1.12] tracking-tight">
                {category.distinctH1}
              </h1>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-2xl">
                {category.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 flex-wrap">
                <Button href="#category-inquiry" variant="primary" size="lg" className="shadow-sm text-xs uppercase tracking-wider font-semibold">
                  <FileText className="w-4 h-4 mr-2" /> Request Project Quote
                </Button>
                <Button href="#category-technical-specs" variant="outline" size="lg" className="bg-white/95 border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-semibold">
                  View Technical Specs &amp; Hide Yield
                </Button>
                <Button href="/catalogue-request" variant="outline" size="lg" className="bg-white/95 border-cognac/40 text-cognac hover:bg-cognac hover:text-white text-xs uppercase tracking-wider font-semibold">
                  Download Catalogue
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-20">
          {/* 2. Category-Specific Commercial & Sampling Summary Bar */}
          <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-white p-5 border border-charcoal/12 shadow-xs">
                <span className="block text-[10px] font-mono tracking-wider uppercase text-cognac font-bold">
                  Category MOQ ({category.name})
                </span>
                <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-1 block">
                  {category.moqSummary}
                </span>
                <p className="text-[11px] text-charcoal-500 font-light mt-1">
                  Split across 2 stock colorways per style
                </p>
              </div>
              <div className="bg-white p-5 border border-charcoal/12 shadow-xs">
                <span className="block text-[10px] font-mono tracking-wider uppercase text-cognac font-bold">
                  Counter-Sample Timeline
                </span>
                <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-1 block">
                  {stockSampleWindow} (Stock Leather)
                </span>
                <p className="text-[11px] text-charcoal-500 font-light mt-1">
                  +7–10 days ({customSampleWindow}) for custom dye/tooling
                </p>
              </div>
              <div className="bg-white p-5 border border-charcoal/12 shadow-xs">
                <span className="block text-[10px] font-mono tracking-wider uppercase text-cognac font-bold">
                  Hide Gauge &amp; Consumption
                </span>
                <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-1 block">
                  {category.sqftYield.split("(")[0].trim()}
                </span>
                <p className="text-[11px] text-charcoal-500 font-light mt-1 line-clamp-1">
                  {category.hideSpecs}
                </p>
              </div>
              <div className="bg-white p-5 border border-charcoal/12 shadow-xs">
                <span className="block text-[10px] font-mono tracking-wider uppercase text-cognac font-bold">
                  Bulk Lead Time &amp; QC
                </span>
                <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-1 block">
                  25–40 Days · ISO AQL 2.5
                </span>
                <p className="text-[11px] text-charcoal-500 font-light mt-1">
                  FOB Kolkata/Mumbai, CIF &amp; DDP (EUR/GBP/USD)
                </p>
              </div>
            </div>
          </section>

          {/* 3. Products in this Category */}
          <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-charcoal/10 pb-5">
              <div>
                <span className="text-cognac text-[10px] font-mono font-semibold uppercase tracking-widest block">
                  Category-Specific Production Blocks · HS {category.hsCode}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-charcoal tracking-tight mt-1">
                  {category.name} Ready for Private-Label &amp; Custom Adaptation
                </h2>
              </div>
              <span className="text-xs font-mono text-charcoal-500">
                Showing {products.length} {category.name} {products.length === 1 ? "Block" : "Blocks"}
              </span>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickInquire={(p) => setQuoteProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#FAF8F5] border border-charcoal/10 p-12 text-center space-y-4">
                <Layers className="w-8 h-8 text-cognac mx-auto" />
                <h3 className="font-serif text-xl text-charcoal font-medium">Bespoke OEM Development</h3>
                <p className="text-sm text-charcoal-600 font-light max-w-lg mx-auto">
                  We engineer custom {category.name.toLowerCase()} tailored to your tech packs, sketches, and brand guidelines. Send us your requirements for an immediate feasibility review and quote.
                </p>
                <Button href="#category-inquiry" variant="primary" size="md">
                  Start OEM Tech Pack Project
                </Button>
              </div>
            )}
          </section>

          {/* 4. Category-Specific Technical Specification Matrix & Engineering Pillars */}
          <section
            id="category-technical-specs"
            className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-y border-charcoal/10"
          >
            <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
              <div className="max-w-3xl space-y-2 text-left">
                <span className="text-cognac text-[10.5px] font-mono font-bold uppercase tracking-widest block">
                  Category Engineering Specifications · Bantala, Kolkata Atelier
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-charcoal tracking-tight">
                  Manufacturing &amp; Material Specifications for {category.name}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  Every {category.name.toLowerCase()} production run follows strict hide-gauge, stitch-per-inch (SPI), structural reinforcement, and chemical compliance benchmarks documented on your Bill of Materials (BOM).
                </p>
              </div>

              {/* Technical Spec Table for this Category */}
              <div className="bg-white border border-charcoal/12 shadow-xs overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/10 text-left">
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                      01 · Leather Grades &amp; Gauge (mm)
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                      {category.hideSpecs}
                    </p>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                      02 · Hide Consumption &amp; Customs HS Code
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                      <strong>Yield:</strong> {category.sqftYield}
                      <br />
                      <strong>Harmonized Code:</strong> HS {category.hsCode}
                    </p>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                      03 · Stitching, Skiving &amp; Interlining
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                      {category.constructionAndStitching}
                    </p>
                  </div>
                </div>
                <div className="border-t border-charcoal/10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-charcoal/10 text-left bg-[#FAF8F5]/60">
                  <div className="p-6 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                      04 · Hardware, Zippers &amp; Interior Lining
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                      {category.hardwareAndLining}
                    </p>
                  </div>
                  <div className="p-6 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                      05 · Sampling &amp; Tooling Lead Time Breakdown
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                      <strong>In-Stock Leather &amp; Standard Hardware:</strong> {stockSampleWindow}.{" "}
                      <strong>Custom Pantone Drum-Dyed Hides or Custom 3D Brass Molds:</strong> +7–10 business days ({customSampleWindow} total). 100% of sample fee credited to bulk PO.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Distinct Category Manufacturing Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {category.manufacturingPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-white p-7 border border-charcoal/10 shadow-xs space-y-3.5 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-8 h-8 bg-[#FAF8F5] border border-charcoal/10 flex items-center justify-center text-cognac font-mono text-xs font-bold">
                          0{index + 1}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cognac bg-cognac/10 px-2.5 py-0.5 font-semibold">
                          {pillar.specBadge}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-charcoal">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-charcoal-700 font-light">
                  Need an instant FOB unit cost &amp; hide consumption estimate for your{" "}
                  <strong className="font-medium text-charcoal">{category.name.toLowerCase()}</strong> project?
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/cost-calculator"
                    className="px-4 py-2 bg-white border border-charcoal/20 hover:border-cognac hover:text-cognac text-xs font-mono uppercase tracking-wider text-charcoal transition-colors"
                  >
                    Open B2B FOB Cost Calculator →
                  </Link>
                  <Link
                    href="/compliance"
                    className="px-4 py-2 bg-white border border-charcoal/20 hover:border-cognac hover:text-cognac text-xs font-mono uppercase tracking-wider text-charcoal transition-colors"
                  >
                    REACH &amp; LWG Compliance Matrix →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 4B. Category-Specific B2B Ordering FAQs */}
          <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="mb-8 text-left">
              <span className="text-cognac text-[10px] font-mono font-semibold uppercase tracking-widest block">
                Buyer Procurement FAQ · {category.name}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight mt-1">
                Ordering, Sampling &amp; Customizing {category.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {categoryFaqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF8F5] p-6 border border-charcoal/10 space-y-2">
                  <h3 className="font-serif text-base font-semibold text-charcoal">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Category Bulk Inquiry Form */}
          <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="category-inquiry">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 text-left">
                <Badge variant="cognac" size="sm">
                  Direct Factory Quotation · HS {category.hsCode}
                </Badge>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                  Request a Custom Quote for {category.name}
                </h2>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  Submit your required order quantity, target leather specifications, destination country, and delivery window. Our Kolkata &amp; Noida export engineering desk will prepare an itemized FOB/CIF/DDP quotation in EUR (€), GBP (£), or USD ($) within 12–24 business hours.
                </p>

                <div className="bg-[#FAF8F5] p-6 border border-charcoal/10 text-xs sm:text-sm space-y-3">
                  <span className="font-bold text-charcoal block">Category Production Summary:</span>
                  <p className="text-charcoal-600 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span><strong>MOQ:</strong> {category.moqSummary}</span>
                  </p>
                  <p className="text-charcoal-600 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span><strong>Sampling:</strong> {stockSampleWindow} (stock leather) · +7–10 days for custom dye/tooling</span>
                  </p>
                  <p className="text-charcoal-600 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span><strong>Testing &amp; QC:</strong> LWG partner hides, batch SGS REACH/Prop 65 &amp; ISO AQL 2.5 audit</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <BulkInquiryForm
                  initialProduct={`${category.name} Custom OEM Manufacturing`}
                  initialCategory={category.name}
                  inquiryType="bulk"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <QuickQuoteModal
        isOpen={!!quoteProduct}
        onClose={() => setQuoteProduct(null)}
        product={quoteProduct}
      />
    </>
  );
}
