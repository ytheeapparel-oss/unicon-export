import { Resend } from "resend";
import fs from "fs";
import path from "path";

// Load .env.local manually if running via node
const envPath = path.resolve(process.cwd(), ".env.local");
let apiKey = process.argv[2] || process.env.RESEND_API_KEY;

if (!apiKey && fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  const match = content.match(/RESEND_API_KEY=(.+)/);
  if (match && match[1]) {
    apiKey = match[1].trim();
  }
}

if (!apiKey) {
  console.error("\n❌ Error: No RESEND_API_KEY found!");
  console.error("Please provide your Resend API key either:");
  console.error("1. By passing it as an argument: node scripts/send-sample-email.mjs re_123456789");
  console.error("2. Or by pasting it in .env.local: RESEND_API_KEY=re_123456789\n");
  process.exit(1);
}

const resend = new Resend(apiKey);
const recipient = process.env.ADMIN_NOTIFICATION_EMAIL || "uniconexport@gmail.com";

console.log(`\n🚀 Sending sample B2B inquiry email to ${recipient}...`);

const samplePayload = {
  buyer_name: "Charlotte Beaumont",
  company_name: "Maison Beaumont Leather Goods Ltd",
  business_email: "procurement@maisonbeaumont.co.uk",
  phone_or_whatsapp: "+44 7911 123456",
  country: "United Kingdom",
  company_website: "https://maisonbeaumont.co.uk",
  product_category: "Luxury Leather Handbags & Crossbody Bags",
  required_quantity: "250 pcs / style (Initial Boutique Collection)",
  target_price_range: "$35.00 – $48.00 FOB India",
  expected_delivery_date: "November 2026",
  customization_requirements: "Full-grain vegetable-tanned cowhide with custom branded champagne-gold hardware and debossed foil interior logo.",
  message: "Hello Unicon Leather Team, we are preparing our Autumn/Winter 2026 luxury collection and would like to review leather swatches and discuss proto-sampling turnaround times.",
  inquiry_type: "bulk",
  product_slug: "amber-pull-up-leather-tote"
};

const cleanPhone = samplePayload.phone_or_whatsapp.replace(/[^0-9+]/g, "");
const waUrl = `https://wa.me/${cleanPhone.replace("+", "")}`;

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry Notification</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1a1a1a;">
  <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5ded3; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Top Luxury Header Banner -->
    <div style="background-color: #1a1a1a; padding: 24px 32px; border-bottom: 3px solid #9C5134;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;">
              UNICON <span style="color: #9C5134; font-weight: 300;">LEATHER</span>
            </h1>
            <p style="color: #a8a29e; margin: 4px 0 0 0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">
              Global B2B Wholesale Export Desk Alert
            </p>
          </td>
          <td align="right">
            <span style="display: inline-block; background-color: #9C5134; color: #ffffff; font-size: 10px; font-weight: bold; text-transform: uppercase; padding: 4px 10px; letter-spacing: 0.1em;">
              Sample Test RFQ
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Main Content -->
    <div style="padding: 32px;">
      
      <!-- Buyer Spotlight Card -->
      <div style="background-color: #FAF8F5; border-left: 4px solid #9C5134; padding: 18px 22px; margin-bottom: 24px;">
        <h2 style="font-size: 18px; margin: 0 0 6px 0; color: #1a1a1a;">
          ${samplePayload.buyer_name} &mdash; <span style="color: #9C5134;">${samplePayload.company_name}</span>
        </h2>
        <p style="margin: 0; font-size: 13px; color: #666666;">
          Origin: <strong style="color: #1a1a1a;">${samplePayload.country}</strong> 
          &bull; Website: <a href="${samplePayload.company_website}" style="color: #9C5134;">${samplePayload.company_website}</a>
        </p>
      </div>

      <!-- Quick Action Buttons -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
        <tr>
          <td style="padding-right: 8px;">
            <a href="mailto:${samplePayload.business_email}?subject=Re:%20UNICON%20LEATHER%20Wholesale%20Manufacturing%20Quotation" 
               style="display: block; text-align: center; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 16px;">
              ✉ Reply via Email
            </a>
          </td>
          <td style="padding-left: 8px;">
            <a href="${waUrl}" target="_blank"
               style="display: block; text-align: center; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 16px;">
              💬 Open WhatsApp
            </a>
          </td>
        </tr>
      </table>

      <!-- Order & Specifications Grid -->
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Commercial Requirements &amp; Quantities
      </h3>

      <table width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13px; margin-bottom: 24px; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td width="35%" style="color: #777777; padding: 8px 0;"><strong>Product Category:</strong></td>
          <td style="color: #1a1a1a; font-weight: 600; padding: 8px 0;">${samplePayload.product_category}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Required Quantity:</strong></td>
          <td style="color: #1a1a1a; font-weight: 600; padding: 8px 0;">${samplePayload.required_quantity}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Target Price Range:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${samplePayload.target_price_range}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Expected Delivery:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${samplePayload.expected_delivery_date}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Catalog Style Ref:</strong></td>
          <td style="color: #9C5134; font-family: monospace; padding: 8px 0;">${samplePayload.product_slug}</td>
        </tr>
      </table>

      <!-- Direct Contact Details -->
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Buyer Contact Details
      </h3>

      <table width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13px; margin-bottom: 24px; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td width="35%" style="color: #777777; padding: 8px 0;"><strong>Email Address:</strong></td>
          <td style="padding: 8px 0;"><a href="mailto:${samplePayload.business_email}" style="color: #9C5134; font-weight: 600;">${samplePayload.business_email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Phone / WhatsApp:</strong></td>
          <td style="padding: 8px 0;"><a href="tel:${samplePayload.phone_or_whatsapp}" style="color: #1a1a1a; font-family: monospace;">${samplePayload.phone_or_whatsapp}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Country:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${samplePayload.country}</td>
        </tr>
      </table>

      <!-- Customization Requirements & Message -->
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Customization Requirements &amp; Notes
      </h3>
      <div style="background-color: #FAF8F5; border: 1px solid #e5ded3; padding: 16px; font-size: 13px; line-height: 1.6; color: #2a2a2a; margin-bottom: 24px;">
        <p style="margin: 0 0 10px 0;"><strong>Requirements:</strong><br>${samplePayload.customization_requirements}</p>
        <p style="margin: 0;"><strong>Message:</strong><br>${samplePayload.message}</p>
      </div>

      <p style="font-size: 11px; color: #999999; margin: 24px 0 0 0; text-align: center;">
        Submitted via uniconleather.com &bull; SLA Target: 12&ndash;24 Business Hours
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f7f5f0; padding: 18px 32px; border-top: 1px solid #e5ded3; font-size: 11px; color: #777777; text-align: center;">
      UNICON LEATHER Export House &bull; Indian Green Centre, Sector-106, Noida &bull; Kolkata Leather Complex, West Bengal
    </div>
  </div>
</body>
</html>
`;

try {
  const data = await resend.emails.send({
    from: "UNICON LEATHER Export Desk <onboarding@resend.dev>",
    to: [recipient],
    replyTo: samplePayload.business_email,
    subject: `🔥 [SAMPLE TEST RFQ] New Wholesale Inquiry: ${samplePayload.company_name} (${samplePayload.country})`,
    html: htmlContent,
  });

  console.log("\n✅ Sample email sent successfully!");
  console.log("Resend Response:", data);
} catch (error) {
  console.error("\n❌ Resend API Error:", error);
}
