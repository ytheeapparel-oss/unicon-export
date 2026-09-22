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

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.uniconleather.com/#website",
    url: "https://www.uniconleather.com",
    name: "UNICON LEATHER",
    alternateName: ["Unicon Leather Manufacturer", "Unicon Leather Goods Export Private Limited", "Unicon Leather Factory"],
    description: "Leading custom leather goods manufacturer, OEM/ODM private-label factory, and wholesale exporter to USA, UK, and European brands.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.uniconleather.com/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-US", "en-GB", "en"],
  };
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
    description: "Export-oriented luxury leather goods manufacturer, wholesale exporter, and OEM/ODM private-label factory from India serving top USA, UK, and European fashion brands, retailers, and buying houses.",
    email: "uniconexport@gmail.com",
    telephone: "+91-9873102341",
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, GBP, AUD, CAD",
    paymentAccepted: "Wire Transfer (T/T), Irrevocable Letter of Credit (L/C at sight), DDP",
    hasMap: "https://maps.google.com/?q=Calcutta+Leather+Complex+Zone+3+Bantala+Kolkata",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5085,
      longitude: 88.4687,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201304",
      addressCountry: "IN",
    },
    location: [
      {
        "@type": "Place",
        name: "UNICON LEATHER — Delhi NCR Corporate & Sourcing Office",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
        telephone: "+91-9873102341",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5283,
          longitude: 77.3828,
        },
      },
      {
        "@type": "Place",
        name: "UNICON LEATHER — Manufacturing Atelier & Export Facility",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. 42-45, Zone 3, Calcutta Leather Complex, Bantala",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700135",
          addressCountry: "IN",
        },
        telephone: "+91-9873102341",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.5085,
          longitude: 88.4687,
        },
      },
    ],
    isicV4: "1512",
    naics: "316992",
    awards: [
      "LWG (Leather Working Group) Gold/Silver Rated Tannery Supply Chain",
      "EU REACH Annex XVII Chemical Safety Verified",
      "California Proposition 65 SGS Lab Compliant",
      "BSCI / SEDEX Ethical Workplace Protocol",
    ],
    knowsAbout: [
      ...ALL_SEO_KEYWORDS,
      "Harmonized System HS Code 4202 Luggage & Handbags",
      "Harmonized System HS Code 4203 Leather Garments & Accessories",
      "Harmonized System HS Code 4205 Articles of Leather",
      "Bespoke Contract Manufacturing for USA Brands",
      "European Luxury Leather Goods Sourcing",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "LWG (Leather Working Group) Gold/Silver Rated Tannery Partners",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "EU REACH & CPSIA Chemical Safety Compliance",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "BSCI / Sedex Ethical Manufacturing Standards",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Japan" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9873102341",
        contactType: "export and domestic B2B sales",
        email: "uniconexport@gmail.com",
        areaServed: ["IN", "US", "GB", "EU", "DE", "FR", "IT", "ES", "NL", "AU", "CA", "AE", "JP"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2B Export Leather Collections",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Leather Handbags & Luxury Totes" },
        { "@type": "OfferCatalog", name: "Executive Laptop & Business Bags" },
        { "@type": "OfferCatalog", name: "Heritage Travel & Duffel Bags" },
        { "@type": "OfferCatalog", name: "RFID Wallets & Small Leather Goods" },
        { "@type": "OfferCatalog", name: "Bridle Leather Belts & Accessories" },
        { "@type": "OfferCatalog", name: "Custom OEM/ODM Private-Label Atelier Development" },
      ],
    },
    sameAs: [
      "https://github.com/ytheeapparel-oss/unicon-export",
      "https://www.linkedin.com/in/satish-kumar-99950359/",
      "https://www.facebook.com/uniconexport",
      "https://www.instagram.com/uniconindia/",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCategoryCollectionSchema(category: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${category.url}#collection`,
    url: category.url,
    name: `${category.name} Manufacturer & Wholesale Supplier`,
    description: category.description,
    image: category.image,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.uniconleather.com/#website",
    },
    about: {
      "@type": "Thing",
      name: category.name,
    },
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
      name: "UNICON LEATHER",
    },
    manufacturer: {
      "@type": "Organization",
      name: "UNICON LEATHER",
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
        name: "UNICON LEATHER",
      },
    },
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
        text: faq.answer,
      },
    })),
  };
}
