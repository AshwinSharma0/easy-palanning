import React, { useMemo, useState } from 'react';
import PageHead from '@/components/PageHead';
import Button from '@/components/Button';

const tiers = {
  Basic: { venue: 120, food: 350, decor: 60, extras: 40 },
  Standard: { venue: 220, food: 550, decor: 120, extras: 90 },
  Premium: { venue: 380, food: 850, decor: 220, extras: 180 },
};

function EstimatePage() {
  const [guests, setGuests] = useState(100);
  const [tier, setTier] = useState('Standard');

  const b = useMemo(() => {
    const g = Math.max(0, Number(guests) || 0);
    const r = tiers[tier];
    const venue = r.venue * g;
    const food = r.food * g;
    const decor = r.decor * g;
    const extras = r.extras * g;
    return { venue, food, decor, extras, total: venue + food + decor + extras };
  }, [guests, tier]);

  const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;
  const rows = [['Venue', b.venue], ['Food', b.food], ['Decoration', b.decor], ['Extras', b.extras]];

  return (
    <div className="pb-16">
      <PageHead eyebrow="Budget Estimator" title="Plan Your Spend" subtitle="Get an instant ballpark for your celebration. Adjust and see the total update live." />
      <div className="mx-auto max-w-[64rem] px-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-card border border-border p-6 space-y-6">
          <div>
            <label className="block font-semibold mb-2">Number of Guests</label>
            <input type="number" min="0" value={guests} onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Package Tier</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(tiers).map((t) => (
                <button key={t} onClick={() => setTier(t)}
                  className={`rounded-xl px-3 py-3 min-h-[48px] text-sm font-semibold transition-colors ${tier === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground/70'}`}>{t}</button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Estimates are per-guest and approximate. Submit an enquiry for an exact quote.</p>
        </div>

        <div className="rounded-2xl bg-[hsl(var(--deepred))] text-white p-6 flex flex-col">
          <h3 className="font-display text-2xl font-600">Estimated Breakdown</h3>
          <div className="mt-5 space-y-3 flex-1">
            {rows.map(([label, val]) => (
              <div key={label} className="flex justify-between text-white/85 border-b border-white/10 pb-3">
                <span>{label}</span><span className="font-semibold">{fmt(val)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between items-end">
            <span className="text-lg">Total Estimate</span>
            <span className="font-display text-4xl font-700 text-[hsl(var(--gold))]">{fmt(b.total)}</span>
          </div>
          <Button to="/enquiry" variant="gold" className="mt-6 w-full">Request Exact Quote</Button>
        </div>
      </div>
    </div>
  );
}

export default EstimatePage;
