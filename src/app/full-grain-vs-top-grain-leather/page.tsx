import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.uniconleather.com/leather-quality-sourcing-guide",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function FullGrainVsTopGrainLeatherPage() {
  permanentRedirect("/leather-quality-sourcing-guide");
}
