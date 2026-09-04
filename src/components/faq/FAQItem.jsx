import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/helpers';

export default function FAQItem({ faq, isOpen, onToggle }) {
  const { question, answer } = faq;

  return (
    <div className="border border-brand-border/60 bg-brand-charcoal/40 transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-gold"
      >
        <span className="font-serif text-base sm:text-lg text-white pr-2">
          {question}
        </span>
        <span
          className={cn(
            'w-7 h-7 rounded-full border border-brand-border flex items-center justify-center shrink-0 text-gold transition-transform duration-300',
            isOpen && 'rotate-180 bg-gold/10 border-gold/40'
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      {/* Accordion Content with smooth collapse */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed font-light border-t border-brand-border/30 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}