import React from 'react';

export default function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const selectedSize = sizes[size] || sizes.default;

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${selectedSize} ${className}`}>
      {children}
    </div>
  );
}