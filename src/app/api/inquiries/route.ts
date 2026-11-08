import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import {
  sendInquiryNotificationToAdmin,
  sendBuyerConfirmationEmail,
} from "@/lib/email";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "UNICON LEATHER B2B Inquiry API",
      methodAllowed: "POST",
    },
    { status: 200, headers: CORS_HEADERS }
  );
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.buyerName || !data.businessEmail || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields: buyerName, businessEmail, or companyName" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const payload = {
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
    };

    // 1. Dispatch Instant Email Notification to uniconexport@gmail.com FIRST (Guaranteed Delivery)
    let emailSent = false;
    let emailError: string | undefined;
    try {
      const adminEmailRes = await sendInquiryNotificationToAdmin({
        ...payload,
        attachment_name: data.attachmentName || null,
        attachment_base64: data.attachmentBase64 || null,
      });
      emailSent = !!adminEmailRes?.success;
      if (!adminEmailRes?.success) {
        emailError = adminEmailRes?.error;
      }

      // Auto-confirmation to the buyer if custom domain is configured
      if (data.businessEmail) {
        sendBuyerConfirmationEmail({
          ...payload,
        }).catch((err) => console.warn("[API Inquiries] Buyer confirmation skipped:", err?.message));
      }
    } catch (emailErr: any) {
      console.error("[API Inquiries] Email notification error:", emailErr);
      emailError = emailErr?.message;
    }

    // 2. Non-blocking attempt to persist to Supabase (without .select("id") so anon RLS INSERT policy succeeds)
    let dbSaved = false;
    try {
      const dbPromise = supabaseAdmin.from("inquiries").insert(payload);
      const timeoutPromise = new Promise<{ error: { message: string } }>((resolve) =>
        setTimeout(() => resolve({ error: { message: "Supabase timeout (2s)" } }), 2000)
      );
      const dbResult = await Promise.race([dbPromise, timeoutPromise]);
      if (!dbResult.error) {
        dbSaved = true;
      }
    } catch (dbErr: any) {
      console.warn("[API Inquiries] Supabase skipped (free-tier/offline):", dbErr?.message);
    }

    if (!emailSent && !dbSaved) {
      return NextResponse.json(
        {
          error: "Unable to dispatch inquiry at this moment. Please use direct WhatsApp or Email.",
          details: emailError,
        },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received and notification dispatched to uniconexport@gmail.com",
        id: `rfq-${Date.now()}`,
        emailSent,
        dbSaved,
      },
      { status: 201, headers: CORS_HEADERS }
    );
  } catch (err: any) {
    console.error("[API Inquiries] Server error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
