"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, RefreshCw, Layers, FileText, Sliders } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickQuoteModal } from "@/components/forms/QuickQuoteModal";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { Product } from "@/types";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLeather, setSelectedLeather] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.leatherType.toLowerCase().includes(searchQuery.toLowerCase());

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
      {/* 1. HERO SECTION: 100% Full-Bleed (100vw Full Breadth x Full Length) Editorial Banner */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-end justify-start overflow-hidden bg-white border-b-2 border-charcoal/10">
        {/* Full Length & Breadth Background Image (100% Screen Width x 100% Height) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/catalogue-hero.png"
            alt="UNICON LEATHER - Handcrafted Genuine Leather Bag Master Catalogue"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
            loading="eager"
          />
        </div>

        {/* Elegant Floating Editorial Card on Pure White */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 sm:pb-16 pt-28">
          <div className="max-w-3xl bg-white/95 backdrop-blur-md p-8 sm:p-12 border-2 border-charcoal/15 shadow-2xl space-y-6 text-left">
            <Breadcrumbs items={[{ label: "B2B Export Catalogue" }]} />

            <div className="inline-flex items-center gap-3 mt-2">
              <span className="bg-cognac text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-none shadow-sm">
                ★ Master Export Directory
              </span>
              <span className="text-xs sm:text-sm text-charcoal-500 font-mono tracking-widest uppercase font-semibold">
                11 PRODUCT CATEGORIES
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[0.98] tracking-tight uppercase">
              Export Product <br />
              <span className="italic font-normal text-cognac lowercase">catalogue &</span> <br />
              COLLECTION DIRECTORY
            </h1>

            <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-light max-w-2xl">
              Explore our master export catalogue across 11 luxury leather goods categories. All silhouettes can be customized with your brand’s leather grade, custom hardware finishes, dimensions, and embossed logos.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#catalogue-grid" variant="primary" size="lg" className="shadow-lg">
                Explore Available Silhouettes
              </Button>
              <Button href="/private-label" variant="outline" size="lg" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                <Sliders className="w-4 h-4 mr-2" /> Custom OEM Tech Pack
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CATALOGUE BROWSER (Pure White) */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10" id="catalogue-grid">
        {/* Filter Controls Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-none border-2 border-charcoal/15 shadow-sm space-y-6">
          {/* Row 1: Search & Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by SKU code, leather grade, or silhouette..."
                className="w-full text-xs sm:text-sm pl-11 pr-4 py-3 bg-charcoal-50 border border-charcoal/15 rounded-none text-charcoal focus:bg-white focus:border-cognac"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-charcoal-400 hover:text-charcoal absolute right-4 top-1/2 -translate-y-1/2"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Leather Grade Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedLeather}
                onChange={(e) => setSelectedLeather(e.target.value)}
                className="w-full text-xs sm:text-sm px-4 py-3 bg-charcoal-50 border border-charcoal/15 rounded-none text-charcoal focus:bg-white focus:border-cognac"
                aria-label="Filter by Leather Type"
              >
                <option value="All">All Tannages & Leathers</option>
                <option value="Full-Grain">Full-Grain Bovine</option>
                <option value="Vegetable Tanned">Vegetable Tanned</option>
                <option value="Calf Nappa">Calf Nappa</option>
                <option value="Waxed Pull-Up">Waxed Pull-Up</option>
                <option value="Lambskin">Lambskin Plonge</option>
                <option value="Saffiano">Saffiano Textured</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="sm:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs sm:text-sm px-4 py-3 bg-charcoal-50 border border-charcoal/15 rounded-none text-charcoal focus:bg-white focus:border-cognac"
                aria-label="Sort products"
              >
                <option value="default">Sort: Default Catalog</option>
                <option value="name-asc">Sort: Name (A to Z)</option>
                <option value="name-desc">Sort: Name (Z to A)</option>
              </select>
            </div>
          </div>

          {/* Row 2: Category Pills */}
          <div className="pt-4 border-t border-charcoal/10">
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`text-xs px-4 py-2 rounded-none whitespace-nowrap transition-colors uppercase font-medium tracking-wider ${
                  selectedCategory === "All"
                    ? "bg-cognac text-white shadow-sm"
                    : "bg-charcoal-50 text-charcoal hover:bg-charcoal-100 border border-charcoal/10"
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`text-xs px-4 py-2 rounded-none whitespace-nowrap transition-colors uppercase font-medium tracking-wider ${
                    selectedCategory === cat.name
                      ? "bg-cognac text-white shadow-sm"
                      : "bg-charcoal-50 text-charcoal hover:bg-charcoal-100 border border-charcoal/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-charcoal-600 px-1">
          <p>
            Showing <strong className="text-charcoal font-semibold">{filteredProducts.length}</strong> export products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>

          {(selectedCategory !== "All" || searchQuery || selectedLeather !== "All") && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-cognac hover:underline font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickInquire={(p) => setQuoteProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-charcoal/15 p-16 rounded-none text-center space-y-4 max-w-lg mx-auto shadow-sm">
            <Layers className="w-12 h-12 text-charcoal-300 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-charcoal">No Products Found</h3>
            <p className="text-xs text-charcoal-600">
              We did not find any catalogue items matching your exact filters. You can reset filters or request custom OEM product development.
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

        {/* Private Label Promotion Banner (Pure White) */}
        <div className="bg-white text-charcoal p-10 sm:p-14 rounded-none border-2 border-charcoal/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-xs text-charcoal-500">Loading B2B Catalogue...</div>}>
      <CatalogueContent />
    </Suspense>
  );
}
