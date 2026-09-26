import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Scissors
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "How We Craft Premium Leather Goods in 2026",
  description:
    "Explore how UNICON LEATHER crafts premium leather goods in 2026: an 11-stage precision manufacturing process from Grade-A hide grading and 0.4mm micro-skiving to Italian edge-lacquering, saddle stitching, and AQL 2.5 inspection.",
  alternates: {
    canonical: "https://www.uniconleather.com/craftsmanship",
  },
  openGraph: {
    title: "How We Craft Premium Leather Goods in 2026 | Unicon Leather",
    description:
      "Explore how UNICON LEATHER crafts premium leather goods in 2026: from Grade-A hide grading and 0.4mm micro-skiving to Italian edge-lacquering, saddle stitching, and AQL 2.5 inspection.",
    url: "https://www.uniconleather.com/craftsmanship",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/craftsmanship-hero.jpg",
        width: 1200,
        height: 630,
        alt: "How We Craft Premium Leather Goods in 2026 | Unicon Leather",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Craft Premium Leather Goods in 2026 | Unicon Leather",
    description:
      "Explore how UNICON LEATHER crafts premium leather goods in 2026: from Grade-A hide grading and 0.4mm micro-skiving to Italian edge-lacquering and AQL 2.5 inspection.",
    images: ["https://www.uniconleather.com/images/craftsmanship-hero.jpg"],
  },
};

export default function CraftsmanshipPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "How We Craft Premium Leather Goods in 2026", url: "https://www.uniconleather.com/craftsmanship" },
  ]);

  const manufacturingStages = [
    {
      num: "01",
      title: "Raw Hide Grading & Selection",
      description: "Every bovine, calfskin, or lambskin hide is inspected under specialized 5000K daylight lamps to identify natural grain characteristics, surface grain consistency, and tensile elasticity.",
      details: "Grade A selection only. Rejection rate of substandard hides exceeds 18% to ensure zero surface flaws.",
    },
    {
      num: "02",
      title: "CAD Pattern Engineering & Digitization",
      description: "Master patternmakers convert designer sketches into millimeter-accurate CAD templates with precise seam allowances, alignment notches, and stress relief cutouts.",
      details: "Digital pattern archives ensure 100% repeatability across seasonal re-orders.",
    },
    {
      num: "03",
      title: "Precision Cutting & Directional Nesting",
      description: "Panels are cut using hydraulic swing-arm clicker presses and Japanese steel dies. Hides are nested directionally to match grain flow across adjacent bag panels.",
      details: "Yield-optimization algorithms minimize leather waste while preserving structural integrity.",
    },
    {
      num: "04",
      title: "Micro-Skiving & Precision Splitting",
      description: "German Fortuna skiving machines bevel leather edges down to 0.4mm tolerances for seamless French turned edges, preventing bulky or unsightly seam build-ups.",
      details: "Graduated bevel skives configured according to hide temper and lining thickness.",
    },
    {
      num: "05",
      title: "Edge Dyeing & Multi-Coat Burnishing",
      description: "Raw edges receive 3 to 5 coats of premium Italian edge lacquer (Fenice/Giardini). Each coat is hand-sanded with fine-grit abrasive paper and heat-sealed.",
      details: "Flexible polymers tested to resist cracking down to -15°C and up to +50°C.",
    },
    {
      num: "06",
      title: "Reinforcement & Interlining Lamination",
      description: "High-stress zones like handle anchors and bottom corners are reinforced with non-stretch microfibers, salpa (bonded leather), and high-density EVA foam cushions.",
      details: "Water-based, low-VOC adhesives applied in ventilated laminating booths.",
    },
    {
      num: "07",
      title: "Precision Stitching & Thread Tensioning",
      description: "Executed on specialized German Dürkopp Adler and Pfaff walking-foot machines using bonded nylon Tex 70/Metric 40 threads with calibrated stitch-per-inch (SPI) counts.",
      details: "Uniform 7–8 stitches per inch with back-tacked stress anchors.",
    },
    {
      num: "08",
      title: "Bespoke Hardware Fitting & Riveting",
      description: "Solid forged brass and die-cast zinc hardware are fitted using pneumatic riveting presses with nylon-cushioned dies to prevent micro-scratches on polished finishes.",
      details: "Salt-spray tested for 72+ hours to guarantee tarnish resistance.",
    },
    {
      num: "09",
      title: "Final Assembly & Form Shaping",
      description: "Components are joined through three-dimensional bag assembly jigs, turning operations, and inner lining integration with concealed pocket zippers.",
      details: "Heat-creased edges and hand-pressed corners for architectural permanence.",
    },
    {
      num: "10",
      title: "Hand-Polishing & Cream Conditioning",
      description: "Finished goods are conditioned with natural beeswax and lanolin leather balms, followed by soft-cloth rotary buffer polishing to bring out natural patina and luster.",
      details: "Restores optimal hide moisture content before transit packaging.",
    },
    {
      num: "11",
      title: "AQL 2.5 Quality Inspection & Export Boxing",
      description: "Final 100% visual and dimensional audit against approved pre-production golden samples. Packaged with moisture-absorbing silica gels in branded luxury cartons.",
      details: "Comprehensive QC certificate and photo report delivered prior to freight dispatch.",
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
            src="/images/craftsmanship-hero.jpg"
            alt="UNICON LEATHER - Master Leather Artisan Handcrafting Luxury Goods"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-14 pt-24">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border border-charcoal/10 shadow-lg space-y-4 text-left">
            <Breadcrumbs items={[{ label: "How We Craft Premium Leather Goods in 2026" }]} />

            <div className="inline-flex items-center gap-2.5 mt-1">
              <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-none shadow-xs">
                Generational Leather Guild • 2026 Standards
              </span>
              <span className="text-[10px] sm:text-xs text-charcoal-500 font-mono tracking-widest uppercase font-medium">
                Master Handcraft & Precision
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15] tracking-tight">
              How We Craft Premium Leather Goods in 2026
            </h1>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light max-w-xl">
              Where generational Indian leatherworking traditions converge with German precision engineering, Dürkopp Adler stitching, and Italian edge-finishing chemistry. Explore our 11-stage atelier process.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button href="#stages" variant="primary" size="md">
                Explore 11 Stages
              </Button>
              <Button href="/contact" variant="outline" size="md" className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
                Request Prototype Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 sm:space-y-32 mt-20 sm:mt-32">
        {/* 2. Visual Showcase (Pure White 3-Column Grid) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Panel 1: Hand-Turned Cognac Pebbled Bucket Bag */}
          <div className="relative aspect-[3/4] rounded-none overflow-hidden border border-charcoal/10 shadow-lg bg-white group">
            <img
              src="/images/craftsmanship-cognac-tote.png"
              alt="UNICON LEATHER - Hand-Turned Cognac Pebbled Leather Shoulder Bag"
              className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Atelier Caption Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 border border-charcoal/10 shadow-xs">
              <div>
                <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-semibold">Atelier Specimen 01</span>
                <span className="block font-serif text-xs sm:text-sm text-charcoal font-medium">Cognac Pebbled Shoulder Bag</span>
              </div>
              <span className="text-[10px] font-mono uppercase text-charcoal-400">Hand-Skived</span>
            </div>
          </div>

          {/* Panel 2: Structured Black Double-Handle Tote */}
          <div className="relative aspect-[3/4] rounded-none overflow-hidden border border-charcoal/10 shadow-lg bg-white group">
            <img
              src="/images/craftsmanship-black-handbag.png"
              alt="UNICON LEATHER - Precision Structured Black Pebble Leather Handbag"
              className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Atelier Caption Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 border border-charcoal/10 shadow-xs">
              <div>
                <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-semibold">Atelier Specimen 02</span>
                <span className="block font-serif text-xs sm:text-sm text-charcoal font-medium">Structured Dual-Handle Tote</span>
              </div>
              <span className="text-[10px] font-mono uppercase text-charcoal-400">Contrast Lined</span>
            </div>
          </div>

          {/* Panel 3: Vintage Full-Grain Pull-Up Messenger Satchel */}
          <div className="relative aspect-[3/4] rounded-none overflow-hidden border border-charcoal/10 shadow-lg bg-white group">
            <img
              src="/images/craftsmanship-messenger-bag.png"
              alt="UNICON LEATHER - Handcrafted Vintage Pull-Up Leather Messenger Satchel"
              className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Atelier Caption Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 border border-charcoal/10 shadow-xs">
              <div>
                <span className="block text-[9.5px] font-mono tracking-widest uppercase text-cognac font-semibold">Atelier Specimen 03</span>
                <span className="block font-serif text-xs sm:text-sm text-charcoal font-medium">Heritage Buckle Messenger Satchel</span>
              </div>
              <span className="text-[10px] font-mono uppercase text-charcoal-400">Saddle-Stitched</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 11-Stage Production Breakdown */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="stages">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cognac" size="sm">
            Engineering Precision
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
            Detailed Manufacturing Workflow
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            From raw pelt to finished luxury accessory: how our factory ensures zero defect slippage across high-volume container orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white p-6 sm:p-7 rounded-none border border-charcoal/10 shadow-xs space-y-3 flex flex-col justify-between hover:border-cognac hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-2">
                <span className="font-serif text-2xl font-light text-cognac/80 block">{stage.num}</span>
                <h3 className="font-serif text-base font-medium text-charcoal">{stage.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">{stage.description}</p>
              </div>
              <div className="pt-3 border-t border-charcoal/8 text-[11px] text-charcoal-500 font-sans italic">
                {stage.details}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Modern Machinery vs Artisan Touch Comparison (Pure White) */}
      <section className="w-full bg-[#faf8f5] py-16 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cognac" size="sm">
                Hybrid Production Model
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                The Harmony of Machinery and Master Handcraft
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We believe true luxury manufacturing requires both technological repeatability and human sensibility. Machinery handles dimensional precision; our master artisans deliver the final tactile grace and hand-burnished edge finesse.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                  <span><strong>German Precision Machinery:</strong> Dürkopp Adler sewing units, Fortuna skiving equipment, and hydraulic die-cutting presses for zero dimensional variance.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                  <span><strong>Artisan Hand Finishing:</strong> Multi-coat hand edge polishing, hand-stitched bar-tacks, and natural wax buffing for soft tactile hand-feel.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Discuss Manufacturing Capabilities <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white text-charcoal p-8 rounded-none border border-charcoal/10 space-y-5 shadow-xs">
                <h3 className="font-serif text-xl font-medium text-charcoal">Production Tolerances & Benchmarks</h3>
                <div className="space-y-3 text-xs text-charcoal-700 font-mono">
                  <div className="flex justify-between border-b border-charcoal/8 pb-2.5">
                    <span>Edge Skiving Tolerance</span>
                    <span className="text-cognac font-bold">± 0.05 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/8 pb-2.5">
                    <span>Stitch Density Consistency</span>
                    <span className="text-cognac font-bold">7.5 SPI (Stitches/Inch)</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/8 pb-2.5">
                    <span>Hardware Salt Spray Resistance</span>
                    <span className="text-cognac font-bold">72+ Hours ASTM B117</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/8 pb-2.5">
                    <span>Edge Lacquer Flex Fatigue</span>
                    <span className="text-cognac font-bold">20,000+ Cycles (Bally Flex)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AQL Quality Benchmark</span>
                    <span className="text-cognac font-bold">AQL 2.5 Major / 4.0 Minor</span>
                  </div>
                </div>
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
