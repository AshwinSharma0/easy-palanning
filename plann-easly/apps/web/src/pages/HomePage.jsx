import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ClipboardList, Palette, PartyPopper, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';
import { eventTypes } from '@/data/content';

const steps = [
  { icon: ClipboardList, title: 'Tell Us Your Vision', desc: 'Share your event type, date, guest count and budget.' },
  { icon: Palette, title: 'We Craft the Plan', desc: 'Venue, food, décor — a tailored package just for you.' },
  { icon: CheckCircle2, title: 'You Approve', desc: 'Review the estimate and tweak anything you like.' },
  { icon: PartyPopper, title: 'We Celebrate', desc: 'Sit back while we handle every last detail.' },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92dvh] flex items-center overflow-hidden">
        <img src="https://images.hostinger.com/0f42a500-9366-4814-8a8e-750481f14cd9.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deepred))]/90 via-[hsl(var(--deepred))]/55 to-black/30" />
        <div className="relative mx-auto max-w-[72rem] px-6 py-24 text-white">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full bg-[hsl(var(--gold))] px-4 py-1.5 text-sm font-semibold text-[hsl(var(--deepred))]">
            Local Event Planning · Made Joyful
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-700 leading-[1.02] max-w-3xl">
            Plan Your Event,<br /><span className="text-[hsl(var(--gold))]">We Handle</span> Everything
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/85">
            Birthdays, farewells, office parties and family functions — beautifully organised from start to finish.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4">
            <Button to="/enquiry" variant="gold" className="text-lg">Get Started <ArrowRight className="h-5 w-5" /></Button>
            <Button to="/estimate" variant="ghost" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">Estimate Budget</Button>
          </motion.div>
        </div>
      </section>

      {/* Event types */}
      <section className="mx-auto max-w-[90rem] px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-wide text-sm">What we plan</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-700">Every Celebration, Covered</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((e, i) => (
            <motion.div key={e.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to="/enquiry" className="group block overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={e.img} alt={e.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-2xl font-600 text-white">{e.name}</h3>
                </div>
                <p className="p-5 text-sm text-muted-foreground">{e.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold uppercase tracking-wide text-sm">How it works</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-700">From Idea to Celebration</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl bg-card border border-border p-6">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary"><s.icon className="h-6 w-6" /></div>
                <span className="absolute top-6 right-6 font-display text-4xl font-700 text-border">{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-600">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/enquiry">Start Planning Now <ArrowRight className="h-5 w-5" /></Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
