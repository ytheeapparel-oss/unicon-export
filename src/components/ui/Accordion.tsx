"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ id, title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand/40 py-4">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          id={`accordion-btn-${id}`}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac rounded-sm"
        >
          <span className="font-serif text-base sm:text-lg font-bold text-charcoal group-hover:text-cognac transition-colors pr-4">
            {title}
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-cognac shrink-0 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </h3>
      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden text-xs sm:text-sm text-charcoal-600 leading-relaxed",
          isOpen ? "grid-rows-[1fr] opacity-100 pt-2 pb-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-sand/40 border-t border-sand/40", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          defaultOpen={idx === 0}
        >
          <p className="text-charcoal-700">{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
