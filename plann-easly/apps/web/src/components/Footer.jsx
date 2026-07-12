import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { waLink } from '@/data/content';

function Footer() {
  return (
    <footer className="mt-24 bg-[hsl(var(--deepred))] text-white/90">
      <div className="mx-auto max-w-[90rem] px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <h3 className="font-display text-3xl font-700 text-white">EventEase</h3>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">Plan your event, we handle everything. From venues to décor and delicious food, we make celebrations effortless.</p>
          <div className="mt-5 flex gap-3">
            <a href={waLink()} className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/venues" className="hover:text-white">Venues</Link></li>
            <li><Link to="/food" className="hover:text-white">Food</Link></li>
            <li><Link to="/decoration" className="hover:text-white">Decoration</Link></li>
            <li><Link to="/estimate" className="hover:text-white">Budget Estimator</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> +91 79853 07537</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> ankitshukla9391@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Noida,Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} EventEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
