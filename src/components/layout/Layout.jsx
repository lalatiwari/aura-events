import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from '../whatsapp/WhatsAppFloat';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-slate-100 selection:bg-gold selection:text-brand-dark relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}