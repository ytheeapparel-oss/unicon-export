import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { CategoryDetailView } from "@/components/products/CategoryDetailView";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const productSlugs = PRODUCTS.map((p) => ({ slug: p.slug }));
  const categorySlugs = PRODUCT_CATEGORIES.map((c) => ({ slug: c.slug }));
  return [...productSlugs, ...categorySlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;

  // 1. Check if slug matches a Category
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    const title = `${category.name} Manufacturer & Wholesale Supplier | UNICON LEATHER`;
    const description = `${category.description} Custom OEM/ODM private-label manufacturing, LWG audited leathers, low MOQs, EU REACH and California Prop 65 certified.`;
    const url = `https://www.uniconleather.com/products/${category.slug}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description,
        url,
        type: "website",
        images: [
          {
            url: category.image.startsWith("http")
              ? category.image
              : `https://www.uniconleather.com${category.image}`,
            width: 1200,
            height: 630,
            alt: `${category.name} Manufacturer`,
          },
        ],
      },
    };
  }

  // 2. Check if slug matches a Product
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (product) {
    const title = `${product.name} | Custom Manufacturer & Wholesale | UNICON LEATHER`;
    const description = `${product.shortDescription} Custom OEM/ODM manufacturing, MOQ ${product.moq}, LWG certified leather, EU REACH compliant. Direct export atelier Kolkata, India.`;
    const url = `https://www.uniconleather.com/products/${product.slug}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description,
        url,
        type: "website",
        images: [
          {
            url: product.images[0].startsWith("http")
              ? product.images[0]
              : `https://www.uniconleather.com${product.images[0]}`,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
      },
    };
  }

  return {
    title: "Product Not Found | UNICON LEATHER",
  };
}

export default function ProductOrCategoryPage({ params }: PageProps) {
  const slug = params.slug;

  // 1. Check Category match
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    const matchingProducts = PRODUCTS.filter(
      (p) =>
        p.categorySlug === category.slug ||
        p.category.toLowerCase().includes(category.name.toLowerCase()) ||
        category.name.toLowerCase().includes(p.category.toLowerCase())
    );
    return <CategoryDetailView category={category} products={matchingProducts} />;
  }

  // 2. Check Product match
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (product) {
    return <ProductDetailClient product={product} />;
  }

  notFound();
}
