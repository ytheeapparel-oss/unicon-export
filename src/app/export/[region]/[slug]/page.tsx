import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import {
  ShieldCheck,
  Globe,
  Truck,
  FileCheck,
  Layers,
  Award,
  Anchor,
  Plane,
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  Building2,
  ExternalLink,
} from "lucide-react";

import { EXPORT_HUBS, ExportHubConfig } from "@/data/exportHubs";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { TechPackWorkflow } from "@/components/ui/TechPackWorkflow";
import { JsonLdScript } from "@/components/seo/JsonLdScript";

interface PageProps {
  params: {
    region: string;
    slug: string;
  };
}

const CONSOLIDATED_EXPORT_REDIRECTS: Record<string, string> = {
  "usa/leather-goods-manufacturer-usa": "/en-us",
  "europe/private-label-leather-bags-uk-london": "/en-gb",
  "europe/leather-goods-manufacturer-germany": "/de",
  "europe/luxury-leather-atelier-france-paris": "/fr",
  "australia/leather-goods-manufacturer-australia": "/en-au",
};

export function generateStaticParams() {
  return Object.values(EXPORT_HUBS)
    .filter((hub) => !CONSOLIDATED_EXPORT_REDIRECTS[`${hub.region}/${hub.slug}`])
    .map((hub) => ({
      region: hub.region,
      slug: hub.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const key = `${params.region}/${params.slug}`;
  if (CONSOLIDATED_EXPORT_REDIRECTS[key]) {
    return {
      alternates: {
        canonical: `https://www.uniconleather.com${CONSOLIDATED_EXPORT_REDIRECTS[key]}`,
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const hub = EXPORT_HUBS[key];

  if (!hub) {
    return {
      title: "Export Sourcing Hub | UNICON LEATHER",
    };
  }

  const canonicalUrl = `https://www.uniconleather.com/export/${hub.region}/${hub.slug}`;

  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "UNICON LEATHER",
      images: [
        {
          url: "https://www.uniconleather.com/images/export-hero.png",
          width: 1200,
          height: 630,
          alt: hub.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.metaTitle,
      description: hub.metaDescription,
      images: ["https://www.uniconleather.com/images/export-hero.png"],
    },
  };
}

export default function ExportHubPage({ params }: PageProps) {
  const key = `${params.region}/${params.slug}`;
  if (CONSOLIDATED_EXPORT_REDIRECTS[key]) {
    permanentRedirect(CONSOLIDATED_EXPORT_REDIRECTS[key]);
  }

  const hub = EXPORT_HUBS[key];

  if (!hub) {
    notFound();
  }

  const baseUrl = "https://www.uniconleather.com";
  const canonicalUrl = `${baseUrl}/export/${hub.region}/${hub.slug}`;

  // Complete JSON-LD Schema Graph according to international B2B specification
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: COMPANY_INFO.legalName,
        url: baseUrl,
        logo: `${baseUrl}/favicon.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "743502",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "International B2B Sales & Export Desk",
          telephone: COMPANY_INFO.phone,
          email: COMPANY_INFO.primaryEmail,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: hub.h1,
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        serviceType: "Contract Leather Goods Manufacturing",
        areaServed: hub.targetMarket,
        description: hub.metaDescription,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Export",
            item: `${baseUrl}/export`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: hub.targetMarket,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: hub.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  // Filter curated products based on hub's categoryFilter
  const matchingProducts = PRODUCTS.filter((p) =>
    hub.categoryFilter.some(
      (catKey) =>
        p.category.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase().includes(catKey.toLowerCase()) ||
        p.category.toLowerCase().includes(catKey.toLowerCase().replace("-", " "))
    )
  ).slice(0, 8);

  const consolidatedExportKeys = new Set([
    "usa/leather-goods-manufacturer-usa",
    "europe/private-label-leather-bags-uk-london",
    "europe/leather-goods-manufacturer-germany",
    "europe/luxury-leather-atelier-france-paris",
    "australia/leather-goods-manufacturer-australia",
  ]);

  // Sibling hubs for cross-regional directory (excluding consolidated 301-redirected hubs)
  const siblingHubs = Object.values(EXPORT_HUBS).filter(
    (h) => `${h.region}/${h.slug}` !== key && !consolidatedExportKeys.has(`${h.region}/${h.slug}`)
  );

  return (
    <>
      <JsonLdScript schema={schemaGraph} />

      <div className="w-full flex flex-col items-center bg-[#FDFBF7] text-charcoal">
        {/* HERO SECTION */}
        <section className="w-full !mt-0 !pt-0 bg-[#FAF8F5] border-b border-charcoal/10 relative overflow-hidden">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 pb-14 sm:pb-20">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Export", href: "/export" },
                  { label: hub.region.toUpperCase(), href: `/export/${hub.region}/${hub.slug}` },
                  { label: hub.targetMarket, href: `/export/${hub.region}/${hub.slug}` },
                ]}
              />
            </div>

            <div className="max-w-4xl">
              {/* Kicker Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cognac/10 text-cognac font-mono text-xs uppercase tracking-wider mb-5 border border-cognac/20">
                <Globe className="w-3.5 h-3.5" />
                <span>{hub.kicker}</span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-[1.15]">
                {hub.h1}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-8 max-w-3xl">
                {hub.subtitle}
              </p>

              {/* High-Intent Value Metric Badges */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/15 text-xs text-charcoal-700 font-medium shadow-xs">
                  <Award className="w-3.5 h-3.5 text-cognac" />
                  LWG Partner Tannery Hides
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/15 text-xs text-charcoal-700 font-medium shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-cognac" />
                  Batch REACH &amp; Prop 65 Testable
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/15 text-xs text-charcoal-700 font-medium shadow-xs">
                  <PackageCheck className="w-3.5 h-3.5 text-cognac" />
                  Low MOQ: 50–100 Pcs / Style
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/15 text-xs text-charcoal-700 font-medium shadow-xs">
                  <Truck className="w-3.5 h-3.5 text-cognac" />
                  DDP, FOB &amp; CIF Freight
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-cognac px-6 py-3.5 font-sans text-sm font-semibold tracking-wide uppercase transition-colors shadow-sm"
                >
                  Request Production Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/catalogue-request"
                  className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-charcoal/5 border border-charcoal/20 px-6 py-3.5 font-sans text-sm font-medium tracking-wide transition-colors"
                >
                  Request Lookbook & Swatches
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: STRATEGIC SOURCING BRIDGE */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
              Bilateral Trade Advantages
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              {hub.strategicBridgeTitle}
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              {hub.strategicBridgeText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hub.strategicBridgeBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-charcoal/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-cognac/10 text-cognac flex items-center justify-center font-serif font-bold text-lg mb-5">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2.5">
                    {bullet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: CHEMICAL & ETHICAL COMPLIANCE */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10 bg-[#FAF8F5]">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
              Audits, Testing & Traceability
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              {hub.complianceTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hub.complianceBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-charcoal/10 shadow-xs"
              >
                <div className="inline-flex items-center gap-2 text-cognac font-sans text-xs uppercase tracking-wider font-semibold mb-3">
                  <CheckCircle2 className="w-4 h-4 text-cognac" />
                  Standard Protocol
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2.5">
                  {bullet.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {bullet.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TECHNICAL TRADE & LOGISTICS SPECIFICATIONS TABLE */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10">
          <div className="max-w-4xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
              Operational Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              {hub.logisticsTableTitle}
            </h2>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              Standard operating procedures for direct export from Kolkata / Delhi NCR to {hub.targetMarket}.
            </p>
          </div>

          <div className="bg-white border border-charcoal/15 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-charcoal text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-6 border-b border-charcoal-800 w-1/3">
                      Export Dimension / Attribute
                    </th>
                    <th className="py-3.5 px-6 border-b border-charcoal-800 w-2/3">
                      Factory Specification & Standard Procedure
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10">
                  {hub.logisticsRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]/60 hover:bg-cognac/5"}
                    >
                      <td className="py-4 px-6 font-semibold text-charcoal">
                        {row.attribute}
                      </td>
                      <td className="py-4 px-6 text-charcoal/80 leading-relaxed font-sans">
                        {row.specification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TECH PACK PROTOTYPING WORKFLOW */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10 bg-[#FAF8F5]">
          <div className="max-w-4xl mb-10 text-center mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
              Prototyping &amp; Sampling Cycle · {hub.targetMarket}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Counter-Sample Development for {hub.targetMarket} Brands (5–14 Business Days)
            </h2>
            <p className="text-sm text-charcoal/75 leading-relaxed max-w-2xl mx-auto">
              Upload your Adobe Illustrator tech pack or CAD sketch. Stock-leather prototypes ship via DHL Express in 5–7 business days for wallets/belts and 7–14 business days for handbags/jackets (+7–10 business days when custom Pantone drum-dyed hides or custom 3D brass hardware molds are required).
            </p>
          </div>

          <TechPackWorkflow />
        </section>

        {/* SECTION 4: MANUFACTURING CAPABILITIES */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
              Benchcraft & Engineering
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              {hub.capabilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hub.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-charcoal/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-cognac/10 text-cognac flex items-center justify-center font-mono text-xs font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CURATED SILHOUETTES */}
        {matchingProducts.length > 0 && (
          <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10 bg-[#FAF8F5]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
                  Production Silhouettes
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal">
                  Curated Catalog for {hub.targetMarket} Brands
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cognac hover:underline mt-4 md:mt-0"
              >
                Explore Full 50+ Silhouette Catalog
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 6: FAQ ACCORDION */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-20 border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
                Frequently Answered Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
                Sourcing & Exporting to {hub.targetMarket}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70">
                Transparent answers regarding customs duty structures, compliance documentation, and order minimums.
              </p>
            </div>

            <Accordion
              items={hub.faqs.map((faq, i) => ({
                id: `export-faq-${i}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>

        {/* SECTION 7: CROSS-REGIONAL DIRECTORY */}
        <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 border-b border-charcoal/10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
              International Trade Corridors & Regional Desks
            </h3>
            <p className="text-xs text-charcoal/70 mb-6">
              Explore dedicated manufacturing gateways for our primary international export destinations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siblingHubs.map((sibling) => (
                <Link
                  key={`${sibling.region}/${sibling.slug}`}
                  href={`/export/${sibling.region}/${sibling.slug}`}
                  className="p-4 border border-charcoal/10 hover:border-cognac hover:bg-[#FAF8F5] transition-all flex items-start justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cognac tracking-wider block mb-1">
                      {sibling.region.toUpperCase()} · {sibling.targetMarket}
                    </span>
                    <span className="text-xs font-semibold text-charcoal group-hover:text-cognac transition-colors block">
                      {sibling.metaTitle.split("|")[0].trim()}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-charcoal/40 group-hover:text-cognac shrink-0 ml-2 mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: BULK INQUIRY & TECH PACK SUBMISSION FORM */}
        <section id="inquiry" className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block mb-2">
                Factory Direct Sourcing Desk
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                Initiate Your Production Inquiry ({hub.targetMarket})
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 max-w-xl mx-auto">
                Submit your tech pack, target quantities, and leather preferences. Our export engineering team responds with complete FOB/CIF/DDP pricing within 24 to 48 hours. Direct email: <a href="mailto:uniconexport@gmail.com" className="text-cognac font-medium hover:underline">uniconexport@gmail.com</a>
              </p>
            </div>

            <div className="bg-white p-6 sm:p-10 border border-charcoal/15 shadow-sm">
              <BulkInquiryForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
