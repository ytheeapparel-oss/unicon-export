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
    default: "UNICON LEATHER | Leather Goods & Bags Manufacturer India | OEM & Exporter",
    template: "%s | UNICON LEATHER",
  },
  description:
    "Leading leather goods manufacturer India, leather bags manufacturer India, and private label leather goods exporter. Custom OEM/ODM factory for handbags, wallets, belts & accessories in Noida, Delhi NCR & Kolkata.",
  alternates: {
    canonical: "https://www.uniconleather.com",
    languages: {
      "en-US": "https://www.uniconleather.com",
      "en-GB": "https://www.uniconleather.com",
      "en-DE": "https://www.uniconleather.com",
      "en-FR": "https://www.uniconleather.com",
      "en-IT": "https://www.uniconleather.com",
      "en-ES": "https://www.uniconleather.com",
      "en-CA": "https://www.uniconleather.com",
      "en-AU": "https://www.uniconleather.com",
      "x-default": "https://www.uniconleather.com",
    },
  },
  keywords: ALL_SEO_KEYWORDS,
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
    alternateLocale: ["en_GB", "de_DE", "fr_FR", "it_IT", "es_ES"],
    url: "https://www.uniconleather.com",
    siteName: "UNICON LEATHER",
    title: "UNICON LEATHER | Leather Goods Manufacturer India & OEM Bags Exporter",
    description:
      "Premier leather goods manufacturer India and custom leather bags manufacturer India. Private label leather goods manufacturer, OEM wallets, belts & accessories for global brands.",
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
    title: "UNICON LEATHER | Luxury Leather Goods Manufacturer & Exporter",
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
    "DC.title": "UNICON LEATHER - Leather Goods Manufacturer India & Leather Bags Exporter",
    "DC.creator": "UNICON LEATHER Atelier",
    "DC.subject": "Leather Goods Manufacturer India, Leather Bags Manufacturer India, Private Label Leather Goods Manufacturer, Custom Leather Goods Manufacturer India, Leather Goods Exporter India, Wholesale Leather Bags India, OEM Leather Goods Manufacturer",
    "DC.description": "Leading leather goods manufacturer India, leather bags manufacturer India, and custom leather goods exporter in Noida, Delhi NCR, and Kolkata.",
    "DC.publisher": "Unicon Leather Goods Export Private Limited",
    "DC.language": "en",
    "DC.coverage": "Worldwide, United States, United Kingdom, European Union, India, Delhi NCR, Noida",
    "target-country": "US, GB, DE, FR, IT, ES, NL, CA, AU",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <JsonLdScript schema={generateOrganizationSchema()} />
        <JsonLdScript schema={generateWebSiteSchema()} />
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
