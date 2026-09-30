import { Resend } from "resend";
import { COMPANY_INFO } from "@/data/company";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Default sender address:
// While in test/sandbox mode, Resend allows sending from "onboarding@resend.dev".
// Once a verified custom domain (e.g. uniconleather.com) is added in Resend,
// set RESEND_FROM_EMAIL="UNICON LEATHER Export Desk <export@uniconleather.com>"
const DEFAULT_FROM = process.env.RESEND_FROM_EMAIL || "UNICON LEATHER Export Desk <onboarding@resend.dev>";
const ADMIN_NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || COMPANY_INFO.primaryEmail; // uniconexport@gmail.com

export interface InquiryNotificationPayload {
  id?: string;
  buyer_name: string;
  company_name: string;
  business_email: string;
  phone_or_whatsapp: string;
  country: string;
  company_website?: string | null;
  product_category?: string | null;
  required_quantity?: string | null;
  target_price_range?: string | null;
  expected_delivery_date?: string | null;
  customization_requirements?: string | null;
  message?: string | null;
  inquiry_type?: string | null;
  product_slug?: string | null;
}

export interface CatalogueNotificationPayload {
  id?: string;
  full_name: string;
  company_name: string;
  business_email: string;
  country: string;
  interests?: string[];
  estimated_annual_volume?: string | null;
}

/**
 * Send an instant email notification to uniconexport@gmail.com
 * whenever a new B2B wholesale inquiry is submitted.
 */
export async function sendInquiryNotificationToAdmin(data: InquiryNotificationPayload) {
  if (!resend) {
    console.warn("[Email] RESEND_API_KEY is not configured. Skipping admin inquiry email notification.");
    return { success: false, reason: "missing_api_key" };
  }

  try {
    const cleanPhone = (data.phone_or_whatsapp || "").replace(/[^0-9+]/g, "");
    const waUrl = cleanPhone.startsWith("+")
      ? `https://wa.me/${cleanPhone.replace("+", "")}`
      : `https://wa.me/91${cleanPhone}`;

    const subject = `🔥 New B2B Wholesale RFQ: ${data.company_name} (${data.buyer_name}) - ${data.country || "International"}`;

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
              New Inquiry
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
          ${escapeHtml(data.buyer_name)} &mdash; <span style="color: #9C5134;">${escapeHtml(data.company_name)}</span>
        </h2>
        <p style="margin: 0; font-size: 13px; color: #666666;">
          Origin: <strong style="color: #1a1a1a;">${escapeHtml(data.country || "Not specified")}</strong> 
          ${data.company_website ? `&bull; Website: <a href="${escapeHtml(data.company_website)}" style="color: #9C5134;">${escapeHtml(data.company_website)}</a>` : ""}
        </p>
      </div>

      <!-- Quick Action Buttons -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
        <tr>
          <td style="padding-right: 8px;">
            <a href="mailto:${escapeHtml(data.business_email)}?subject=Re:%20UNICON%20LEATHER%20Wholesale%20Manufacturing%20Quotation%20for%20${encodeURIComponent(data.company_name)}" 
               style="display: block; text-align: center; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 16px;">
              ✉ Reply via Email
            </a>
          </td>
          ${cleanPhone ? `
          <td style="padding-left: 8px;">
            <a href="${waUrl}" target="_blank"
               style="display: block; text-align: center; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 16px;">
              💬 Open WhatsApp
            </a>
          </td>` : ""}
        </tr>
      </table>

      <!-- Order & Specifications Grid -->
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Commercial Requirements &amp; Quantities
      </h3>

      <table width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13px; margin-bottom: 24px; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td width="35%" style="color: #777777; padding: 8px 0;"><strong>Product Category:</strong></td>
          <td style="color: #1a1a1a; font-weight: 600; padding: 8px 0;">${escapeHtml(data.product_category || "Leather Goods")}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Required Quantity:</strong></td>
          <td style="color: #1a1a1a; font-weight: 600; padding: 8px 0;">${escapeHtml(data.required_quantity || "Standard MOQ")}</td>
        </tr>
        ${data.target_price_range ? `
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Target Price Range:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${escapeHtml(data.target_price_range)}</td>
        </tr>` : ""}
        ${data.expected_delivery_date ? `
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Expected Delivery:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${escapeHtml(data.expected_delivery_date)}</td>
        </tr>` : ""}
        ${data.product_slug ? `
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Catalog Style Ref:</strong></td>
          <td style="color: #9C5134; font-family: monospace; padding: 8px 0;">${escapeHtml(data.product_slug)}</td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Inquiry Type:</strong></td>
          <td style="color: #1a1a1a; text-transform: uppercase; font-size: 11px; padding: 8px 0;">${escapeHtml(data.inquiry_type || "bulk")}</td>
        </tr>
      </table>

      <!-- Direct Contact Details -->
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Buyer Contact Details
      </h3>

      <table width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13px; margin-bottom: 24px; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td width="35%" style="color: #777777; padding: 8px 0;"><strong>Email Address:</strong></td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.business_email)}" style="color: #9C5134; font-weight: 600;">${escapeHtml(data.business_email)}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Phone / WhatsApp:</strong></td>
          <td style="padding: 8px 0;"><a href="tel:${escapeHtml(data.phone_or_whatsapp)}" style="color: #1a1a1a; font-family: monospace;">${escapeHtml(data.phone_or_whatsapp)}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0ece3;">
          <td style="color: #777777; padding: 8px 0;"><strong>Country:</strong></td>
          <td style="color: #1a1a1a; padding: 8px 0;">${escapeHtml(data.country || "Not specified")}</td>
        </tr>
      </table>

      <!-- Customization Requirements & Message -->
      ${data.customization_requirements || data.message ? `
      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; color: #888888; margin: 0 0 12px 0; border-bottom: 1px solid #eeeeee; padding-bottom: 6px;">
        Customization Requirements &amp; Notes
      </h3>
      <div style="background-color: #FAF8F5; border: 1px solid #e5ded3; padding: 16px; font-size: 13px; line-height: 1.6; color: #2a2a2a; margin-bottom: 24px;">
        ${data.customization_requirements ? `<p style="margin: 0 0 10px 0;"><strong>Requirements:</strong><br>${escapeHtml(data.customization_requirements).replace(/\n/g, "<br>")}</p>` : ""}
        ${data.message ? `<p style="margin: 0;"><strong>Message:</strong><br>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>` : ""}
      </div>` : ""}

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

    const result = await resend.emails.send({
      from: DEFAULT_FROM,
      to: [ADMIN_NOTIFICATION_EMAIL],
      replyTo: data.business_email,
      subject,
      html: htmlContent,
    });

    console.log("[Email] Admin inquiry notification sent successfully:", result);
    return { success: true, result };
  } catch (err: any) {
    console.error("[Email] Failed to send admin inquiry notification:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Send an email notification when a Lookbook/Catalogue is requested.
 */
export async function sendCatalogueRequestNotificationToAdmin(data: CatalogueNotificationPayload) {
  if (!resend) {
    console.warn("[Email] RESEND_API_KEY is not configured. Skipping catalogue email notification.");
    return { success: false, reason: "missing_api_key" };
  }

  try {
    const subject = `📁 Lookbook Request: ${data.company_name} (${data.full_name}) - ${data.country}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f7f5f0; margin: 0; padding: 24px; color: #1a1a1a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5ded3; padding: 32px;">
    <h2 style="margin: 0 0 8px 0; color: #1a1a1a; font-size: 20px;">New B2B Lookbook Request</h2>
    <p style="color: #666; font-size: 13px; margin: 0 0 20px 0;">A buyer has requested the UNICON LEATHER export catalogue.</p>

    <div style="background-color: #faf8f5; border-left: 3px solid #9C5134; padding: 14px 18px; margin-bottom: 20px;">
      <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Buyer:</strong> ${escapeHtml(data.full_name)}</p>
      <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Company:</strong> ${escapeHtml(data.company_name)}</p>
      <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(data.business_email)}" style="color: #9C5134;">${escapeHtml(data.business_email)}</a></p>
      <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Country:</strong> ${escapeHtml(data.country)}</p>
      <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Annual Volume:</strong> ${escapeHtml(data.estimated_annual_volume || "Not specified")}</p>
      <p style="margin: 0; font-size: 14px;"><strong>Interests:</strong> ${escapeHtml((data.interests || []).join(", ") || "Full Collection")}</p>
    </div>

    <a href="mailto:${escapeHtml(data.business_email)}?subject=UNICON%20LEATHER%20Export%20Catalogue%20Lookbook"
       style="display: inline-block; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; padding: 10px 18px;">
      Reply &amp; Send Lookbook
    </a>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: DEFAULT_FROM,
      to: [ADMIN_NOTIFICATION_EMAIL],
      replyTo: data.business_email,
      subject,
      html: htmlContent,
    });

    console.log("[Email] Admin catalogue notification sent successfully:", result);
    return { success: true, result };
  } catch (err: any) {
    console.error("[Email] Failed to send catalogue notification:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Send an automatic branded confirmation email to the buyer
 * acknowledging receipt of their RFQ.
 */
export async function sendBuyerConfirmationEmail(data: InquiryNotificationPayload) {
  if (!resend) {
    return { success: false, reason: "missing_api_key" };
  }

  try {
    const subject = `Inquiry Acknowledgment: UNICON LEATHER Export Desk`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #faf8f5; margin: 0; padding: 24px; color: #1a1a1a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5ded3; padding: 36px 32px;">
    <h1 style="color: #1a1a1a; margin: 0 0 8px 0; font-size: 22px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">
      UNICON <span style="color: #9C5134;">LEATHER</span>
    </h1>
    <p style="color: #888888; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 24px 0;">
      OEM/ODM Luxury Leather Goods Manufacturer &bull; India
    </p>

    <h2 style="font-size: 18px; margin: 0 0 12px 0; color: #1a1a1a;">
      Dear ${escapeHtml(data.buyer_name)},
    </h2>

    <p style="font-size: 14px; line-height: 1.6; color: #444444; margin: 0 0 16px 0;">
      Thank you for contacting UNICON LEATHER regarding your manufacturing requirements for <strong>${escapeHtml(data.company_name)}</strong>.
    </p>

    <p style="font-size: 14px; line-height: 1.6; color: #444444; margin: 0 0 20px 0;">
      Our senior export merchandising and engineering team has received your specifications. We are currently evaluating your technical details (${escapeHtml(data.product_category || "Leather Goods")}, quantity: ${escapeHtml(data.required_quantity || "Standard MOQ")}) and will respond with a preliminary FOB/CIF quotation within <strong>12 to 24 business hours</strong>.
    </p>

    <div style="background-color: #faf8f5; border: 1px solid #e5ded3; padding: 18px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9C5134;">
        Direct Merchandiser Line
      </h3>
      <p style="margin: 0; font-size: 13px; color: #555555; line-height: 1.6;">
        For immediate sample requests or urgent inquiries, you may reach our export desk directly on WhatsApp:
        <br>
        <a href="${COMPANY_INFO.whatsappDirectUrl}" style="color: #9C5134; font-weight: bold;">
          Chat on WhatsApp: ${COMPANY_INFO.phone} &rarr;
        </a>
      </p>
    </div>

    <div style="font-size: 12px; color: #777777; line-height: 1.6; border-top: 1px solid #eeeeee; padding-top: 16px;">
      <p style="margin: 0 0 4px 0;"><strong>UNICON LEATHER Export Desk</strong></p>
      <p style="margin: 0 0 4px 0;">Email: <a href="mailto:${COMPANY_INFO.primaryEmail}" style="color: #9C5134;">${COMPANY_INFO.primaryEmail}</a> &bull; Phone: ${COMPANY_INFO.phone}</p>
      <p style="margin: 0;">LWG Audited Tanneries &bull; EU REACH Annex XVII Compliant &bull; California Prop 65 Tested</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: DEFAULT_FROM,
      to: [data.business_email],
      replyTo: COMPANY_INFO.primaryEmail,
      subject,
      html: htmlContent,
    });

    console.log("[Email] Buyer confirmation email dispatched successfully:", result);
    return { success: true, result };
  } catch (err: any) {
    console.error("[Email] Failed to send buyer confirmation email:", err);
    return { success: false, error: err.message };
  }
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
