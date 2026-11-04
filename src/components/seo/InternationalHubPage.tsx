import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Download,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { Accordion } from "@/components/ui/Accordion";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";
import { JsonLdScript, generateBreadcrumbSchema } from "@/components/seo/JsonLdScript";
import { InternationalMarketConfig, INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

interface InternationalHubPageProps {
  market: InternationalMarketConfig;
}

interface LocalizedUiCopy {
  ctaQuote: string;
  ctaLookbook: string;
  pricingTermsSuffix: string;
  tradeTermsTitle: string;
  whatsappLabel: string;
  workflowKicker: string;
  workflowHeading: (country: string) => string;
  steps: { title: string; desc: string }[];
  catalogueKicker: string;
  catalogueHeading: (country: string) => string;
  catalogueLink: string;
  faqKicker: string;
  faqHeading: string;
  formKicker: string;
  formHeading: (country: string) => string;
  formDesc: (currency: string) => string;
  languageNote?: string;
}

const DEFAULT_EN_UI: LocalizedUiCopy = {
  ctaQuote: "Request B2B Sourcing Quotation",
  ctaLookbook: "Download Export Lookbook",
  pricingTermsSuffix: "Pricing Terms",
  tradeTermsTitle: "Trade Terms & Export SLA",
  whatsappLabel: "Direct WhatsApp Assistance for",
  workflowKicker: "Turnkey Contract Manufacturing",
  workflowHeading: (country) => `How We Partner with Brands in ${country}`,
  steps: [
    {
      title: "CAD & Tech Pack Digitize",
      desc: "Send your 2D sketches, Adobe Illustrator specs, or reference physical bags. We digitize patterns and issue 24h costings.",
    },
    {
      title: "Rapid Counter-Sample",
      desc: "Physical golden samples crafted within 7–14 days using LWG-audited partner tannery swatches and custom hardware strike-offs.",
    },
    {
      title: "Batch Cut & Sew Production",
      desc: "Precision skiving, turned-edge stitching, and multi-layer Italian edge painting with in-line AQL 2.5 defect audits.",
    },
    {
      title: "Direct Export Fulfillment",
      desc: "Door-to-door delivery with export documentation, Certificate of Origin, and customs brokerage to your warehouse.",
    },
  ],
  catalogueKicker: "Export Ready Catalogue",
  catalogueHeading: (country) => `High-Demand Silhouettes for ${country}`,
  catalogueLink: "View Complete 12-Line Catalogue",
  faqKicker: "Trade Logistics & Protocol",
  faqHeading: "Frequently Asked Sourcing Questions",
  formKicker: "Direct Export Desk",
  formHeading: (country) => `Request a Production Quote for ${country}`,
  formDesc: (currency) =>
    `Submit your tech pack, target quantities, or reference images. Our export engineering team responds within 24 business hours with tiered pricing in ${currency}.`,
};

const LOCALIZED_UI: Record<string, LocalizedUiCopy> = {
  "en-us": {
    ctaQuote: "Request US Landed (DDP / FOB) Quotation",
    ctaLookbook: "Download US Export Catalogue",
    pricingTermsSuffix: "US Import Terms",
    tradeTermsTitle: "US Customs (CBP) & Export SLA",
    whatsappLabel: "Direct US Export Desk on WhatsApp for",
    workflowKicker: "US Private Label & Contract Manufacturing (Section 301 Exempt)",
    workflowHeading: () => "4-Stage US Brand Production & CBP Clearance Workflow",
    steps: [
      {
        title: "US Tech Pack & BOM Engineering",
        desc: "Submit your Illustrator tech packs or physical samples. We issue line-item USD FOB/DDP costings with HTS Chapter 4202/4203 duty classifications within 24 hours.",
      },
      {
        title: "3-Tier DHL Express Sampling to USA",
        desc: "Stock-leather counter-samples ship to New York, LA, Texas, or Miami in 5–7 business days (SLGs/belts) or 7–14 business days (bags/jackets); +7–10 days for custom Pantone dye or 3D brass molds.",
      },
      {
        title: "Prop 65 / CPSIA Compliant Production",
        desc: "Cut-and-sew production in Kolkata CLC (Zone 09) using LWG-audited partner hides, lead-free (<90 ppm) brass hardware, 0.4mm skiving, and ISO 2859-1 AQL 2.5 inspections.",
      },
      {
        title: "Turnkey DDP Air & Ocean Freight (JFK / LAX / SAV)",
        desc: "Door-to-door air cargo (4–6 days) or FCL/LCL sea freight to US 3PL warehouses with commercial invoice, packing list, ISF 10+2 filing, and customs brokerage.",
      },
    ],
    catalogueKicker: "US Retail & DTC Reference Line",
    catalogueHeading: () => "Proven Leather Silhouettes for US Fashion & Heritage Brands",
    catalogueLink: "Explore Complete 12-Category US Catalogue",
    faqKicker: "US CBP Tariffs, Prop 65 & MOQs",
    faqHeading: "US Buyer Frequently Asked Questions (USA Import & OEM)",
    formKicker: "North America Export Desk",
    formHeading: () => "Request a USD Production Quote for United States Delivery",
    formDesc: () =>
      "Submit your tech pack, target unit volume, and US destination state. Our export merchandising desk replies within 12–24 business hours with tiered FOB Kolkata and DDP USA pricing in USD ($).",
  },
  "en-gb": {
    ctaQuote: "Request GBP (£) / FOB Quotation",
    ctaLookbook: "Download UK & British Brand Catalogue",
    pricingTermsSuffix: "UK Import Terms",
    tradeTermsTitle: "UK REACH, HMRC & Export SLA",
    whatsappLabel: "Direct UK Export Desk on WhatsApp for",
    workflowKicker: "British Heritage & Contemporary Private-Label Atelier",
    workflowHeading: () => "4-Stage Contract Manufacturing Workflow for UK Brands",
    steps: [
      {
        title: "Savile & Shoreditch Tech Pack Review",
        desc: "Share your CAD specifications or reference leather goods. We calculate sq. ft. hide yield and issue itemized GBP (£), EUR (€), or USD ($) quotations within 24 hours.",
      },
      {
        title: "5–14 Business Day Counter-Samples to London & UK",
        desc: "Physical prototypes crafted in stock leather ship via DHL Express in 5–7 business days (wallets/belts) or 7–14 business days (handbags/jackets); +7–10 days for custom dye/tooling.",
      },
      {
        title: "UK REACH & Bridle Benchcraft Execution",
        desc: "0.4mm Fortuna edge skiving, 3-coat Fenice Italian edge paint, solid brass hardware (<0.5 µg/cm²/wk nickel release), and batch-testable UK REACH Annex XVII compliance.",
      },
      {
        title: "Direct Dispatch via Heathrow (LHR) & Felixstowe",
        desc: "Express air freight to London Heathrow or sea consolidation to Felixstowe/Southampton with full HMRC Commodity Code 4202/4203 export documentation.",
      },
    ],
    catalogueKicker: "UK Designer & Retail Silhouettes",
    catalogueHeading: () => "Signature Leather Bags, Bridle Belts & SLGs for UK Brands",
    catalogueLink: "Browse Full 12-Category UK Export Collection",
    faqKicker: "UK REACH, HMRC Duty & Trial MOQs",
    faqHeading: "UK Procurement & Private-Label Manufacturing FAQ",
    formKicker: "UK & British Brands Desk",
    formHeading: () => "Request a GBP (£) Production Quotation for UK Delivery",
    formDesc: () =>
      "Share your tech pack, target quantities (50–100 pc stock trial MOQ), and UK postcode. Our export desk responds within 24 business hours with tiered GBP (£) or USD ($) pricing.",
  },
  "en-ca": {
    ctaQuote: "Request CAD ($) / USD Quotation",
    ctaLookbook: "Download Canada Export Catalogue",
    pricingTermsSuffix: "Canada Import Terms",
    tradeTermsTitle: "CBSA Customs & Export SLA",
    whatsappLabel: "Direct Canada Export Desk on WhatsApp for",
    workflowKicker: "Turnkey Contract Leather Manufacturing for Canadian Brands",
    workflowHeading: () => "4-Stage OEM Production & CBSA Delivery Workflow for Canada",
    steps: [
      {
        title: "CAD Pattern & Cold-Climate Material Spec",
        desc: "Send your Illustrator tech packs or reference pieces. We specify cold-crack resistant full-grain Nappa, pull-up cowhide, or shearling linings with 24h CAD/USD quotes.",
      },
      {
        title: "3-Tier Express Sampling to Toronto, Vancouver & Montreal",
        desc: "Stock-leather prototypes ship via DHL/FedEx in 5–7 business days (SLGs/belts) or 7–14 business days (bags/jackets); +7–10 business days for custom Pantone dye or 3D brass molds.",
      },
      {
        title: "Precision Cut, Skive & AQL 2.5 Quality Audit",
        desc: "Hydraulic die-cutting, German 0.4mm edge skiving, heavy-duty bonded nylon lockstitching, and 4-stage ISO 2859-1 (AQL 2.5) inspection prior to packing.",
      },
      {
        title: "DDP Air & Ocean Freight (YYZ / YVR / YUL)",
        desc: "Direct air cargo to Toronto Pearson / Vancouver or sea freight to Port of Vancouver / Montreal with complete CBSA commercial invoices and Certificate of Origin.",
      },
    ],
    catalogueKicker: "Canadian Retail & Corporate Collection",
    catalogueHeading: () => "Curated Leather Bags, Outerwear & Wallets for Canadian Brands",
    catalogueLink: "View Complete 12-Category Canada Catalogue",
    faqKicker: "CBSA Duties, Cold-Weather Hides & MOQs",
    faqHeading: "Canadian B2B Leather Sourcing & Import FAQ",
    formKicker: "Canada Export Desk",
    formHeading: () => "Request a Production Quote for Canadian Delivery (CAD / USD)",
    formDesc: () =>
      "Submit your tech pack, target quantities, and Canadian province. Our export engineering team replies within 24 business hours with tiered FOB and DDP Canada pricing.",
  },
  "en-au": {
    ctaQuote: "Request 0%-Duty ECTA Quote (AUD / USD)",
    ctaLookbook: "Download Australia & NZ Catalogue",
    pricingTermsSuffix: "AU-India ECTA Terms",
    tradeTermsTitle: "0% Duty ECTA & Export SLA",
    whatsappLabel: "Direct Australia Export Desk on WhatsApp for",
    workflowKicker: "0% Import Tariff under India-Australia ECTA Trade Agreement",
    workflowHeading: () => "4-Stage Duty-Free Manufacturing Workflow for Australian Brands",
    steps: [
      {
        title: "Tech Pack Review & ECTA Tariff Verification",
        desc: "Share your sketches or tech packs. We prepare itemized AUD ($)/USD ($) quotes and verify HS Chapter 4202/4203 eligibility for 0% preferential duty under Ind-Aus ECTA.",
      },
      {
        title: "5–14 Business Day DHL Sampling to Sydney & Melbourne",
        desc: "Stock-leather prototypes dispatch in 5–7 business days (wallets/belts) or 7–14 business days (handbags/duffels/jackets); +7–10 days for custom Pantone dye or custom hardware.",
      },
      {
        title: "LWG Partner Hides & DAFF Biosecurity Compliance",
        desc: "Crafted with LWG-audited partner tannery hides fully finished and moisture-controlled (<14% RH) to pass Australian DAFF biosecurity inspection without fumigation delays.",
      },
      {
        title: "Direct Air & Sea Freight (SYD / MEL / BNE / PER)",
        desc: "Express air freight or FCL/LCL ocean consolidation with official DGFT India-Australia ECTA Certificate of Origin for 0% customs duty clearance.",
      },
    ],
    catalogueKicker: "Australian & NZ Brand Collection",
    catalogueHeading: () => "High-Demand Leather Silhouettes for Australian & NZ Labels",
    catalogueLink: "View Full 12-Category Australia Export Catalogue",
    faqKicker: "Ind-Aus ECTA 0% Duty, DAFF & Trial MOQs",
    faqHeading: "Australian B2B Leather Manufacturing & ECTA Import FAQ",
    formKicker: "Australia & Oceania Export Desk",
    formHeading: () => "Request a Duty-Free ECTA Production Quote for Australia",
    formDesc: () =>
      "Submit your tech pack and target volume (50–100 pc stock trial MOQ). Our export team replies within 24 business hours with tiered AUD ($) or USD ($) quotations.",
  },
  de: {
    ctaQuote: "B2B-Produktionsangebot anfordern",
    ctaLookbook: "Export-Katalog anfordern",
    pricingTermsSuffix: "Handelskonditionen",
    tradeTermsTitle: "Export- & Lieferkonditionen (SLA)",
    whatsappLabel: "Direkter WhatsApp-Exportdesk für",
    workflowKicker: "Schlüsselfertige Auftragsfertigung (OEM/ODM)",
    workflowHeading: (country) => `Unser 4-Stufen-Produktionsprozess für ${country}`,
    steps: [
      {
        title: "CAD & Tech-Pack-Prüfung",
        desc: "Senden Sie Ihre Skizzen, Illustrator-Tech-Packs oder Referenzmuster. Wir erstellen digitale Schnittmuster und eine 24h-Kalkulation.",
      },
      {
        title: "Prototypen & Erstmuster",
        desc: "Physische Freigabemuster in 7–14 Werktagen aus LWG-zertifizierten Partner-Gerbereien inkl. Beschlag-Freigabe.",
      },
      {
        title: "Serienfertigung & Feinschliff",
        desc: "0,4 mm Schärfung, mehrschichtige italienische Kantenfarbe und 4-stufige Qualitätskontrolle nach ISO 2859-1 (AQL 2.5).",
      },
      {
        title: "Direkter Export (FOB / DDP)",
        desc: "Komplette Zollabwicklung, Ursprungszeugnis und Lieferung per Luft- oder Seefracht direkt an Ihr Lager.",
      },
    ],
    catalogueKicker: "B2B-Referenzkollektion",
    catalogueHeading: (country) => `Gefragte Lederwaren-Modelle für ${country}`,
    catalogueLink: "Kompletten B2B-Katalog ansehen",
    faqKicker: "Zoll, Logistik & Qualitätssicherung",
    faqHeading: "Häufig gestellte B2B-Einkaufsfragen (FAQ)",
    formKicker: "Direkter Export-Desk",
    formHeading: (country) => `Produktionsangebot für ${country} anfordern`,
    formDesc: (currency) =>
      `Senden Sie Ihr Tech-Pack, Zielmengen oder Referenzbilder. Unser Export-Engineering-Team antwortet innerhalb von 24 Geschäftsstunden mit Staffelpreisen in ${currency}.`,
    languageNote:
      "Hinweis für Einkäufer aus DACH: Sie können Ihre Anfrage im untenstehenden Formular gerne auf Deutsch oder Englisch einreichen. Technische Spezifikationen und Produktdatenblätter werden nach internationalem B2B-Standard auf Englisch geführt.",
  },
  fr: {
    ctaQuote: "Demander un Devis B2B",
    ctaLookbook: "Télécharger le Lookbook Export",
    pricingTermsSuffix: "Conditions Tarifaires",
    tradeTermsTitle: "Conditions d'Exportation & Délais",
    whatsappLabel: "Assistance WhatsApp Directe pour",
    workflowKicker: "Fabrication à Façon Clé en Main (OEM/ODM)",
    workflowHeading: (country) => `Notre Processus de Production pour ${country}`,
    steps: [
      {
        title: "Patronage CAO & Tech Pack",
        desc: "Transmettez vos croquis, dossiers techniques ou échantillons physiques. Nos modélistes chiffrent votre projet sous 24h.",
      },
      {
        title: "Prototypage en 7–14 Jours",
        desc: "Confection du prototype de validation avec cuirs issus de tanneries partenaires certifiées LWG et bijouterie sur mesure.",
      },
      {
        title: "Production & Finition Sellier",
        desc: "Parage à 0,4 mm, teinture de tranche italienne multicouche et contrôle qualité rigoureux selon la norme AQL 2.5.",
      },
      {
        title: "Expédition Directe (FOB / DDP)",
        desc: "Livraison porte-à-porte avec certificat d'origine et dédouanement complet jusqu'à votre entrepôt logistique.",
      },
    ],
    catalogueKicker: "Collection B2B Export",
    catalogueHeading: (country) => `Silhouettes de Maroquinerie prisées en ${country}`,
    catalogueLink: "Voir le Catalogue Complet (12 Lignes)",
    faqKicker: "Logistique, Douanes & Conformité",
    faqHeading: "Questions Fréquentes des Acheteurs B2B",
    formKicker: "Bureau d'Exportation Direct",
    formHeading: (country) => `Demander un Devis de Production (${country})`,
    formDesc: (currency) =>
      `Soumettez votre dossier technique, vos quantités cibles ou vos visuels. Notre équipe vous répond sous 24h ouvrées avec une cotation détaillée en ${currency}.`,
    languageNote:
      "Note aux acheteurs francophones : Vous pouvez rédiger votre demande en français ou en anglais. Les fiches techniques du catalogue ci-dessus sont présentées selon la nomenclature internationale B2B en anglais.",
  },
  it: {
    ctaQuote: "Richiedi Preventivo B2B",
    ctaLookbook: "Scarica il Catalogo Export",
    pricingTermsSuffix: "Condizioni Commerciali",
    tradeTermsTitle: "Termini di Esportazione & SLA",
    whatsappLabel: "Assistenza WhatsApp Diretta per",
    workflowKicker: "Produzione Conto Terzi Chiavi in Mano (OEM/ODM)",
    workflowHeading: (country) => `Come Collaboriamo con i Brand in ${country}`,
    steps: [
      {
        title: "Modelleria CAD & Tech Pack",
        desc: "Inviate schizzi, file Illustrator o campioni fisici. Digitalizziamo i cartamodelli e forniamo quotazioni in 24 ore.",
      },
      {
        title: "Campionatura in 7–14 Giorni",
        desc: "Prototipi fisici realizzati con pellami di concerie partner certificate LWG e minuteria metallica personalizzata.",
      },
      {
        title: "Produzione & Coste Tinte a Mano",
        desc: "Scarnitura a 0,4 mm, verniciatura bordi multistrato e ispezione qualità completa secondo lo standard AQL 2.5.",
      },
      {
        title: "Spedizione Diretta (FOB / DDP)",
        desc: "Consegna franco magazzino con documentazione doganale, Certificato di Origine e sdoganamento incluso.",
      },
    ],
    catalogueKicker: "Catalogo B2B Pronto all'Export",
    catalogueHeading: (country) => `Modelli di Pelletteria Richiesti in ${country}`,
    catalogueLink: "Esplora il Catalogo Completo",
    faqKicker: "Logistica, Dogana & Conformità REACH",
    faqHeading: "Domande Frequenti sull'Approvvigionamento B2B",
    formKicker: "Ufficio Export Diretto",
    formHeading: (country) => `Richiedi un Preventivo di Produzione per ${country}`,
    formDesc: (currency) =>
      `Invia il tuo tech pack, le quantità target o immagini di riferimento. Il nostro team risponde entro 24 ore lavorative con prezzi scaglionati in ${currency}.`,
    languageNote:
      "Nota per i buyer italiani: Potete compilare il modulo di richiesta in italiano o in inglese. Le schede tecniche del catalogo utilizzano lo standard internazionale B2B in lingua inglese.",
  },
  es: {
    ctaQuote: "Solicitar Presupuesto B2B",
    ctaLookbook: "Descargar Catálogo de Exportación",
    pricingTermsSuffix: "Condiciones Comerciales",
    tradeTermsTitle: "Condiciones de Exportación y Plazos",
    whatsappLabel: "Asistencia Directa por WhatsApp para",
    workflowKicker: "Fabricación Integral para Marcas (OEM/ODM)",
    workflowHeading: (country) => `Cómo Trabajamos con Marcas en ${country}`,
    steps: [
      {
        title: "Patronaje CAD y Ficha Técnica",
        desc: "Envíe sus bocetos, archivos Illustrator o muestras físicas. Digitalizamos patrones y cotizamos en 24 horas.",
      },
      {
        title: "Prototipado en 7–14 Días",
        desc: "Muestras físicas confeccionadas con pieles de curtidurías asociadas certificadas LWG y herrajes personalizados.",
      },
      {
        title: "Producción y Lujado de Cantos",
        desc: "Rebajado de piel a 0,4 mm, pintura italiana de cantos multicapa y control de calidad según norma AQL 2.5.",
      },
      {
        title: "Entrega Directa (FOB / DDP)",
        desc: "Envío puerta a puerta con despacho aduanero, Certificado de Origen y entrega directa en su almacén.",
      },
    ],
    catalogueKicker: "Catálogo B2B de Exportación",
    catalogueHeading: (country) => `Modelos de Marroquinería Destacados para ${country}`,
    catalogueLink: "Ver Catálogo Completo (12 Líneas)",
    faqKicker: "Logística, Aduanas y Normativa REACH",
    faqHeading: "Preguntas Frecuentes de Compradores B2B",
    formKicker: "Departamento de Exportación Directa",
    formHeading: (country) => `Solicitar Presupuesto de Producción (${country})`,
    formDesc: (currency) =>
      `Envíe su ficha técnica, cantidades objetivo o imágenes de referencia. Nuestro equipo responde en 24 horas laborables con precios por volumen en ${currency}.`,
    languageNote:
      "Nota para compradores en España y Latinoamérica: Puede enviar su consulta en español o inglés en el formulario inferior.",
  },
  ar: {
    ctaQuote: "طلب عرض سعر للتصنيع (B2B)",
    ctaLookbook: "تحميل كتالوج التصدير",
    pricingTermsSuffix: "شروط التسعير",
    tradeTermsTitle: "شروط التصدير ومدة التوريد",
    whatsappLabel: "تواصل مباشر عبر واتساب لعملاء",
    workflowKicker: "تصنيع متكامل للعلامات التجارية الخاصة (OEM/ODM)",
    workflowHeading: (country) => `خطوات التصنيع والتوريد لعلامات الأزياء في ${country}`,
    steps: [
      {
        title: "مراجعة التصاميم والملف التقني",
        desc: "أرسل رسوماتك أو ملفات Tech Pack أو العينات المرجعية لإعداد الباترون الرقمي وتسعير الإنتاج خلال 24 ساعة.",
      },
      {
        title: "تنفيذ العينة خلال 7–14 يوماً",
        desc: "تصنيع نموذج أولي باستخدام جلود طبيعية من مدابغ معتمدة من LWG مع إكسسوارات وشعار علامتكم التجارية.",
      },
      {
        title: "الإنتاج المتقن وفحص الجودة",
        desc: "حياكة دقيقة وصبغ حواف إيطالي متعدد الطبقات مع فحص جودة شامل وفق معيار AQL 2.5 العالمي.",
      },
      {
        title: "شحن مباشر وتخليص جمركي",
        desc: "شحن جوي وبحري مباشر مع شهادة المنشأ المعتمدة (CEPA 0%) والتوصيل حتى مستودعاتكم.",
      },
    ],
    catalogueKicker: "كتالوج المنتجات الجاهزة للتخصيص",
    catalogueHeading: (country) => `أبرز التصاميم المطلوبة في ${country}`,
    catalogueLink: "عرض الكتالوج الكامل (12 فئة)",
    faqKicker: "الشحن الجمركي ومعايير الجودة",
    faqHeading: "الأسئلة الشائعة لعملاء الجملة والعلامات التجارية",
    formKicker: "مكتب التصدير المباشر",
    formHeading: (country) => `طلب عرض سعر لتصنيع المنتجات الجلدية (${country})`,
    formDesc: (currency) =>
      `أرسل تفاصيل طلبك والكميات المستهدفة، وسيتواصل معك فريق هندسة التصدير خلال 24 ساعة عمل بعرض سعر مفصل بعملة ${currency}.`,
    languageNote:
      "ملاحظة: يمكنكم كتابة تفاصيل طلبكم باللغة العربية أو الإنجليزية في النموذج أدناه.",
  },
  ja: {
    ctaQuote: "OEMお見積り・試作のご相談",
    ctaLookbook: "総合カタログをダウンロード",
    pricingTermsSuffix: "取引条件",
    tradeTermsTitle: "日本向け輸出条件・リードタイム",
    whatsappLabel: "WhatsAppでの直接のお問い合わせ:",
    workflowKicker: "一貫生産体制によるOEM/ODM受託製造",
    workflowHeading: (country) => `${country}のブランド様との4ステップ製造フロー`,
    steps: [
      {
        title: "仕様書・CADパターン設計",
        desc: "仕様書（Tech Pack）、スケッチ、または参考サンプルをご共有ください。24時間以内に概算お見積りを提示します。",
      },
      {
        title: "7〜14営業日での迅速な試作",
        desc: "LWG監査済みパートナータンナーの本革と特注金具を使用し、ファーストサンプルを製作・DHL発送いたします。",
      },
      {
        title: "本生産・0.4mm漉き・コバ仕上げ",
        desc: "イタリア製コバ塗料の多層塗り、精密縫製、およびISO 2859-1 (AQL 2.5) に基づく出荷前検品・検針を実施。",
      },
      {
        title: "日本への直接輸出 (FOB / DDP)",
        desc: "日印CEPA原産地証明書の発行および航空便・船便での迅速な納品に対応いたします。",
      },
    ],
    catalogueKicker: "OEMカスタマイズ対応サンプル",
    catalogueHeading: (country) => `${country}市場向け厳選レザープロダクト`,
    catalogueLink: "全12カテゴリーのカタログを見る",
    faqKicker: "品質管理・通関・最小ロット",
    faqHeading: "日本のバイヤー様からよくいただくご質問 (FAQ)",
    formKicker: "日本担当エクスポートデスク",
    formHeading: (country) => `${country}向けOEMお見積り・サンプル依頼フォーム`,
    formDesc: (currency) =>
      `仕様書、ご希望数量、または参考画像を送信してください。24営業時間以内に${currency}またはUSDにてお見積りをご案内いたします。`,
    languageNote:
      "※下部のお問い合わせフォームは日本語または英語でご記入いただけます（製品スペック表は国際B2B標準の英語表記となっております）。",
  },
  nl: {
    ctaQuote: "B2B Offerte Aanvragen",
    ctaLookbook: "Export Lookbook Downloaden",
    pricingTermsSuffix: "Handelsvoorwaarden",
    tradeTermsTitle: "Exportvoorwaarden & Levertijden",
    whatsappLabel: "Directe WhatsApp-ondersteuning voor",
    workflowKicker: "Turnkey Contractproductie (OEM/ODM)",
    workflowHeading: (country) => `Hoe Wij Samenwerken met Merken in ${country}`,
    steps: [
      {
        title: "CAD & Tech-Pack Digitalisatie",
        desc: "Stuur uw schetsen, Illustrator-bestanden of fysieke referenties. Wij maken digitale patronen en offreren binnen 24 uur.",
      },
      {
        title: "Prototype in 7–14 Werkdagen",
        desc: "Fysieke monsters vervaardigd met leer van LWG-gecertificeerde partnerlooierijen en op maat gemaakte fournituren.",
      },
      {
        title: "Productie & Kwaliteitscontrole",
        desc: "0,4 mm schalmen, meerlaagse Italiaanse randverf en 4-staps kwaliteitscontrole volgens AQL 2.5 normen.",
      },
      {
        title: "Directe Levering (FOB / DDP)",
        desc: "Deur-tot-deur levering inclusief exportdocumentatie en douane-inklaring via Rotterdam of Schiphol.",
      },
    ],
    catalogueKicker: "B2B Collectie Overzicht",
    catalogueHeading: (country) => `Populaire Lederwaren Modellen voor ${country}`,
    catalogueLink: "Bekijk de Volledige Catalogus",
    faqKicker: "Logistiek, Douane & REACH",
    faqHeading: "Veelgestelde Vragen over B2B Inkoop",
    formKicker: "Directe Export Desk",
    formHeading: (country) => `Productie-offerte Aanvragen voor ${country}`,
    formDesc: (currency) =>
      `Stuur uw tech-pack, beoogde aantallen of referentiebeelden. Ons exportteam reageert binnen 24 werkuren met staffelprijzen in ${currency}.`,
    languageNote:
      "Opmerking voor Nederlandse en Belgische inkopers: U kunt uw aanvraag in het onderstaande formulier in het Nederlands of Engels indienen.",
  },
  sv: {
    ctaQuote: "Begär B2B-offert",
    ctaLookbook: "Ladda ner Exportkatalog",
    pricingTermsSuffix: "Handelsvillkor",
    tradeTermsTitle: "Exportvillkor & Leveranstider",
    whatsappLabel: "Direkt WhatsApp-support för",
    workflowKicker: "Nyckelfärdig Kontraktstillverkning (OEM/ODM)",
    workflowHeading: (country) => `Hur Vi Samarbetar med Varumärken i ${country}`,
    steps: [
      {
        title: "CAD & Tech Pack-granskning",
        desc: "Skicka era skisser, Illustrator-filer eller referensväskor. Vi digitaliserar mönster och återkommer med offert inom 24 timmar.",
      },
      {
        title: "Prototyp inom 7–14 Arbetsdagar",
        desc: "Fysiska arbetsprover tillverkade med läder från LWG-granskade partnergarverier och skräddarsydda metallbeslag.",
      },
      {
        title: "Produktion & AQL 2.5 Kvalitetskontroll",
        desc: "0,4 mm skärfling, flerskikts italiensk kantfärg och noggrann kvalitetskontroll enligt ISO 2859-1 (AQL 2.5).",
      },
      {
        title: "Direktleverans (FOB / DDP)",
        desc: "Leverans direkt till ert lager med exportdokumentation, ursprungsintyg och komplett tullklarering.",
      },
    ],
    catalogueKicker: "Exportklar B2B-katalog",
    catalogueHeading: (country) => `Efterfrågade Lädermodeller för ${country}`,
    catalogueLink: "Visa Hela Katalogen (12 Kategorier)",
    faqKicker: "Logistik, Tull & REACH-efterlevnad",
    faqHeading: "Vanliga Frågor om B2B-inköp",
    formKicker: "Direkt Exportdesk",
    formHeading: (country) => `Begär Produktionsoffert för ${country}`,
    formDesc: (currency) =>
      `Skicka in ert tech pack, målvolymer eller referensbilder. Vårt exportteam svarar inom 24 arbetstimmar med prisnivåer i ${currency}.`,
    languageNote:
      "Notering för nordiska inköpare: Ni kan skicka er förfrågan på svenska eller engelska i formuläret nedan.",
  },
  ko: {
    ctaQuote: "B2B 생산 견적 요청하기",
    ctaLookbook: "수출용 룩북 다운로드",
    pricingTermsSuffix: "거래 조건",
    tradeTermsTitle: "수출 조건 및 리드타임 (SLA)",
    whatsappLabel: "WhatsApp 실시간 수출 상담:",
    workflowKicker: "원스톱 맞춤형 OEM/ODM 위탁 생산",
    workflowHeading: (country) => `${country} 패션 브랜드를 위한 4단계 생산 프로세스`,
    steps: [
      {
        title: "CAD 패턴 및 작업지시서 검토",
        desc: "스케치, 일러스트레이터 작업지시서(Tech Pack) 또는 샘플을 보내주시면 24시간 내에 가견적을 안내해 드립니다.",
      },
      {
        title: "7~14영업일 내 실물 샘플 제작",
        desc: "LWG 감사 파트너 테너리의 천연가죽과 맞춤형 금속 부자재를 적용하여 마스터 샘플을 제작·발송합니다.",
      },
      {
        title: "본생산 및 엣지코트 마감·검품",
        desc: "0.4mm 정밀 스카이빙, 이탈리아 엣지코트 다중 도포 및 ISO 2859-1 (AQL 2.5) 기준 전수 검품·검침을 진행합니다.",
      },
      {
        title: "한국 직배송 및 통관 (FOB / DDP)",
        desc: "한-인도 CEPA 원산지증명서 발급을 통한 관세 절감 및 인천공항·부산항 DDP 직배송을 지원합니다.",
      },
    ],
    catalogueKicker: "OEM/ODM 레퍼런스 카탈로그",
    catalogueHeading: (country) => `${country} 시장 인기 가죽 제품 라인업`,
    catalogueLink: "전체 12개 카테고리 카탈로그 보기",
    faqKicker: "통관, 물류 및 품질 보증",
    faqHeading: "자주 묻는 B2B 제작 질문 (FAQ)",
    formKicker: "한국 전담 수출 데스크",
    formHeading: (country) => `${country} 브랜드 맞춤형 생산 견적 문의`,
    formDesc: (currency) =>
      `작업지시서(Tech Pack), 예상 수량 또는 참고 이미지를 제출해 주세요. 24영업시간 이내에 ${currency} 또는 USD 기준 단가표를 보내드립니다.`,
    languageNote:
      "※ 하단 문의 양식은 한국어 또는 영어로 작성하실 수 있습니다 (제품 상세 사양서는 글로벌 B2B 표준 영문으로 제공됩니다).",
  },
};

export function InternationalHubPage({ market }: InternationalHubPageProps) {
  const ui = LOCALIZED_UI[market.code] || DEFAULT_EN_UI;
  const baseUrl = "https://www.uniconleather.com";
  const canonicalUrl = `${baseUrl}${market.path}`;

  // 1. Breadcrumbs schema
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Global Export", url: `${baseUrl}/export` },
    { name: market.countryName, url: canonicalUrl },
  ]);

  // 2. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: market.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. Localized Manufacturer Schema
  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    name: `UNICON LEATHER — ${market.countryName} Export Desk`,
    legalName: COMPANY_INFO.legalName,
    url: canonicalUrl,
    logo: `${baseUrl}/favicon.svg`,
    description: market.metaDescription,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.primaryEmail,
    currenciesAccepted: `${market.currency}, USD`,
    priceRange: "$$",
    areaServed: market.locale.split("-")[1] || market.code.toUpperCase(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 676, 687, 944, 1084, Zone 09, Bantala, Kolkata Leather Complex",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "743502",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: `${market.countryName} B2B Export & OEM Sales Desk`,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.primaryEmail,
      areaServed: market.locale.split("-")[1] || market.code.toUpperCase(),
      availableLanguage: [
        "English",
        market.locale.split("-")[0],
      ],
    },
    sameAs: [
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.facebook,
    ],
    parentOrganization: {
      "@id": "https://www.uniconleather.com/#organization",
    },
  };

  // Filter 8 matching products from popular categories (matching category name, categorySlug, or partial token)
  const matchingProducts = PRODUCTS.filter((p) =>
    market.popularCategories.some(
      (catKey) =>
        p.category.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase() === catKey.toLowerCase() ||
        p.categorySlug.toLowerCase().includes(catKey.toLowerCase()) ||
        p.category.toLowerCase().includes(catKey.toLowerCase().replace("-", " "))
    )
  ).slice(0, 8);

  // Sibling markets for cross-regional navigation
  const siblingMarkets = Object.values(INTERNATIONAL_MARKETS).filter(
    (m) => m.code !== market.code
  );

  return (
    <>
      <JsonLdScript schema={breadcrumbsSchema} />
      <JsonLdScript schema={faqSchema} />
      <JsonLdScript schema={manufacturerSchema} />

      <div className="w-full flex flex-col items-center" dir={market.code === "ar" ? "rtl" : "ltr"} lang={market.locale}>
        {/* HERO SECTION */}
        <section className="w-full !mt-0 !pt-0 bg-[#FAF8F5] border-b border-charcoal/10 relative overflow-hidden">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 pb-14 sm:pb-20">
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { label: "Global Export", href: "/export" },
                  { label: market.countryName, href: market.path },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Localized Headline & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-cognac/30 text-cognac font-mono text-[11px] tracking-widest uppercase">
                  <span className="text-sm">{market.flag}</span>
                  <span>{market.heroKicker}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-[1.15] tracking-tight">
                  {market.heroH1}
                </h1>

                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light max-w-2xl">
                  {market.heroSubtitle}
                </p>

                {/* Localized Compliance Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {market.complianceBadges.map((badge, idx) => (
                    <div
                      key={`comp-badge-${idx}`}
                      className="bg-white border border-charcoal/10 p-3 flex flex-col justify-center space-y-1 shadow-2xs hover:border-cognac/50 transition-colors"
                    >
                      <span className="text-xs font-serif font-bold text-charcoal flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                        {badge.title}
                      </span>
                      <span className="text-[10px] text-charcoal-500 leading-tight">
                        {badge.subtitle}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-cognac text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
                  >
                    {ui.ctaQuote}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/catalogue-request"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-charcoal/30 hover:border-cognac hover:text-cognac text-charcoal text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4 text-cognac" />
                    {ui.ctaLookbook}
                  </Link>
                </div>
              </div>

              {/* Right Column: Trade Terms Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="bg-white border-2 border-charcoal/15 p-6 sm:p-8 shadow-xl relative">
                  <div className="absolute top-0 right-0 bg-cognac text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-semibold">
                    {market.currency} ({market.currencySymbol}) {ui.pricingTermsSuffix}
                  </div>

                  <span className="font-serif text-lg font-semibold text-charcoal block mb-4">
                    {market.flag} {ui.tradeTermsTitle}
                  </span>

                  <div className="space-y-4">
                    {market.tradeHighlights.map((th, idx) => (
                      <div
                        key={`trade-hl-${idx}`}
                        className="border-b border-charcoal/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase text-charcoal-500 tracking-wider">
                            {th.label}
                          </span>
                          <span className="text-xs font-serif font-bold text-cognac">
                            {th.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-charcoal-600 mt-1 leading-snug">
                          {th.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/10 bg-[#FAF8F5] p-3 text-center space-y-2">
                    <div>
                      <span className="text-[11px] text-charcoal-600 block">
                        {ui.whatsappLabel} {market.countryName}:
                      </span>
                      <a
                        href={COMPANY_INFO.whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-cognac hover:underline mt-0.5 inline-block"
                      >
                        {COMPANY_INFO.whatsapp} ↗
                      </a>
                    </div>
                    <div className="pt-1 border-t border-charcoal/8">
                      <span className="text-[10px] text-charcoal-500 block uppercase tracking-wider font-mono">
                        Direct Email Desk:
                      </span>
                      <a
                        href="mailto:uniconexport@gmail.com"
                        className="text-xs font-mono font-bold text-charcoal hover:text-cognac mt-0.5 inline-block"
                      >
                        uniconexport@gmail.com ✉
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKET-SPECIFIC TRADE & COMPLIANCE SPECIFICATION STRIP */}
        <section
          aria-label={`${market.countryName} B2B Manufacturing & Export Specifications`}
          className="w-full bg-charcoal text-white py-5 border-b border-charcoal-800"
        >
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
              {market.tradeHighlights.slice(0, 4).map((th, idx) => (
                <div key={`strip-th-${idx}`} className="border-l-2 border-cognac pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/55 block">
                    {th.label}
                  </span>
                  <span className="text-xs font-serif font-semibold text-white block mt-0.5">
                    {th.value}
                  </span>
                </div>
              ))}
              {market.complianceBadges.slice(0, 2).map((cb, idx) => (
                <div key={`strip-cb-${idx}`} className="border-l-2 border-cognac pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/55 block">
                    {cb.title}
                  </span>
                  <span className="text-xs font-serif font-semibold text-white block mt-0.5">
                    {cb.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STEP PRODUCTION WORKFLOW */}
        <section className="w-full bg-white py-16 sm:py-20 border-b border-charcoal/10">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                {ui.workflowKicker}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">
                {ui.workflowHeading(market.countryName)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ui.steps.map((step, idx) => (
                <div
                  key={`workflow-step-${idx}`}
                  className="bg-[#FAF8F5] border border-charcoal/10 p-6 relative hover:border-cognac transition-colors"
                >
                  <span className="font-mono text-3xl font-bold text-cognac/30 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR SILHOUETTES CURATED FOR THIS REGION */}
        {matchingProducts.length > 0 && (
          <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 border-b border-charcoal/10">
            <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-1">
                    {ui.catalogueKicker}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    {ui.catalogueHeading(market.countryName)}
                  </h2>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-mono uppercase tracking-wider text-charcoal hover:text-cognac inline-flex items-center gap-1.5"
                >
                  {ui.catalogueLink} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="w-full bg-white py-16 sm:py-20 border-b border-charcoal/10">
          <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                {ui.faqKicker}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                {ui.faqHeading}
              </h2>
            </div>

            <Accordion
              items={market.faqs.map((faq, idx) => ({
                id: `intl-faq-${idx}`,
                question: faq.question,
                answer: faq.answer,
              }))}
            />
          </div>
        </section>

        {/* REGIONAL B2B SOURCING TOOLS & TECHNICAL RESOURCES */}
        <section className="w-full bg-white py-12 border-b border-charcoal/10">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="text-center mb-8">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-1">
                Verified B2B Supply Programs · {market.countryName}
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-semibold text-charcoal">
                B2B Costing, Technical Guides &amp; Direct Import Programs for {market.countryName}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/cost-calculator"
                className="p-5 bg-[#FAF8F5] border border-charcoal/12 hover:border-cognac transition-colors group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-cognac block mb-1">
                  Interactive Tool
                </span>
                <span className="font-serif text-base font-semibold text-charcoal group-hover:text-cognac block mb-1">
                  B2B FOB Cost &amp; Hide Yield Calculator →
                </span>
                <span className="text-xs text-charcoal-600 font-light block">
                  Estimate sq.ft leather consumption, MOQ tiers, and landed freight to {market.countryName}.
                </span>
              </Link>
              <Link
                href="/leather-sourcing-india-vs-china-vietnam-italy"
                className="p-5 bg-[#FAF8F5] border border-charcoal/12 hover:border-cognac transition-colors group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-cognac block mb-1">
                  Country Benchmark
                </span>
                <span className="font-serif text-base font-semibold text-charcoal group-hover:text-cognac block mb-1">
                  India vs. China, Vietnam &amp; Italy Report →
                </span>
                <span className="text-xs text-charcoal-600 font-light block">
                  Compare raw hide supply, MOQs, tariff agreements, and craftsmanship benchmarks.
                </span>
              </Link>
              <Link
                href="/leather-quality-sourcing-guide"
                className="p-5 bg-[#FAF8F5] border border-charcoal/12 hover:border-cognac transition-colors group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-cognac block mb-1">
                  Material Specification
                </span>
                <span className="font-serif text-base font-semibold text-charcoal group-hover:text-cognac block mb-1">
                  Leather Grades, Tannage &amp; QC Guide →
                </span>
                <span className="text-xs text-charcoal-600 font-light block">
                  Full-grain vs. top-grain, LWG partner tanneries, and AQL 2.5 inspection tolerances.
                </span>
              </Link>
              <Link
                href="/private-label"
                className="p-5 bg-[#FAF8F5] border border-charcoal/12 hover:border-cognac transition-colors group"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-cognac block mb-1">
                  OEM / ODM Service
                </span>
                <span className="font-serif text-base font-semibold text-charcoal group-hover:text-cognac block mb-1">
                  Private Label &amp; Custom Tooling →
                </span>
                <span className="text-xs text-charcoal-600 font-light block">
                  50–100 pc trial MOQs, 5–14 day sampling, custom brass hardware, and retail packaging.
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CROSS-REGIONAL MARKET SWITCHER FOR CRAWL DISTRIBUTION */}
        <section className="w-full bg-[#FAF8F5] py-12 border-b border-charcoal/10">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="text-center mb-6">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-charcoal-500 block">
                Explore Other International Trade Gateways
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs text-charcoal hover:border-cognac hover:text-cognac transition-colors font-mono tracking-wider"
              >
                🌐 Global Master Portal
              </Link>
              {siblingMarkets.map((sm) => (
                <Link
                  key={sm.code}
                  href={sm.path}
                  className="px-3.5 py-2 bg-white border border-charcoal/15 text-xs text-charcoal hover:border-cognac hover:text-cognac transition-colors font-mono tracking-wider inline-flex items-center gap-1.5"
                >
                  <span>{sm.flag}</span>
                  <span>{sm.countryName}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* B2B INQUIRY FORM */}
        <section id="inquiry" className="w-full bg-white py-16 sm:py-24">
          <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <span className="text-[10.5px] font-mono tracking-widest uppercase text-cognac block mb-2">
                {ui.formKicker}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-charcoal">
                {ui.formHeading(market.countryName)}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2 font-light">
                {ui.formDesc(market.currency)}
              </p>
              {ui.languageNote && (
                <div className="mt-4 inline-block bg-[#FAF8F5] border border-charcoal/15 px-4 py-2.5 text-[11px] text-charcoal-600 font-light max-w-2xl">
                  {ui.languageNote}
                </div>
              )}
            </div>

            <BulkInquiryForm inquiryType="private-label" />
          </div>
        </section>
      </div>
    </>
  );
}
