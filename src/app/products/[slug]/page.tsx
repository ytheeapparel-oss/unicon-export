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
    const title = category.metaTitle || `${category.name} — Custom OEM & Private Label Manufacturing`;
    const description =
      category.metaDescription ||
      `${category.description} HS Code ${category.hsCode}. MOQ: ${category.moqSummary}. Sampling: ${category.samplingTimeline}.`;
    const url = `https://www.uniconleather.com/products/${category.slug}`;

    const imageUrl = category.image.startsWith("http")
      ? category.image
      : `https://www.uniconleather.com${category.image}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${title} | UNICON LEATHER`,
        description,
        url,
        type: "website",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${category.name} Manufacturer`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | UNICON LEATHER`,
        description,
        images: [imageUrl],
      },
    };
  }

  // 2. Check if slug matches a Product
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (product) {
    const title = `${product.name} | Custom Manufacturer & Wholesale`;
    const description = `${product.shortDescription} Custom OEM/ODM manufacturing, MOQ ${product.moq}, LWG partner tannery leather, batch EU REACH & CA Prop 65 testable. Direct Indian export factory.`;
    const url = `https://www.uniconleather.com/products/${product.slug}`;
    const imageUrl = product.images[0].startsWith("http")
      ? product.images[0]
      : `https://www.uniconleather.com${product.images[0]}`;

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${title} | UNICON LEATHER`,
        description,
        url,
        type: "website",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | UNICON LEATHER`,
        description,
        images: [imageUrl],
      },
    };
  }

  return {
    title: "Product Not Found",
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
        p.category === category.name ||
        (p.secondaryCategorySlugs && p.secondaryCategorySlugs.includes(category.slug))
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
