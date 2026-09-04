import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border transition-colors duration-200 ${
              isOpen
                ? 'border-gold/60 bg-brand-charcoal'
                : 'border-brand-border/60 bg-brand-charcoal/40 hover:border-gold/30'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg text-white pr-2">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-full border border-gold/30 text-gold shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-gold/10' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-brand-border/40 text-xs sm:text-sm text-brand-muted font-light leading-relaxed animate-in fade-in duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}