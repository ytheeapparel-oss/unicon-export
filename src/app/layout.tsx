import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import {
  JsonLdScript,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateB2BServiceSchema,
} from "@/components/seo/JsonLdScript";
import { ALL_SEO_KEYWORDS } from "@/data/keywords";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uniconleather.com"),
  title: {
    default: "UNICON LEATHER | Leather Bags Manufacturer India & OEM Private Label Factory",
    template: "%s | UNICON LEATHER",
  },
  description:
    "Leading leather goods and bag manufacturer in India, exporter to USA, UK, and European brands. Custom OEM/ODM factory for luxury handbags, totes, duffels, wallets & belts with low 100-pc MOQs, rapid prototyping, and direct DDP delivery.",
  alternates: {
    canonical: "https://www.uniconleather.com",
    languages: {
      "en-US": "https://www.uniconleather.com/en-us",
      "en-CA": "https://www.uniconleather.com/en-ca",
      "en-GB": "https://www.uniconleather.com/en-gb",
      "en-AU": "https://www.uniconleather.com/en-au",
      "de-DE": "https://www.uniconleather.com/de",
      "fr-FR": "https://www.uniconleather.com/fr",
      "it-IT": "https://www.uniconleather.com/it",
      "es-ES": "https://www.uniconleather.com/es",
      "x-default": "https://www.uniconleather.com",
    },
  },
  keywords: [
    // Indian manufacturing
    "leather goods manufacturer Kolkata",
    "leather accessories factory Kolkata",
    "leather exporters Kolkata",
    "leather bag manufacturer Kolkata",
    // Overseas buyers
    "Indian leather goods supplier for US brands",
    "private label leather supplier for UK brands",
    "leather goods exporter to Europe",
    // Sustainability
    "sustainable leather accessories manufacturer",
    "ethical leather goods manufacturing",
    "responsibly sourced leather products",
    // Materials
    "vegetable tanned leather accessories",
    "traceable leather sourcing",
    "leather from LWG-certified tanneries",
    // Compliance
    "WRAP compliant leather manufacturer India",
    "ISO certified leather supplier India",
    "SMETA audited leather manufacturer",
    // Core manufacturing & silhouettes
    "leather bag manufacturers in India",
    "leather bags manufacturer India",
    "custom leather bag manufacturers India",
    "private label leather bag manufacturers India",
    "OEM leather bag manufacturers India",
    "wholesale leather bags India",
    "bulk leather bag suppliers India",
    "leather bag exporters India",
    "leather bag manufacturers for brands",
    "custom logo leather bags bulk",
    "leather handbag manufacturers India",
    "leather tote bag manufacturers India",
    "leather laptop bag manufacturers India",
    "leather backpack manufacturers India",
    "leather sling bag manufacturers India",
    "leather duffle bag manufacturers India",
    "leather travel bag manufacturers India",
    "leather messenger bag manufacturers India",
    "leather overnight bag manufacturers",
    "leather wallet manufacturers India",
    "leather passport holder manufacturers",
    "small leather goods manufacturers India",
    "low MOQ leather bag manufacturers India",
    "small batch leather bag manufacturing",
    "corporate leather gift manufacturers India",
  ],
  authors: [{ name: "UNICON LEATHER Export Desk" }],
  creator: "UNICON LEATHER",
  publisher: "UNICON LEATHER",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "de_DE", "fr_FR", "it_IT", "es_ES"],
    url: "https://www.uniconleather.com",
    siteName: "UNICON LEATHER",
    title: "UNICON LEATHER | Leather Goods Manufacturer & Global OEM Bags Exporter",
    description:
      "Premier global leather goods manufacturer and custom leather bags factory. Private label leather goods, luxury OEM wallets, belts & accessories for international fashion houses.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UNICON LEATHER Master Atelier & Export Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNICON LEATHER | Global Leather Goods Manufacturer & Exporter",
    description:
      "B2B custom manufacturing, OEM/ODM private label, and wholesale export of handcrafted genuine leather goods for global fashion brands.",
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "cf857e5ed6f9e189",
    yandex: "yandex-verification-token",
    other: {
      "msvalidate.01": "D6E5A8B99C1284E208428DE3F0E3DF88",
      "p:domain_verify": "pinterest-verification-token",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata, West Bengal, India",
    "geo.position": "22.5085;88.4687",
    "ICBM": "22.5085, 88.4687",
    "DC.title": "UNICON LEATHER - Global Leather Goods Manufacturer & Registered Exporter",
    "DC.creator": "UNICON LEATHER Atelier",
    "DC.description": "Direct B2B custom leather goods manufacturer and private-label exporter based in India, serving international fashion brands and wholesalers.",
    "DC.publisher": "Unicon Leather Goods Export Private Limited",
    "DC.language": "en",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RDCG81M0M5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RDCG81M0M5');
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <JsonLdScript schema={generateOrganizationSchema()} />
        <JsonLdScript schema={generateWebSiteSchema()} />
        <JsonLdScript schema={generateB2BServiceSchema()} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal selection:bg-cognac selection:text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 w-full bg-white">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
