export interface NpdPanel {
  id: number;
  code: string;
  title: string;
  category: string;
  stage: string;
  image: string;
  href: string;
  badge?: string;
}

/**
 * 15 SQUARE PANELS FOR NEW PRODUCT DEVELOPMENT & PROTOTYPE LAB
 * 
 * TO UPDATE OR UPLOAD NEW IMAGES:
 * 1. Drop your new image into /public/images/npd/ (e.g. npd-01.jpg, npd-02.jpg ... npd-15.jpg)
 *    OR update the `image` path below to any image file or URL.
 * 2. Update the `title`, `category`, and `stage` as appropriate for your newest silhouette.
 */
export const NPD_PANELS: NpdPanel[] = [
  {
    id: 1,
    code: "NPD-01",
    title: "Sculpted Architectural Crossbody Bag",
    category: "Luxury Handbags",
    stage: "Golden Sample Approved",
    image: "/images/npd/npd-01.jpg",
    href: "/contact#rfp-form",
    badge: "New Release",
  },
  {
    id: 2,
    code: "NPD-02",
    title: "Minimalist Soft Hobo Shoulder Bag",
    category: "Casual Luxury",
    stage: "Pattern Refined",
    image: "/images/npd/npd-02.jpg",
    href: "/contact#rfp-form",
    badge: "Prototype",
  },
  {
    id: 3,
    code: "NPD-03",
    title: "Turned-Edge Calfskin Executive Folio",
    category: "Business Bags",
    stage: "Tooling Complete",
    image: "/images/npd/npd-03.jpg",
    href: "/contact#rfp-form",
    badge: "Tech Pack Ready",
  },
  {
    id: 4,
    code: "NPD-04",
    title: "Artisan Structured Saddle Flap Bag",
    category: "Designer Bags",
    stage: "Master Atelier Sample",
    image: "/images/npd/npd-04.jpg",
    href: "/contact#rfp-form",
    badge: "New Silhouette",
  },
  {
    id: 5,
    code: "NPD-05",
    title: "French Veau Grain Satchel Silhouette",
    category: "Day Satchels",
    stage: "Hardware Plating Verified",
    image: "/images/npd/npd-05.jpg",
    href: "/contact#rfp-form",
    badge: "Bespoke",
  },
  {
    id: 6,
    code: "NPD-06",
    title: "Double-Gusset Executive Laptop Bag",
    category: "Executive Gear",
    stage: "Pre-Production Run",
    image: "/images/npd/npd-06.jpg",
    href: "/contact#rfp-form",
    badge: "OEM Custom",
  },
  {
    id: 7,
    code: "NPD-07",
    title: "Heritage Hand-Burnished Doctor's Bag",
    category: "Heritage Line",
    stage: "Counter-Sample Sign-Off",
    image: "/images/npd/npd-07.jpg",
    href: "/contact#rfp-form",
    badge: "Patina Finish",
  },
  {
    id: 8,
    code: "NPD-08",
    title: "Seamless Feather-Edge Daily Tote",
    category: "Totes & Shoppers",
    stage: "Sample Approved",
    image: "/images/npd/npd-08.jpg",
    href: "/contact#rfp-form",
    badge: "Low MOQ 100",
  },
  {
    id: 9,
    code: "NPD-09",
    title: "Waxed Pull-Up Expedition Weekender",
    category: "Travel Gear",
    stage: "Tensile & Drop Tested",
    image: "/images/npd/npd-09.jpg",
    href: "/contact#rfp-form",
    badge: "Duffel Prototype",
  },
  {
    id: 10,
    code: "NPD-10",
    title: "Slim RFID-Shielded Bi-Fold Wallet",
    category: "Small Leather Goods",
    stage: "Batch Certified",
    image: "/images/npd/npd-10.jpg",
    href: "/contact#rfp-form",
    badge: "German RFID",
  },
  {
    id: 11,
    code: "NPD-11",
    title: "Global Compass Travel Passport Case",
    category: "Travel SLGs",
    stage: "Edge Lacquer Complete",
    image: "/images/npd/npd-11.jpg",
    href: "/contact#rfp-form",
    badge: "Turned Edge",
  },
  {
    id: 12,
    code: "NPD-12",
    title: "Sculpted Nappa Evening Handbag",
    category: "Evening Silhouettes",
    stage: "Mould Development",
    image: "/images/npd/npd-12.jpg",
    href: "/contact#rfp-form",
    badge: "Custom Mould",
  },
  {
    id: 13,
    code: "NPD-13",
    title: "Cognac Veg-Tan Everyday Carry Tote",
    category: "Sustainable Totes",
    stage: "LWG Gold Audited",
    image: "/images/npd/npd-13.jpg",
    href: "/contact#rfp-form",
    badge: "Pure Veg-Tan",
  },
  {
    id: 14,
    code: "NPD-14",
    title: "Artisan Commuter Flapover Messenger",
    category: "Urban Messengers",
    stage: "CAD Tech Pack Finalized",
    image: "/images/npd/npd-14.jpg",
    href: "/contact#rfp-form",
    badge: "Prototyping",
  },
  {
    id: 15,
    code: "NPD-15",
    title: "Executive Structured Heritage Briefcase",
    category: "Signature Briefcase",
    stage: "Master Pattern Approved",
    image: "/images/npd/npd-15.jpg",
    href: "/contact#rfp-form",
    badge: "Flagship NPD",
  },
];
