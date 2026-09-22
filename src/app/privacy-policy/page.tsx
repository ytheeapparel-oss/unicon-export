import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | UNICON LEATHER",
  description:
    "B2B privacy policy, data protection, and confidentiality terms for UNICON LEATHER international clients.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-[#FAF8F5] !mt-0 text-charcoal py-12 sm:py-16 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "B2B Privacy Policy" }]} />
          <div className="max-w-3xl space-y-4 mt-4">
            <Badge variant="cognac" size="sm">
              Legal Transparency
            </Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
              B2B Privacy &amp; Confidentiality Policy
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Last Updated: January 2025 • Governs international commercial inquiries and client design data.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal text-xs sm:text-sm leading-relaxed space-y-6 text-charcoal-700">
        <div className="bg-white p-8 rounded-sm border border-sand/60 space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">1. Scope & B2B Context</h2>
            <p>
              UNICON LEATHER operates as a business-to-business (B2B) manufacturing facility. This policy outlines how we collect, store, and process corporate contact details, tech packs, CAD sketches, and commercial order information submitted by wholesale buyers, importers, and brand representatives.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">2. Confidentiality & Non-Disclosure of Proprietary Designs</h2>
            <p>
              All proprietary technical drawings, 3D CAD files, physical reference samples, and bespoke mould specifications shared with UNICON LEATHER are held in strict commercial confidence. We never disclose, sublicense, or display private-label client developments without prior written consent. Formal bilateral Non-Disclosure Agreements (NDAs) are executed upon request.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">3. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Representative Name, Corporate Title, and Company Details.</li>
              <li>Business Email, Phone/WhatsApp number, and Delivery Country.</li>
              <li>Target specifications, Bill of Materials (BOM), and order volume forecasts.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">4. Data Usage & International Transfers</h2>
            <p>
              Corporate data is utilized strictly for generating quotations, managing prototype sampling, coordinating export logistics (customs invoices, shipping waybills), and issuing quarterly lookbook updates. We never monetize or sell corporate buyer data to third-party brokers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">5. Data Subject Rights & Contact</h2>
            <p>
              For data access inquiries, modification requests, or to unsubscribe from B2B lookbook communications, contact our compliance officer at <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-cognac font-medium">{COMPANY_INFO.primaryEmail}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-sand/40 text-[11px] text-charcoal-500 italic">
            Disclaimer: This draft privacy policy should be reviewed with legal counsel in the applicable jurisdiction prior to entering binding international contracts.
          </div>
        </div>
      </section>
    </div>
  );
}
