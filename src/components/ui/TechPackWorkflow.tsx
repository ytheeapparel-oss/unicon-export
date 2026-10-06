import React from "react";
import { FileText, Cpu, Calculator, Send, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface TechPackWorkflowProps {
  className?: string;
  theme?: "light" | "card";
}

export function TechPackWorkflow({ className = "", theme = "card" }: TechPackWorkflowProps) {
  const steps = [
    {
      step: "01",
      title: "Tech Pack Received",
      time: "Day 0",
      description: "Direct intake under bilateral NDA. CAD drawings, vector sketches, or physical reference review.",
      icon: FileText,
      badge: "Instant Intake",
    },
    {
      step: "02",
      title: "Engineering & BOM Review",
      time: "24–48 Hours",
      description: "Structural feasibility, leather hide yield analysis, hardware tooling specs, and Bill of Materials (BOM).",
      icon: Cpu,
      badge: "Feasibility Audit",
    },
    {
      step: "03",
      title: "Factory Quotation & Terms",
      time: "SLA Delivered",
      description: "Itemized tiered wholesale pricing (FOB / CIF / DDP) and guaranteed production milestones.",
      icon: Calculator,
      badge: "Transparent Terms",
    },
    {
      step: "04",
      title: "Physical Sample Dispatch",
      time: "7–10 Days",
      description: "Physical counter-sample crafted in atelier and dispatched worldwide via DHL / FedEx Priority Express.",
      icon: Send,
      badge: "Express Dispatch",
    },
  ];

  return (
    <div
      className={`w-full bg-[#FAF8F5] border border-charcoal/12 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal/10">
        <div>
          <div className="inline-flex items-center gap-2 text-cognac font-mono text-[10.5px] uppercase tracking-wider font-semibold">
            <Clock className="w-3.5 h-3.5" /> Fast-Track Sample Development SLA
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal tracking-tight mt-1">
            From Tech Pack Intake to Physical Sample Dispatch
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal-600 bg-white border border-charcoal/10 px-3 py-1.5 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-cognac" />
          <span>Bilateral NDA Protected</span>
        </div>
      </div>

      {/* Process Flow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 relative">
        {steps.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.step}
              className="relative bg-white border border-charcoal/10 p-5 sm:p-6 flex flex-col justify-between hover:border-cognac hover:shadow-md transition-all duration-300 group"
            >
              {/* Step & Time Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-light text-cognac/80 group-hover:text-cognac transition-colors">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] border border-charcoal/10 text-charcoal-600 font-medium">
                    {item.time}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <IconComp className="w-4 h-4 text-cognac shrink-0" />
                  <h4 className="font-serif text-base font-medium text-charcoal leading-snug">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed font-light mt-2">
                  {item.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mt-5 pt-3 border-t border-charcoal/8 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-charcoal-400 tracking-wider">
                  {item.badge}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600/70" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Flow Note */}
      <div className="mt-6 pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-charcoal-600 font-mono">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cognac animate-pulse" />
          <span>Average Feasibility Review Window: <strong>24–48 Hours</strong></span>
        </span>
        <span className="text-charcoal-500">
          Sample fee 100% credited against final bulk production invoice
        </span>
      </div>
    </div>
  );
}
