import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { SEO_PILLARS } from "@/data/seoPillars";
import { INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { EXPORT_HUBS } from "@/data/exportHubs";

// Consolidated duplicate slugs that 301-redirect to primary canonical hubs
const CONSOLIDATED_PILLAR_SLUGS = new Set([
  "private-label-leather-goods",
  "leather-goods-supplier-usa",
  "full-grain-vs-top-grain-leather",
]);

const CONSOLIDATED_EXPORT_HUB_KEYS = new Set([
  "usa/leather-goods-manufacturer-usa",
  "europe/private-label-leather-bags-uk-london",
  "europe/leather-goods-manufacturer-germany",
  "europe/luxury-leather-atelier-france-paris",
  "australia/leather-goods-manufacturer-australia",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.uniconleather.com";
  const lastModifiedDate = new Date("2026-11-10T00:00:00.000Z");

  const internationalHreflang = {
    "en": `${baseUrl}`,
    "en-US": `${baseUrl}/en-us`,
    "en-CA": `${baseUrl}/en-ca`,
    "en-GB": `${baseUrl}/en-gb`,
    "en-AU": `${baseUrl}/en-au`,
    "de-DE": `${baseUrl}/de`,
    "fr-FR": `${baseUrl}/fr`,
    "it-IT": `${baseUrl}/it`,
    "es-ES": `${baseUrl}/es`,
    "ar-AE": `${baseUrl}/ar`,
    "ja-JP": `${baseUrl}/ja`,
    "nl-NL": `${baseUrl}/nl`,
    "sv-SE": `${baseUrl}/sv`,
    "ko-KR": `${baseUrl}/ko`,
    "x-default": `${baseUrl}`,
  };

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: internationalHreflang,
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/private-label`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/craftsmanship`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leather-quality-sourcing-guide`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cost-calculator`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/leather-sourcing-india-vs-china-vietnam-italy`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/export`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catalogue-request`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: lastModifiedDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Category Hub Routes (High-intent B2B SEO Landing Pages)
  const categoryRoutes: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Product buying information and guides updated on 10 November 2026.
  const buyerContentUpdated = new Date("2026-11-10T00:00:00.000Z");
  const guideRoutes: MetadataRoute.Sitemap = [
    "private-label-leather-bag-costs",
    "leather-bag-sampling-process",
    "leather-bag-moq-explained",
  ].map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: buyerContentUpdated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Product routes
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: buyerContentUpdated,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dedicated Keyword Pillar Routes (excluding consolidated 301-redirected pillars)
  const seoPillarRoutes: MetadataRoute.Sitemap = Object.values(SEO_PILLARS)
    .filter((pillar) => !CONSOLIDATED_PILLAR_SLUGS.has(pillar.slug))
    .map((pillar) => ({
      url: pillar.canonicalUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  // Dedicated International Market Gateways with reciprocal hreflang annotations
  const internationalRoutes: MetadataRoute.Sitemap = Object.values(INTERNATIONAL_MARKETS).map((m) => ({
    url: `${baseUrl}${m.path}`,
    lastModified: lastModifiedDate,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: {
      languages: internationalHreflang,
    },
  }));

  // Programmatic International Export Hubs (excluding consolidated 301-redirected routes)
  const exportHubRoutes: MetadataRoute.Sitemap = Object.values(EXPORT_HUBS)
    .filter((hub) => !CONSOLIDATED_EXPORT_HUB_KEYS.has(`${hub.region}/${hub.slug}`))
    .map((hub) => ({
      url: `${baseUrl}/export/${hub.region}/${hub.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  return [
    ...staticRoutes,
    ...internationalRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...guideRoutes,
    ...seoPillarRoutes,
    ...exportHubRoutes,
  ];
}
