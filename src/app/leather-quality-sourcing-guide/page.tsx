import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Award,
  Scale,
  FileText,
  MessageCircle,
  Globe,
  Sliders,
  Check,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import {
  JsonLdScript,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/components/seo/JsonLdScript";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "The Ultimate Leather Quality & Sourcing Guide for Brands",
  description:
    "The definitive B2B technical manual for fashion brands and sourcing directors: How to distinguish Full-Grain from Top-Grain leather, LWG sustainable tanning standards, EU REACH & Prop 65 chemical compliance, millimeter thickness gauges, and OEM MOQs.",
  alternates: {
    canonical: "https://www.uniconleather.com/leather-quality-sourcing-guide",
  },
  openGraph: {
    title: "The Ultimate Leather Quality & Sourcing Guide for Brands | UNICON LEATHER",
    description:
      "Answer-first B2B leather engineering and procurement manual: Full-Grain vs. Top-Grain, LWG sustainable tanning standards, ISO tensile metrics, and OEM manufacturing benchmarks.",
    url: "https://www.uniconleather.com/leather-quality-sourcing-guide",
    type: "article",
    images: [
      {
        url: "https://www.uniconleather.com/images/craftsmanship-hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Ultimate Leather Quality & Sourcing Guide for Brands — UNICON LEATHER",
      },
    ],
  },
  keywords: [
    "leather quality and sourcing guide for brands",
    "how to distinguish full-grain from top-grain leather",
    "sustainable leather tanning standards LWG",
    "vegetable tanned vs chrome tanned leather B2B",
    "leather thickness chart handbags jackets wallets",
    "EU REACH Annex XVII leather compliance",
    "AQL 2.5 leather inspection standard",
    "custom leather goods manufacturer India",
  ],
};

interface GuideSection {
  id: string;
  number: string;
  category: string;
  questionHeading: string;
  directAnswer: string;
  statisticalProof: {
    metric: string;
    label: string;
    context: string;
  }[];
  bulletPoints: {
    title: string;
    detail: string;
  }[];
}

const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "full-grain-vs-top-grain",
    number: "01",
    category: "Hide Anatomy & Grading",
    questionHeading: "How to Distinguish Full-Grain from Top-Grain Leather?",
    directAnswer:
      "Full-grain leather retains 100% of the hide's outermost epidermis (corium junction) without any mechanical sanding or buffing, preserving dense interlocking collagen fibers and natural pore micro-structures. Top-grain leather has its uppermost 0.1mm–0.3mm surface lightly buffed to remove healed scars and is sealed with a pigmented or embossed topcoat for uniform visual consistency. Brands can distinguish full-grain by its visible hair follicles, rapid moisture absorption on aniline finishes, and organic patina development, whereas top-grain displays an even, water-repellent surface with slightly lower breathability.",
    statisticalProof: [
      {
        metric: "> 22 N/mm²",
        label: "Full-Grain Tensile Strength",
        context: "Tested per ISO 3376; retains 30–35% higher fiber tear resistance than split hides.",
      },
      {
        metric: "15–25+ Years",
        label: "Consumer Lifespan",
        context: "Full-grain develops a protective burnished patina without surface delamination.",
      },
      {
        metric: "Top 12–15%",
        label: "Raw Hide Selection Yield",
        context: "Only blemish-free Grade-A hides qualify for unbuffed full-grain aniline production.",
      },
    ],
    bulletPoints: [
      {
        title: "Surface Pore Inspection (10x Loupe Test)",
        detail:
          "Full-grain hides reveal irregular, organic hair pore clusters under 10x magnification; corrected top-grain hides exhibit a uniform mechanical grain plate or cross-hatch Saffiano pattern.",
      },
      {
        title: "Cross-Section Fiber Density",
        detail:
          "In a clean cut edge, full-grain leather displays a tight, non-fraying grain junction at the top 0.4mm, whereas split or genuine leather shows loose, fibrous suede strands throughout.",
      },
      {
        title: "Water Drop & Patina Reaction",
        detail:
          "Semi-aniline and vegetable-tanned full-grain hides absorb a tiny water droplet within 5–10 seconds (darkening temporarily), while pigmented top-grain beads water on the surface.",
      },
      {
        title: "Strategic Brand Application",
        detail:
          "Specify full-grain leather for heritage satchels, bridle belts, executive briefcases, and luxury jackets; specify top-grain (Saffiano or pebbled) for high-wear structured commuter totes and travel accessories requiring scratch and stain resistance.",
      },
    ],
  },
  {
    id: "sustainable-tanning-standards",
    number: "02",
    category: "ESG & Tannery Audits",
    questionHeading: "What Are Sustainable Tanning Standards?",
    directAnswer:
      "Sustainable tanning standards are third-party audited environmental, chemical, and traceability protocols—led globally by the Leather Working Group (LWG), ISO 14001, and ZDHC (Zero Discharge of Hazardous Chemicals)—that govern water consumption, effluent treatment, energy use, and raw hide origin. To qualify as sustainably tanned, a tannery must operate closed-loop chromium recycling or chrome-free vegetable/synthetic tanning, maintain 100% slaughterhouse traceability with zero deforestation links, and pass independent laboratory screening for restricted substances. Unicon Leather sources 100% of its export hides from LWG Gold and Silver-rated partner tanneries.",
    statisticalProof: [
      {
        metric: "85+ / 100",
        label: "LWG Gold Audit Threshold",
        context: "Requires minimum 85% score across traceability, water, energy, and waste management.",
      },
      {
        metric: "38–50% Less",
        label: "Freshwater Consumption",
        context: "Achieved via LWG-audited closed-loop drum recycling vs. conventional tanneries.",
      },
      {
        metric: "< 3.0 ppm",
        label: "Chromium VI Safety Limit",
        context: "Strict ISO 17075-1 threshold mandated by EU REACH Annex XVII Entry 47.",
      },
    ],
    bulletPoints: [
      {
        title: "Leather Working Group (LWG) Gold & Silver Ratings",
        detail:
          "Audits tanneries across 170+ environmental data points including effluent treatment plant (ETP) biological oxygen demand (BOD), solid waste repurposing, and restricted substance lists (RSL).",
      },
      {
        title: "100% Food-Industry Byproduct Traceability",
        detail:
          "All bovine, calf, goat, and lamb hides used by Unicon Leather are ethical byproducts of the regulated food industry, accompanied by veterinary health certificates and zero link to Amazonian deforestation.",
      },
      {
        title: "Chrome-Free (FOC) & Vegetable Tanning Options",
        detail:
          "Brands targeting eco-conscious European and North American retail shelves can specify 100% biodegradable vegetable-tanned hides (using mimosa, quebracho, and chestnut bark tannins) or wet-white glutaraldehyde/zeolite chrome-free leathers.",
      },
      {
        title: "Water-Based Italian Edge Coatings & Eco-Adhesives",
        detail:
          "We utilize low-VOC water-based Fenice Italian edge paints and solvent-free latex adhesives to eliminate toxic off-gassing in finished retail goods.",
      },
    ],
  },
  {
    id: "vegetable-vs-chrome-tanning",
    number: "03",
    category: "Tanning Chemistry",
    questionHeading: "How Does Vegetable-Tanned Leather Compare to Chrome-Tanned Leather for B2B Production?",
    directAnswer:
      "Vegetable-tanned leather is cured over 30–45 days in wooden vats using natural polyphenol tannins extracted from tree bark, producing a firm, architectural hide that molds to shape and develops a rich amber patina. Chrome-tanned (and modern wet-white chrome-free) leather is drum-tanned in 24–48 hours using trivalent chromium salts or organic syntans, yielding a lightweight, supple, colorfast hide with superior heat and water resistance. Luxury brands choose vegetable-tanned leather for structured briefcases, belts, and saddlery, while choosing drum-dyed chrome/wet-white nappa for soft handbags, garments, and vibrant seasonal colorways.",
    statisticalProof: [
      {
        metric: "30–45 Days",
        label: "Veg-Tan Pit Curing Cycle",
        context: "Slow organic tannin penetration creates dense 1.4mm–4.0mm structural firmness.",
      },
      {
        metric: "24–48 Hours",
        label: "Drum-Dyed Nappa Cycle",
        context: "Enables rapid Pantone color matching and soft 0.6mm–1.2mm garment/bag drape.",
      },
      {
        metric: "Grade 4–5",
        label: "Color Rub Fastness (ISO 11640)",
        context: "Drum-dyed nappa and sealed veg-tan pass 500+ dry and 250+ wet Veslic rub cycles.",
      },
    ],
    bulletPoints: [
      {
        title: "Structural Temper & Edge Burnishing (Veg-Tan)",
        detail:
          "Vegetable-tanned cowhide can be raw-edge burnished with beeswax and carnauba to a glass-like sheen without synthetic edge paint, ideal for heritage belts, satchels, and molded cardholders.",
      },
      {
        title: "Drape, Elasticity & Weight Reduction (Drum-Dyed Nappa)",
        detail:
          "Chrome and chrome-free drum-dyed calfskin or lambskin weighs 15–20% less per square foot and recovers instantly from creasing—essential for leather jackets, hobo bags, and quilted crossbodies.",
      },
      {
        title: "Combination / Retanned (Chromexcel-Style) Hides",
        detail:
          "Combines a chrome-tanned base for tensile softness with a secondary vegetable retannage and hot-stuffed paraffin waxes for pull-up character and rugged outdoor durability.",
      },
    ],
  },
  {
    id: "leather-thickness-gauge-chart",
    number: "04",
    category: "Engineering & Skiving",
    questionHeading: "What Leather Thickness (Millimeter & Ounce Gauge) Should Brands Specify by Product Category?",
    directAnswer:
      "Leather thickness is measured worldwide in millimeters (mm) or ounces (where 1 oz equals 1/64 inch or 0.4mm), and selecting the correct gauge determines a product's weight, structural integrity, and stitch durability. Garment leather jackets require ultra-supple 0.6mm–0.9mm (1.5–2.25 oz) lambskin or 1.0mm–1.2mm cowhide; luxury handbags require 1.2mm–1.6mm (3–4 oz) calfskin; wallets require precision-skived 0.5mm–0.9mm interior pockets; and bridle belts require heavy 3.2mm–4.0mm (8–10 oz) full-grain bends. Unicon Leather utilizes precision German Fortuna band-knife splitting and edge skiving to hold tolerances within ±0.1mm.",
    statisticalProof: [
      {
        metric: "0.4 mm (1 oz)",
        label: "Minimum Edge-Skive Tolerance",
        context: "Precision German band-knife skiving prevents bulky seams on turned wallet pockets.",
      },
      {
        metric: "0.6–0.9 mm",
        label: "Outerwear Lambskin Gauge",
        context: "Optimal weight-to-tear ratio for tailored leather jackets and blazers.",
      },
      {
        metric: "3.2–4.0 mm",
        label: "Single-Bend Bridle Belt Gauge",
        context: "Zero-stretch full-grain shoulder/bend cut rated for >40 kg buckle pull load.",
      },
    ],
    bulletPoints: [
      {
        title: "Custom Leather Jackets & Outerwear (0.6mm – 1.2mm / 1.5–3.0 oz)",
        detail:
          "0.6–0.8mm drum-dyed sheep/lambskin nappa for luxury fashion jackets and trench coats; 1.0–1.2mm full-grain cowhide or buffalo for motorcycle and heritage aviation jackets.",
      },
      {
        title: "Luxury Handbags, Totes & Briefcases (1.2mm – 1.8mm / 3.0–4.5 oz)",
        detail:
          "1.2–1.4mm calf nappa or Saffiano with Salpa (bonded leather) or Texon reinforcement for structured handbags; 1.6–1.8mm vegetable-tanned cowhide for unlined totes and briefcases.",
      },
      {
        title: "Travel Duffels & Weekender Bags (1.6mm – 2.2mm / 4.0–5.5 oz)",
        detail:
          "Heavy-duty Crazy Horse pull-up or oil-tanned bovine leather paired with 2.5mm bridle leather handle tabs to withstand 25+ kg carry loads.",
      },
      {
        title: "Small Leather Goods & RFID Wallets (0.5mm – 1.2mm / 1.25–3.0 oz)",
        detail:
          "1.0–1.2mm exterior shell paired with 0.5mm–0.6mm band-knife skived card-slot interiors and 0.4mm feathered folded edges to keep bifold profiles under 11mm total thickness.",
      },
    ],
  },
  {
    id: "chemical-compliance-reach-prop65",
    number: "05",
    category: "Global Import Compliance",
    questionHeading: "What Chemical Safety & Import Compliance Certifications Are Required for USA & EU Markets?",
    directAnswer:
      "Importing leather goods into the European Union, United Kingdom, and United States requires documented laboratory compliance with EU REACH Annex XVII (Regulation EC 1907/2006), US CPSIA, and California Proposition 65. These laws strictly prohibit hexavalent chromium (Cr VI ≥ 3 ppm), carcinogenic Azo dyes (≥ 30 ppm), excessive lead in surface coatings or brass hardware (≥ 90 ppm), cadmium (≥ 75 ppm), and nickel release on skin-contact metal fittings. Unicon Leather provides batch-specific SGS, Intertek, or Eurofins chemical test reports alongside Certificates of Origin and HS Chapter 4202/4203 customs documentation.",
    statisticalProof: [
      {
        metric: "< 90 ppm",
        label: "Total Lead Limit (Prop 65 / CPSIA)",
        context: "Applies to all leather finishes, edge lacquers, zippers, and solid brass hardware.",
      },
      {
        metric: "< 30 ppm",
        label: "Azo-Free Dye Threshold",
        context: "Tested per ISO 17234-1 across all 24 restricted aromatic amines under EU REACH.",
      },
      {
        metric: "< 0.5 µg/cm²/wk",
        label: "Nickel Release Limit (EN 1811)",
        context: "Mandatory for belt buckles, jacket snaps, and handbag clasps in EU/UK retail.",
      },
    ],
    bulletPoints: [
      {
        title: "European Union & UK: REACH Annex XVII Verification",
        detail:
          "Covers Entry 47 (Chromium VI < 3 mg/kg), Entry 43 (Azo colorants < 30 mg/kg), Entry 27 (Nickel release), Entry 51/52 (Phthalates < 0.1%), and POPs (Short-Chain Chlorinated Paraffins free).",
      },
      {
        title: "United States & Canada: California Prop 65, CPSIA & CBSA",
        detail:
          "Full third-party lab verification for lead-free and phthalate-free leather coatings and hardware, preventing Prop 65 warning label mandates for California retail and Amazon FBA distribution.",
      },
      {
        title: "Australia & Japan Duty-Free Preferential Trade",
        detail:
          "As a registered Indian export house, our shipments qualify for 0% preferential import tariff into Australia (Ind-Aus ECTA) and UAE (CEPA), accompanied by official Certificates of Origin.",
      },
    ],
  },
  {
    id: "craftsmanship-hardware-stitching",
    number: "06",
    category: "Atelier Construction Benchmarks",
    questionHeading: "How Should Brands Audit Leather Craftsmanship, Stitching, Edge Paint & Hardware?",
    directAnswer:
      "True luxury leather craftsmanship is measured by four engineering parameters: stitch density (stitches per inch or SPI), edge-paint thermal resilience, reinforcement architecture, and hardware corrosion resistance. High-end leather goods utilize bonded nylon or braided polyester thread (Coats Nylbond / Gütermann) stitched at 6–8 SPI for bags and 9–11 SPI for wallets, paired with 3–4 hand-sanded coats of Italian edge paint and solid brass or PVD-plated zinc alloy hardware. Unicon Leather subjects all custom hardware to a 72-hour ASTM B117 neutral salt-spray test and a 25 kg dynamic strap-pull test prior to bulk assembly.",
    statisticalProof: [
      {
        metric: "72+ Hours",
        label: "Salt-Spray Corrosion Resistance",
        context: "ASTM B117 testing on PVD vacuum-plated solid brass and stainless steel fittings.",
      },
      {
        metric: "6–10 SPI",
        label: "Precision Stitch Density",
        context: "6–8 SPI on structured bags; 9–10 SPI on fine wallets using Coats bonded thread.",
      },
      {
        metric: "4 Coats",
        label: "Hand-Sanded Italian Edge Paint",
        context: "Heat-creased and flex-tested to 10,000 cycles at -10°C to +45°C without cracking.",
      },
    ],
    bulletPoints: [
      {
        title: "YKK Excella® & Solid Brass Custom Hardware",
        detail:
          "Dual-polished YKK Excella or Riri metal zippers alongside custom 3D CNC-moulded solid brass buckles, dog hooks, and magnetic locks in 24k Gold, Palladium, Brushed Antique, or Gunmetal PVD finishes.",
      },
      {
        title: "4-Stage Italian Edge Lacquer & Heat Creasing",
        detail:
          "Raw cut edges are beveled, primed with base filler, heat-ironed, hand-sanded with 600-grit abrasive, and sealed with three topcoats of flexible Fenice Italian edge paint.",
      },
      {
        title: "Internal Reinforcement & Shape Retention Matrix",
        detail:
          "Strategic lamination of Italian Salpa (regenerated leather fiber), non-woven Bontex, high-density EVA foam, and tear-resistant Velodon tape along zipper lines and handle anchors.",
      },
    ],
  },
  {
    id: "moq-lead-times-costing",
    number: "07",
    category: "Commercial Sourcing Economics",
    questionHeading: "What Are Standard B2B Minimum Order Quantities (MOQs), Lead Times & Cost Drivers?",
    directAnswer:
      "In B2B contract leather manufacturing, Minimum Order Quantities (MOQs) are governed by tannery drum-dyeing batch minimums (typically 300–500 sq. ft. per colorway) and hardware die-casting setups. Unicon Leather offers industry-leading boutique flexibility starting at 50–100 pieces per style for custom leather jackets, 100 pieces per style for leather handbags and travel bags, and 150–200 pieces for small leather goods and belts. Physical counter-samples are delivered globally via DHL Express in 7–14 business days, while bulk production is completed in 25–45 business days upon Golden Sample sign-off.",
    statisticalProof: [
      {
        metric: "50–100 Pcs",
        label: "Starting MOQ Per Style",
        context: "Supports 2 colorways per style (50 pcs/color) using LWG partner tannery hides.",
      },
      {
        metric: "7–14 Days",
        label: "Express Prototype Turnaround",
        context: "CAD pattern drafting, leather cutting, and DHL air dispatch to buyer studio.",
      },
      {
        metric: "55–65%",
        label: "Raw Leather Share of BOM Cost",
        context: "Hide grade and cutting yield efficiency (15–18% natural waste factor) drive FOB price.",
      },
    ],
    bulletPoints: [
      {
        title: "Transparent Bill of Materials (BOM) Costing",
        detail:
          "Every FOB/DDP quotation breaks down net leather consumption (sq. ft. per unit + cutting wastage allowance), lining fabric, reinforcement, hardware unit costs, labor minutes, and packaging.",
      },
      {
        title: "Custom Hardware Mould Amortization",
        detail:
          "Bespoke 3D brass or zinc-alloy logo moulds cost $150–$350 one-time setup (completed in 7 days) and are refundable/amortized on orders exceeding 500 units, with 100% exclusive mould custody.",
      },
      {
        title: "Turnkey FOB, CIF & DDP Global Logistics",
        detail:
          "Choose Priority Air Freight (3–5 days door-to-door via DHL/FedEx) for urgent seasonal drops or Ocean LCL/FCL container shipping (22–35 days) with full DDP customs clearance.",
      },
    ],
  },
  {
    id: "aql-25-quality-control",
    number: "08",
    category: "Quality Assurance & Inspection",
    questionHeading: "How Does AQL 2.5 Quality Control Prevent Defective Bulk Leather Shipments?",
    directAnswer:
      "Acceptable Quality Limit (AQL) 2.5—defined under international standard ISO 2859-1 (ANSI/ASQ Z1.4)—is the statistical inspection protocol used by luxury fashion houses to guarantee batch consistency before shipment release. Under General Inspection Level II (AQL 0.0 Critical, 2.5 Major, 4.0 Minor), random cartons are audited across hide grain matching, stitch tension, edge-paint adhesion, hardware plating, barcode accuracy, and moisture content (<14%). If defective units exceed the statistical threshold, 100% of the batch undergoes re-inspection and rectification at the factory's expense prior to dispatch.",
    statisticalProof: [
      {
        metric: "0.0% Critical",
        label: "Zero Tolerance for Safety Defects",
        context: "100% metal-detector scanning for broken needle fragments and sharp hardware burrs.",
      },
      {
        metric: "AQL 2.5 / 4.0",
        label: "Major / Minor Defect Standard",
        context: "ISO 2859-1 Level II audit accompanied by a 40+ photo pre-shipment QC dossier.",
      },
      {
        metric: "< 14% RH",
        label: "In-Carton Moisture Control",
        context: "Digital hygrometer verification + DMF-free silica gel packets prevent transit mold.",
      },
    ],
    bulletPoints: [
      {
        title: "Stage 1: Raw Hide Inspection on Light Tables",
        detail:
          "Every hide is graded under 1,000-lux daylight lamps to mark natural tick bites, veins, or growth lines so clicker dies cut primary exterior panels strictly from Grade-A prime bend zones.",
      },
      {
        title: "Stage 2: In-Line Assembly & Needle-Detection Audit",
        detail:
          "Roving QC engineers inspect skiving thickness, glue margin cleanliness, and stitch back-tacking at every workstation, followed by conveyor metal detection.",
      },
      {
        title: "Stage 3: Pre-Shipment AQL 2.5 Report & Third-Party Access",
        detail:
          "Buyers receive a comprehensive PDF inspection report with high-resolution macro photography and carton drop-test results—or may appoint SGS, QIMA, or Bureau Veritas for on-site inspection.",
      },
    ],
  },
];

const LEATHER_COMPARISON_ROWS = [
  {
    tier: "Full-Grain Leather",
    hideLayer: "100% Unbuffed Top Epidermis & Corium",
    tensileStrength: "> 22 N/mm² (Highest)",
    breathabilityPatina: "High breathability; develops rich organic patina",
    longevity: "15–25+ Years",
    recommendedUse: "Luxury handbags, executive briefcases, bridle belts, heritage jackets",
  },
  {
    tier: "Top-Grain Leather (Corrected / Embossed)",
    hideLayer: "Upper hide with 0.1–0.3mm surface lightly buffed & sealed",
    tensileStrength: "18–22 N/mm² (High)",
    breathabilityPatina: "Moderate breathability; stain & water resistant",
    longevity: "10–15 Years",
    recommendedUse: "Structured Saffiano totes, pebbled commuter bags, travel accessories",
  },
  {
    tier: "Genuine / Split Suede Leather",
    hideLayer: "Lower corium layer remaining after top grain is split off",
    tensileStrength: "10–14 N/mm² (Moderate)",
    breathabilityPatina: "Napped velvet texture; requires anti-crocking seal",
    longevity: "5–8 Years",
    recommendedUse: "Luxury bag interior linings, suede accent panels, dust pouches",
  },
  {
    tier: "Bonded Leather (Salpa / Reconstituted)",
    hideLayer: "Shredded leather fibers bonded with polyurethane latex (10–20% leather)",
    tensileStrength: "< 6 N/mm² (Low — Structural Filler Only)",
    breathabilityPatina: "Non-breathable; never used by Unicon for exterior panels",
    longevity: "2–4 Years (as exterior)",
    recommendedUse: "Used strictly as internal structural reinforcement (Italian Salpa)",
  },
];

export default function LeatherQualitySourcingGuidePage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.uniconleather.com" },
    {
      name: "The Ultimate Leather Quality & Sourcing Guide for Brands",
      url: "https://www.uniconleather.com/leather-quality-sourcing-guide",
    },
  ]);

  const faqSchema = generateFaqSchema(
    GUIDE_SECTIONS.map((sec) => ({
      question: sec.questionHeading,
      answer: sec.directAnswer,
    }))
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://www.uniconleather.com/leather-quality-sourcing-guide#article",
    headline: "The Ultimate Leather Quality & Sourcing Guide for Brands",
    description:
      "Comprehensive B2B leather engineering and sourcing guide answering how to distinguish Full-Grain from Top-Grain leather, sustainable LWG tanning standards, millimeter thickness gauges, EU REACH/Prop 65 compliance, and OEM manufacturing MOQs.",
    author: {
      "@type": "Organization",
      name: "UNICON LEATHER",
      url: "https://www.uniconleather.com",
    },
    publisher: {
      "@id": "https://www.uniconleather.com/#organization",
    },
    mainEntityOfPage: "https://www.uniconleather.com/leather-quality-sourcing-guide",
    image: "https://www.uniconleather.com/images/craftsmanship-hero.jpg",
    proficiencyLevel: "Expert",
    about: [
      "Full-Grain vs Top-Grain Leather",
      "Leather Working Group (LWG) Sustainable Tanning Standards",
      "Vegetable-Tanned vs Chrome-Tanned Leather",
      "B2B Leather Goods Manufacturing Specifications",
      "EU REACH Annex XVII & California Proposition 65 Leather Compliance",
      "ISO 2859-1 AQL 2.5 Quality Control",
    ],
  };

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={articleSchema} />

      <div className="w-full bg-white pb-28">
        {/* 1. HERO SECTION */}
        <section className="w-full !mt-0 bg-[#FAF8F5] border-b border-charcoal/10">
          <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-10 pb-16 sm:pb-22">
            <div className="mb-5">
              <Breadcrumbs
                items={[
                  {
                    label: "The Ultimate Leather Quality & Sourcing Guide for Brands",
                    href: "/leather-quality-sourcing-guide",
                  },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5 flex-wrap">
                  <Badge variant="cognac" size="sm">
                    <BookOpen className="w-3.5 h-3.5 mr-1.5 inline" /> B2B Technical Sourcing Manual · 2026 Edition
                  </Badge>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500">
                    ISO · LWG · EU REACH · AQL 2.5 Verified
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.1]">
                  The Ultimate Leather Quality &amp; Sourcing Guide for Brands
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 font-light leading-relaxed max-w-3xl">
                  An Answer-First technical handbook engineered for fashion brand founders, creative directors, and B2B procurement executives. Every section below answers a critical sourcing query in the first 2–3 sentences, backed by laboratory ISO standards, statistical proof, and actionable manufacturing specifications.
                </p>

                {/* Prominent CTA Buttons Linking Back to https://www.uniconleather.com/ */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Button
                    href="https://www.uniconleather.com/#inquiry"
                    variant="primary"
                    size="lg"
                    className="shadow-sm"
                  >
                    Submit Custom Order Inquiry <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    href="https://www.uniconleather.com/"
                    variant="outline"
                    size="lg"
                    className="bg-white border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white"
                  >
                    Visit Unicon Leather Homepage
                  </Button>
                  <Button
                    href="/cost-calculator"
                    variant="outline"
                    size="lg"
                    className="bg-white border-cognac text-cognac hover:bg-cognac hover:text-white"
                  >
                    B2B FOB Cost Calculator
                  </Button>
                  <Button
                    href="/leather-sourcing-india-vs-china-vietnam-italy"
                    variant="ghost"
                    size="lg"
                    className="text-cognac hover:text-charcoal"
                  >
                    India vs. China, Vietnam &amp; Italy →
                  </Button>
                </div>
              </div>

              {/* Quick Jump Navigation Card */}
              <nav
                aria-label="Guide Table of Contents"
                className="lg:col-span-4 bg-white p-6 sm:p-8 border border-charcoal/12 shadow-xs space-y-4"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cognac font-bold block">
                  Direct Query Index (8 Chapters)
                </span>
                <ol className="space-y-2.5 text-xs text-charcoal-700">
                  {GUIDE_SECTIONS.map((sec) => (
                    <li key={sec.id} className="pb-2 border-b border-charcoal/8 last:border-0 last:pb-0">
                      <a
                        href={`#${sec.id}`}
                        className="hover:text-cognac transition-colors flex items-start gap-2.5 group"
                      >
                        <span className="font-mono text-[10.5px] text-cognac font-bold mt-0.5 shrink-0">
                          {sec.number}
                        </span>
                        <span className="font-medium text-charcoal group-hover:text-cognac transition-colors leading-snug">
                          {sec.questionHeading}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* 2. QUICK REFERENCE: 4-TIER LEATHER GRADE COMPARISON TABLE */}
        <section className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-16 sm:pt-24">
          <div className="bg-white border border-charcoal/15 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                  At-A-Glance Material Matrix
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal tracking-tight">
                  How Do the 4 Commercial Leather Grades Compare in Strength &amp; Longevity?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-3xl leading-relaxed">
                  Before issuing a Bill of Materials (BOM) to a factory, sourcing teams must specify the exact anatomical layer of the hide. Below is the ISO tensile strength and longevity comparison across the four commercial tiers.
                </p>
              </div>
              <Button href="https://www.uniconleather.com/catalogue-request" variant="outline" size="sm" className="border-charcoal/25 shrink-0">
                Request Physical Swatch Card <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            <div className="w-full overflow-x-auto border border-charcoal/12">
              <table className="w-full text-left border-collapse min-w-[860px]">
                <thead>
                  <tr className="bg-charcoal text-white text-[11px] font-mono uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-5 border-r border-white/15">Leather Grade Tier</th>
                    <th scope="col" className="py-3.5 px-5 border-r border-white/15">Anatomical Hide Layer</th>
                    <th scope="col" className="py-3.5 px-5 border-r border-white/15">ISO 3376 Tensile Strength</th>
                    <th scope="col" className="py-3.5 px-5 border-r border-white/15">Patina &amp; Surface Behavior</th>
                    <th scope="col" className="py-3.5 px-5 border-r border-white/15">Service Lifespan</th>
                    <th scope="col" className="py-3.5 px-5">Recommended Brand Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-xs text-charcoal-700">
                  {LEATHER_COMPARISON_ROWS.map((row, idx) => (
                    <tr key={row.tier} className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]/60"}>
                      <th scope="row" className="py-3.5 px-5 font-serif text-sm font-semibold text-charcoal border-r border-charcoal/10">
                        {row.tier}
                      </th>
                      <td className="py-3.5 px-5 border-r border-charcoal/10 font-light">{row.hideLayer}</td>
                      <td className="py-3.5 px-5 border-r border-charcoal/10 font-mono font-semibold text-cognac">{row.tensileStrength}</td>
                      <td className="py-3.5 px-5 border-r border-charcoal/10 font-light">{row.breathabilityPatina}</td>
                      <td className="py-3.5 px-5 border-r border-charcoal/10 font-mono font-medium text-charcoal">{row.longevity}</td>
                      <td className="py-3.5 px-5 font-light">{row.recommendedUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. THE 8 QUERY-SHAPED CHAPTERS (ANSWER-FIRST + STATISTICAL PROOF + BULLET POINTS) */}
        <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-16 sm:pt-24 space-y-16 sm:space-y-24">
          {GUIDE_SECTIONS.map((section, index) => (
            <React.Fragment key={section.id}>
              <article
                id={section.id}
                className="scroll-mt-28 bg-white border border-charcoal/12 p-6 sm:p-10 lg:p-12 shadow-xs space-y-8"
              >
                {/* Chapter Header */}
                <div className="space-y-3 border-b border-charcoal/10 pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cognac font-bold">
                      Chapter {section.number} // {section.category}
                    </span>
                    <span className="text-[11px] font-mono text-charcoal-400">
                      Unicon Leather Engineering Standard
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                    {section.questionHeading}
                  </h2>
                </div>

                {/* Concise 2-3 Sentence Answer-First Block */}
                <div className="bg-[#FAF8F5] border-l-4 border-cognac p-5 sm:p-7 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cognac font-bold block">
                    Direct Answer (Executive Summary)
                  </span>
                  <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
                    {section.directAnswer}
                  </p>
                </div>

                {/* Statistical Proof Row */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                    Statistical Proof &amp; Laboratory Benchmarks:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {section.statisticalProof.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white border border-charcoal/12 p-5 space-y-1.5 shadow-2xs"
                      >
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-cognac block">
                          {stat.metric}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-charcoal font-semibold block">
                          {stat.label}
                        </span>
                        <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                          {stat.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actionable Bullet Points */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                    Key Procurement &amp; Technical Specifications:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.bulletPoints.map((bp) => (
                      <li
                        key={bp.title}
                        className="bg-[#FAF8F5]/60 border border-charcoal/8 p-5 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                        <div className="space-y-1 text-xs sm:text-sm">
                          <strong className="font-serif text-charcoal font-semibold block">
                            {bp.title}
                          </strong>
                          <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                            {bp.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chapter Footer CTA linking back to https://www.uniconleather.com/ */}
                <div className="pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-charcoal-600 font-light">
                    Ready to apply these specifications to your brand&apos;s next leather collection?
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href="https://www.uniconleather.com/#inquiry"
                      variant="primary"
                      size="sm"
                    >
                      Inquire for Custom Order <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                    <Link
                      href="https://www.uniconleather.com/"
                      className="text-xs font-mono font-medium text-cognac hover:text-charcoal underline underline-offset-4"
                    >
                      Explore Unicon Leather (uniconleather.com) →
                    </Link>
                  </div>
                </div>
              </article>

              {/* Mid-Guide Conversion Banner after Chapter 04 */}
              {index === 3 && (
                <div className="bg-charcoal text-white p-8 sm:p-12 border border-charcoal flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="space-y-3 max-w-2xl">
                    <span className="text-cognac-light uppercase tracking-[0.2em] text-xs font-mono font-semibold block">
                      Direct Factory Sampling Desk · Bantala &amp; Noida
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                      Evaluate Our Full-Grain &amp; Vegetable-Tanned Leathers Firsthand
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      Order a physical Unicon Leather Master Swatch Book featuring 25+ LWG Gold/Silver hides (Tuscan Veg-Tan, Calf Nappa, Lambskin Outerwear Nappa, Saffiano, and Crazy Horse Pull-Up) or submit your Tech Pack for a 7–14 day custom prototype.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                    <Button
                      href="https://www.uniconleather.com/#inquiry"
                      variant="primary"
                      size="lg"
                    >
                      Start Custom Order at UniconLeather.com <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      href="/catalogue-request"
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white hover:text-charcoal"
                    >
                      Order Physical Swatch Kit
                    </Button>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 4. BOTTOM DIRECT CUSTOM ORDER INQUIRY SECTION */}
        <section
          id="inquiry"
          className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-20 sm:pt-28"
        >
          <div className="bg-[#FAF8F5] border border-charcoal/15 p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-cognac uppercase tracking-[0.2em] text-xs font-mono font-medium block">
                  Custom OEM/ODM Order Desk
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight">
                  How Can Brands Request a Custom Leather Order or Swatch Kit?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
                  Submit your tech pack, target leather grade, or estimated order volume below, or return directly to{" "}
                  <a
                    href="https://www.uniconleather.com/"
                    className="text-cognac font-medium underline underline-offset-4 hover:text-charcoal"
                  >
                    https://www.uniconleather.com/
                  </a>
                  . Our senior export engineering team returns a comprehensive Bill of Materials (BOM), leather yield breakdown, and FOB/DDP quote within 12–24 business hours.
                </p>

                <div className="bg-white p-6 border border-charcoal/10 space-y-3">
                  <h3 className="font-serif font-medium text-charcoal text-base">
                    Included With Every Custom Order Inquiry:
                  </h3>
                  <ul className="text-xs text-charcoal-600 space-y-2.5 font-light">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                      Signed bilateral Non-Disclosure Agreement (NDA)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                      LWG tannery certificate &amp; EU REACH / Prop 65 test documentation
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                      Tiered pricing for 50–100, 300, and 1,000+ piece production runs
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    href="https://www.uniconleather.com/"
                    variant="outline"
                    size="md"
                    className="bg-white border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white"
                  >
                    ← Back to UniconLeather.com
                  </Button>
                  <a
                    href={COMPANY_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cognac hover:text-charcoal underline underline-offset-4 px-2 py-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat with Master Patternmaker
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-charcoal/10 shadow-xs">
                <BulkInquiryForm inquiryType="private-label" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
