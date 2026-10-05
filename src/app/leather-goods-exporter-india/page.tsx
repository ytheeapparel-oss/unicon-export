import type { Metadata } from "next";
import { SEO_PILLARS } from "@/data/seoPillars";
import { SeoPillarPage } from "@/components/seo/SeoPillarPage";
import { generatePillarMetadata } from "@/lib/seoPillarMetadata";

const pillar = SEO_PILLARS["leather-goods-exporter-india"];

export const metadata: Metadata = generatePillarMetadata(pillar);

export default function LeatherGoodsExporterIndiaPage() {
  return <SeoPillarPage pillar={pillar} />;
}
