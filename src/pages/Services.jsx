import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';

const CATEGORIES = ['All', 'Weddings', 'Corporate', 'Private', 'Celebration', 'Entertainment', 'Media'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pb-24 space-y-16 text-slate-100 bg-brand-dark min-h-screen">
      {/* Services Hero */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Bespoke Event Disciplines
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight font-normal">
            Precision Planning For Life's Defining Milestones
          </h1>

          <p className="mt-6 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every celebration has its own DNA. Discover our tailored event disciplines, engineered with architectural precision and creative mastery.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Full Contract Liability</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Dedicated Production Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>International Vendor Access</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Grid */}
      <section>
        <Container>
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-brand-border/40 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-sans font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-brand-dark font-semibold'
                    : 'text-slate-300 hover:text-gold hover:bg-brand-surface/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}