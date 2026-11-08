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

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uniconleather.com"),
  title: {
    default: "UNICON LEATHER | Best Supplier of Leather Goods & Manufacturer in India for USA & Europe",
    template: "%s | UNICON LEATHER",
  },
  description:
    "UNICON LEATHER is the best supplier of leather goods and premier leather goods manufacturer in India & Asia for USA, UK, and European brands. Handbags, totes, briefcases, jackets, RFID wallets & belts with 50–100 pc stock trial MOQs, 5–14 day sampling, LWG partner hides, Prop 65 & EU REACH compliance.",
  keywords: [
    "best supplier of leather goods",
    "leather goods manufacturer in India",
    "leather goods manufacturer in Asia",
    "leather goods supplier USA",
    "leather goods supplier Europe",
    "best leather goods manufacturer in India",
    "best supplier of leather goods in Asia",
    "Indian leather goods supplier for US brands",
    "leather goods exporter to Europe",
    "wholesale leather goods suppliers USA",
    "custom leather goods supplier USA",
    "custom leather goods manufacturer Asia",
    "private label leather bags",
    "custom leather goods OEM",
    "leather handbag contract manufacturing",
    "vegetable tanned leather goods",
    "California Prop 65 compliant leather goods supplier",
    "REACH compliant leather manufacturer India",
    "LWG partner tannery leather bags",
    "RFID leather wallet OEM",
    "custom leather jackets private label",
    "bridle leather belt manufacturer",
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
    alternateLocale: [
      "en_GB",
      "en_CA",
      "en_AU",
      "de_DE",
      "fr_FR",
      "it_IT",
      "es_ES",
      "ar_AE",
      "ja_JP",
      "nl_NL",
      "sv_SE",
      "ko_KR",
    ],
    url: "https://www.uniconleather.com",
    siteName: "UNICON LEATHER",
    title: "UNICON LEATHER | Best Supplier of Leather Goods & Manufacturer in India for USA & Europe",
    description:
      "Direct cut-and-sew leather goods manufacturer in India & premier leather goods supplier in Asia for USA and European fashion brands. Private-label bags, RFID wallets, belts & jackets crafted with LWG-audited partner tannery hides.",
    images: [
      {
        url: "https://www.uniconleather.com/images/home-hero-leather.jpg",
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
    images: ["https://www.uniconleather.com/images/home-hero-leather.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "cf857e5ed6f9e189",
    other: {
      "msvalidate.01": "D6E5A8B99C1284E208428DE3F0E3DF88",
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
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Uttar Pradesh, India",
    "geo.position": "28.5355161;77.3910265",
    "ICBM": "28.5355161, 77.3910265",
    "place:location:latitude": "28.5355161",
    "place:location:longitude": "77.3910265",
    "business:contact_data:street_address": "Office No. 11, 4th Floor, Indian Green Centre, 58, Bhangel, Sector - 106",
    "business:contact_data:locality": "Noida",
    "business:contact_data:region": "Uttar Pradesh",
    "business:contact_data:postal_code": "201304",
    "business:contact_data:country_name": "India",
    "business:contact_data:email": "uniconexport@gmail.com",
    "business:contact_data:phone_number": "+91 9873102341",
    "business:contact_data:website": "https://www.uniconleather.com",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=window.location.pathname.split('/')[1]||'';var m={'en-us':'en-US','en-ca':'en-CA','en-gb':'en-GB','en-au':'en-AU','de':'de-DE','fr':'fr-FR','it':'it-IT','es':'es-ES','ar':'ar-AE','ja':'ja-JP','nl':'nl-NL','sv':'sv-SE','ko':'ko-KR'};if(m[p]){document.documentElement.lang=m[p];if(p==='ar'){document.documentElement.dir='rtl';}}}catch(e){}})();`,
          }}
        />
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
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt - AI & LLM Context" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs-Full.txt - Complete B2B Manufacturing Specification" />
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
