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
  FileText
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { COMPANY_INFO } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { JsonLdScript, generateFaqSchema } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "Contact Export Desk & Bulk Wholesale RFQ | UNICON LEATHER",
  description:
    "Direct contact details, WhatsApp export line, factory address, and comprehensive B2B bulk inquiry form for UNICON LEATHER. 12–24 business hours response guarantee.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white space-y-20 sm:space-y-32 pb-24">
      <JsonLdScript schema={generateFaqSchema(FAQS)} />

      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
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
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border-2 border-charcoal/15 shadow-2xl space-y-6 text-left">
            <Breadcrumbs items={[{ label: "Contact & Bulk RFQ" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-none shadow-sm">
                ★ Global B2B Communication Desk
              </span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono tracking-widest uppercase font-semibold">
                12–24H RESPONSE SLA
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[0.98] tracking-tight uppercase">
              Contact & Bulk <br />
              <span className="italic font-normal text-cognac lowercase">wholesale</span> <br />
              EXPORT INQUIRY DESK
            </h1>

            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light max-w-2xl">
              Connect directly with our export management and engineering team. We assist international fashion brands, wholesalers, and retail buying houses with commercial quotes, tech pack reviews, and sample development.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#rfp-form" variant="primary" size="lg" className="shadow-lg">
                <Send className="w-4 h-4 mr-2" /> Submit Commercial RFP
              </Button>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-widest text-xs sm:text-sm border-2 border-charcoal text-charcoal bg-white hover:bg-charcoal hover:text-white px-6 py-3.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-cognac" /> WhatsApp Export Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact & Form Section (Pure White) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="rfp-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Factory Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="cognac" size="sm">
                Direct Channels
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                Factory & Export Office
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
                Our export sales and engineering desk operates continuously across North American, European, and Asian business hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700">
              <div className="bg-white p-6 rounded-none border-2 border-charcoal/15 shadow-xs flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif">Factory & Atelier Address</strong>
                  <p className="text-charcoal-600 mt-1 leading-relaxed font-light">{COMPANY_INFO.fullAddress}</p>
                  <span className="text-xs text-charcoal-400 mt-1 block">
                    Visits by prior business appointment only.
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-none border-2 border-charcoal/15 shadow-xs flex items-start gap-4">
                <Mail className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif">Corporate Email Desks</strong>
                  <p className="text-charcoal-600 mt-1">
                    Primary Export: <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-cognac font-medium hover:underline">{COMPANY_INFO.primaryEmail}</a>
                  </p>
                  <p className="text-charcoal-600">
                    General Inquiries: <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-cognac font-medium hover:underline">{COMPANY_INFO.secondaryEmail}</a>
                  </p>
                  <span className="text-xs text-charcoal-400 mt-1 block">
                    Response SLA: Within 12–24 business hours.
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-none border-2 border-charcoal/15 shadow-xs flex items-start gap-4">
                <MessageCircle className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif">Direct WhatsApp & Phone</strong>
                  <p className="text-charcoal-600 mt-1">
                    Phone/WhatsApp: <span className="font-mono font-medium text-charcoal">{COMPANY_INFO.whatsapp}</span>
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

              <div className="bg-white p-6 rounded-none border-2 border-charcoal/15 shadow-xs flex items-start gap-4">
                <Clock className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block text-base font-serif">Operating Hours</strong>
                  <p className="text-charcoal-600 mt-1 leading-relaxed font-light">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Geographical Proximity Block (Pure White) */}
            <div className="bg-white text-charcoal p-8 rounded-none border-2 border-charcoal/15 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cognac" /> Strategic Port Proximity
                </span>
                <span className="text-[10px] text-cognac font-mono tracking-widest font-bold">EXPORT HUB</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Our manufacturing facilities are strategically located near major international cargo airports and deep-water container ports in India, ensuring rapid container dispatch without domestic transit delays.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Submit Commercial RFP / Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Please complete all required fields for accurate FOB/CIF quotation.
              </p>
            </div>
            <BulkInquiryForm inquiryType="general" />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pt-8" id="faqs">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="cognac" size="sm">
            Buyer FAQ
          </Badge>
          <h2 className="font-serif text-4xl font-bold text-charcoal tracking-tight">
            Frequently Asked Questions for Overseas Buyers
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light">
            Clear answers regarding sampling procedures, MOQs, payment terms, Incoterms, and NDA protection.
          </p>
        </div>

        <Accordion items={FAQS} />
      </section>
    </div>
  );
}
