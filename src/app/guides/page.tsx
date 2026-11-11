import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, Layers, ShieldCheck } from "lucide-react";
import { GUIDES } from "../guidesContent";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";

const BASE = "https://www.uniconleather.com";

export const metadata: Metadata = {
  title: "B2B Leather Sourcing, Cost & MOQ Guides",
  description:
    "Technical leather manufacturing guides for global brands: private-label bag cost breakdowns, counter-sampling checklists, MOQ rules, leather grades, and country comparisons.",
  alternates: {
    canonical: `${BASE}/guides`,
  },
  openGraph: {
    title: "B2B Leather Sourcing, Cost & MOQ Guides | UNICON LEATHER",
    description:
      "Practical OEM & private-label leather manufacturing guides: costing, sampling timelines, MOQs, hide grades, and India vs. China/Vietnam/Italy sourcing comparison.",
    url: `${BASE}/guides`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "B2B Leather Sourcing, Cost & MOQ Guides | UNICON LEATHER",
    description:
      "Technical leather manufacturing guides covering costing, counter-sampling, MOQs, leather grades, and export compliance.",
  },
};

const TECHNICAL_RESOURCES = [
  {
    href: "/leather-quality-sourcing-guide",
    category: "Hide Grades & Gauges",
    title: "Leather Quality, Hide Grades & Thickness Guide",
    description:
      "Compare full-grain cowhide, drum-dyed lambskin nappa, vegetable-tanned bridle, and split hides by mm gauge, patination, and ideal bag or jacket construction.",
    cta: "Read Leather Guide",
  },
  {
    href: "/leather-sourcing-india-vs-china-vietnam-italy",
    category: "Country Matrix",
    title: "Leather Sourcing: India vs. China, Vietnam & Italy",
    description:
      "Side-by-side comparison of raw hide supply, labor craftsmanship, factory MOQs, EU/US tariff exposure, and sample lead times across key manufacturing hubs.",
    cta: "Compare Hubs",
  },
  {
    href: "/cost-calculator",
    category: "Planning Tool",
    title: "Interactive B2B FOB Cost & MOQ Estimator",
    description:
      "Estimate unit price ranges, hide consumption, and stock-leather vs. custom-dye MOQs across handbags, briefcases, backpacks, jackets, belts, and RFID wallets.",
    cta: "Open Estimator",
  },
];

export default function GuidesIndexPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "Sourcing Guides", url: `${BASE}/guides` },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE}/guides#collection`,
    name: "UNICON LEATHER B2B Sourcing & Manufacturing Guides",
    url: `${BASE}/guides`,
    description:
      "Buying and engineering documentation covering leather bag costing, prototype sampling approvals, MOQs, hide specifications, and export compliance.",
    hasPart: [
      ...GUIDES.map((g) => ({
        "@type": "Article",
        name: g.title,
        url: `${BASE}/guides/${g.slug}`,
        description: g.description,
      })),
      ...TECHNICAL_RESOURCES.map((r) => ({
        "@type": "WebPage",
        name: r.title,
        url: `${BASE}${r.href}`,
        description: r.description,
      })),
    ],
  };

  return (
    <div className="bg-white text-charcoal pb-24">
      <JsonLdScript schema={breadcrumb} />
      <JsonLdScript schema={collectionSchema} />

      <header className="bg-[#FAF8F5] border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20 space-y-5">
          <nav aria-label="Breadcrumbs" className="text-sm text-charcoal-600">
            <Link href="/" className="underline underline-offset-4 hover:text-cognac">
              Home
            </Link>{" "}
            / <span className="text-charcoal font-medium">Sourcing Guides</span>
          </nav>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cognac font-semibold">
            Unicon Leather · Procurement &amp; Technical Playbooks
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight text-charcoal max-w-4xl">
            B2B Leather Manufacturing, Costing &amp; Sourcing Guides
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-charcoal-700 max-w-3xl font-light">
            Structured documentation for fashion founders, buying teams, and sourcing directors planning private-label leather bags, wallets, belts, or outerwear from our Bantala, Kolkata atelier and Noida export desk.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-14 space-y-16">
        <section aria-labelledby="procurement-guides-heading" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-charcoal/10 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cognac font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Core Playbooks
              </span>
              <h2 id="procurement-guides-heading" className="font-serif text-2xl sm:text-3xl text-charcoal mt-1">
                Costing, Counter-Sampling &amp; MOQ Guides
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDES.map((guide, index) => (
              <article
                key={guide.slug}
                className="bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-cognac transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cognac font-semibold block">
                    Guide 0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal leading-snug">
                    <Link href={`/guides/${guide.slug}`} className="hover:text-cognac transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal/10">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-cognac hover:text-charcoal"
                  >
                    Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="technical-tools-heading" className="space-y-6">
          <div className="border-b border-charcoal/10 pb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cognac font-semibold">
              <Layers className="w-3.5 h-3.5" /> Engineering Matrices &amp; Tools
            </span>
            <h2 id="technical-tools-heading" className="font-serif text-2xl sm:text-3xl text-charcoal mt-1">
              Material Specifications, Benchmarks &amp; Estimators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECHNICAL_RESOURCES.map((item) => (
              <article
                key={item.href}
                className="bg-white border border-charcoal/15 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-cognac transition-colors shadow-2xs"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal leading-snug">
                    <Link href={item.href} className="hover:text-cognac transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal/10">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-cognac hover:text-charcoal"
                  >
                    {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#FAF8F5] border border-charcoal/15 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cognac font-semibold">
              <ShieldCheck className="w-4 h-4" /> Project Quotation Desk
            </span>
            <h2 className="font-serif text-2xl text-charcoal">
              Ready to Price Your Tech Pack or Request Physical Swatches?
            </h2>
            <p className="text-sm text-charcoal-600 font-light leading-relaxed">
              Send dimensions, leather preferences, and target order quantities to receive a written FOB, CIF, or DDP project quote within 24–48 business hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/cost-calculator"
              className="inline-flex items-center gap-2 border border-charcoal/30 bg-white px-5 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-charcoal hover:border-charcoal"
            >
              <Calculator className="w-3.5 h-3.5" /> Cost Estimator
            </Link>
            <Link
              href="/contact#rfp-form"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-cognac transition-colors"
            >
              Request Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
