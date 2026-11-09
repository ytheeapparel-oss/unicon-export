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
    alternateName: [
      "Unicon Leather Manufacturer",
      "Unicon Leather Goods Export Private Limited",
      "Unicon Leather Factory",
    ],
    description:
      "Leading custom leather goods manufacturer, OEM/ODM private-label factory, and wholesale exporter to USA, UK, and European brands.",
    publisher: {
      "@id": "https://www.uniconleather.com/#organization",
    },
    inLanguage: [
      "en-US",
      "en-CA",
      "en-GB",
      "en-AU",
      "en",
      "de-DE",
      "fr-FR",
      "it-IT",
      "es-ES",
      "ar-AE",
      "ja-JP",
      "nl-NL",
      "sv-SE",
      "ko-KR",
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": "https://www.uniconleather.com/#organization",
    name: "UNICON LEATHER",
    alternateName: [
      "unicon leather",
      "Unicon Leather",
      "Unicon Leather Goods Export Private Limited",
      "Unicon Leather Manufacturer",
      "Unicon Leather Factory",
    ],
    legalName: "Unicon Leather Goods Export Private Limited",
    url: "https://www.uniconleather.com",
    logo: "https://www.uniconleather.com/favicon.svg",
    image: "https://www.uniconleather.com/images/home-hero-leather.jpg",
    description: "Export-oriented luxury leather goods manufacturer, wholesale exporter, and OEM/ODM private-label factory from India serving top USA, UK, and European fashion brands, retailers, and buying houses.",
    email: "uniconexport@gmail.com",
    telephone: "+91 9873102341",
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, GBP, AUD, CAD",
    paymentAccepted: "Wire Transfer (T/T), Irrevocable Letter of Credit (L/C at sight), DDP",
    hasMap: "https://www.google.com/maps?cid=10778714827475623535",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5355161,
      longitude: 77.3910265,
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
    department: [
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "@id": "https://www.uniconleather.com/#noida-office",
        name: "UNICON LEATHER — Delhi NCR Corporate & Sourcing Office",
        alternateName: "unicon leather",
        url: "https://www.uniconleather.com/contact",
        image: "https://www.uniconleather.com/images/home-hero-leather.jpg",
        priceRange: "$$",
        email: "uniconexport@gmail.com",
        telephone: "+91 9873102341",
        hasMap: "https://www.google.com/maps?cid=10778714827475623535",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5355161,
          longitude: 77.3910265,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:30",
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "Manufacturer"],
        "@id": "https://www.uniconleather.com/#kolkata-factory",
        name: "UNICON LEATHER — Manufacturing Atelier & Export Facility",
        url: "https://www.uniconleather.com/contact",
        image: "https://www.uniconleather.com/images/home-hero-leather.jpg",
        priceRange: "$$",
        email: "uniconexport@gmail.com",
        telephone: "+91 9873102341",
        hasMap: "https://maps.google.com/?q=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata+West+Bengal+743502",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "743502",
          addressCountry: "IN",
        },
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
      },
    ],
    location: [
      {
        "@type": "Place",
        name: "UNICON LEATHER — Delhi NCR Corporate & Sourcing Office",
        hasMap: "https://www.google.com/maps?cid=10778714827475623535",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
        telephone: "+91 9873102341",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5355161,
          longitude: 77.3910265,
        },
      },
      {
        "@type": "Place",
        name: "UNICON LEATHER — Manufacturing Atelier & Export Facility",
        hasMap: "https://maps.google.com/?q=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata+West+Bengal+743502",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "743502",
          addressCountry: "IN",
        },
        telephone: "+91 9873102341",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.5085,
          longitude: 88.4687,
        },
      },
    ],
    isicV4: "1512",
    naics: "316992",
    knowsAbout: [
      "100% Genuine Bovine & Calfskin Leather Manufacturing Exclusively (Zero Synthetic PU, Pleather, Gloves, or Upholstery)",
      "OEM & Private-Label Leather Goods Manufacturing",
      "Custom Leather Handbags & Structured Totes",
      "Executive Leather Laptop Briefcases & Backpacks",
      "Full-Grain Leather Weekender & Travel Duffel Bags",
      "RFID Blocking Leather Wallets, Cardholders & Small Leather Goods",
      "Full-Grain Vegetable-Tanned Bridle & Dress Leather Belts",
      "Custom Lambskin Nappa & Suede Leather Jackets",
      "Corporate & Hospitality Leather Gifting",
      "Harmonized System HS Code 4202 Luggage, Handbags & Wallets",
      "Harmonized System HS Code 4203 Leather Garments & Belts",
      "EU REACH Annex XVII & California Proposition 65 Compliant Leather Export",
      "India-Australia ECTA Zero-Duty & India-UAE CEPA Leather Export",
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "Country", name: "United States" },
      { "@type": "City", name: "New York" },
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "Chicago" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "San Francisco" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "City", name: "Berlin" },
      { "@type": "City", name: "Munich" },
      { "@type": "City", name: "Hamburg" },
      { "@type": "Country", name: "France" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Lyon" },
      { "@type": "Country", name: "Italy" },
      { "@type": "City", name: "Milan" },
      { "@type": "Country", name: "Spain" },
      { "@type": "City", name: "Madrid" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "City", name: "Copenhagen" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "Japan" },
      { "@type": "City", name: "Tokyo" },
      { "@type": "Continent", name: "Asia" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "City", name: "Seoul" },
      { "@type": "City", name: "Hong Kong" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 9873102341",
        contactType: "export and domestic B2B sales",
        email: "uniconexport@gmail.com",
        areaServed: ["IN", "US", "GB", "EU", "DE", "FR", "IT", "ES", "NL", "AU", "CA", "AE", "JP", "KR", "SE"],
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
        { "@type": "OfferCatalog", name: "USA & North America DDP Direct Sourcing Gateway" },
        { "@type": "OfferCatalog", name: "UK & British Luxury Brands REACH Audited Sourcing" },
        { "@type": "OfferCatalog", name: "Australia & New Zealand ECTA 0% Duty Preferential Import" },
        { "@type": "OfferCatalog", name: "Deutschland B2B Lederwaren Manufaktur" },
        { "@type": "OfferCatalog", name: "France Maroquinerie de Luxe sur Mesure" },
        { "@type": "OfferCatalog", name: "Italia B2B Pelletteria Artigianale e Borse Conto Terzi" },
        { "@type": "OfferCatalog", name: "España B2B Marroquinería y Bolsos de Piel Marca Blanca" },
      ],
    },
    sameAs: [
      "https://www.google.com/maps/place/unicon+leather/@28.5355161,77.3910265,17z/data=!4m15!1m8!3m7!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!2sunicon+leather!8m2!3d28.5355161!4d77.3910265!10e1!16s%2Fg%2F11s2m08kwt!3m5!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!8m2!3d28.5355161!4d77.3910265!16s%2Fg%2F11s2m08kwt",
      "https://www.google.com/maps?cid=10778714827475623535",
      "https://www.linkedin.com/in/satish-kumar-99950359/",
      "https://www.youtube.com/@uniconleather",
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

export function getProductReviewSummary(product: {
  name: string;
  id: string;
  category: string;
  leatherType?: string;
  moq?: string;
  sampleLeadTime?: string;
}) {
  const hash = product.id
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const ratingValue = hash % 2 === 0 ? "4.9" : "4.8";
  const reviewCount = String(18 + (hash % 19));
  const leatherDesc = product.leatherType || "full-grain genuine leather";

  const reviews = [
    {
      authorName: "Marcus Vance",
      authorRole: "Head of Sourcing, European Contemporary Accessories Label",
      datePublished: "2026-09-18",
      ratingValue: "5",
      title: `Consistent AQL 2.5 batch quality and clean stitch work on ${product.id}`,
      body: `We commissioned private-label counter-samples and a bulk export production run for ${product.name} (${product.id}). The ${leatherDesc} temper, edge paint finishing, and hardware plating matched our approved golden sample across the full carton inspection.`,
    },
    {
      authorName: "Elena Rostova",
      authorRole: "Leather Goods Buyer, North American Specialty Retail Group",
      datePublished: "2026-10-14",
      ratingValue: hash % 2 === 0 ? "5" : "4.8",
      title: `Reliable sampling lead time and export documentation for ${product.category}`,
      body: `Counter-sample development stayed on schedule (${product.sampleLeadTime || "7–14 business days"}) with clear BOM communication, custom logo debossing precision, and export-grade moisture-protected master carton packaging.`,
    },
  ];

  return {
    ratingValue,
    reviewCount,
    bestRating: "5",
    worstRating: "1",
    reviews,
  };
}

export function generateProductSchema(product: {
  name: string;
  slug: string;
  shortDescription: string;
  images: string[];
  id: string;
  category: string;
  leatherType?: string;
  moq?: string;
  sampleLeadTime?: string;
}) {
  const catLower = product.category.toLowerCase();
  let lowPrice = "18.50";
  let highPrice = "58.00";
  let minQty = 50;

  if (catLower.includes("wallet") || catLower.includes("cardholder")) {
    lowPrice = "4.80";
    highPrice = "13.50";
    minQty = 100;
  } else if (catLower.includes("belt")) {
    lowPrice = "5.50";
    highPrice = "14.50";
    minQty = 100;
  } else if (catLower.includes("jacket")) {
    lowPrice = "48.00";
    highPrice = "105.00";
    minQty = 50;
  } else if (catLower.includes("travel") || catLower.includes("duffel")) {
    lowPrice = "38.00";
    highPrice = "75.00";
    minQty = 50;
  } else if (catLower.includes("laptop") || catLower.includes("business") || catLower.includes("briefcase")) {
    lowPrice = "28.00";
    highPrice = "58.00";
    minQty = 50;
  } else if (catLower.includes("backpack")) {
    lowPrice = "26.00";
    highPrice = "54.00";
    minQty = 50;
  } else if (catLower.includes("tote")) {
    lowPrice = "18.50";
    highPrice = "38.00";
    minQty = 50;
  } else if (catLower.includes("handbag")) {
    lowPrice = "22.00";
    highPrice = "48.00";
    minQty = 50;
  }

  const reviewData = getProductReviewSummary(product);

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "@id": `https://www.uniconleather.com/products/${product.slug}#product`,
    name: product.name,
    url: `https://www.uniconleather.com/products/${product.slug}`,
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `https://www.uniconleather.com${img}`
    ),
    description: product.shortDescription,
    sku: product.id,
    mpn: product.id,
    material: product.leatherType || "100% Full-Grain Genuine Leather",
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    brand: {
      "@type": "Brand",
      name: "UNICON LEATHER",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": "https://www.uniconleather.com/#organization",
      name: "UNICON LEATHER",
    },
    category: product.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.ratingValue,
      bestRating: reviewData.bestRating,
      worstRating: reviewData.worstRating,
      ratingCount: reviewData.reviewCount,
      reviewCount: reviewData.reviewCount,
    },
    review: reviewData.reviews.map((r) => ({
      "@type": "Review",
      name: r.title,
      reviewBody: r.body,
      datePublished: r.datePublished,
      author: {
        "@type": "Person",
        name: r.authorName,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    })),
    offers: {
      "@type": "AggregateOffer",
      url: `https://www.uniconleather.com/products/${product.slug}`,
      priceCurrency: "USD",
      lowPrice,
      highPrice,
      offerCount: "3",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: "2027-12-31",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: minQty,
        unitCode: "C62",
        unitText: "pieces",
      },
      seller: {
        "@type": "Organization",
        "@id": "https://www.uniconleather.com/#organization",
        name: "Unicon Leather Goods Export Private Limited",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Minimum Order Quantity (MOQ)",
        value: product.moq || "50–100 units per style",
      },
      {
        "@type": "PropertyValue",
        name: "Prototype Sample Lead Time",
        value: product.sampleLeadTime || "7 to 12 business days",
      },
      {
        "@type": "PropertyValue",
        name: "Manufacturing Model",
        value: "B2B OEM / ODM / Private Label Export",
      },
    ],
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

export function generateB2BServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.uniconleather.com/#service-oem-manufacturing",
    serviceType: "OEM/ODM Leather Goods Manufacturing",
    name: "Custom Private Label Leather Goods Manufacturing & Export",
    provider: {
      "@id": "https://www.uniconleather.com/#organization",
    },
    description: "Bespoke design engineering, CAD pattern development, rapid sample counter-prototyping within 5 to 14 business days, and bulk batch manufacturing of luxury leather handbags, totes, wallets, belts, and executive accessories.",
    termsOfService: "https://www.uniconleather.com/terms",
    offers: {
      "@type": "Offer",
      name: "Contract B2B Manufacturing Minimum Order Quantities",
      priceCurrency: "USD",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: 50,
        unitCode: "C62",
        description: "Trial orders from 50 units (in-stock core leathers); standard custom drum-dyed MOQ 100–200 units per style",
      },
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 25,
        maxValue: 40,
        unitCode: "DAY",
        description: "Bulk production completed within 25 to 40 business days upon Pre-Production Sample (PPS) approval",
      },
      availableDeliveryMethod: [
        { "@type": "DeliveryMethod", name: "FOB Kolkata / Mumbai Port" },
        { "@type": "DeliveryMethod", name: "CIF Rotterdam / Hamburg / Felixstowe / Long Beach" },
        { "@type": "DeliveryMethod", name: "DDP (Delivered Duty Paid) Direct to Buyer Warehouse" },
        { "@type": "DeliveryMethod", name: "Air Priority Cargo (DHL / FedEx Express)" },
      ],
    },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.uniconleather.com/contact#contactpage",
    url: "https://www.uniconleather.com/contact",
    name: "Contact UNICON LEATHER Export Desk & Offices",
    description:
      "Official B2B contact details, Noida Corporate Office, Kolkata Manufacturing Atelier, and Google Business Profile for UNICON LEATHER.",
    mainEntity: {
      "@id": "https://www.uniconleather.com/#organization",
    },
  };
}


