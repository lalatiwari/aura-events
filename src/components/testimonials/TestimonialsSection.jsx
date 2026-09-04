import React from 'react';
import Container from '../common/Container';
import { TESTIMONIALS, PRESS_ACCOLADES } from '../../data/testimonialsData';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-charcoal/60 border-y border-brand-border/40">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Client Commendations
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
            Endorsed by Royalty & Global Leaders
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-muted font-light">
            Reflections from families and corporate councils who entrusted their hallmark moments to our architectural care.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-brand-dark border border-brand-border/70 p-8 flex flex-col justify-between relative group hover:border-gold/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-gold gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold/20 group-hover:text-gold/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-border/40">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-gold/40"
                />
                <div>
                  <h4 className="font-serif text-sm text-white font-medium">{item.author}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-gold block">{item.title}</span>
                  <span className="text-[10px] text-brand-muted block font-light">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Mentions Bar */}
        <div className="pt-12 border-t border-brand-border/50">
          <span className="text-center block text-[10px] uppercase tracking-widest text-brand-muted mb-8 font-medium">
            Recognized by Leading Global Publications
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div key={idx} className="p-4 border border-brand-border/30 bg-brand-dark/40 space-y-1">
                <span className="font-serif text-base text-gold block">{item.publication}</span>
                <p className="text-[11px] text-slate-400 font-light">{item.mention}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}