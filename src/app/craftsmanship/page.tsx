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

export const metadata: Metadata = {
  title: "Craftsmanship & Manufacturing Process | Master Leather Atelier",
  description:
    "Explore the 11-stage precision leather manufacturing process at UNICON LEATHER: from hide grading and micro-skiving to Italian edge-painting, saddle stitching, and AQL 2.5 inspection.",
};

export default function CraftsmanshipPage() {
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
    <div className="w-full bg-white space-y-20 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
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
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border-2 border-charcoal/15 shadow-2xl space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Craftsmanship & Atelier Infrastructure" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-none shadow-sm">
                ★ Generational Leather Guild
              </span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono tracking-widest uppercase font-semibold">
                MASTER HANDCRAFT & MACHINERY
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[0.98] tracking-tight uppercase">
              The 11-Stage <br />
              <span className="italic font-normal text-cognac lowercase">precision</span> <br />
              CRAFTSMANSHIP PROCESS
            </h1>

            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light max-w-2xl">
              Where generational Indian leatherworking traditions converge with German precision engineering, Dürkopp Adler stitching, and Italian edge-finishing chemistry.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#stages" variant="primary" size="lg" className="shadow-lg">
                Explore 11-Stage Workflow
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                Request Prototype Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Showcase (Pure White 3-Column Grid) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-charcoal/15 shadow-md bg-white">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
              alt="Raw Leather Hide Selection & Inspection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-charcoal/15 shadow-md bg-white">
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
              alt="Precision Leather Stitching and Edge Skiving"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-charcoal/15 shadow-md bg-white">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
              alt="Hardware Fitting & Hand Polishing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. 11-Stage Production Breakdown */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="stages">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cognac" size="sm">
            Engineering Precision
          </Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
            Detailed Manufacturing Workflow
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light">
            From raw pelt to finished luxury accessory: how our factory ensures zero defect slippage across high-volume container orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturingStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-cognac transition-colors"
            >
              <div className="space-y-3">
                <span className="font-mono text-2xl font-bold text-cognac block">{stage.num}</span>
                <h3 className="font-serif text-xl font-bold text-charcoal">{stage.title}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{stage.description}</p>
              </div>
              <div className="pt-4 border-t border-charcoal/10 text-xs text-charcoal-500 font-sans italic">
                {stage.details}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Modern Machinery vs Artisan Touch Comparison (Pure White) */}
      <section className="w-full bg-white py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <Badge variant="cognac" size="sm">
                Hybrid Production Model
              </Badge>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
                The Harmony of Machinery and Master Handcraft
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed font-light">
                We believe true luxury manufacturing requires both technological repeatability and human sensibility. Machinery handles dimensional precision; our master artisans deliver the final tactile grace and hand-burnished edge finesse.
              </p>

              <div className="space-y-4 text-sm text-charcoal-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                  <span><strong>German Precision Machinery:</strong> Dürkopp Adler sewing units, Fortuna skiving equipment, and hydraulic die-cutting presses for zero dimensional variance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
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
              <div className="bg-white text-charcoal p-10 rounded-none border-2 border-charcoal/15 space-y-6 shadow-xl">
                <h3 className="font-serif text-2xl font-bold text-charcoal">Production Tolerances & Benchmarks</h3>
                <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-mono">
                  <div className="flex justify-between border-b border-charcoal/10 pb-3">
                    <span>Edge Skiving Tolerance</span>
                    <span className="text-cognac font-bold">± 0.05 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/10 pb-3">
                    <span>Stitch Density Consistency</span>
                    <span className="text-cognac font-bold">7.5 SPI (Stitches/Inch)</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/10 pb-3">
                    <span>Hardware Salt Spray Resistance</span>
                    <span className="text-cognac font-bold">72+ Hours ASTM B117</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/10 pb-3">
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
  );
}
