import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.uniconleather.com/private-label",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivateLabelLeatherGoodsPage() {
  permanentRedirect("/private-label");
}
