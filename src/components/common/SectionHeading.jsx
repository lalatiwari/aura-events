import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal leading-tight max-w-3xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-brand-muted text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}