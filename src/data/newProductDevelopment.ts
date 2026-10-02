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
    title: "Hair-On Cowhide & Crimson Leather Saddle Bag",
    category: "Luxury Crossbody",
    stage: "Golden Sample Approved",
    image: "/images/npd/npd-01.jpg",
    href: "/contact#rfp-form",
    badge: "New Prototype",
  },
  {
    id: 2,
    code: "NPD-02",
    title: "Vintage Sand Suede Multi-Pocket Utility Shoulder Bag",
    category: "Utility Messengers",
    stage: "Master Pattern Approved",
    image: "/images/npd/npd-02.jpg",
    href: "/contact#rfp-form",
    badge: "Field Spec Ready",
  },
  {
    id: 3,
    code: "NPD-03",
    title: "Striped Hair-On Hide Flap Red Leather Crossbody",
    category: "Artisan Handbags",
    stage: "Hardware Cast Sign-Off",
    image: "/images/npd/npd-03.jpg",
    href: "/contact#rfp-form",
    badge: "Pre-Production",
  },
  {
    id: 4,
    code: "NPD-04",
    title: "Distressed Suede Double-Pocket Utility Shoulder Tote",
    category: "Rugged Suede Bags",
    stage: "Tooling & Stitch Sign-Off",
    image: "/images/npd/npd-04.jpg",
    href: "/contact#rfp-form",
    badge: "New Silhouette",
  },
  {
    id: 5,
    code: "NPD-05",
    title: "Western Hair-On Cowhide Belt with Engraved Silver Buckle",
    category: "Artisan Belts & SLG",
    stage: "Custom Mould Complete",
    image: "/images/npd/npd-05.jpg",
    href: "/contact#rfp-form",
    badge: "Bespoke Hardware",
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
    title: "Winged Origami Leather Tote — Atelier Flat Lay",
    category: "Geometric Totes",
    stage: "Tech Pack Calibrated",
    image: "/images/npd/npd-10.jpg",
    href: "/contact#rfp-form",
    badge: "Atelier Spec",
  },
  {
    id: 11,
    code: "NPD-11",
    title: "Cerulean Blue Sculpted Leather Carryall Tote",
    category: "Luxury Shoppers",
    stage: "Runway Sample Sign-Off",
    image: "/images/npd/npd-11.jpg",
    href: "/contact#rfp-form",
    badge: "New Silhouette",
  },
  {
    id: 12,
    code: "NPD-12",
    title: "Draped Strap Soft-Structure Shoulder Tote",
    category: "Everyday Luxury",
    stage: "Ergonomic Fit Tested",
    image: "/images/npd/npd-12.jpg",
    href: "/contact#rfp-form",
    badge: "Pre-Production",
  },
  {
    id: 13,
    code: "NPD-13",
    title: "Seamless Curved-Edge Leather Day Tote",
    category: "Architectural Bags",
    stage: "Master Proportion Approved",
    image: "/images/npd/npd-13.jpg",
    href: "/contact#rfp-form",
    badge: "Sample Approved",
  },
  {
    id: 14,
    code: "NPD-14",
    title: "Cognac Pebbled Calfskin Minimalist Shoulder Bag",
    category: "Artisan Shoulder Bags",
    stage: "Grain & Temper Certified",
    image: "/images/npd/npd-14.jpg",
    href: "/contact#rfp-form",
    badge: "Full-Grain Veg-Tan",
  },
  {
    id: 15,
    code: "NPD-15",
    title: "Precision Caliper & Hand-Turned Knot Specimen",
    category: "Prototyping Lab",
    stage: "Caliper Tolerance Verified",
    image: "/images/npd/npd-15.jpg",
    href: "/contact#rfp-form",
    badge: "Artisan Lab",
  },
];
