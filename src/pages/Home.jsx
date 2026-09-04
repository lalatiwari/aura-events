import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Compass, Play } from 'lucide-react';

import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Counter from '../components/common/Counter';
import ServiceCard from '../components/services/ServiceCard';
import FAQItem from '../components/faq/FAQItem';

import { SERVICES_DATA } from '../data/services';
import { STATS_DATA, WHY_CHOOSE_US, PLANNING_PROCESS, FAQS_PREVIEW } from '../data/homeData';

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState(0);

  const handleToggleFAQ = (index) => {
    setOpenFAQIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center -mt-20 pt-28 pb-16 overflow-hidden luxury-glow">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2A3444_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
        
        <Container className="relative z-10 text-center">
          {/* Top Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-luxury text-gold-light font-medium">
              Architects of Exceptional Celebrations
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl mx-auto leading-[1.08] tracking-tight font-normal">
            Turning Your Moments Into <span className="text-gold-gradient italic font-serif">Timeless</span> Masterpieces
          </h1>

          {/* Supporting Copy */}
          <p className="mt-8 text-brand-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We engineer bespoke royal weddings, high-profile corporate summits, and discreet private soirées worldwide with unmatched artistic rigor.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="primary" size="lg" icon={Sparkles} to="/contact" className="w-full sm:w-auto">
              Plan My Event
            </Button>
            <Button variant="outline" size="lg" icon={ArrowRight} to="/services" className="w-full sm:w-auto">
              Explore Portfolio
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-16 pt-10 border-t border-brand-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-slate-300">100% Transparent Budgeting</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-slate-300">Zero-Latency Execution</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-slate-300">Awarded Luxury Agency</span>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-slate-300">Global Destination Reach</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STATS & METRICS COUNTER */}
      <section className="border-y border-brand-border/40 bg-brand-charcoal/60 py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="space-y-2">
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold font-normal">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-luxury text-brand-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section>
        <Container>
          <SectionHeading
            eyebrow="Curated Experiences"
            title="Signature Event Disciplines"
            subtitle="From majestic destination palaces to laser-precision corporate galas, explore our dedicated event specialities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="md" icon={ArrowRight} to="/services">
              View All 12+ Specialities
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. WHY CHOOSE US (TRUST PILLARS) */}
      <section className="bg-brand-charcoal/40 py-20 border-y border-brand-border/40">
        <Container>
          <SectionHeading
            eyebrow="The Aura Standard"
            title="Engineered for Perfection"
            subtitle="Why prominent families, global executives, and visionary brands entrust their defining milestones to us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <Card key={item.id} className="p-8 border-brand-border/60 hover:border-gold/40">
                <div className="text-gold font-serif text-2xl mb-3">0{item.id}</div>
                <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. PLANNING PROCESS (TIMELINE) */}
      <section>
        <Container>
          <SectionHeading
            eyebrow="Methodology"
            title="From Initial Vision to Flawless Reality"
            subtitle="Our disciplined 6-stage lifecycle eliminates friction, ensuring complete peace of mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {PLANNING_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="relative p-8 bg-brand-charcoal border border-brand-border/50 transition-all hover:border-gold/40 group"
              >
                <span className="font-serif text-4xl text-gold/30 group-hover:text-gold transition-colors block mb-4">
                  {proc.step}
                </span>
                <h3 className="font-serif text-xl text-white mb-2">{proc.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed font-light">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FAQ ACCORDION PREVIEW */}
      <section className="bg-brand-surface/20 py-20 border-y border-brand-border/40">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Questions & Clarifications"
            title="Everything You Need to Know"
            subtitle="Clear answers regarding our bespoke engagement models, vendor governance, and destination coverage."
          />

          <div className="space-y-4">
            {FAQS_PREVIEW.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQIndex === index}
                onToggle={() => handleToggleFAQ(index)}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/faq" className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors">
              Have more questions? Read full FAQ &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CALL TO ACTION (CTA) BANNER */}
      <section>
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-r from-brand-charcoal via-brand-surface to-brand-charcoal border border-gold/30 p-10 sm:p-16 md:p-20 text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-luxury text-gold font-semibold block">
                Begin The Journey
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight">
                Let’s Compose an Unforgettable Celebration Together
              </h2>
              <p className="text-brand-muted text-xs sm:text-sm md:text-base leading-relaxed font-light">
                Our bespoke event planners accept a limited number of commissions each calendar year to ensure absolute dedication to your milestone.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" icon={Sparkles} to="/contact">
                  Schedule Private Consultation
                </Button>
                <Button variant="outline" size="lg" to="/packages">
                  Explore Curated Packages
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}