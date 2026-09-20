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
      "leather goods exporter",
      "wholesale leather products supplier",
      "certified leather manufacturer audit pass",
      "LWG certified leather factory",
      "Sedex audited leather manufacturer",
      "leather products HS code 4202",
      "leather products HS code 4203"
    ]
  },
  {
    category: "Bags, Duffels & Backpacks Sourcing",
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
      "vintage leather briefcase",
      "leather sling bag crossbody",
      "leather laptop backpack 15 inch",
      "oem leather backpacks factory",
      "crazy horse leather bag"
    ]
  },
  {
    category: "Wallets & Small Leather Goods (SLGs)",
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
      "leather tech organizer roll"
    ]
  },
  {
    category: "Belts, Apparel & Lifestyle Accessories",
    description: "Handcrafted bridle leather belts, artisan aprons, jackets, and corporate lifestyle gifts.",
    keywords: [
      "leather belt wholesale supplier",
      "full grain leather dress belt",
      "heavy duty bridle leather belt",
      "distressed leather jacket",
      "classic sheepskin biker jacket",
      "leather apron for barbecue / woodworking",
      "genuine leather corporate gifts bulk",
      "corporate leather gifts supplier",
      "bulk personalized leather products manufacturer",
      "leather desk mat large",
      "personalized leather valet tray",
      "leather journal notebook cover refillable",
      "leather mouse pad"
    ]
  },
  {
    category: "Leather Grades, Tanning & Sustainable Materials",
    description: "Traceable raw materials, eco-conscious tanning protocols, and alternative materials.",
    keywords: [
      "full grain leather",
      "top grain leather",
      "nappa leather goods",
      "bridle leather",
      "suede and nubuck accessories",
      "vegetable tanned leather bag",
      "veg tan leather goods",
      "chrome-free tanned leather goods",
      "sustainable leather manufacturer",
      "recycled leather goods",
      "upcycled leather accessories",
      "bio-based vegan leather",
      "plant-based leather alternatives apple cactus leather"
    ]
  }
];

// Flat array of all distinct keywords for metadata, schemas, and sitemaps
export const ALL_SEO_KEYWORDS: string[] = Array.from(
  new Set(SEO_KEYWORD_CLUSTERS.flatMap((cluster) => cluster.keywords))
);
