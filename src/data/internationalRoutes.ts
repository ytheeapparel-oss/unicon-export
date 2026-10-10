export interface InternationalMarketConfig {
  code: string;
  locale: string;
  countryName: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroH1: string;
  heroSubtitle: string;
  complianceBadges: { title: string; subtitle: string }[];
  tradeHighlights: { label: string; value: string; desc: string }[];
  popularCategories: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
}

export const INTERNATIONAL_MARKETS: Record<string, InternationalMarketConfig> = {
  "en-us": {
    code: "en-us",
    locale: "en-US",
    countryName: "United States & North America",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    path: "/en-us",
    metaTitle: "Leather Goods Manufacturer in India for USA Brands | OEM & Private Label",
    metaDescription:
      "Premier OEM leather goods manufacturer in India exporting to USA brands. Custom handbags, totes, duffels & wallets. Full California Prop 65 compliance, DDP delivery to US ports, low 100 MOQ.",
    heroKicker: "USA & North America Sourcing Gateway · FOB & DDP Delivery",
    heroH1: "OEM Leather Goods Manufacturer in India for USA Brands",
    heroSubtitle:
      "Direct contract manufacturing and private label atelier for American fashion labels, boutique designers, and luxury department stores. LWG-certified hides, California Prop 65 compliance, low 100-piece MOQs, and end-to-end DDP shipping to New York, Los Angeles, Miami, and Chicago.",
    complianceBadges: [
      { title: "California Prop 65", subtitle: "SGS Lab Certified Lead & Phthalate Safe" },
      { title: "LWG Gold Audited", subtitle: "Full-Grain Traceable Leather Supply" },
      { title: "DDP USA Shipping", subtitle: "Customs Cleared to Your Warehouse" },
      { title: "Low 100 MOQ", subtitle: "Flexible Scaling for Emerging Brands" },
    ],
    tradeHighlights: [
      {
        label: "Direct DDP & FOB Shipping",
        value: "Sea & Air Freight",
        desc: "Hassle-free customs clearance and door-to-door delivery across US East & West Coast distribution centers.",
      },
      {
        label: "Duty & Tariff Optimization",
        value: "Stable Bilateral Trade",
        desc: "Benefit from India's stable non-retaliatory tariff position compared to Section 301 China duties.",
      },
      {
        label: "Prototyping Lead Time",
        value: "7 to 10 Days",
        desc: "Rapid CAD pattern digitizing and physical counter-samples shipped via FedEx Priority.",
      },
      {
        label: "Regulatory Testing",
        value: "CPSIA & ASTM Verified",
        desc: "Hardware salt-spray testing, nickel-free plating, and heavy metal testing per US consumer safety acts.",
      },
    ],
    popularCategories: ["handbags", "totes", "business-bags", "wallets", "travel-bags"],
    faqs: [
      {
        question: "How do you manage DDP shipping and customs clearance for US brands?",
        answer:
          "We handle end-to-end DDP (Delivered Duty Paid) logistics. Our freight partners take care of US Customs clearance, ISF 10+2 filings, harbor maintenance fees, and final trucking directly to your warehouse or 3PL facility in the United States.",
      },
      {
        question: "Are your leather goods certified for California Proposition 65?",
        answer:
          "Yes. All leather finishes, lining textiles, edge lacquers, and metallic hardware are lab-tested by SGS or Intertek to ensure zero detectable levels of regulated phthalates, lead, cadmium, and hexavalent chromium.",
      },
      {
        question: "What is the minimum order quantity (MOQ) for US startup brands?",
        answer:
          "Our standard production MOQ is only 100 pieces per style. We allow colorway batching (e.g., 50 units in Cognac, 50 units in Black) to help US brands launch diverse collections without inventory risk.",
      },
      {
        question: "What are your payment terms for North American wholesale accounts?",
        answer:
          "We operate with standard international terms: 30% advance deposit upon tech-pack and golden sample sign-off, and 70% balance prior to final dispatch against verified bill of lading and AQL 2.5 inspection reports. Net terms available for qualified volume retailers.",
      },
    ],
    keywords: [
      "Indian leather goods supplier for US brands",
      "leather bag manufacturer in india for usa",
      "leather goods supplier in usa",
      "high end leather handbags Italy USA",
      "Italian leather goods manufacturer partnership in USA",
      "custom leather bags manufacturer india",
      "oem leather bag factory in asia",
      "private label leather handbag manufacturer india",
      "leather tote bag manufacturer india low moq",
      "california prop 65 compliant leather bag manufacturer india",
      "leather laptop bag manufacturer india export",
      "genuine leather bags manufacturer india for usa",
    ],
  },
  "en-gb": {
    code: "en-gb",
    locale: "en-GB",
    countryName: "United Kingdom & Ireland",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    path: "/en-gb",
    metaTitle: "Leather Goods Manufacturer in India for UK Brands | REACH & SEDEX Audited",
    metaDescription:
      "Bespoke leather goods manufacturer and private label atelier for UK brands. Custom leather handbags, holdalls, wallets & SLGs. EU/UK REACH compliant, SEDEX SMETA audited, CIF London & Southampton.",
    heroKicker: "United Kingdom & British Designer Sourcing Hub · REACH & SEDEX Certified",
    heroH1: "Bespoke Leather Goods Manufacturer for British Brands",
    heroSubtitle:
      "Dedicated OEM & private label manufacturing for UK fashion houses, heritage labels, and independent London boutiques. Combining time-honored artisanal leathercraft with strict UK/EU REACH chemical compliance, SEDEX SMETA ethical auditing, and seamless CIF/DDP logistics to the United Kingdom.",
    complianceBadges: [
      { title: "UK REACH Compliant", subtitle: "Annex XVII Non-Toxic & Nickel Free" },
      { title: "SEDEX SMETA Audited", subtitle: "4-Pillar Ethical & Social Compliance" },
      { title: "LWG Gold Tanneries", subtitle: "Sustainable Vegetable & Nappa Hides" },
      { title: "Fast UK Delivery", subtitle: "CIF London Gateway & Southampton" },
    ],
    tradeHighlights: [
      {
        label: "UK Customs & VAT Ready",
        value: "CIF & DDP Available",
        desc: "Full export documentation with HS code classifications (4202/4203) for seamless HMRC customs clearance.",
      },
      {
        label: "Chemical Standards",
        value: "REACH Annex XVII",
        desc: "Rigorous testing: AZO dye-free, chromium VI under 3ppm, and hypoallergenic nickel-free hardware plating.",
      },
      {
        label: "Artisanal Finishing",
        value: "Italian Edge Paint",
        desc: "Hand-sanded turned edges and hand-burnished aniline patinas tailored to discerning British luxury aesthetics.",
      },
      {
        label: "Ethical Manufacturing",
        value: "SMETA 4-Pillar",
        desc: "Fair living wages, modern Calcutta Leather Complex eco-facilities, and zero modern slavery commitment.",
      },
    ],
    popularCategories: ["handbags", "travel-bags", "wallets", "totes", "business-bags"],
    faqs: [
      {
        question: "How do you comply with UK REACH and European chemical safety rules?",
        answer:
          "All our leather supplies are procured from LWG-certified tanneries and verified under REACH Annex XVII. We provide third-party laboratory test reports (SGS/TUV) confirming absence of harmful AZO dyes, short-chain chlorinated paraffins, and hexavalent chromium.",
      },
      {
        question: "Can you manufacture bespoke luxury holdalls and weekend bags for UK labels?",
        answer:
          "Yes. We specialize in classic British travel silhouettes including double-gusset holdalls, framed doctor's bags, and structured overnight duffels using waxed pull-up, bridle-grade calfskin, and heavy solid brass hardware.",
      },
      {
        question: "How long does sample delivery take to London or Manchester?",
        answer:
          "Counter-samples take 7 to 10 days to engineer in our atelier, after which they are flown via DHL Express directly to your UK design studio within 3 to 4 business days.",
      },
      {
        question: "Do you supply smaller British luxury boutiques and emerging designers?",
        answer:
          "Yes. Our 100-piece minimum order quantity per style is specifically designed to support British independent labels and boutique collections without excessive capital tie-up.",
      },
    ],
    keywords: [
      "private label leather supplier for UK brands",
      "leather bag supplier UK",
      "leather bag manufacturer UK",
      "genuine leather bags manufacturer India for UK",
      "export leather jackets from India to UK",
      "custom leather watch strap manufacturer UK",
      "leather goods manufacturer in india exporting to europe",
      "leather bag manufacturer india reach compliant",
      "leather handbag manufacturers in india for uk brands",
      "sedex smeta audited leather factory in india",
      "bespoke leather goods manufacturers in asia",
      "lwg certified leather bag manufacturer in india",
      "vegetable tanned leather bag manufacturer india",
      "small batch leather bag manufacturer india",
    ],
  },
  "en-au": {
    code: "en-au",
    locale: "en-AU",
    countryName: "Australia & New Zealand",
    flag: "🇦🇺",
    currency: "AUD",
    currencySymbol: "A$",
    path: "/en-au",
    metaTitle: "Leather Goods Manufacturer for Australian Brands | India-Australia ECTA 0% Duty",
    metaDescription:
      "Direct OEM leather goods manufacturer in India for Australian & NZ brands. 0% preferential import duty under ECTA. Custom bags, totes, wallets & belts. Australian Biosecurity compliant.",
    heroKicker: "Australia-India ECTA Free Trade Hub · 0% Import Tariff Duty",
    heroH1: "Leather Goods Manufacturer for Australian Brands",
    heroSubtitle:
      "Capitalize on the India-Australia Economic Cooperation and Trade Agreement (ECTA) with 0% import duty on leather goods. Custom OEM/ODM manufacturing of luxury leather bags, wallets, and accessories for Australian fashion labels with full biosecurity compliance and low 100-piece minimums.",
    complianceBadges: [
      { title: "ECTA 0% Duty", subtitle: "Preferential Tariff Certificate of Origin" },
      { title: "Biosecurity Compliant", subtitle: "Treated & Inspected for DAFF Import" },
      { title: "LWG Gold Audited", subtitle: "Eco-Friendly Vegetable & Chrome-Free" },
      { title: "Direct Shipping", subtitle: "Ports of Sydney, Melbourne & Fremantle" },
    ],
    tradeHighlights: [
      {
        label: "Zero Tariff Advantage",
        value: "0% Duty Under ECTA",
        desc: "Save 5% import duty compared to non-treaty Asian manufacturers with our official COO COO documentation.",
      },
      {
        label: "Australian Biosecurity",
        value: "DAFF Protocol Verified",
        desc: "Properly tanned, dry-milled, and certified free of biological contaminants, bark, or unsterilized residues.",
      },
      {
        label: "Transit to Australia",
        value: "Fast Shipping Lanes",
        desc: "Regular sea freight from Kolkata / Chennai to Sydney, Melbourne, and Brisbane in 18-24 days; air freight in 3-5 days.",
      },
      {
        label: "Sustainable Tanning",
        value: "Eco Vegetable Hides",
        desc: "High demand among Australian eco-fashion labels for our mimosa and chestnut vegetable-tanned bovine leathers.",
      },
    ],
    popularCategories: ["totes", "handbags", "wallets", "leather-belts", "backpacks"],
    faqs: [
      {
        question: "How does the India-Australia ECTA provide 0% duty on leather goods?",
        answer:
          "Under the India-Australia Economic Cooperation and Trade Agreement (ECTA), finished leather articles under HS Code 4202 and 4203 enjoy preferential 0% customs duty upon presentation of an authorized Certificate of Origin (COO), which our export desk issues with every shipment.",
      },
      {
        question: "How do you satisfy Australian Biosecurity (DAFF) import regulations?",
        answer:
          "All our leather goods are manufactured from fully tanned, commercially prepared hides that undergo strict temperature, vacuum drying, and moisture-controlled packaging. Goods are certified free of prohibited raw organic matter, ensuring smooth biosecurity clearance at Australian ports.",
      },
      {
        question: "Can Australian labels request custom vegetable-tanned leather finishes?",
        answer:
          "Yes. We specialize in Italian-style Tuscan vegetable-tanned bovine leather with rich pull-up characteristics and natural waxes, highly favoured by Australian coastal and heritage lifestyle brands.",
      },
      {
        question: "What are your minimum order quantities for Australian designers?",
        answer:
          "We offer a low MOQ of 100 units per style, allowing Australian brands in Sydney, Melbourne, Brisbane, and Byron Bay to test seasonal collections with low financial risk.",
      },
    ],
    keywords: [
      "leather goods manufacturer for australian brands",
      "india australia ecta leather goods manufacturer",
      "0 percent duty leather goods import from india australia",
      "leather goods exporter to australia from india",
      "duty free leather goods supplier india to australia",
      "custom leather goods manufacturer nz",
      "leather goods wholesale suppliers melbourne",
      "leather goods manufacturers sydney b2b",
      "biosecurity compliant leather goods supplier australia",
    ],
  },
  "de": {
    code: "de",
    locale: "de-DE",
    countryName: "Deutschland, Österreich & Schweiz",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    path: "/de",
    metaTitle: "Lederwaren Hersteller Indien B2B | OEM & Private Label Ledertaschen Manufaktur",
    metaDescription:
      "Erfahrener Lederwaren Hersteller in Indien für deutsche Marken. Maßgeschneiderte Ledertaschen, Geldbörsen & Accessoires. REACH konform, LWG Gold zertifiziert, deutsche Qualitätsprüfung, geringe Mindestbestellmenge.",
    heroKicker: "B2B Lederwaren Manufaktur für den deutschen & europäischen Markt",
    heroH1: "Lederwaren Hersteller in Indien für Deutsche Marken",
    heroSubtitle:
      "Ihr verlässlicher OEM/ODM Produktionspartner für anspruchsvolle Lederwaren. Wir fertigen handgefertigte Ledertaschen, Aktenkoffer, Geldbörsen und Kleinlederwaren für deutsche Modemarken, Boutiquen und Department Stores. 100% REACH-konform, LWG Gold zertifizierte Gerbereien und faire B2B-Konditionen ab 100 Stück.",
    complianceBadges: [
      { title: "100% REACH Konform", subtitle: "AZO-frei, Nickel-frei, Chrom VI < 3ppm" },
      { title: "LWG Gold Auditiert", subtitle: "Zertifizierte umweltfreundliche Gerbung" },
      { title: "Deutsche Qualitätsnorm", subtitle: "AQL 2.5 Präzisions-Endkontrolle" },
      { title: "Flexible Mindestmenge", subtitle: "Ab 100 Stück pro Modell" },
    ],
    tradeHighlights: [
      {
        label: "EU-Zoll & Konformität",
        value: "REACH & DDP Hamburg",
        desc: "Vollständige Exportabwicklung mit HS-Codierung für reibungslose Verzollung am Flughafen Frankfurt oder Hafen Hamburg.",
      },
      {
        label: "Materialgüte",
        value: "Vollnarbiges Rindleder",
        desc: "Hochwertige pflanzliche und chromfreie Gerbungen, formstabil und langlebig verarbeitet.",
      },
      {
        label: "Musterfertigung",
        value: "7 bis 10 Tage",
        desc: "Schnelle Entwicklung von Prototypen und Freigabemustern per DHL Express direkt nach Deutschland.",
      },
      {
        label: "Soziale Verantwortung",
        value: "SEDEX & BSCI Standard",
        desc: "Faire Arbeitsbedingungen, moderne Produktionsanlagen im Calcutta Leather Complex und strikte Umweltauflagen.",
      },
    ],
    popularCategories: ["business-bags", "wallets", "handbags", "travel-bags", "totes"],
    faqs: [
      {
        question: "Wie garantieren Sie die Einhaltung der europäischen REACH-Verordnung?",
        answer:
          "Alle verwendeten Leder, Garne, Kantenfarben und Metallbeschläge werden durch akkreditierte Prüflabore (SGS/TÜV) gemäß REACH Anhang XVII zertifiziert. Wir garantieren Nickelfreiheit, Schadstofffreiheit und Chrom VI-Werte unterhalb der Nachweisgrenze.",
      },
      {
        question: "Welche Mindestbestellmenge (MOQ) gilt für deutsche Marken?",
        answer:
          "Unsere Mindestbestellmenge liegt bei nur 100 Stück pro Modell mit der Möglichkeit, verschiedene Lederfarben (z. B. Schwarz, Cognac, Dunkelbraun) zu kombinieren.",
      },
      {
        question: "Liefern Sie DDP direkt an unser Zentrallager in Deutschland?",
        answer:
          "Ja, über unsere Logistikpartner bieten wir vollständige DDP-Lieferungen (verzollter Transport) per Luft- oder Seefracht direkt an Ihre deutsche Unternehmensadresse an.",
      },
      {
        question: "Fertigen Sie Prototypen nach eigenen Tech-Packs an?",
        answer:
          "Ja. Unser CAD-Entwicklungsteam setzt Ihre Maßskizzen, Schnittmuster und CAD-Dateien innerhalb von 7 bis 10 Werktagen in präzise Freigabemuster um.",
      },
    ],
    keywords: [
      "leather goods exporter to Europe",
      "lederwaren hersteller indien b2b",
      "ledertaschen hersteller indien",
      "custom leather bags supplier europe b2b",
      "oem lederwaren produktion asien",
      "lwg zertifizierter leder hersteller indien",
      "reach konforme ledertaschen hersteller",
      "vegetable tanned leather bag manufacturer india",
    ],
  },
  "fr": {
    code: "fr",
    locale: "fr-FR",
    countryName: "France & Pays Francophones",
    flag: "🇫🇷",
    currency: "EUR",
    currencySymbol: "€",
    path: "/fr",
    metaTitle: "Fabricant Sacs en Cuir Inde B2B | Maroquinerie de Luxe & Private Label",
    metaDescription:
      "Atelier de maroquinerie de luxe et fabricant de sacs en cuir en Inde pour marques françaises. Sacs à main, maroquinerie d'entreprise, portefeuilles sur mesure. Conforme REACH, tanneries LWG Gold, MOQ 100 pièces.",
    heroKicker: "Atelier de Maroquinerie Haute Qualité pour Marques Françaises & Européennes",
    heroH1: "Fabricant de Maroquinerie et Sacs en Cuir en Inde",
    heroSubtitle:
      "Votre atelier de fabrication sur mesure et sous-traitance OEM/ODM de maroquinerie fine. Confection artisanale de sacs à main, porte-documents, besaces et petite maroquinerie pour maisons de mode et créateurs français. Tranches teintées à la main, cuirs certifiés LWG Gold, conformité REACH et livraison DDP vers la France.",
    complianceBadges: [
      { title: "Conforme Normes REACH", subtitle: "Teintures AZO Free, Nickel Free, Sans Chrome VI" },
      { title: "Tanneries LWG Gold", subtitle: "Cuirs Pleine Fleur & Tannage Végétal" },
      { title: "Finition Atelier", subtitle: "Tranches Teintées à la Main & Surpiqûres Précises" },
      { title: "MOQ Accessible", subtitle: "À partir de 100 pièces par modèle" },
    ],
    tradeHighlights: [
      {
        label: "Livraison France & Europe",
        value: "DDP Paris & Le Havre",
        desc: "Dédouanement complet et expédition maritime ou aérienne directement à votre entrepôt en France.",
      },
      {
        label: "Haute Finition",
        value: "Savoir-Faire Maroquinier",
        desc: "Parage ultra-précis, tranches poncées et cirées à la main, doublures suédées et renforts thermocollés.",
      },
      {
        label: "Développement Prototype",
        value: "7 à 10 Jours",
        desc: "Élaboration rapide du prototype de validation expédié par DHL Express vers votre studio de création.",
      },
      {
        label: "Responsabilité Sociale",
        value: "Audits SEDEX / BSCI",
        desc: "Atelier moderne au Calcutta Leather Complex, respect strict des normes de travail et d'environnement.",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "Comment garantissez-vous la conformité avec la réglementation européenne REACH ?",
        answer:
          "Tous nos cuirs, doublures et accessoires métalliques font l'objet de contrôles stricts certifiés par des laboratoires indépendants (SGS/Intertek) garantissant l'absence de colorants azoïques, de métaux lourds et un taux de chrome VI inférieur à 3 ppm.",
      },
      {
        question: "Réalisez-vous des pièces de maroquinerie haut de gamme avec tranches teintées ?",
        answer:
          "Oui. Notre atelier maîtrise parfaitement l'application de teintures de tranche italiennes posées en plusieurs couches avec ponçage intermédiaire pour une finition irréprochable et durable.",
      },
      {
        question: "Quelle est la quantité minimale de commande (MOQ) ?",
        answer:
          "Notre MOQ est de 100 unités par modèle, ce qui permet aux jeunes marques et créateurs indépendants de lancer leurs collections de maroquinerie avec un investissement maîtrisé.",
      },
      {
        question: "Pouvez-vous fabriquer sur la base de nos dossiers techniques (Tech Packs) ?",
        answer:
          "Absolument. Nos modélistes transforment vos dessins, cotations et spécifications de garniture en gabarits précis et vous envoient un prototype physique en 7 à 10 jours ouvrés.",
      },
    ],
    keywords: [
      "leather goods exporter to Europe",
      "fabricant sacs en cuir inde",
      "fabricant maroquinerie de luxe inde",
      "atelier confection cuir inde",
      "maroquinerie private label inde",
      "fournisseur sacs cuir b2b france",
      "leather goods manufacturer in india exporting to europe",
      "reach compliant leather bag manufacturer",
    ],
  },
  "en-ca": {
    code: "en-ca",
    locale: "en-CA",
    countryName: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    currencySymbol: "CA$",
    path: "/en-ca",
    metaTitle: "Leather Goods Manufacturer for Canadian Brands | OEM Export",
    metaDescription:
      "Premier leather goods exporter for Canadian retailers. LWG certified, low MOQs, rapid sampling & direct DDP sea/air delivery to Toronto, Montreal & Vancouver.",
    heroKicker: "Canada & North American Sourcing Hub · FOB & DDP Delivery",
    heroH1: "Custom Leather Goods Manufacturer & Exporter for Canadian Brands",
    heroSubtitle:
      "Direct contract manufacturing and private label atelier for Canadian fashion houses, retailers, and boutique designers. LWG-certified partner tanneries, cold-resistant finishing, low 100-piece MOQs, and end-to-end DDP delivery across Toronto, Vancouver, Montreal, and Calgary.",
    complianceBadges: [
      { title: "LWG Gold Audited", subtitle: "Full-Grain Traceable Leather Supply" },
      { title: "CBSA Customs Cleared", subtitle: "Seamless DDP Shipping Across Canada" },
      { title: "Prop 65 & REACH", subtitle: "Certified Non-Toxic Chemical Testing" },
      { title: "Low 100 MOQ", subtitle: "Flexible Scaling for Emerging Labels" },
    ],
    tradeHighlights: [
      {
        label: "DDP Freight to Canada",
        value: "Toronto & Vancouver",
        desc: "Ocean and air freight routed through Port of Vancouver, Montreal, and Toronto Pearson international hubs with all duties handled.",
      },
      {
        label: "Tariff & Customs Entry",
        value: "CBSA Compliant",
        desc: "Pre-filed commercial invoicing, HS Code 4202/4203 classification, and automated CBSA import clearance.",
      },
      {
        label: "Prototype Turnaround",
        value: "7 to 10 Days",
        desc: "Rapid CAD pattern drafting and physical counter-samples shipped directly via DHL/FedEx Express.",
      },
      {
        label: "Weather-Resistant Finish",
        value: "Cold-Crack Tested",
        desc: "Supple, drum-dyed full-grain leathers and edge lacquers formulated to resist extreme winter climate variations.",
      },
    ],
    popularCategories: ["handbags", "totes", "business-bags", "wallets", "travel-bags"],
    faqs: [
      {
        question: "What is your Minimum Order Quantity (MOQ) for Canadian brands and retailers?",
        answer:
          "Our standard production MOQ is 100 units per style for large leather goods (totes, backpacks, and messenger bags) and 200 to 250 units for small leather goods (wallets, cardholders, and passport sleeves). Multi-colorway batching is supported to minimize inventory risk for Canadian boutique launches.",
      },
      {
        question: "How do you manage DDP shipping and CBSA customs clearance into Canada?",
        answer:
          "We offer comprehensive Delivered Duty Paid (DDP) logistics directly to Canadian business addresses. We coordinate ocean container arrivals into Vancouver or Montreal, or air cargo into Toronto Pearson (YYZ), handling all CBSA customs declarations, GST/HST filing, and truckload delivery directly to your warehouse.",
      },
      {
        question: "How quickly can you deliver physical prototype samples to Toronto or Vancouver?",
        answer:
          "Physical counter-sample development takes 7 to 10 business days following tech-pack and leather swatch confirmation. Samples are dispatched via DHL Express or FedEx Priority, arriving in major Canadian metropolitan hubs in 3 to 4 business days. Sample fees are 100% credited back toward your final bulk production order.",
      },
      {
        question: "Are your leather goods tested and compliant with Canadian and North American safety standards?",
        answer:
          "Yes. 100% of our leather hides are sourced from Leather Working Group (LWG) audited partner tanneries. All finished goods comply with the Canada Consumer Product Safety Act (CCPSA), EU REACH Annex XVII, and California Proposition 65 (lead-free, cadmium-free, and phthalate-safe). Full third-party SGS or Intertek lab reports are supplied upon request.",
      },
      {
        question: "What payment terms and currencies do you support for Canadian procurement teams?",
        answer:
          "We accommodate payments in both CAD ($) and USD ($). Standard OEM export terms are 30% advance deposit upon sample sign-off and 70% balance prior to final dispatch against verified bill of lading and AQL 2.5 inspection reports. Irrevocable Letters of Credit (L/C at sight) are supported for container-load volumes.",
      },
    ],
    keywords: [
      "leather goods manufacturer for canadian brands",
      "custom leather goods manufacturer canada",
      "private label leather bags manufacturer low moq canada",
      "leather goods exporter to toronto vancouver",
      "oem leather bag factory in asia for canada",
      "leather wallet manufacturer canada low moq",
      "ddp shipping to canada leather manufacturer",
      "genuine leather goods supplier canada wholesale",
    ],
  },
};
