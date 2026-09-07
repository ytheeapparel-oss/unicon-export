import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "UL-HB-101",
    slug: "atelier-structured-leather-tote",
    name: "The Atelier Structured Tote",
    category: "Tote Bags",
    categorySlug: "tote-bags",
    shortDescription: "Full-grain vegetable-tanned bovine leather tote with reinforced rolled handles and magnetic bridge closure.",
    fullDescription: "Engineered specifically for high-end retail brands requiring structural permanence and natural aging characteristics. Handcrafted from 1.6–1.8mm semi-vegetable tanned cowhide with hand-painted raw edge finishes. Internal zippered pocket and detachable key lanyard included. Fully customizable in leather grain, hardware finish, and dimensions.",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Full-Grain Semi-Vegetable Tanned Bovine Leather (1.6mm – 1.8mm)",
    tannage: "Eco-Conscious LWG Tannery Certified Veg-Tan / Chrome-Free",
    colors: ["Cognac Brown", "Espresso Black", "Warm Sand Beige", "British Racing Green", "Custom Pantone Match"],
    dimensions: {
      length: "38",
      width: "14",
      height: "32",
      unit: "cm"
    },
    lining: "10oz Heavy-Duty Organic Cotton Twill / Optional Pig Suede",
    hardware: "Solid Brass with Anti-Tarnish Coating (Light Gold / Antique Brass / Shiny Nickel)",
    brandingOptions: ["Blind Heat Debossing", "Metallic Gold / Silver Foil Stamp", "Custom Metal Logo Plate", "Woven Jacquard Internal Label"],
    packagingOptions: ["Organic Cotton Drawstring Dustbag", "Custom Branded Rigid Gift Box", "Export Master Carton (200 GSM 5-Ply Corrugated)"],
    moq: "100 units per colorway (Flexible trial batch for new brand launches)",
    sampleLeadTime: "7 to 10 working days",
    productionLeadTime: "30 to 40 days upon pre-production sample sign-off",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "Reinforced base with 5 solid brass protective floor studs",
      "Hand-burnished multi-layer Italian edge paint (Fenice / Giardini)",
      "Continuous leather shoulder strap with 24cm drop clearance",
      "Internal 13-inch laptop slip pocket + zippered security compartment",
      "Stress points reinforced with concealed nylon webbing and bar-tack stitching"
    ],
    specs: [
      { label: "Product Code", value: "UL-HB-101" },
      { label: "Primary Material", value: "Full-Grain Cowhide (Grade A)" },
      { label: "Weight", value: "850 grams" },
      { label: "Closure", value: "Magnetic Japanese Snap Bridge" },
      { label: "Stitching", value: "Bonded Nylon Thread (Tex 70 / Metric 40)" },
      { label: "Compliance", value: "EU REACH & CA Prop 65 Verified" }
    ]
  },
  {
    id: "UL-HB-204",
    slug: "monaco-curved-satchel-handbag",
    name: "The Monaco Curved Luxury Satchel",
    category: "Leather Handbags",
    categorySlug: "leather-handbags",
    shortDescription: "Sculptural top-handle handbag crafted from supple Italian calf nappa with detachable shoulder strap.",
    fullDescription: "A sophisticated showcase of precision leather moulding and curved edge skiving. Featuring a signature arched handle, magnetic foldover flap, and brushed champagne gold lock hardware. Designed for luxury boutique brands and designer labels seeking flawless stitching and premium hand-feel.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Premium Milled Calf Nappa / Smooth Box Calf Option",
    tannage: "Mineral Tannage with Aniline Finish",
    colors: ["Tuscan Tan", "Midnight Black", "Burgundy Cherry", "Ivory Cream", "Olive Drab"],
    dimensions: {
      length: "26",
      width: "9",
      height: "20",
      unit: "cm"
    },
    lining: "Ultra-Microfiber Suede Lining (Stain resistant & velvety soft)",
    hardware: "Die-Cast Zinc Alloy with 24k Gold Electroplating (PVD Vacuum Coated)",
    brandingOptions: ["Laser-Etched Hardware Lock", "Micro-Foil Stamping (3mm)", "Interior Leather Heat Stamp Badge"],
    packagingOptions: ["Flannel Luxury Dustbag", "Embossed Hardcover Presentation Box"],
    moq: "100 units per colorway",
    sampleLeadTime: "10 to 12 working days",
    productionLeadTime: "35 to 45 days",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "Signature hand-wrapped leather tubular top handle",
      "Concealed magnetic front closure with tactile snap feedback",
      "Dual interior gusset compartments with center zip pocket",
      "Adjustable and detachable 18mm calfskin shoulder strap"
    ],
    specs: [
      { label: "Product Code", value: "UL-HB-204" },
      { label: "Handle Drop", value: "9.5 cm" },
      { label: "Strap Length", value: "105 cm – 120 cm (Adjustable)" },
      { label: "Edge Finish", value: "Hand-sanded 4-coat matte edge lacquer" },
      { label: "Export Ready", value: "USA, UK, EU, UAE, Japan" }
    ]
  },
  {
    id: "UL-WL-302",
    slug: "heritage-slim-bifold-wallet",
    name: "The Heritage Minimalist Bifold Wallet",
    category: "Wallets & Cardholders",
    categorySlug: "wallets-and-cardholders",
    shortDescription: "Ultra-slim French-creased bifold wallet with 8 card slots and full-length banknote compartment.",
    fullDescription: "Engineered with ultra-thin 0.5mm skived leather linings to maintain a flat 8mm profile even when fully loaded. Handcrafted with turned French edges, heat-creased borders, and certified RFID blocking membrane embedded invisibly between the leather layers. Ideal for high-volume menswear labels and private-label gift lines.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Full-Grain Waxed Pull-Up Cowhide / Smooth Buttero Style Calf",
    tannage: "Pure Vegetable Tanned (Will develop rich patina with use)",
    colors: ["Rich Cognac", "Vintage Oak Brown", "Pitch Black", "Navy Indigo"],
    dimensions: {
      length: "11",
      width: "1.2",
      height: "9",
      unit: "cm"
    },
    lining: "Matching Thin Calfskin + High-Density Micro-Twill Currency Slot",
    hardware: "None / Optional Custom Metal Corner Clips",
    brandingOptions: ["Deep Blind Deboss on Front Corner", "Interior Logo Stamp", "Custom Foil Gift Box"],
    packagingOptions: ["Two-Piece Rigid Presentation Box", "Biodegradable Kraft Paper Sleeve"],
    moq: "200 units per colorway (500 total across 2-3 colors)",
    sampleLeadTime: "5 to 7 working days",
    productionLeadTime: "25 to 35 days",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "8 dedicated quick-access card slots with hand-creased edges",
      "2 hidden slip pockets for international currency or cards",
      "Embedded military-grade Faraday RFID blocking fabric",
      "0.4mm micro-skived profile preventing pocket bulge"
    ],
    specs: [
      { label: "Product Code", value: "UL-WL-302" },
      { label: "Empty Weight", value: "58 grams" },
      { label: "Thickness (Empty)", value: "8.5 mm" },
      { label: "RFID Shielding", value: "13.56 MHz frequency protection" }
    ]
  },
  {
    id: "UL-BP-405",
    slug: "nordic-commuter-leather-backpack",
    name: "The Executive Commuter Leather Backpack",
    category: "Backpacks",
    categorySlug: "backpacks",
    shortDescription: "Ergonomic executive backpack with padded 16-inch laptop chamber, trolley sleeve, and weather-resistant finish.",
    fullDescription: "A flagship silhouette combining business sophistication with commuter functionality. Features contoured ergonomic shoulder straps reinforced with high-density EVA foam and breathable mesh backing. Includes a dedicated padded compartment for 16-inch MacBooks, passport security pocket, and premium waterproof coil zippers.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Full-Grain Drum-Dyed Waxed Cowhide (Water Repellent)",
    tannage: "Chrome-Free Eco Tannage",
    colors: ["Matte Charcoal Black", "Tobacco Cognac", "Espresso Dark Brown"],
    dimensions: {
      length: "31",
      width: "15",
      height: "43",
      unit: "cm"
    },
    lining: "Water-Resistant Ripstop Nylon (420D) / Custom Printed Lining",
    hardware: "Gunmetal Finished Zinc Hardware with YKK Excella Zippers",
    brandingOptions: ["Front Leather Debossed Patch", "Metal Zipper Pull Engraving", "Interior Brand Story Plate"],
    packagingOptions: ["Heavy Non-Woven Dustbag", "Reinforced Export Shipping Box"],
    moq: "100 units per colorway",
    sampleLeadTime: "10 to 14 working days",
    productionLeadTime: "35 to 45 days",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "Dedicated shock-absorbing cradle for 15.6” – 16” laptops",
      "Rear luggage pass-through sleeve for rolling suitcases",
      "Hidden anti-theft zipper pocket on lumbar back panel",
      "Top quick-access magnetic pocket for sunglasses and earbuds"
    ],
    specs: [
      { label: "Product Code", value: "UL-BP-405" },
      { label: "Capacity", value: "19 Litres" },
      { label: "Weight", value: "1,250 grams" },
      { label: "Laptop Compatibility", value: "Up to 16-inch MacBook Pro" }
    ]
  },
  {
    id: "UL-BB-501",
    slug: "soho-executive-leather-briefcase",
    name: "The Soho Executive Business Briefcase",
    category: "Laptop & Business Bags",
    categorySlug: "laptop-and-business-bags",
    shortDescription: "Structured slimline business briefcase with double gusset, laptop sleeve, and brass combination lock.",
    fullDescription: "Constructed for corporate executives, legal professionals, and luxury retailers. Features hand-stitched rigid top handles, solid brass German-style turn locks, dual main compartments, and an organized organizer panel for pens, cards, and cords.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Bridle Leather / Firm Full-Grain Vegetable Tanned Cowhide",
    tannage: "Traditional Bark Tannage with Wax Emulsion",
    colors: ["Dark Espresso", "British Tan", "Classic Black"],
    dimensions: {
      length: "41",
      width: "10",
      height: "30",
      unit: "cm"
    },
    lining: "Pigskin Leather or Heavyweight Cotton Sateen",
    hardware: "Solid Polished Brass with Precision Key Lock Mechanism",
    brandingOptions: ["Internal Laser-Numbered Leather Crest", "Custom Lock Engraving", "Blind Deboss"],
    packagingOptions: ["Embossed Cotton Dust Cover", "Rigid Presentation Packaging"],
    moq: "80 units per colorway",
    sampleLeadTime: "10 to 14 working days",
    productionLeadTime: "40 days",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "Double reinforced internal gussets with organizer partitions",
      "Solid cast brass hardware engineered for 50,000+ opening cycles",
      "Removable 38mm leather shoulder strap with sliding shoulder pad",
      "Rigid frame construction retaining sharp silhouette indefinitely"
    ],
    specs: [
      { label: "Product Code", value: "UL-BB-501" },
      { label: "Laptop Size", value: "Fits up to 15.6 inch" },
      { label: "Leather Thickness", value: "2.0 mm - 2.2 mm" },
      { label: "Lock Type", value: "Solid Brass Key Lock" }
    ]
  },
  {
    id: "UL-TR-601",
    slug: "grand-tour-leather-duffel-weekender",
    name: "The Grand Tour Leather Weekender Duffel",
    category: "Travel & Duffel Bags",
    categorySlug: "travel-bags",
    shortDescription: "Cabin-sized weekend travel duffel with full-length clamshell opening and separated shoe compartment.",
    fullDescription: "Engineered to satisfy IATA international cabin overhead luggage guidelines. Made from supple yet rugged full-grain pull-up leather that develops rich vintage character with every journey. Features heavy-gauge brass dual-sliders, side shoe chamber with ventilating eyelets, and reinforced wrap-around leather handles.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Oiled Pull-Up Bovine Leather (1.8mm thickness)",
    tannage: "Chrome-Free Drum Dyed with Natural Waxes",
    colors: ["Vintage Cognac", "Deep Mahogany", "Midnight Black"],
    dimensions: {
      length: "52",
      width: "26",
      height: "29",
      unit: "cm"
    },
    lining: "Heavyweight 12oz Water-Repellent Duck Canvas",
    hardware: "Antique Brass Hardware & Heavy Duty #10 YKK Brass Zippers",
    brandingOptions: ["Luggage Tag Embossing", "Exterior Leather Patch Stamp", "Metal Rivet Debossing"],
    packagingOptions: ["Heavy Canvas Storage Bag", "Export Corrugated Master Box"],
    moq: "80 units per colorway",
    sampleLeadTime: "10 to 12 working days",
    productionLeadTime: "35 to 45 days",
    customizationAvailable: true,
    featured: false,
    keyFeatures: [
      "Separate zipped side compartment for footwear or laundry",
      "Full wrap-around leather straps distributing load weight across the bottom",
      "6 solid brass bottom feet protecting leather from wet tarmac and floors",
      "Includes detachable leather luggage tag with privacy flap"
    ],
    specs: [
      { label: "Product Code", value: "UL-TR-601" },
      { label: "Volume Capacity", value: "42 Litres" },
      { label: "Airline Compliance", value: "Meets TSA & IATA carry-on criteria" },
      { label: "Weight", value: "1,680 grams" }
    ]
  },
  {
    id: "UL-BL-701",
    slug: "artisan-feather-edge-dress-belt",
    name: "The Artisan Feather-Edge Dress Belt",
    category: "Leather Belts",
    categorySlug: "leather-belts",
    shortDescription: "Hand-finished 35mm dress belt with feathered edge bevel, Italian nubuck lining, and solid brass buckle.",
    fullDescription: "Constructed with a triple-layer profile: full-grain Italian box calf face, resilient leather center core stiffener, and breathable velvety nubuck leather lining. Featuring hand-sewn buckle attachment, hand-creased border lines, and polished bevelled edges.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Full-Grain French Calfskin (Face) + Italian Cow Nubuck (Backing)",
    tannage: "Vegetable Tanned",
    colors: ["Classic Black", "Havana Brown", "Cognac Tan", "Burgundy"],
    dimensions: {
      length: "85 to 120 (Custom sizing)",
      width: "3.5",
      height: "0.4",
      unit: "cm"
    },
    lining: "Genuine Velvety Cow Nubuck Lining",
    hardware: "Solid Cast Brass with Satin Palladium or Antique Brass Finish",
    brandingOptions: ["Back Lining Silver Foil Size & Logo Stamp", "Buckle Laser Etching"],
    packagingOptions: ["Custom Branded Belt Drawer Box", "Cotton Pouch"],
    moq: "200 pcs (Assorted standard sizes 32” – 44”)",
    sampleLeadTime: "5 to 7 working days",
    productionLeadTime: "25 to 35 days",
    customizationAvailable: true,
    featured: false,
    keyFeatures: [
      "Subtle feathered dome profile tapering elegantly to the edges",
      "Solid nickel-free hypo-allergenic Italian brass buckle",
      "5 oval sizing holes with 1-inch pitch for precise fit",
      "Dual matching leather keepers (one fixed, one sliding)"
    ],
    specs: [
      { label: "Product Code", value: "UL-BL-701" },
      { label: "Width", value: "35 mm (30mm and 40mm options available)" },
      { label: "Hole Spacing", value: "2.54 cm standard interval" },
      { label: "Standard Sizes", value: "30, 32, 34, 36, 38, 40, 42, 44 inches" }
    ]
  },
  {
    id: "UL-JK-801",
    slug: "savile-lambskin-racer-leather-jacket",
    name: "The Savile Cafe Racer Leather Jacket",
    category: "Leather Jackets & Apparel",
    categorySlug: "leather-jackets",
    shortDescription: "Tailored cafe racer biker jacket crafted from ultra-soft 0.8mm New Zealand lamb nappa.",
    fullDescription: "Engineered for luxury fashion apparel brands requiring immaculate drape and bespoke tailoring. Made from hand-selected 0.8mm lightweight lambskin with a silky natural hand feel. Equipped with symmetrical zippered chest pockets, snap tab mandarin collar, zippered sleeve gussets, and heavy Japanese YKK antique brass zippers.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Plonge Lambskin Nappa (0.8mm – 0.9mm thickness)",
    tannage: "Chrome / Semi-Veg Soft Drum Tumble Finish",
    colors: ["Obsidian Black", "Distressed Tobacco", "Deep Oxblood"],
    dimensions: {
      length: "XS to 3XL (Custom sizing available)",
      width: "Standard European / US Slim Fit",
      height: "65",
      unit: "cm"
    },
    lining: "Heavy Cupro/Satin Twill with Quilted Thermal Inserts Option",
    hardware: "YKK #8 Heavy Duty Metal Zippers in Antique Brass or Matte Silver",
    brandingOptions: ["Woven Main Neck Label", "Leather Hanger Loop with Heat Emboss", "Custom Metal Snaps"],
    packagingOptions: ["Garment Bag with Wooden Coat Hanger", "Individual Export Polybag & Master Carton"],
    moq: "50 pcs per style (Can be split across standard sizing curve S–XXL)",
    sampleLeadTime: "12 to 15 working days",
    productionLeadTime: "40 to 50 days",
    customizationAvailable: true,
    featured: false,
    keyFeatures: [
      "Articulated gusset sleeves allowing complete arm articulation",
      "Two internal buttoned jet pockets for passport and wallet",
      "Mandarin collar with twin branded brass snap buttons",
      "Flawless panel matching across grain and dye saturation"
    ],
    specs: [
      { label: "Product Code", value: "UL-JK-801" },
      { label: "Leather Origin", value: "Grade-A Lambskin" },
      { label: "Zipper Hardware", value: "Japanese YKK Industrial Grade" },
      { label: "Sizing Curve", value: "EU 46 to 56 / US 36 to 46" }
    ]
  },
  {
    id: "UL-SG-901",
    slug: "bespoke-travel-passport-folio",
    name: "The Bespoke International Passport Folio",
    category: "Small Leather Goods",
    categorySlug: "small-leather-goods",
    shortDescription: "Refined travel passport wallet with boarding pass pocket, SIM card slot, and pen holder loop.",
    fullDescription: "The quintessential travel companion for private-label lifestyle brands. Features slots for two passports, four credit cards, frequent-flyer cards, travel currency, SIM cards, and an integrated micro-pen loop. Fully RFID shielded.",
    images: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Top-Grain Saffiano Leather / Smooth Veg Calf Option",
    tannage: "Cross-Hatch Scratch-Resistant Pressed Leather",
    colors: ["Navy Blue", "Cognac Brown", "Forest Green", "Onyx Black"],
    dimensions: {
      length: "14.5",
      width: "1.2",
      height: "10.5",
      unit: "cm"
    },
    lining: "Moire Silk / Cotton Twill Lining",
    hardware: "Optional Concealed Magnetic Flap or Snap",
    brandingOptions: ["Gold Foil Monogramming", "Blind Heat Debossing"],
    packagingOptions: ["Hardcover Gift Box with Velvet Ribbon Pull"],
    moq: "200 units per colorway",
    sampleLeadTime: "5 to 7 working days",
    productionLeadTime: "25 to 30 days",
    customizationAvailable: true,
    featured: false,
    keyFeatures: [
      "Scratch-resistant Saffiano finish ideal for rough travel conditions",
      "Deep boarding pass fold that prevents tickets from creasing",
      "Micro SIM card and ejector pin slot for overseas connectivity",
      "Tested RFID blocking protection against unauthorized digital scanning"
    ],
    specs: [
      { label: "Product Code", value: "UL-SG-901" },
      { label: "Weight", value: "72 grams" },
      { label: "Card Capacity", value: "4-6 cards + 2 passports" },
      { label: "Stitching", value: "0.45mm French Linen Fil Au Chinois Style" }
    ]
  },
  {
    id: "UL-CG-1001",
    slug: "executive-leather-desk-mat-valet-set",
    name: "The Executive Leather Desk Mat & Valet Set",
    category: "Corporate Gifts & Deskware",
    categorySlug: "corporate-gifts",
    shortDescription: "Luxury 80x40cm full-grain leather desk pad and matching collapsible snap valet tray.",
    fullDescription: "Designed for corporate gifting distributors, luxury automobile brands, and executive gift programs. Crafted with a thick full-grain bovine leather writing surface backed with non-slip natural suede. The matching valet tray features corner snaps that fold flat for seamless business travel.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Full-Grain Oiled Bovine Leather with Natural Pull-Up",
    tannage: "Vegetable Tanned",
    colors: ["Warm Tan", "Espresso Brown", "Slate Charcoal"],
    dimensions: {
      length: "80",
      width: "40",
      height: "0.4",
      unit: "cm"
    },
    lining: "Anti-Slip Ultra-Suede / Natural Wool Felt Backing",
    hardware: "Solid Brass Corner Snaps on Valet Tray",
    brandingOptions: ["Corporate Logo Blind Debossing", "Laser Engraved Metal Plaque on Packaging"],
    packagingOptions: ["Cylindrical Kraft Gift Tube with Leather Carry Handle"],
    moq: "100 sets",
    sampleLeadTime: "5 to 7 working days",
    productionLeadTime: "25 to 30 days",
    customizationAvailable: true,
    featured: false,
    keyFeatures: [
      "Smooth glide surface calibrated for optical mouse tracking and fountain pen writing",
      "Water-resistant wax coating protecting against accidental coffee or beverage spills",
      "Matching valet tray for keys, watches, cufflinks, and smartphone",
      "Hand-sewn perimeter border preventing edge delamination"
    ],
    specs: [
      { label: "Product Code", value: "UL-CG-1001" },
      { label: "Desk Pad Dimensions", value: "80 cm x 40 cm x 4 mm" },
      { label: "Valet Dimensions", value: "18 cm x 18 cm x 4 cm (Folded)" },
      { label: "Custom Sizing", value: "Custom rectangular or L-shape mats available" }
    ]
  },
  {
    id: "UL-OEM-1101",
    slug: "custom-developed-oem-brand-service",
    name: "Custom OEM/ODM Private Label Development",
    category: "Custom Developed OEM/ODM",
    categorySlug: "custom-developed-oem-odm",
    shortDescription: "End-to-end bespoke product design, material sourcing, prototype sampling, and mass manufacturing.",
    fullDescription: "Our signature service for fashion houses, department stores, and emerging luxury labels looking to launch exclusive proprietary silhouettes. Send us your CAD sketches, moodboards, or physical reference samples. Our engineering and master artisan team will develop digital pattern files, formulate bespoke tannery colors, fabricate custom hardware moulds, and manage export shipping.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    ],
    leatherType: "Any Certified Leather (Calfskin, Cowhide, Lambskin, Buffalo, Exotic Embossed)",
    tannage: "Custom Formulated (Veg-Tan, Chrome-Free, Waterproof, Mineral)",
    colors: ["100% Custom Pantone Matching System (PMS) Dyeing"],
    dimensions: {
      length: "Custom Specification",
      width: "Custom Specification",
      height: "Custom Specification",
      unit: "cm / inches"
    },
    lining: "Bespoke Jacquard, Organic Cotton, Twill, Micro-Suede, Silk",
    hardware: "Custom 3D CNC Moulded Hardware (Zinc, Brass, Stainless Steel)",
    brandingOptions: ["Custom Laser, Cast, Deboss, Silkscreen, Embroidery, Enamel Inlay"],
    packagingOptions: ["100% Bespoke Luxury Retail Packaging with Barcode & Hangtag Application"],
    moq: "100–300 units depending on complexity and hardware moulds",
    sampleLeadTime: "10 to 14 business days from 2D/3D Tech Pack sign-off",
    productionLeadTime: "30 to 45 days post sample approval",
    customizationAvailable: true,
    featured: true,
    keyFeatures: [
      "Comprehensive Non-Disclosure Agreement (NDA) protection for client designs",
      "Dedicated senior sampling master assigned to your brand collection",
      "Pre-production physical counter-samples shipped via DHL Express",
      "Transparent AQL 2.5 final inspection report provided prior to freight dispatch"
    ],
    specs: [
      { label: "Service Code", value: "UL-OEM-1101" },
      { label: "Development Support", value: "Pattern drafting, 3D render preview, tech pack creation" },
      { label: "Hardware Sourcing", value: "Custom tool & die moulding available" },
      { label: "Export Documentation", value: "Certificate of Origin, Bill of Lading, Fumigation, Commercial Invoice" }
    ]
  }
];
