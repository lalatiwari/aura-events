import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import Container from '../components/common/Container';
import { ArrowLeft, Check, Banknote, Clock, Sparkles } from 'lucide-react';

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pb-24 space-y-16 text-slate-100 bg-brand-dark min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-brand-charcoal border-b border-brand-border/60 text-center">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
          </Link>

          <span className="block text-[11px] uppercase tracking-widest text-gold/80 mb-3 font-semibold">
            {service.category} Discipline
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif text-white max-w-4xl mx-auto leading-tight">
            {service.title}
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {service.tagline}
          </p>
        </Container>
      </section>

      {/* Specs & Overview */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-charcoal border border-brand-border/60 p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-4">
              <Banknote className="w-8 h-8 text-gold shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-muted block">Typical Investment</span>
                <span className="text-lg font-serif text-white">{service.investmentRange}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-gold shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-muted block">Execution Timeline</span>
                <span className="text-lg font-serif text-white">{service.durationAvg}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-white">Event Architecture & Vision</h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {service.overview}
              </p>
            </div>

            <div className="bg-brand-charcoal border border-brand-border p-6 space-y-6">
              <h3 className="font-serif text-xl text-white">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-gold text-brand-dark px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-gold-hover transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" /> Reserve This Date
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}