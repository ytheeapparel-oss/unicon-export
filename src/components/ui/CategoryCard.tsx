"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
  panelNumber?: number;
  onClick?: () => void;
}

export function CategoryCard({ category, panelNumber, onClick }: CategoryCardProps) {
  const [hasError, setHasError] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={`/products?category=${encodeURIComponent(category.name)}`}
      onClick={handleClick}
      className="group block bg-white border border-charcoal/12 hover:border-cognac shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left hover:-translate-y-1 rounded-none"
    >
      {/* 1. Image Frame with Soft Travertine Neutral Ground */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#fbf9f6] border-b border-charcoal/8">
        {!hasError ? (
          <Image
            src={category.image}
            alt={`${category.name} - Leather Goods Manufacturer India`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-50 text-charcoal-400">
            <Layers className="w-12 h-12" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
          <span className="text-[9px] tracking-[0.16em] uppercase font-mono font-medium text-white bg-charcoal/85 backdrop-blur-xs px-2 py-0.5 shadow-xs">
            {panelNumber ? `LINE ${String(panelNumber).padStart(2, '0')}` : "LINE"}
          </span>
          <span className="text-[9.5px] font-mono font-medium text-charcoal-700 bg-white/95 backdrop-blur-xs px-2 py-0.5 border border-charcoal/10 shadow-xs">
            {category.featuredProductCount}+ Styles
          </span>
        </div>
      </div>

      {/* 2. Pure White Luxury Content Container */}
      <div className="bg-white p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <h3 className="font-serif text-base font-medium text-charcoal group-hover:text-cognac transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="text-xs text-charcoal-500 line-clamp-2 leading-relaxed font-light">
            {category.tagline}
          </p>
        </div>

        <div className="pt-2.5 border-t border-charcoal/8 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-cognac group-hover:text-charcoal transition-colors">
          <span>Explore Line</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
