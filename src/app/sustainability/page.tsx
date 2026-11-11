import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Recycle,
  Droplets,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  TreeDeciduous,
  FileCheck,
  Leaf
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLdScript, generateBreadcrumbSchema, generateFaqSchema } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "Sustainability & Responsible Sourcing | Ethical Leather Goods Manufacturing",
  description:
    "Verifiable sustainability practices at UNICON LEATHER: hides procured from LWG-audited partner tanneries, chrome-free vegetable tannages, zero-waste cutting yield optimization, and batch-level EU/UK REACH & Prop 65 chemical testing.",
  alternates: {
    canonical: "https://www.uniconleather.com/sustainability",
  },
  openGraph: {
    title: "Sustainability & Responsible Sourcing | UNICON LEATHER",
    description:
      "Hides procured from LWG-audited partner tanneries, chrome-free vegetable tanning, zero-waste cutting yield optimization, and batch-verified EU REACH chemical safety.",
    url: "https://www.uniconleather.com/sustainability",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/sustainability-hero.png",
        width: 1200,
        height: 630,
        alt: "Sustainable Leather Goods Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability & Responsible Sourcing | UNICON LEATHER",
    description:
      "Hides procured from LWG-audited partner tanneries, chrome-free vegetable tanning, zero-waste cutting yield optimization, and batch-verified EU REACH chemical safety.",
    images: ["https://www.uniconleather.com/images/sustainability-hero.png"],
  },
  keywords: [
    "EUDR compliant leather goods manufacturer",
    "LWG audited partner tannery leather bags",
    "EU REACH Annex XVII leather compliance",
    "California Prop 65 tested leather goods",
    "vegetable tanned leather bag manufacturer",
    "chrome free tanned leather goods India",
    "traceable leather hide sourcing B2B",
    "SEDEX SMETA open audit policy factory",
    "CAD nesting zero waste leather cutting",
    "plastic free compostable leather packaging",
    "sustainable genuine leather manufacturer India"
  ],
};

const SUSTAINABILITY_FAQS = [
  {
    question: "Is Unicon Leather a tannery or a cut-and-sew leather goods manufacturer?",
    answer:
      "Unicon Leather is a specialized cut-and-sew leather goods manufacturer and Government-registered Indian exporter (operating under DGFT Importer-Exporter Code and Council for Leather Exports frameworks), not a wet-processing tannery. We procure finished full-grain, top-grain, and vegetable-tanned hides from partner tanneries in India (Kolkata, Kanpur, Chennai) and Italy that hold active Leather Working Group (LWG) environmental audit ratings.",
  },
  {
    question: "Can buyers request LWG tannery certificates and REACH lab test reports?",
    answer:
      "Yes. For buyers requiring documented traceability, we allocate hides from LWG-audited partner tanneries and provide lot-linked tannery reference documentation. Chemical safety compliance (EU/UK REACH Annex XVII for Chromium VI < 3 mg/kg, Azo-free dyes, Nickel release, and US California Prop 65) is verified on a per-batch basis through accredited third-party laboratories (SGS or Intertek) prior to shipment.",
  },
  {
    question: "How does Unicon Leather minimize leather cutting waste during production?",
    answer:
      "Our pattern engineering team uses directional CAD nesting to maximize hide utilization across large bag panels and smaller component dies. Clean off-cuts from large tote and duffel runs are repurposed into small leather goods (cardholders, key fobs, luggage tags, and strap keepers), while remaining trimmings are collected for bonded leather (salpa) reinforcement board recycling.",
  },
  {
    question: "Can international brands commission third-party workplace audits of your factory?",
    answer:
      "Yes. We maintain strict internal workplace safety standards—including ventilated water-based adhesive stations, PPE, fair living wages, and zero child or forced labor—and welcome physical or third-party social compliance audits (such as SMETA / Sedex or buyer-nominated inspection agencies) arranged by international brand partners.",
  },
];

export default function SustainabilityPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Sustainability", url: "https://www.uniconleather.com/sustainability" },
  ]);
  const faqSchema = generateFaqSchema(SUSTAINABILITY_FAQS);

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={faqSchema} />
      <div className="w-full bg-white pb-24">
        {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
        <section className="relative w-full !mt-0 min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/sustainability-hero.png"
            alt="UNICON LEATHER - Sustainable Leather Sourcing & Environmental Responsibility"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-lg space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Sustainability & Responsible Sourcing" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1 rounded-none shadow-xs">
                Traceable Environmental Benchmarks
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal/60 font-mono tracking-widest uppercase">
                LWG Audited · REACH Compliant
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              Responsible Sourcing <br />
              <span className="italic text-cognac font-light">&amp; Ecological</span> Stewardship
            </h1>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light max-w-2xl">
              We focus on tangible, verifiable manufacturing practices: partnering exclusively with audited tanneries, eliminating hazardous chemicals, optimizing cutting yields, and crafting enduring leather goods designed to last decades.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#commitments" variant="primary" size="lg" className="shadow-md">
                Explore Ecological Commitments
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
                Request Tannery Certificates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 sm:space-y-32 mt-20 sm:mt-32">
        {/* 2. Core Commitment & Transparency (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="commitments">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Authentic Principles
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              No Greenwashing: Only Verifiable Benchmarks
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              We reject vague marketing claims. In leather manufacturing, true sustainability begins with responsible upstream tannery selection, efficient waste management during cutting, safe chemical dyestuffs, and ethical human working conditions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 flex items-start gap-4 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-charcoal text-base">Traceable Sourcing from LWG-Audited Partner Tanneries</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-light">
                    Unicon Leather is a cut-and-sew manufacturer that procures finished full-grain, top-grain, and vegetable-tanned hides from <strong>LWG-audited partner tanneries</strong> (Gold and Silver rated) in India and Italy—ensuring verified effluent treatment and reduced water footprint at the tanning stage.
                  </p>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 flex items-start gap-4 shadow-xs">
                <FileCheck className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-charcoal text-base">Open-Factory Policy &amp; Buyer-Nominated Social Audits</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-light">
                    Our Noida and Kolkata production ateliers enforce fair living wages, ventilated water-based adhesive stations, PPE, and zero child or forced labor. We welcome physical buyer inspections and third-party social compliance audits (including SMETA / Sedex or buyer-appointed inspection agencies).
                  </p>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 flex items-start gap-4 shadow-xs">
                <CheckCircle2 className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-charcoal text-base">Batch-Verified EU/UK REACH &amp; Prop 65 Chemical Safety</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-light">
                    Every export production lot can be verified through accredited third-party laboratories (SGS or Intertek) against EU/UK REACH Annex XVII (Chromium VI &lt; 3 mg/kg, Azo-free dyes, Nickel release compliance) and US California Proposition 65 prior to dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-charcoal/10 bg-white">
              <img
                src="/images/craftsmanship-cognac-tote.png"
                alt="Vegetable Tanned Leather Accessories and Traceable Leather Sourcing at Unicon Leather"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Pillars Grid (Pure White) */}
      <section className="w-full bg-white py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cognac" size="sm">
              Our 4 Pillars
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Verifiable Sustainability Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-4 shadow-xs hover:border-cognac transition-colors">
              <TreeDeciduous className="w-7 h-7 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Chrome-Free &amp; Vegetable-Tanned Leathers</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We craft vegetable-tanned leather bags, belts, and small accessories using natural tree barks (mimosa, chestnut, and quebracho) from LWG-audited partner tanneries—producing biodegradable hides that develop a rich organic patina over decades.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-4 shadow-xs hover:border-cognac transition-colors">
              <Recycle className="w-7 h-7 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Zero Scrap Wastage</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Small off-cuts are repurposed into small leather goods, key fobs, and zipper pulls. Remaining trimmings are gathered for bonded salpa board manufacturing.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-4 shadow-xs hover:border-cognac transition-colors">
              <Droplets className="w-7 h-7 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Water-Based Finishes</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Transitioning to low-VOC water-based laminating adhesives and solvent-free Italian edge lacquers to protect artisan respiratory health and reduce workshop emissions.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-4 shadow-xs hover:border-cognac transition-colors">
              <HeartHandshake className="w-7 h-7 text-cognac" />
              <h3 className="font-serif text-lg font-medium text-charcoal">Worker Welfare &amp; Safety</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Clean, well-ventilated ateliers equipped with high-volume exhaust hoods, personal protective equipment (PPE), fair living wages, and comprehensive medical insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sustainable Packaging & Durability (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="bg-[#faf8f5] text-charcoal p-8 sm:p-10 rounded-none border border-charcoal/10 space-y-5 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-charcoal">Eco-Conscious Packaging Options</h3>
              <ul className="text-xs sm:text-sm text-charcoal-700 space-y-4 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                  <span><strong>Organic Unbleached Cotton Dustbags:</strong> GOTS-certified biodegradable dust covers with non-toxic screenprinted brand insignias.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                  <span><strong>FSC-Certified Rigid Gift Boxes:</strong> 100% recycled paperboard wrapped in unbleached kraft or soy-ink printed luxury paper.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                  <span><strong>Plastic-Free Master Cartons:</strong> Heavy-duty 5-ply corrugated export cartons sealed with reinforced water-activated gummed kraft tape.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Long-Term Value
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Durability as the Ultimate Sustainability Metric
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              The most ecologically sound product is one that doesn’t require replacement for decades. By selecting high-density full-grain hides, reinforced saddle stitching, and solid forged brass hardware, we engineer products that age beautifully and resist mechanical fatigue.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="md">
                Inquire About Eco-Friendly Production Options <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
              <Button href="/compliance" variant="outline" size="md" className="border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
                View Export &amp; Chemical Compliance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Sustainability & Traceability Questions */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="cognac" size="sm">
            Buyer Due Diligence
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
            Sustainability &amp; Tannery Traceability FAQs
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Clear distinctions between partner tannery environmental audits, batch chemical testing, and our internal cut-and-sew atelier standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUSTAINABILITY_FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#faf8f5] p-6 sm:p-7 border border-charcoal/10 space-y-2.5">
              <h3 className="font-serif text-base sm:text-lg font-medium text-charcoal">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
