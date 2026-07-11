import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PartyPopper } from 'lucide-react';
import Button from './Button';

const links = [
  { to: '/', label: 'Home' },
  { to: '/venues', label: 'Venues' },
  { to: '/food', label: 'Food' },
  { to: '/decoration', label: 'Decoration' },
  { to: '/estimate', label: 'Estimate' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-[90rem] px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground">
            <PartyPopper className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-700 text-foreground">EventEase</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'text-primary bg-secondary' : 'text-foreground/70 hover:text-primary'}`}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/enquiry" className="ml-2 px-5 py-2.5 min-h-0 text-sm">Get Started</Button>
        </div>

        <button className="lg:hidden p-2 -mr-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium ${isActive ? 'text-primary bg-secondary' : 'text-foreground/80'}`}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/enquiry" onClick={() => setOpen(false)} className="mt-2 w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
