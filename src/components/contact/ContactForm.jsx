import React, { useState } from 'react';
import Button from '../common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    discipline: 'Destination Wedding',
    guestCount: '',
    estimatedDate: '',
    venuePreference: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-charcoal border border-gold/40 p-8 sm:p-12 text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl text-white">Inquiry Received</h3>
        <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed font-light">
          Thank you, <span className="text-white font-medium">{formData.fullName}</span>. An executive producer from our Concierge Directorate will reach out within 12 business hours to schedule your private design walkthrough.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              discipline: 'Destination Wedding',
              guestCount: '',
              estimatedDate: '',
              venuePreference: '',
              notes: ''
            });
          }}
          className="text-xs uppercase tracking-widest text-gold underline pt-4 cursor-pointer"
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-charcoal border border-brand-border/70 p-6 sm:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Maharawal Vikram Singh"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Direct Phone Number *
          </label>
          <input
            required
            type="tel"
            placeholder="+91 98765 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Email Address *
          </label>
          <input
            required
            type="email"
            placeholder="name@executive.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Event Discipline
          </label>
          <select
            value={formData.discipline}
            onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white focus:outline-none focus:border-gold cursor-pointer"
          >
            <option>Destination Wedding</option>
            <option>Corporate Summit / Leadership Gala</option>
            <option>Curated Private Soirée</option>
            <option>Thematic Sangeet / Cocktail Night</option>
            <option>Celebrity Artist Concert</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Approximate Guest Count
          </label>
          <input
            type="text"
            placeholder="e.g. 350 Guests"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
            Target Timeline / Dates
          </label>
          <input
            type="text"
            placeholder="e.g. Winter Season 2026-2027"
            value={formData.estimatedDate}
            onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
            className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-slate-300 mb-2 font-medium">
          Vision, Venue Preferences & Technical Notes
        </label>
        <textarea
          rows="4"
          placeholder="Share details regarding preferred destinations (e.g. Udaipur, Dubai), scale of production, or specific artist requirements..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full bg-brand-dark border border-brand-border p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
        />
      </div>

      <Button variant="primary" size="md" type="submit" icon={Send} className="w-full justify-center">
        Submit Event Brief
      </Button>
    </form>
  );
}