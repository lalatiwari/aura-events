import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, Sparkles } from 'lucide-react';
import { NAV_LINKS, APP_CONFIG } from '../../config/constants';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose }) {
  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-brand-charcoal border-l border-brand-border p-6 shadow-2xl flex flex-col justify-between z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-brand-border/60">
            <span className="font-serif text-xl tracking-widest text-gold uppercase">
              {APP_CONFIG.name}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-sm font-sans tracking-widest uppercase transition-colors py-2 border-b border-white/5 ${
                    isActive
                      ? 'text-gold font-semibold border-gold/40'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Details & CTA */}
        <div className="pt-6 border-t border-brand-border/60 space-y-4">
          <div className="space-y-2 text-xs text-brand-muted">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{APP_CONFIG.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{APP_CONFIG.contact.email}</span>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={Sparkles}
            to="/contact"
            className="w-full"
            onClick={onClose}
          >
            Plan My Event
          </Button>
        </div>
      </div>
    </div>
  );
}