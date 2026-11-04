export const COMPANY_INFO = {
  name: "UNICON LEATHER",
  legalName: "Unicon Leather Goods Export Private Limited",
  brandName: "UNICON LEATHER",
  tagline: "Master Leather Craftsmen & OEM/ODM Manufacturing Partner for Global Brands",
  establishedYear: "2012",
  locationCity: "Noida / Kolkata",
  locationState: "Uttar Pradesh / West Bengal",
  country: "India",
  factoryAddress: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex, Kolkata, West Bengal 743502, India",
  noidaOfficeAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106, Noida, Uttar Pradesh 201304, India",
  fullAddress: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106, Noida, UP 201304 (Factory: Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex, Kolkata 743502), India",
  primaryEmail: "uniconexport@gmail.com",
  secondaryEmail: "uniconexport@gmail.com",
  phone: "+91 9873102341",
  whatsapp: "+91 9873102341",
  whatsappDirectUrl: "https://wa.me/919873102341?text=Hello%20Unicon%20Leather%20Team%2C%20I%20am%20interested%20in%20discussing%20a%20B2B%20manufacturing%20inquiry.",
  workingHours: "Monday to Saturday: 09:30 AM – 06:30 PM IST (Export desk monitored 24/7 for international time zones)",
  
  // Business Model & Capabilities
  businessModel: "B2B Manufacturing, Wholesale Export, OEM, ODM, Private-Label Manufacturing, and Bespoke Product Development",
  targetMarkets: ["United States", "United Kingdom", "Germany", "France", "Italy", "Australia", "Canada", "United Arab Emirates", "Japan", "Nordic Countries"],
  
  // MOQ Guidelines (B2B transparent tiered guidance: Stock Trial vs. Custom Tannery Dye)
  moq: {
    general: "50 pcs per style (In-Stock Core Leathers) | 100–200 pcs (Custom Drum-Dyed Leathers)",
    walletsSmallGoods: "100 pcs (Stock Leather Trial) | 200 pcs per style (Custom Drum-Dyed)",
    handbagsTotes: "50 pcs (Stock Leather Trial) | 100 pcs per style (Custom Drum-Dyed)",
    jacketsApparel: "50–100 pcs per style across size run (XS–4XL)",
    customHardware: "300–500 pcs minimum for custom 3D mould development (stock solid brass & YKK hardware available at 50-pc MOQs)",
    sampling: "Available for qualified B2B buyers (1–3 prototype units per tech pack; sample fee credited toward bulk PO)",
  },

  // Turnaround Times
  leadTimes: {
    sampling: "5–7 business days (Wallets/Belts) | 7–14 business days (Structured Bags, Briefcases & Jackets)",
    production: "25 to 40 business days post-Pre-Production Sample (PPS) sign-off & deposit confirmation",
    repeatOrders: "20 to 30 business days for re-orders with existing patterns & moulds",
  },

  // Logistics & Trade Terms
  tradeTerms: {
    incoterms: ["FOB (Free On Board)", "CIF (Cost, Insurance & Freight)", "DDP (Delivered Duty Paid — Air & Sea)", "EXW (Ex Works)"],
    nearestAirports: ["Netaji Subhash Chandra Bose International (CCU)", "Indira Gandhi International (DEL)"],
    nearestSeaports: ["Kolkata Port (SMP)", "Mundra Port", "JNPT Nhava Sheva (Mumbai)"],
    courierPartners: ["DHL Express", "FedEx International Priority", "UPS Worldwide Saver", "Air & Sea Freight Forwarders"],
  },

  // Verifiable Supply-Chain Credentials, Lab Testing & Audit Readiness
  // Explicitly distinguishes: (1) Raw Material Partner Tanneries, (2) Third-Party Accredited Lab Testing, and (3) Factory QMS & Social Audit Readiness
  certifications: [
    {
      id: "lwg",
      name: "Leather Working Group (LWG) Audited Partner Tanneries",
      issuedBy: "Tier 02 · Partner-Tannery Raw Hide Credential (Kolkata & Chennai Clusters)",
      status: "Partner Tannery" as const,
      description: "Unicon Leather is a cut-and-sew manufacturer, not a raw-hide wet-blue tannery. We procure full-grain cowhide, calfskin, buffalo, and vegetable-tanned hides exclusively from LWG Gold/Silver audited partner tanneries operating with CETP/ZLD effluent treatment and EUDR deforestation-free geolocation traceability.",
      certificateNumberPlaceholder: "Scope: Crust & Finished Bovine/Ovine Hides · Validity: 24-Month LWG Audit Cycle · Partner Tannery URN & Chain-of-Custody Disclosed on Proforma Invoice"
    },
    {
      id: "reach",
      name: "EU & UK REACH Annex XVII Chemical Testing (DIN EN ISO 17075-1 / EN 1811)",
      issuedBy: "Tier 03 · Batch-Specific Accredited Lab Testing (SGS / Intertek / TÜV SÜD)",
      status: "Verified" as const,
      description: "Production lots of leather, linings, Fenice edge lacquers, and metal hardware are tested against EU Regulation (EC) No 1907/2006 (REACH Annex XVII): Chromium VI < 3.0 mg/kg (DIN EN ISO 17075-1:2017), banned Azo colorants < 30 mg/kg (EN ISO 17234-1:2020), and Nickel release < 0.50 µg/cm²/week (EN 1811:2023).",
      certificateNumberPlaceholder: "Scope: Per Production Dye Lot / Hardware Batch · Validity: 12 Months per Tested Material Lot · Redacted SGS/TÜV Sample Reports Available Below"
    },
    {
      id: "prop65",
      name: "US California Proposition 65 & CPSIA Safety Screening",
      issuedBy: "Tier 03 · Batch-Specific Accredited Lab Testing (SGS / Bureau Veritas)",
      status: "Verified" as const,
      description: "Total lead (< 90 ppm in surface coatings per 16 CFR 1303 / < 100 ppm in leather substrates per CPSC-CH-E1002-08.3), cadmium (< 75 ppm), and regulated ortho-phthalates (< 1,000 ppm per CPSC-CH-C1001-09.4) verified for North American shipments.",
      certificateNumberPlaceholder: "Scope: Finished Goods & Hardware Coating Lots · Validity: Per Production Batch / 12-Month Material Lot · MSDS & Lab Reports Supplied Prior to Dispatch"
    },
    {
      id: "iso",
      name: "ISO 2859-1 (AQL 2.5 Major / 4.0 Minor) Factory Quality Protocol",
      issuedBy: "Tier 01 · Unicon Leather Factory Quality Management System (Kolkata & Noida)",
      status: "Verified" as const,
      description: "In-house 4-stage Quality Control executed directly by Unicon Leather: (1) incoming digital hide gauge & rub check, (2) in-line 0.4mm Fortuna skiving & SPI verification, (3) 100% light-table finishing & needle-detection scan, and (4) final ISO 2859-1 (AQL 2.5 Major / 4.0 Minor) pre-shipment inspection.",
      certificateNumberPlaceholder: "Scope: 100% of Outbound Export Shipments · Validity: Continuous Factory Standard (2026–2027) · Signed AQL 2.5 Report & Moisture Log (< 14% RH) Issued Per PO"
    },
    {
      id: "smeta",
      name: "Open-Factory Social Compliance & Audit Policy (SEDEX SMETA / BSCI Aligned)",
      issuedBy: "Tier 01 · Unicon Leather Factory Governance (Plot 676, 687, 944, 1084, CLC Zone 09)",
      status: "Verified" as const,
      description: "Our Kolkata manufacturing units enforce zero child or forced labor, statutory living wages, ventilated water-based adhesive stations, PPE compliance, and fire-safety protocols aligned with SEDEX SMETA 4-Pillar and amfori BSCI workplace standards.",
      certificateNumberPlaceholder: "Scope: Cut-and-Sew & Finishing Ateliers · Audit Policy: Open-Door Access for Buyer-Appointed Inspectors (QIMA, SGS, Intertek, Bureau Veritas) with 48h Notice"
    },
    {
      id: "trade",
      name: "Government-Registered Indian Export House (DGFT IEC, CLE & Preferential Origin)",
      issuedBy: "Tier 01 · Unicon Leather Goods Export Pvt. Ltd. Corporate & Customs Credentials",
      status: "Verified" as const,
      description: "Incorporated Indian export entity (Unicon Leather Goods Export Private Limited) holding active DGFT Importer-Exporter Code (IEC), GST registration, and Council for Leather Exports (CLE) membership—authorized to issue EU REX statements, India–Australia ECTA (0% Duty), and India–UAE/Japan/Korea CEPA Certificates of Origin.",
      certificateNumberPlaceholder: "Scope: Direct Commercial Export (HS 4202 & 4203) · Status: Active Standing Registration (2012–2026+) · Full Customs Dossier Issued with Every Shipment"
    }
  ],

  // Socials / External links
  socials: {
    linkedin: "https://www.linkedin.com/in/satish-kumar-99950359/",
    youtube: "https://www.youtube.com/@uniconleather",
    instagram: "https://www.instagram.com/uniconindia/",
    facebook: "https://www.facebook.com/uniconexport",
    googleMaps: "https://www.google.com/maps/place/unicon+leather/@28.5355161,77.3910265,17z/data=!4m15!1m8!3m7!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!2sunicon+leather!8m2!3d28.5355161!4d77.3910265!10e1!16s%2Fg%2F11s2m08kwt!3m5!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!8m2!3d28.5355161!4d77.3910265!16s%2Fg%2F11s2m08kwt",
  },

  // Google Maps & Physical Facility Locations
  maps: {
    noida: {
      id: "noida",
      title: "Delhi NCR Corporate & Sourcing Office",
      shortTitle: "Noida Corporate Office",
      profileName: "unicon leather",
      city: "Noida, Uttar Pradesh",
      badge: "Corporate HQ",
      address: "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106, Noida, Uttar Pradesh 201304, India",
      mapUrl: "https://www.google.com/maps/place/unicon+leather/@28.5355161,77.3910265,17z/data=!4m15!1m8!3m7!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!2sunicon+leather!8m2!3d28.5355161!4d77.3910265!10e1!16s%2Fg%2F11s2m08kwt!3m5!1s0x390ce9dae241bcb1:0x9595b0070aeb9e6f!8m2!3d28.5355161!4d77.3910265!16s%2Fg%2F11s2m08kwt",
      searchUrl: "https://www.google.com/search?q=unicon+leather+noida+address&ludocid=10778714827475623535",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.5355161,77.3910265",
      embedUrl: "https://maps.google.com/maps?cid=10778714827475623535&output=embed",
      latitude: 28.5355161,
      longitude: 77.3910265,
      googleBusinessCid: "10778714827475623535",
      placeId: "0x390ce9dae241bcb1:0x9595b0070aeb9e6f",
      kgId: "/g/11s2m08kwt",
      visitingNotice: "Buyer consultations, design meetings & physical sample review by prior appointment.",
      proximity: "Near Noida Sector 101 Metro Station · 45 mins from Indira Gandhi International Airport (DEL) · Near upcoming Noida International Airport (DXN)",
    },
    kolkata: {
      id: "kolkata",
      title: "Manufacturing Atelier & Export Facility",
      shortTitle: "Kolkata Manufacturing Factory",
      city: "Kolkata, West Bengal",
      badge: "Manufacturing Hub",
      address: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex, Kolkata, West Bengal 743502, India",
      mapUrl: "https://maps.google.com/?q=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata+West+Bengal+743502",
      searchUrl: "https://www.google.com/search?q=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata+West+Bengal+743502",
      embedUrl: "https://maps.google.com/maps?q=Kolkata+Leather+Complex+Zone+09+Bantala+Kolkata+West+Bengal+743502&t=&z=14&ie=UTF8&iwloc=&output=embed",
      latitude: 22.5085,
      longitude: 88.4687,
      visitingNotice: "Full-scale OEM/ODM cutting, skiving, stitching, hardware assembly & international container dispatch.",
      proximity: "Situated in India's premier leather processing cluster · 35 mins from Netaji Subhash Chandra Bose International Airport (CCU) · Direct highway access to Kolkata Port (SMP)",
    },
  },
};

