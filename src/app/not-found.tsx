import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-ivory">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-sm border border-sand/60 shadow-editorial text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-sand/30 text-cognac flex items-center justify-center mx-auto">
          <Layers className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-cognac font-semibold">
            404 Page Not Found
          </span>
          <h1 className="font-serif text-3xl font-bold text-charcoal">
            Specification Unavailable
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The page, product specification, or directory you requested cannot be located. Please check the URL or browse our master export catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto">
            <Home className="w-3.5 h-3.5 mr-1.5" /> Return Home
          </Button>
          <Button href="/products" variant="outline" size="md" className="w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 mr-1.5" /> Browse Catalogue
          </Button>
        </div>
      </div>
    </div>
  );
}
