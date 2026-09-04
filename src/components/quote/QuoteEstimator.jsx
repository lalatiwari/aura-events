import React, { useState, useMemo } from 'react';
import { ESTIMATOR_CONFIG } from '../../data/packagesData';
import Button from '../common/Button';
import { Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function QuoteEstimator() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(250);
  const [selectedDecorIndex, setSelectedDecorIndex] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState(['concertAV', 'cinematicDrone']);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const base = ESTIMATOR_CONFIG.eventTypes[selectedTypeIndex].baseCost;
    const decorMultiplier = ESTIMATOR_CONFIG.decorTiers[selectedDecorIndex].multiplier;
    const guestFactor = guestCount * 2500;

    const addonsCost = selectedAddons.reduce((sum, addonId) => {
      const match = ESTIMATOR_CONFIG.productionAddons.find((a) => a.id === addonId);
      return sum + (match ? match.cost : 0);
    }, 0);

    const total = Math.round((base + guestFactor) * decorMultiplier + addonsCost);
    return total;
  }, [selectedTypeIndex, guestCount, selectedDecorIndex, selectedAddons]);

  const formatRupees = (amt) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amt);
  };

  return (
    <div className="bg-brand-charcoal border border-brand-border/70 p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-full bg-gold/10 border border-gold/30 text-gold">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-white">Interactive Budget Architecture</h3>
          <p className="text-xs text-brand-muted">Real-time approximate investment estimate for your production scope</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Event Type */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-slate-300 font-medium mb-3">
              1. Event Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ESTIMATOR_CONFIG.eventTypes.map((type, idx) => (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => setSelectedTypeIndex(idx)}
                  className={`text-left p-3.5 border text-xs tracking-wide transition-all cursor-pointer ${
                    selectedTypeIndex === idx
                      ? 'border-gold bg-gold/10 text-white font-medium shadow-md shadow-gold/5'
                      : 'border-brand-border bg-brand-dark/40 text-slate-400 hover:border-gold/40'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs uppercase tracking-widest text-slate-300 font-medium">
                2. Approximate Guest Count
              </label>
              <span className="font-serif text-lg text-gold font-semibold">{guestCount} Guests</span>
            </div>
            <input
              type="range"
              min="50"
              max="1200"
              step="25"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full accent-gold bg-brand-dark cursor-pointer h-2 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-brand-muted mt-1 uppercase tracking-widest">
              <span>50 Guests</span>
              <span>600 Guests</span>
              <span>1200+ Guests</span>
            </div>
          </div>

          {/* Decor Tier */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-slate-300 font-medium mb-3">
              3. Visual & Floral Aesthetic Tier
            </label>
            <div className="space-y-2">
              {ESTIMATOR_CONFIG.decorTiers.map((tier, idx) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setSelectedDecorIndex(idx)}
                  className={`w-full text-left p-3 border text-xs transition-all flex items-center justify-between cursor-pointer ${
                    selectedDecorIndex === idx
                      ? 'border-gold bg-gold/10 text-white font-medium'
                      : 'border-brand-border bg-brand-dark/40 text-slate-400 hover:border-gold/40'
                  }`}
                >
                  <span>{tier.label}</span>
                  {selectedDecorIndex === idx && <Check className="w-4 h-4 text-gold" />}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-slate-300 font-medium mb-3">
              4. Production & AV Integrations
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ESTIMATOR_CONFIG.productionAddons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`text-left p-3 border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                      isChecked
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-brand-border bg-brand-dark/40 text-slate-400 hover:border-gold/40'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-gold border-gold text-brand-dark' : 'border-brand-border'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                    <span className="leading-snug">{addon.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-brand-dark border border-brand-border/80 p-6 sm:p-8">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-widest text-gold block font-semibold">
              Estimated Investment
            </span>

            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl text-white font-normal block tracking-tight">
                {formatRupees(calculatedEstimate)}
              </span>
              <span className="text-[11px] text-brand-muted block">
                Estimated turnkey production cost (Excl. taxes & venue rental)
              </span>
            </div>

            <div className="border-t border-brand-border/60 pt-4 space-y-3 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-brand-muted">Discipline:</span>
                <span className="font-medium text-white">{ESTIMATOR_CONFIG.eventTypes[selectedTypeIndex].label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Delegates / Guests:</span>
                <span className="font-medium text-white">{guestCount} pax</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Aesthetic:</span>
                <span className="font-medium text-white">{ESTIMATOR_CONFIG.decorTiers[selectedDecorIndex].label.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Custom Addons:</span>
                <span className="font-medium text-white">{selectedAddons.length} Selected</span>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <Button variant="primary" size="md" to="/contact" icon={ArrowRight} className="w-full justify-center">
              Lock This Estimate
            </Button>
            <p className="text-[10px] text-center text-brand-muted leading-relaxed font-light">
              Final investment will be tailored following venue feasibility and architectural walkthroughs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}