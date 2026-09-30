import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendCatalogueRequestNotificationToAdmin } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.businessEmail || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, businessEmail, or companyName" },
        { status: 400 }
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

    const { data: inserted, error } = await supabaseAdmin
      .from("catalogue_requests")
      .insert(payload)
      .select("id");

    if (error) {
      console.error("[API Catalogue] Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Dispatch email notification to uniconexport@gmail.com
    try {
      await sendCatalogueRequestNotificationToAdmin({
        full_name: data.fullName,
        company_name: data.companyName,
        business_email: data.businessEmail,
        country: data.country || "",
        interests: data.interests || [],
        estimated_annual_volume: data.estimatedAnnualVolume,
        id: inserted?.[0]?.id,
      });
    } catch (emailErr) {
      console.error("[API Catalogue] Non-fatal email notification error:", emailErr);
    }

    return NextResponse.json({ success: true, message: "Catalogue request saved" }, { status: 201 });
  } catch (err: any) {
    console.error("[API Catalogue] Server error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}

