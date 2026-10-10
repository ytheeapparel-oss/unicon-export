import type { Metadata } from "next";
import { INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { InternationalHubPage } from "@/components/seo/InternationalHubPage";

const market = INTERNATIONAL_MARKETS["en-ca"];

export const metadata: Metadata = {
  title: market.metaTitle,
  description: market.metaDescription,
  alternates: {
    canonical: `https://www.uniconleather.com${market.path}`,
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
  openGraph: {
    title: market.metaTitle,
    description: market.metaDescription,
    url: `https://www.uniconleather.com${market.path}`,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "https://www.uniconleather.com/images/home-hero-leather.jpg",
        width: 1200,
        height: 630,
        alt: `${market.countryName} - UNICON LEATHER`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: market.metaTitle,
    description: market.metaDescription,
    images: ["https://www.uniconleather.com/images/home-hero-leather.jpg"],
  },
  keywords: market.keywords,
};

export default function EnCaPage() {
  return <InternationalHubPage market={market} />;
}
