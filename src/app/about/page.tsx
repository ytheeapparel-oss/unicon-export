import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Factory,
  HeartHandshake,
  FileText,
  Globe,
  Mail,
  Phone
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Luxury Leather Goods Manufacturer & Exporter",
  description:
    "Learn about UNICON LEATHER: our heritage, factory infrastructure, artisan master craftsmen, ethical working conditions, and B2B export capabilities serving international luxury brands.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white space-y-20 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/about-hero.jpg"
            alt="UNICON LEATHER - Master Artisan Leathercraft & Global Brand Production"
            className="w-full h-full object-cover object-center lg:object-[center_22%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-14 pt-24">
          <div className="max-w-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border border-charcoal/10 shadow-lg space-y-4 text-left">
            <Breadcrumbs items={[{ label: "About Our Atelier & Heritage" }]} />

            <div className="inline-flex items-center gap-2.5 mt-1">
              <span className="bg-cognac text-white text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-none shadow-xs">
                Indian Leather Atelier · Est. 1998
              </span>
              <span className="text-[10px] sm:text-xs text-charcoal-500 font-mono tracking-widest uppercase font-medium">
                Global B2B Exporter
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15] tracking-tight">
              Artisan Mastery Built for Global Luxury Standards
            </h1>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light max-w-xl">
              UNICON LEATHER is an export-dedicated manufacturing facility bridging generational Indian leathercraft with contemporary European finishing tolerances, audited ethical workplaces, and international trade compliance.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button href="/contact" variant="primary" size="md">
                Schedule Consultation
              </Button>
              <Button href="/catalogue-request" variant="outline" size="md" className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
                <FileText className="w-3.5 h-3.5 mr-2" /> Download Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Atelier Story & Philosophy */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Our Manufacturing Mission
            </Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
              Empowering International Labels with Predictable, High-Precision Manufacturing
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              Founded with the objective of providing overseas fashion brands, boutique labels, and retail buying houses with a reliable, ethical, and technically rigorous manufacturing partner in India.
            </p>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              Unlike broker houses or trading intermediaries, we control every critical phase of production: from raw hide grading and pattern engineering to multi-coat edge painting and final export boxing.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-charcoal/10">
              <div className="space-y-1">
                <span className="block font-serif text-3xl font-bold text-cognac">0.4 mm</span>
                <span className="text-xs text-charcoal-500 uppercase tracking-widest font-medium">
                  Skiving Tolerances
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif text-3xl font-bold text-cognac">100%</span>
                <span className="text-xs text-charcoal-500 uppercase tracking-widest font-medium">
                  Export Dedicated
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-md border border-charcoal/10 bg-white flex items-center justify-center p-3 sm:p-5 group">
              <img
                src="/images/about-mission-briefcase.png"
                alt="UNICON LEATHER - Handcrafted Luxury Leather Briefcase & Messenger Bag"
                className="w-full h-full object-contain object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Comprehensive B2B Export Profile & Capabilities */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-white border border-charcoal/15 shadow-sm p-8 sm:p-12 lg:p-14 space-y-10">
          <div className="max-w-4xl space-y-4">
            <Badge variant="cognac" size="sm">
              Global B2B Atelier Profile
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight">
              OEM/ODM Leather Goods Manufacturing & Export Atelier
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-light">
              <strong className="text-charcoal font-semibold">UNICON LEATHER</strong> (Unicon Leather Goods Export Private Limited) is a premier OEM/ODM leather goods manufacturer and export atelier located in Kolkata, India. We partner with fashion labels, boutique brands, department store buying houses, and corporate gifting distributors across Europe, the UK, and North America.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-charcoal/10">
            {/* Manufacturing Specializations */}
            <div className="space-y-4 bg-[#faf8f5] p-6 border border-charcoal/10">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cognac shrink-0"></span>
                Our Manufacturing Specializations
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Luxury Leather Handbags, Totes, and Crossbody Bags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Executive Laptop Bags, Briefcases, and Commuter Backpacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Full-Grain Leather Wallets, Cardholders, and RFID-shielded Small Leather Goods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Handcrafted Vegetable-Tanned Belts and Bespoke Accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Custom OEM/ODM Prototyping and Private-Label Manufacturing</span>
                </li>
              </ul>
            </div>

            {/* Quality & Compliance Standards */}
            <div className="space-y-4 bg-[#faf8f5] p-6 border border-charcoal/10">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cognac shrink-0"></span>
                Quality & Compliance Standards
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Raw materials sourced from Leather Working Group (LWG) audited partner tanneries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>100% compliant with EU REACH Annex XVII regulations (Chromium VI &lt;3ppm, Azo-dye free, nickel-free hardware) and California Proposition 65.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span>Strict 4-stage Quality Control benchmarked against AQL 2.5 standards.</span>
                </li>
              </ul>
            </div>

            {/* Commercial & Export Terms */}
            <div className="space-y-4 bg-[#faf8f5] p-6 border border-charcoal/10">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cognac shrink-0"></span>
                Commercial & Export Terms
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span><strong>Low MOQs:</strong> 100–300 pcs per handbag style; 200–500 pcs for wallets and SLGs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span><strong>Rapid sampling:</strong> Tech-pack prototype development within 7 to 14 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cognac font-bold">•</span>
                  <span><strong>Incoterms:</strong> FOB, CIF, DDP (Delivered Duty Paid), and EXW.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-[#FAF8F5] text-charcoal border border-charcoal/15 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://www.uniconleather.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cognac transition-colors flex items-center gap-1.5 font-medium">
                <Globe className="w-4 h-4 text-cognac" />
                <span>www.uniconleather.com</span>
              </a>
              <a href="mailto:uniconexport@gmail.com" className="hover:text-cognac transition-colors flex items-center gap-1.5 font-medium">
                <Mail className="w-4 h-4 text-cognac" />
                <span>uniconexport@gmail.com</span>
              </a>
              <a href="https://wa.me/919873102341" target="_blank" rel="noopener noreferrer" className="hover:text-cognac transition-colors flex items-center gap-1.5 font-medium">
                <Phone className="w-4 h-4 text-cognac" />
                <span>WhatsApp: +91 9873102341</span>
              </a>
            </div>
            <Button href="/contact" variant="primary" size="sm" className="bg-cognac hover:bg-cognac-600 text-white">
              Inquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Core Operating Values (Pure White) */}
      <section className="w-full bg-[#faf8f5] py-16 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <Badge variant="cognac" size="sm">
              Our Operating Values
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Ethics, Precision & Transparency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal">
                Artisan Skill + Modern Machinery
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We combine traditional saddle-stitching and edge burnishing with CNC hydraulic clicker presses, precision Fortuna skiving units, and Adler walking-foot sewing machines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal">
                Ethical Workplace Practices
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Zero child labor, statutory living wages, comprehensive health cover, ergonomic seating, and continuous vocational upskilling for our artisan guild.
              </p>
            </div>

            <div className="bg-white p-8 rounded-none border border-charcoal/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal">
                Strict Quality Philosophy (AQL 2.5)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Multi-stage quality assurance: raw hide inspection, in-line panel verification, stitch count validation, and final carton audit prior to container sealing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Factory Infrastructure */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="infrastructure">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-md border border-charcoal/10 bg-white flex items-center justify-center p-3 sm:p-5 group">
              <img
                src="/images/about-infrastructure-backpack.png"
                alt="UNICON LEATHER - Handcrafted Two-Tone Luxury Leather Backpack"
                className="w-full h-full object-contain object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <Badge variant="cognac" size="sm">
              Factory Infrastructure
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
              Modern Facilities Tailored for Export Volume
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              Located in India’s premier leather manufacturing corridors, our facility houses specialized departments for CAD pattern digitization, sample prototyping, clean stitching lines, automated edge-inking, and climate-controlled raw hide storage.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <span><strong>Dedicated Sampling Laboratory:</strong> Fast-track physical prototype execution in 7–14 days.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <span><strong>Climate-Controlled Tannery Storage:</strong> Prevents humidity degradation and maintains optimal leather moisture balance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                <span><strong>Heavy Duty Hardware Vault:</strong> Solid brass, stainless steel, and custom cast die moulds.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Schedule a Factory Tour / Call <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-[#faf8f5] border border-charcoal/10 text-charcoal p-10 sm:p-14 rounded-none text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
            Partner with a Credible, Export-Ready Leather Atelier
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto leading-relaxed font-light">
            Contact our export director to discuss initial sampling, technical specifications, and production schedules for your upcoming collection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/contact" variant="primary" size="md">
              Contact Our Export Team
            </Button>
            <Button href="/catalogue-request" variant="outline" size="md" className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white">
              Download Lookbook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
