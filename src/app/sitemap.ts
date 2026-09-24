import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { SEO_PILLARS } from "@/data/seoPillars";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.uniconleather.com";

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/private-label`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/craftsmanship`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/export`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catalogue-request`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Category Hub Routes (High-intent B2B SEO Landing Pages)
  const categoryRoutes: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Product routes
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dedicated Keyword Pillar Routes
  const seoPillarRoutes: MetadataRoute.Sitemap = Object.values(SEO_PILLARS).map((pillar) => ({
    url: pillar.canonicalUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  }));

  return [...staticRoutes, ...seoPillarRoutes, ...categoryRoutes, ...productRoutes];
}
