import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
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
        ],
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.uniconleather.com/sitemap.xml",
      "https://www.uniconleather.com/pages-sitemap.xml",
      "https://www.uniconleather.com/sitemap_index.xml",
    ],
    host: "https://www.uniconleather.com",
  };
}
