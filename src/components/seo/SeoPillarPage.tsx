import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Clock,
  CheckCircle2,
  ArrowRight,
  Download,
  MessageCircle,
  FileCheck,
  Layers,
  Sparkles,
  Award,
  Mail,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";
import { SeoPillar, SEO_PILLARS } from "@/data/seoPillars";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface SeoPillarPageProps {
  pillar: SeoPillar;
}

export function SeoPillarPage({ pillar }: SeoPillarPageProps) {
  // 1. Breadcrumbs schema
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: pillar.keywordTheme, url: pillar.canonicalUrl },
  ]);

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pillar.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. Service / Product schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pillar.keywordTheme,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.legalName,
      url: "https://www.uniconleather.com",
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.primaryEmail,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.noidaOfficeAddress,
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201304",
        addressCountry: "IN",
      },
    },
    description: pillar.metaDescription,
    areaServed: ["US", "GB", "DE", "FR", "IT", "AE", "AU", "CA", "IN"],
  };

  // Filter matched products across category name, categorySlug, or category ID token
  const matchingProducts = PRODUCTS.filter((p) =>
    pillar.categoryFilter.some(
      (catKey) =>
        p.category.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase().includes(catKey.toLowerCase()) ||
        p.category.toLowerCase().includes(catKey.toLowerCase().replace("-", " "))
    )
  ).slice(0, 8);

  // Exclude consolidated 301-redirected slugs from internal linking
  const consolidatedPillarSlugs = new Set([
    "private-label-leather-goods",
    "leather-goods-supplier-usa",
    "full-grain-vs-top-grain-leather",
  ]);

  // Other sibling pillars for internal linking
  const siblingPillars = Object.values(SEO_PILLARS).filter(
    (p) => p.slug !== pillar.slug && !consolidatedPillarSlugs.has(p.slug)
  );

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={serviceSchema} />

      <div className="w-full flex flex-col items-center">
        {/* HERO SECTION - NO GAP UNDER HEADER */}
        <section className="w-full !mt-0 !pt-0 bg-[#FAF8F5] border-b border-charcoal/10 relative overflow-hidden">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 pb-14 sm:pb-20">
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { label: pillar.keywordTheme, href: `/${pillar.slug}` },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="outline" className="text-cognac border-cognac/30 bg-white font-mono text-xs px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1.5 inline text-cognac" />
                    {pillar.kicker}
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal tracking-tight leading-[1.15]">
                  {pillar.h1}
                </h1>

                <p className="text-sm sm:text-base text-charcoal-700 font-light leading-relaxed max-w-3xl">
                  {pillar.heroSubtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="#inquiry" variant="primary" size="lg" className="shadow-sm">
                    Request B2B Factory Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    href={COMPANY_INFO.whatsappDirectUrl}
                    variant="outline"
                    size="lg"
                    className="border-charcoal/20 hover:border-charcoal bg-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                    WhatsApp Export Desk
                  </Button>
                  <Button href="/catalogue-request" variant="ghost" size="lg">
                    <Download className="w-4 h-4 mr-2" /> Digital Catalogue
                  </Button>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-charcoal-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> 50–100 Pcs Trial MOQ
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> LWG Partner Tanneries
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> Batch REACH &amp; Prop 65
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> DDP / FOB Freight
                  </span>
                </div>
              </div>

              {/* Quick Spec Highlights Card */}
              <div className="lg:col-span-4 bg-white p-6 sm:p-8 border border-charcoal/10 shadow-xs space-y-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cognac font-bold block">
                  Production At-A-Glance
                </span>
                <ul className="space-y-3 text-xs text-charcoal-700">
                  {pillar.specs.slice(0, 4).map((spec, i) => (
                    <li key={i} className="pb-2.5 border-b border-charcoal/8 last:border-0 last:pb-0">
                      <span className="block font-medium text-charcoal mb-0.5">{spec.label}</span>
                      <span className="font-light text-charcoal-600">{spec.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="#specs"
                    className="text-xs font-medium text-cognac hover:text-charcoal inline-flex items-center gap-1"
                  >
                    View All Technical Parameters <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE METRICS TICKER */}
        <section className="w-full bg-[#F4F0E8] border-b border-charcoal/10 py-5">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-charcoal/10">
              <div className="sm:pr-4">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">50–100 Pcs</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-medium">Flexible Trial MOQ</span>
              </div>
              <div className="sm:px-4 pt-3 sm:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">5–14 Days</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-medium">Rapid Counter-Sampling</span>
              </div>
              <div className="sm:px-4 pt-3 sm:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">AQL 2.5</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-medium">Strict Quality Audit</span>
              </div>
              <div className="sm:pl-4 pt-3 sm:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">25+ Nations</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-medium">Direct Global Export</span>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY WRAPPER */}
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-20 space-y-20">

          {/* 0. PILLAR-SPECIFIC EXECUTIVE ENGINEERING BRIEF & SPECIFICATION TABLE */}
          <section
            id="pillar-executive-brief"
            aria-labelledby={`brief-heading-${pillar.slug}`}
            className="space-y-8"
          >
            <div className="bg-[#FAF8F5] border-l-4 border-cognac border-y border-r border-charcoal/10 p-6 sm:p-10 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-cognac font-bold bg-white px-3 py-1 border border-cognac/20">
                  <Sparkles className="w-3.5 h-3.5 text-cognac" /> Technical Procurement Brief · {pillar.keywordTheme}
                </span>
                <span className="text-[11px] font-mono text-charcoal-500 uppercase tracking-wider">
                  Plots 676, 687, 944 &amp; 1084 (Bantala CLC) · Noida NCR
                </span>
              </div>

              <h2
                id={`brief-heading-${pillar.slug}`}
                className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight"
              >
                {pillar.keywordTheme}: Direct Factory Specifications &amp; Export Protocol
              </h2>

              <p
                className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-light max-w-5xl"
                data-aeo-summary={pillar.slug}
              >
                {pillar.heroSubtitle} Operating across four dedicated production plots in Bantala, Kolkata Leather Complex (Zone 09) and our Noida Sector-106 corporate merchandising office, Unicon Leather executes{" "}
                <strong className="font-medium text-charcoal">{pillar.keywordTheme.toLowerCase()}</strong> programs with{" "}
                {pillar.specs[0]?.value || "full-grain LWG-audited partner tannery hides"},{" "}
                {pillar.specs[1]?.value || "flexible 50–100 piece stock-leather trial MOQs"}, and{" "}
                3-tier prototype counter-sampling (5–7 business days for wallets/belts in stock leather, 7–14 business days for bags/jackets in stock leather, and +7–10 business days for custom Pantone drum-dyed hides or 3D brass hardware tooling).
              </p>

              <div className="overflow-x-auto bg-white border border-charcoal/15 mt-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-charcoal text-white font-mono text-[10.5px] uppercase tracking-wider">
                      <th className="py-3 px-4 border-r border-white/15 w-1/3">
                        {pillar.keywordTheme} Parameter
                      </th>
                      <th className="py-3 px-4 w-2/3">
                        Verified Factory Standard &amp; Production Tolerance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {pillar.specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]/60"}>
                        <th scope="row" className="py-3 px-4 font-serif font-semibold text-charcoal border-r border-charcoal/10">
                          {spec.label}
                        </th>
                        <td className="py-3 px-4 text-charcoal-700 font-light leading-relaxed">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 1. PRODUCT SHOWCASE */}
          {matchingProducts.length > 0 && (
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                    {pillar.keywordTheme} · Reference Silhouettes
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                    {pillar.keywordTheme}: Reference Silhouettes &amp; Base Blocks
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light">
                    Every silhouette below is backed by existing master patterns in our Kolkata pattern room—available for private-label rebranding or custom CAD adaptation.
                  </p>
                </div>
                <Button href="/products" variant="outline" size="sm" className="border-charcoal/20">
                  Explore Full B2B Catalogue <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

          {/* 2. TECHNICAL SPECIFICATIONS & CAPABILITIES */}
          <section id="specs" className="space-y-8">
            <div className="space-y-2">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Engineering &amp; Standards · {pillar.keywordTheme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                {pillar.keywordTheme} — Benchcraft &amp; Material Parameters
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light">
                Component-level engineering breakdown for {pillar.keywordTheme.toLowerCase()} programs across hide selection, skiving, stitching, and pre-shipment QC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.specs.map((spec, idx) => (
                <div key={idx} className="bg-white p-6 border border-charcoal/10 shadow-2xs space-y-2">
                  <span className="text-[10px] font-mono uppercase text-cognac font-bold block">
                    0{idx + 1} // {pillar.keywordTheme}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-charcoal">{spec.label}</h3>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. KEY ATELIER ADVANTAGES */}
          <section className="bg-[#FAF8F5] p-8 sm:p-12 lg:p-14 border border-charcoal/10 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Atelier Capabilities · {pillar.keywordTheme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                Key Manufacturing Advantages for {pillar.keywordTheme}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Combining LWG-audited partner tannery supply in India with German Fortuna 0.4mm edge-skiving and batch-testable EU REACH / US Prop 65 chemical compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillar.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-7 border border-charcoal/10 space-y-3 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-cognac/10 flex items-center justify-center text-cognac font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-charcoal">{feature.title}</h3>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. OEM / PRIVATE LABEL 4-STEP PROCESS */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Production Roadmap · {pillar.keywordTheme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                4-Stage Contract Execution for {pillar.keywordTheme}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Structured OEM/ODM workflow from initial CAD tech pack review to ISO 2859-1 (AQL 2.5) pre-shipment inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">01</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">CAD Pattern &amp; BOM</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Share your tech pack or reference piece for {pillar.keywordTheme.toLowerCase()}. We calculate sq. ft. hide consumption ({pillar.specs[0]?.value || "LWG partner hides"}) and issue a line-item BOM quote within 24 hours.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">02</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">3-Tier Counter-Sampling</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Stock-leather prototypes ship in 5–7 business days (SLGs/belts) or 7–14 business days (bags/jackets); add +7–10 business days when custom Pantone drum-dyed hides or 3D brass hardware molds are required.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">03</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">Cut, Skive &amp; Assemble</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {pillar.specs[2]?.value || "25-ton Atom hydraulic clicker die-cutting, 0.4mm Fortuna edge skiving, Juki/PFAFF lockstitching, and 3-coat Fenice Italian edge painting."}
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">04</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">AQL 2.5 &amp; Global Freight</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  4-stage QC inspection to ISO 2859-1 (AQL 2.5 Major / 4.0 Minor), optional SGS/Intertek REACH lab verification, and FOB, CIF, or DDP dispatch.
                </p>
              </div>
            </div>
          </section>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <section className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Buyer Intelligence
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                {pillar.keywordTheme} FAQ
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Direct answers to commercial, logistical, and technical manufacturing questions for {pillar.keywordTheme.toLowerCase()}.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-10 border border-charcoal/10 shadow-xs">
              <Accordion
                items={pillar.faqs.map((f, i) => ({
                  id: `faq-${pillar.slug}-${i}`,
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </section>

          {/* 6. RELATED MANUFACTURING SILOS (CURATED TOP 6) */}
          <section className="bg-[#FAF8F5] p-8 sm:p-12 border border-charcoal/10 space-y-6">
            <div className="space-y-1">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Related Manufacturing Capabilities
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal">
                Related Production Lines &amp; Technical Tools for {pillar.keywordTheme}
              </h3>
              <p className="text-xs text-charcoal-600 font-light">
                Explore complementary leather goods manufacturing divisions and B2B costing calculators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <Link
                href="/cost-calculator"
                className="bg-white p-4 border-2 border-cognac/40 hover:border-cognac hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-cognac transition-colors block">
                    Interactive B2B FOB Cost &amp; MOQ Calculator
                  </span>
                  <p className="text-[11px] text-charcoal-500 font-light line-clamp-2">
                    Calculate indicative unit prices, hide consumption (sq.ft), and DDP freight across 50 to 1,000+ unit tiers.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cognac font-bold flex items-center gap-1 mt-3">
                  Launch Calculator <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link
                href="/private-label"
                className="bg-white p-4 border-2 border-cognac/40 hover:border-cognac hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-cognac transition-colors block">
                    Complete OEM / Private Label Spec Matrix
                  </span>
                  <p className="text-[11px] text-charcoal-500 font-light line-clamp-2">
                    Compare leather grades, gauge thickness, hardware plating, and packaging options.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cognac font-bold flex items-center gap-1 mt-3">
                  View Spec Matrix <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              {siblingPillars.slice(0, 6).map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/${sibling.slug}`}
                  className="bg-white p-4 border border-charcoal/10 hover:border-cognac hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-cognac transition-colors block">
                      {sibling.keywordTheme}
                    </span>
                    <p className="text-[11px] text-charcoal-500 font-light line-clamp-2">
                      {sibling.metaDescription}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cognac font-medium flex items-center gap-1 mt-3">
                    View Specifications <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* 7. DIRECT FACTORY RFP INQUIRY FORM */}
          <section id="inquiry" className="w-full bg-white border border-charcoal/10 p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                  Direct Factory Desk · {pillar.keywordTheme}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                  Request a Quotation for {pillar.keywordTheme}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  Send your tech packs, target quantities, or reference links. Our export merchandising desk responds with tiered EUR, GBP, or USD unit pricing and BOM analysis within 12–24 business hours.
                </p>

                <div className="bg-[#FAF8F5] p-5 border border-charcoal/10 space-y-2.5 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>Bilateral NDA signed prior to tech pack review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>Full Bill of Materials &amp; sq. ft. leather yield costings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>5–7d (SLGs/belts) · 7–14d (bags/jackets) stock-leather sampling</span>
                  </div>
                </div>

                <div className="pt-2 space-y-1.5">
                  <p className="text-xs text-charcoal-500 font-light">Need an immediate chat with our master patternmaker?</p>
                  <div>
                    <a
                      href={COMPANY_INFO.whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cognac hover:underline"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp ({COMPANY_INFO.phone})
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:uniconexport@gmail.com"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-charcoal hover:text-cognac hover:underline"
                    >
                      <Mail className="w-4 h-4 text-cognac" /> uniconexport@gmail.com
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
