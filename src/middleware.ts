import { NextRequest, NextResponse } from "next/server";

const BOT_USER_AGENTS = [
  "googlebot",
  "google-inspectiontool",
  "google-extended",
  "adsbot-google",
  "apis-google",
  "mediapartners-google",
  "chrome-lighthouse",
  "bingbot",
  "bingpreview",
  "oai-searchbot",
  "chatgpt-user",
  "gptbot",
  "claude-searchbot",
  "claude-user",
  "claudebot",
  "perplexitybot",
  "perplexity-user",
  "applebot",
  "applebot-extended",
  "yandexbot",
  "baiduspider",
  "duckduckbot",
  "slurp",
  "facebot",
  "facebookexternalhit",
  "meta-externalagent",
  "cohere-ai",
  "ccbot",
  "ia_archiver",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const country =
    request.geo?.country ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "US";

  // 1. Canonical Host Enforcement: 301 Permanent Redirect for vercel.app and non-canonical domains
  const host = (request.headers.get("host") || "").toLowerCase();
  const search = request.nextUrl.search || "";

  if (
    host.includes("vercel.app") ||
    host === "uniconleather.com" ||
    host === "myunicon.com" ||
    host === "www.myunicon.com"
  ) {
    const canonicalDestination = new URL(
      `https://www.uniconleather.com${pathname}${search}`
    );
    return NextResponse.redirect(canonicalDestination, 301);
  }

  // 2. Canonical Path Consolidation: 301 Redirect legacy & consolidated duplicate paths
  const PATH_REDIRECT_MAP: Record<string, string> = {
    "/private-label-leather-goods": "/private-label",
    "/full-grain-vs-top-grain-leather": "/leather-quality-sourcing-guide",
    "/leather-goods-supplier-usa": "/en-us",
    "/leather-handbag-manufacturer-india": "/leather-handbags-manufacturer-india",
    "/leather-tote-bag-manufacturer": "/products/tote-bags",
    "/custom-leather-bags-manufacturer": "/custom-leather-goods-manufacturer",
    "/export/usa/leather-goods-manufacturer-usa": "/en-us",
    "/export/europe/private-label-leather-bags-uk-london": "/en-gb",
    "/export/europe/leather-goods-manufacturer-germany": "/de",
    "/export/europe/luxury-leather-atelier-france-paris": "/fr",
    "/export/australia/leather-goods-manufacturer-australia": "/en-au",
    "/request-catalogue": "/catalogue-request",
    "/export-usa": "/en-us",
    "/export-canada": "/en-ca",
    "/global-export": "/export",
  };

  if (PATH_REDIRECT_MAP[pathname]) {
    return NextResponse.redirect(
      new URL(`https://www.uniconleather.com${PATH_REDIRECT_MAP[pathname]}`, request.url),
      301
    );
  }

  // 3. Map legacy parameterized /products?category=... URLs to their distinct static /products/[slug] category routes
  if (pathname === "/products") {
    const rawCategory = (request.nextUrl.searchParams.get("category") || "").trim().toLowerCase();
    const CATEGORY_SLUG_MAP: Record<string, string> = {
      "handbags": "leather-handbags",
      "leather-handbags": "leather-handbags",
      "leather handbags": "leather-handbags",
      "totes": "tote-bags",
      "tote-bags": "tote-bags",
      "tote bags": "tote-bags",
      "backpacks": "backpacks",
      "business-bags": "laptop-and-business-bags",
      "laptop-and-business-bags": "laptop-and-business-bags",
      "laptop & business bags": "laptop-and-business-bags",
      "travel-bags": "travel-bags",
      "travel & duffel bags": "travel-bags",
      "duffels": "travel-bags",
      "wallets": "wallets-and-cardholders",
      "wallets-and-cardholders": "wallets-and-cardholders",
      "wallets & cardholders": "wallets-and-cardholders",
      "belts": "leather-belts",
      "leather-belts": "leather-belts",
      "leather belts": "leather-belts",
      "jackets": "leather-jackets",
      "leather-jackets": "leather-jackets",
      "leather jackets & apparel": "leather-jackets",
      "jacquard-totes": "designer-jacquard-totes",
      "designer-jacquard-totes": "designer-jacquard-totes",
      "designer jacquard totes": "designer-jacquard-totes",
      "artisan-duffels": "artisan-travel-duffels",
      "artisan-travel-duffels": "artisan-travel-duffels",
      "artisan travel duffels": "artisan-travel-duffels",
      "croc-briefcases": "croc-embossed-briefcases",
      "croc-embossed-briefcases": "croc-embossed-briefcases",
      "croc-embossed briefcases": "croc-embossed-briefcases",
      "heritage-backpacks": "heritage-backpacks",
      "heritage leather backpacks": "heritage-backpacks",
    };

    if (rawCategory && CATEGORY_SLUG_MAP[rawCategory]) {
      return NextResponse.redirect(
        new URL(`https://www.uniconleather.com/products/${CATEGORY_SLUG_MAP[rawCategory]}`, request.url),
        301
      );
    }

    if (request.nextUrl.searchParams.has("category")) {
      return NextResponse.redirect(new URL("https://www.uniconleather.com/products", request.url), 301);
    }
  }

  // 3. Bypass all static assets, sitemaps, API, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots")
  ) {
    return NextResponse.next();
  }

  // 3. Strict Search & AI Bot Exemption: Always serve requested URL directly without geo-redirection
  const isSearchBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isSearchBot) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Routing", "Bypassed-SearchBot-Verified");
    return response;
  }

  // 4. Inject Geo-Headers for Non-Intrusive Region UX
  const response = NextResponse.next();
  response.headers.set("X-User-Country", country);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
