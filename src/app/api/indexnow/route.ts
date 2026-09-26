import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { SEO_PILLARS } from "@/data/seoPillars";

const HOST = "www.uniconleather.com";
const KEY = "5d98dd720e5d4f48941b1b070295b9da";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const STATIC_PATHS = [
  "",
  "/about",
  "/products",
  "/private-label",
  "/craftsmanship",
  "/sustainability",
  "/export",
  "/compliance",
  "/contact",
  "/catalogue-request",
];

export async function GET() {
  const allUrls = [
    ...STATIC_PATHS.map((p) => `https://${HOST}${p}`),
    ...Object.values(SEO_PILLARS).map((p) => `https://${HOST}/${p.slug}`),
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
