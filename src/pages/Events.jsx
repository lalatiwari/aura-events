import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { PORTFOLIO_EVENTS } from '../data/eventsData';
import { Sparkles, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Events() {
  return (
    <div className="pb-24 space-y-16 text-slate-100 bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Signature Case Studies
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight">
            Curated Event Case Studies
          </h1>
          <p className="mt-4 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Detailed architectures, operational logistics, and production metrics of landmark milestones executed across the globe.
          </p>
        </Container>
      </section>

      {/* Event Study Cards */}
      <section>
        <Container>
          <div className="space-y-16">
            {PORTFOLIO_EVENTS.map((event, index) => (
              <div
                key={event.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-brand-charcoal border border-brand-border/60 p-6 sm:p-10"
              >
                {/* Visual */}
                <div className="lg:col-span-6 overflow-hidden border border-brand-border/40 h-80 sm:h-96">
                  <img
                    src={event.heroImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gold mb-3 font-medium">
                      <span>{event.category}</span>
                      <span>•</span>
                      <span>Case 0{index + 1}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                      {event.title}
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {event.excerpt}
                    </p>

                    <div className="grid grid-cols-3 gap-4 border-y border-brand-border/40 py-4 mb-6">
                      {event.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <span className="font-serif text-lg sm:text-xl text-gold block">
                            {metric.value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-brand-muted">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-gold" />
                        <span>{event.guests}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{event.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="sm" to="/contact" icon={ArrowRight}>
                      Inquire Similar Execution
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}