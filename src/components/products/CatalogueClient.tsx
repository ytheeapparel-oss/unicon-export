"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, RefreshCw, Layers, FileText, Sliders } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { QuickQuoteModal } from "@/components/forms/QuickQuoteModal";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { Product } from "@/types";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedLeather, setSelectedLeather] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      let matchesSearch = true;
      if (searchQuery.trim()) {
        const queryLower = searchQuery.toLowerCase().trim();
        const exactMatch =
          product.name.toLowerCase().includes(queryLower) ||
          product.shortDescription.toLowerCase().includes(queryLower) ||
          product.id.toLowerCase().includes(queryLower) ||
          product.leatherType.toLowerCase().includes(queryLower) ||
          product.category.toLowerCase().includes(queryLower);

        if (exactMatch) {
          matchesSearch = true;
        } else {
          const stopWords = new Set(["manufacturer", "supplier", "factory", "wholesale", "bulk", "oem", "odm", "pass", "code", "and", "for", "with", "the", "in"]);
          const tokens = queryLower.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
          if (tokens.length > 0) {
            matchesSearch = tokens.some(token =>
              product.name.toLowerCase().includes(token) ||
              product.shortDescription.toLowerCase().includes(token) ||
              product.leatherType.toLowerCase().includes(token) ||
              product.category.toLowerCase().includes(token)
            );
          } else {
            matchesSearch = true;
          }
        }
      }

      const matchesLeather =
        selectedLeather === "All" ||
        product.leatherType.toLowerCase().includes(selectedLeather.toLowerCase()) ||
        product.tannage.toLowerCase().includes(selectedLeather.toLowerCase());

      return matchesCategory && matchesSearch && matchesLeather;
    }).sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
  }, [selectedCategory, searchQuery, selectedLeather, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSelectedLeather("All");
    setSortBy("default");
  };

  return (
    <div className="w-full bg-white space-y-16 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[82vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
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

      {/* 2. Category Browse Quick-Bar */}
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
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? "All" : cat.name)}
                className={`p-3 text-left border rounded-none transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-cognac bg-[#faf8f5] shadow-xs"
                    : "border-charcoal/10 bg-white hover:border-charcoal/30"
                }`}
              >
                <span className="font-serif text-xs sm:text-sm font-medium text-charcoal block line-clamp-1">
                  {cat.name}
                </span>
                <span className="text-[10px] text-charcoal-400 font-mono mt-2 block">
                  {cat.featuredProductCount} Silhouettes
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Filter Controls & Search */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="catalogue-grid">
        <div className="bg-white p-5 rounded-none border border-charcoal/10 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, leather type, category, or SKU..."
                className="w-full pl-10 pr-4 py-2.5 bg-charcoal-50/50 border border-charcoal/15 text-xs text-charcoal focus:outline-none focus:border-cognac"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-charcoal-50/50 border border-charcoal/15 text-xs text-charcoal py-2.5 px-3 focus:outline-none focus:border-cognac"
              >
                <option value="All">All Categories ({PRODUCTS.length})</option>
                {PRODUCT_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLeather}
                onChange={(e) => setSelectedLeather(e.target.value)}
                className="bg-charcoal-50/50 border border-charcoal/15 text-xs text-charcoal py-2.5 px-3 focus:outline-none focus:border-cognac"
              >
                <option value="All">All Leather Types</option>
                <option value="Pull-Up">Pull-Up Bovine</option>
                <option value="Vegetable">Vegetable Tanned</option>
                <option value="Nappa">Smooth Calf Nappa</option>
                <option value="Hunter">Distressed Hunter</option>
                <option value="Bridle">Bridle Leather</option>
                <option value="Jacquard">Jacquard & Canvas</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-charcoal-50/50 border border-charcoal/15 text-xs text-charcoal py-2.5 px-3 focus:outline-none focus:border-cognac"
              >
                <option value="default">Sort: Featured</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>

              {(selectedCategory !== "All" || searchQuery || selectedLeather !== "All") && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-cognac hover:underline py-2 px-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        <div className="flex items-center justify-between text-xs text-charcoal-500 font-mono">
          <span>Showing {filteredProducts.length} of {PRODUCTS.length} production styles</span>
          <span className="hidden sm:inline">Export Ready: USA, UK, EU, UAE, Australia</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickInquire={(p) => setQuoteProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-charcoal-50/50 border border-charcoal/10 p-16 text-center space-y-4">
            <Layers className="w-8 h-8 text-cognac mx-auto opacity-75" />
            <h3 className="font-serif text-xl text-charcoal">No Silhouettes Match Your Criteria</h3>
            <p className="text-xs sm:text-sm text-charcoal-500 max-w-md mx-auto font-light">
              Try adjusting your category filter or search keyword. Alternatively, submit a custom OEM tech pack request.
            </p>
            <div className="pt-3 flex justify-center gap-3">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Clear Filters
              </Button>
              <Button variant="primary" size="sm" href="/private-label">
                Custom OEM Request
              </Button>
            </div>
          </div>
        )}

        {/* Private Label Promotion Banner */}
        <div className="bg-[#faf8f5] text-charcoal p-8 sm:p-12 rounded-none border border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
              Need a Proprietary Custom Silhouette or Tech Pack?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl font-light">
              We specialize in full OEM/ODM contract development. Provide your CAD drawings or physical reference sample for bespoke tooling and private labeling.
            </p>
          </div>
          <Button href="/private-label" variant="primary" size="lg" className="shrink-0 py-3.5 px-7">
            Discuss Custom OEM Project
          </Button>
        </div>
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={!!quoteProduct}
        onClose={() => setQuoteProduct(null)}
        product={quoteProduct}
      />
    </div>
  );
}

export function CatalogueClient() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-xs text-charcoal-500">Loading B2B Catalogue...</div>}>
      <CatalogueContent />
    </Suspense>
  );
}
