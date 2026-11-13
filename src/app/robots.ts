import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 1. Default rule for standard web crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/client-techpacks/",
          "/internal-specs/",
          "/confidential-cad/",
        ],
      },
      // 2. Search Discovery & AI Search Indexing Crawlers
      // (OpenAI OAI-SearchBot, Anthropic Claude-SearchBot, PerplexityBot, Googlebot, Bingbot, Applebot)
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "OAI-SearchBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Baiduspider",
          "Slurp",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // 3. User-Triggered AI Retrieval Agents (real-time citations when a user prompts an AI assistant)
      {
        userAgent: [
          "ChatGPT-User",
          "Claude-User",
          "Perplexity-User",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "Pinterestbot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // 4. Foundation Model Training Crawlers (separated from search/retrieval so policy can be managed independently)
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.uniconleather.com/sitemap.xml",
  };
}
