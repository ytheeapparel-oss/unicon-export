"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function WhatsAppButton() {
  return (
    <aside aria-label="Direct Export WhatsApp Chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={COMPANY_INFO.whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 hover:scale-105"
        aria-label="Chat directly with our B2B Export Team on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide font-sans hidden sm:inline">
          Export WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
