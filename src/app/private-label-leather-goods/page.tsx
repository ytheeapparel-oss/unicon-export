import type { Metadata } from "next";
import { SEO_PILLARS } from "@/data/seoPillars";
import { SeoPillarPage } from "@/components/seo/SeoPillarPage";
import { generatePillarMetadata } from "@/lib/seoPillarMetadata";

const pillar = SEO_PILLARS["private-label-leather-goods"];

export const metadata: Metadata = generatePillarMetadata(pillar);

export default function PrivateLabelLeatherGoodsPage() {
  return <SeoPillarPage pillar={pillar} />;
}
