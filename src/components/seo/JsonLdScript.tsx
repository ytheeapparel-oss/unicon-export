import React from "react";
import { ALL_SEO_KEYWORDS, SEO_KEYWORD_CLUSTERS } from "@/data/keywords";

interface JsonLdScriptProps {
  schema: Record<string, any>;
}

export function JsonLdScript({ schema }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer", "WholesaleStore", "LocalBusiness"],
    "@id": "https://www.uniconleather.com/#organization",
    name: "UNICON LEATHER",
    legalName: "Unicon Leather Goods Export Private Limited",
    url: "https://www.uniconleather.com",
    logo: "https://www.uniconleather.com/images/unicon-leather-logo.png",
    image: "https://www.uniconleather.com/images/home-hero-leather.jpg",
    description: "Export-oriented B2B luxury leather goods manufacturer, wholesale exporter, and OEM/ODM private-label supplier from India serving global fashion brands, retail buying houses, and independent labels.",
    email: "uniconexport@gmail.com",
    telephone: "+91-9873102341",
    priceRange: "$$",
    hasMap: "https://maps.google.com/?q=Calcutta+Leather+Complex+Zone+3+Bantala+Kolkata",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5085,
      longitude: 88.4687
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30"
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 42-45, Zone 3, Calcutta Leather Complex, Bantala",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700135",
      addressCountry: "IN"
    },
    isicV4: "1512",
    naics: "316992",
    knowsAbout: [
      ...ALL_SEO_KEYWORDS,
      "Harmonized System HS Code 4202 Luggage & Handbags",
      "Harmonized System HS Code 4203 Leather Garments & Accessories",
      "Harmonized System HS Code 4205 Articles of Leather"
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "LWG (Leather Working Group) Gold/Silver Rated Tannery Partners"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "EU REACH & CPSIA Chemical Safety Compliance"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "BSCI / Sedex Ethical Manufacturing Standards"
      }
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Japan" }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9873102341",
        contactType: "export sales",
        email: "uniconexport@gmail.com",
        areaServed: ["US", "GB", "EU", "AU", "CA", "AE", "JP"],
        availableLanguage: ["English"]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2B Export Leather Collections",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Leather Handbags & Totes" },
        { "@type": "OfferCatalog", name: "Laptop & Business Bags" },
        { "@type": "OfferCatalog", name: "Travel & Duffel Bags" },
        { "@type": "OfferCatalog", name: "Wallets & Small Leather Goods" },
        { "@type": "OfferCatalog", name: "Custom OEM/ODM Development" }
      ]
    },
    sameAs: [
      "https://github.com/ytheeapparel-oss/unicon-export",
      "https://www.linkedin.com/company/unicon-leather",
      "https://www.youtube.com/@uniconleather",
      "https://www.instagram.com/uniconleather",
      "https://www.facebook.com/uniconleather"
    ]
  };
}

export function generateProductSchema(product: {
  name: string;
  slug: string;
  shortDescription: string;
  images: string[];
  id: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: "UNICON LEATHER"
    },
    manufacturer: {
      "@type": "Organization",
      name: "UNICON LEATHER"
    },
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      price: "0.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "UNICON LEATHER"
      }
    }
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
