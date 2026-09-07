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

export const metadata: Metadata = {
  title: "Private Label & OEM/ODM Leather Goods Manufacturing",
  description:
    "End-to-end custom OEM/ODM leather manufacturing for fashion brands, wholesalers, and private labels. Custom hardware moulds, logo embossing, Pantone color matching, and prototype sampling.",
};

export default function PrivateLabelPage() {
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

  return (
    <div className="w-full bg-white space-y-20 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
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
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border-2 border-charcoal/15 shadow-2xl space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Private Label & OEM/ODM Services" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-none shadow-sm">
                ★ Custom Contract Manufacturing
              </span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono tracking-widest uppercase font-semibold">
                OEM / ODM PRIVATE LABEL
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[0.98] tracking-tight uppercase">
              Bespoke Private Label <br />
              <span className="italic font-normal text-cognac lowercase">and</span> <br />
              OEM/ODM DEVELOPMENT
            </h1>

            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light max-w-2xl">
              Transforming your creative vision into market-ready luxury collections. Complete R&D, custom tooling moulds, leather tannage formulation, rapid counter-sampling, and dependable container export.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#workflow" variant="primary" size="lg" className="shadow-lg">
                Explore 8-Step OEM Process
              </Button>
              <Button href="#inquiry" variant="outline" size="lg" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                Start OEM Project RFP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & NDA Protection (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Confidentiality & Precision
            </Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              A Dedicated Manufacturing Arm for Your Brand
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              We understand that design exclusivity and intellectual property protection are paramount for international luxury and contemporary labels. We execute bilateral NDAs before reviewing tech packs and maintain strict segregation of custom hardware moulds.
            </p>

            <div className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-cognac font-bold text-sm uppercase tracking-widest">
                <Lock className="w-5 h-5" /> 100% Design Exclusivity Guaranteed
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                Your custom hardware tooling, pattern silhouettes, and embossed brand insignias remain your exclusive property and will never be shared, repurposed, or displayed without explicit consent.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl border-2 border-charcoal/15 bg-white">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Private Label Leather Design Consultation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              The Private-Label Development Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light">
              A disciplined, milestone-driven process engineered for overseas buyers and strict retail delivery windows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-cognac transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-cognac">{item.step}</span>
                      <IconComp className="w-5 h-5 text-charcoal-400" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Custom Branding & Hardware Capabilities (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="hardware">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl border-2 border-charcoal/15 bg-white">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
                alt="Custom Brass Hardware and Leather Debossing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <Badge variant="cognac" size="sm">
              Bespoke Branding Techniques
            </Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Custom Logo Embossing, Hardware Tooling & Packaging
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              We offer comprehensive branding integration across every consumer touchpoint:
            </p>

            <div className="space-y-4 text-sm text-charcoal-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Blind Heat Debossing & Foil Stamping:</strong> High-precision brass dies for clean 0.5mm blind deboss or Italian metallic gold/silver foil transfers.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Custom Hardware Moulds:</strong> 3D engraved solid brass, zinc alloy, and stainless steel hardware with brushed antique, gunmetal, or 24k gold PVD vacuum plating.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong>Luxury Retail Packaging:</strong> Organic unbleached cotton drawstring dustbags, custom branded rigid magnetic gift boxes, FSC-certified hangtags, and barcode application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inquiry Form (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cognac" size="sm">
              Initiate OEM Project
            </Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Start Your Private Label / OEM Project
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
              Share your sketches, CAD tech packs, or collection concepts. Our R&D engineering team will provide preliminary costing, leather swatch options, and sampling schedules within 12–24 business hours.
            </p>

            <div className="bg-white p-7 rounded-none border-2 border-charcoal/15 shadow-sm space-y-3 text-xs sm:text-sm">
              <h3 className="font-serif font-bold text-charcoal text-base">
                Private Label MOQ Guidance:
              </h3>
              <p className="text-charcoal-600">• Handbags & Satchels: 100–200 pcs per style</p>
              <p className="text-charcoal-600">• Wallets & Small Goods: 200–300 pcs per style</p>
              <p className="text-charcoal-600">• Custom Hardware Tooling: 500 pcs (stock luxury moulds available from 100 pcs)</p>
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
  );
}
