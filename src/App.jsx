import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Gallery from './pages/Gallery';
import Events from './pages/Events';

const About = () => <div className="py-24 text-center text-slate-300 font-serif text-2xl">About Page (Upcoming)</div>;
const Packages = () => <div className="py-24 text-center text-slate-300 font-serif text-2xl">Packages Page (Upcoming)</div>;
const Contact = () => <div className="py-24 text-center text-slate-300 font-serif text-2xl">Contact Page (Upcoming)</div>;
const NotFound = () => <div className="py-24 text-center text-red-400 font-serif text-2xl">404 - Page Not Found</div>;

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}