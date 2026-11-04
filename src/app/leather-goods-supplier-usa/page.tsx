import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.uniconleather.com/en-us",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LeatherGoodsSupplierUsaPage() {
  permanentRedirect("/en-us");
}
