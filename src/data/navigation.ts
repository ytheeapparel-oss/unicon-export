export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Catalogue",
    href: "/products",
    children: [
      { label: "All Products", href: "/products", description: "View our comprehensive export catalog" },
      { label: "Leather Handbags", href: "/products/leather-handbags", description: "Luxury satchels & shoulder bags" },
      { label: "Tote Bags", href: "/products/tote-bags", description: "Structured & casual carryalls" },
      { label: "Backpacks", href: "/products/backpacks", description: "Ergonomic commuter bags" },
      { label: "Laptop & Business Bags", href: "/products/laptop-and-business-bags", description: "Executive briefcases & folios" },
      { label: "Travel & Duffels", href: "/products/travel-bags", description: "Weekend weekender bags" },
      { label: "Wallets & Cardholders", href: "/products/wallets-and-cardholders", description: "Slim RFID bifold & card sleeves" },
      { label: "Leather Belts", href: "/products/leather-belts", description: "Feather-edge & casual belts" },
      { label: "Leather Jackets", href: "/products/leather-jackets", description: "Tailored lambskin outerwear" },
      { label: "Designer Jacquard Totes", href: "/products/designer-jacquard-totes", description: "Houndstooth & woven carryalls" },
      { label: "Artisan Duffels", href: "/products/artisan-travel-duffels", description: "Full-grain olive weekender bags" },
      { label: "Croc-Embossed Briefcases", href: "/products/croc-embossed-briefcases", description: "Luxury emerald executive cases" },
      { label: "Heritage Backpacks", href: "/products/heritage-backpacks", description: "Two-tone saddle leather rucksacks" },
    ]
  },
  {
    label: "Private Label & OEM",
    href: "/private-label"
  },
  {
    label: "Craftsmanship",
    href: "/craftsmanship"
  },
  {
    label: "Sustainability",
    href: "/sustainability"
  },
  {
    label: "Global Export",
    href: "/export"
  },
  {
    label: "Compliance",
    href: "/compliance"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

export const FOOTER_NAV = {
  manufacturing: [
    { label: "Private Label & OEM Services", href: "/private-label" },
    { label: "Atelier Craftsmanship", href: "/craftsmanship" },
    { label: "Material Sourcing & Tannages", href: "/craftsmanship#materials" },
    { label: "Hardware & Custom Moulds", href: "/private-label#hardware" },
    { label: "Sample Development & Prototyping", href: "/private-label#sampling" },
    { label: "Request Product Catalogue", href: "/catalogue-request" },
  ],
  products: [
    { label: "Leather Handbags", href: "/products/leather-handbags" },
    { label: "Tote Bags & Shoppers", href: "/products/tote-bags" },
    { label: "Executive Laptop & Business Bags", href: "/products/laptop-and-business-bags" },
    { label: "Commuter & Heritage Backpacks", href: "/products/backpacks" },
    { label: "Travel & Weekender Duffels", href: "/products/travel-bags" },
    { label: "Wallets, Cardholders & Belts", href: "/products/wallets-and-cardholders" },
    { label: "Designer Jacquard & Fabric Totes", href: "/products/designer-jacquard-totes" },
    { label: "Croc-Embossed Briefcases", href: "/products/croc-embossed-briefcases" },
    { label: "Explore All 12 Lines →", href: "/products" },
  ],
  trade: [
    { label: "Global Export Direct (FOB, CIF, DDP)", href: "/export" },
    { label: "Supported Incoterms & Sea Ports", href: "/export#incoterms" },
    { label: "Quality Inspection & AQL 2.5", href: "/compliance" },
    { label: "EU REACH & Prop 65 Compliance", href: "/compliance#testing" },
    { label: "Responsible Tannery Standards", href: "/sustainability" },
    { label: "Buyer FAQ & Ordering Guide", href: "/contact#faqs" },
  ],
  company: [
    { label: "About Unicon Leather", href: "/about" },
    { label: "Factory Infrastructure", href: "/about#infrastructure" },
    { label: "Global Markets Served", href: "/export#markets" },
    { label: "Sustainability & Eco-Tannage", href: "/sustainability" },
    { label: "Contact Export Desk", href: "/contact" },
    { label: "Direct WhatsApp Line", href: "https://wa.me/919873102341" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ]
};
