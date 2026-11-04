import React from "react";
import type { Metadata } from "next";
import { CatalogueClient } from "@/components/products/CatalogueClient";
import {
  JsonLdScript,
  generateBreadcrumbSchema,
  generateCategoryCollectionSchema,
} from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  title: "Export Leather Goods Catalog | OEM Bags, Wallets & Accessories",
  description:
    "Browse UNICON LEATHER's complete B2B manufacturing catalog: custom leather handbags, executive laptop bags, minimalist totes, RFID wallets, cardholders, and bespoke belts. Low MOQs, LWG certified leathers.",
  alternates: {
    canonical: "https://www.uniconleather.com/products",
  },
  openGraph: {
    title: "Export Leather Goods Catalog | OEM Bags & Wallets Factory | UNICON LEATHER",
    description:
      "Wholesale export catalog of handcrafted genuine leather bags, minimalist totes, RFID wallets, cardholders, and bespoke accessories for international brands.",
    url: "https://www.uniconleather.com/products",
    type: "website",
    images: [
      {
        url: "https://www.uniconleather.com/images/catalogue-hero.jpg",
        width: 1200,
        height: 630,
        alt: "UNICON LEATHER B2B Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Leather Goods Catalog | OEM Bags & Wallets Factory | UNICON LEATHER",
    description:
      "Wholesale export catalog of handcrafted genuine leather bags, minimalist totes, RFID wallets, cardholders, and bespoke accessories for international brands.",
    images: ["https://www.uniconleather.com/images/catalogue-hero.jpg"],
  },
};

export default function ProductsPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    { name: "B2B Export Catalogue", url: "https://www.uniconleather.com/products" },
  ]);

  const collectionSchema = generateCategoryCollectionSchema({
    name: "B2B Export Leather Goods & Custom OEM Catalogue",
    description:
      "Complete 12-line export manufacturing catalogue of custom leather handbags, totes, briefcases, backpacks, travel duffels, RFID wallets, belts, and outerwear.",
    url: "https://www.uniconleather.com/products",
    image: "https://www.uniconleather.com/images/catalogue-hero.jpg",
  });

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={collectionSchema} />
      <CatalogueClient />
    </>
  );
}
