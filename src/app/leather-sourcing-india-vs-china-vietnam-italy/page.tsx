import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  CheckCircle2,
  Scale,
  ArrowRight,
  Award,
  TrendingDown,
  Layers,
  Calculator,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import {
  JsonLdScript,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/components/seo/JsonLdScript";
import { COMPANY_INFO } from "@/data/company";

const CANONICAL_URL =
  "https://www.uniconleather.com/leather-sourcing-india-vs-china-vietnam-italy";

export const metadata: Metadata = {
  title:
    "Leather Goods Sourcing Guide: India vs. China vs. Vietnam vs. Italy (2026 B2B Matrix)",
  description:
    "Comprehensive B2B comparison of leather bag, jacket & wallet manufacturing across India, China, Vietnam, and Italy/Turkey. Compare US/EU/AU tariffs, LWG raw hide access, MOQs (50 vs 500 pcs), FOB costs, and REACH compliance.",
  keywords: [
    "China plus one leather goods manufacturing",
    "leather goods manufacturer India vs China",
    "leather bag manufacturing India vs Vietnam",
    "Italian vs Indian leather handbag factory",
    "India Australia ECTA 0 duty leather sourcing",
    "India UAE CEPA duty free leather manufacturing",
    "low MOQ 50 pcs leather factory comparison",
    "FOB cost India vs China leather handbags",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title:
      "India vs. China vs. Vietnam vs. Italy: Global Leather Goods Manufacturing Comparison (2026)",
    description:
      "Side-by-side procurement matrix for fashion brands comparing raw hide supply, import tariffs, MOQ flexibility, artisan benchcraft, and landed DDP costs.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "UNICON LEATHER",
    images: [
      {
        url: "https://www.uniconleather.com/images/craftsmanship-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Global Leather Goods Sourcing Comparison — India vs China vs Vietnam vs Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leather Goods Sourcing: India vs. China vs. Vietnam vs. Italy | UNICON LEATHER",
    description:
      "Compare tariffs, LWG hide access, MOQs, and landed costs across global leather manufacturing hubs.",
    images: ["https://www.uniconleather.com/images/craftsmanship-hero.jpg"],
  },
};

const COMPARISON_FAQS = [
  {
    id: "comp-faq-1",
    question:
      "Why are US, European, and Australian fashion brands shifting leather bag production from China to India?",
    answer:
      "Three structural factors drive the shift from China to India for genuine leather goods: (1) Domestic Raw Hide Supply — India is the world's 2nd largest producer of footwear and leather garments with massive domestic LWG Gold/Silver bovine, buffalo, and ovine raw material reserves, whereas China and Vietnam must import most full-grain hides; (2) Tariff Arbitrage — Indian leather goods avoid punitive US Section 301 tariffs on China and qualify for 0% duty in Australia (ECTA) and the UAE (CEPA); and (3) Low MOQ Artisan Flexibility — Indian ateliers like Unicon Leather support 50–100 piece per style MOQs with hand-skived, hand-painted benchcraft, whereas Chinese and Vietnamese assembly lines typically require 300–1,000+ units per SKU.",
  },
  {
    id: "comp-faq-2",
    question:
      "How does Indian leather craftsmanship compare to Italian pelletteria and Turkish factories?",
    answer:
      "Modern export ateliers in India (such as Unicon Leather in Kolkata and Delhi NCR) use the exact same German Fortuna 0.4mm skiving machines, Durkopp Adler heavy-duty stitchers, and imported Italian Fenice/Stahl edge-painting chemistry used in Florence and Milan—while delivering a 45% to 65% lower FOB unit cost than Italian factories and 25% to 35% lower cost than Turkish manufacturers.",
  },
  {
    id: "comp-faq-3",
    question:
      "Why is Vietnam better known for synthetic/nylon backpacks while India leads in genuine full-grain leather?",
    answer:
      "Vietnam has world-class mega-factories for high-volume technical nylon, polyester, and athletic footwear (requiring 1,000–3,000+ piece MOQs), but lacks a deep domestic cattle/buffalo tanning ecosystem. India possesses a centuries-old, vertically integrated tanning-to-stitching ecosystem in clusters like Kolkata (CLC Bantala), Chennai, Kanpur, and Noida—eliminating raw hide import delays and middleman markups.",
  },
  {
    id: "comp-faq-4",
    question:
      "WhichIndian leather manufacturing cluster is best for handbags, wallets, and leather jackets?",
    answer:
      "Each Indian cluster has distinct strengths: Kolkata (Calcutta Leather Complex, Bantala) is the global capital for turned-edge luxury handbags, wallets/SLGs, and fine calf/vegetable-tanned goods; Delhi NCR / Noida excels in tailored lambskin leather jackets, high-fashion garments, and rapid buyer showroom coordination; Chennai/Ambur specializes in finished cow/goat leathers and footwear; and Kanpur is renowned for heavy bridle leather, saddlery, and rugged belts. Unicon Leather combines a 4-plot factory atelier in Bantala, Kolkata with corporate R&D and outerwear coordination in Noida (Delhi NCR).",
  },
  {
    id: "comp-faq-5",
    question:
      "Can Indian leather manufacturers meet strict EU REACH, California Prop 65, and LWG traceability audits?",
    answer:
      "Yes. Unicon Leather sources 100% of its hides from Leather Working Group (LWG) Gold and Silver-rated tanneries equipped with Zero Liquid Discharge (ZLD) / Common Effluent Treatment Plants (CETP). Every export batch can be certified by SGS, TÜV, or Intertek for EU REACH Annex XVII (Chromium VI < 3 ppm, AZO-free, EN 1811 nickel-free) and California Proposition 65 compliance.",
  },
];

export default function LeatherSourcingComparisonPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    {
      name: "Leather Quality & Sourcing Guide",
      url: "https://www.uniconleather.com/leather-quality-sourcing-guide",
    },
    { name: "India vs. China vs. Vietnam vs. Italy Comparison", url: CANONICAL_URL },
  ]);

  const faqSchema = generateFaqSchema(
    COMPARISON_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_URL}#article`,
    headline:
      "Global Leather Goods Sourcing Comparison (2026): India vs. China vs. Vietnam vs. Italy",
    description:
      "Data-driven B2B procurement analysis comparing leather goods manufacturing across India, China, Vietnam, and Italy/Turkey across raw hide vertical integration, import tariffs, MOQ thresholds, and chemical compliance.",
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.legalName,
      url: "https://www.uniconleather.com",
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.legalName,
      url: "https://www.uniconleather.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.uniconleather.com/favicon.svg",
      },
    },
    datePublished: "2026-01-15",
    dateModified: "2026-10-28",
    mainEntityOfPage: CANONICAL_URL,
  };

  return (
    <>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={articleSchema} />

      <div className="w-full bg-white text-charcoal pb-24">
        {/* 1. HERO SECTION */}
        <section className="w-full bg-[#FAF8F5] border-b border-charcoal/10 pt-8 pb-14 sm:pb-20">
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Sourcing Guide", href: "/leather-quality-sourcing-guide" },
                { label: "India vs. China vs. Vietnam vs. Italy" },
              ]}
            />

            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-cognac/10 border border-cognac/20 text-cognac px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest font-semibold">
                <Scale className="w-3.5 h-3.5" /> 2026 Global B2B Procurement Intelligence · China+1 Strategy
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight leading-[1.15]">
                Leather Goods Manufacturing: India vs. China vs. Vietnam vs. Italy (2026 B2B Comparison)
              </h1>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-3xl">
                An objective, engineering-level comparison for fashion brand founders, creative directors, and retail procurement teams evaluating where to manufacture <strong>custom leather handbags, totes, briefcases, leather jackets, RFID wallets, and belts</strong> in 2026.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/cost-calculator"
                  className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-cognac px-5 py-3 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5" /> Launch FOB Cost Calculator
                </Link>
                <a
                  href="#sourcing-rfq"
                  className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-charcoal/5 border border-charcoal/20 px-5 py-3 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  Request Side-by-Side BOM Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST EXECUTIVE SUMMARY (GEO CITATION BLOCK) */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-20 border-b border-charcoal/10">
          <div className="bg-[#FAF8F5] border-l-4 border-cognac p-6 sm:p-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-bold block">
              Executive Procurement Verdict (Answer-First Summary)
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
              Which Country Is Best for Manufacturing Genuine Leather Goods in 2026?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              For brands producing <strong>100% genuine full-grain, top-grain, vegetable-tanned, or lambskin leather goods</strong> at order volumes between <strong>50 and 2,500 units per style</strong>, <strong>India</strong> delivers the strongest landed value proposition in 2026. Unlike <strong>China</strong> (which faces punitive US Section 301 tariffs and rising labor costs) or <strong>Vietnam</strong> (which relies on imported hides and enforces 500–1,000+ piece factory MOQs geared toward synthetic/nylon bags), India possesses the world&apos;s largest domestic raw hide reserve with over 250+ LWG-certified tanneries. Compared to <strong>Italy and Turkey</strong>, top-tier Indian export ateliers like <strong>UNICON LEATHER</strong> utilize identical German Fortuna 0.4mm skiving machinery and Italian Fenice edge-painting chemistry at a <strong>45% to 65% lower FOB unit cost</strong>, while unlocking <strong>0% import duty</strong> for Australian (ECTA) and UAE (CEPA) buyers.
            </p>
          </div>
        </section>

        {/* 3. MASTER 4-REGION COMPARISON MATRIX */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 sm:py-20 border-b border-charcoal/10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
              Head-to-Head Sourcing Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
              India vs. China vs. Vietnam vs. Italy / Turkey: 10-Point Benchmark
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Direct comparison across material supply chains, MOQs, tariff regimes, benchcraft tolerances, and compliance.
            </p>
          </div>

          <div className="bg-white border border-charcoal/15 overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[920px]">
              <thead>
                <tr className="bg-charcoal text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-4 px-5 border-b border-charcoal-800 w-[20%]">
                    Procurement Dimension
                  </th>
                  <th className="py-4 px-5 border-b border-cognac bg-cognac text-white w-[22%]">
                    🇮🇳 India (Unicon Leather)
                  </th>
                  <th className="py-4 px-5 border-b border-charcoal-800 w-[19%]">
                    🇨🇳 China (Guangzhou / Dongguan)
                  </th>
                  <th className="py-4 px-5 border-b border-charcoal-800 w-[19%]">
                    🇻🇳 Vietnam (HCMC / Hanoi)
                  </th>
                  <th className="py-4 px-5 border-b border-charcoal-800 w-[20%]">
                    🇮🇹 Italy / 🇹🇷 Turkey
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                <tr>
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    1. Domestic Raw Hide Supply
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">Abundant Domestic Supply:</strong> World&apos;s largest bovine, buffalo, goat &amp; sheep inventory; zero raw-hide import delay.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    High import dependency for premium full-grain cow/calf hides; heavy focus on PU/split leather.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    80%+ of finished full-grain leather must be imported from India, Italy, or Brazil.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    World-famous tanneries (Tuscany/Bursa), but extremely high raw hide and energy costs.
                  </td>
                </tr>

                <tr className="bg-[#FAF8F5]/40">
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    2. Minimum Order Quantity (MOQ)
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">50 – 100 Pcs / Style:</strong> Ideal for D2C capsules, boutique luxury labels, and seasonal test drops.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    300 – 500 pcs per style for genuine leather (lower only for stock PU/catalog items).
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    500 – 1,500+ pcs per style; factories built for mass assembly lines.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    50 – 150 pcs, but with high sample/pattern setup surcharges (€800+ per style).
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    3. Indicative Handbag FOB Cost
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-mono font-semibold text-cognac border-x border-cognac/20">
                    $22.00 – $45.00 USD
                  </td>
                  <td className="py-4 px-5 font-mono text-charcoal-700">
                    $28.00 – $55.00 USD (plus US tariffs)
                  </td>
                  <td className="py-4 px-5 font-mono text-charcoal-700">
                    $26.00 – $52.00 USD (at 500+ MOQ)
                  </td>
                  <td className="py-4 px-5 font-mono text-charcoal-700">
                    €65.00 – €145.00+ EUR ($70–$160)
                  </td>
                </tr>

                <tr className="bg-[#FAF8F5]/40">
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    4. US Import Tariff Exposure (HTS 4202)
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">Standard MFN Rate Only:</strong> Exempt from China Section 301 punitive tariffs.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Subject to base MFN duty <strong>+ 25% Section 301 punitive tariff</strong> (30%+ total landed tax).
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Standard MFN rate, but strict US CBP transshipment scrutiny.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Standard MFN rate on high base invoice value (increasing total dollar duty paid).
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    5. Australia &amp; UAE Duty Treaties
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">0% Duty (Australia ECTA &amp; UAE CEPA):</strong> Official Certificate of Origin waives 5% import tariff.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    5% standard GCC tariff in UAE; ChAFTA rules apply in Australia.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    AANZFTA for Australia (subject to strict regional hide origin rules); 5% in UAE.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    5% import tariff in both Australia and UAE/GCC.
                  </td>
                </tr>

                <tr className="bg-[#FAF8F5]/40">
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    6. Core Material Specialization
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">100% Genuine Leather Mastery:</strong> Full-grain veg-tan, calf nappa, pull-up, bridle &amp; plongé lambskin jackets.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    PU vegan leather, microfiber, complex fast-fashion hardware, and split-leather mass retail.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Technical ballistic nylon, Cordura backpacks, canvas-trimmed sports gear, and athletic shoes.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Ultra-luxury haute couture calfskin, exotic skins, and artisanal small-batch pelletteria.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    7. Benchcraft &amp; Edge Finishing
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">0.4mm Fortuna Skiving + Fenice Ink:</strong> Generational hand-turning, saddle stitching &amp; 4-coat edge lacquer.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Fast conveyor-line assembly; edge paint often applied thickly in 1–2 rapid coats.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Industrial binding-tape seams; fewer master artisans trained in turned-edge maroquinerie.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Benchmark artisanal edge inking and filettatura creasing.
                  </td>
                </tr>

                <tr className="bg-[#FAF8F5]/40">
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    8. LWG &amp; Chemical Compliance
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">LWG Gold/Silver + EU REACH + Prop 65:</strong> SGS/TÜV verified Cr VI &lt;3ppm, AZO-free &amp; ZLD effluent plants.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Variable across sub-suppliers; requires strict third-party auditing to prevent restricted solvent use.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Strong social compliance in tier-1 plants; traceability depends on origin of imported hides.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    Native EU REACH compliance (Italy); LWG certified tanneries.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-charcoal">
                    9. Prototype Sample Turnaround
                  </td>
                  <td className="py-4 px-5 bg-[#FAF8F5] font-medium text-charcoal border-x border-cognac/20">
                    <strong className="text-cognac">7 – 14 Business Days:</strong> Direct English-speaking CAD pattern engineers &amp; in-house leather library.
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    10 – 21 days (longer if custom full-grain leather must be sourced externally).
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    21 – 35 days (due to imported leather customs clearance for sampling).
                  </td>
                  <td className="py-4 px-5 text-charcoal-700">
                    14 – 28 days (paused during August Ferragosto &amp; holiday closures).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. INDIAN LEATHER CLUSTER BREAKDOWN (KOLKATA VS NOIDA VS CHENNAI VS KANPUR) */}
        <section className="w-full bg-[#FAF8F5] border-b border-charcoal/10 py-16 sm:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
                Inside India&apos;s Leather Ecosystem
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
                How Unicon Leather Combines Kolkata&apos;s Bag Atelier with Noida&apos;s Outerwear Hub
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                India is not a monolith—different regional clusters specialize in specific tannages and silhouettes. Unicon Leather operates across India&apos;s two premier export corridors to give international brands single-window access to bags, SLGs, belts, and leather garments:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-7 border-2 border-cognac shadow-xs space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-cognac text-white px-2.5 py-1 font-bold inline-block">
                  Unicon Primary Factory
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  1. Kolkata (CLC Bantala Cluster)
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  <strong>Global Capital for Handbags &amp; SLGs:</strong> Home to our 4-plot factory (Plots 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex). Renowned for European-trained turned-edge maroquinerie, vegetable-tanned totes, laptop briefcases, and ultra-slim RFID wallets.
                </p>
              </div>

              <div className="bg-white p-7 border-2 border-cognac shadow-xs space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-cognac text-white px-2.5 py-1 font-bold inline-block">
                  Unicon Corporate &amp; Garment HQ
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  2. Noida / Delhi NCR Cluster
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  <strong>Premier Leather Jacket &amp; Buying Hub:</strong> Home to our Sector-106 Noida corporate office. Specializes in drum-dyed plongé lambskin outerwear, goat suede bombers, high-fashion boutiques, and rapid air cargo dispatch via IGI Airport (DEL).
                </p>
              </div>

              <div className="bg-white p-7 border border-charcoal/12 shadow-2xs space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-charcoal/10 text-charcoal px-2.5 py-1 font-semibold inline-block">
                  Tannery Supply Partner
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  3. Chennai / Ranipet / Ambur
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  <strong>Finished Calf, Goat &amp; Nappa Tannages:</strong> Southern India&apos;s LWG Gold-rated tanning belt, supplying ultra-fine drum-dyed calfskin, glazed kidskin, and lambskin linings directly into our Kolkata and Noida cutting floors.
                </p>
              </div>

              <div className="bg-white p-7 border border-charcoal/12 shadow-2xs space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-charcoal/10 text-charcoal px-2.5 py-1 font-semibold inline-block">
                  Heavy Bridle &amp; Harness Partner
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  4. Kanpur Heavy Leather Belt
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  <strong>Thick Vegetable-Tanned &amp; Bridle Hides:</strong> Specializes in 3.2mm–4.2mm full-grain buffalo and heavy harness cowhide used in our hand-burnished bridle belts, rugged saddle bags, and equestrian accessories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-24 border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
                Global Sourcing Intelligence FAQs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
                Key Questions When Transitioning Production to India
              </h2>
            </div>
            <Accordion items={COMPARISON_FAQS} />
          </div>
        </section>

        {/* 6. DIRECT RFQ FORM */}
        <section
          id="sourcing-rfq"
          className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-16 sm:pt-24 scroll-mt-24"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
                Benchmark Your Current Factory Pricing
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal">
                Send Your Tech Pack for a Comparative India FOB / DDP Quote
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-2xl mx-auto">
                Currently manufacturing in China, Vietnam, Turkey, or Europe? Share your target specs or existing FOB target price—our engineering desk will prepare a confidential side-by-side costing and counter-sample proposal within 24 hours.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 sm:p-10 border border-charcoal/15">
              <BulkInquiryForm
                initialProduct="Country Comparison Inquiry (Benchmarking India OEM/ODM)"
                inquiryType="private-label"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
