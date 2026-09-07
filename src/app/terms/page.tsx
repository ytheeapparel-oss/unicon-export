import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | UNICON LEATHER",
  description:
    "Commercial manufacturing terms, sampling policies, quality acceptance criteria, and international export payment guidelines.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-espresso text-ivory py-12 sm:py-16 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <div className="max-w-3xl space-y-4 mt-4">
            <Badge variant="gold" size="sm">
              Commercial Framework
            </Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
              Terms & Conditions of Manufacturing
            </h1>
            <p className="text-xs sm:text-sm text-sand/80">
              Commercial terms governing prototype sampling, production purchase orders, quality standards, and export logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm leading-relaxed space-y-6 text-charcoal-700">
        <div className="bg-white p-8 rounded-sm border border-sand/60 space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">1. Prototyping & Sampling Terms</h2>
            <p>
              Physical counter-samples are produced following CAD pattern creation and BOM sign-off. Sampling fees cover specialized leather cutting, custom hardware setups, and master artisan labor. Upon placement of the subsequent bulk production order meeting agreed MOQs, paid sampling fees are credited back against the commercial invoice.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">2. Minimum Order Quantities (MOQ) & Tooling</h2>
            <p>
              Standard MOQs apply per style and colorway as specified on product pages and formal quotes. Custom hardware die moulds (for proprietary locks, pullers, or buckles) require upfront tooling charges and minimum batch runs. Moulds remain dedicated to the originating brand.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">3. Payment Terms & Order Confirmation</h2>
            <p>
              Standard wholesale export production commences upon receipt of 30% advance deposit following Pre-Production (PP) golden sample sign-off. The remaining 70% balance is payable upon final AQL 2.5 inspection sign-off prior to container dispatch (or against Irrevocable LC at Sight for institutional orders).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">4. Quality Acceptance & AQL 2.5 Benchmarks</h2>
            <p>
              All production batches are manufactured against the signed Pre-Production Golden Sample and evaluated according to ISO 2859-1 (AQL 2.5 Major / 4.0 Minor). Natural leather grain variations, subtle pull-up undertones, and organic markings are inherent characteristics of genuine full-grain hides and are not classified as manufacturing defects.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">5. Shipping, Title & Risk of Loss</h2>
            <p>
              Risk of loss and title transfer are governed by the specified Incoterm (Incoterms 2020: FOB, CIF, DDP, or EXW) defined on the proforma invoice. Comprehensive marine cargo insurance is provided under CIF and DDP contracts.
            </p>
          </div>

          <div className="pt-4 border-t border-sand/40 text-[11px] text-charcoal-500 italic">
            Note: All commercial agreements are formalized via mutually executed Purchase Orders (PO) and Proforma Invoices (PI).
          </div>
        </div>
      </section>
    </div>
  );
}
