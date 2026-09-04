import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Card from '../common/Card';

export default function ServiceCard({ service }) {
  const { title, slug, category, shortDescription, image, features } = service;

  return (
    <Card className="group flex flex-col justify-between p-0 overflow-hidden bg-brand-charcoal hover:border-gold/50 transition-all duration-500">
      {/* Visual Image Banner with Subtle Zoom */}
      <div className="relative h-64 w-full overflow-hidden bg-brand-surface">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />
        <span className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-3 py-1 font-semibold border border-gold/20">
          {category}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6 font-light">
            {shortDescription}
          </p>

          {/* Key Feature Bullets */}
          {features && (
            <ul className="space-y-2 mb-8 border-t border-brand-border/40 pt-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-slate-300 gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Link */}
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center justify-between w-full pt-4 border-t border-brand-border/40 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors group/link"
        >
          <span>Explore Experience</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </Card>
  );
}