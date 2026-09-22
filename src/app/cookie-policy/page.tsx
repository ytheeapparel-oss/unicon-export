import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookie Policy | UNICON LEATHER",
  description:
    "Information on cookies, technical tracking, and performance analytics for UNICON LEATHER website visitors.",
};

export default function CookiePolicyPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-[#FAF8F5] !mt-0 text-charcoal py-12 sm:py-16 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cookie & Analytics Policy" }]} />
          <div className="max-w-3xl space-y-4 mt-4">
            <Badge variant="cognac" size="sm">
              Transparency
            </Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
              Cookie &amp; Analytics Policy
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Details on technical cookies and aggregated analytics utilized to optimize B2B user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm leading-relaxed space-y-6 text-charcoal-700">
        <div className="bg-white p-8 rounded-sm border border-sand/60 space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">1. What Are Cookies</h2>
            <p>
              Cookies are small alphanumeric files placed on your browser to support website navigation, remember catalogue filter preferences, and analyze anonymized visitor traffic to improve our technical documentation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Functional Cookies:</strong> Necessary for core site operation, routing, modal forms, and security tokens.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Aggregated, non-personally identifiable metrics (Google Analytics 4) to monitor page load performance, Core Web Vitals, and overseas traffic geographic patterns.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal mb-2">3. Managing Preferences</h2>
            <p>
              You can configure your browser to reject non-essential cookies at any time without impacting your ability to browse our product catalogue or submit technical RFQs.
            </p>
          </div>

          <div className="pt-4 border-t border-sand/40 text-[11px] text-charcoal-500 italic">
            For further privacy inquiries, email <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-cognac font-medium">{COMPANY_INFO.primaryEmail}</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
