import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Download,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";
import { InternationalMarketConfig, INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface InternationalHubPageProps {
  market: InternationalMarketConfig;
}

export function InternationalHubPage({ market }: InternationalHubPageProps) {
  const baseUrl = "https://www.uniconleather.com";
  const canonicalUrl = `${baseUrl}${market.path}`;

  // 1. Breadcrumbs schema
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Global Export", url: `${baseUrl}/export` },
    { name: market.countryName, url: canonicalUrl },
  ]);

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: market.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. Localized Manufacturer Schema
  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    name: `UNICON LEATHER — ${market.countryName} Export Desk`,
    url: canonicalUrl,
    logo: `${baseUrl}/images/unicon-leather-logo.png`,
    description: market.metaDescription,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.primaryEmail,
    currenciesAccepted: market.currency,
    priceRange: "$$",
    areaServed: market.code.toUpperCase().replace("EN-", ""),
    hasCertification: [
      {
        "@type": "Certification",
        name: "LWG (Leather Working Group) Gold/Silver Partner Tanneries",
      },
      {
        "@type": "Certification",
        name: "EU REACH Annex XVII & California Prop 65 Lab Verified",
      },
    ],
  };

  // Filter 8 matching products from popular categories
  const matchingProducts = PRODUCTS.filter((p) =>
    market.popularCategories.includes(p.category)
  ).slice(0, 8);

  // Sibling markets for cross-regional navigation
  const siblingMarkets = Object.values(INTERNATIONAL_MARKETS).filter(
    (m) => m.code !== market.code
  );

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={manufacturerSchema} />

      <div className="w-full flex flex-col items-center">
        {/* HERO SECTION */}
        <section className="w-full !mt-0 !pt-0 bg-[#FAF8F5] border-b border-charcoal/10 relative overflow-hidden">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 pb-14 sm:pb-20">
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Global Export", href: "/export" },
                  { label: market.countryName, href: market.path },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Localized Headline & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-cognac/30 text-cognac font-mono text-[11px] tracking-widest uppercase">
                  <span className="text-sm">{market.flag}</span>
                  <span>{market.heroKicker}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-[1.15] tracking-tight">
                  {market.heroH1}
                </h1>

                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-2xl">
                  {market.heroSubtitle}
                </p>

                {/* Localized Compliance Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {market.complianceBadges.map((badge, idx) => (
                    <div
                      key={`comp-badge-${idx}`}
                      className="bg-white border border-charcoal/10 p-3 flex flex-col justify-center space-y-1 shadow-2xs hover:border-cognac/50 transition-colors"
                    >
                      <span className="text-xs font-serif font-bold text-charcoal flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                        {badge.title}
                      </span>
                      <span className="text-[10px] text-charcoal-500 leading-tight">
                        {badge.subtitle}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#inquiry-form"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-cognac text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Request B2B Sourcing Quotation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/catalogue-request"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-charcoal/30 hover:border-cognac hover:text-cognac text-charcoal text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4 text-cognac" />
                    Download Export Lookbook
                  </Link>
                </div>
              </div>

              {/* Right Column: Trade Terms Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="bg-white border-2 border-charcoal/15 p-6 sm:p-8 shadow-xl relative">
                  <div className="absolute top-0 right-0 bg-cognac text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-semibold">
                    {market.currency} ({market.currencySymbol}) Pricing Terms
                  </div>

                  <span className="font-serif text-lg font-semibold text-charcoal block mb-4">
                    {market.flag} Trade Terms & Export SLA
                  </span>

                  <div className="space-y-4">
                    {market.tradeHighlights.map((th, idx) => (
                      <div
                        key={`trade-hl-${idx}`}
                        className="border-b border-charcoal/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase text-charcoal-500 tracking-wider">
                            {th.label}
                          </span>
                          <span className="text-xs font-serif font-bold text-cognac">
                            {th.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-charcoal-600 mt-1 leading-snug">
                          {th.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/10 bg-[#FAF8F5] p-3 text-center">
                    <span className="text-[11px] text-charcoal-600 block">
                      Direct WhatsApp Assistance for {market.countryName}:
                    </span>
                    <a
                      href={COMPANY_INFO.whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-cognac hover:underline mt-0.5 inline-block"
                    >
                      {COMPANY_INFO.whatsapp} ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP PRODUCTION WORKFLOW */}
        <section className="w-full bg-white py-16 sm:py-20 border-b border-charcoal/10">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                Turnkey Contract Manufacturing
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">
                How We Partner with Brands in {market.countryName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "CAD & Tech Pack Digitize",
                  desc: "Send your 2D sketches, Adobe Illustrator specs, or reference physical bags. We digitize patterns and issue 24h costings.",
                },
                {
                  step: "02",
                  title: "Rapid Counter-Sample",
                  desc: "Physical golden samples crafted within 7–10 days using genuine LWG-audited leather swatches and custom hardware strike-offs.",
                },
                {
                  step: "03",
                  title: "Batch Cut & Sew Production",
                  desc: "Precision skiving, turned-edge stitching, and multi-layer Italian edge painting with in-line AQL 2.5 defect audits.",
                },
                {
                  step: "04",
                  title: `Direct ${market.tradeHighlights[0].value}`,
                  desc: `Door-to-door delivery with export documentation, Certificate of Origin, and customs brokerage to your warehouse.`,
                },
              ].map((step, idx) => (
                <div
                  key={`workflow-step-${idx}`}
                  className="bg-[#FAF8F5] border border-charcoal/10 p-6 relative hover:border-cognac transition-colors"
                >
                  <span className="font-mono text-3xl font-bold text-cognac/30 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR SILHOUETTES CURATED FOR THIS REGION */}
        {matchingProducts.length > 0 && (
          <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-b border-charcoal/10">
            <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-1">
                    Export Ready Catalogue
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    High-Demand Silhouettes for {market.countryName}
                  </h2>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-mono uppercase tracking-wider text-charcoal hover:text-cognac inline-flex items-center gap-1.5"
                >
                  View Complete 12-Line Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="w-full bg-white py-16 sm:py-20 border-b border-charcoal/10">
          <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                Trade Logistics & Protocol
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                Frequently Asked Sourcing Questions
              </h2>
            </div>

            <Accordion
              items={market.faqs.map((faq, idx) => ({
                id: `intl-faq-${idx}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>

        {/* CROSS-REGIONAL MARKET SWITCHER FOR CRAWL DISTRIBUTION */}
        <section className="w-full bg-[#FAF8F5] py-12 border-b border-charcoal/10">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="text-center mb-6">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-charcoal-500 block">
                Explore Other International Trade Gateways
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs text-charcoal hover:border-cognac hover:text-cognac transition-colors font-mono tracking-wider"
              >
                🌐 Global Master Portal
              </Link>
              {siblingMarkets.map((sm) => (
                <Link
                  key={sm.code}
                  href={sm.path}
                  className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs text-charcoal hover:border-cognac hover:text-cognac transition-colors font-mono tracking-wider inline-flex items-center gap-1.5"
                >
                  <span>{sm.flag}</span>
                  <span>{sm.countryName}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* B2B INQUIRY FORM */}
        <section id="inquiry-form" className="w-full bg-white py-16 sm:py-24">
          <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                Direct Export Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-charcoal">
                Request a Production Quote for {market.countryName}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2 font-light">
                Submit your tech pack, target quantities, or reference images. Our export engineering team responds within 24 business hours with tiered pricing in {market.currency}.
              </p>
            </div>

            <BulkInquiryForm inquiryType="private-label" />
          </div>
        </section>
      </div>
    </>
  );
}
