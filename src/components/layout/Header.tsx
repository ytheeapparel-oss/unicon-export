"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, FileText, Send, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* International B2B Export Status Bar */}
      <div className="hidden lg:block bg-[#FAF8F5] text-[#5A5650] border-b border-[#E8E3DA] py-1.5 px-4 sm:px-8 lg:px-12 xl:px-16 text-[9.5px] uppercase tracking-[0.16em] font-mono">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <span className="text-cognac font-bold inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Direct Export Atelier
            </span>
            <span className="text-[#D5CFC5]">·</span>
            <span>Incoterms: FOB · CIF · DDP Worldwide</span>
            <span className="text-[#D5CFC5]">·</span>
            <span>Compliance: LWG Audited · REACH Annex XVII · Prop 65</span>
          </div>
          <div className="flex items-center gap-3.5 text-[#6A665E]">
            <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-cognac transition-colors lowercase font-sans font-medium">
              {COMPANY_INFO.primaryEmail}
            </a>
            <span className="text-[#D5CFC5]">·</span>
            <a href={COMPANY_INFO.whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-sans font-medium">
              WhatsApp Export Desk
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-xs border-charcoal/10 py-3"
            : "bg-white border-charcoal/10 py-3.5 sm:py-4"
        )}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between gap-4">
          {/* 1. Brand Logo */}
          <Link
            href="/"
            className="flex flex-col group shrink-0 focus:outline-none"
            aria-label="UNICON LEATHER - Return to homepage"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] text-charcoal group-hover:text-cognac transition-colors uppercase">
              UNICON <span className="font-normal text-cognac">LEATHER</span>
            </span>
            <span className="text-[8.5px] sm:text-[9px] tracking-[0.28em] text-charcoal-500 uppercase font-sans font-medium mt-0.5">
              Export Atelier • India
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                const coreCategories = item.children.slice(1, 7);
                const specialtyCategories = item.children.slice(7);

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "px-2 2xl:px-2.5 py-1.5 text-[10.5px] 2xl:text-[11.5px] uppercase tracking-[0.14em] 2xl:tracking-[0.16em] font-medium transition-colors inline-flex items-center gap-1 rounded-none",
                        isActive || activeDropdown === item.label
                          ? "text-cognac font-bold"
                          : "text-charcoal/80 hover:text-cognac"
                      )}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180 text-cognac" : "text-charcoal-400"
                        )}
                      />
                    </button>

                    {/* Luxury Mega Menu Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] max-w-[90vw] bg-white border border-charcoal/15 shadow-2xl rounded-none p-5 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                        <div className="grid grid-cols-12 gap-5">
                          {/* Column 1: Core Categories */}
                          <div className="col-span-4 space-y-2.5">
                            <div className="pb-1.5 border-b border-charcoal/10 flex items-center justify-between">
                              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-cognac">
                                Core Silhouettes
                              </span>
                              <span className="text-[9px] text-charcoal-400 font-mono">01–06</span>
                            </div>
                            <div className="space-y-0.5">
                              {coreCategories.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-2 py-1.5 rounded-none hover:bg-cognac-50/60 transition-colors group/link"
                                >
                                  <span className="block text-[11.5px] font-medium text-charcoal group-hover/link:text-cognac">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="block text-[10px] text-charcoal-400 font-light truncate mt-0.5">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 2: Specialty & Artisan Lines */}
                          <div className="col-span-4 space-y-2.5">
                            <div className="pb-1.5 border-b border-charcoal/10 flex items-center justify-between">
                              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-cognac">
                                Artisan & Specialty Lines
                              </span>
                              <span className="text-[9px] text-charcoal-400 font-mono">07–12</span>
                            </div>
                            <div className="space-y-0.5">
                              {specialtyCategories.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-2 py-1.5 rounded-none hover:bg-cognac-50/60 transition-colors group/link"
                                >
                                  <span className="block text-[11.5px] font-medium text-charcoal group-hover/link:text-cognac">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="block text-[10px] text-charcoal-400 font-light truncate mt-0.5">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Column 3: Featured Atelier Card */}
                          <div className="col-span-4 bg-[#fbf9f6] border border-charcoal/10 p-4 flex flex-col justify-between">
                            <div className="space-y-2">
                              <span className="inline-block text-[8.5px] font-mono tracking-widest uppercase font-bold text-white bg-cognac px-2 py-0.5">
                                Export Master Line
                              </span>
                              <h4 className="font-serif text-sm font-bold text-charcoal leading-snug">
                                12 Master Manufacturing Categories
                              </h4>
                              <p className="text-[11px] text-charcoal-600 font-light leading-relaxed">
                                Bespoke sampling, custom Pantone leather dyeing, and export batches engineered for global luxury retail.
                              </p>
                            </div>

                            <div className="space-y-1.5 pt-3 border-t border-charcoal/10">
                              <Link
                                href="/products"
                                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-cognac hover:text-charcoal uppercase tracking-wider transition-colors"
                              >
                                View All 12 Collections <ArrowRight className="w-3 h-3" />
                              </Link>
                              <Link
                                href="/catalogue-request"
                                className="block text-[10px] text-charcoal-500 hover:text-cognac underline underline-offset-2 transition-colors"
                              >
                                Download Digital Lookbook (PDF)
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-2 2xl:px-2.5 py-1.5 text-[10.5px] 2xl:text-[11.5px] uppercase tracking-[0.14em] 2xl:tracking-[0.16em] font-medium transition-colors rounded-none relative whitespace-nowrap",
                    isActive
                      ? "text-cognac font-bold"
                      : "text-charcoal/80 hover:text-cognac"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cognac" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Button
              href="/catalogue-request"
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex text-[10.5px] uppercase tracking-wider font-semibold py-2 px-3.5 border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <FileText className="w-3 h-3" />
              Catalogue
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-[10.5px] uppercase tracking-wider font-semibold py-2 px-4 shadow-xs hover:shadow-md"
            >
              <Send className="w-3 h-3" />
              Bulk Inquiry
            </Button>
          </div>

          {/* 4. Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs uppercase tracking-wider font-bold px-3 py-2 sm:hidden"
            >
              Inquire
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal hover:text-cognac focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-white border-b border-charcoal/20 shadow-2xl max-h-[85vh] overflow-y-auto z-50">
          <div className="px-6 pt-5 pb-10 space-y-4">
            {/* Top Contact Strip */}
            <div className="pb-3 mb-3 border-b border-charcoal/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-charcoal font-bold block">
                  Export Desk Online
                </span>
                <a
                  href={COMPANY_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cognac font-bold inline-flex items-center gap-1.5 mt-0.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> WhatsApp: {COMPANY_INFO.whatsapp}
                </a>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                ● Live RFQ
              </span>
            </div>

            {/* Nav Links */}
            {MAIN_NAV.map((item) => (
              <div key={item.label} className="py-1 border-b border-charcoal/5">
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-2 text-base font-serif font-bold text-charcoal"
                    >
                      <span>{item.label} (12 Collections)</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180 text-cognac"
                        )}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-3 py-2 space-y-2 border-l-2 border-cognac my-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-1.5 text-xs text-charcoal-700 hover:text-cognac font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-serif font-bold text-charcoal hover:text-cognac"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Drawer Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <Button href="/catalogue-request" variant="outline" size="md" className="w-full text-xs">
                <FileText className="w-4 h-4" /> Download B2B Catalogue (PDF)
              </Button>
              <Button href="/contact" variant="primary" size="md" className="w-full text-xs">
                <Send className="w-4 h-4" /> Start Bulk Inquiry / RFQ
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
