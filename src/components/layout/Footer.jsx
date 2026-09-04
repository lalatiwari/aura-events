import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import { APP_CONFIG, NAV_LINKS } from '../../config/constants';

// Inline SVG components for social icons
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-border/60 text-slate-400 font-sans text-xs">
      {/* Top Banner */}
      <div className="border-b border-brand-border/40 py-12 bg-brand-surface/40">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                Ready to create an extraordinary event?
              </h3>
              <p className="text-brand-muted text-sm">
                Connect with our concierge team for custom curation and planning.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-brand-dark px-6 py-3 font-semibold uppercase tracking-widest text-xs hover:bg-gold-hover transition-all"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <span className="font-serif text-2xl tracking-widest text-white uppercase block">
                AURA<span className="text-gold font-light ml-1">EVENTS</span>
              </span>
              <p className="text-brand-muted text-xs leading-relaxed max-w-xs">
                {APP_CONFIG?.tagline}. Specializing in luxury weddings, grand corporate galas, and bespoke private soirées.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <a href={APP_CONFIG?.social?.instagram || '#'} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 bg-brand-surface hover:text-gold transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href={APP_CONFIG?.social?.linkedin || '#'} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 bg-brand-surface hover:text-gold transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={APP_CONFIG?.social?.youtube || '#'} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 bg-brand-surface hover:text-gold transition-colors">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-white text-base tracking-widest uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS?.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event Specialities */}
            <div>
              <h4 className="font-serif text-white text-base tracking-widest uppercase mb-4">Experiences</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services" className="hover:text-gold transition-colors">Royal Destination Weddings</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Corporate Summits & Galas</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Curated Private Soirées</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Theme & Sangeet Nights</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Celebrity DJ & Sound Production</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Concierge */}
            <div>
              <h4 className="font-serif text-white text-base tracking-widest uppercase mb-4">Concierge Desk</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{APP_CONFIG?.contact?.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>{APP_CONFIG?.contact?.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>{APP_CONFIG?.contact?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-border/40 py-6 text-center text-slate-500">
        <Container>
          <p>© {new Date().getFullYear()} {APP_CONFIG?.name}. All rights reserved. Built with React & Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}