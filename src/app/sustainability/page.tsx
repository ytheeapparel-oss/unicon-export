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

export const metadata: Metadata = {
  title: "Sustainability & Responsible Sourcing | Ethical Leather Goods Manufacturing",
  description:
    "Verifiable sustainability practices at UNICON LEATHER: LWG-audited partner tanneries, Chrome-Free Vegetable Tannages, zero-waste cutting yield optimization, and REACH chemical safety.",
  alternates: {
    canonical: "https://www.uniconleather.com/sustainability",
  },
  keywords: [
    "certified leather manufacturer audit pass",
    "LWG certified leather factory",
    "Sedex audited leather manufacturer",
    "sustainable leather manufacturer",
    "vegetable tanned leather bag",
    "veg tan leather goods",
    "chrome-free tanned leather goods",
    "recycled leather goods",
    "upcycled leather accessories",
    "bio-based vegan leather",
    "plant-based leather alternatives apple cactus leather"
  ],
};

export default function SustainabilityPage() {
  return (
    <div className="w-full bg-white space-y-20 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
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
                  <h3 className="font-serif font-medium text-charcoal text-base">LWG Partner Tanneries</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-light">
                    Hides are sourced from partner tanneries evaluated by the Leather Working Group (LWG) for closed-loop wastewater treatment, reduced water consumption, and responsible chemical management.
                  </p>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-6 rounded-none border border-charcoal/10 flex items-start gap-4 shadow-xs">
                <FileCheck className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-medium text-charcoal text-base">EU REACH Annex XVII Compliance</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed font-light">
                    Every batch of dyed leather and metal hardware is tested through independent laboratories (SGS / Intertek) for Azo-dye freedom, zero nickel release, and Chromium VI below 3ppm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-charcoal/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
                alt="Vegetable Tanned Natural Leather Sourcing"
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
              <h3 className="font-serif text-lg font-medium text-charcoal">Vegetable Tanning Options</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We offer pure vegetable-tanned bovine leathers processed using natural tree barks (mimosa, chestnut, quebracho) that develop a rich organic patina over years of use.
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

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Inquire About Eco-Friendly Production Options <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
