import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/client-techpacks/",
          "/internal-specs/",
          "/confidential-cad/",
        ],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "YandexBot",
          "Baiduspider",
          "Applebot",
          "DuckDuckBot",
          "Yeti",
          "SeznamBot",
          "Qwantify",
          "Slurp",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "Pinterestbot",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.uniconleather.com/sitemap_index.xml",
    ],
    host: "https://www.uniconleather.com",
  };
}
