import React from "react";
import type { Metadata } from "next";
import { CatalogueClient } from "@/components/products/CatalogueClient";

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
};

export default function ProductsPage() {
  return <CatalogueClient />;
}
