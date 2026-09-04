import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import QuoteEstimator from '../components/quote/QuoteEstimator';
import { PACKAGES_DATA } from '../data/packagesData';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function Packages() {
  return (
    <div className="pb-24 space-y-20 text-slate-100 bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Transparent Luxury Standards
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight">
            Curated Production Packages
          </h1>
          <p className="mt-4 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Turnkey production blueprints combining architectural aesthetics, master technicians, and executive hospitality.
          </p>
        </Container>
      </section>

      {/* Package Tier Cards */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKAGES_DATA.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 border transition-all ${
                  pkg.highlighted
                    ? 'bg-brand-charcoal border-gold shadow-2xl shadow-gold/5 lg:-translate-y-2'
                    : 'bg-brand-charcoal/60 border-brand-border/60 hover:border-gold/40'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-brand-dark text-[10px] uppercase font-bold tracking-widest">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {!pkg.highlighted && (
                    <span className="text-[10px] uppercase tracking-widest text-gold font-medium block mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h2 className="font-serif text-2xl text-white mb-2">{pkg.name}</h2>
                  <p className="text-xs text-brand-muted mb-6 leading-relaxed font-light">{pkg.subtitle}</p>

                  <div className="border-y border-brand-border/40 py-4 mb-6">
                    <span className="text-xs uppercase tracking-widest text-brand-muted block">Starting From</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-serif text-3xl sm:text-4xl text-white font-normal">{pkg.price}</span>
                      <span className="text-xs text-brand-muted font-light">/ Event</span>
                    </div>
                    <span className="text-[11px] text-gold/80 block mt-2">{pkg.recommendedGuests}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.highlighted ? 'primary' : 'outline'}
                  size="sm"
                  to="/contact"
                  className="w-full justify-center"
                >
                  Request Package Blueprint
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Budget Estimator Section */}
      <section>
        <Container>
          <QuoteEstimator />
        </Container>
      </section>
    </div>
  );
}