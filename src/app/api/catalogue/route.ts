import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendCatalogueRequestNotificationToAdmin } from "@/lib/email";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.businessEmail || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, businessEmail, or companyName" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const payload = {
      full_name: data.fullName,
      company_name: data.companyName,
      business_email: data.businessEmail,
      country: data.country || "",
      interests: data.interests || [],
      estimated_annual_volume: data.estimatedAnnualVolume || "100–500 units",
      status: "pending",
    };

    // 1. Dispatch email notification to uniconexport@gmail.com FIRST
    let emailSent = false;
    let emailError: string | undefined;
    try {
      const emailRes = await sendCatalogueRequestNotificationToAdmin({
        full_name: data.fullName,
        company_name: data.companyName,
        business_email: data.businessEmail,
        country: data.country || "",
        interests: data.interests || [],
        estimated_annual_volume: data.estimatedAnnualVolume,
      });
      emailSent = !!emailRes?.success;
      if (!emailRes?.success) {
        emailError = emailRes?.error;
      }
    } catch (emailErr: any) {
      console.error("[API Catalogue] Email notification error:", emailErr);
      emailError = emailErr?.message;
    }

    // 2. Non-blocking attempt to record in database (without .select("id") so anon RLS INSERT succeeds)
    let dbSaved = false;
    try {
      const dbPromise = supabaseAdmin.from("catalogue_requests").insert(payload);
      const timeoutPromise = new Promise<{ error: { message: string } }>((resolve) =>
        setTimeout(() => resolve({ error: { message: "Supabase timeout (2s)" } }), 2000)
      );
      const dbResult = await Promise.race([dbPromise, timeoutPromise]);
      if (!dbResult.error) {
        dbSaved = true;
      }
    } catch (dbErr: any) {
      console.warn("[API Catalogue] Supabase skipped (free-tier/offline):", dbErr?.message);
    }

    return NextResponse.json(
      {
        success: true,
        dbSaved,
        emailSent,
        message: "Catalogue request processed",
      },
      { status: 201, headers: CORS_HEADERS }
    );
  } catch (err: any) {
    console.error("[API Catalogue] Server error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

