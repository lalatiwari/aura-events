import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { NAV_LINKS } from '../../config/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border/80 py-3 shadow-lg shadow-black/40'
          : 'bg-brand-dark border-b border-brand-border/40 py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-serif text-2xl tracking-widest text-white uppercase group-hover:text-gold transition-colors">
              AURA<span className="text-gold font-light ml-1">EVENTS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-slate-300 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="sm" to="/contact" icon={Sparkles}>
              Plan My Event
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-gold cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-brand-border/60 space-y-3 pb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-widest text-slate-300 hover:text-gold py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                to="/contact"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan My Event
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}