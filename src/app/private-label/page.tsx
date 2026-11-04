import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Palette,
  Cpu,
  Package,
  FileCheck,
  CheckCircle2,
  Sliders,
  Lock,
  ArrowRight,
  FileText
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { TechPackWorkflow } from "@/components/ui/TechPackWorkflow";
import { Accordion } from "@/components/ui/Accordion";
import {
  JsonLdScript,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/components/seo/JsonLdScript";
import {
  B2BManufacturingSpecs,
  generateB2BProductSpecsSchema,
} from "@/components/seo/B2BManufacturingSpecs";

export const metadata: Metadata = {
  title: "Private Label & OEM/ODM Leather Goods Manufacturing",
  description:
    "End-to-end custom OEM/ODM leather manufacturing in India for fashion brands, wholesalers, and private labels. 50–100 pc trial MOQs, custom hardware moulds, logo debossing, Pantone dyeing, and 5–14 day prototype sampling.",
  alternates: {
    canonical: "https://www.uniconleather.com/private-label",
  },
  openGraph: {
    title: "Private Label & OEM/ODM Leather Goods Manufacturing | UNICON LEATHER",
    description:
      "End-to-end custom OEM/ODM leather manufacturing for fashion brands, wholesalers, and private labels. 50–100 pc trial MOQs, LWG-audited partner tanneries, and batch EU REACH testing.",
    url: "https://www.uniconleather.com/private-label",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/private-label-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Private Label Leather Goods Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Label & OEM/ODM Leather Goods Manufacturing | UNICON LEATHER",
    description:
      "End-to-end custom OEM/ODM leather manufacturing for fashion brands, wholesalers, and private labels. 50–100 pc MOQs, LWG-audited partner tanneries, and EU REACH compliance.",
    images: ["https://www.uniconleather.com/images/private-label-hero.jpg"],
  },
  keywords: [
    "custom leather goods manufacturer",
    "private label leather bags manufacturer",
    "oem leather wallet factory",
    "bespoke leather accessories supplier",
    "contract leather goods manufacturing",
    "custom leather bags manufacturer",
    "private label leather tote bags",
    "oem leather backpacks factory",
    "custom leather small goods manufacturer",
    "contract leather manufacturing",
    "leather goods manufacturer USA",
    "leather goods manufacturer Europe"
  ],
};

export default function PrivateLabelPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Private Label OEM", url: "https://www.uniconleather.com/private-label" },
  ]);
  const steps = [
    {
      step: "01",
      title: "Concept & Technical Consultation",
      description: "Submit your hand sketches, moodboards, CAD drawings, or physical reference samples. We conduct a thorough technical manufacturability review and sign a mutual Non-Disclosure Agreement (NDA).",
      icon: Cpu,
    },
    {
      step: "02",
      title: "Pattern Engineering & BOM Costing",
      description: "Our patternmakers draft precision 2D paper and digital CAD pattern files. We prepare a transparent Bill of Materials (BOM) detailing leather yield, lining options, and hardware costings.",
      icon: Layers,
    },
    {
      step: "03",
      title: "Material Sourcing & Custom Tannages",
      description: "Select from full-grain bovine, calf nappa, vegetable-tanned, lambskin, or exotic embossed leathers. We formulate custom dye lots according to Pantone Matching System (PMS) swatches.",
      icon: Palette,
    },
    {
      step: "04",
      title: "Bespoke Hardware & Custom Moulds",
      description: "Development of custom 3D CNC zinc alloy or solid brass die moulds for locks, buckles, zipper pullers, and studs with laser-engraved or debossed brand insignias.",
      icon: Sparkles,
    },
    {
      step: "05",
      title: "Rapid Prototype Counter-Sampling",
      description: "We craft physical first-article prototypes within 7–14 business days, complete with chosen leather, edge finishes, and hardware, shipped directly via DHL/FedEx Express.",
      icon: FileCheck,
    },
    {
      step: "06",
      title: "Pre-Production Sample Sign-Off",
      description: "Upon receiving your feedback, we execute fine-tuning iterations until the 'Golden Sample' is approved and locked as the benchmark for mass manufacturing.",
      icon: CheckCircle2,
    },
    {
      step: "07",
      title: "Batch Manufacturing in Controlled Ateliers",
      description: "Full-scale production executed with strict batch traceability, precision clicker cutting, skiving, multi-layer Italian edge painting, and reinforced structural stitching.",
      icon: Sliders,
    },
    {
      step: "08",
      title: "AQL 2.5 Quality Control & Global Shipping",
      description: "100% in-line verification and AQL 2.5 final inspection. Finished goods are packed in custom retail boxes/dustbags and shipped under FOB, CIF, or DDP Incoterms.",
      icon: Package,
    },
  ];

  const oemFaqs = [
    {
      id: "oem-faq-1",
      question: "Can you manufacture leather bags and accessories from our tech packs or physical reference samples?",
      answer:
        "Yes. Our CAD pattern engineering desk works from Adobe Illustrator/PDF tech packs, 2D/3D CAD files, hand sketches with dimensions, or physical reference samples mailed to our Noida or Kolkata offices. We sign a bilateral Non-Disclosure Agreement (NDA) prior to reviewing proprietary designs and return a preliminary Bill of Materials (BOM) and tiered FOB/DDP quotation within 24–48 business hours.",
    },
    {
      id: "oem-faq-2",
      question: "What are the minimum order quantities (MOQs) for private-label vs. custom OEM production?",
      answer:
        "For private-label and stock-leather trial orders using our in-stock core hides (Black, Cognac, Espresso, Saddle Tan), our MOQ is 50 pieces per style for leather handbags, totes, briefcases, duffels, and jackets (25 pieces per color), and 100 pieces per style for wallets, cardholders, and belts. For custom Pantone drum-dyed hides, tannery drum minimums apply: 100 pieces per style for bags and 150–200 pieces per style for small leather goods.",
    },
    {
      id: "oem-faq-3",
      question: "What affects prototype sample cost, and is the sample fee credited toward bulk production?",
      answer:
        "Prototype counter-sample development ranges from $45–$75 USD for wallets/belts (5–7 business days) and $95–$160 USD for leather bags and outerwear (7–14 business days), plus actual DHL/FedEx express air courier charges. A custom brass logo debossing stamp costs $45–$65 USD (one-time). Sample development fees are 100% credited back to your commercial invoice when you confirm a qualifying bulk order (100+ bags or 200+ SLGs).",
    },
    {
      id: "oem-faq-4",
      question: "What are the tooling costs and MOQs for custom 3D branded metal hardware?",
      answer:
        "For brands using our stock solid cast brass or stainless steel fittings (with laser-engraved logos), hardware MOQs start at 50 pieces with no mold charge. For proprietary 3D CNC die-cast buckles, locks, or custom zipper pullers, one-time steel mold charges typically range from $180 to $350 USD with a hardware foundry run of 300–500 pieces (excess hardware is safely stored in our climate-controlled vault for your repeat production runs).",
    },
    {
      id: "oem-faq-5",
      question: "How do you distinguish factory quality checks from tannery certifications and chemical lab tests?",
      answer:
        "Unicon Leather is a cut-and-sew leather goods manufacturer. We conduct 4-stage internal QC and pre-shipment ISO 2859-1 AQL 2.5 / 4.0 physical inspections in-house. Our raw hides are procured from Leather Working Group (LWG) Gold and Silver-rated partner tanneries in Kolkata and Kanpur. When required by your destination market, we coordinate batch-specific third-party laboratory testing via SGS or Intertek for EU/UK REACH Annex XVII (azo dyes, Cr VI < 3 mg/kg, nickel release) and US California Proposition 65 compliance.",
    },
  ];

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={generateB2BProductSpecsSchema()} />
      <JsonLdScript schema={generateFaqSchema(oemFaqs)} />
      <div className="w-full bg-white pb-24">
        {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
        <section className="relative w-full !mt-0 min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/private-label-hero.jpg"
            alt="UNICON LEATHER - Custom OEM/ODM Private Label Leather Goods Manufacturing"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-14 pt-24">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border border-charcoal/10 shadow-lg space-y-4 text-left">
            <Breadcrumbs items={[{ label: "Private Label & OEM/ODM Services" }]} />

            <div className="inline-flex items-center gap-2.5 mt-1">
              <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-none shadow-xs">
                Custom Contract Manufacturing
              </span>
              <span className="text-[10px] sm:text-xs text-charcoal-500 font-mono tracking-widest uppercase font-medium">
                OEM / ODM Private Label
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15] tracking-tight">
              Bespoke Private Label & OEM/ODM Leather Manufacturing
            </h1>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light max-w-xl">
              Transforming your creative vision into market-ready luxury collections. Complete R&D, custom tooling moulds, leather tannage formulation, rapid counter-sampling, and dependable container export.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 flex-wrap">
              <Button href="#inquiry" variant="primary" size="md">
                Request a Quote
              </Button>
              <Button href="#b2b-specifications" variant="outline" size="md" className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
                Discuss Private Label Manufacturing
              </Button>
              <Button href="/catalogue-request" variant="outline" size="md" className="border-cognac text-cognac hover:bg-cognac hover:text-white">
                Request a Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 sm:space-y-32 mt-16 sm:mt-24">
        {/* 1.5 B2B ANSWER-FIRST SUMMARY & AI-PARSEABLE COMPARISON TABLES */}
        <B2BManufacturingSpecs />

        {/* 2. Overview & NDA Protection (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Confidentiality &amp; Precision
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              A Dedicated Manufacturing Arm for Your Brand
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              We understand that design exclusivity and intellectual property protection are paramount for international luxury and contemporary labels. We execute bilateral NDAs before reviewing tech packs and maintain strict segregation of custom hardware moulds.
            </p>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-cognac font-semibold text-xs uppercase tracking-[0.14em]">
                <Lock className="w-4 h-4" /> 100% Design Exclusivity Guaranteed
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Your custom hardware tooling, pattern silhouettes, and embossed brand insignias remain your exclusive property and will never be shared, repurposed, or displayed without explicit consent.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-none overflow-hidden shadow-lg border border-charcoal/10 bg-white group">
              <img
                src="/images/private-label-briefcase.png"
                alt="UNICON LEATHER - Bespoke Private Label Leather Briefcase Prototype"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Atelier Tooling Specimen Caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 border border-charcoal/10 shadow-xs">
                <div>
                  <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-semibold">Custom Tooling Specimen</span>
                  <span className="block font-serif text-xs sm:text-sm text-charcoal font-medium">Bespoke Full-Grain Executive Briefcase</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-charcoal-400">100% In-House</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8-Step Manufacturing Workflow (Pure White) */}
      <section className="w-full bg-white py-24 border-y border-charcoal/10" id="workflow">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cognac" size="sm">
              Step-By-Step Execution
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              The Private-Label Development Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light">
              A disciplined, milestone-driven process engineered for overseas buyers and strict retail delivery windows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="sampling">
            {steps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white p-6 sm:p-7 rounded-none border border-charcoal/10 shadow-xs space-y-3.5 flex flex-col justify-between hover:border-cognac hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-light text-cognac/80">{item.step}</span>
                      <IconComp className="w-4 h-4 text-charcoal-400" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-charcoal">{item.title}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Custom Branding & Hardware Capabilities (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="hardware">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[16/9] w-full rounded-none overflow-hidden shadow-lg border border-charcoal/10 bg-white group">
              <img
                src="/images/private-label-briefcase.png"
                alt="UNICON LEATHER - Custom Brass Hardware Tooling & Finished Leather Goods Execution"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Atelier Hardware & Tooling Specimen Caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 border border-charcoal/10 shadow-xs">
                <div>
                  <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-semibold">Custom Tooling &amp; Hardware</span>
                  <span className="block font-serif text-xs sm:text-sm text-charcoal font-medium">Forged Solid Brass Fittings &amp; Precision Edge Lacquer</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-charcoal-400">Atelier Standard</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <Badge variant="cognac" size="sm">
              Bespoke Branding Techniques
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Custom Logo Embossing, Hardware Tooling & Packaging
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              We offer comprehensive branding integration across every consumer touchpoint:
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Blind Heat Debossing & Foil Stamping:</strong> High-precision brass dies for clean 0.5mm blind deboss or Italian metallic gold/silver foil transfers.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Custom Hardware Moulds:</strong> 3D engraved solid brass, zinc alloy, and stainless steel hardware with brushed antique, gunmetal, or 24k gold PVD vacuum plating.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Luxury Retail Packaging:</strong> Organic unbleached cotton drawstring dustbags, custom branded rigid magnetic gift boxes, FSC-certified hangtags, and barcode application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Private Label & OEM Buyer FAQs */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-y border-charcoal/10" id="oem-faq">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-semibold block">
              OEM &amp; Private Label Buyer FAQ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Answers to Key Tech Pack, MOQ, Tooling &amp; Sampling Questions
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              Direct answers for brand founders, technical designers, and sourcing managers evaluating private-label or custom OEM production in India.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 border border-charcoal/10 shadow-xs">
            <Accordion items={oemFaqs} />
          </div>
        </div>
      </section>

      {/* 5. Inquiry Form (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="inquiry">
        {/* Fast-Track Tech Pack SLA Workflow */}
        <TechPackWorkflow className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cognac" size="sm">
              Initiate OEM Project
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Start Your Private Label / OEM Project
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              Share your sketches, CAD tech packs, or collection concepts. Our R&D engineering team will provide preliminary costing, leather swatch options, and sampling schedules within 12–24 business hours.
            </p>

            <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 space-y-2.5 text-xs">
              <h3 className="font-serif font-medium text-charcoal text-sm">
                Private Label &amp; OEM Tiered MOQ Guidance:
              </h3>
              <p className="text-charcoal-600">• Stock-Leather Trial Orders (Bags &amp; Briefcases): 50 pcs per style (25 pcs/color)</p>
              <p className="text-charcoal-600">• Custom Drum-Dyed Handbags, Totes &amp; Jackets: 100 pcs per style</p>
              <p className="text-charcoal-600">• Wallets, SLGs &amp; Bridle Belts: 100 pcs (Stock Trial) | 150–200 pcs (Custom Dye)</p>
              <p className="text-charcoal-600">• Custom 3D Hardware Mold Tooling: 300–500 pcs (stock solid brass &amp; YKK hardware from 50 pcs)</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BulkInquiryForm
              initialCategory="Custom Proprietary Tech Pack"
              inquiryType="private-label"
            />
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
