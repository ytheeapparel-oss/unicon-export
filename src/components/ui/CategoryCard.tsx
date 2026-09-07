"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={`/products?category=${encodeURIComponent(category.name)}`}
      className="group block bg-white border-2 border-charcoal/15 hover:border-cognac shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
    >
      {/* 1. Bright Image Frame with Zero Dark/Black Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border-b-2 border-charcoal/10">
        {!hasError ? (
          <Image
            src={category.image}
            alt={`${category.name} - Leather Goods Manufacturer India`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-50 text-charcoal-400">
            <Layers className="w-12 h-12" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-bold text-white bg-cognac px-3 py-1 shadow-sm">
            Export Line
          </span>
          <span className="text-xs font-mono font-semibold text-charcoal bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-charcoal/15 shadow-sm">
            {category.featuredProductCount}+ Styles
          </span>
        </div>
      </div>

      {/* 2. 100% Pure White Content Container */}
      <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-cognac transition-colors">
            {category.name}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed font-light">
            {category.tagline}
          </p>
        </div>

        <div className="pt-3 border-t border-charcoal/10 flex items-center gap-2 text-xs font-bold text-cognac group-hover:text-charcoal tracking-wider uppercase transition-colors">
          <span>Explore Collection</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
