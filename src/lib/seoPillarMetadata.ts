import type { Metadata } from "next";
import { SeoPillar } from "@/data/seoPillars";

export function generatePillarMetadata(pillar: SeoPillar): Metadata {
  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    alternates: {
      canonical: pillar.canonicalUrl,
    },
    openGraph: {
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      url: pillar.canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://www.uniconleather.com/images/home-hero-leather.jpg",
          width: 1200,
          height: 630,
          alt: `${pillar.keywordTheme} — UNICON LEATHER Export Atelier`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      images: ["https://www.uniconleather.com/images/home-hero-leather.jpg"],
    },
    keywords: pillar.targetKeywords,
  };
}
