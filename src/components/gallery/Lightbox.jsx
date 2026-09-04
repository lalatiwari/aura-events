import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    },
    [currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-brand-muted">
          <span className="text-gold font-medium">{currentIndex + 1}</span> / {items.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Stage & Image Container */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4 overflow-hidden">
        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-4 z-10 p-3 text-gold hover:text-white bg-brand-dark/60 hover:bg-brand-dark/90 rounded-full border border-gold/30 transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[72vh] max-w-full object-contain select-none shadow-2xl border border-brand-border/40"
        />

        <button
          type="button"
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-4 z-10 p-3 text-gold hover:text-white bg-brand-dark/60 hover:bg-brand-dark/90 rounded-full border border-gold/30 transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Details Bar */}
      <div className="text-center max-w-2xl mx-auto z-10">
        <div className="inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-widest mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{currentItem.location}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
          {currentItem.title}
        </h3>
        <p className="mt-1 text-xs text-brand-muted font-light">
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
}