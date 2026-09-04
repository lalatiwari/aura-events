import React, { useState } from 'react';
import Container from '../components/common/Container';
import Lightbox from '../components/gallery/Lightbox';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Sparkles, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pb-24 space-y-16 text-slate-100 bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Curated Visual Chronicle
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight">
            The Aura Visual Gallery
          </h1>
          <p className="mt-4 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto font-light">
            Glimpse into our grand architectural setups, royal pavilions, and lighting installations from celebrations across the globe.
          </p>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section>
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-brand-border/40 pb-6">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-sans transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-brand-dark font-semibold'
                    : 'text-slate-300 hover:text-gold hover:bg-brand-surface/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden border border-brand-border/50 bg-brand-charcoal"
              >
                <div className={`w-full ${item.aspectRatio || 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">
                        {item.location}
                      </span>
                      <h4 className="font-serif text-lg text-white">
                        {item.title}
                      </h4>
                    </div>
                    <span className="p-2 rounded-full bg-gold/10 text-gold border border-gold/30">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Trigger */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </div>
  );
}