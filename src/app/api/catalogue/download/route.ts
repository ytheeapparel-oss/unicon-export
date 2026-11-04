import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";
import { LEATHER_GRADE_SPECS, PRODUCT_LINE_SPECS } from "@/components/seo/B2BManufacturingSpecs";
import { COMPANY_INFO } from "@/data/company";

export async function GET(req: NextRequest) {
  const downloadMode = req.nextUrl.searchParams.get("mode") === "download";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UNICON LEATHER — 2026 B2B Master Export Catalogue &amp; MOQ Specification Book</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif;
      color: #1a1a1a;
      background: #faf8f5;
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 50;
      background: #1a1a1a;
      color: #fff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 3px solid #9c5134;
    }
    .toolbar button, .toolbar a {
      background: #9c5134;
      color: #fff;
      border: none;
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      cursor: pointer;
      text-decoration: none;
      margin-left: 8px;
    }
    .container {
      max-width: 1080px;
      margin: 24px auto;
      background: #fff;
      padding: 40px;
      border: 1px solid #e5ded3;
    }
    h1, h2, h3 { font-family: Georgia, serif; font-weight: 500; margin-top: 0; }
    .kicker {
      font-family: monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #9c5134;
      font-weight: 700;
      display: block;
      margin-bottom: 6px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 32px;
      font-size: 12px;
    }
    th, td {
      border: 1px solid #dcd6cc;
      padding: 10px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f4f0e8;
      font-family: monospace;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.06em;
    }
    .sku-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 16px;
    }
    .sku-card {
      border: 1px solid #e5ded3;
      padding: 18px;
      background: #faf8f5;
      page-break-inside: avoid;
    }
    .sku-code {
      font-family: monospace;
      font-size: 11px;
      color: #9c5134;
      font-weight: 700;
    }
    @media print {
      .toolbar { display: none; }
      body { background: #fff; }
      .container { border: none; margin: 0; padding: 16px; max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <div>
      <strong>UNICON LEATHER</strong> · 2026 B2B Master Export Catalogue, Tannage &amp; MOQ Specification Directory
    </div>
    <div>
      <button onclick="window.print()">Print / Save as PDF</button>
      <a href="/products">Return to Online Catalog</a>
    </div>
  </div>

  <div class="container">
    <span class="kicker">Official Export Specification Dossier · Edition 2026</span>
    <h1>${COMPANY_INFO.name} (${COMPANY_INFO.legalName})</h1>
    <p>
      <strong>Manufacturing Atelier:</strong> ${COMPANY_INFO.factoryAddress}<br />
      <strong>Corporate &amp; Sourcing Desk:</strong> ${COMPANY_INFO.noidaOfficeAddress}<br />
      <strong>Direct Export Desk:</strong> ${COMPANY_INFO.primaryEmail} · WhatsApp/Tel: ${COMPANY_INFO.phone} · Web: https://www.uniconleather.com
    </p>

    <hr style="border: 0; border-top: 1px solid #e5ded3; margin: 24px 0;" />

    <span class="kicker">Section 01 · Category MOQ, HS Codes &amp; Lead-Time Matrix</span>
    <h2>B2B Production &amp; Tariff Classification Matrix</h2>
    <table>
      <thead>
        <tr>
          <th>Product Category &amp; HS Code</th>
          <th>Recommended Leather Grades</th>
          <th>Minimum Order Quantity (MOQ)</th>
          <th>Sample / Bulk Lead Time</th>
          <th>Customization Scope</th>
        </tr>
      </thead>
      <tbody>
        ${PRODUCT_LINE_SPECS.map(
          (row) => `<tr>
          <td><strong>${row.category}</strong><br/><span style="color:#9c5134;font-family:monospace;">${row.hsCode}</span></td>
          <td>${row.leatherGrades}</td>
          <td><strong>${row.moq}</strong></td>
          <td>Sample: ${row.sampleTime}<br/>Bulk: ${row.bulkLeadTime}</td>
          <td>${row.customization}</td>
        </tr>`
        ).join("")}
      </tbody>
    </table>

    <span class="kicker">Section 02 · Tannage &amp; Material Engineering</span>
    <h2>Traceable Leather Grades (LWG Audited Partner Tanneries)</h2>
    <table>
      <thead>
        <tr>
          <th>Leather Grade</th>
          <th>Thickness Gauge</th>
          <th>Tannery &amp; Chemical Standard</th>
          <th>MOQ &amp; Turnaround</th>
          <th>Applications</th>
        </tr>
      </thead>
      <tbody>
        ${LEATHER_GRADE_SPECS.map(
          (g) => `<tr>
          <td><strong>${g.grade}</strong></td>
          <td>${g.thickness}</td>
          <td>${g.tanneryStandard}</td>
          <td>${g.moq}<br/>${g.leadTime}</td>
          <td>${g.idealApplications}</td>
        </tr>`
        ).join("")}
      </tbody>
    </table>

    <span class="kicker">Section 03 · Base Factory Silhouettes (${PRODUCTS.length} Customizable Blocks)</span>
    <h2>Representative Export Catalogue Silhouettes</h2>
    <div class="sku-grid">
      ${PRODUCTS.map(
        (p) => `<div class="sku-card">
        <div class="sku-code">SKU: ${p.id} · ${p.category}</div>
        <h3 style="margin: 4px 0 8px; font-size: 16px;">${p.name}</h3>
        <p style="font-size: 12px; color: #444; margin: 0 0 10px;">${p.shortDescription}</p>
        <div style="font-size: 11.5px; color: #222;">
          <strong>Leather:</strong> ${p.leatherType}<br/>
          <strong>Dimensions:</strong> ${p.dimensions.length} × ${p.dimensions.height} × ${p.dimensions.width} ${p.dimensions.unit}<br/>
          <strong>Hardware:</strong> ${p.hardware}<br/>
          <strong>MOQ:</strong> ${p.moq}<br/>
          <strong>Sampling / Bulk:</strong> ${p.sampleLeadTime} / ${p.productionLeadTime}<br/>
          <strong>Spec URL:</strong> https://www.uniconleather.com/products/${p.slug}
        </div>
      </div>`
      ).join("")}
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      ...(downloadMode
        ? {
            "Content-Disposition":
              'attachment; filename="UNICON-LEATHER-2026-B2B-Master-Catalogue-Spec-Book.html"',
          }
        : {}),
    },
  });
}
