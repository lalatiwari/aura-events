import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Base elevated surface card with luxury dark styling and border transition
 */
export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-brand-charcoal border border-brand-border/60 rounded-none p-6 sm:p-8 transition-all duration-300',
        hover && 'hover:border-gold/40 hover:shadow-luxury',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}