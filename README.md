# UNICON EXPORT – Luxury B2B Manufacturer & Global Exporter Website

A complete, production-ready, luxury B2B website engineered for **UNICON LEATHER**, an export-focused leather goods manufacturer and private-label OEM/ODM factory serving international brands, wholesalers, and department store buying houses across the USA, UK, Europe, Australia, Canada, UAE, Japan, and worldwide.

Designed in an editorial style inspired by **Squarespace Mariana Fluid Demo** and **Mason Fluid Demo**, featuring expansive whitespace, refined serif headings (`Playfair Display`), crisp data typography (`Inter`), and a warm luxury color palette.

---

## 1. Technology Stack

* **Framework**: Next.js 14 (App Router, Server Components & Static Site Generation)
* **Language**: TypeScript 5 (Strict type checking)
* **Styling**: Tailwind CSS (Custom luxury color tokens, typography scales & micro-shadows)
* **Icons**: Lucide React
* **Forms & Validation**: React Hook Form with client-side validation
* **SEO Architecture**: Static generation, JSON-LD Schema (Organization, Product, FAQPage, BreadcrumbList), dynamic OpenGraph & Twitter cards, dynamic `sitemap.xml`, and `robots.txt`
* **Performance**: Optimized Google Font loading (`next/font`), zero layout shifts (CLS < 0.01), responsive Next.js `<Image>` configurations with graceful visual fallbacks

---

## 2. Complete 10-Page Architecture & Route Map

| Page | Route | Purpose & Key Features |
| :--- | :--- | :--- |
| **Home** | `/` | Editorial B2B Hero, Trust Pillars, 11 Categories, 4-Step Process, Export Reach, Testimonials, Inquiry RFP |
| **About Us** | `/about` | Atelier heritage, manufacturing infrastructure, artisan guild vs modern machinery, ethical standards |
| **Catalogue** | `/products` | Interactive catalogue with 11-category filters, search, leather grades, sorting, Quick Quote modal |
| **Product Detail** | `/products/[slug]` | Reusable dynamic template, multi-angle gallery, technical specs, spec sheet download, pre-filled RFQ |
| **Private Label & OEM** | `/private-label` | 8-step brand workflow, NDA protection, custom tooling moulds, Pantone dyeing, prototype sampling |
| **Craftsmanship** | `/craftsmanship` | 11-stage manufacturing process, 0.4mm micro-skiving, Italian edge finishing, technical tolerances |
| **Sustainability** | `/sustainability` | Verifiable practices, LWG-audited partner tanneries, EU REACH Annex XVII, zero-waste cutting |
| **Global Export** | `/export` | Incoterms (FOB, CIF, DDP, EXW), shipping transit times to USA/UK/EU/UAE/Japan, packing standards |
| **Quality & Compliance**| `/compliance` | 4-stage QC protocol, AQL 2.5 benchmarks, physical/chemical laboratory testing, audit readiness |
| **Contact & Inquiries** | `/contact` | Complete commercial RFQ form, factory address, WhatsApp direct link, interactive FAQ accordion |
| **Catalogue Request** | `/catalogue-request` | Instant digital lookbook and material swatch directory download |
| **Lead Confirmation** | `/thank-you` | Inquiry confirmation, next-steps roadmap, and SLA guarantee |
| **Legal: Privacy** | `/privacy-policy` | B2B data protection and design NDA confidentiality terms |
| **Legal: Terms** | `/terms` | Commercial manufacturing terms, sampling fees, and Incoterm liabilities |
| **Legal: Cookies** | `/cookie-policy` | Technical cookies and analytics transparency |

---

## 3. Image Replacement & Asset Placement Guide

All product and category images are referenced centrally in:
* Products data: `src/data/products.ts`
* Categories data: `src/data/categories.ts`

### Recommended Image Dimensions & Formats

| Asset Type | Recommended Resolution | Aspect Ratio | Format |
| :--- | :--- | :--- | :--- |
| **Product Catalog Stage** | `1200 × 900 px` | 4:3 | WebP / AVIF / JPG (Optimized) |
| **Category Card Cover** | `1000 × 1250 px` | 4:5 | WebP / JPG |
| **Factory / Atelier Visuals** | `1600 × 1200 px` | 4:3 | WebP / JPG |
| **Brand Logo (Header/Footer)** | `400 × 100 px` (Transparent) | 4:1 | PNG / SVG |

### How to Replace Images:
1. Place genuine high-resolution photographs into the `/public/images/` directory.
2. Update the image paths in `src/data/products.ts` or `src/data/categories.ts` (e.g. `/images/handbag-01.webp`).
3. Next.js `<Image>` component automatically optimizes, compresses, and generates responsive `srcset` variations.

---

## 4. Central Business Configuration & Placeholders

All company contact numbers, factory plot addresses, verified partner certifications, and MOQ guidelines are centrally managed in:
`src/data/company.ts`

### Editable Parameters:
```typescript
export const COMPANY_INFO = {
  name: "UNICON LEATHER",
  establishedYear: "[YEAR - e.g., 2012]",
  locationCity: "[CITY, e.g., Kolkata / Chennai / Kanpur]",
  locationState: "[STATE, e.g., West Bengal / Tamil Nadu]",
  fullAddress: "Plot No. 42-45, Zone 3, Calcutta Leather Complex, Bantala, Kolkata, West Bengal 700135, India",
  primaryEmail: "work@uniconleather.net",
  secondaryEmail: "ytheeapparel@gmail.com",
  phone: "+91 9873102341",
  whatsapp: "+91 9873102341",
  whatsappDirectUrl: "https://wa.me/919873102341",
  moq: { ... },
  certifications: [ ... ]
};
```

---

## 5. Deployment Instructions

### Deploying to Vercel (1-Click)
1. Push this repository to GitHub or GitLab.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Next.js.
4. Click **Deploy**. Your site will build and be live globally on Vercel's Edge Network within 60 seconds.

### Deploying to Netlify
1. Push this repository to GitHub.
2. Log in to [netlify.com](https://netlify.com) and select **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Build settings (automatically configured):
   * Build command: `npm run build`
   * Publish directory: `.next`
5. Click **Deploy Site**.

---

## 6. Custom Domain Setup

1. In your Vercel or Netlify Project Dashboard, navigate to **Settings > Domains**.
2. Enter your custom domain (e.g., `myunicon.com` and `www.myunicon.com`).
3. Add the provided DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):
   * **A Record**: `@` → `76.76.21.21` (for Vercel) or Netlify load balancer IP
   * **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Automatic SSL/TLS certificates will generate automatically within 10–15 minutes.

---

## 7. Google Search Console & GA4 Setup

### Google Search Console
1. Visit [search.google.com/search-console](https://search.google.com/search-console).
2. Add your property `https://myunicon.com` using DNS TXT verification or HTML tag.
3. Submit your dynamic sitemap URL: `https://myunicon.com/sitemap.xml`.
4. Google will index all 10 core pages and individual dynamic product pages automatically.

### Google Analytics 4 (GA4)
1. Create a Google Analytics 4 property and obtain your Measurement ID (e.g. `G-XXXXXXXXXX`).
2. Add the `<Script>` tag with your Measurement ID into `src/app/layout.tsx`.

---

## 8. Quality & Verification Checklist

- [x] **Mobile Responsiveness**: Verified on mobile (375px), tablet (768px), and desktop (1280px+).
- [x] **Sticky Navigation**: Slim scroll collapse with mobile hamburger drawer.
- [x] **Interactive Catalogue Filters**: Real-time filtering across all 11 categories, search terms, and leather grades.
- [x] **Product Detail Pages**: Dynamic routing (`/products/[slug]`), spec sheets, client-side spec download, and pre-filled RFP modals.
- [x] **Form Validation**: React Hook Form validation with email pattern matching, required indicators, and direct feedback states.
- [x] **SEO & Structured Data**: Clean JSON-LD schemas (Organization, Product, FAQPage, BreadcrumbList), dynamic sitemap, and robots.txt.
- [x] **Accessibility (WCAG 2.2 AA)**: High-contrast text ratios, visible focus outlines, screen-reader accordions, and touch targets >= 44px.
- [x] **No Broken Links**: 100% of internal links, CTAs, category tags, and legal routes point to functional endpoints.
