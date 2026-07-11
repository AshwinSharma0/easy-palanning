import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { waLink } from '@/data/content';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a href={waLink()} aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

export default Layout;
