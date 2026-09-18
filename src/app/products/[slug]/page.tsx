"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ShieldCheck,
  Download,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Package,
  Cpu
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { JsonLdScript, generateProductSchema } from "@/components/seo/JsonLdScript";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadingSpec, setDownloadingSpec] = useState(false);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.featured)
  ).slice(0, 4);

  const handleDownloadSpec = () => {
    setDownloadingSpec(true);
    setTimeout(() => {
      setDownloadingSpec(false);
      const specContent = `UNICON LEATHER - TECHNICAL SPECIFICATION SHEET
Product Name: ${product.name}
Product Code: ${product.id}
Category: ${product.category}
Leather Type: ${product.leatherType}
Tannage: ${product.tannage}
Dimensions: ${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} ${product.dimensions.unit}
Lining: ${product.lining}
Hardware: ${product.hardware}
MOQ: ${product.moq}
Sampling Lead Time: ${product.sampleLeadTime}
Production Lead Time: ${product.productionLeadTime}
Branding Options: ${product.brandingOptions.join(", ")}
Packaging: ${product.packagingOptions.join(", ")}

Key Technical Features:
${product.keyFeatures.map((f) => `- ${f}`).join("\n")}

Export Compliance: EU REACH Annex XVII & CA Prop 65 Verified.
Direct Inquiry: work@uniconleather.net | Secondary: ytheeapparel@gmail.com | WhatsApp / Phone: +91 9873102341`;

      const blob = new Blob([specContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${product.id}_${product.slug}_technical_spec.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 800);
  };

  return (
    <div className="w-full bg-white space-y-20 pb-24">
      <JsonLdScript schema={generateProductSchema(product)} />

      {/* Top Breadcrumbs */}
      <section className="bg-white border-b border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
          <Breadcrumbs
            items={[
              { label: "Catalogue", href: "/products" },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      {/* Main Product Showcase Section (Full Breadth) */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] bg-charcoal-50 rounded-none overflow-hidden border border-charcoal/10 shadow-sm">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} - Leather Goods Manufacturer India`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="charcoal" size="sm" className="font-mono text-white bg-black">
                  {product.id}
                </Badge>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-24 rounded-none overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? "border-cognac scale-95 shadow-md" : "border-charcoal/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Assurance Highlight Bar */}
            <div className="bg-charcoal-50 p-5 rounded-none border border-charcoal/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-charcoal">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cognac" />
                <span>AQL 2.5 Inspection</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cognac" />
                <span>Sample in {product.sampleLeadTime}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-cognac" />
                <span>REACH & Prop 65 Lab Pass</span>
              </div>
            </div>
          </div>

          {/* Product Overview & Specification Summary */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="cognac" size="sm">
                {product.category}
              </Badge>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal leading-tight tracking-tight">
                {product.name}
              </h1>
              <p className="text-xs font-mono text-charcoal-400">
                Specification SKU: {product.id}
              </p>
            </div>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
              {product.fullDescription}
            </p>

            {/* Fast Specification Grid */}
            <div className="bg-white p-7 rounded-none border border-charcoal/10 space-y-4 shadow-sm text-xs sm:text-sm">
              <h3 className="font-serif font-bold text-charcoal text-base pb-3 border-b border-charcoal/10 flex items-center justify-between">
                <span>Technical Specifications</span>
                <span className="text-[10px] text-cognac font-sans uppercase font-semibold">B2B Manufacturing</span>
              </h3>

              <div className="grid grid-cols-2 gap-y-3.5 gap-x-6">
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Primary Leather</span>
                  <span className="font-medium text-charcoal-900">{product.leatherType}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Tannage Method</span>
                  <span className="font-medium text-charcoal-900">{product.tannage}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Dimensions</span>
                  <span className="font-medium text-charcoal-900">
                    {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} {product.dimensions.unit}
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Lining Material</span>
                  <span className="font-medium text-charcoal-900">{product.lining}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Hardware Grade</span>
                  <span className="font-medium text-charcoal-900">{product.hardware}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Minimum Order (MOQ)</span>
                  <span className="font-semibold text-cognac">{product.moq}</span>
                </div>
              </div>

              {/* Colorways */}
              <div className="pt-3 border-t border-charcoal/10">
                <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider mb-2">Standard & Custom Colors</span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="bg-charcoal-50 border border-charcoal/10 text-xs px-2.5 py-1 rounded-none text-charcoal-800">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#inquire-now"
                className="w-full sm:flex-1 py-4 text-sm"
              >
                Inquire for Bulk Production
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadSpec}
                disabled={downloadingSpec}
                className="w-full sm:w-auto py-4 text-sm border-charcoal/30 text-charcoal hover:border-charcoal"
              >
                <Download className="w-4 h-4 mr-2" />
                {downloadingSpec ? "Generating..." : "Download Spec Sheet"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Engineering Features & Branding Options */}
      <section className="w-full bg-charcoal-50 py-20 border-y border-charcoal/10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-none border border-charcoal/10 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Key Craftsmanship Details
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-700">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-none border border-charcoal/10 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Private Label Branding Options
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-700">
                {product.brandingOptions.map((brand, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span>{brand}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-none border border-charcoal/10 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded bg-charcoal-50 flex items-center justify-center text-cognac border border-charcoal/10">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Export Packaging Standards
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-700">
                {product.packagingOptions.map((pack, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                    <span>{pack}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-filled Product RFQ Form */}
      <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16" id="inquire-now">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cognac" size="sm">
              Direct Product RFP
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              Request Wholesale Quote for {product.name}
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed font-light">
              Specify your target order volume, custom leather requests (e.g. Italian calf, veg-tan, custom color matching), or hardware branding. Our export desk will reply with a detailed pricing tier within 12–24 business hours.
            </p>

            <div className="bg-charcoal-50 p-6 rounded-none border border-charcoal/10 text-xs sm:text-sm space-y-3">
              <span className="font-bold text-charcoal block">Export Lead Times Summary:</span>
              <p className="text-charcoal-600">• Prototype Sample: {product.sampleLeadTime}</p>
              <p className="text-charcoal-600">• Batch Production: {product.productionLeadTime}</p>
              <p className="text-charcoal-600">• Shipping Incoterms: FOB, CIF, DDP Available</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BulkInquiryForm
              initialProduct={`${product.name} (SKU: ${product.id})`}
              initialCategory={product.category}
              inquiryType="bulk"
            />
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-8">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-serif text-3xl font-bold text-charcoal">
              Related Product Silhouettes
            </h3>
            <Button href="/products" variant="outline" size="sm" className="border-charcoal/30 text-charcoal hover:border-charcoal">
              View All Catalogue <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
