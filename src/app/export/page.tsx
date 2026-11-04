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
  twitter: {
    card: "summary_large_image",
    title: "Global Export Capabilities & B2B Logistics | UNICON LEATHER",
    description:
      "Direct international export of handcrafted leather goods to USA, UK, Europe, UAE, and Australia with EXW, FOB, CIF, and DDP freight handling.",
    images: ["https://www.uniconleather.com/images/export-hero.png"],
  },
  keywords: [
    "import leather bags from India to USA",
    "import leather wallets from India to USA",
    "import leather bags from India to Canada",
    "import leather wallets from India to Canada",
    "wholesale leather handbags USA",
    "wholesale leather handbags Canada",
    "wholesale leather wallets USA",
    "wholesale leather wallets Canada",
    "private label leather bags for US brands",
    "private label leather bags for Canadian brands",
    "leather bag supplier for US retailers",
    "leather bag supplier for Canadian retailers",
    "leather goods exporter",
    "leather bags manufacturer India for Canadian brands",
    "leather bag supplier India to Canada",
    "private label leather bags Toronto Vancouver Montreal",
    "custom leather goods manufacturer Canada supplier India",
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
    "leather goods wholesale suppliers North America Europe Australia",
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
      region: "United States & Canada",
      countries: "USA (NY, LA, Texas, Florida), Canada (Toronto, Vancouver, Montreal, Calgary)",
      transitAir: "3–5 business days (Toronto YYZ, Vancouver YVR, NY JFK, LAX)",
      transitSea: "20–30 days (Port of Vancouver, Port of NY/NJ, LA/Long Beach)",
      incoterms: "FOB, CIF, DDP (CBSA CARM & US Customs Pre-Cleared)",
      topProducts: "Full-Grain Leather Totes, Executive Briefcases, Minimalist Wallets, Commuter Bags",
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
      countries: "United Arab Emirates (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), Qatar",
      transitAir: "2–4 business days (DXB, AUH, RUH, DOH)",
      transitSea: "7–14 days (Jebel Ali Port, Khalifa Port, Dammam)",
      incoterms: "FOB, CIF, DDP (0% UAE Customs Duty under India-UAE CEPA)",
      topProducts: "Corporate Gift Sets, Luxury Travel Duffels, Exotic Embossed Goods",
    },
    {
      region: "Japan, South Korea & East Asia",
      countries: "Japan (Tokyo, Osaka, Kyoto), South Korea (Seoul, Busan)",
      transitAir: "3–5 business days (Narita NRT, Haneda HND, Incheon ICN)",
      transitSea: "14–20 days (Port of Yokohama, Tokyo, Kobe, Port of Busan)",
      incoterms: "FOB, CIF, DDP (India-Japan CEPA & Korea-India CEPA Preferential CoO)",
      topProducts: "0.4mm Skived Bridle Wallets, YKK Excella Briefcases, Structured Totes",
    },
  ];

  const exportFaqs = [
    {
      question: "Which HS / HTS tariff codes apply to UNICON LEATHER export shipments?",
      answer:
        "We pre-classify all commercial invoices under standard WCO Harmonized System codes: HS 4202.21 (handbags, totes, and shoulder bags with outer surface of leather), HS 4202.11 (executive briefcases and laptop folios), HS 4202.31 (wallets, cardholders, and pocket goods), HS 4202.91 (travel duffels, holdalls, and backpacks), and HS 4203.10 / 4203.30 (genuine leather jackets and belts).",
    },
    {
      question: "Which countries qualify for 0% or reduced import duty when sourcing leather goods from India?",
      answer:
        "Australian brands enjoy 0% customs duty under the India-Australia ECTA treaty; UAE importers receive 0% customs duty under the India-UAE CEPA treaty; Japanese and South Korean brands benefit from preferential tariff reductions under the India-Japan CEPA and Korea-India CEPA agreements. We issue official Chamber of Commerce / DGFT Certificates of Origin with every shipment.",
    },
    {
      question: "How does Delivered Duty Paid (DDP) shipping work for overseas fashion brands?",
      answer:
        "Under DDP Incoterms, UNICON LEATHER and our licensed freight forwarders manage export clearance in India, international air or ocean transit, destination customs brokerage, import duty/tariff payment, and final-mile delivery directly to your warehouse or 3PL in the USA, Canada, UK, EU, Australia, UAE, Japan, or South Korea.",
    },
    {
      question: "What chemical and biosecurity compliance certificates accompany international shipments?",
      answer:
        "Every export consignment includes a Commercial Invoice, Detailed Packing List, Certificate of Origin, and Manufacturer Tanning Declaration (for Australian DAFF biosecurity). Upon buyer request, we coordinate batch-specific SGS, Intertek, or TÜV laboratory test reports verifying EU/UK REACH Annex XVII (Cr VI < 3 ppm, AZO-free, EN 1811 nickel release) and US California Proposition 65 compliance.",
    },
  ];

  const exportFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: exportFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={exportFaqSchema} />
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

      {/* 5. Export Logistics & Trade Compliance FAQ (AEO / GEO) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="border border-charcoal/12 bg-white p-8 sm:p-12 space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              International Trade &amp; Customs FAQ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
              Frequently Asked Questions on Global Leather Export &amp; DDP Logistics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exportFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-[#FAF8F5] border border-charcoal/10 space-y-2">
                <h3 className="font-serif text-base sm:text-lg font-medium text-charcoal">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dedicated Country & Regional Sourcing Gateways */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="markets">
        <div className="bg-[#FAF8F5] border border-charcoal/10 p-8 sm:p-12 space-y-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
              Localized Country &amp; City Export Desks
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
              Explore Country-Specific Trade Terms, Tariffs &amp; Compliance Portals
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Select your destination market to review localized customs clearance protocols, preferential trade agreements (ECTA / CEPA / REX), and regional B2B sourcing programs:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <Link href="/en-us" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇺🇸 United States (DDP / Prop 65)
            </Link>
            <Link href="/export/usa/private-label-leather-bags-new-york" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🗽 New York Fashion Sourcing Hub
            </Link>
            <Link href="/export/usa/oem-leather-goods-los-angeles" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🌴 Los Angeles &amp; California OEM Hub
            </Link>
            <Link href="/en-ca" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇨🇦 Canada (CBSA / DDP)
            </Link>
            <Link href="/export/canada/private-label-leather-bags-toronto-vancouver" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🍁 Toronto, Vancouver &amp; Montreal Hub
            </Link>
            <Link href="/en-gb" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇬🇧 United Kingdom (UK REACH)
            </Link>
            <Link href="/en-au" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇦🇺 Australia (0% Duty ECTA)
            </Link>
            <Link href="/export/australia/custom-leather-bags-sydney-melbourne" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🦘 Sydney, Melbourne &amp; Brisbane Hub
            </Link>
            <Link href="/de" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇩🇪 Germany &amp; DACH (Lederwaren)
            </Link>
            <Link href="/fr" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇫🇷 France (Maroquinerie)
            </Link>
            <Link href="/it" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇮🇹 Italy (Pelletteria)
            </Link>
            <Link href="/export/europe/artisan-leather-bag-manufacturer-milan-italy" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🏛️ Milan &amp; Florence Pelletteria Hub
            </Link>
            <Link href="/es" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇪🇸 Spain (Marroquinería)
            </Link>
            <Link href="/nl" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇳🇱 Netherlands &amp; Benelux
            </Link>
            <Link href="/sv" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇸🇪 Sweden &amp; Nordics
            </Link>
            <Link href="/ar" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇦🇪 UAE &amp; GCC (CEPA)
            </Link>
            <Link href="/export/middle-east/luxury-leather-goods-manufacturer-dubai-uae" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🏙️ Dubai, Abu Dhabi &amp; Riyadh Luxury Hub
            </Link>
            <Link href="/ja" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇯🇵 Japan OEM Gateway
            </Link>
            <Link href="/ko" className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs font-mono text-charcoal hover:border-cognac hover:text-cognac transition-colors">
              🇰🇷 South Korea OEM Gateway
            </Link>
            <Link href="/leather-sourcing-india-vs-china-vietnam-italy" className="px-3.5 py-2 bg-charcoal text-white border border-charcoal text-xs font-mono hover:bg-cognac hover:border-cognac transition-colors">
              ⚖️ Compare India vs. China, Vietnam &amp; Italy
            </Link>
            <Link href="/cost-calculator" className="px-3.5 py-2 bg-cognac text-white border border-cognac text-xs font-mono hover:bg-charcoal hover:border-charcoal transition-colors">
              🧮 B2B FOB &amp; DDP Cost Calculator
            </Link>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
