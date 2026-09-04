import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer text-xs';

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-xs',
  };

  const variants = {
    primary: 'bg-gold text-brand-dark hover:bg-gold-hover shadow-lg hover:shadow-gold/20',
    outline: 'border border-gold/60 text-gold hover:bg-gold hover:text-brand-dark',
    ghost: 'text-slate-300 hover:text-gold hover:bg-brand-surface/50',
  };

  const combinedClasses = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 ml-2 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}