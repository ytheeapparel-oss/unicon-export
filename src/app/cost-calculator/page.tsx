import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ShieldCheck, Globe, ArrowRight, FileCheck2, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { B2BCostCalculator } from "@/components/tools/B2BCostCalculator";
import { Accordion } from "@/components/ui/Accordion";
import {
  JsonLdScript,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/components/seo/JsonLdScript";
import { COMPANY_INFO } from "@/data/company";

const CANONICAL_URL = "https://www.uniconleather.com/cost-calculator";

export const metadata: Metadata = {
  title: "B2B Leather Bag & Jacket Manufacturing Cost Calculator (FOB, MOQ & DDP)",
  description:
    "Interactive B2B leather goods manufacturing cost calculator. Estimate FOB & DDP unit prices, leather hide yield (sq.ft), MOQ tiers (50–1,000+ pcs), and sampling lead times for handbags, totes, briefcases, jackets & wallets.",
  keywords: [
    "leather bag manufacturing cost calculator",
    "custom leather handbag cost to manufacture",
    "leather jacket OEM manufacturing price",
    "FOB price leather bags India",
    "how much does it cost to manufacture leather bags",
    "private label leather goods MOQ calculator",
    "leather wallet manufacturing unit cost",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Interactive B2B Leather Goods Manufacturing Cost, MOQ & Lead-Time Calculator",
    description:
      "Calculate indicative FOB & DDP unit costs, hide consumption in sq.ft, and bulk production timelines for custom leather handbags, jackets, briefcases, and wallets.",
    url: CANONICAL_URL,
    type: "website",
    siteName: "UNICON LEATHER",
    images: [
      {
        url: "https://www.uniconleather.com/images/private-label-hero.jpg",
        width: 1200,
        height: 630,
        alt: "UNICON LEATHER — B2B Leather Goods FOB Cost & MOQ Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Leather Manufacturing Cost & MOQ Calculator | UNICON LEATHER",
    description:
      "Instant FOB & DDP unit cost estimator for custom leather handbags, totes, briefcases, leather jackets, RFID wallets, and belts.",
    images: ["https://www.uniconleather.com/images/private-label-hero.jpg"],
  },
};

const CALCULATOR_FAQS = [
  {
    id: "calc-faq-1",
    question: "How is the unit cost of a custom leather bag or jacket calculated by a factory?",
    answer:
      "Factory unit cost (FOB) is determined by five primary BOM (Bill of Materials) components: (1) Leather hide consumption in square feet (including a 15–22% natural cutting wastage factor around hide blemishes), (2) Leather grade and tannage price per sq.ft (e.g., Milled Pebble vs. Vegetable-Tanned or Plongé Lambskin), (3) Hardware and zipper specification (Zinc Alloy vs. Solid Brass or 24K PVD + YKK Excella), (4) Benchcraft labor (0.4mm Fortuna skiving, 4-coat Italian Fenice edge painting, and stitch complexity), and (5) Export packaging and AQL 2.5 QC inspection.",
  },
  {
    id: "calc-faq-2",
    question: "What is the minimum order quantity (MOQ) for private label leather goods at Unicon Leather?",
    answer:
      "We offer a two-tier B2B MOQ framework: (1) 50 pieces per style (split across up to 2 stocked LWG-certified colors at 25 pcs/color) for emerging brands launching trial batches in handbags, briefcases, backpacks, duffels, or leather jackets, and (2) 100 pieces per style for custom Pantone drum-dyed hides. For small leather goods (wallets/cardholders) and belts, trial MOQs start at 100 pieces.",
  },
  {
    id: "calc-faq-3",
    question: "How much does physical prototype sampling cost and is it credited toward bulk orders?",
    answer:
      "Physical prototype counter-samples typically cost $75 to $180 per piece for bags/jackets (and $45 to $75 for wallets/belts) plus DHL/FedEx express courier charges, completed in 7 to 14 business days. Sample development fees are credited back toward a qualifying bulk production order (subject to style and volume confirmation).",
  },
  {
    id: "calc-faq-4",
    question: "What is the difference between FOB, CIF, and DDP pricing in the calculator?",
    answer:
      "FOB (Free On Board) covers all manufacturing, packaging, and Indian export customs clearance up to the departure port (Kolkata, Nhava Sheva, or Delhi Air Cargo). CIF adds ocean freight and marine insurance to your destination seaport. DDP (Delivered Duty Paid) is an all-inclusive door-to-door landed price covering air or sea freight, foreign customs brokerage, and import tariffs straight to your warehouse in the USA, Canada, UK, EU, Australia, or UAE.",
  },
  {
    id: "calc-faq-5",
    question: "How do US, Australian, and UAE brands save on import duties when manufacturing in India?",
    answer:
      "US brands avoid the punitive China Section 301 tariffs when importing Indian leather goods under HTS 4202/4203. Australian brands enjoy 0% duty-free imports under the India-Australia ECTA trade agreement, and UAE/Dubai brands enjoy 0% customs duty under the India-UAE CEPA treaty—both supported by our official Chamber of Commerce Certificate of Origin.",
  },
];

export default function CostCalculatorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Private Label & OEM", url: "https://www.uniconleather.com/private-label" },
    { name: "B2B Manufacturing Cost & MOQ Calculator", url: CANONICAL_URL },
  ]);

  const faqSchema = generateFaqSchema(
    CALCULATOR_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${CANONICAL_URL}#calculator`,
    name: "UNICON LEATHER B2B FOB Unit Cost, MOQ & Lead-Time Calculator",
    url: CANONICAL_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    description:
      "Interactive B2B leather goods manufacturing estimator for fashion brands and sourcing directors to calculate indicative FOB/DDP unit prices, leather hide yields, MOQs, and production lead times.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.legalName,
      url: "https://www.uniconleather.com",
    },
  };

  return (
    <>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={webAppSchema} />

      <div className="w-full bg-white text-charcoal pb-24">
        {/* HERO BANNER */}
        <section className="w-full bg-[#FAF8F5] border-b border-charcoal/10 pt-8 pb-14 sm:pb-20">
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Private Label & OEM", href: "/private-label" },
                { label: "B2B Cost & MOQ Calculator" },
              ]}
            />

            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-cognac/10 border border-cognac/20 text-cognac px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest font-semibold">
                <Calculator className="w-3.5 h-3.5" /> Interactive B2B Factory Costing Tool · 2026 Export Rates
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight leading-[1.15]">
                B2B Leather Goods Manufacturing Cost, Hide Yield &amp; MOQ Calculator
              </h1>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-3xl">
                Estimate factory-direct <strong>FOB, CIF, and DDP landed unit prices</strong> for custom leather handbags, totes, laptop briefcases, backpacks, weekender duffels, tailored leather jackets, RFID wallets, and bridle belts. Configure your silhouette, LWG-certified leather grade, hardware finish, and order volume below.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono text-charcoal-700">
                <span className="inline-flex items-center gap-1.5 bg-white border border-charcoal/15 px-3 py-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cognac" /> LWG Gold/Silver Hides
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-charcoal/15 px-3 py-1.5">
                  <Layers className="w-3.5 h-3.5 text-cognac" /> Trial MOQs from 50 Pcs
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-charcoal/15 px-3 py-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-cognac" /> EU REACH &amp; Prop 65 Included
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-charcoal/15 px-3 py-1.5">
                  <Globe className="w-3.5 h-3.5 text-cognac" /> 0% Duty Australia ECTA &amp; UAE CEPA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR COMPONENT */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-20">
          <B2BCostCalculator />
        </section>

        {/* ANSWER-FIRST REFERENCE MATRIX FOR AI SEARCH & SOURCING DIRECTORS */}
        <section className="w-full bg-[#FAF8F5] border-y border-charcoal/10 py-16 sm:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
                2026 Factory Benchmark Reference Table
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
                How Much Does It Cost to Manufacture Custom Leather Goods in India?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Below is Unicon Leather&apos;s baseline 2026 factory FOB cost matrix, average raw hide consumption (including cutting wastage), and standard minimum order quantities across our 8 primary export product categories.
              </p>
            </div>

            <div className="bg-white border border-charcoal/15 overflow-x-auto shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-charcoal text-white font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Product Category</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">HS Code</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Hide Yield (Sq.Ft)</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Trial MOQ</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Custom Dye MOQ</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Indicative FOB Range (USD)</th>
                    <th className="py-3.5 px-5 border-b border-charcoal-800">Sample Lead Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10">
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/leather-handbags" className="hover:text-cognac underline-offset-4 hover:underline">
                        Structured Leather Handbags
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.21.00</td>
                    <td className="py-3.5 px-5 font-mono">11 – 15 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$22.00 – $48.00</td>
                    <td className="py-3.5 px-5">7 – 12 Days</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]/60">
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/tote-bags" className="hover:text-cognac underline-offset-4 hover:underline">
                        Luxury Leather Totes &amp; Shoppers
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.21.00</td>
                    <td className="py-3.5 px-5 font-mono">12 – 16 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$18.50 – $38.00</td>
                    <td className="py-3.5 px-5">7 – 10 Days</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/laptop-and-business-bags" className="hover:text-cognac underline-offset-4 hover:underline">
                        Executive Laptop Briefcases
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.11.00</td>
                    <td className="py-3.5 px-5 font-mono">14 – 18 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$28.00 – $58.00</td>
                    <td className="py-3.5 px-5">10 – 14 Days</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]/60">
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/backpacks" className="hover:text-cognac underline-offset-4 hover:underline">
                        Commuter &amp; Heritage Backpacks
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.91.00</td>
                    <td className="py-3.5 px-5 font-mono">14 – 19 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$26.00 – $54.00</td>
                    <td className="py-3.5 px-5">10 – 14 Days</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/travel-bags" className="hover:text-cognac underline-offset-4 hover:underline">
                        Weekender Travel Duffels
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.91.00</td>
                    <td className="py-3.5 px-5 font-mono">20 – 26 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$38.00 – $75.00</td>
                    <td className="py-3.5 px-5">10 – 14 Days</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]/60">
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/leather-jackets" className="hover:text-cognac underline-offset-4 hover:underline">
                        Tailored Leather Jackets (Lamb/Cow)
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4203.10.00</td>
                    <td className="py-3.5 px-5 font-mono">32 – 42 sq.ft</td>
                    <td className="py-3.5 px-5">50 pcs (Graded XS–3XL)</td>
                    <td className="py-3.5 px-5">100 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$48.00 – $105.00</td>
                    <td className="py-3.5 px-5">10 – 14 Days</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/wallets-and-cardholders" className="hover:text-cognac underline-offset-4 hover:underline">
                        RFID Wallets &amp; Cardholders (SLG)
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4202.31.00</td>
                    <td className="py-3.5 px-5 font-mono">1.8 – 3.2 sq.ft</td>
                    <td className="py-3.5 px-5">100 pcs (2 colors)</td>
                    <td className="py-3.5 px-5">200 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$4.80 – $13.50</td>
                    <td className="py-3.5 px-5">5 – 8 Days</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]/60">
                    <td className="py-3.5 px-5 font-semibold text-charcoal">
                      <Link href="/products/leather-belts" className="hover:text-cognac underline-offset-4 hover:underline">
                        Full-Grain Bridle &amp; Dress Belts
                      </Link>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-charcoal-600">4203.30.00</td>
                    <td className="py-3.5 px-5 font-mono">2.2 – 3.5 sq.ft</td>
                    <td className="py-3.5 px-5">100 pcs (Graded)</td>
                    <td className="py-3.5 px-5">150 pcs / style</td>
                    <td className="py-3.5 px-5 font-mono font-semibold text-cognac">$5.50 – $14.50</td>
                    <td className="py-3.5 px-5">5 – 8 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 border border-charcoal/15">
              <div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Comparing Sourcing Hubs? See How India Stacks Up Against China, Vietnam &amp; Italy
                </h3>
                <p className="text-xs text-charcoal-600 font-light mt-1">
                  Review our side-by-side analysis of import tariffs, MOQ flexibility, LWG raw hide availability, and compliance.
                </p>
              </div>
              <Link
                href="/leather-sourcing-india-vs-china-vietnam-italy"
                className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-cognac px-5 py-3 text-xs font-mono uppercase tracking-wider shrink-0 transition-colors"
              >
                Read Country Comparison Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-16 sm:pt-24">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
                BOM Costing &amp; Procurement FAQs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
                Frequently Asked Questions About Leather Goods Manufacturing Costs
              </h2>
            </div>
            <Accordion items={CALCULATOR_FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
