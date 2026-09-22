import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Microscope,
  ArrowRight,
  FileText
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "Quality Control, Certifications & Compliance | AQL 2.5 Standards",
  description:
    "Quality control protocols, laboratory testing capabilities, EU REACH Annex XVII, California Proposition 65 compliance, and LWG partner tanneries at UNICON LEATHER.",
  alternates: {
    canonical: "https://www.uniconleather.com/compliance",
  },
  openGraph: {
    title: "Quality Control, Certifications & Compliance | UNICON LEATHER",
    description:
      "AQL 2.5 quality control, EU REACH Annex XVII, California Proposition 65 testing, and LWG Gold audited tanneries for global brand export.",
    url: "https://www.uniconleather.com/compliance",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/compliance-hero.png",
        width: 1200,
        height: 630,
        alt: "Quality Control & Compliance Standards",
      },
    ],
  },
};

export default function CompliancePage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Compliance & Standards", url: "https://www.uniconleather.com/compliance" },
  ]);

  const qcStages = [
    {
      stage: "Stage 01",
      title: "Raw Material & Hide Inspection",
      description: "100% incoming inspection of leather hides, lining fabrics, threads, and hardware. Testing for thickness consistency, grain temper, tensile pull strength, and color crocking fastness.",
    },
    {
      stage: "Stage 02",
      title: "In-Line Component Verification",
      description: "During cutting and skiving, individual leather panels are checked against master CAD acrylic templates to verify 0.4mm bevels, seam allowances, and edge alignments.",
    },
    {
      stage: "Stage 03",
      title: "Assembly & Stitching Audit",
      description: "Continuous monitoring of stitch tension, SPI (stitches per inch), back-tack reinforcement, hardware alignment, and zipper glide smoothness across all workstations.",
    },
    {
      stage: "Stage 04",
      title: "AQL 2.5 Final Pre-Shipment Audit",
      description: "Randomized statistical sampling according to ISO 2859-1 (AQL 2.5 Major / 4.0 Minor). Visual defect grading, dimensional verification, and drop-testing of packed cartons.",
    },
  ];

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <div className="w-full bg-white pb-24">
        {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
        <section className="relative w-full !mt-0 min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/compliance-hero.png"
            alt="UNICON LEATHER - Quality Control, Certifications & Compliance Standards"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-lg space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Quality, Compliance & Certifications" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1 rounded-none shadow-xs">
                Zero-Defect Quality Standards
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal/60 font-mono tracking-widest uppercase">
                AQL 2.5 · REACH · ISO 2859-1
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              Quality Assurance <br />
              <span className="italic text-cognac font-light">&amp; International</span> Compliance
            </h1>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light max-w-2xl">
              We operate under rigorous international quality frameworks. From raw hide tensile testing and 4-stage in-line audits to AQL 2.5 pre-shipment inspections and EU REACH chemical verifications.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#qc-protocol" variant="primary" size="lg" className="shadow-md">
                Explore 4-Stage Protocol
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
                Request Audit Protocol
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 sm:space-y-32 mt-20 sm:mt-32">
        {/* 2. 4-Stage QC Breakdown (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="qc-protocol">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cognac" size="sm">
            Quality Lifecycle
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
            The 4-Stage Quality Control Protocol
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light">
            Every batch undergoes strict multi-point verification to prevent defective items from advancing to the next workstation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {qcStages.map((qc) => (
            <div
              key={qc.stage}
              className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 shadow-xs space-y-4 flex flex-col justify-between hover:border-cognac transition-colors"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold text-cognac uppercase tracking-widest block">
                  {qc.stage}
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">{qc.title}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{qc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Verifiable Certifications & Audit Readiness (Pure White) */}
      <section className="w-full bg-white py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cognac" size="sm">
              Transparency &amp; Audits
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Certifications &amp; Audit Readiness
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light">
              Verified supply-chain standards and third-party audit credentials available for buyer review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#faf8f5] p-7 sm:p-9 rounded-none border border-charcoal/10 shadow-xs space-y-4 hover:border-cognac transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Badge
                    variant={cert.status === "Verified" ? "gold" : "cognac"}
                    size="sm"
                  >
                    {cert.status}
                  </Badge>
                  <span className="text-xs text-charcoal-500 font-mono">
                    {cert.issuedBy}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal">{cert.name}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{cert.description}</p>
                <div className="pt-3 border-t border-charcoal/10 text-xs font-mono text-cognac font-bold">
                  {cert.certificateNumberPlaceholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Laboratory Testing Capabilities (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Physical &amp; Chemical Tests
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Comprehensive Laboratory Testing Capabilities
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              We collaborate with accredited international testing agencies (SGS, Intertek, TÜV SÜD, Bureau Veritas) to certify physical durability and chemical safety benchmarks:
            </p>

            <ul className="space-y-3.5 text-sm text-charcoal-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span><strong>Bally Flexometer Test:</strong> Edge lacquer and leather grain tested to 20,000+ flex cycles without cracking.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span><strong>Crockmeter Rubbing Test:</strong> Dry and wet rubbing test (ISO 11640) for color transfer resistance (Grade 4–5).</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span><strong>Salt-Spray Corrosion:</strong> Hardware plating subjected to 72 hours ASTM B117 salt mist testing.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span><strong>Chemical Screening:</strong> Zero banned Azo dyes, Chromium VI &lt; 3ppm, Lead &lt; 90ppm (CA Prop 65).</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Request Test Reports / Compliance Audit <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#faf8f5] text-charcoal p-8 sm:p-10 rounded-none border border-charcoal/10 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 text-cognac">
                <Microscope className="w-6 h-6" />
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">Buyer-Specific Audit Readiness</h3>
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                We welcome third-party quality inspections and social compliance factory audits commissioned by your brand (e.g. QIMA, SGS, Bureau Veritas) at our facility prior to final bill of lading dispatch.
              </p>
              <div className="p-5 bg-white rounded-none border border-charcoal/10 text-xs sm:text-sm text-charcoal-700">
                <strong className="text-charcoal block mb-1 font-semibold">Standard Audit Policy:</strong>
                Factory access and technical documentation are provided to certified independent inspectors with 48-hour prior notice.
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
