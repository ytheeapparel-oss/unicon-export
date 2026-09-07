"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
  onQuickInquire?: (product: Product) => void;
  imageFit?: "cover" | "contain";
  aspectRatio?: string;
}

export function ProductCard({
  product,
  onQuickInquire,
  imageFit = "contain",
  aspectRatio = "aspect-[4/5]",
}: ProductCardProps) {
  const [imgSrc] = useState(product.images[0]);
  const [hasError, setHasError] = useState(false);

  return (
    <article className="group flex flex-col bg-white border border-charcoal/10 rounded-none overflow-hidden luxury-card-shadow transition-all duration-300">
      {/* Product Image Stage */}
      <div className={`relative ${aspectRatio} bg-[#F8F7F4] overflow-hidden flex items-center justify-center p-3`}>
        {!hasError ? (
          <Image
            src={imgSrc}
            alt={`${product.name} - Leather Goods Manufacturer India`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`${
              imageFit === "contain"
                ? "object-contain object-center p-2"
                : "object-cover object-center"
            } group-hover:scale-105 transition-transform duration-700 ease-out`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-charcoal-100 text-charcoal-400 p-4 text-center">
            <Layers className="w-10 h-10 mb-2 text-cognac/40" />
            <span className="text-xs font-serif text-charcoal-700">{product.name}</span>
            <span className="text-[10px] text-charcoal-400 mt-1 uppercase tracking-wider">Product Visual Spec</span>
          </div>
        )}

        {/* Product Code Tag */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="charcoal" size="sm" className="bg-black/90 backdrop-blur-xs font-mono text-[10px] text-white">
            {product.id}
          </Badge>
        </div>

        {/* Category Tag */}
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="sand" size="sm" className="bg-white/95 backdrop-blur-xs font-medium text-charcoal shadow-xs">
            {product.category}
          </Badge>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
        <div className="space-y-2.5">
          <Link href={`/products/${product.slug}`} className="block group-hover:text-cognac transition-colors">
            <h3 className="font-serif text-xl font-bold text-charcoal leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specifications */}
          <div className="pt-3 border-t border-charcoal/10 grid grid-cols-2 gap-3 text-xs text-charcoal-500">
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

        {/* Action Buttons */}
        <div className="pt-4 border-t border-charcoal/10 flex items-center gap-2.5">
          <Button
            href={`/products/${product.slug}`}
            variant="outline"
            size="sm"
            className="flex-1 text-xs py-2.5 border-charcoal/30 text-charcoal hover:border-charcoal"
          >
            View Specs
          </Button>

          <Button
            href={`/contact?product=${encodeURIComponent(product.name)}&code=${product.id}#inquiry-form`}
            variant="primary"
            size="sm"
            className="flex-1 text-xs py-2.5 bg-cognac hover:bg-cognac-600 text-white"
            onClick={(e) => {
              if (onQuickInquire) {
                e.preventDefault();
                onQuickInquire(product);
              }
            }}
          >
            Bulk Inquiry
          </Button>
        </div>
      </div>
    </article>
  );
}
