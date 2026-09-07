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
      { label: "Leather Handbags", href: "/products?category=Leather+Handbags", description: "Luxury satchels & shoulder bags" },
      { label: "Tote Bags", href: "/products?category=Tote+Bags", description: "Structured & casual carryalls" },
      { label: "Backpacks", href: "/products?category=Backpacks", description: "Ergonomic commuter bags" },
      { label: "Laptop & Business Bags", href: "/products?category=Laptop+%26+Business+Bags", description: "Executive briefcases & folios" },
      { label: "Travel & Duffels", href: "/products?category=Travel+%26+Duffel+Bags", description: "Weekend weekender bags" },
      { label: "Wallets & Cardholders", href: "/products?category=Wallets+%26+Cardholders", description: "Slim RFID bifold & card sleeves" },
      { label: "Leather Belts", href: "/products?category=Leather+Belts", description: "Feather-edge & casual belts" },
      { label: "Leather Jackets", href: "/products?category=Leather+Jackets+%26+Apparel", description: "Tailored lambskin outerwear" },
      { label: "Small Leather Goods", href: "/products?category=Small+Leather+Goods", description: "Passport folios & key fobs" },
      { label: "Corporate Gifts", href: "/products?category=Corporate+Gifts+%26+Deskware", description: "Desk pads & executive gift sets" },
      { label: "Custom OEM/ODM", href: "/private-label", description: "Bespoke contract manufacturing" },
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
    label: "Quality & Compliance",
    href: "/compliance"
  },
  {
    label: "Contact & Inquiries",
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
    { label: "Leather Handbags", href: "/products?category=Leather+Handbags" },
    { label: "Tote Bags", href: "/products?category=Tote+Bags" },
    { label: "Wallets & Cardholders", href: "/products?category=Wallets+%26+Cardholders" },
    { label: "Executive Laptop Bags", href: "/products?category=Laptop+%26+Business+Bags" },
    { label: "Weekend Duffel Bags", href: "/products?category=Travel+%26+Duffel+Bags" },
    { label: "Leather Belts & Accessories", href: "/products?category=Leather+Belts" },
  ],
  trade: [
    { label: "International Export Capabilities", href: "/export" },
    { label: "Supported Incoterms (FOB, CIF, DDP)", href: "/export#incoterms" },
    { label: "Quality Inspection & AQL 2.5", href: "/compliance" },
    { label: "EU REACH & Prop 65 Compliance", href: "/compliance#testing" },
    { label: "Responsible Tannery Standards", href: "/sustainability" },
    { label: "Buyer FAQ & Ordering Guide", href: "/contact#faqs" },
  ],
  company: [
    { label: "About Unicon Leather", href: "/about" },
    { label: "Factory Infrastructure", href: "/about#infrastructure" },
    { label: "Global Markets Served", href: "/export#markets" },
    { label: "Contact Export Desk", href: "/contact" },
    { label: "Direct WhatsApp Line", href: "https://wa.me/919999999999" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ]
};
