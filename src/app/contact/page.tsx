import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  Send,
  FileText,
  Compass,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { GoogleMapSection } from "@/components/ui/GoogleMapSection";
import { COMPANY_INFO } from "@/data/company";
import {
  JsonLdScript,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateContactPageSchema,
} from "@/components/seo/JsonLdScript";

const CONTACT_DESK_FAQS = [
  {
    id: "contact-faq-1",
    question: "How quickly does the Unicon Leather export desk respond to RFQs and tech packs?",
    answer:
      "Our export merchandising and CAD engineering desk responds to all commercial inquiries within 12–24 business hours (Monday–Saturday). For inquiries that include a dimensioned tech pack, Bill of Materials (BOM), or reference photographs, we provide a preliminary manufacturability review, estimated hide consumption (sq. ft.), and tiered FOB/CIF/DDP unit quotation within 24–48 hours.",
  },
  {
    id: "contact-faq-2",
    question: "Do you sign a Non-Disclosure Agreement (NDA) before we share proprietary CAD files?",
    answer:
      "Yes. Intellectual property protection is standard across our Noida corporate office and Bantala, Kolkata factory. You can either send your company's standard mutual NDA to uniconexport@gmail.com or request our bilateral NDA template prior to uploading CAD patterns, custom hardware 3D files, or seasonal lookbooks.",
  },
  {
    id: "contact-faq-3",
    question: "Can international buyers or third-party inspection agencies visit your Noida office or Kolkata factory?",
    answer:
      "Yes. Brand founders, sourcing directors, and nominated inspection agencies (SGS, Intertek, TÜV Rheinland, QIMA) are welcome to schedule in-person appointments at our Noida Sector-106 corporate showroom (35 minutes from New Delhi IGI Airport) or our 4-plot manufacturing atelier in Bantala, Kolkata Leather Complex (Plots 676, 687, 944, 1084). We also conduct live WhatsApp/Zoom video walk-throughs of the cutting, skiving, and stitching lines.",
  },
  {
    id: "contact-faq-4",
    question: "How can we request physical leather swatch cards or a prototype counter-sample?",
    answer:
      "Select 'Prototyping & Sampling Only (1–5 units)' or tap '+ Request Leather Swatch Kit' in the inquiry form above, or message our export desk on WhatsApp (+91 9873102341). Physical counter-samples are crafted in 5–7 business days for wallets/belts and 7–14 business days for bags/jackets and shipped worldwide via DHL or FedEx Express.",
  },
];

export const metadata: Metadata = {
  title: "Contact Export Desk | Wholesale Leather Bags & OEM Bag Factory India",
  description:
    "Direct contact details, WhatsApp export desk, and B2B quotation form for UNICON LEATHER. Inquire for wholesale leather bags India, custom OEM/ODM manufacturing, and export shipping. 12–24h response guarantee.",
  alternates: {
    canonical: "https://www.uniconleather.com/contact",
  },
  openGraph: {
    title: "Contact UNICON LEATHER | Wholesale Leather Bags India & OEM Factory",
    description:
      "Direct B2B quotation desk for wholesale leather bags, custom OEM/ODM bag manufacturing, and international export orders.",
    url: "https://www.uniconleather.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/contact-hero.png",
        width: 1200,
        height: 630,
        alt: "Contact UNICON LEATHER Export Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact UNICON LEATHER | Wholesale Leather Bags India & OEM Factory",
    description:
      "Direct B2B quotation desk for wholesale leather bags, custom OEM/ODM bag manufacturing, and international export orders.",
    images: ["https://www.uniconleather.com/images/contact-hero.png"],
  },
};

export default function ContactPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "Contact Export Desk", url: "https://www.uniconleather.com/contact" },
  ]);

  return (
    <>
      <JsonLdScript schema={generateContactPageSchema()} />
      <JsonLdScript schema={generateFaqSchema(CONTACT_DESK_FAQS)} />
      <JsonLdScript schema={breadcrumbsSchema} />

      <div className="w-full bg-white pb-24">
        {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
        <section className="relative w-full !mt-0 min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
          {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/contact-hero.png"
              alt="UNICON LEATHER - Contact Export Desk & Global Inquiries"
              className="w-full h-full object-cover object-center lg:object-[center_38%]"
              loading="eager"
            />
          </div>

          {/* Elegant Floating Editorial Card on Pure White */}
          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
            <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-lg space-y-6 text-left">
              <Breadcrumbs items={[{ label: "Contact & Bulk RFQ" }]} />

              <div className="inline-flex items-center gap-3 mt-2">
                <span className="bg-cognac text-white text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1 rounded-none shadow-xs">
                  Global B2B Communication Desk
                </span>
                <span className="text-[11px] sm:text-xs text-charcoal/60 font-mono tracking-widest uppercase">
                  12–24h Response SLA
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
                Contact &amp; Wholesale <br />
                <span className="italic text-cognac font-light">Export</span> Inquiry Desk
              </h1>

              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light max-w-2xl">
                Connect directly with our export management and engineering team. As trusted leather bag manufacturers in India and wholesale leather goods exporters, we assist international fashion brands, wholesalers, and retail buying houses with bulk quotation requests, tech pack feasibility, and rapid sample prototyping.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="#rfp-form" variant="primary" size="lg" className="shadow-md">
                  <Send className="w-4 h-4 mr-2" /> Submit Commercial RFP
                </Button>
                <a
                  href="#google-map-locations"
                  className="inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.14em] text-xs sm:text-sm border border-cognac/40 text-cognac bg-white hover:bg-cognac hover:text-white px-5 py-3.5 transition-colors shadow-xs"
                >
                  <MapPin className="w-4 h-4 mr-2" /> Google Business Profile
                </a>
                <a
                  href={COMPANY_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.14em] text-xs sm:text-sm border border-charcoal/30 text-charcoal bg-white hover:bg-charcoal hover:text-white px-6 py-3.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-cognac" /> WhatsApp Export Desk
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-16 sm:space-y-24 mt-12 sm:mt-16">
          {/* 2. Official Google Business Profile & Live Map (Upper Positioning) */}
          <GoogleMapSection />

          {/* 3. Main Contact & Form Section (Pure White) */}
          <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="rfp-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Factory Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="cognac" size="sm">
                Direct Channels
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
                Factory &amp; Export Office
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                Our export sales and engineering desk operates continuously across North American, European, and Asian business hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700">
              {/* 1. Noida Corporate Office */}
              <div
                className="bg-[#faf8f5] p-5 sm:p-6 rounded-none border border-charcoal/10 shadow-xs flex items-start gap-4"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="UNICON LEATHER" />
                <meta itemProp="telephone" content={COMPANY_INFO.phone} />
                <meta itemProp="email" content={COMPANY_INFO.primaryEmail} />
                <MapPin className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <strong className="text-charcoal text-base font-serif font-medium">Delhi NCR Corporate &amp; Sourcing Office</strong>
                    <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">Noida</span>
                  </div>
                  <address
                    className="not-italic text-charcoal-600 mt-1 leading-relaxed font-light"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106</span>,{" "}
                    <span itemProp="addressLocality">Noida</span>,{" "}
                    <span itemProp="addressRegion">Uttar Pradesh</span>{" "}
                    <span itemProp="postalCode">201304</span>,{" "}
                    <span itemProp="addressCountry">India</span>
                  </address>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <a
                      href={COMPANY_INFO.maps.noida.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="hasMap"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cognac hover:underline font-mono"
                    >
                      Open Noida Office on Google Maps →
                    </a>
                    <span className="text-charcoal/30">•</span>
                    <a
                      href="#google-map-locations"
                      className="inline-flex items-center gap-1 text-xs text-charcoal/60 hover:text-charcoal font-mono"
                    >
                      View on interactive map ↓
                    </a>
                  </div>
                  <span className="text-xs text-charcoal-400 mt-1 block">
                    Buyer consultations &amp; sample review by prior appointment.
                  </span>
                </div>
              </div>

              {/* 2. Kolkata Manufacturing Atelier */}
              <div
                className="bg-[#faf8f5] p-5 sm:p-6 rounded-none border border-charcoal/10 shadow-xs flex items-start gap-4"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="UNICON LEATHER — Manufacturing Atelier" />
                <meta itemProp="telephone" content={COMPANY_INFO.phone} />
                <meta itemProp="email" content={COMPANY_INFO.primaryEmail} />
                <MapPin className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <strong className="text-charcoal text-base font-serif font-medium">Manufacturing Factory &amp; Export Atelier</strong>
                    <span className="text-[10px] font-mono uppercase bg-cognac/10 text-cognac px-2 py-0.5 font-bold">Kolkata</span>
                  </div>
                  <address
                    className="not-italic text-charcoal-600 mt-1 leading-relaxed font-light"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex</span>,{" "}
                    <span itemProp="addressLocality">Kolkata</span>,{" "}
                    <span itemProp="addressRegion">West Bengal</span>{" "}
                    <span itemProp="postalCode">743502</span>,{" "}
                    <span itemProp="addressCountry">India</span>
                  </address>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <a
                      href={COMPANY_INFO.maps.kolkata.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cognac hover:underline font-mono"
                    >
                      Open Factory on Google Maps →
                    </a>
                    <span className="text-charcoal/30">•</span>
                    <a
                      href="#google-map-locations"
                      className="inline-flex items-center gap-1 text-xs text-charcoal/60 hover:text-charcoal font-mono"
                    >
                      View on interactive map ↓
                    </a>
                  </div>
                  <span className="text-xs text-charcoal-400 mt-1 block">
                    Full-scale OEM/ODM cutting, skiving, stitching &amp; export dispatch.
                  </span>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-none border border-charcoal/10 shadow-xs flex items-start gap-4">
                <Mail className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif font-medium">Corporate Email Desk</strong>
                  <p className="text-charcoal-600 mt-1">
                    Direct Email: <a href="mailto:uniconexport@gmail.com" className="text-cognac font-medium hover:underline">uniconexport@gmail.com</a>
                  </p>
                  <span className="text-xs text-charcoal-400 mt-1 block">
                    Monitored 24/7 for international time zones · Response SLA: Within 12–24 business hours.
                  </span>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-none border border-charcoal/10 shadow-xs flex items-start gap-4">
                <MessageCircle className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif font-medium">Direct WhatsApp &amp; Phone</strong>
                  <p className="text-charcoal-600 mt-1">
                    Phone / WhatsApp:{" "}
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-medium text-charcoal hover:text-cognac transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                  <a
                    href={COMPANY_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cognac mt-2 hover:underline"
                  >
                    Open WhatsApp Chat Now →
                  </a>
                </div>
              </div>

              <div className="bg-[#faf8f5] p-5 sm:p-6 rounded-none border border-charcoal/10 shadow-xs flex items-start gap-4">
                <Clock className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif font-medium">Operating Hours</strong>
                  <p className="text-charcoal-600 mt-1 leading-relaxed font-light">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Geographical Proximity Block (Pure White) */}
            <div className="bg-[#faf8f5] text-charcoal p-6 sm:p-8 rounded-none border border-charcoal/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium text-charcoal flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cognac" /> Strategic Port Proximity
                </span>
                <span className="text-[10px] text-cognac font-mono tracking-widest font-semibold">EXPORT HUB</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Our manufacturing facilities are strategically located near major international cargo airports and deep-water container ports in India, ensuring rapid container dispatch without domestic transit delays.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
                Submit Commercial RFP / Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Please complete all required fields for accurate FOB/CIF quotation.
              </p>
            </div>
            <React.Suspense fallback={<div className="p-12 text-center text-xs text-charcoal-400">Loading Inquiry Desk...</div>}>
              <BulkInquiryForm inquiryType="general" />
            </React.Suspense>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pt-8" id="faqs">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="cognac" size="sm">
            Export Desk &amp; Visiting FAQ
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Consultation, NDA, Factory Visit &amp; Sampling FAQs
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light">
            Direct answers regarding RFQ response times, bilateral NDAs, visiting our Noida office or Kolkata atelier, and requesting physical swatches.
          </p>
        </div>

        <Accordion items={CONTACT_DESK_FAQS} />
      </section>
        </div>
      </div>
    </>
  );
}
