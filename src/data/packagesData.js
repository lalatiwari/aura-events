export const PACKAGES_DATA = [
  {
    id: 'intimate-bespoke',
    name: 'The Curated Soirée',
    subtitle: 'For intimate milestones, anniversaries & private luxury dinners',
    price: '₹8,50,000',
    priceUnit: 'Starting Base',
    badge: 'Intimate Luxury',
    recommendedGuests: 'Up to 100 Guests',
    features: [
      'Dedicated Event Director & Lead Concierge',
      'Custom Floral Design & Mood Lighting Architecture',
      'Private Sommelier & Mixology Station Setup',
      'Acoustic Duo or Jazz Trio Live Entertainment',
      'Editorial Photography & Same-Day Highlight Reel',
      'Full On-Site Coordination (12-Hour Active Window)'
    ],
    highlighted: false
  },
  {
    id: 'sovereign-royal',
    name: 'The Sovereign Palace',
    subtitle: 'Flagship destination weddings & multi-day celebratory galas',
    price: '₹35,00,000',
    priceUnit: 'Starting Base',
    badge: 'Most Distinguished',
    recommendedGuests: '250 – 800+ Guests',
    features: [
      'Complete Destination Scouting & Palatial Venue Takeover',
      '3-Day Multi-Ceremony Conceptual Design & Mandap Engineering',
      'Concert-Grade Truss Lighting, Lasers & Pyrotechnic Setup',
      'VIP Protocol, Hospitality Desk & Luxury Fleet Logistics',
      'Celebrity Artist Sourcing, Rider Compliance & Stage Setup',
      'Cinematic 4K Drone Films & Handcrafted Heirloom Albums',
      '24/7 Concierge Squad with 3 Dedicated Project Managers'
    ],
    highlighted: true
  },
  {
    id: 'executive-summit',
    name: 'The Executive Summit',
    subtitle: 'High-stakes corporate summits, brand spectacles & global galas',
    price: '₹20,00,000',
    priceUnit: 'Starting Base',
    badge: 'Enterprise Standard',
    recommendedGuests: '200 – 1,500 Delegates',
    features: [
      'Broadcast-Grade Anamorphic Curved LED Stage Architecture',
      'Zero-Latency Digital Audiovisual & Live Satellite Uplink',
      'Keynote Dignitary VIP Protocols & Dedicated Green Rooms',
      'Interactive Exhibition Networking Lounges & Registration Tech',
      'Gala Dinner Lighting, Stage Theatrics & Corporate Awards',
      'Comprehensive Public Liability Coverage & Safety Audit'
    ],
    highlighted: false
  }
];

export const ESTIMATOR_CONFIG = {
  eventTypes: [
    { label: 'Destination Wedding', baseCost: 1800000 },
    { label: 'Corporate Summit / Gala', baseCost: 1200000 },
    { label: 'Private Ultra-Luxury Soirée', baseCost: 600000 },
    { label: 'Thematic Sangeet / Cocktail Night', baseCost: 900000 }
  ],
  decorTiers: [
    { label: 'Minimalist Editorial', multiplier: 1.0 },
    { label: 'Grand Opulence (Structural Florals & Glasswork)', multiplier: 1.4 },
    { label: 'Imperial Palatial (Heritage Fabrics, Antique Props & Canopies)', multiplier: 1.8 }
  ],
  productionAddons: [
    { id: 'cinematicDrone', label: '4K Cinema Drone & Dual-Operator Team', cost: 180000 },
    { id: 'concertAV', label: 'Concert-Grade Truss, Moving Beams & Cold Sparks', cost: 350000 },
    { id: 'guestHospitality', label: 'VIP Fleet Coordination & Private Concierge Desk', cost: 220000 },
    { id: 'celebrityRider', label: 'Backstage Artist Rider & Lounge Management', cost: 150000 }
  ]
};