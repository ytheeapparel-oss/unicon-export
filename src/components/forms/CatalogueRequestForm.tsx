"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Download, CheckCircle2, AlertCircle, Loader2, FileText } from "lucide-react";
import { CatalogueRequestFormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { supabase } from "@/lib/supabase";

export function CatalogueRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CatalogueRequestFormData>({
    defaultValues: {
      estimatedAnnualVolume: "100–500 units",
      interests: ["Leather Handbags", "Wallets & Cardholders"],
      consent: true,
    },
  });

  const onSubmit = async (data: CatalogueRequestFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/catalogue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        await supabase.from("catalogue_requests").insert({
          full_name: data.fullName,
          company_name: data.companyName,
          business_email: data.businessEmail,
          country: data.country,
          interests: data.interests || [],
          estimated_annual_volume: data.estimatedAnnualVolume || "100–500 units",
        });
      }
    } catch (error) {
      console.warn("Failed to persist catalogue request to Supabase:", error);
    }

    setIsSubmitting(false);
    setDownloadReady(true);
  };

  if (downloadReady) {
    return (
      <div className="bg-white border border-sand p-8 rounded-sm text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-cognac/10 text-cognac flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-charcoal">
            Your B2B Catalogue is Ready
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
            A digital copy of the UNICON LEATHER Master Export Catalogue & Material Swatch Directory has been emailed. You can also download the PDF directly below.
          </p>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#download-simulation"
            onClick={(e) => {
              e.preventDefault();
              alert("Downloading UNICON LEATHER Master B2B Lookbook (PDF - High Resolution)...");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm px-6 py-3 rounded-sm gap-2 bg-cognac text-white hover:bg-cognac-600 transition-colors uppercase tracking-wider shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF Lookbook (42MB)
          </a>
          <Button
            variant="outline"
            size="sm"
            href="/products"
          >
            Browse Online Catalog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-6 sm:p-8 rounded-sm border border-sand/60 shadow-editorial"
    >
      <div className="flex items-center gap-3 pb-4 border-b border-sand/40">
        <div className="w-10 h-10 rounded-sm bg-ivory flex items-center justify-center text-cognac border border-sand">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-charcoal">
            Instant Export Catalogue Access
          </h3>
          <p className="text-xs text-charcoal-500">
            Complete technical dimensions, tannage specifications & MOQ matrix
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
            Full Name <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("fullName", { required: "Name is required" })}
            placeholder="e.g. Marcus Thorne"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-ivory/50 border border-sand rounded-sm text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.fullName && (
            <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
            Corporate Email <span className="text-cognac">*</span>
          </label>
          <input
            type="email"
            {...register("businessEmail", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
            placeholder="e.g. buyer@luxurygroup.com"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-ivory/50 border border-sand rounded-sm text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.businessEmail && (
            <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessEmail.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
            Company Name <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("companyName", { required: "Company is required" })}
            placeholder="e.g. Thorne & Co. Retailers"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-ivory/50 border border-sand rounded-sm text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.companyName && (
            <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.companyName.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
            Country / Region <span className="text-cognac">*</span>
          </label>
          <input
            type="text"
            {...register("country", { required: "Country is required" })}
            placeholder="e.g. United Kingdom, USA, Australia"
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-ivory/50 border border-sand rounded-sm text-charcoal focus:bg-white focus:border-cognac"
          />
          {errors.country && (
            <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.country.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
          Categories of Interest
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-charcoal-700">
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer bg-ivory/60 p-2 rounded border border-sand/40 hover:bg-sand/20">
              <input
                type="checkbox"
                value={cat.name}
                {...register("interests")}
                className="rounded border-sand text-cognac focus:ring-cognac"
              />
              <span className="truncate">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-2 cursor-pointer text-xs text-charcoal-600">
          <input
            type="checkbox"
            {...register("consent", { required: "Consent required" })}
            className="mt-0.5 rounded border-sand text-cognac focus:ring-cognac"
          />
          <span>
            Send me the digital catalogue and quarterly new collection lookbooks.
          </span>
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-cognac hover:bg-cognac-600 text-white font-semibold py-3 text-xs sm:text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Generating Catalogue Link...
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            Download Complete 2025 B2B Catalogue
          </>
        )}
      </Button>
    </form>
  );
}
