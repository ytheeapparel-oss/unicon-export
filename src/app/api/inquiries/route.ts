import { NextRequest, NextResponse } from "next/server";
import { supabase, supabaseAdmin } from "@/lib/supabase";
import { sendInquiryNotificationToAdmin, sendBuyerConfirmationEmail } from "@/lib/email";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const testMode = url.searchParams.get("test");

    // Check table accessibility
    const { data, error, status } = await supabase.from("inquiries").select("id, created_at").limit(1);

    const diagnostic = {
      timestamp: new Date().toISOString(),
      supabaseConnected: status === 200 || !error,
      table: "inquiries",
      selectStatus: status,
      selectError: error ? { code: error.code, message: error.message } : null,
      usingServiceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      resendEmailConfigured: !!process.env.RESEND_API_KEY,
      adminNotificationEmail: process.env.ADMIN_NOTIFICATION_EMAIL || "uniconexport@gmail.com",
    };

    if (testMode === "insert") {
      // Test insert capability
      const testRecord = {
        buyer_name: "[SYSTEM DIAGNOSTIC TEST]",
        company_name: "Internal Test",
        business_email: "test@example.com",
        phone_or_whatsapp: "+1234567890",
        country: "Diagnostic",
        message: "Verifying insert permissions",
        status: "test",
      };

      const { data: insertData, error: insertError } = await supabaseAdmin
        .from("inquiries")
        .insert(testRecord)
        .select("id");

      return NextResponse.json({
        ...diagnostic,
        insertTest: {
          success: !insertError,
          error: insertError ? { code: insertError.code, message: insertError.message } : null,
          insertedId: insertData?.[0]?.id || null,
        },
      });
    }

    return NextResponse.json(diagnostic);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.buyerName || !data.businessEmail || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields: buyerName, businessEmail, or companyName" },
        { status: 400 }
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

    const { data: inserted, error } = await supabaseAdmin
      .from("inquiries")
      .insert(payload)
      .select("id");

    if (error) {
      console.error("[API Inquiries] Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 2. Dispatch Instant Email Notification to uniconexport@gmail.com
    try {
      await sendInquiryNotificationToAdmin({
        ...payload,
        id: inserted?.[0]?.id,
      });

      // 3. Dispatch Branded Auto-confirmation to the buyer
      if (data.businessEmail) {
        await sendBuyerConfirmationEmail({
          ...payload,
          id: inserted?.[0]?.id,
        });
      }
    } catch (emailErr) {
      console.error("[API Inquiries] Non-fatal email notification error:", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry saved and notification dispatched successfully",
        id: inserted?.[0]?.id,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[API Inquiries] Server error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}

