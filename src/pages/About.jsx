import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { MILESTONES, LEADERSHIP_TEAM, PILLARS } from '../data/aboutData';
import { Sparkles, Compass, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24 space-y-24 text-slate-100 bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              The Heritage Behind Aura
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight font-normal">
            Where Visionary Design Meets Flawless Execution
          </h1>
          <p className="mt-6 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Born from a desire to redefine luxury gatherings, Aura Events operates at the intersection of classical royal elegance and futuristic technical architecture.
          </p>
        </Container>
      </section>

      {/* Philosophy / Story Section */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white leading-snug">
                We do not organize events. We engineer unforgettable legacies.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                An event should feel like a sensory journey rather than a coordinated schedule. From the moment guests receive their bespoke gilded invitations to the final champagne pour under a constellation of cold pyrotechnics, every second is orchestrated to evoke emotion and prestige.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-brand-border/40">
                {PILLARS.map((p, i) => (
                  <div key={i} className="space-y-1">
                    <span className="font-serif text-base text-gold block">{p.title}</span>
                    <p className="text-[11px] text-brand-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden border border-brand-border/60 bg-brand-charcoal">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Philosophy"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="bg-brand-charcoal/50 py-20 border-y border-brand-border/40">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Chronicle of Milestone Milestones</h2>
          </div>

          <div className="relative border-l border-gold/30 ml-4 sm:mx-auto sm:max-w-3xl space-y-12 pl-6 sm:pl-8">
            {MILESTONES.map((item, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-gold group-hover:bg-gold transition-colors" />
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-serif text-2xl text-gold">{item.year}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">• {item.location}</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section>
        <Container>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block mb-2">
              The Directorate
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Custodians of Craft & Elegance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((director, i) => (
              <div key={i} className="bg-brand-charcoal border border-brand-border/60 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-full aspect-[4/5] overflow-hidden mb-6 border border-brand-border/40">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">
                    {director.experience}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-1">{director.name}</h3>
                  <span className="text-xs text-brand-muted block mb-4 font-light">{director.role}</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {director.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section>
        <Container>
          <div className="bg-gradient-to-r from-brand-charcoal to-brand-dark border border-gold/40 p-8 sm:p-12 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4">
              Begin Curating Your Next Milestone
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-xl mb-8 font-light leading-relaxed">
              Whether an imperial palace celebration or a worldwide corporate summit, our directors are available for private consultations.
            </p>
            <Button variant="primary" size="md" to="/contact" icon={ArrowRight}>
              Schedule Executive Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}