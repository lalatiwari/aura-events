import React from 'react';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import { CONTACT_INFO } from '../config/constants';
import { Sparkles, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

const OFFICES = [
  {
    city: 'Gurugram & Delhi NCR',
    role: 'Corporate Headquarters',
    address: 'DLF CyberCity, Building 10, Phase 2, Gurugram, Haryana',
    phone: '+91 98765 43210'
  },
  {
    city: 'Mumbai',
    role: 'Western Studio & Media Desk',
    address: 'One BKC, G Block, Bandra Kurla Complex, Mumbai',
    phone: '+91 98765 43211'
  },
  {
    city: 'Dubai',
    role: 'Middle East & Global Client Liaison',
    address: 'DIFC Gate Precinct 4, Trade Centre, Dubai, UAE',
    phone: '+971 4 000 0000'
  }
];

export default function Contact() {
  return (
    <div className="pb-24 space-y-20 text-slate-100 bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-border/50 text-center">
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Direct Access to the Directorate
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight font-normal">
            Commission Your Production
          </h1>
          <p className="mt-4 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Our directors accept a strictly limited number of commissions each calendar year to ensure uncompromised spatial design and white-glove execution.
          </p>
        </Container>
      </section>

      {/* Main Grid: Info + Form */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-brand-charcoal border border-brand-border/60 p-6 sm:p-8 space-y-6">
                <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
                  Private Liaison Lines
                </span>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-muted block text-[10px] uppercase tracking-wider">Direct Concierge</span>
                      <span className="text-white font-medium">{CONTACT_INFO?.phone || '+91 98765 43210'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-300">
                    <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-muted block text-[10px] uppercase tracking-wider">Executive Inbox</span>
                      <span className="text-white font-medium">{CONTACT_INFO?.email || 'concierge@auraevents.com'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-brand-muted block text-[10px] uppercase tracking-wider">Liaison Hours</span>
                      <span className="text-white">Monday – Saturday: 09:00 to 20:00 IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/40 flex items-center gap-3 text-xs text-gold">
                  <Shield className="w-4 h-4 shrink-0" />
                  <span>Strict Non-Disclosure Protocols Assured</span>
                </div>
              </div>

              {/* Office Hubs */}
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-slate-300 font-semibold block">
                  Executive Studio Hubs
                </span>
                {OFFICES.map((office, idx) => (
                  <div key={idx} className="p-4 border border-brand-border/40 bg-brand-charcoal/40 space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-serif text-white text-base">{office.city}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gold">{office.role}</span>
                    </div>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">{office.address}</p>
                    <span className="text-xs text-slate-300 block pt-1">{office.phone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}