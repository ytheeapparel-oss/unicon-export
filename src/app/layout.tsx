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
    default: "UNICON LEATHER | Leather Goods Manufacturer & Worldwide Leather Supplier | OEM & Custom Factory",
    template: "%s | UNICON LEATHER",
  },
  description:
    "Leading global leather goods manufacturer, leather goods supplier in USA, and worldwide private label exporter. Custom OEM/ODM factory for luxury handbags, wallets, belts & small leather goods with low MOQs, rapid prototyping, and direct DDP delivery.",
  alternates: {
    canonical: "https://www.uniconleather.com",
    languages: {
      "en-US": "https://www.uniconleather.com/en-us",
      "en-GB": "https://www.uniconleather.com/en-gb",
      "en-AU": "https://www.uniconleather.com/en-au",
      "de-DE": "https://www.uniconleather.com/de",
      "fr-FR": "https://www.uniconleather.com/fr",
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
    "DC.title": "UNICON LEATHER - Global Leather Goods Manufacturer & Worldwide Supplier",
    "DC.creator": "UNICON LEATHER Atelier",
    "DC.subject": "Leather Goods Manufacturer, Leather Goods Manufacturers, Custom Leather Goods Manufacturer, Private Label Leather Goods Manufacturer, Luxury Leather Goods Manufacturer, Low MOQ Leather Goods Manufacturer, Leather Goods Supplier in USA, Leather Goods Supplier in Asia, Worldwide Leather Goods Supplier, Leather Bags Manufacturer India, Leather Goods Exporter India, Wholesale Leather Bags, OEM Leather Goods Supplier, Contract Leather Goods Manufacturer",
    "DC.description": "Leading global leather goods manufacturer and international supplier for American, European, and Australian fashion brands. Custom OEM/ODM private-label factory with low MOQs and worldwide DDP delivery.",
    "DC.publisher": "Unicon Leather Goods Export Private Limited",
    "DC.language": "en",
    "DC.coverage": "Worldwide, United States, New York, Los Angeles, Miami, Chicago, Dallas, Canada, Toronto, Vancouver, United Kingdom, London, European Union, Germany, France, Italy, Spain, Denmark, Australia, Sydney, Melbourne, Asia, India, Delhi NCR, Noida, Singapore, Japan, UAE, Dubai",
    "target-country": "US, CA, GB, DE, FR, IT, ES, NL, DK, AU, AE, SG, JP, IN",
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
