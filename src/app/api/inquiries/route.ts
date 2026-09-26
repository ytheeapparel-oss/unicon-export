import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.buyerName || !data.businessEmail || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields: buyerName, businessEmail, or companyName" },
        { status: 400 }
      );
    }

    const { data: inserted, error } = await supabase.from("inquiries").insert({
      buyer_name: data.buyerName,
      company_name: data.companyName,
      business_email: data.businessEmail,
      phone_or_whatsapp: data.phoneOrWhatsApp || "",
      country: data.country || "",
      company_website: data.companyWebsite || null,
      product_category: data.productCategory || "Leather Goods",
      required_quantity: data.requiredQuantity || "Standard MOQ",
      target_price_range: data.targetPriceRange || null,
      expected_delivery_date: data.expectedDeliveryDate || null,
      customization_requirements: data.customizationRequirements || "",
      message: data.message || "",
      inquiry_type: data.inquiryType || "bulk",
      product_slug: data.productSlug || null,
      status: "new",
    });

    if (error) {
      console.error("[API Inquiries] Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Inquiry saved successfully" }, { status: 201 });
  } catch (err: any) {
    console.error("[API Inquiries] Server error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
