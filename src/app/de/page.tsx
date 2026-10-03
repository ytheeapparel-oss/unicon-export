import type { Metadata } from "next";
import { INTERNATIONAL_MARKETS } from "@/data/internationalRoutes";
import { InternationalHubPage } from "@/components/seo/InternationalHubPage";

const market = INTERNATIONAL_MARKETS["de"];

export const metadata: Metadata = {
  title: market.metaTitle,
  description: market.metaDescription,
  alternates: {
    canonical: `https://www.uniconleather.com${market.path}`,
    languages: {
      "en-US": "https://www.uniconleather.com/en-us",
      "en-GB": "https://www.uniconleather.com/en-gb",
      "en-AU": "https://www.uniconleather.com/en-au",
      "de-DE": "https://www.uniconleather.com/de",
      "fr-FR": "https://www.uniconleather.com/fr",
      "x-default": "https://www.uniconleather.com",
    },
  },
  openGraph: {
    title: market.metaTitle,
    description: market.metaDescription,
    url: `https://www.uniconleather.com${market.path}`,
    type: "website",
    locale: "de_DE",
  },
  keywords: market.keywords,
};

export default function DePage() {
  return <InternationalHubPage market={market} />;
}
