export interface KeywordCluster {
  category: string;
  description: string;
  targetUrl: string;
  keywords: string[];
}

export const SEO_KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    category: "OEM & Private Label Leather Manufacturing",
    description: "Custom cut-and-sew contract manufacturing, CAD pattern grading, and private-label brand development from India.",
    targetUrl: "/private-label",
    keywords: [
      "private label leather bag manufacturer India",
      "OEM leather goods factory India",
      "custom leather bag manufacturer low MOQ",
      "contract leather manufacturing India",
      "white label leather handbags supplier"
    ]
  },
  {
    category: "Leather Handbags & Structured Totes",
    description: "Full-grain, pebbled calfskin, and vegetable-tanned women's handbags, shoppers, and architectural day totes.",
    targetUrl: "/products/leather-handbags",
    keywords: [
      "leather handbag manufacturer India",
      "OEM leather tote bag factory",
      "wholesale full grain leather totes",
      "private label women's leather handbags",
      "custom structured leather satchel supplier"
    ]
  },
  {
    category: "Executive Laptop Bags & Briefcases",
    description: "Padded 15-inch and 16-inch executive leather briefcases, commuter backpacks, and messenger bags.",
    targetUrl: "/products/laptop-and-business-bags",
    keywords: [
      "leather laptop bag manufacturer India",
      "OEM leather briefcase supplier",
      "custom leather backpack factory wholesale",
      "executive leather messenger bag manufacturer",
      "B2B leather business bags exporter"
    ]
  },
  {
    category: "Travel Duffels & Weekender Holdalls",
    description: "Cabin-compliant full-grain pull-up leather weekender duffels, overnight bags, and travel accessories.",
    targetUrl: "/products/travel-bags",
    keywords: [
      "leather duffel bag manufacturer India",
      "private label leather weekender bag supplier",
      "wholesale leather travel bags India",
      "custom leather holdall factory",
      "heritage pull-up leather duffel exporter"
    ]
  },
  {
    category: "RFID Wallets & Small Leather Goods (SLG)",
    description: "Precision-skived 0.4mm turned-edge bifold wallets, cardholders, and passport folios with 13.56 MHz RFID shielding.",
    targetUrl: "/products/wallets-and-cardholders",
    keywords: [
      "leather wallet manufacturer India",
      "RFID leather wallet factory wholesale",
      "private label cardholder manufacturer",
      "small leather goods OEM supplier India",
      "custom leather passport holder manufacturer"
    ]
  },
  {
    category: "Full-Grain Bridle & Dress Leather Belts",
    description: "3.2–4.0mm full-grain vegetable-tanned bridle and feather-edge dress belts with solid brass hardware.",
    targetUrl: "/products/leather-belts",
    keywords: [
      "leather belt manufacturer India",
      "private label full grain leather belts",
      "OEM dress leather belt factory",
      "custom brass buckle leather belt supplier",
      "wholesale bridle leather belts India"
    ]
  },
  {
    category: "Custom Leather Jackets & Outerwear",
    description: "Drum-dyed lambskin nappa, goat suede, and cowhide outerwear with bespoke XS–4XL size grading.",
    targetUrl: "/products/leather-jackets",
    keywords: [
      "custom leather jacket manufacturer India",
      "private label lambskin jacket factory",
      "OEM leather outerwear exporter",
      "bespoke suede jacket manufacturer",
      "low MOQ leather jacket production"
    ]
  },
  {
    category: "Corporate & Hospitality Leather Gifting",
    description: "Custom debossed genuine leather executive gift sets, tech folios, desk valets, and luxury hospitality accessories.",
    targetUrl: "/leather-accessories-manufacturer-india",
    keywords: [
      "corporate leather gifts manufacturer India",
      "custom debossed leather laptop sleeves bulk",
      "executive leather wallet gift sets wholesale",
      "luxury hospitality leather desk accessories",
      "bespoke corporate leather travel folios"
    ]
  },
  {
    category: "USA & Canada B2B Export Corridor",
    description: "California Prop 65 compliant leather goods manufacturing with direct DHL/FedEx air and DDP sea freight to North America.",
    targetUrl: "/en-us",
    keywords: [
      "Indian leather goods supplier for US brands",
      "private label leather bags for US retailers",
      "Prop 65 compliant leather bag manufacturer",
      "import leather bags from India to USA",
      "leather goods manufacturer for Canadian brands"
    ]
  },
  {
    category: "UK & European Union REACH Export Corridor",
    description: "EU/UK REACH Annex XVII verified leather manufacturing (Azo-free, Cr VI < 3ppm, Nickel-free) for British and European brands.",
    targetUrl: "/en-gb",
    keywords: [
      "private label leather supplier for UK brands",
      "REACH compliant leather manufacturer India",
      "leather goods exporter to Europe",
      "vegetable tanned leather bag factory for EU",
      "LWG sourced leather manufacturer for UK"
    ]
  },
  {
    category: "Australia ECTA (0% Duty) & UAE CEPA Export",
    description: "Zero-duty preferential leather exports under the India-Australia ECTA and India-UAE CEPA trade agreements.",
    targetUrl: "/en-au",
    keywords: [
      "leather goods manufacturer for Australian brands",
      "duty free leather bags India to Australia ECTA",
      "private label leather supplier UAE Dubai",
      "luxury leather goods exporter to Middle East",
      "low MOQ leather bag manufacturer for Australia"
    ]
  },
  {
    category: "Traceable LWG Leathers & Quality Compliance",
    description: "Hides sourced from LWG-audited partner tanneries, paired with 4-stage AQL 2.5 pre-shipment inspections and SGS/Intertek testing.",
    targetUrl: "/compliance",
    keywords: [
      "leather from LWG partner tanneries India",
      "EU REACH Annex XVII tested leather goods",
      "AQL 2.5 inspected leather bag factory",
      "traceable vegetable tanned leather sourcing",
      "ethical leather goods manufacturer India"
    ]
  }
];

// Flat array of distinct, verified B2B leather manufacturing keywords
export const ALL_SEO_KEYWORDS: string[] = Array.from(
  new Set(SEO_KEYWORD_CLUSTERS.flatMap((cluster) => cluster.keywords))
);

export interface B2BKeywordCandidate {
  keyword: string;
  intent: string;
  rationale: string;
}

export const TOP_20_B2B_KEYWORDS: B2BKeywordCandidate[] = [
  { keyword: "leather goods manufacturer Kolkata", intent: "Direct Factory Sourcing", rationale: "Validates direct factory and atelier operations at Calcutta Leather Complex, Bantala, Kolkata." },
  { keyword: "leather bag manufacturer Noida", intent: "Corporate & Export Desk", rationale: "Connects international buyers and Delhi NCR sourcing agencies with our Noida export office." },
  { keyword: "private label leather bag manufacturer India", intent: "Commercial / White-Label", rationale: "Primary commercial query for fashion brands seeking custom hardware, debossing, and low MOQs." },
  { keyword: "Indian leather goods supplier for US brands", intent: "International Trade Flow", rationale: "Matches US brands seeking Prop 65 compliance, 50–100 pc MOQs, and FOB/DDP delivery." },
  { keyword: "private label leather supplier for UK brands", intent: "Commercial / UK Export", rationale: "Connects British fashion labels with UK REACH-tested, nickel-free private label production." },
  { keyword: "leather goods exporter to Europe", intent: "Commercial / European Union", rationale: "Captures German, French, Dutch & Nordic buyers requiring EU REACH Annex XVII compliance." },
  { keyword: "leather goods manufacturer for Australian brands", intent: "Preferential Trade / ECTA", rationale: "Leverages 0% customs duty on Indian leather goods under the India-Australia ECTA." },
  { keyword: "OEM leather bag manufacturer India", intent: "Transactional / Tech Pack", rationale: "Captures established brands with completed Tech Packs and Bills of Materials (BOM)." },
  { keyword: "leather handbag manufacturer India", intent: "Category / Women's Bags", rationale: "Targets womenswear and accessory labels sourcing full-grain and calf nappa handbags." },
  { keyword: "leather laptop bag manufacturer India", intent: "Category / Executive Bags", rationale: "Targets menswear, commuter, and corporate brands sourcing padded 15-inch and 16-inch briefcases." },
  { keyword: "leather wallet manufacturer India", intent: "Category / Small Leather Goods", rationale: "High-volume B2B search for 0.4mm skived, RFID-shielded bifold wallets and cardholders." },
  { keyword: "leather duffel bag manufacturer India", intent: "Category / Travel Goods", rationale: "Captures luggage and lifestyle brands sourcing pull-up and vegetable-tanned weekender bags." },
  { keyword: "leather belt manufacturer India", intent: "Category / Bridle & Dress Belts", rationale: "Matches apparel brands sourcing 3.5mm full-grain vegetable-tanned and dress leather belts." },
  { keyword: "custom leather jacket manufacturer India", intent: "Category / Leather Outerwear", rationale: "Targets fashion labels seeking lambskin nappa and goat suede outerwear at 50–100 pc MOQs." },
  { keyword: "corporate leather gifts manufacturer India", intent: "B2B Corporate Procurement", rationale: "Qualifies institutional buyers ordering custom debossed leather sleeves, folios, and wallet sets." },
  { keyword: "low MOQ leather bag manufacturer India", intent: "Commercial / Trial Order", rationale: "Matches our 50-piece stock-leather trial run and 100-piece custom drum-dyed MOQ tiers." },
  { keyword: "vegetable tanned leather bag manufacturer", intent: "Material / Heritage Craft", rationale: "Qualifies buyers seeking chrome-free mimosa and chestnut bark vegetable-tanned leather goods." },
  { keyword: "leather from LWG partner tanneries", intent: "Supply Chain Traceability", rationale: "Clarifies raw material traceability from Leather Working Group audited Indian tanneries." },
  { keyword: "REACH compliant leather manufacturer India", intent: "Chemical Safety Compliance", rationale: "Addresses European and UK buyer due diligence for Azo-free dyes and Chromium VI < 3 mg/kg." },
  { keyword: "full grain vs top grain leather for bag manufacturing", intent: "Technical Sourcing / GEO", rationale: "Captures early-stage B2B research and AI search citations for leather grade selection." }
];

export interface PriorityB2BKeywordTier {
  priority: string;
  categoryName: string;
  description: string;
  targetPages: string[];
  keywords: string[];
}

export const PRIORITY_B2B_KEYWORD_TIERS: PriorityB2BKeywordTier[] = [
  {
    priority: "Core: Indian manufacturing",
    categoryName: "Direct India Manufacturing (Kolkata & Noida)",
    description: "Cut-and-sew production at Calcutta Leather Complex (Kolkata) paired with international export merchandising in Noida (Delhi NCR).",
    targetPages: ["/about", "/craftsmanship", "/export"],
    keywords: [
      "leather goods manufacturer Kolkata",
      "leather bag manufacturer Noida",
      "leather exporters Kolkata India",
      "OEM leather goods factory India",
      "custom leather manufacturer India"
    ]
  },
  {
    priority: "Global: overseas buyers",
    categoryName: "International Brand & Export Corridors",
    description: "Dedicated export programs for USA (Prop 65), UK/EU (REACH Annex XVII), Australia (ECTA 0% Duty), Canada, and UAE (CEPA).",
    targetPages: ["/en-us", "/en-gb", "/en-au", "/export"],
    keywords: [
      "Indian leather goods supplier for US brands",
      "private label leather supplier for UK brands",
      "leather goods exporter to Europe",
      "duty free leather manufacturer for Australia ECTA",
      "leather goods exporter to UAE Dubai"
    ]
  },
  {
    priority: "Highest: OEM & private label",
    categoryName: "Private-Label & Tech-Pack OEM",
    description: "End-to-end prototype sampling (5–14 business days), custom hardware mold tooling, and private-label packaging.",
    targetPages: ["/private-label", "/custom-leather-goods-manufacturer", "/contact"],
    keywords: [
      "private label leather bag manufacturer India",
      "custom leather bag manufacturing from tech pack",
      "OEM leather handbag factory",
      "low MOQ leather bag manufacturer (50–100 pcs)",
      "white label leather accessories supplier"
    ]
  },
  {
    priority: "High: bags & briefcases",
    categoryName: "Handbags, Totes & Executive Briefcases",
    description: "Structured women's handbags, pull-up shopper totes, padded 16-inch laptop briefcases, and heritage backpacks.",
    targetPages: ["/products/leather-handbags", "/products/tote-bags", "/products/laptop-and-business-bags", "/products/backpacks"],
    keywords: [
      "leather handbag manufacturers India",
      "leather tote bag manufacturers India",
      "leather laptop bag manufacturers India",
      "leather backpack manufacturers India",
      "executive leather briefcase supplier"
    ]
  },
  {
    priority: "High: travel & weekender",
    categoryName: "Travel Duffels & Weekender Bags",
    description: "Heavy-duty 2.0mm pull-up and vegetable-tanned weekender duffels, cabin holdalls, and travel organizers.",
    targetPages: ["/products/travel-bags", "/products/artisan-travel-duffels"],
    keywords: [
      "leather duffle bag manufacturers India",
      "leather travel bag manufacturers India",
      "private label leather weekender bag",
      "custom leather overnight bag factory",
      "vegetable tanned travel duffel exporter"
    ]
  },
  {
    priority: "High: wallets, belts & SLGs",
    categoryName: "RFID Wallets, Cardholders & Bridle Belts",
    description: "Precision 0.4mm skived wallets with 13.56 MHz RFID shielding and 3.5mm full-grain bridle/dress leather belts.",
    targetPages: ["/products/wallets-and-cardholders", "/products/leather-belts", "/leather-wallet-manufacturer-india"],
    keywords: [
      "leather wallet manufacturers India",
      "RFID leather wallet factory wholesale",
      "small leather goods manufacturers India",
      "full grain leather belt manufacturer India",
      "leather passport holder manufacturer"
    ]
  },
  {
    priority: "Benchmark: materials & compliance",
    categoryName: "LWG Partner Tanneries & Chemical Compliance",
    description: "Traceable hides from LWG-audited partner tanneries, third-party SGS/Intertek REACH & Prop 65 testing, and AQL 2.5 QC.",
    targetPages: ["/compliance", "/sustainability", "/leather-quality-sourcing-guide"],
    keywords: [
      "leather from LWG-certified partner tanneries",
      "EU REACH Annex XVII compliant leather goods",
      "California Prop 65 tested leather bags",
      "vegetable tanned leather accessories India",
      "AQL 2.5 pre-shipment leather inspection"
    ]
  },
  {
    priority: "Conditional: corporate gifting",
    categoryName: "Executive & Hospitality Leather Gifting",
    description: "Custom debossed genuine leather laptop sleeves, wooden-boxed wallet trios, desk valets, and hotel leather accessories.",
    targetPages: ["/leather-accessories-manufacturer-india", "/products", "/contact"],
    keywords: [
      "corporate leather gift manufacturers India",
      "custom leather gift sets bulk",
      "debossed leather laptop sleeves wholesale",
      "luxury executive leather desk accessories"
    ]
  }
];
