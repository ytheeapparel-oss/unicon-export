import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Mail, MessageCircle, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Inquiry Received | UNICON LEATHER",
  description:
    "Thank you for contacting UNICON LEATHER. Our overseas export desk has received your manufacturing specifications.",
};

export default function ThankYouPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      <div className="w-16 h-16 rounded-full bg-cognac/10 text-cognac flex items-center justify-center mx-auto border border-cognac/30">
        <CheckCircle2 className="w-9 h-9" />
      </div>

      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-widest font-sans font-semibold text-cognac">
          Commercial RFP Confirmed
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal">
          Thank You for Your Inquiry
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto leading-relaxed">
          Your project details have been assigned to our senior export engineering desk. A dedicated account manager will review your leather specifications and respond within our standard SLA.
        </p>
      </div>

      <div className="bg-white p-8 rounded-sm border border-sand/60 shadow-editorial text-left max-w-2xl mx-auto space-y-4">
        <h2 className="font-serif font-bold text-charcoal text-base">Next Steps in Our B2B Workflow:</h2>
        <div className="space-y-3 text-xs text-charcoal-700">
          <div className="flex items-start gap-3">
            <span className="font-mono font-bold text-cognac shrink-0">1.</span>
            <p><strong>Technical Evaluation:</strong> We evaluate pattern dimensions, leather grain feasibility, and hardware mould requirements.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono font-bold text-cognac shrink-0">2.</span>
            <p><strong>BOM & Commercial Quotation:</strong> We issue a formal FOB/CIF tiered quote and sampling schedule within 12–24 business hours.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono font-bold text-cognac shrink-0">3.</span>
            <p><strong>Physical Prototyping:</strong> Upon quotation approval, master artisans craft your prototype counter-samples (7–14 days).</p>
          </div>
        </div>

        <div className="pt-4 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="text-charcoal-500">Need urgent discussion for impending deadlines?</span>
          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cognac font-bold inline-flex items-center gap-1 hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Instant WhatsApp Desk
          </a>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/products" variant="primary" size="md">
          Explore Product Catalogue <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Button>
        <Button href="/" variant="outline" size="md">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
