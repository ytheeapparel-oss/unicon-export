import React from "react";
import { ALL_SEO_KEYWORDS, SEO_KEYWORD_CLUSTERS } from "@/data/keywords";

interface JsonLdScriptProps {
  schema: Record<string, any>;
}

export function JsonLdScript({ schema }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      className="hidden"
      hidden
      aria-hidden="true"
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
    inLanguage: ["en-US", "en-GB", "en", "de-DE", "fr-FR", "it-IT", "es-ES"],
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
    hasMap: "https://www.google.com/maps/place/unicon+leather/@28.5355161,77.3910265,17z/data=!4m15!1m8!3m7!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!2sunicon+leather!8m2!3d28.5355161!4d77.3910265!10e1!16s%2Fg%2F11s2m08kwt!3m5!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!8m2!3d28.5355161!4d77.3910265!16s%2Fg%2F11s2m08kwt",
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
    location: [
      {
        "@type": "Place",
        name: "UNICON LEATHER — Delhi NCR Corporate & Sourcing Office",
        hasMap: "https://www.google.com/maps/place/unicon+leather/@28.5355161,77.3910265,17z/data=!4m15!1m8!3m7!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!2sunicon+leather!8m2!3d28.5355161!4d77.3910265!10e1!16s%2Fg%2F11s2m08kwt!3m5!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!8m2!3d28.5355161!4d77.3910265!16s%2Fg%2F11s2m08kwt",
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
          latitude: 28.5355161,
          longitude: 77.3910265,
        },
      },
      {
        "@type": "Place",
        name: "UNICON LEATHER — Manufacturing Atelier & Export Facility",
        hasMap: "https://maps.google.com/?q=Calcutta+Leather+Complex+Zone+3+Bantala+Kolkata+West+Bengal+700135",
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
    hasCertification: [
      {
        "@type": "Certification",
        name: "Leather Working Group (LWG) Gold/Silver Audited Partner Tanneries",
        issuedBy: "LWG Approved Supply Chain",
        description: "100% of bovine, calfskin, and veg-tan hides sourced from LWG Gold/Silver certified partner tanneries."
      },
      {
        "@type": "Certification",
        name: "EU REACH Annex XVII Chemical Safety Compliance",
        issuedBy: "European Chemicals Agency (ECHA)",
        description: "Tested by SGS / Intertek: AZO dye-free, Nickel-free hardware, and Chromium VI < 3ppm."
      },
      {
        "@type": "Certification",
        name: "California Proposition 65 Compliance",
        issuedBy: "California OEHHA",
        description: "Tested and certified lead-free, cadmium-free, and phthalate-safe for US retail distribution."
      }
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
        telephone: "+91-9873102341",
        contactType: "export and domestic B2B sales",
        email: "uniconexport@gmail.com",
        areaServed: ["IN", "US", "GB", "EU", "DE", "FR", "IT", "ES", "NL", "AU", "CA", "AE", "JP"],
        availableLanguage: ["English", "German", "French", "Italian", "Spanish", "Hindi"],
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
      "https://github.com/ytheeapparel-oss/unicon-export",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Organization",
          name: "Global Leather Buying Group",
        },
        reviewBody: "Exceptional artisan craftsmanship, precise edge finishing, and reliable prototype turnaround for our private label collections.",
        datePublished: "2026-04-12",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "14.50",
      highPrice: "68.00",
      offerCount: "100",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: `https://www.uniconleather.com/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "UNICON LEATHER",
        url: "https://www.uniconleather.com",
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
    description: "Bespoke design engineering, CAD pattern development, rapid sample counter-prototyping within 7-10 days, and bulk batch manufacturing of luxury leather handbags, totes, wallets, and executive accessories.",
    termsOfService: "https://www.uniconleather.com/terms",
    offers: {
      "@type": "Offer",
      name: "Contract B2B Manufacturing Minimum Order Quantities",
      priceCurrency: "USD",
      price: "Custom FOB / CIF / DDP Quote",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: 100,
        unitCode: "C62",
        description: "Minimum order quantity of 100 units per style (multi-colorway batching supported)",
      },
      deliveryLeadTime: {
        "@type": "QuantitativeValue",
        minValue: 30,
        maxValue: 45,
        unitCode: "DAY",
        description: "Bulk production completed within 30 to 45 business days upon sample approval",
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

