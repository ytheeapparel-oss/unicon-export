import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLdScript, generateOrganizationSchema } from "@/components/seo/JsonLdScript";

export const viewport: Viewport = {
  themeColor: "#11100F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uniconleather.com"),
  title: {
    default: "UNICON LEATHER | Luxury Leather Goods Manufacturer & Exporter India",
    template: "%s | UNICON LEATHER",
  },
  description:
    "Leading B2B leather goods manufacturer, OEM/ODM private-label factory, and wholesale exporter from India. Crafting handcrafted luxury leather bags, wallets, belts, and accessories for global brands in the USA, UK, Europe, UAE, Australia, and Japan.",
  keywords: [
    "Leather goods manufacturer in India",
    "Leather products exporter from India",
    "Private-label leather goods manufacturer",
    "OEM leather bag manufacturer",
    "Custom leather bag supplier",
    "Wholesale leather goods exporter",
    "Leather handbag manufacturer",
    "Leather wallet manufacturer",
    "Leather belt manufacturer",
    "Leather accessories supplier",
    "Luxury leather goods OEM India",
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
    url: "https://www.uniconleather.com",
    siteName: "UNICON LEATHER",
    title: "UNICON LEATHER | Premier Leather Goods Manufacturer & Global Exporter",
    description:
      "B2B custom manufacturing, OEM/ODM private label, and wholesale export of handcrafted genuine leather bags, wallets, belts, and accessories for overseas brands.",
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
