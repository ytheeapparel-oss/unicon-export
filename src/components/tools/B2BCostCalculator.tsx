"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Layers,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { BulkInquiryForm } from "@/components/forms/BulkInquiryForm";

interface SilhouetteOption {
  id: string;
  label: string;
  categoryName: string;
  hsCode: string;
  baseFobMin: number;
  baseFobMax: number;
  trialMoq: number;
  customMoq: number;
  hideYieldSqFt: string;
  samplingDays: string;
  productionDaysBase: number;
}

interface LeatherGradeOption {
  id: string;
  label: string;
  badge: string;
  multiplier: number;
  origin: string;
  gauge: string;
  description: string;
}

interface HardwareOption {
  id: string;
  label: string;
  adderMin: number;
  adderMax: number;
  toolingNote: string;
}

interface QuantityTier {
  id: string;
  label: string;
  units: number;
  discountFactor: number;
  tierType: string;
}

interface IncotermOption {
  id: string;
  code: string;
  label: string;
  freightAdderMin: number;
  freightAdderMax: number;
  transitNote: string;
}

const SILHOUETTES: SilhouetteOption[] = [
  {
    id: "handbags",
    label: "Structured Leather Handbag / Satchel",
    categoryName: "Leather Handbags",
    hsCode: "4202.21.00",
    baseFobMin: 26,
    baseFobMax: 42,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "11 – 15 sq.ft",
    samplingDays: "7 – 12 Days",
    productionDaysBase: 30,
  },
  {
    id: "totes",
    label: "Luxury Leather Tote / Carryall",
    categoryName: "Tote Bags",
    hsCode: "4202.21.00",
    baseFobMin: 22,
    baseFobMax: 35,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "12 – 16 sq.ft",
    samplingDays: "7 – 10 Days",
    productionDaysBase: 28,
  },
  {
    id: "briefcases",
    label: "Executive Laptop Briefcase / Folio",
    categoryName: "Laptop & Business Bags",
    hsCode: "4202.11.00",
    baseFobMin: 32,
    baseFobMax: 52,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "14 – 18 sq.ft",
    samplingDays: "10 – 14 Days",
    productionDaysBase: 32,
  },
  {
    id: "backpacks",
    label: "Commuter & Heritage Leather Backpack",
    categoryName: "Backpacks",
    hsCode: "4202.91.00",
    baseFobMin: 30,
    baseFobMax: 48,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "14 – 19 sq.ft",
    samplingDays: "10 – 14 Days",
    productionDaysBase: 32,
  },
  {
    id: "duffels",
    label: "Weekender Travel Duffel / Holdall",
    categoryName: "Travel & Duffel Bags",
    hsCode: "4202.91.00",
    baseFobMin: 42,
    baseFobMax: 68,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "20 – 26 sq.ft",
    samplingDays: "10 – 14 Days",
    productionDaysBase: 35,
  },
  {
    id: "jackets",
    label: "Tailored Leather Jacket / Outerwear",
    categoryName: "Leather Jackets",
    hsCode: "4203.10.00",
    baseFobMin: 55,
    baseFobMax: 92,
    trialMoq: 50,
    customMoq: 100,
    hideYieldSqFt: "32 – 42 sq.ft",
    samplingDays: "10 – 14 Days",
    productionDaysBase: 35,
  },
  {
    id: "wallets",
    label: "RFID Wallet / Cardholder (SLG)",
    categoryName: "Wallets & Cardholders",
    hsCode: "4202.31.00",
    baseFobMin: 5.5,
    baseFobMax: 11.5,
    trialMoq: 100,
    customMoq: 200,
    hideYieldSqFt: "1.8 – 3.2 sq.ft",
    samplingDays: "5 – 8 Days",
    productionDaysBase: 25,
  },
  {
    id: "belts",
    label: "Full-Grain Bridle / Dress Belt",
    categoryName: "Leather Belts",
    hsCode: "4203.30.00",
    baseFobMin: 6.5,
    baseFobMax: 13.0,
    trialMoq: 100,
    customMoq: 150,
    hideYieldSqFt: "2.2 – 3.5 sq.ft",
    samplingDays: "5 – 8 Days",
    productionDaysBase: 25,
  },
];

const LEATHER_GRADES: LeatherGradeOption[] = [
  {
    id: "top-grain-pebble",
    label: "LWG Top-Grain / Milled Pebble Cowhide",
    badge: "Commercial Bestseller",
    multiplier: 1.0,
    origin: "LWG Gold/Silver Indian Tanneries",
    gauge: "1.2 – 1.6 mm",
    description: "Uniform grain, scratch-resistant finish, high cutting yield, EU REACH & Prop 65 certified.",
  },
  {
    id: "full-grain-nappa",
    label: "Full-Grain Calf Nappa / Semianiline",
    badge: "Contemporary Luxury",
    multiplier: 1.16,
    origin: "LWG Gold Partner Tanneries",
    gauge: "1.0 – 1.4 mm",
    description: "Buttery hand-feel, tight natural pore structure, ideal for turned-edge bags and SLGs.",
  },
  {
    id: "veg-tan",
    label: "Vegetable-Tanned Full-Grain (Chestnut/Mimosa)",
    badge: "100% Chrome-Free",
    multiplier: 1.24,
    origin: "Organic Tree-Bark Drum Tannage",
    gauge: "1.4 – 3.8 mm",
    description: "Develops rich artisanal patina over time; 100% biodegradable, chrome-free, and heavy-metal free.",
  },
  {
    id: "saffiano-croc",
    label: "Saffiano Crosshatch / Hydraulic Croc-Embossed",
    badge: "Architectural Luxury",
    multiplier: 1.14,
    origin: "LWG Gold Certified Calf/Bovine",
    gauge: "1.3 – 1.6 mm",
    description: "High-pressure heated plate embossing with wax/resin topcoat for structured luxury silhouettes.",
  },
  {
    id: "crazy-horse",
    label: "Crazy Horse Waxed Pull-Up / Oil-Tanned",
    badge: "Heritage & Rugged",
    multiplier: 1.08,
    origin: "Heavy Full-Grain Bovine",
    gauge: "1.6 – 2.2 mm",
    description: "Hot-stuffed with natural waxes and oils; exhibits multi-tonal color pull-up when flexed.",
  },
  {
    id: "lambskin-nappa",
    label: "Drum-Dyed Plongé Lambskin / Goat Suede",
    badge: "Outerwear & Soft Bags",
    multiplier: 1.18,
    origin: "Fine Ovine / Caprine Hides",
    gauge: "0.6 – 0.9 mm",
    description: "Ultra-supple drape engineered for tailored leather jackets, quilted bags, and luxury linings.",
  },
];

const HARDWARE_OPTIONS: HardwareOption[] = [
  {
    id: "zinc-pvd",
    label: "High-Density Zinc Alloy + YKK Metal Zippers",
    adderMin: 0,
    adderMax: 0,
    toolingNote: "No custom mold fee for stock silhouettes (50+ pcs)",
  },
  {
    id: "solid-brass",
    label: "Forged Solid Brass (Antique / Brushed / Nickel-Free)",
    adderMin: 2.5,
    adderMax: 5.5,
    toolingNote: "72-hour salt-spray tested (ISO 9227); stock or custom engraved",
  },
  {
    id: "custom-24k-pvd",
    label: "Custom 3D CNC Molded Brass + 24K Gold / Palladium PVD",
    adderMin: 4.5,
    adderMax: 9.0,
    toolingNote: "$250–$450 one-time 3D mold fee (waived/credited at 300+ pcs)",
  },
];

const QUANTITY_TIERS: QuantityTier[] = [
  {
    id: "tier-50",
    label: "50 – 99 Units",
    units: 50,
    discountFactor: 1.14,
    tierType: "Stock-Leather Trial Batch (2 Colorways)",
  },
  {
    id: "tier-100",
    label: "100 – 249 Units",
    units: 100,
    discountFactor: 1.0,
    tierType: "Standard OEM Private Label Run",
  },
  {
    id: "tier-300",
    label: "250 – 499 Units",
    units: 300,
    discountFactor: 0.91,
    tierType: "Mid-Volume Seasonal Production",
  },
  {
    id: "tier-500",
    label: "500 – 999 Units",
    units: 500,
    discountFactor: 0.84,
    tierType: "Commercial Wholesale Scaling",
  },
  {
    id: "tier-1000",
    label: "1,000+ Units",
    units: 1000,
    discountFactor: 0.77,
    tierType: "Container / Department Store Volume",
  },
];

const INCOTERMS: IncotermOption[] = [
  {
    id: "fob",
    code: "FOB India",
    label: "FOB (Free On Board — Kolkata / Nhava Sheva / Delhi)",
    freightAdderMin: 0,
    freightAdderMax: 0,
    transitNote: "Factory gate + Indian export customs cleared",
  },
  {
    id: "cif",
    code: "CIF Seaport",
    label: "CIF Ocean Freight (Port of NY, LA, Rotterdam, Sydney, Dubai)",
    freightAdderMin: 1.2,
    freightAdderMax: 2.8,
    transitNote: "16–30 days ocean transit + marine insurance included",
  },
  {
    id: "ddp-sea",
    code: "DDP Ocean",
    label: "DDP Door-to-Door Sea (Customs & Tariffs Included)",
    freightAdderMin: 2.5,
    freightAdderMax: 5.2,
    transitNote: "0% duty for Australia (ECTA) & UAE (CEPA); full US/EU/UK duty cleared",
  },
  {
    id: "ddp-air",
    code: "DDP Air Express",
    label: "DDP Priority Air Courier (DHL / FedEx 3–5 Days Door-to-Door)",
    freightAdderMin: 4.5,
    freightAdderMax: 9.5,
    transitNote: "3–5 business days direct to studio/3PL warehouse",
  },
];

export function B2BCostCalculator() {
  const [silhouetteId, setSilhouetteId] = useState<string>("handbags");
  const [leatherId, setLeatherId] = useState<string>("full-grain-nappa");
  const [hardwareId, setHardwareId] = useState<string>("solid-brass");
  const [quantityId, setQuantityId] = useState<string>("tier-100");
  const [incotermId, setIncotermId] = useState<string>("fob");

  const selectedSilhouette = useMemo(
    () => SILHOUETTES.find((s) => s.id === silhouetteId) || SILHOUETTES[0],
    [silhouetteId]
  );
  const selectedLeather = useMemo(
    () => LEATHER_GRADES.find((l) => l.id === leatherId) || LEATHER_GRADES[0],
    [leatherId]
  );
  const selectedHardware = useMemo(
    () => HARDWARE_OPTIONS.find((h) => h.id === hardwareId) || HARDWARE_OPTIONS[0],
    [hardwareId]
  );
  const selectedQuantity = useMemo(
    () => QUANTITY_TIERS.find((q) => q.id === quantityId) || QUANTITY_TIERS[1],
    [quantityId]
  );
  const selectedIncoterm = useMemo(
    () => INCOTERMS.find((i) => i.id === incotermId) || INCOTERMS[0],
    [incotermId]
  );

  const calculation = useMemo(() => {
    const isSmallAccessory =
      selectedSilhouette.id === "wallets" || selectedSilhouette.id === "belts";
    const hwScale = isSmallAccessory ? 0.35 : 1.0;
    const freightScale = isSmallAccessory ? 0.3 : selectedSilhouette.id === "jackets" ? 1.45 : 1.0;

    const rawFobMin =
      (selectedSilhouette.baseFobMin * selectedLeather.multiplier +
        selectedHardware.adderMin * hwScale) *
      selectedQuantity.discountFactor;
    const rawFobMax =
      (selectedSilhouette.baseFobMax * selectedLeather.multiplier +
        selectedHardware.adderMax * hwScale) *
      selectedQuantity.discountFactor;

    const unitMin = +(rawFobMin + selectedIncoterm.freightAdderMin * freightScale).toFixed(2);
    const unitMax = +(rawFobMax + selectedIncoterm.freightAdderMax * freightScale).toFixed(2);

    const totalBatchMin = Math.round(unitMin * selectedQuantity.units);
    const totalBatchMax = Math.round(unitMax * selectedQuantity.units);

    const prodDaysMin =
      selectedQuantity.units >= 500
        ? selectedSilhouette.productionDaysBase + 7
        : selectedSilhouette.productionDaysBase - 3;
    const prodDaysMax =
      selectedQuantity.units >= 500
        ? selectedSilhouette.productionDaysBase + 15
        : selectedSilhouette.productionDaysBase + 7;

    return {
      unitMin,
      unitMax,
      totalBatchMin,
      totalBatchMax,
      prodDaysMin,
      prodDaysMax,
    };
  }, [selectedSilhouette, selectedLeather, selectedHardware, selectedQuantity, selectedIncoterm]);

  const rfqSummaryString = useMemo(() => {
    return `[Calculator Spec] ${selectedSilhouette.label} | Leather: ${selectedLeather.label} | Hardware: ${selectedHardware.label} | Qty Tier: ${selectedQuantity.label} | Term: ${selectedIncoterm.code} | Est. Unit Price: $${calculation.unitMin}–$${calculation.unitMax} USD`;
  }, [selectedSilhouette, selectedLeather, selectedHardware, selectedQuantity, selectedIncoterm, calculation]);

  const handleReset = () => {
    setSilhouetteId("handbags");
    setLeatherId("full-grain-nappa");
    setHardwareId("solid-brass");
    setQuantityId("tier-100");
    setIncotermId("fob");
  };

  return (
    <div className="space-y-16">
      {/* CALCULATOR WORKBENCH */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: 5-STEP CONFIGURATION CONTROLS */}
        <div className="lg:col-span-7 bg-white border border-charcoal/15 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cognac font-semibold block">
                Interactive BOM &amp; Export Estimator
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-medium text-charcoal mt-1">
                Configure Your Production Specification
              </h2>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-600 hover:text-cognac border border-charcoal/15 px-3 py-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* STEP 1: SILHOUETTE */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              01. Select Product Silhouette &amp; HS Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SILHOUETTES.map((item) => {
                const active = item.id === silhouetteId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSilhouetteId(item.id)}
                    className={`text-left p-3.5 border transition-all ${
                      active
                        ? "border-cognac bg-[#FAF8F5] shadow-2xs"
                        : "border-charcoal/12 bg-white hover:border-charcoal/30"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif text-sm font-medium text-charcoal">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-mono text-cognac shrink-0">
                        HS {item.hsCode}
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] font-mono text-charcoal-500">
                      <span>Yield: {item.hideYieldSqFt}</span>
                      <span>Trial MOQ: {item.trialMoq} pcs</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: LEATHER GRADE */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              02. Select LWG Certified Leather Tannage Grade
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {LEATHER_GRADES.map((grade) => {
                const active = grade.id === leatherId;
                return (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setLeatherId(grade.id)}
                    className={`text-left p-3.5 border transition-all ${
                      active
                        ? "border-cognac bg-[#FAF8F5] shadow-2xs"
                        : "border-charcoal/12 bg-white hover:border-charcoal/30"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-cognac/10 text-cognac font-semibold">
                        {grade.badge}
                      </span>
                      <span className="text-[10px] font-mono text-charcoal-500">
                        {grade.gauge}
                      </span>
                    </div>
                    <p className="font-serif text-sm font-medium text-charcoal">
                      {grade.label}
                    </p>
                    <p className="text-[11px] text-charcoal-600 font-light mt-1 line-clamp-2">
                      {grade.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: HARDWARE & TRIM */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              03. Select Hardware &amp; Custom Tooling Specification
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {HARDWARE_OPTIONS.map((hw) => {
                const active = hw.id === hardwareId;
                return (
                  <button
                    key={hw.id}
                    type="button"
                    onClick={() => setHardwareId(hw.id)}
                    className={`text-left p-3.5 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      active
                        ? "border-cognac bg-[#FAF8F5] shadow-2xs"
                        : "border-charcoal/12 bg-white hover:border-charcoal/30"
                    }`}
                  >
                    <div>
                      <p className="font-serif text-sm font-medium text-charcoal">
                        {hw.label}
                      </p>
                      <p className="text-[11px] text-charcoal-500 font-mono mt-0.5">
                        {hw.toolingNote}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-cognac shrink-0">
                      {hw.adderMin === 0
                        ? "Included in Base"
                        : `+$${hw.adderMin.toFixed(2)} – $${hw.adderMax.toFixed(2)} / unit`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 4: ORDER QUANTITY TIER */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              04. Select Order Quantity Tier (Volume Scaling)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {QUANTITY_TIERS.map((tier) => {
                const active = tier.id === quantityId;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setQuantityId(tier.id)}
                    className={`p-3 border text-center transition-all ${
                      active
                        ? "border-cognac bg-charcoal text-white"
                        : "border-charcoal/12 bg-white text-charcoal hover:border-charcoal/30"
                    }`}
                  >
                    <span className="block font-mono text-xs font-bold">
                      {tier.label}
                    </span>
                    <span
                      className={`block text-[10px] font-mono mt-1 ${
                        active ? "text-cognac-300" : "text-charcoal-500"
                      }`}
                    >
                      {tier.discountFactor < 1
                        ? `Save ${Math.round((1 - tier.discountFactor) * 100)}%`
                        : tier.discountFactor > 1
                        ? "Trial Batch"
                        : "Base OEM Rate"}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] font-mono text-charcoal-600">
              Selected Tier Mode: <strong className="text-charcoal">{selectedQuantity.tierType}</strong>
            </p>
          </div>

          {/* STEP 5: INCOTERMS & LOGISTICS */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              05. Select Export Incoterm (FOB vs. Landed CIF / DDP)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INCOTERMS.map((term) => {
                const active = term.id === incotermId;
                return (
                  <button
                    key={term.id}
                    type="button"
                    onClick={() => setIncotermId(term.id)}
                    className={`text-left p-3.5 border transition-all ${
                      active
                        ? "border-cognac bg-[#FAF8F5] shadow-2xs"
                        : "border-charcoal/12 bg-white hover:border-charcoal/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cognac">
                        {term.code}
                      </span>
                      <Truck className="w-3.5 h-3.5 text-charcoal-400" />
                    </div>
                    <p className="font-serif text-xs sm:text-sm font-medium text-charcoal mt-1">
                      {term.label}
                    </p>
                    <p className="text-[10.5px] text-charcoal-500 font-light mt-1">
                      {term.transitNote}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE FACTORY COSTING & SLA OUTPUT PANEL */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="bg-charcoal text-white p-7 sm:p-9 border border-charcoal shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-cognac" />
                <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold">
                  Indicative Factory Estimate
                </span>
              </div>
              <span className="text-[11px] font-mono text-white/70 bg-white/10 px-2.5 py-0.5">
                {selectedIncoterm.code}
              </span>
            </div>

            {/* MAIN UNIT PRICE RANGE */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-white/70 block">
                Estimated Unit Price Range ({selectedIncoterm.code})
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ${calculation.unitMin.toFixed(2)} – ${calculation.unitMax.toFixed(2)}
                </span>
                <span className="text-xs font-mono text-cognac uppercase">
                  USD / Unit
                </span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Estimated Batch Value ({selectedQuantity.units} units):{" "}
                <strong className="text-white font-mono">
                  ${calculation.totalBatchMin.toLocaleString()} – $
                  {calculation.totalBatchMax.toLocaleString()} USD
                </strong>
              </p>
            </div>

            {/* KEY PRODUCTION METRICS GRID */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/15">
              <div className="bg-white/5 p-3.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cognac mb-1">
                  <PackageCheck className="w-3.5 h-3.5" /> Minimum MOQ
                </div>
                <p className="font-serif text-base font-medium text-white">
                  {selectedSilhouette.trialMoq} Pcs (Trial)
                </p>
                <p className="text-[10.5px] text-white/60 font-mono">
                  {selectedSilhouette.customMoq} Pcs Custom Dye
                </p>
              </div>

              <div className="bg-white/5 p-3.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cognac mb-1">
                  <Layers className="w-3.5 h-3.5" /> Hide Consumption
                </div>
                <p className="font-serif text-base font-medium text-white">
                  {selectedSilhouette.hideYieldSqFt}
                </p>
                <p className="text-[10.5px] text-white/60 font-mono">
                  Gauge: {selectedLeather.gauge}
                </p>
              </div>

              <div className="bg-white/5 p-3.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cognac mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Counter-Sample SLA
                </div>
                <p className="font-serif text-base font-medium text-white">
                  {selectedSilhouette.samplingDays}
                </p>
                <p className="text-[10.5px] text-white/60 font-mono">
                  Via DHL/FedEx Express
                </p>
              </div>

              <div className="bg-white/5 p-3.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cognac mb-1">
                  <Clock className="w-3.5 h-3.5" /> Bulk Production
                </div>
                <p className="font-serif text-base font-medium text-white">
                  {calculation.prodDaysMin} – {calculation.prodDaysMax} Days
                </p>
                <p className="text-[10.5px] text-white/60 font-mono">
                  AQL 2.5 Inspected
                </p>
              </div>
            </div>

            {/* INCLUDED COMPLIANCE & PACKAGING CHECKLIST */}
            <div className="space-y-2 pt-2 border-t border-white/15 text-xs text-white/85">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cognac block mb-2">
                Included in Every Factory Quotation:
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                <span>LWG Gold/Silver Certified Hide Traceability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                <span>EU REACH Annex XVII &amp; CA Prop 65 Chemical Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                <span>Custom Brand Debossing + Unbleached Cotton Dustbag</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cognac shrink-0" />
                <span>100% Metal Detection &amp; ISO 2859-1 (AQL 2.5) QC Report</span>
              </div>
            </div>

            {/* CTA TO LOCK IN EXACT BOM QUOTE */}
            <div className="pt-2">
              <a
                href="#lock-in-rfq"
                className="w-full inline-flex items-center justify-center gap-2 bg-cognac hover:bg-cognac/90 text-white font-mono text-xs uppercase tracking-widest py-4 px-6 font-semibold transition-colors shadow-sm"
              >
                Lock In Exact 24-Hour BOM Quote <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-white/60 text-center mt-2.5 font-light">
                Your configured specification is automatically attached to the RFQ form below.
              </p>
            </div>
          </div>

          {/* TARIFF SAVING CALLOUT */}
          <div className="bg-[#FAF8F5] border border-charcoal/15 p-5 space-y-2">
            <div className="flex items-center gap-2 text-cognac font-mono text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" /> Duty-Free &amp; Tariff Optimization Note
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              <strong>US Buyers:</strong> Avoid punitive China Section 301 tariffs by sourcing direct from India.{" "}
              <strong>Australian &amp; UAE Buyers:</strong> Claim <strong>0% import duty</strong> under the India-Australia ECTA and India-UAE CEPA trade treaties with our official Certificate of Origin.
            </p>
          </div>
        </div>
      </div>

      {/* PRE-FILLED RFQ FORM SECTION */}
      <div id="lock-in-rfq" className="scroll-mt-28 bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-10 lg:p-12">
        <div className="max-w-3xl mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cognac font-semibold block">
            Convert Estimate into Formal Factory Proforma
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
            Submit Your Configured Specification for Exact CAD &amp; BOM Costing
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            Our pattern engineering desk reviews your selected parameters and responds within 24 business hours with exact leather yield calculations, physical swatch options, and formal FOB/DDP pricing.
          </p>
          <div className="p-3 bg-white border border-cognac/30 text-xs font-mono text-charcoal-800 mt-3">
            <strong className="text-cognac">Active Configuration:</strong> {rfqSummaryString}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 border border-charcoal/10">
          <BulkInquiryForm
            key={rfqSummaryString}
            initialProduct={rfqSummaryString}
            initialCategory={selectedSilhouette.categoryName}
            inquiryType="private-label"
          />
        </div>
      </div>
    </div>
  );
}
