import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { SEO_PILLARS } from "@/data/seoPillars";
import { INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { EXPORT_HUBS } from "@/data/exportHubs";

const HOST = "www.uniconleather.com";
const KEY = "b8f9e612a8d348a58f4a621e9c7b3d54";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

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

const STATIC_PATHS = [
  "",
  "/about",
  "/products",
  "/private-label",
  "/craftsmanship",
  "/leather-quality-sourcing-guide",
  "/cost-calculator",
  "/leather-sourcing-india-vs-china-vietnam-italy",
  "/sustainability",
  "/export",
  "/compliance",
  "/contact",
  "/catalogue-request",
];

export async function GET() {
  const allUrls = [
    ...STATIC_PATHS.map((p) => `https://${HOST}${p}`),
    ...Object.values(INTERNATIONAL_MARKETS).map((m) => `https://${HOST}${m.path}`),
    ...Object.values(SEO_PILLARS)
      .filter((p) => !CONSOLIDATED_PILLAR_SLUGS.has(p.slug))
      .map((p) => `https://${HOST}/${p.slug}`),
    ...Object.values(EXPORT_HUBS)
      .filter((h) => !CONSOLIDATED_EXPORT_HUB_KEYS.has(`${h.region}/${h.slug}`))
      .map((h) => `https://${HOST}/export/${h.region}/${h.slug}`),
    ...PRODUCT_CATEGORIES.map((c) => `https://${HOST}/products/${c.slug}`),
    ...PRODUCTS.map((p) => `https://${HOST}/products/${p.slug}`),
  ];

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: allUrls,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedUrlsCount: allUrls.length,
      sampleUrls: allUrls.slice(0, 5),
      message: "IndexNow submission dispatched to Bing, Yandex, Seznam, and Naver search engines.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        urlList: allUrls,
      },
      { status: 500 }
    );
  }
}
