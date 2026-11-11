import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";

export type Guide = { slug: string; title: string; metaTitle: string; description: string; intro: string; sections: { heading: string; paragraphs: string[]; items?: string[] }[] };
export const GUIDES: Guide[] = [
  {
    "slug": "private-label-leather-bag-costs",
    "title": "Private Label Leather Bag Costs: What Goes Into Your Quote",
    "metaTitle": "Private Label Leather Bag Costs | Quote Guide",
    "description": "Understand leather, construction, branding, tooling, packaging and freight costs. Prepare a comparable private-label bag manufacturing quotation.",
    "intro": "A useful factory quotation starts with a defined product. A tote in stock leather and a structured briefcase with custom metalwork cannot be compared using a single headline price. This guide explains the information Unicon Leather needs to prepare a project-specific quote and the cost items a brand should compare.",
    "sections": [
      {
        "heading": "Separate the product price from development and delivery",
        "paragraphs": [
          "Ask for the unit price at your requested quantity and a separate breakdown of sampling, tooling, packaging and transport. Confirm the quote currency and validity period. A sample-development fee or a custom logo mould is not the same as a recurring per-unit production cost.",
          "Use the same specification when comparing suppliers. A quote that includes a lining, branded hardware, dustbag and inspection may cover a different scope from a quote for an unlined, unbranded bag. Document the inclusions before choosing an offer."
        ],
        "items": [
          "Unit price and quantity per style or color.",
          "Sample development, custom tooling and any agreed repeat-use terms.",
          "Individual packaging, master cartons and buyer-specific labels.",
          "Freight, destination charges, testing and inspection scope as quoted."
        ]
      },
      {
        "heading": "Leather selection and usable hide yield",
        "paragraphs": [
          "Leather type, thickness, finish, color and panel size affect material selection. Large unbroken panels need different cutting allowances from small panels or wallets. Natural markings and your agreed visual acceptance standard also affect which parts of a hide can be used.",
          "Provide a reference swatch or describe the required grain and temper. Ask the factory to confirm material availability, usable yield and the effect of a custom dye lot. A leather that is already in stock may support a different starting quantity from a new custom color."
        ]
      },
      {
        "heading": "Construction, lining and hardware",
        "paragraphs": [
          "A simple open tote and a reinforced laptop briefcase have different pattern, assembly and finishing requirements. Compartments, gussets, zips, handle construction, edge finish and lining all need to be specified before a unit price is meaningful.",
          "Custom branding can include debossing, foil stamping, a leather patch or a metal logo plate. Confirm artwork, size, position, finish and whether an existing tool can be used. For bespoke hardware, request the tooling cost, development sequence and approval requirements separately."
        ]
      },
      {
        "heading": "Quantity changes the quotation",
        "paragraphs": [
          "Ask for tiers that match a realistic launch and reorder plan. Compare the cost of one repeatable style against splitting the same total quantity across many colors or designs. A lower per-unit price does not automatically make a larger order the better fit for your inventory.",
          "For Unicon Leather bags and jackets, published starting quantities are 50 pieces per style in stock leather and 100 for custom dye. Wallets, cardholders and belts generally require 100–200 pieces. Material availability, color allocation and construction are confirmed in the project quotation."
        ]
      },
      {
        "heading": "Keep freight and landed-cost assumptions explicit",
        "paragraphs": [
          "Include your destination country and postal code and request the shipping terms you need. FOB, CIF and DDP quotations cover different responsibilities; compare the written scope rather than treating the terms as interchangeable.",
          "Ask who handles import formalities, duties, taxes, local delivery and insurance. Final classification and destination requirements depend on the product and shipment. This guide provides no fixed duty rate, universal landed price or binding commercial offer."
        ]
      },
      {
        "heading": "Send a complete quote request",
        "paragraphs": [
          "Send the product dimensions, reference photographs or tech pack, leather preference, lining, hardware, branding artwork, quantity by style and color, packaging, target date and delivery destination. Include a target unit budget if you have one.",
          "The cost calculator is an indicative planning tool. A written quotation following specification review is the basis for agreeing a project. Before paying for production, confirm the approved sample, final specification, delivery scope and payment milestones in writing."
        ],
        "items": [
          "Dimensions and intended use, including any laptop or capacity requirement.",
          "Tech pack or clear reference images with construction details.",
          "Leather, lining, hardware, logo and packaging requirements.",
          "Quantity per style/color, destination postal code and target delivery date."
        ]
      }
    ]
  },
  {
    "slug": "leather-bag-sampling-process",
    "title": "How Leather Bag Sampling Works: From Tech Pack to Approval",
    "metaTitle": "Leather Bag Sampling Process | OEM & Private Label",
    "description": "Plan a leather bag or wallet sample: tech packs, material approval, prototype review, revisions and production sign-off. See stock-leather development timelines.",
    "intro": "A physical sample lets a brand check construction, proportions, material and branding before committing to bulk manufacturing. Agree what each sample is intended to prove and record changes in one specification so that the factory and buyer are working from the same reference.",
    "sections": [
      {
        "heading": "1. Define the product and intended use",
        "paragraphs": [
          "Start with drawings, a tech pack, reference photographs or a physical reference. Include dimensions and the use case: a work tote, laptop briefcase and travel duffel need different handling and capacity details.",
          "List the compartments, closures, handles, straps, lining, hardware and logo position. If your design is still developing, identify which choices are fixed and which you want the pattern team to propose."
        ]
      },
      {
        "heading": "2. Agree materials, branding and the sample scope",
        "paragraphs": [
          "Review the leather grain, thickness, color and feel, along with lining and hardware finishes. Specify whether stock materials can be used for the first construction sample or whether you need the intended custom color and branded components immediately.",
          "Confirm the sample fee, tooling requirements, revision scope and courier charges in writing. If designs are confidential, arrange an NDA before exchanging proprietary files. A website inquiry is not itself a signed NDA."
        ],
        "items": [
          "Material swatch and color reference.",
          "Logo artwork, size and position.",
          "Hardware finish and any bespoke tooling.",
          "What is included in the first sample and any revision round."
        ]
      },
      {
        "heading": "3. Separate development time from courier transit",
        "paragraphs": [
          "Unicon Leather publishes stock-leather development timelines of 5–7 business days for wallets and belts and 7–14 business days for bags and jackets. Custom dye or tooling can add 7–10 business days. Confirm the timeline for the chosen SKU and specification in your quotation.",
          "Courier transit is additional and depends on destination and shipping arrangements. Clarify when development begins, which approvals are needed first and whether a revision changes the schedule. These planning timelines are not guaranteed arrival dates."
        ]
      },
      {
        "heading": "4. Review the physical sample against a checklist",
        "paragraphs": [
          "Measure the sample and compare it with the agreed specification. Check the leather appearance, lining, closure operation, handle comfort, strap adjustment, pockets, edge finish, logo position and packaging.",
          "Test the intended fit using the actual item the bag should carry. A nominal laptop size does not confirm that every device will fit. For load, abrasion, colorfastness or chemical requirements, agree the test method and acceptance criteria rather than relying on appearance alone."
        ],
        "items": [
          "Record measured dimensions and usable compartment space.",
          "Photograph any issues with a ruler or clear location reference.",
          "Separate essential corrections from optional design changes.",
          "State whether artwork, materials or components remain provisional."
        ]
      },
      {
        "heading": "5. Consolidate revisions and approve the production reference",
        "paragraphs": [
          "Send one numbered revision list with annotated photographs. Resolve conflicting comments before requesting a revised sample. Where a material or hardware item changes, confirm whether the change also affects price or lead time.",
          "Before bulk production, approve the final sample and dated specification in writing. Retain an agreed reference for later quality inspection. The production plan should state which features have been approved, what testing is required and whether any component is still awaiting confirmation."
        ]
      },
      {
        "heading": "6. Confirm production and shipment milestones",
        "paragraphs": [
          "Bulk lead time is separate from sampling and varies by product. Use the lead time shown on the product page as a starting point, then confirm the final schedule, material procurement, approvals and payment milestones in the written order.",
          "Agree the inspection stage and shipping terms before dispatch. Ask the export desk which sample costs, if any, are credited against the bulk order and under what conditions. Confirming this early avoids assumptions about refunds or credits."
        ]
      }
    ]
  },
  {
    "slug": "leather-bag-moq-explained",
    "title": "Leather Bag MOQ Explained: Stock Leather, Custom Colors and Small Runs",
    "metaTitle": "Leather Bag MOQ Explained | Small-Run Manufacturing",
    "description": "Understand minimum order quantities for private-label bags, wallets and belts. Compare stock leather, custom dye, color splits and practical small-run options.",
    "intro": "MOQ means minimum order quantity, but a supplier's headline number is only the starting point. The minimum may apply to a style, color, material or component. Before planning a launch, ask exactly what the quoted MOQ covers and which specification choices change it.",
    "sections": [
      {
        "heading": "What can an MOQ apply to?",
        "paragraphs": [
          "One style produced in one leather may share a pattern, cutting process and assembly sequence. Different sizes, colors or custom components can require separate preparation. That is why a total order of 100 pieces does not automatically mean ten styles of ten pieces each.",
          "Ask whether the minimum applies per style, per color or per material lot, and whether components have their own minimums. Keep those answers alongside the quote so you can compare offers consistently."
        ]
      },
      {
        "heading": "Published starting quantities at Unicon Leather",
        "paragraphs": [
          "For bags and jackets, stock-leather trials start at 50 pieces per style and custom-dyed versions at 100. For wallets, cardholders and belts, typical starting quantities are 100–200 pieces depending on the specification.",
          "These are starting guidelines, not approval of every design or color split at that quantity. The product-specific page and written quotation should confirm the applicable quantity, leather availability and any bespoke hardware requirements."
        ],
        "items": [
          "Bags and jackets: from 50 pieces per style in stock leather.",
          "Custom-dyed bags and jackets: from 100 pieces per style.",
          "Wallets, cardholders and belts: generally 100–200 pieces; confirm the SKU.",
          "Samples: quote separately from a bulk manufacturing run."
        ]
      },
      {
        "heading": "Why stock leather can support a smaller launch",
        "paragraphs": [
          "Using available leather and established hardware can reduce the number of items that need to be developed or ordered specifically for a new project. A catalogue silhouette may also provide an existing starting pattern.",
          "Stock availability still needs confirmation. Send the required color and quantity and ask which available materials match the intended look. Do not assume that an old swatch or website photograph represents a reserved material lot."
        ]
      },
      {
        "heading": "How custom colors and hardware affect minimums",
        "paragraphs": [
          "A custom leather color needs its own approval process and material plan. Bespoke metal components, linings or packaging can have different supplier requirements from the finished bag itself.",
          "Ask whether your design can use standard hardware with a custom leather logo patch or debossing for the first run. Discuss alternatives that preserve the design's purpose, then compare the price, MOQ and development implications before choosing."
        ]
      },
      {
        "heading": "Can an order be split across colors?",
        "paragraphs": [
          "Color splitting may be possible, but it needs project approval. Specify the quantity of each color and ask whether the colors can share the required material and component quantities.",
          "Different leather colors or finishes can also look different in production. Approve the relevant material references and clarify tolerances. An agreed color split on one order is not a general promise that every future project can use the same split."
        ]
      },
      {
        "heading": "Plan a practical small-run request",
        "paragraphs": [
          "Choose a focused starting range, define the core specifications and compare a stock-material option against the fully custom version. Request quantity tiers that suit your launch, rather than choosing the largest order only to reduce the unit price.",
          "Send one clear table of styles, colors and quantities with your target delivery date and destination. Ask the factory to confirm feasibility, sample requirements, final MOQ and reorder assumptions. For physical development of a new design, use the sampling guide before approving bulk production."
        ],
        "items": [
          "Start with a defined style and intended use.",
          "List quantity by style, size and color.",
          "Confirm available leather and standard component options.",
          "Keep sampling, tooling, production and transport costs separate."
        ]
      }
    ]
  }
];
const BASE = "https://www.uniconleather.com";
const PUBLISHED = "2026-11-06";
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = GUIDES.find(g => g.slug === params.slug);
  if (!guide) return { title: "Guide not found", robots: { index: false } };
  const url = `${BASE}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.metaTitle, description: guide.description, url, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED },
    twitter: { card: "summary", title: guide.metaTitle, description: guide.description },
  };
}

export default function SourcingGuidePage({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find(g => g.slug === params.slug);
  if (!guide) notFound();
  const url = `${BASE}/guides/${guide.slug}`;
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "Sourcing Guides", url: `${BASE}/guides` },
    { name: guide.title, url },
  ]);
  const article = {
    "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`,
    headline: guide.title, description: guide.description, mainEntityOfPage: url,
    datePublished: PUBLISHED, dateModified: PUBLISHED, inLanguage: "en",
    author: { "@type": "Organization", name: "Unicon Leather", url: BASE },
    publisher: { "@type": "Organization", name: "Unicon Leather", url: BASE },
  };
  return (
    <div className="bg-white text-charcoal pb-20">
      <JsonLdScript schema={breadcrumb} />
      <JsonLdScript schema={article} />
      <header className="bg-[#FAF8F5] border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-16 space-y-5">
          <nav aria-label="Breadcrumbs" className="text-sm text-charcoal-600">
            <Link href="/" className="underline">Home</Link> / <Link href="/guides" className="underline">Sourcing Guides</Link> / {guide.title}
          </nav>
          <p className="font-mono text-xs uppercase tracking-widest text-cognac">Unicon Leather · Buyer Sourcing Guide</p>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight">{guide.title}</h1>
          <p className="text-base sm:text-lg leading-relaxed text-charcoal-700">{guide.intro}</p>
          <p className="text-sm text-charcoal-600">Published <time dateTime={PUBLISHED}>6 November 2026</time> · By Unicon Leather</p>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-12">
        <nav aria-label="On this page" className="border border-charcoal/15 p-6 bg-charcoal-50">
          <h2 className="font-serif text-xl mb-4">In this guide</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            {guide.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="underline underline-offset-4">{section.heading}</a></li>)}
          </ol>
        </nav>
        <article className="space-y-12">
          {guide.sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-32 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph} className="leading-relaxed text-charcoal-700">{paragraph}</p>)}
              {section.items && <ul className="list-disc pl-6 space-y-2 text-charcoal-700 leading-relaxed">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
        <aside aria-label="Manufacturing resources" className="bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-8 space-y-5">
          <h2 className="font-serif text-2xl">Plan your next manufacturing step</h2>
          <p className="text-charcoal-700 leading-relaxed">These guides explain the process. Your written quotation and approved specification confirm the commercial terms for your project.</p>
          <ul className="space-y-3">
            {GUIDES.filter(g => g.slug !== guide.slug).map(g => <li key={g.slug}><Link href={`/guides/${g.slug}`} className="underline underline-offset-4">{g.title}</Link></li>)}
            <li><Link href="/cost-calculator" className="underline underline-offset-4">Indicative cost and MOQ calculator</Link></li>
            <li><Link href="/leather-quality-sourcing-guide" className="underline underline-offset-4">Leather grades and sourcing guide</Link></li>
          </ul>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact#rfp-form" className="inline-flex bg-charcoal text-white px-6 py-3 text-sm font-semibold">Request a project quote</Link>
            <Link href="/products" className="inline-flex border border-charcoal/30 px-6 py-3 text-sm font-semibold">Explore bags and wallets</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
