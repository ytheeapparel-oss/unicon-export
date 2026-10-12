import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FileText, Layers } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";

export function CatalogueFallback() {
  return (
    <div className="w-full bg-white pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative w-full !mt-0 min-h-[75vh] lg:min-h-[82vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/catalogue-hero.jpg"
            alt="UNICON LEATHER - Full B2B Export Catalogue & Master Lines"
            className="w-full h-full object-cover object-center lg:object-[center_28%]"
            loading="eager"
          />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-24">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border border-charcoal/10 shadow-lg space-y-6 text-left">
            <Breadcrumbs items={[{ label: "B2B Export Catalogue" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase px-3.5 py-1 rounded-none shadow-xs">
                Export Collection 2025/2026
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal/60 font-mono tracking-widest uppercase">
                Direct Atelier Manufacturing
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12] tracking-tight">
              Export Catalogue &amp; <br />
              <span className="italic text-cognac font-light">B2B Manufacturing</span> Lines
            </h1>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light max-w-2xl">
              Explore our current production silhouettes, ready for private-label branding, custom leather specification, or bespoke OEM development. Low MOQs and certified ethical supply chains.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#catalogue-grid" variant="primary" size="lg" className="shadow-md">
                Browse Silhouettes Below
              </Button>
              <Button href="/catalogue-request" variant="outline" size="lg" className="border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white">
                <FileText className="w-4 h-4 mr-2" /> Request PDF Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 mt-16">
        {/* 2. Category Browse Links (Real Semantic Links for Search Crawlers) */}
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="border-b border-charcoal/10 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-normal text-charcoal tracking-tight">
                Browse by Master Silhouette
              </h2>
              <p className="text-xs text-charcoal-500 font-light">
                Select a specialized manufacturing line to inspect specifications.
              </p>
            </div>
            <span className="text-xs font-mono text-charcoal-400">
              12 Master Categories
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="p-3 text-left border rounded-none transition-all flex flex-col justify-between border-charcoal/10 bg-white hover:border-charcoal/30 hover:bg-[#faf8f5]"
              >
                <span className="font-serif text-xs sm:text-sm font-medium text-charcoal block line-clamp-1">
                  {cat.name}
                </span>
                <span className="text-[10px] text-charcoal-400 font-mono mt-2 block">
                  {cat.featuredProductCount} Silhouettes
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Static Products Grid with Real Links & Content */}
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12" id="catalogue-grid">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-mono border-b border-charcoal/10 pb-4">
            <span>Showing {PRODUCTS.length} production styles</span>
            <span className="hidden sm:inline">Export Ready: USA, UK, EU, UAE, Australia</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col bg-white border border-charcoal/10 rounded-none overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-charcoal-50 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={`${product.name} - Leather Goods Manufacturer India`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black/90 text-white font-mono text-[10px] px-2 py-0.5">
                      {product.id}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-white/95 text-charcoal text-[11px] font-medium px-2 py-0.5 shadow-xs">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-2">
                    <Link href={`/products/${product.slug}`} className="block group-hover:text-cognac transition-colors">
                      <h3 className="font-serif text-xl font-bold text-charcoal leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="pt-2 border-t border-charcoal/10 grid grid-cols-2 gap-2 text-xs text-charcoal-500">
                      <div>
                        <span className="block text-charcoal-400 text-[10px] uppercase tracking-wider">Material</span>
                        <span className="font-medium text-charcoal-900 truncate block">{product.leatherType.split("(")[0]}</span>
                      </div>
                      <div>
                        <span className="block text-charcoal-400 text-[10px] uppercase tracking-wider">MOQ</span>
                        <span className="font-medium text-charcoal-900 block truncate">{product.moq.split("(")[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-charcoal/10 flex items-center gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 text-center text-xs py-2.5 border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white transition-colors"
                    >
                      View Specs
                    </Link>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}&code=${product.id}#inquiry-form`}
                      className="flex-1 text-center text-xs py-2.5 bg-cognac hover:bg-cognac-600 text-white transition-colors"
                    >
                      Bulk Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
