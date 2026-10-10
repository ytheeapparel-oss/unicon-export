import { NextRequest, NextResponse } from "next/server";

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandexbot",
  "baiduspider",
  "duckduckbot",
  "slurp",
  "applebot",
  "facebot",
  "ia_archiver",
  "gptbot",
  "claudebot",
  "perplexitybot",
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

  if (host.includes("vercel.app") || host === "uniconleather.com") {
    const canonicalDestination = new URL(
      `https://www.uniconleather.com${pathname}${search}`
    );
    return NextResponse.redirect(canonicalDestination, 301);
  }

  // 2. Bypass all static assets, sitemaps, API, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots")
  ) {
    return NextResponse.next();
  }

  // 2. Strict Search Engine Bot Exemption: Always serve requested URL directly
  const isSearchBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isSearchBot) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Routing", "Bypassed-SearchBot-Verified");
    return response;
  }

  // 3. Inject Geo-Headers for Non-Intrusive Region UX
  const response = NextResponse.next();
  response.headers.set("X-User-Country", country);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
