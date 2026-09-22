"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Package,
  Layers,
  FileText,
  MessageCircle,
  Award
} from "lucide-react";
import { CategoryInfo, Product } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { COMPANY_INFO } from "@/data/company";
import {
  JsonLdScript,
  generateCategoryCollectionSchema,
  generateBreadcrumbSchema,
} from "@/components/seo/JsonLdScript";

interface CategoryDetailViewProps {
  category: CategoryInfo;
  products: Product[];
}

export function CategoryDetailView({ category, products }: CategoryDetailViewProps) {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Catalogue", url: "https://www.uniconleather.com/products" },
    { name: category.name, url: `https://www.uniconleather.com/products/${category.slug}` },
  ]);

  const collectionSchema = generateCategoryCollectionSchema({
    name: category.name,
    description: category.description,
    url: `https://www.uniconleather.com/products/${category.slug}`,
    image: category.image.startsWith("http")
      ? category.image
      : `https://www.uniconleather.com${category.image}`,
  });

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={collectionSchema} />

      <div className="w-full bg-white pb-24">
        {/* 1. Category Hero Banner */}
        <section className="relative w-full !mt-0 min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end justify-start overflow-hidden bg-[#FAF8F5] border-b border-charcoal/10">
        {/* Full Length & Breadth Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={category.image}
            alt={`${category.name} Manufacturer & Wholesale Supplier - UNICON LEATHER`}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Soft Ivory/Sand Scrim for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/90 to-[#FAF8F5]/30 sm:from-[#FAF8F5]/98 sm:via-[#FAF8F5]/85 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
        </div>

        {/* Content Box */}
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
                OEM / ODM Manufacturing Line
              </span>
              <span className="text-charcoal/30">·</span>
              <span className="text-[10px] sm:text-xs text-cognac font-mono tracking-widest uppercase font-semibold">
                LWG Audited · REACH Compliant
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              {category.name} <br />
              <span className="italic text-cognac font-light">Custom Manufacturing &amp; Wholesale</span>
            </h1>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-2xl">
              {category.description} Built to international luxury standards with custom hardware casting, private-label blind debossing, and precision lockstitch seam reinforcement.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button href="#category-inquiry" variant="primary" size="lg" className="shadow-sm text-xs uppercase tracking-wider font-semibold">
                <FileText className="w-4 h-4 mr-2" /> Inquire for Production
              </Button>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-sans uppercase font-semibold tracking-[0.14em] text-xs bg-[#25d366] hover:bg-[#20ba59] text-white px-5 py-3.5 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-white" /> WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-24">
        {/* 2. Category Manufacturing Specs Bar */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="bg-white p-5 border border-charcoal/10 shadow-xs">
            <span className="block text-[10px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Minimum Order (MOQ)</span>
            <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-0.5 block">50 – 150 pcs / style</span>
            <p className="text-[11px] text-charcoal-500 font-light mt-1">Multi-colorway batching available</p>
          </div>
          <div className="bg-white p-5 border border-charcoal/10 shadow-xs">
            <span className="block text-[10px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Sampling Lead Time</span>
            <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-0.5 block">7 – 14 Business Days</span>
            <p className="text-[11px] text-charcoal-500 font-light mt-1">DHL / FedEx Express courier</p>
          </div>
          <div className="bg-white p-5 border border-charcoal/10 shadow-xs">
            <span className="block text-[10px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Bulk Production Time</span>
            <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-0.5 block">30 – 45 Days Post-Signoff</span>
            <p className="text-[11px] text-charcoal-500 font-light mt-1">FOB, CIF, DDP delivery terms</p>
          </div>
          <div className="bg-white p-5 border border-charcoal/10 shadow-xs">
            <span className="block text-[10px] font-mono tracking-wider uppercase text-charcoal-500 font-medium">Quality Compliance</span>
            <span className="text-sm sm:text-base font-serif text-charcoal font-semibold mt-0.5 block">AQL 2.5 Strict Audit</span>
            <p className="text-[11px] text-charcoal-500 font-light mt-1">REACH Annex XVII & Prop 65 pass</p>
          </div>
        </div>
      </section>

      {/* 3. Products in this Category */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-charcoal/10 pb-5">
          <div>
            <span className="text-cognac text-[10px] font-mono font-semibold uppercase tracking-widest block">
              Active Export Silhouettes
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-charcoal tracking-tight mt-1">
              {category.name} Collection
            </h2>
          </div>
          <span className="text-xs font-mono text-charcoal-500">
            Showing {products.length} {products.length === 1 ? "Style" : "Styles"}
          </span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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

      {/* 4. Category Engineering & Customization Highlights */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-7 border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-charcoal/10 flex items-center justify-center text-cognac font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Tannage &amp; Leather Customization
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Choose from full-grain bovine cowhide, vegetable-tanned shoulder, supple Italian calf nappa, pebbled textures, or water-resistant pull-up finishes sourced from LWG Gold audited tanneries.
              </p>
            </div>

            <div className="bg-white p-7 border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-charcoal/10 flex items-center justify-center text-cognac font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Private Label Branding &amp; Hardware
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Precision hot-foil debossing, blind heat stamps, custom metal logo casting in zinc alloy or solid brass, customized YKK Excella zippers, and bespoke organic dustbags.
              </p>
            </div>

            <div className="bg-white p-7 border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-charcoal/10 flex items-center justify-center text-cognac font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                Strict Export Compliance &amp; Testing
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                100% compliant with EU REACH Annex XVII (Chromium VI &lt; 3ppm, Azo-dye free, nickel-free hardware) and California Proposition 65 with third-party SGS / Intertek certification upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Category Bulk Inquiry Form */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="category-inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 text-left">
            <Badge variant="cognac" size="sm">
              Bulk Production RFP
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              Request Wholesale Quote for {category.name}
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed font-light">
              Submit your required order quantity, target leather specifications, and timeline. Our Kolkata export desk will prepare a comprehensive factory-direct quotation within 12–24 business hours.
            </p>

            <div className="bg-[#FAF8F5] p-6 border border-charcoal/10 text-xs sm:text-sm space-y-3">
              <span className="font-bold text-charcoal block">Manufacturing Assurance:</span>
              <p className="text-charcoal-600">• Express Sample Prototyping: 7–14 days</p>
              <p className="text-charcoal-600">• Low Trial Order MOQs for new designer collections</p>
              <p className="text-charcoal-600">• Supported Freight: Air Courier (DHL/FedEx) & Sea Container (FOB/CIF/DDP)</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BulkInquiryForm
              initialProduct={`${category.name} Wholesale Manufacturing`}
              initialCategory={category.name}
              inquiryType="bulk"
            />
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
