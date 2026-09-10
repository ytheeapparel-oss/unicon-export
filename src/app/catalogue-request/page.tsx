import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { CatalogueRequestForm } from "@/components/forms/CatalogueRequestForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Product Catalogue & Lookbook | UNICON LEATHER",
  description:
    "Download the UNICON LEATHER Master B2B Lookbook and Technical Specification Directory containing leather tannages, hardware finishes, and MOQ parameters.",
};

export default function CatalogueRequestPage() {
  return (
    <div className="w-full bg-white space-y-20 pb-24">
      {/* Top Banner */}
      <section className="bg-white border-b border-charcoal/10 py-12 sm:py-16">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs items={[{ label: "Download B2B Catalogue" }]} />
          <div className="max-w-4xl space-y-4 mt-6">
            <Badge variant="cognac" size="sm">
              Digital Lookbook Access
            </Badge>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-charcoal tracking-tight">
              Request Master Export Catalogue
            </h1>
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-light">
              Gain instant access to our comprehensive product line specifications, leather swatch directory, hardware finishes, and wholesale pricing guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content (Full Breadth) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Badge variant="cognac" size="sm">
              What’s Inside the Lookbook
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Comprehensive Manufacturing Overview
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <span><strong>Full 12-Category Product Index:</strong> Dimensional schematics, handle clearances, and pocket configurations.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <span><strong>Material & Leather Swatch Guide:</strong> Full-grain bovine, calf nappa, vegetable-tanned, and water-resistant pull-up specifications.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <span><strong>Custom Hardware & Branding Options:</strong> Zinc alloy, brass dies, debossing styles, and foil finishes.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                <span><strong>Incoterms & Freight Guidelines:</strong> Ocean container volume calculations and air transit SLA matrix.</span>
              </div>
            </div>

            <div className="bg-charcoal-50 p-6 rounded-none border border-charcoal/10 text-xs sm:text-sm space-y-2 text-charcoal-600">
              <span className="font-bold text-charcoal block">Commercial Buyer Note:</span>
              <p className="font-light leading-relaxed">Physical leather swatch cards (containing actual dyed leather cuttings) are dispatched via DHL Express upon request for verified corporate buyers.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <CatalogueRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
