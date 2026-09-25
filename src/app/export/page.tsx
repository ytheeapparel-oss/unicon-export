import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Plane,
  Ship,
  CheckCircle2,
  ArrowRight,
  FileText
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "Global Export Capabilities & B2B Logistics | International Shipping",
  description:
    "Export-ready leather goods manufacturing from India to USA, UK, Europe, UAE, Australia, and Japan. Supported Incoterms (FOB, CIF, DDP), customs documentation, and transit timelines.",
  alternates: {
    canonical: "https://www.uniconleather.com/export",
  },
  openGraph: {
    title: "Global Export Capabilities & B2B Logistics | UNICON LEATHER",
    description:
      "Direct international export of handcrafted leather goods to USA, UK, Europe, UAE, and Australia with FOB, CIF, and DDP freight handling.",
    url: "https://www.uniconleather.com/export",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/export-hero.png",
        width: 1200,
        height: 630,
        alt: "Global Export Capabilities & Trade Logistics",
      },
    ],
  },
  keywords: [
    "leather goods exporter",
    "leather bags manufacturer India for European brands",
    "leather bags manufacturer India for Australian brands",
    "leather goods manufacturer Europe",
    "leather bag supplier India to Australia",
    "private label leather bags Sydney Melbourne Australia",
    "leather goods manufacturer India EU REACH compliant",
    "sustainable leather bags manufacturer India LWG certified",
    "low MOQ leather bags manufacturer India for UK designers",
    "leather products HS code 4202",
    "leather products HS code 4203",
    "leather goods wholesale suppliers Europe Australia",
    "bulk leather bags for retail"
  ],
};

export default function ExportPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Export & Logistics", url: "https://www.uniconleather.com/export" },
  ]);
  const exportDestinations = [
    {
      region: "North America",
      countries: "United States, Canada",
      transitAir: "4–6 business days (DHL / FedEx Express)",
      transitSea: "28–35 days (Port of NY/NJ, LA/Long Beach)",
      incoterms: "FOB, CIF, DDP to client fulfillment centers",
      topProducts: "Full-Grain Leather Totes, Executive Briefcases, Minimalist Wallets",
    },
    {
      region: "United Kingdom & Europe",
      countries: "UK, Germany, France, Italy, Spain, Netherlands, Scandinavia",
      transitAir: "3–5 business days (London Heathrow, Frankfurt, Paris CDG)",
      transitSea: "22–28 days (Rotterdam, Hamburg, Felixstowe, Genoa)",
      incoterms: "FOB, CIF, DDP (VAT/Customs Handled, EU REACH Compliant)",
      topProducts: "Luxury Handbags, Vegetable-Tanned Belts, Saffiano Folios, Designer Totes",
    },
    {
      region: "Australia & New Zealand",
      countries: "Australia (Sydney, Melbourne, Brisbane, Perth), New Zealand (Auckland)",
      transitAir: "4–6 business days (DHL / FedEx Express to SYD & MEL)",
      transitSea: "18–24 days (Port Botany Sydney, Port of Melbourne, Port of Brisbane)",
      incoterms: "FOB, CIF, DDP (Australian GST & DAFF Biosecurity Compliant)",
      topProducts: "Minimalist Totes, Commuter Backpacks, RFID Wallets, Woven Belts",
    },
    {
      region: "Middle East & Gulf",
      countries: "United Arab Emirates (Dubai), Saudi Arabia, Qatar",
      transitAir: "2–4 business days",
      transitSea: "7–10 days (Jebel Ali Port)",
      incoterms: "FOB, CIF, DDP",
      topProducts: "Corporate Gift Sets, Luxury Travel Duffels, Exotic Embossed Goods",
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
            src="/images/export-hero.png"
            alt="UNICON LEATHER - Global Export Logistics & International Trade"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-lg space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Global Export & International Logistics" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1 rounded-none shadow-xs">
                Worldwide Trade Infrastructure
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal/60 font-mono tracking-widest uppercase">
                25+ Export Markets
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              International Export <br />
              <span className="italic text-cognac font-light">&amp; Global</span> Logistics Desk
            </h1>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light max-w-2xl">
              Exporting fine handcrafted leather goods to overseas brands across the USA, UK, Europe, UAE, Australia, and Japan with complete Incoterms support (FOB, CIF, DDP), express air couriers, and container shipping.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#corridors" variant="primary" size="lg" className="shadow-md">
                Explore Trade Corridors
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
                Request Freight Quotation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 sm:space-y-32 mt-20 sm:mt-32">
        {/* 2. Global Reach Grid & Transit Times (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="corridors">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cognac" size="sm">
            Core Trade Corridors
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
            Export Destinations &amp; Logistics Timelines
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light">
            Dedicated logistics managers coordinate air priority couriers and full-container ocean freight directly from major Indian ports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exportDestinations.map((dest) => (
            <div
              key={dest.region}
              className="bg-[#faf8f5] p-7 sm:p-9 rounded-none border border-charcoal/10 shadow-xs space-y-5 hover:border-cognac transition-colors"
            >
              <div className="flex items-center justify-between pb-4 border-b border-charcoal/10">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-cognac block">
                    Region
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-charcoal">{dest.region}</h3>
                </div>
                <Globe className="w-6 h-6 text-cognac" />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal-700">
                <p>
                  <strong>Key Markets:</strong> {dest.countries}
                </p>
                <p className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-cognac shrink-0" />
                  <span><strong>Air Courier Transit:</strong> {dest.transitAir}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Ship className="w-4 h-4 text-cognac shrink-0" />
                  <span><strong>Ocean Freight Transit:</strong> {dest.transitSea}</span>
                </p>
                <p>
                  <strong>Supported Trade Terms:</strong> <span className="font-mono">{dest.incoterms}</span>
                </p>
                <p className="text-charcoal-500 pt-2 border-t border-charcoal/10">
                  <strong>High Demand Lines:</strong> {dest.topProducts}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Supported Incoterms (Pure White) */}
      <section className="w-full bg-white py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cognac" size="sm">
              Commercial Clarity
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Standard Trade Terms (Incoterms 2020)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-3 shadow-xs hover:border-cognac transition-colors">
              <span className="font-mono text-2xl font-semibold text-cognac">FOB</span>
              <h3 className="font-serif text-base font-medium text-charcoal">Free On Board (Indian Ports)</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We handle domestic transport, customs clearance, and container loading at Indian ports (Kolkata / Chennai / Mumbai). Buyer arranges sea freight.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-3 shadow-xs hover:border-cognac transition-colors">
              <span className="font-mono text-2xl font-semibold text-cognac">CIF</span>
              <h3 className="font-serif text-base font-medium text-charcoal">Cost, Insurance &amp; Freight</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We cover ocean freight and marine cargo insurance up to your designated destination seaport (e.g. Rotterdam, Hamburg, NY/NJ, Dubai, Yokohama).
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-3 shadow-xs hover:border-cognac transition-colors">
              <span className="font-mono text-2xl font-semibold text-cognac">DDP</span>
              <h3 className="font-serif text-base font-medium text-charcoal">Delivered Duty Paid</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Complete door-to-door delivery. All ocean/air freight, import customs duties, tariffs, and inland trucking managed directly to your warehouse.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-7 sm:p-8 rounded-none border border-charcoal/10 space-y-3 shadow-xs hover:border-cognac transition-colors">
              <span className="font-mono text-2xl font-semibold text-cognac">EXW</span>
              <h3 className="font-serif text-base font-medium text-charcoal">Ex Works (Factory Gate)</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Available for international buying houses or foreign brands with pre-existing domestic freight forwarding infrastructure in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Export Documentation & Packaging Standards (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <Badge variant="cognac" size="sm">
              Customs &amp; Compliance
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal tracking-tight">
              Comprehensive Export Documentation
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-light">
              Every shipment is accompanied by complete, legally audited commercial export documentation ensuring rapid clearance through foreign customs:
            </p>

            <ul className="space-y-3 text-sm text-charcoal-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Commercial Invoice with full HS Code itemization</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Detailed Packing List (Gross/Net weight, carton dimensions)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Certificate of Origin (Chamber of Commerce Verified)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Original Bill of Lading (Ocean) or Airway Bill (AWB)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Phytosanitary &amp; Fumigation Certificates for wooden pallets</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                <span>Third-Party Lab Test Reports (EU REACH / CA Prop 65)</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Contact Our Export Desk <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#faf8f5] text-charcoal p-8 sm:p-10 rounded-none border border-charcoal/10 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                Heavy-Duty Export Packaging Standard
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                To prevent humidity damage and deformation during 30-day ocean transits, all goods adhere to strict export packing benchmarks:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 pt-2">
                <div className="bg-white p-4 rounded-none border border-charcoal/10">
                  <strong className="text-charcoal block mb-1 font-semibold">1. Moisture Barrier Protection</strong>
                  <p className="text-charcoal-600 font-light">Individual non-woven dustbags and high-absorption silica gel packets inside food-grade polybags.</p>
                </div>
                <div className="bg-white p-4 rounded-none border border-charcoal/10">
                  <strong className="text-charcoal block mb-1 font-semibold">2. 5-Ply Heavy Duty Master Cartons</strong>
                  <p className="text-charcoal-600 font-light">200 GSM burst-resistant corrugated shipping boxes with corner edge protectors and moisture-proof plastic wrapping.</p>
                </div>
                <div className="bg-white p-4 rounded-none border border-charcoal/10">
                  <strong className="text-charcoal block mb-1 font-semibold">3. Heat-Treated ISPM-15 Palletization</strong>
                  <p className="text-charcoal-600 font-light">Certified fumigated wooden/plastic pallets shrink-wrapped with UV-resistant film and heavy-duty strapping.</p>
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
