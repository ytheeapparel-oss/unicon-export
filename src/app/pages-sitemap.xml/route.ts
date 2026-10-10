import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export const dynamic = "force-dynamic";

export async function GET() {
  const entries = sitemap();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((item) => {
    const alternatesXml = item.alternates?.languages
      ? Object.entries(item.alternates.languages)
          .map(
            ([lang, href]) =>
              `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`
          )
          .join("\n") + "\n"
      : "";

    return `  <url>
    <loc>${item.url}</loc>
${alternatesXml}    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>${item.changeFrequency || "weekly"}</changefreq>
    <priority>${item.priority || 0.8}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
