import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultTemplates = [
    'I would like to inquire about a Royal Destination Wedding.',
    'Seeking consultation for an upcoming Corporate Leadership Summit.',
    'Need private curation for an exclusive celebration/soirée.'
  ];

  const handleSend = (textToSend) => {
    const message = textToSend || userMsg || 'Hello Aura Concierge, I would like to inquire about your event curation services.';
    const phoneNumber = '919876543210';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-brand-charcoal border border-gold/40 shadow-2xl p-5 text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-serif text-base text-white">Private Concierge Desk</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-brand-muted font-light mb-4 leading-relaxed">
            Welcome to Aura Events. Connect directly with our Senior Event Directors on WhatsApp for prompt discrete assistance.
          </p>

          <div className="space-y-2 mb-4">
            <span className="text-[10px] uppercase tracking-widest text-gold block font-medium">Quick Inquiry</span>
            {defaultTemplates.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(item)}
                className="w-full text-left p-2.5 text-xs bg-brand-dark/60 hover:bg-gold/10 border border-brand-border/60 hover:border-gold/40 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Or type custom request..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(userMsg)}
              className="flex-1 bg-brand-dark border border-brand-border/80 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold"
            />
            <button
              type="button"
              onClick={() => handleSend(userMsg)}
              className="bg-gold hover:bg-gold-hover text-brand-dark p-2 text-xs font-semibold flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-brand-dark border border-gold/60 text-gold hover:bg-gold hover:text-brand-dark shadow-xl transition-all cursor-pointer group"
      >
        <MessageCircle className="w-5 h-5 text-gold group-hover:text-brand-dark transition-colors" />
        <span className="text-xs uppercase tracking-widest font-semibold">VIP Concierge</span>
      </button>
    </div>
  );
}