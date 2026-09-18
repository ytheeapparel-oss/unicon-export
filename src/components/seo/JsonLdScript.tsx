import React from "react";

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
    "@type": "Organization",
    "@id": "https://myuniconcom.vercel.app/#organization",
    name: "UNICON LEATHER",
    legalName: "Unicon Leather Goods Export Private Limited",
    url: "https://myuniconcom.vercel.app",
    logo: "https://myuniconcom.vercel.app/images/unicon-leather-logo.png",
    description: "Export-oriented B2B leather goods manufacturer, wholesale exporter, and OEM/ODM private-label supplier from India serving global fashion brands.",
    email: "work@uniconleather.net",
    telephone: "+91-9873102341",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 42-45, Zone 3, Calcutta Leather Complex, Bantala",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700135",
      addressCountry: "IN"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9873102341",
        contactType: "sales",
        areaServed: ["US", "GB", "EU", "AU", "CA", "AE", "JP"],
        availableLanguage: ["English"]
      }
    ],
    sameAs: [
      "https://linkedin.com/company/unicon-leather-placeholder",
      "https://instagram.com/uniconleather_b2b_placeholder"
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
