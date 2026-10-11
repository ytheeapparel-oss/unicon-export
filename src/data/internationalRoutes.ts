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
  "it": {
    code: "it",
    locale: "it-IT",
    countryName: "Italia & Europa Meridionale",
    flag: "🇮🇹",
    currency: "EUR",
    currencySymbol: "€",
    path: "/it",
    metaTitle: "Produttore Pelletteria e Borse in Pelle in India B2B | OEM & Private Label",
    metaDescription:
      "Produttore e fornitore di pelletteria artigianale in India per brand italiani. Borse in pelle, portafogli, cinture e accessori conto terzi. Conforme EU REACH, concerie LWG Gold, MOQ 100 pezzi, spedizione DDP Italia.",
    heroKicker: "Atelier di Pelletteria B2B per Marchi Italiani ed Europei · Certificato REACH & LWG",
    heroH1: "Produttore di Pelletteria Conto Terzi & Borse in Pelle in India",
    heroSubtitle:
      "Atelier di produzione artigianale e private label per case di moda, designer indipendenti e boutique italiane. Lavorazioni di alta precisione: spaccatura micro a 0.4mm, tintura manuale dei bordi, pellami pieno fiore certificati LWG Gold, piena conformità chimica EU REACH e consegna DDP sdoganata verso Milano, Firenze, Roma e tutta Europa.",
    complianceBadges: [
      { title: "Conforme Norme REACH", subtitle: "Senza coloranti AZO, Nickel Safe, Cromo VI < 3ppm" },
      { title: "Concerie LWG Gold", subtitle: "Pellame Bovino Tracciabile e Concia al Vegetale" },
      { title: "Finiture Artigianali", subtitle: "Coste Pettinate & Tinte a Mano con Vernici Italiane" },
      { title: "MOQ Flessibile", subtitle: "A partire da soli 100 pezzi per modello" },
    ],
    tradeHighlights: [
      {
        label: "Spedizioni DDP Italia",
        value: "Porto di Genova & Malpensa",
        desc: "Sdoganamento completo, gestione IVA/dazi e consegna camionistica direttamente al vostro magazzino in Italia.",
      },
      {
        label: "Qualità Manifatturiera",
        value: "Standard AQL 2.5",
        desc: "Precisione di cucitura, rinforzi strutturali termoadesivi, fodere in cotone biologico e controllo qualità al 100%.",
      },
      {
        label: "Sviluppo Prototipi",
        value: "7-10 Giorni Lavorativi",
        desc: "Campionatura rapida da tech pack o cartamodelli inviata tramite corriere espresso DHL direttamente al vostro studio.",
      },
      {
        label: "Trasparenza Etica",
        value: "Audit SEDEX / SMETA",
        desc: "Produzione etica certificata nel Calcutta Leather Complex con impianti moderni e salari equi garantiti.",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "Come garantite la conformità alle normative europee REACH per i marchi italiani?",
        answer:
          "Tutti i pellami, le fodere tessili, i collanti e la minuteria metallica sono testati e certificati da laboratori internazionali accreditati (SGS, TÜV, Intertek) secondo il Regolamento UE REACH Allegato XVII. Garantiamo l'assenza di coloranti azoici vietati, rilascio di nichel a norma EN 1811 e cromo esavalente al di sotto della soglia di rilevabilità (Cr VI < 3 ppm).",
      },
      {
        question: "Qual è il quantitativo minimo d'ordine (MOQ) per collezioni private label?",
        answer:
          "Il nostro MOQ parte da soli 100 pezzi per modello, con la flessibilità di suddividere l'ordine su 2 o 3 varianti colore (ad es. 50 nero, 50 cuoio naturale) per agevolare il lancio di nuove collezioni con investimenti ottimizzati.",
      },
      {
        question: "Gestite direttamente la spedizione DDP con sdoganamento verso l'Italia?",
        answer:
          "Sì. Gestiamo spedizioni DDP (Delivered Duty Paid) via mare (Porto di Genova o La Spezia) e via aerea (Milano Malpensa o Roma Fiumicino). Tutte le pratiche doganali, dazi UE e documenti di trasporto vengono liquidati in anticipo, consegnando la merce pronta a scaffale.",
      },
      {
        question: "Possiamo inviare tech pack o campioni fisici per la campionatura?",
        answer:
          "Certamente. I nostri modellisti CAD traducono disegni tecnici, file Illustrator o capi campione fisici in cartamodelli operativi. Inviamo il campione master per approvazione entro 7-10 giorni lavorativi con spedizione aerea prioritaria.",
      },
    ],
    keywords: [
      "produttore pelletteria india",
      "fabbrica borse in pelle india",
      "produttore borse pelle conto terzi b2b",
      "private label pelletteria india",
      "fornitore borse in pelle per marchi italiani",
      "artigianato pelle india export italia",
      "leather goods manufacturer in india for italian brands",
      "reach compliant leather factory india",
      "produttore portafogli in pelle india",
      "concerie lwg borse pelle conto terzi",
    ],
  },
  "es": {
    code: "es",
    locale: "es-ES",
    countryName: "España & Unión Europea",
    flag: "🇪🇸",
    currency: "EUR",
    currencySymbol: "€",
    path: "/es",
    metaTitle: "Fabricante de Marroquinería y Bolsos de Piel en la India B2B | OEM",
    metaDescription:
      "Fabricante directo de marroquinería y bolsos de piel en la India para marcas de moda españolas y europeas. Marca blanca, conformidad REACH, curtidurías LWG Gold, MOQ 100 uds, envíos DDP a España.",
    heroKicker: "Fábrica de Marroquinería B2B para Marcas Españolas · Cumplimiento EU REACH & LWG",
    heroH1: "Fabricante de Marroquinería y Bolsos de Cuero en la India",
    heroSubtitle:
      "Taller de confección artesanal y producción de marca blanca (OEM/ODM) de artículos de piel para firmas de moda y diseñadores de España. Bolsos de mano, carteras, mochilas y cinturones con acabados de lujo: lujado de cantos a mano, pieles flor certificadas LWG Gold, estricta conformidad con la normativa europea REACH y entregas DDP puerta a puerta en Madrid, Barcelona, Valencia y toda la UE.",
    complianceBadges: [
      { title: "Normativa EU REACH", subtitle: "Sin Colorantes AZO, Libre de Níquel y Cromo VI < 3ppm" },
      { title: "Curtidurías LWG Gold", subtitle: "Piel Vacuna Plena Flor y Curtición Vegetal Sostenible" },
      { title: "Acabado de Precisión", subtitle: "Cantos Pintados a Mano con Laca Italiana & Remallado Fino" },
      { title: "MOQ Reducido", subtitle: "Desde solo 100 unidades por diseño con división de color" },
    ],
    tradeHighlights: [
      {
        label: "Envíos DDP España",
        value: "Valencia & Barcelona",
        desc: "Despacho de aduanas completo, aranceles e IVA gestionados hasta su almacén en España.",
      },
      {
        label: "Control de Calidad",
        value: "Inspección AQL 2.5",
        desc: "Verificación milimétrica de costuras, herrajes reforzados, pruebas de tracción y empaquetado hermético para exportación.",
      },
      {
        label: "Prototipado Rápido",
        value: "7 a 10 Días Laborables",
        desc: "Elaboración ágil de contramuestras físicas a partir de sus fichas técnicas, enviadas vía DHL Express.",
      },
      {
        label: "Compromiso Ético",
        value: "Auditoría SEDEX / BSCI",
        desc: "Instalaciones modernas en el Calcutta Leather Complex con salarios dignos y gestión ecológica de efluentes.",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "¿Cómo garantizan el cumplimiento de la normativa europea REACH para España?",
        answer:
          "Todos nuestros cueros, forros textiles, tintes de cantos y fornituras metálicas son verificados por laboratorios acreditados (SGS/TÜV) conforme al Reglamento CE 1907/2006 Anexo XVII. Certificamos la ausencia de aminas aromáticas cancerígenas (AZO-free), liberación de níquel reglamentaria y niveles de Cromo VI por debajo del límite de detección legal (< 3 mg/kg).",
      },
      {
        question: "¿Cuál es la cantidad mínima de pedido (MOQ) para marcas españolas?",
        answer:
          "Ofrecemos un MOQ accesible de 100 unidades por diseño, permitiendo dividir la tirada en 2 o 3 colores de piel (por ejemplo, 50 cuero natural y 50 negro) para que las marcas de autor puedan lanzar colecciones sin sobrecargar su inventario.",
      },
      {
        question: "¿Realizan envíos DDP directamente a nuestro almacén en España?",
        answer:
          "Sí, ofrecemos servicio DDP (Delivered Duty Paid) integral por vía marítima (puertos de Valencia o Barcelona) o aérea (aeropuertos de Madrid Barajas o Barcelona-El Prat). Nosotros gestionamos el despacho aduanero, aranceles comunitarios y entrega directa en sus instalaciones.",
      },
      {
        question: "¿Pueden fabricar a partir de nuestros propios Tech Packs y diseños?",
        answer:
          "Totalmente. Nuestro equipo de patronaje industrial digitaliza sus fichas técnicas y produce un prototipo físico de aprobación en un plazo de 7 a 10 días laborables para su validación previa a la producción a granel.",
      },
    ],
    keywords: [
      "fabricante marroquineria india",
      "fabricante bolsos piel india",
      "marroquineria marca blanca b2b",
      "fabricante bolsos de cuero al por mayor",
      "proveedor marroquineria marcas espanolas",
      "leather goods manufacturer in india for spanish brands",
      "taller confeccion cuero india",
      "bolsos piel reach lwg fabricacion",
      "fabricante carteras piel india",
      "exportador articulos de piel india espana",
    ],
  },
  "ar": {
    code: "ar",
    locale: "ar-AE",
    countryName: "دولة الإمارات ودول الخليج العربي",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "د.إ",
    path: "/ar",
    metaTitle: "مصنع حقائب ومنتجات جلدية فاخرة في الهند | تصنيع بعلامة تجارية خاصة B2B",
    metaDescription:
      "مصنع ومصدر معتمد للمنتجات الجلدية الفاخرة والحقائب الأصلية في الهند لعلامات الأزياء في دبي وأبوظبي والخليج. تصنيع مخصص OEM/ODM، جلود مدبوغة عضوياً LWG، حد أدنى 100 قطعة، وشحن DDP مباشر للخليج.",
    heroKicker: "بوابة التصدير لدولة الإمارات والشرق الأوسط · شحن جوي وبحري مباشر DDP",
    heroH1: "مصنع المنتجات الجلدية والحقائب الفاخرة في الهند لعلامات الخليج",
    heroSubtitle:
      "ورشة متخصصة في تصنيع الجلود الفاخرة وتطوير العلامات التجارية الخاصة (OEM / ODM) لدور الأزياء والمصممين في دبي والرياض والدوحة. حقائب نسائية راقية، حقائب أعمال، محافظ وإكسسوارات من جلود الأبقار الطبيعية الحبيبية الكاملة المعتمدة من LWG، بحرفية يدوية رفيعة وحد أدنى مرن يبدأ من 100 قطعة فقط.",
    complianceBadges: [
      { title: "جلود LWG معتمدة", subtitle: "مدابغ صديقة للبيئة وجلود طبيعية 100%" },
      { title: "شحن DDP للخليج", subtitle: "تخليص جمركي شامل وتوصيل حتى مستودعاتكم" },
      { title: "حد أدنى 100 قطعة", subtitle: "مرونة للعلامات التجارية الصاعدة والفاخرة" },
      { title: "عينات خلال 7-10 أيام", subtitle: "تطوير سريع للنماذج الأولية بدقة متناهية" },
    ],
    tradeHighlights: [
      {
        label: "الشحن إلى الإمارات والخليج",
        value: "ميناء جبل علي ومطار دبي",
        desc: "شحن جوي سريع خلال 3-5 أيام عبر DHL/FedEx أو شحن بحري مباشر إلى ميناء جبل علي مع إنهاء كافة الإجراءات.",
      },
      {
        label: "اتفاقية التجارة الحرة CEPA",
        value: "رسوم جمركية تفضيلية 0%",
        desc: "استفد من المزايا الجمركية التفضيلية بموجب اتفاقية الشراكة الاقتصادية الشاملة بين الهند والإمارات.",
      },
      {
        label: "معايير الجودة الفاخرة",
        value: "فحص AQL 2.5 دقيق",
        desc: "صبغ الحواف الإيطالي يدوياً، حياكة معززة، وسحابات وإكسسوارات ذهبية مقاومة للتآكل.",
      },
      {
        label: "السرية وحماية التصاميم",
        value: "اتفاقية عدم إفصاح (NDA)",
        desc: "حماية قانونية كاملة لرسوماتكم التقنية وتصاميمكم الحصرية للعلامة التجارية.",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "كيف تتم إدارة الشحن والتخليص الجمركي في دبي والإمارات؟",
        answer:
          "نوفر شحن DDP (التسليم شاملاً الرسوم الجمركية) براً وبحراً وجواً إلى دبي وأبوظبي وجميع مدن الخليج العربي. نقوم بإعداد شهادات المنشأ الرسمية والفواتير الموثقة لضمان دخول البضائع دون أي تعقيدات.",
      },
      {
        question: "ما هو الحد الأدنى للطلب (MOQ) لتصنيع تشكيلة حقائب خاصة؟",
        answer:
          "الحد الأدنى لدينا يبدأ من 100 قطعة فقط لكل تصميم، مع إمكانية تقسيم الكمية على لونين أو ثلاثة، مما يتيح للعلامات التجارية في دبي إطلاق مجموعات متنوعة بأقل مخاطرة.",
      },
      {
        question: "هل جلودكم طبيعية ومطابقة للمواصفات العالمية؟",
        answer:
          "نعم، 100% من الجلود المستخدمة هي جلود طبيعية حبيبية كاملة (Full Grain) أو جلود مدبوغة نباتياً، مشتقة من مدابغ معتمدة دولياً من قبل Leather Working Group، وخالية من أي معادن أو كيماويات ضارة.",
      },
      {
        question: "كم يستغرق تجهيز العينة الأولية وشحنها؟",
        answer:
          "يستغرق تطوير النموذج الأولي من 7 إلى 10 أيام عمل بعد اعتماد ملف التصميم (Tech Pack)، ويتم شحن العينة عبر البريد السريع لتصل إلى مكتبكم خلال 3 أيام للمعاينة والاعتماد.",
      },
    ],
    keywords: [
      "مصنع حقائب جلد طبيعي في الهند",
      "تصنيع منتجات جلدية دبي",
      "مصنع شنط جلدية ماركة خاصة",
      "مورد جلود بالجملة للعلامات التجارية الإمارات",
      "leather goods manufacturer for dubai brands",
      "custom leather bag manufacturer india uae",
      "مصنع محافظ جلدية الهند",
    ],
  },
  "ja": {
    code: "ja",
    locale: "ja-JP",
    countryName: "日本 (Japan)",
    flag: "🇯🇵",
    currency: "JPY",
    currencySymbol: "¥",
    path: "/ja",
    metaTitle: "インド本革バッグ・革製品OEM製造工場 | 日本のブランド向けB2B",
    metaDescription:
      "日本のアパレル・デザイナーズブランド向け本革製品OEM/ODM受託製造工場。LWG認証フルグレインレザー、ベジタブルタンニン革、日本の高い品質基準（検品体制・0.4mm漉き技術）、最小ロット100点から、DDP成田・羽田・横浜納品。",
    heroKicker: "日本市場向けB2B本革製品OEM・プライベートレーベル生産拠点",
    heroH1: "日本のブランドのための本革バッグ・革製品OEM製造工場",
    heroSubtitle:
      "東京・大阪・京都のアパレルブランドやセレクトショップ向けの本革バッグ、トート、財布、革小物のアトリエ生産。日本の厳しい品質検査基準に応える高精度なコバ塗り、0.4mmの漉き加工、LWG認証パートナータンナーの良質なフルグレインレザーを採用。小ロット100点から試作・量産対応。",
    complianceBadges: [
      { title: "日本の品質基準対応", subtitle: "ミリ単位の縫製精度 & コバ仕上げ" },
      { title: "LWG認証レザー", subtitle: "環境負荷の少ない上質な本革・植物タンニン鞣し" },
      { title: "最小ロット100点", subtitle: "初期リスクを抑えたカラー展開が可能" },
      { title: "7〜10日サンプル製作", subtitle: "仕様書（仕様パターン）からの迅速な試作" },
    ],
    tradeHighlights: [
      {
        label: "日本向け直送物流",
        value: "成田・羽田・横浜港",
        desc: "FedEx/DHLによる航空便（3〜5日）またはコンテナ海上便。通関・輸入関税対応のDDP納品もご相談可能。",
      },
      {
        label: "徹底した検品管理",
        value: "AQL 2.5 基準",
        desc: "針混入防止の検針検査、引張強度試験、ファスナー開閉耐久試験、出荷前全数チェック体制。",
      },
      {
        label: "金具・部材の特注",
        value: "YKKジッパー & 真鍮金具",
        desc: "YKKエクセラファスナーや日本ブランド指定金具の組み込み、オリジナルロゴ刻印・素押し対応。",
      },
      {
        label: "日印経済連携協定 (CEPA)",
        value: "関税優遇スキーム",
        desc: "原産地証明書の発行により、日本輸入時の関税メリットを最大限に活かしたコスト設計。",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "日本の品質基準に適合する検品・検針体制は整っていますか？",
        answer:
          "はい。日本向け出荷製品には専任の検品ラインを設け、縫製ピッチ、コバの塗布ムラ、0.4mm厚の漉き精度を厳格に管理しています。また、すべての製品に対して検針器による金属混入検査を実施した上で梱包いたします。",
      },
      {
        question: "オリジナルの仕様書（仕様パターン）からサンプル作成は可能ですか？",
        answer:
          "はい、Illustratorの図面や写真、寸法指示書（仕様書）をお送りいただければ、弊社のCADパタンナーが型紙を起こし、7〜10営業日以内にファーストサンプルを仕上げて日本へ発送いたします。",
      },
      {
        question: "最小発注数量（MOQ）とカラー展開について教えてください。",
        answer:
          "基本MOQは1型あたり100点です。同一革種であれば、キャメル50点・ブラック50点などのカラーバリエーション分割も承っておりますので、過剰在庫のリスクを抑えてコレクションを立ち上げられます。",
      },
      {
        question: "YKKファスナーや指定の芯材を使用できますか？",
        answer:
          "はい。YKK正規ファスナー（メタル・エクセラ）の手配や、日本から支給いただくオリジナル裏地・芯材・金具を使用した委託加工（OEM）にも柔軟に対応しております。",
      },
    ],
    keywords: [
      "革製品 OEM インド",
      "本革バッグ 製造工場 インド",
      "レザーバッグ OEM 小ロット",
      "財布 OEM インド 工場",
      "プライベートレーベル 革製品",
      "leather goods manufacturer in india for japanese brands",
      "oem leather bag factory japan",
    ],
  },
  "nl": {
    code: "nl",
    locale: "nl-NL",
    countryName: "Nederland & Vlaanderen",
    flag: "🇳🇱",
    currency: "EUR",
    currencySymbol: "€",
    path: "/nl",
    metaTitle: "Lederwaren Fabrikant India voor Nederlandse Merken | OEM & Private Label",
    metaDescription:
      "Toonaangevende B2B fabrikant van lederen tassen, portemonnees en accessoires in India voor Nederlandse en Belgische modemerken. LWG-gecertificeerd leer, EU REACH-conform, lage MOQ van 100 stuks, DDP levering naar Rotterdam en Amsterdam.",
    heroKicker: "Nederlandse & Benelux Sourcing Hub · Directe DDP Zee- & Luchtvracht",
    heroH1: "Lederwaren Fabrikant in India voor Nederlandse Merken",
    heroSubtitle:
      "Vervaardiging van hoogwaardige lederen tassen, shoppers, laptoptassen en lederwaren voor Nederlandse modemerken, ontwerpers en warenhuizen. LWG-gecertificeerde partnerlooierijen, volledige EU REACH-conformiteit, flexibele minimale afname van slechts 100 stuks en complete DDP-douaneafhandeling direct naar uw distributiecentrum in Nederland.",
    complianceBadges: [
      { title: "EU REACH Conform", subtitle: "AZO-vrij, Nikkelveilig & Chroom-VI < 3ppm" },
      { title: "LWG Goud Geloooid", subtitle: "Traceerbaar volnerfleer & plantaardig looien" },
      { title: "Lage MOQ van 100", subtitle: "Minimaal risico voor opstartende collecties" },
      { title: "DDP Nederland", subtitle: "Douane-inklaring direct naar uw magazijn" },
    ],
    tradeHighlights: [
      {
        label: "Logistiek naar Nederland",
        value: "Haven van Rotterdam & Schiphol",
        desc: "Snelle luchtvracht (3-5 dagen) via Schiphol of voordelige zeevracht rechtstreeks naar de Haven van Rotterdam.",
      },
      {
        label: "Duurzaamheid & Ethiek",
        value: "SEDEX / SMETA Audits",
        desc: "Ethische arbeidsomstandigheden en moderne waterzuivering in het Calcutta Leather Complex.",
      },
      {
        label: "Snelle Monsterservice",
        value: "7 tot 10 Werkdagen",
        desc: "Snel fysiek prototype op basis van uw tech-pack, geleverd via express koerier voor definitieve goedkeuring.",
      },
      {
        label: "Kwaliteitsnormen",
        value: "AQL 2.5 Inspectie",
        desc: "Zorgvuldig geteste ritsen, versterkte handvatten en waterafstotende afwerkingen.",
      },
    ],
    popularCategories: ["handbags", "totes", "business-bags", "wallets", "travel-bags"],
    faqs: [
      {
        question: "Hoe garandeert u de Europese REACH-naleving voor Nederland?",
        answer:
          "Al onze leersoorten, voeringen en metalen onderdelen worden onafhankelijk getest door TÜV en SGS conform EU REACH Bijlage XVII. Wij garanderen dat alle zendingen vrij zijn van AZO-kleurstoffen, nikkelafgifte voldoet aan de norm en Chroom-VI onder de 3 ppm blijft.",
      },
      {
        question: "Wat is de minimale bestelhoeveelheid (MOQ)?",
        answer:
          "Onze minimale bestelhoeveelheid is slechts 100 stuks per model. U kunt deze 100 stuks verdelen over 2 verschillende leerkleuren (bijvoorbeeld 50 cognac en 50 zwart).",
      },
      {
        question: "Verzorgt u DDP-levering inclusief invoerrechten naar Nederland?",
        answer:
          "Ja, wij verzorgen volledige DDP (Delivered Duty Paid) levering. Wij regelen alle transportdocumenten, EU-invoerrechten en douane-inklaring, zodat de goederen kant-en-klaar bij uw magazijn worden afgeleverd.",
      },
      {
        question: "Kunnen we onze eigen merkdetails toevoegen (branding)?",
        answer:
          "Absoluut. Wij bieden blinde blinddruk, goud-/zilverfoliedruk, op maat gemaakte metalen logo-plaatjes, geweven binnenlabels en gepersonaliseerde stofzakken.",
      },
    ],
    keywords: [
      "lederen tassen fabrikant india",
      "leerlooierij fabrikant b2b nederland",
      "private label lederwaren india",
      "leren tassen laten maken lage moq",
      "leather goods supplier netherlands",
      "custom leather bag manufacturer india",
    ],
  },
  "sv": {
    code: "sv",
    locale: "sv-SE",
    countryName: "Sverige & Norden (Sweden)",
    flag: "🇸🇪",
    currency: "SEK",
    currencySymbol: "kr",
    path: "/sv",
    metaTitle: "Lädervaror & Väskor Tillverkare i Indien | OEM & Private Label för Svenska Varumärken",
    metaDescription:
      "B2B-kontraktstillverkare av högkvalitativa läderväskor, plånböcker och accessoarer för skandinaviska och svenska modemärken. LWG-certifierat vegetabiliskt garvat läder, EU REACH-efterlevnad, låg MOQ från 100 st, DDP-leverans till Göteborg och Stockholm.",
    heroKicker: "Svensk & Nordisk Sourcing-Hub · DDP Leverans till Stockholm & Göteborg",
    heroH1: "Lädervaror och Väsktillverkare i Indien för Svenska Varumärken",
    heroSubtitle:
      "Skräddarsydd tillverkning och private label-ateljé för svenska designmärken, accessoarvarumärken och livsstilsföretag. Skandinavisk minimalism möter indiskt hantverk: vegetabiliskt garvat narvläder från LWG-certifierade partnergarverier, strikt EU REACH-efterlevnad och låga minimiordrar från 100 stycken.",
    complianceBadges: [
      { title: "EU REACH & Kemikaliefritt", subtitle: "Inga AZO-färgämnen & Krom-VI < 3ppm" },
      { title: "LWG-Certifierat Läder", subtitle: "Vegetabiliskt garvat & spårbart narvläder" },
      { title: "Låg MOQ från 100 st", subtitle: "Flexibel färgfördelning för nya kollektioner" },
      { title: "DDP-Leverans till Sverige", subtitle: "Tullklarerat direkt till ert lager" },
    ],
    tradeHighlights: [
      {
        label: "Frakt till Sverige",
        value: "Göteborg & Stockholm Arlanda",
        desc: "Smidig flygfrakt via Arlanda (3-5 dagar) eller kostnadseffektiv sjöfrakt via Göteborgs hamn med full DDP-service.",
      },
      {
        label: "Klimat & Hållbarhet",
        value: "LWG & SEDEX Granskade",
        desc: "Miljömedvetna produktionsprocesser och slutna reningssystem vid Calcutta Leather Complex.",
      },
      {
        label: "Prototyptillverkning",
        value: "7 till 10 Arbetsdagar",
        desc: "Snabba fysiska prototyper baserade på era ritningar eller Tech Packs, skickade med DHL Express.",
      },
      {
        label: "Kvalitetskontroll",
        value: "AQL 2.5 Standard",
        desc: "Hållfasthetstestade handtag, exakta sömmar och YKK-dragkedjor anpassade för nordiskt klimat.",
      },
    ],
    popularCategories: ["handbags", "totes", "business-bags", "wallets", "travel-bags"],
    faqs: [
      {
        question: "Uppfyller era läderprodukter svenska och europeiska kemikaliekrav (REACH)?",
        answer:
          "Ja, fullständigt. Allt läder, foder och metallbeslag testas enligt EU REACH Annex XVII av ackrediterade laboratorier (SGS/Intertek). Vi garanterar att produkterna är nickelfria, AZO-fria och har ett Krom-VI-innehåll under 3 mg/kg.",
      },
      {
        question: "Vad är minsta orderkvantitet (MOQ) för svenska varumärken?",
        answer:
          "Vår standard-MOQ är endast 100 enheter per modell. Ni kan dela upp denna volym på två färger (t.ex. 50 naturläder och 50 svart) för att minimera lagerbindning.",
      },
      {
        question: "Hur fungerar DDP-frakten till vårt lager i Sverige?",
        answer:
          "Vi erbjuder komplett DDP (Delivered Duty Paid)-frakt. Vi hanterar exportdeklarationer, svensk tullklarering och moms så att varorna levereras direkt till er dörr utan administrativa hinder.",
      },
      {
        question: "Arbetar ni med vegetabiliskt garvat läder för en vacker patina?",
        answer:
          "Ja, vi är specialiserade på vegetabiliskt garvat läder (Veg-Tan) som åldras med en djup, naturlig patina, perfekt anpassat för tidlös skandinavisk estetik.",
      },
    ],
    keywords: [
      "tillverkare läderväskor indien",
      "skinnväskor tillverkning b2b sverige",
      "private label lädervaror indien",
      "sy upp läderväskor eget märke",
      "lädertillverkare låg moq",
      "leather goods manufacturer for swedish brands",
    ],
  },
  "ko": {
    code: "ko",
    locale: "ko-KR",
    countryName: "대한민국 (South Korea)",
    flag: "🇰🇷",
    currency: "KRW",
    currencySymbol: "₩",
    path: "/ko",
    metaTitle: "인도 프리미엄 가죽 가방 및 가죽제품 OEM/ODM 제조 공장 | 한국 브랜드 B2B",
    metaDescription:
      "한국 디자이너 브랜드 및 패션 기업을 위한 인도 최고급 천연가죽 가방·지갑 OEM/ODM 제조 공장. LWG 인증 친환경 베지터블/풀그레인 가죽, 엄격한 품질 검품, 최소 주문 수량 100개, 인천공항 및 부산항 DDP 직배송 지원.",
    heroKicker: "한국 및 아시아 럭셔리 패션 브랜드 B2B 가죽제품 생산 파트너",
    heroH1: "한국 브랜드를 위한 인도 천연가죽 가방 및 잡화 OEM/ODM 제조공장",
    heroSubtitle:
      "서울, 동대문, 판교의 K-패션 디자이너 브랜드와 라이프스타일 셀렉트샵을 위한 맞춤형 가죽 가방, 토트백, 서류가방, 지갑 주문 제작. LWG 인증 친환경 가죽 가공, 정밀한 0.4mm 피혁 피할(스카이빙), 고급 엣지코트 마감, 최소 100개 소량 생산(MOQ) 지원.",
    complianceBadges: [
      { title: "LWG 인증 프리미엄 가죽", subtitle: "친환경 공정의 풀그레인 및 베지터블 소가죽" },
      { title: "소량 100개 주문 제작", subtitle: "초기 브랜드 런칭을 위한 유연한 MOQ 지원" },
      { title: "한국 직배송 (DDP)", subtitle: "인천공항 및 부산항 완벽한 통관 및 배송" },
      { title: "7~10일 고속 샘플링", subtitle: "테크팩(작업지시서) 기반 빠른 실물 샘플 제작" },
    ],
    tradeHighlights: [
      {
        label: "한국 직배송 물류",
        value: "인천공항 및 부산항",
        desc: "DHL/FedEx 항공 특송(3~5일) 또는 부산항 정기 해상 운송. 수입 통관 및 관세 일괄 처리(DDP).",
      },
      {
        label: "한-인도 CEPA 관세 혜택",
        value: "원산지증명서 발급",
        desc: "포괄적 경제동반자협정(CEPA) 원산지증명서를 발급하여 한국 통관 시 관세 절감 혜택 제공.",
      },
      {
        label: "명품급 퀄리티 관리",
        value: "AQL 2.5 엄격 검품",
        desc: "정밀한 바느질 땀수, 금속 부자재 염수 분무 테스트, 철저한 검침(바늘 검출) 공정 완료 후 출고.",
      },
      {
        label: "자체 로고 각인 및 부자재",
        value: "불박 / 은박 / 금형 제작",
        desc: "브랜드 심볼 금형 불박(Blind Deboss), YKK 정품 지퍼 채택, 전용 더스트백 맞춤 제작.",
      },
    ],
    popularCategories: ["handbags", "totes", "wallets", "business-bags", "travel-bags"],
    faqs: [
      {
        question: "작업지시서(Tech Pack)로 샘플 제작이 가능한가요?",
        answer:
          "네, 가능합니다. 제품 치수, 디테일 스케치, 부자재 사양이 담긴 일러스트레이터 파일이나 PDF 작업지시서를 공유해주시면 당사 패턴사가 정밀 패턴을 제도하여 7~10영업일 내에 실물 샘플을 제작해 한국으로 발송합니다.",
      },
      {
        question: "최소 주문 수량(MOQ)과 컬러 배분은 어떻게 되나요?",
        answer:
          "기본 MOQ는 스타일당 100개입니다. 동일한 가죽 원단을 사용할 경우 50개(블랙) / 50개(브라운) 등 2가지 색상으로 분할 생산이 가능하여 초기 재고 부담을 크게 덜어드립니다.",
      },
      {
        question: "한-인도 CEPA 원산지증명서 발급이 지원되나요?",
        answer:
          "네, 모든 수출 선적에 대해 정식 한-인도 CEPA 원산지증명서(Certificate of Origin)를 발급해 드립니다. 이를 통해 한국 수입 시 관세 감면 혜택을 받으실 수 있습니다.",
      },
      {
        question: "한국 명품 브랜드 수준의 엣지코트(기리매) 마감이 가능한가요?",
        answer:
          "네. 유럽산 고급 엣지코트 염료를 사용하여 3회 이상 덧바르고 샌딩(연마)하는 숙련공 핸드메이드 마감을 적용하므로 갈라짐 없는 매끄러운 엣지 라인을 완성합니다.",
      },
    ],
    keywords: [
      "가죽가방 oem 공장 인도",
      "가죽제품 주문제작 소량생산",
      "가죽 가방 자체제작 moq 100",
      "디자이너 브랜드 가죽가방 공장",
      "leather goods manufacturer for korean brands",
      "oem leather bag factory korea",
    ],
  },
};
