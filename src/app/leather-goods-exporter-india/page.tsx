import type { Metadata } from "next";
import { SEO_PILLARS } from "@/data/seoPillars";
import { SeoPillarPage } from "@/components/seo/SeoPillarPage";

const pillar = SEO_PILLARS["leather-goods-exporter-india"];

export const metadata: Metadata = {
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
  },
  keywords: pillar.targetKeywords,
};

export default function LeatherGoodsExporterIndiaPage() {
  return <SeoPillarPage pillar={pillar} />;
}
