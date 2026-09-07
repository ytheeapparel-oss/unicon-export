"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, FileText, Send, PhoneCall } from "lucide-react";
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-charcoal/10 py-4"
          : "bg-white border-charcoal/10 py-6 sm:py-7"
      )}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac"
          >
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal group-hover:text-cognac transition-colors">
              UNICON <span className="text-cognac font-normal">LEATHER</span>
            </span>
            <span className="text-2xs sm:text-xs tracking-[0.35em] text-charcoal-500 uppercase font-sans font-semibold mt-0.5">
              Manufacturer & Exporter • India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-4" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "px-3 py-2 text-sm uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-1.5 rounded-none",
                        isActive
                          ? "text-cognac font-bold"
                          : "text-charcoal hover:text-cognac"
                      )}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180 text-cognac" : "text-charcoal-400"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-96 bg-white border border-charcoal/15 shadow-2xl rounded-none py-3 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                        <div className="px-5 py-2.5 border-b border-charcoal/10 bg-charcoal-50">
                          <p className="text-xs uppercase tracking-wider text-charcoal font-bold">
                            B2B Product Categories
                          </p>
                        </div>
                        <div className="max-h-[28rem] overflow-y-auto py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-3 hover:bg-cognac-50 transition-colors group/item"
                            >
                              <span className="block text-sm font-semibold text-charcoal group-hover/item:text-cognac">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-charcoal-500 leading-tight mt-1">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
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
                    "px-3 py-2 text-sm uppercase tracking-widest font-semibold transition-colors rounded-none",
                    isActive
                      ? "text-cognac font-bold border-b-2 border-cognac -mb-[2px]"
                      : "text-charcoal hover:text-cognac"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              href="/catalogue-request"
              variant="outline"
              size="md"
              className="hidden md:inline-flex text-xs py-3 px-5 border-charcoal text-charcoal"
            >
              <FileText className="w-4 h-4" />
              Catalogue
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="text-xs py-3 px-6 shadow-md"
            >
              <Send className="w-4 h-4" />
              Bulk Inquiry
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3.5 py-2 sm:hidden"
            >
              Inquire
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-charcoal hover:text-cognac focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-charcoal/20 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-6 pt-5 pb-10 space-y-4">
            <div className="pb-4 mb-4 border-b border-charcoal/10">
              <span className="text-xs tracking-widest uppercase text-charcoal font-bold block mb-1">
                Direct Export Desk
              </span>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cognac font-bold inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> WhatsApp: {COMPANY_INFO.whatsapp}
              </a>
            </div>

            {MAIN_NAV.map((item) => (
              <div key={item.label} className="py-1.5">
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-2 text-lg font-serif font-bold text-charcoal"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180 text-cognac"
                        )}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2.5 border-l-2 border-cognac my-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-charcoal-700 hover:text-cognac font-medium"
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
                    className="block py-2.5 text-lg font-serif font-bold text-charcoal hover:text-cognac"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 mt-6 border-t border-charcoal/10 flex flex-col gap-3.5">
              <Button href="/catalogue-request" variant="outline" size="lg" className="w-full">
                <FileText className="w-4 h-4" /> Download B2B Catalogue
              </Button>
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                <Send className="w-4 h-4" /> Start Bulk / OEM Inquiry
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
