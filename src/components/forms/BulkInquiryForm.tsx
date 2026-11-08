"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Send, UploadCloud, CheckCircle2, AlertCircle, Loader2, MessageCircle, Mail } from "lucide-react";
import { InquiryFormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { supabase } from "@/lib/supabase";
import { COMPANY_INFO } from "@/data/company";

interface BulkInquiryFormProps {
  initialProduct?: string;
  initialCategory?: string;
  inquiryType?: "bulk" | "private-label" | "sample" | "general";
  isModal?: boolean;
  onSuccess?: () => void;
}

export function BulkInquiryForm(props: BulkInquiryFormProps) {
  return (
    <React.Suspense fallback={<BulkInquiryFormFields {...props} />}>
      <BulkInquiryFormWithParams {...props} />
    </React.Suspense>
  );
}

function BulkInquiryFormWithParams(props: BulkInquiryFormProps) {
  const searchParams = useSearchParams();
  const [sessionProduct, setSessionProduct] = useState("");
  const rawProduct = searchParams?.get("product") || "";
  const rawCode = searchParams?.get("code") || "";
  const urlProduct =
    rawProduct && rawCode && !rawProduct.includes(rawCode)
      ? `${rawProduct} (${rawCode})`
      : rawProduct;

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem("unicon_prefill_product");
      if (stored) {
        setSessionProduct(stored);
        window.sessionStorage.removeItem("unicon_prefill_product");
      }
    } catch {
      // Ignore storage access errors in private browsing
    }
  }, []);

  const resolvedProduct = urlProduct || sessionProduct;
  return (
    <BulkInquiryFormFields
      key={resolvedProduct || props.initialProduct || "default"}
      {...props}
      urlProduct={resolvedProduct}
    />
  );
}

interface InnerProps extends BulkInquiryFormProps {
  urlProduct?: string;
}

function BulkInquiryFormFields({
  initialProduct,
  initialCategory,
  inquiryType = "bulk",
  isModal = false,
  onSuccess,
  urlProduct = "",
}: InnerProps) {
  const router = useRouter();
  const effectiveProduct = initialProduct || urlProduct || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [savedDataForFallback, setSavedDataForFallback] = useState<InquiryFormData | null>(null);
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [attachedFileBase64, setAttachedFileBase64] = useState<string | null>(null);
  const [fileSizeWarning, setFileSizeWarning] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    defaultValues: {
      productCategory: initialCategory || (effectiveProduct ? "Specified Product" : "Leather Handbags"),
      requiredQuantity: "50–100 units (Stock-Leather Trial Batch)",
      inquiryType: inquiryType,
      targetPriceRange: "Open / Request Factory Quote (EUR € / GBP £ / USD $)",
      expectedDeliveryDate: "Immediate Sampling (5–14 Days) · DDP Door-to-Door",
      customizationRequirements: effectiveProduct ? `Inquiry regarding: ${effectiveProduct}` : "",
      consent: true,
    },
  });

  const appendQuickPrompt = (tagText: string) => {
    const current = getValues("message") || "";
    const nextVal = current ? `${current.trim()}\n• ${tagText}` : `• ${tagText}`;
    setValue("message", nextVal, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    let success = false;

    const finalCustomization = attachedFileName
      ? `${data.customizationRequirements ? `${data.customizationRequirements}\n` : ""}[Attached Tech Pack / Reference File: ${attachedFileName}]`
      : data.customizationRequirements || "";

    const requestBody = JSON.stringify({
      ...data,
      customizationRequirements: finalCustomization,
      inquiryType: data.inquiryType || inquiryType || "bulk",
      productSlug: data.productSlug || initialProduct || null,
      attachmentName: attachedFileName,
      attachmentBase64: attachedFileBase64,
    });

    try {
      let res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      // If accessed via an alias domain before redirect, retry against canonical production endpoint
      if (!res.ok && typeof window !== "undefined" && window.location.hostname !== "www.uniconleather.com") {
        res = await fetch("https://www.uniconleather.com/api/inquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBody,
        });
      }

      const respData = await res.json().catch(() => null);

      if (res.ok && respData?.emailSent) {
        success = true;
      } else {
        console.warn("[BulkInquiryForm] Email dispatch warning or API error:", respData);

        // Save to Supabase so the lead is still recorded in the database
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
          customization_requirements: finalCustomization,
          message: data.message || "",
          inquiry_type: data.inquiryType || inquiryType || "bulk",
          product_slug: data.productSlug || initialProduct || null,
          status: "new",
        });

        if (res.ok) {
          success = true;
        } else {
          setSubmitError(
            respData?.error || "Unable to reach email server directly. Please click below to send via WhatsApp or Email."
          );
          setSavedDataForFallback(data);
        }
      }
    } catch (error: any) {
      console.error("[BulkInquiryForm] Network error:", error);
      setSubmitError(error?.message || "Network error. Please connect directly via WhatsApp or Email.");
      setSavedDataForFallback(data);
    }

    setIsSubmitting(false);

    if (success) {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "B2B Sourcing RFQ",
          event_label: data.inquiryType || inquiryType || "bulk",
          value: data.requiredQuantity || "100-300",
          currency: "USD",
        });
      }

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
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileSizeWarning(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAttachedFileName(file.name);
      // Convert files <= 4.5MB to base64 for direct email attachment via Resend
      if (file.size <= 4.5 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = typeof reader.result === "string" ? reader.result : "";
          const base64Content = result.includes(",") ? result.split(",")[1] : result;
          setAttachedFileBase64(base64Content || null);
        };
        reader.readAsDataURL(file);
      } else {
        setAttachedFileBase64(null);
        setFileSizeWarning(
          "File exceeds 4.5 MB direct email attachment limit. Its filename is logged—please also paste a Google Drive / WeTransfer link above or email it when our export desk replies."
        );
      }
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

  // Fallback view if database error occurs so buyer inquiry is never lost
  if (submitError && savedDataForFallback) {
    const waText = encodeURIComponent(
      `Hello Unicon Leather Team,\n\nI submitted an inquiry on your website:\n- Name: ${savedDataForFallback.buyerName}\n- Company: ${savedDataForFallback.companyName}\n- Email: ${savedDataForFallback.businessEmail}\n- Phone: ${savedDataForFallback.phoneOrWhatsApp}\n- Country: ${savedDataForFallback.country}\n- Category: ${savedDataForFallback.productCategory}\n- Quantity: ${savedDataForFallback.requiredQuantity}\n- Requirements: ${savedDataForFallback.customizationRequirements || "N/A"}\n- Message: ${savedDataForFallback.message || "N/A"}`
    );
    const emailSubject = encodeURIComponent(`B2B Manufacturing Inquiry: ${savedDataForFallback.companyName}`);
    const emailBody = encodeURIComponent(
      `Buyer Name: ${savedDataForFallback.buyerName}\nCompany: ${savedDataForFallback.companyName}\nEmail: ${savedDataForFallback.businessEmail}\nPhone: ${savedDataForFallback.phoneOrWhatsApp}\nCountry: ${savedDataForFallback.country}\nCategory: ${savedDataForFallback.productCategory}\nQuantity: ${savedDataForFallback.requiredQuantity}\n\nRequirements:\n${savedDataForFallback.customizationRequirements || ""}\n\nMessage:\n${savedDataForFallback.message || ""}`
    );

    return (
      <div className="bg-white border-2 border-cognac/30 p-8 sm:p-10 rounded-none space-y-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-cognac/15 text-cognac flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal">
              Direct Connection Available
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              We encountered a temporary database sync issue ({submitError}). To ensure your inquiry reaches our senior export merchandiser without delay, click either option below:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <a
            href={`https://wa.me/919873102341?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20be5b] text-white py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Send via WhatsApp Direct
          </a>

          <a
            href={`mailto:${COMPANY_INFO.primaryEmail}?subject=${emailSubject}&body=${emailBody}`}
            className="flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold shadow-xs transition-colors"
          >
            <Mail className="w-4 h-4 text-cognac" /> Send via Corporate Email
          </a>
        </div>

        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => setSubmitError(null)}
            className="text-xs font-mono text-charcoal/60 hover:text-charcoal underline cursor-pointer"
          >
            ← Return to form &amp; retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-5 sm:space-y-7 bg-white ${
        isModal ? "p-4 sm:p-6" : "p-5 sm:p-10 lg:p-12"
      } rounded-none border border-charcoal/10 shadow-lg`}
      id="inquiry-form"
    >
      {effectiveProduct && (
        <div className="bg-charcoal-50 p-4 border border-charcoal/10 text-sm flex items-center justify-between">
          <span className="text-charcoal-500 font-medium">Selected Product:</span>
          <span className="font-serif font-bold text-cognac text-base">{effectiveProduct}</span>
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
            type="text"
            {...register("companyWebsite")}
            placeholder="yourbrand.com or https://yourbrand.com (Optional)"
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          />
        </div>
      </div>

      {/* Row 4: Product Category, Quantity & Desired Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Target Product Category <span className="text-cognac">*</span>
          </label>
          <select
            {...register("productCategory", { required: "Please select category" })}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            {effectiveProduct && !initialCategory && (
              <option value="Specified Product">
                Specified Product ({effectiveProduct.slice(0, 48)})
              </option>
            )}
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
            <option value="50–100 units (Stock-Leather Trial Batch)">
              50–100 units (Stock-Leather Trial Batch)
            </option>
            <option value="100–300 units (Custom Drum-Dyed Colorway)">
              100–300 units (Custom Drum-Dyed Colorway)
            </option>
            <option value="300–1,000 units (Commercial Wholesale)">
              300–1,000 units (Commercial Wholesale)
            </option>
            <option value="1,000–5,000+ units (Department Store / Multi-Store)">
              1,000–5,000+ units (Department Store / Multi-Store)
            </option>
            <option value="Prototyping & Sampling Only (1–5 units)">
              Prototyping &amp; Sampling Only (1–5 units)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Target Delivery Date &amp; Incoterms
          </label>
          <select
            {...register("expectedDeliveryDate")}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            <option value="Immediate Sampling (5–14 Days) · DDP Door-to-Door">
              Immediate Sampling (5–14 Days) · DDP Door-to-Door
            </option>
            <option value="Within 30–40 Days (Upcoming Drop) · DDP / Air">
              Within 30–40 Days (Upcoming Drop) · DDP / Air
            </option>
            <option value="Within 60–90 Days (AW26 / SS27 Collection) · FOB / CIF / DDP">
              Within 60–90 Days (AW26 / SS27 Collection) · FOB / CIF / DDP
            </option>
            <option value="Q3 / Q4 Retail Delivery · Ocean FCL/LCL or Air">
              Q3 / Q4 Retail Delivery · Ocean FCL/LCL or Air
            </option>
            <option value="Exploratory / Vendor Vetting & Swatch Review">
              Exploratory / Vendor Vetting &amp; Swatch Review
            </option>
          </select>
        </div>
      </div>

      {/* Row 4.5: Program Type & Optional Target Budget / Currency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Manufacturing Program Type
          </label>
          <select
            {...register("inquiryType")}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            <option value="bulk">Bulk / Wholesale Production</option>
            <option value="private-label">Private Label (Custom Logo &amp; Hardware on Catalog SKU)</option>
            <option value="sample">Prototype Sample Development (From Tech Pack / Sketch)</option>
            <option value="general">Corporate Gifting / Hospitality Leather Program</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal mb-2">
            Target Unit Budget &amp; Quote Currency (Optional)
          </label>
          <select
            {...register("targetPriceRange")}
            className="w-full text-base px-4 py-3.5 bg-charcoal-50 border border-charcoal/20 rounded-none text-charcoal focus:bg-white focus:border-cognac"
          >
            <option value="Open / Request Factory Quote (EUR € / GBP £ / USD $)">
              Open / Request Tiered Quote (EUR € / GBP £ / USD $)
            </option>
            <option value="€6–€15 / £5–£13 / $7–$16 per unit (Wallets, SLGs & Belts)">
              €6–€15 / £5–£13 / $7–$16 per unit (Wallets, SLGs &amp; Belts)
            </option>
            <option value="€22–€42 / £19–£36 / $24–$46 per unit (Totes & Shoulder Bags)">
              €22–€42 / £19–£36 / $24–$46 per unit (Totes &amp; Shoulder Bags)
            </option>
            <option value="€45–€85 / £38–£72 / $48–$92 per unit (Briefcases, Backpacks & Duffels)">
              €45–€85 / £38–£72 / $48–$92 per unit (Briefcases, Backpacks &amp; Duffels)
            </option>
            <option value="€68–€130 / £58–£110 / $72–$140 per unit (Leather Jackets & Outerwear)">
              €68–€130 / £58–£110 / $72–$140 per unit (Leather Jackets &amp; Outerwear)
            </option>
          </select>
        </div>
      </div>

      {/* Technical Requirements & Detailed Message */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <label className="block text-xs uppercase tracking-widest font-bold text-charcoal">
            Customization, Leather Grain &amp; Project Notes <span className="text-cognac">*</span>
          </label>
          <span className="text-[11px] text-charcoal-500 font-mono">
            Tap quick-tags below or type specifications
          </span>
        </div>

        {/* One-Tap Mobile Quick-Select Chips */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {[
            "Request Physical Counter-Sample (5–14 Days)",
            "Private Label (Custom Logo Deboss / Hardware)",
            "Custom Tech Pack / OEM Pattern Quote",
            "Request Leather Swatch Kit & FOB Price Tier",
            "Require Mutual NDA Before Sending CAD Files",
          ].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => appendQuickPrompt(chip)}
              className="text-[11px] font-mono bg-[#FAF8F5] hover:bg-cognac hover:text-white text-charcoal-700 border border-charcoal/15 px-2.5 py-1 transition-colors cursor-pointer"
            >
              + {chip}
            </button>
          ))}
        </div>

        <textarea
          rows={isModal ? 3 : 4}
          {...register("message", {
            required: "Please describe your project or tap a quick-tag above",
          })}
          placeholder="Describe leather preferences (e.g. full-grain pull-up, veg-tan, calf nappa), dimensions, hardware finish, logo branding, or paste a Google Drive / WeTransfer link to your Tech Pack..."
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
                Attach Tech Pack, Sketches or CAD Reference File (Optional · Max 4.5 MB)
              </span>
              <span className="text-xs text-charcoal-500">
                Files up to 4.5 MB (.PDF, .PNG, .JPG, .ZIP, .AI) are attached directly to your RFQ dispatch under mutual NDA protection. For larger files, paste a Drive/WeTransfer link above.
              </span>
            </div>
          </div>
          <label className="shrink-0 cursor-pointer bg-white border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white px-5 py-2.5 rounded-none text-xs font-medium uppercase tracking-[0.14em] transition-colors">
            <span>{attachedFileName ? "Change File" : "Attach File"}</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg,.zip,.ai,.eps,.dwg"
            />
          </label>
        </div>
        {attachedFileName && (
          <div className="mt-3 text-xs sm:text-sm text-cognac font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />{" "}
            {attachedFileBase64
              ? `Attached for Direct Export Desk Transmission: ${attachedFileName}`
              : `Logged Reference File: ${attachedFileName}`}
          </div>
        )}
        {fileSizeWarning && (
          <div className="mt-2 text-xs text-amber-700 font-medium">
            {fileSizeWarning}
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

      {/* Validation Error Summary Banner (Visible right above Submit button on mobile/laptop) */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
          <div>
            <strong className="font-semibold block">Please complete all required fields above:</strong>
            <span>
              {[
                errors.buyerName && "Buyer Name",
                errors.businessEmail && "Business Email",
                errors.companyName && "Company Name",
                errors.phoneOrWhatsApp && "Phone/WhatsApp",
                errors.country && "Destination Country",
                errors.message && "Project Notes / Message",
                errors.consent && "Confirmation Checkbox",
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        </div>
      )}

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
