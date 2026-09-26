"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Send, UploadCloud, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { InquiryFormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { supabase } from "@/lib/supabase";

interface BulkInquiryFormProps {
  initialProduct?: string;
  initialCategory?: string;
  inquiryType?: "bulk" | "private-label" | "sample" | "general";
  isModal?: boolean;
  onSuccess?: () => void;
}

export function BulkInquiryForm({
  initialProduct,
  initialCategory,
  inquiryType = "bulk",
  isModal = false,
  onSuccess,
}: BulkInquiryFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    defaultValues: {
      productCategory: initialCategory || (initialProduct ? "Specified Product" : "Leather Handbags"),
      requiredQuantity: "100–300 units (Standard Boutique Batch)",
      inquiryType: inquiryType,
      customizationRequirements: initialProduct ? `Inquiry regarding: ${initialProduct}` : "",
      consent: true,
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          inquiryType: data.inquiryType || inquiryType || "bulk",
          productSlug: data.productSlug || initialProduct || null,
        }),
      });

      if (!res.ok) {
        await supabase.from("inquiries").insert({
          buyer_name: data.buyerName,
          company_name: data.companyName,
          business_email: data.businessEmail,
          phone_or_whatsapp: data.phoneOrWhatsApp,
          country: data.country,
          company_website: data.companyWebsite || null,
          product_category: data.productCategory || "Leather Goods",
          required_quantity: data.requiredQuantity || "Standard MOQ",
          target_price_range: data.targetPriceRange || null,
          expected_delivery_date: data.expectedDeliveryDate || null,
          customization_requirements: data.customizationRequirements || "",
          message: data.message || "",
          inquiry_type: data.inquiryType || inquiryType || "bulk",
          product_slug: data.productSlug || initialProduct || null,
        });
      }
    } catch (error) {
      console.warn("Failed to persist inquiry to Supabase:", error);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setTimeout(() => {
        router.push("/thank-you");
      }, 1200);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white border border-charcoal/10 p-10 sm:p-12 rounded-none text-center space-y-5 animate-in fade-in duration-300 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-cognac/10 text-cognac flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
          Inquiry Successfully Dispatched
        </h3>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-lg mx-auto leading-relaxed font-light">
          Thank you for reaching out to UNICON LEATHER. Our overseas export desk has received your technical specifications. A dedicated export manager will respond with a preliminary evaluation and quotation within 12–24 business hours.
        </p>
        <div className="pt-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => setSubmitSuccess(false)}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7 bg-white p-8 sm:p-12 rounded-none border border-charcoal/10 shadow-lg"
      id="inquiry-form"
    >
      {initialProduct && (
        <div className="bg-charcoal-50 p-4 border border-charcoal/10 text-sm flex items-center justify-between">
          <span className="text-charcoal-500 font-medium">Selected Product:</span>
          <span className="font-serif font-bold text-cognac text-base">{initialProduct}</span>
        </div>
      )}

      {/* Row 1: Name & Business Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Buyer / Representative Name <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("buyerName", { required: "Name is required" })}
            placeholder="e.g. Eleanor Vance"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.buyerName && (
            <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.buyerName.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Corporate / Business Email <span className="text-cognac">*</span>
          </label>
          <input
            type="email"
            {...register("businessEmail", {
              required: "Business email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            })}
            placeholder="e.g. sourcing@brandname.com"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.businessEmail && (
            <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.businessEmail.message}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Company & WhatsApp/Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Company / Brand Name <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("companyName", { required: "Company name is required" })}
            placeholder="e.g. Atelier Nordics AB"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.companyName && (
            <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.companyName.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Phone / WhatsApp (with Country Code) <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("phoneOrWhatsApp", { required: "Phone/WhatsApp is required" })}
            placeholder="e.g. +1 (555) 019-2834"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.phoneOrWhatsApp && (
            <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phoneOrWhatsApp.message}
            </span>
          )}
        </div>
      </div>

      {/* Row 3: Country Destination & Company Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Destination Country / Market <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("country", { required: "Destination country is required" })}
            placeholder="e.g. United States, Germany, United Kingdom, UAE"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.country && (
            <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.country.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Company Website / Storefront URL
          </label>
          <input
            type="url"
            {...register("companyWebsite")}
            placeholder="https://yourbrand.com (Optional)"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
        </div>
      </div>

      {/* Row 4: Product Category & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Target Product Category <span className="text-cognac">*</span>
          </label>
          <select
            {...register("productCategory", { required: "Please select category" })}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
            <option value="Multiple Categories / Full Collection">
              Multiple Categories / Full Collection
            </option>
            <option value="Custom Proprietary Tech Pack">
              Custom Proprietary Tech Pack (OEM)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Estimated Order Volume <span className="text-cognac">*</span>
          </label>
          <select
            {...register("requiredQuantity")}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            <option value="50–100 units (Sample / Pilot Launch)">
              50–100 units (Sample / Pilot Launch)
            </option>
            <option value="100–300 units (Standard Boutique Batch)">
              100–300 units (Standard Boutique Batch)
            </option>
            <option value="300–1,000 units (Commercial Wholesale)">
              300–1,000 units (Commercial Wholesale)
            </option>
            <option value="1,000–5,000+ units (Department Store / Multi-Store)">
              1,000–5,000+ units (Department Store / Multi-Store)
            </option>
            <option value="Prototyping & Sampling Only">
              Prototyping & Sampling Only (1–5 units)
            </option>
          </select>
        </div>
      </div>

      {/* Technical Requirements & Detailed Message */}
      <div>
        <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
          Customization, Leather Grain & Hardware Specifications <span className="text-cognac">*</span>
        </label>
        <textarea
          rows={5}
          {...register("message", {
            required: "Please describe your project or manufacturing requirements",
          })}
          placeholder="Please describe leather preferences (e.g. full-grain, veg-tan, calf nappa), dimensions, hardware finish, custom branding (emboss/foil/mould), and packaging needs..."
          className="w-full text-base p-4 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
        />
        {errors.message && (
          <span className="text-xs text-red-600 mt-1.5 block flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
          </span>
        )}
      </div>

      {/* File Upload Attachment Trigger */}
      <div className="border-2 border-dashed border-charcoal/20 bg-charcoal-50 p-6 rounded-none">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <UploadCloud className="w-8 h-8 text-cognac shrink-0" />
            <div>
              <span className="text-sm font-bold text-charcoal block">
                Attach Tech Pack, Sketches or CAD Drawings (Optional)
              </span>
              <span className="text-xs text-charcoal-500">
                PDF, PNG, JPG, AI, or ZIP up to 25MB (Non-Disclosure Protection Guaranteed)
              </span>
            </div>
          </div>
          <label className="shrink-0 cursor-pointer bg-white border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white px-5 py-2.5 rounded-none text-xs font-medium uppercase tracking-[0.14em] transition-colors">
            <span>{attachedFileName ? "Change File" : "Browse File"}</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg,.zip,.ai,.eps,.dwg"
            />
          </label>
        </div>
        {attachedFileName && (
          <div className="mt-3 text-sm text-cognac font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Attached: {attachedFileName}
          </div>
        )}
      </div>

      {/* Consent & Anti-spam */}
      <div className="space-y-2 pt-2 border-t border-charcoal/10">
        <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-charcoal-700">
          <input
            type="checkbox"
            {...register("consent", { required: "Consent is required to submit RFQ" })}
            className="mt-1 rounded-none border-charcoal text-cognac focus:ring-cognac"
          />
          <span>
            I confirm this is a commercial B2B manufacturing inquiry and agree to UNICON LEATHER’s privacy terms regarding quotation and confidential communication.
          </span>
        </label>
        {errors.consent && (
          <span className="text-xs text-red-600 block flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.consent.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="xl"
          disabled={isSubmitting}
          className="w-full bg-cognac hover:bg-cognac-600 text-white font-bold py-5 text-base shadow-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-3" />
              Transmitting Commercial RFQ...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-3" />
              Submit Bulk / OEM Inquiry (12-24h Response)
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
