import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { FOOTER_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { CapabilitiesTicker } from "@/components/ui/CapabilitiesTicker";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Continuous Moving Capabilities Panels (Before Footer) */}
      <CapabilitiesTicker />

      <footer className="bg-white text-charcoal border-t-2 border-charcoal/15">
        {/* Top Value Pillars */}
        <div className="border-b border-charcoal/10 bg-white">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-cognac font-serif text-xl font-bold flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Global Export Direct
                </span>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  FOB, CIF, DDP shipping to USA, UK, EU, UAE, Australia & Japan.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-cognac font-serif text-xl font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Verified Compliance
                </span>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  REACH Annex XVII, CA Prop 65 & LWG audited partner tanneries.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-cognac font-serif text-xl font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Fast Prototype Samples
                </span>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  Physical counter-samples dispatched in 7–14 days via DHL/FedEx.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-cognac font-serif text-xl font-bold flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Rapid Export SLA
                </span>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  Formal commercial quotes returned within 12–24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Directory */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand & Address Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href="/" className="inline-block">
                  <span className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-charcoal">
                    UNICON <span className="text-cognac font-normal">LEATHER</span>
                  </span>
                </Link>
                <p className="text-xs uppercase tracking-widest text-charcoal-500 font-mono mt-1 font-semibold">
                  Custom Luxury Leather Goods Manufacturer & Exporter
                </p>
              </div>

              <p className="text-sm text-charcoal-600 leading-relaxed max-w-md font-light">
                Specialized in contract manufacturing, private label development, and global wholesale export of handcrafted genuine leather bags, wallets, belts, and bespoke accessories.
              </p>

              <div className="space-y-2 text-sm text-charcoal-600 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cognac shrink-0 mt-1" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cognac shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-cognac transition-colors">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cognac shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cognac transition-colors font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Product Categories */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal mb-6 pb-2 border-b border-charcoal/10">
                Core Categories
              </h3>
              <ul className="space-y-3.5 text-sm text-charcoal-600">
                {FOOTER_NAV.products.slice(0, 6).map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Atelier & Heritage */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal mb-6 pb-2 border-b border-charcoal/10">
                Our Atelier
              </h3>
              <ul className="space-y-3.5 text-sm text-charcoal-600">
                {FOOTER_NAV.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Trade & Export */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal mb-6 pb-2 border-b border-charcoal/10">
                Trade & Compliance
              </h3>
              <ul className="space-y-3.5 text-sm text-charcoal-600">
                {FOOTER_NAV.trade.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-cognac transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="mt-16 pt-8 border-t border-charcoal/10 text-xs text-charcoal-500 font-light">
            <p className="leading-relaxed">
              <strong className="text-charcoal font-semibold">Export Transparency Note:</strong> UNICON LEATHER operates strictly as an export-oriented B2B manufacturing facility. All product specifications, leather tannages, and compliance documents are tailored to overseas importer protocols. Specific tannery audits (LWG), chemical test reports (SGS/Intertek), and proprietary tooling agreements are provided upon initial RFQ qualification.
            </p>
          </div>

          {/* Bottom Legal Bar */}
          <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
            <p>© {currentYear} UNICON LEATHER. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              {FOOTER_NAV.legal.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-cognac transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
