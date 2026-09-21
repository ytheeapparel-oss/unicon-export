export interface KeywordCluster {
  category: string;
  description: string;
  keywords: string[];
}

export const SEO_KEYWORD_CLUSTERS: KeywordCluster[] = [
  {
    category: "Contract & OEM/ODM Manufacturing",
    description: "Custom contract manufacturing, private-label production, and export atelier services.",
    keywords: [
      "custom leather goods manufacturer",
      "private label leather goods manufacturer",
      "oem leather goods manufacturer",
      "contract leather goods manufacturing",
      "contract leather manufacturing",
      "custom leather products supplier",
      "bespoke leather accessories supplier",
      "leather goods exporter India",
      "wholesale leather products supplier",
      "certified leather manufacturer audit pass",
      "LWG certified leather factory",
      "Sedex audited leather manufacturer",
      "ISO certified leather goods factory",
      "low MOQ leather goods manufacturer",
      "small batch leather manufacturing",
      "leather goods factory Kolkata"
    ]
  },
  {
    category: "Bags, Totes, Duffels & Backpacks",
    description: "Wholesale bags, private-label tote collections, backpacks, and messenger satchels.",
    keywords: [
      "custom leather bags manufacturer",
      "private label leather bags manufacturer",
      "leather bags wholesale supplier",
      "bulk leather bags for retail",
      "private label leather tote bags",
      "leather tote bags bulk supplier",
      "minimalist leather tote bag",
      "full grain leather messenger bag",
      "bulk leather messenger bags exporter",
      "leather messenger bag factory",
      "leather duffle bag weekender",
      "leather duffle bags wholesale supplier",
      "custom leather duffle bag manufacturer",
      "vintage leather briefcase wholesale",
      "leather sling bag crossbody",
      "leather laptop backpack 15 inch"
    ]
  },
  {
    category: "Wallets, Cardholders & SLGs",
    description: "RFID-shielded wallets, luxury cardholders, and turned-edge small leather accessories.",
    keywords: [
      "leather wallet manufacturer",
      "leather wallets manufacturer supplier",
      "oem leather wallet factory",
      "oem leather wallet supplier",
      "rfid leather wallet supplier",
      "rfid blocking leather wallet",
      "leather wallets wholesale low moq",
      "slim leather bifold wallet",
      "minimalist leather cardholder",
      "oem leather cardholder factory",
      "custom leather card holder wholesale",
      "custom leather small goods manufacturer",
      "leather passport cover holder",
      "leather passport holders wholesale supplier",
      "leather key organizer pouch",
      "luxury leather travel wallet factory"
    ]
  },
  {
    category: "Belts, Apparel & Fashion Accessories",
    description: "Handcrafted bridle leather belts, artisan aprons, jackets, and corporate lifestyle gifts.",
    keywords: [
      "leather belt wholesale supplier",
      "full grain leather dress belt",
      "heavy duty bridle leather belt",
      "vegetable tanned leather belt factory",
      "custom brass buckle leather belts",
      "distressed leather jacket manufacturer",
      "classic sheepskin biker jacket",
      "leather apron for barbecue / woodworking",
      "custom leather keychains bulk",
      "artisan leather watch straps wholesale",
      "leather coaster sets corporate bulk",
      "leather luggage tags wholesale",
      "leather glasses case supplier",
      "leather tech organizer roll"
    ]
  },
  {
    category: "Corporate Gifting & Desk Accessories",
    description: "Custom debossed corporate merchandise, executive desk pads, tech sleeves, and bespoke gifting sets.",
    keywords: [
      "leather corporate gifts manufacturer",
      "genuine leather corporate gifts bulk",
      "corporate leather gifts supplier",
      "custom leather corporate gift sets",
      "bulk personalized leather products manufacturer",
      "leather desk mat large",
      "personalized leather valet tray",
      "leather journal notebook cover refillable",
      "leather mouse pad bulk",
      "leather tech sleeve manufacturer",
      "custom logo embossed leather gifts",
      "executive leather desk accessories supplier",
      "luxury leather conference folders",
      "leather certificate holders bulk",
      "custom leather promotional products",
      "premium executive leather gifting India"
    ]
  },
  {
    category: "Sustainable Leather & Global Compliance",
    description: "Traceable raw materials, eco-conscious tanning protocols, LWG certified supply, and alternative materials.",
    keywords: [
      "full grain leather goods",
      "top grain cowhide leather",
      "nappa leather goods factory",
      "bridle leather goods supplier",
      "suede and nubuck accessories",
      "vegetable tanned leather bag",
      "veg tan leather goods",
      "chrome-free tanned leather goods",
      "sustainable leather manufacturer",
      "REACH Annex XVII compliant leather goods",
      "California Proposition 65 compliant leather",
      "recycled leather goods manufacturer",
      "upcycled leather accessories",
      "plant-based leather alternatives apple cactus leather"
    ]
  },
  {
    category: "USA & North America Sourcing Hub",
    description: "High-intent queries from US and North American fashion brands, retailers, and buying houses.",
    keywords: [
      "leather goods manufacturer USA",
      "custom leather manufacturer USA",
      "private label leather bags USA",
      "leather goods manufacturer New York",
      "custom leather goods Los Angeles California",
      "bulk leather wallet supplier USA low MOQ",
      "full grain leather tote bag manufacturer wholesale",
      "California Prop 65 compliant leather goods factory",
      "leather goods exporter to USA DDP shipping",
      "OEM leather accessories supplier North America",
      "leather goods contract manufacturing Texas Florida",
      "luxury leather bags private label supplier US brands"
    ]
  },
  {
    category: "Europe & UK Atelier Sourcing Hub",
    description: "High-intent queries from UK and European luxury boutiques, fashion houses, and department stores.",
    keywords: [
      "leather goods manufacturer Europe",
      "leather goods manufacturer UK London",
      "custom leather bags manufacturer Germany France Italy",
      "REACH Annex XVII compliant leather goods manufacturer",
      "LWG Gold certified leather factory Europe export",
      "bespoke small leather goods factory wholesale Europe",
      "sustainable vegetable tanned leather manufacturer EU",
      "leather goods contract manufacturing Paris Milan",
      "luxury leather cardholder supplier UK Europe",
      "minimalist leather handbag supplier Scandinavia",
      "leather goods exporter India to UK and Europe",
      "OEM ODM leather accessories manufacturer Netherlands Spain"
    ]
  }
];

// Flat array of all distinct keywords for metadata, schemas, and sitemaps (120+ high-volume terms)
export const ALL_SEO_KEYWORDS: string[] = Array.from(
  new Set(SEO_KEYWORD_CLUSTERS.flatMap((cluster) => cluster.keywords))
);
