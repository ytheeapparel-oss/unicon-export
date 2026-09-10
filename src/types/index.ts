export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  leatherType: string;
  tannage: string;
  colors: string[];
  dimensions: {
    length: string;
    width: string;
    height: string;
    unit: string;
  };
  lining: string;
  hardware: string;
  brandingOptions: string[];
  packagingOptions: string[];
  moq: string;
  sampleLeadTime: string;
  productionLeadTime: string;
  customizationAvailable: boolean;
  keyFeatures: string[];
  specs: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export type ProductCategory =
  | "Leather Handbags"
  | "Tote Bags"
  | "Backpacks"
  | "Laptop & Business Bags"
  | "Travel & Duffel Bags"
  | "Wallets & Cardholders"
  | "Leather Belts"
  | "Leather Jackets & Apparel"
  | "Small Leather Goods"
  | "Corporate Gifts & Deskware"
  | "Custom Developed OEM/ODM"
  | "Heritage Leather Backpacks";

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  featuredProductCount: number;
}

export interface InquiryFormData {
  buyerName: string;
  companyName: string;
  businessEmail: string;
  phoneOrWhatsApp: string;
  country: string;
  companyWebsite?: string;
  productCategory: string;
  requiredQuantity: string;
  targetPriceRange?: string;
  expectedDeliveryDate?: string;
  customizationRequirements: string;
  message: string;
  consent: boolean;
  inquiryType?: 'bulk' | 'private-label' | 'sample' | 'general';
  productSlug?: string;
}

export interface CatalogueRequestFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  country: string;
  interests: string[];
  estimatedAnnualVolume: string;
  consent: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientRole: string;
  companyType: string;
  location: string;
  orderType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'manufacturing' | 'export' | 'samples' | 'pricing' | 'compliance';
}

export interface CertificationItem {
  id: string;
  name: string;
  issuedBy: string;
  status: 'Verified' | 'Partner Tannery' | 'Available Upon Request' | 'Placeholder';
  description: string;
  certificateNumberPlaceholder?: string;
}

export interface ExportMarket {
  region: string;
  countries: string[];
  transitTimeAir: string;
  transitTimeSea: string;
  popularProducts: string;
  incoterms: string[];
}
