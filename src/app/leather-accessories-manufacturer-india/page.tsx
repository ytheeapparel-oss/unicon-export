import type { Metadata } from "next";
import { SEO_PILLARS } from "@/data/seoPillars";
import { SeoPillarPage } from "@/components/seo/SeoPillarPage";
import { generatePillarMetadata } from "@/lib/seoPillarMetadata";

const pillar = SEO_PILLARS["leather-accessories-manufacturer-india"];

export const metadata: Metadata = generatePillarMetadata(pillar);

export default function LeatherAccessoriesManufacturerIndiaPage() {
  return <SeoPillarPage pillar={pillar} />;
}
