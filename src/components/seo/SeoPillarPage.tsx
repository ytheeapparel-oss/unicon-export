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
  Award
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

  // Filter matched products
  const matchingProducts = PRODUCTS.filter((p) =>
    pillar.categoryFilter.includes(p.category)
  ).slice(0, 8);

  // Other sibling pillars for internal linking
  const siblingPillars = Object.values(SEO_PILLARS).filter(
    (p) => p.slug !== pillar.slug
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
                  { label: "Home", href: "/" },
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> Low MOQ 100 Pcs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> LWG Certified Tanneries
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cognac" /> EU REACH & Prop 65
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
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">100 Pcs</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600 font-medium">Low Flexible MOQ</span>
              </div>
              <div className="sm:px-4 pt-3 sm:pt-0">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-charcoal">7–10 Days</span>
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

          {/* 1. PRODUCT SHOWCASE */}
          {matchingProducts.length > 0 && (
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                    Proven Factory Silhouettes
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                    Export Ready Samples &amp; Proven Prototypes
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light">
                    Available for immediate counter-sampling, private label rebranding, or bespoke material adaptation.
                  </p>
                </div>
                <Button href="/products" variant="outline" size="sm" className="border-charcoal/20">
                  Explore Entire 40+ Catalog <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
                Engineering &amp; Standards
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                Manufacturing Parameters &amp; Technical Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light">
                Transparent specifications tailored for international brand procurement managers, sourcing agents, and OEM buying houses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.specs.map((spec, idx) => (
                <div key={idx} className="bg-white p-6 border border-charcoal/10 shadow-2xs space-y-2">
                  <span className="text-[10px] font-mono uppercase text-cognac font-bold block">
                    0{idx + 1} // Parameter
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
                Atelier Standards
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                Why International Brands Source With Us
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Combining heritage Indian leather artistry with modern European edge-skiving tolerances and comprehensive international export logistics.
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
                Production Roadmap
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                From Design Tech Pack to Retail Delivery
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                A seamless 4-phase contract manufacturing workflow executed under strict non-disclosure protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">01</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">Design &amp; BOM</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Submit CAD sketches, physical samples, or tech packs. We draft precise 2D/3D cut patterns and comprehensive bill of materials.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">02</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">Prototype Sampling</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Physical counter-samples crafted with specified leathers, custom branded hardware moulds, and dispatched in 7–10 days.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">03</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">Precision Manufacturing</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Hydraulic hide cutting, master edge-skiving, multi-layer Italian edge painting, and computerized high-tensile stitching.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 p-7 space-y-3 shadow-2xs">
                <span className="font-serif text-2xl font-light text-cognac block">04</span>
                <h3 className="font-serif text-base font-semibold text-charcoal">AQL 2.5 &amp; Export</h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  100% pre-shipment quality audit reports, custom retail packaging, Certificate of Origin, and worldwide FOB/DDP shipping.
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
                Direct answers to essential commercial, logistical, and technical manufacturing questions.
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

          {/* 6. SIBLING PILLAR INTERLINKING MATRIX (TOPICAL SILO) */}
          <section className="bg-[#FAF8F5] p-8 sm:p-12 border border-charcoal/10 space-y-6">
            <div className="space-y-1">
              <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                Explore Related Manufacturing Silos
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal">
                Explore Our Complete B2B Leather Sourcing Silos
              </h3>
              <p className="text-xs text-charcoal-600 font-light">
                Discover specialized manufacturing capabilities across all leather product lines and contract services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {siblingPillars.map((sibling) => (
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
                  Direct Factory Desk
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                  Request a Commercial Manufacturing Quote
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  Send your tech packs, target quantities, or reference links. Our export merchandising desk will respond with tiered FOB/DDP unit pricing and BOM analysis within 12–24 hours.
                </p>

                <div className="bg-[#FAF8F5] p-5 border border-charcoal/10 space-y-2.5 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>Bilateral NDA signed prior to tech pack review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>Full Bill of Materials &amp; leather yield costings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                    <span>7–10 days physical counter-sample delivery</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-charcoal-500 font-light mb-2">Need an immediate chat with our master patternmaker?</p>
                  <a
                    href={COMPANY_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cognac hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp ({COMPANY_INFO.phone})
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
