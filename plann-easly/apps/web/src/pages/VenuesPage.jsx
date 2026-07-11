import React, { useMemo, useState } from 'react';
import PageHead from '@/components/PageHead';
import ItemCard, { MapPin, Users } from '@/components/ItemCard';
import Button from '@/components/Button';
import { venues } from '@/data/content';

function VenuesPage() {
  const [loc, setLoc] = useState('all');
  const [cap, setCap] = useState('all');
  const locations = useMemo(() => ['all', ...new Set(venues.map((v) => v.location))], []);

  const filtered = venues.filter((v) => {
    const okLoc = loc === 'all' || v.location === loc;
    const okCap = cap === 'all' || (cap === 'small' ? v.capacity <= 150 : cap === 'medium' ? v.capacity > 150 && v.capacity <= 350 : v.capacity > 350);
    return okLoc && okCap;
  });

  const selCls = 'rounded-full border border-border bg-card px-4 py-2.5 min-h-[44px] text-sm focus:outline-none focus:ring-2 focus:ring-primary';

  return (
    <div className="pb-16">
      <PageHead eyebrow="Venues" title="Find Your Perfect Space" subtitle="Handpicked banquet halls, lawns and rooftops for every guest list and budget." />
      <div className="mx-auto max-w-[90rem] px-6">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <select value={loc} onChange={(e) => setLoc(e.target.value)} className={selCls}>
            {locations.map((l) => <option key={l} value={l}>{l === 'all' ? 'All Locations' : l}</option>)}
          </select>
          <select value={cap} onChange={(e) => setCap(e.target.value)} className={selCls}>
            <option value="all">Any Capacity</option>
            <option value="small">Up to 150 guests</option>
            <option value="medium">150 – 350 guests</option>
            <option value="large">350+ guests</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">No venues match your filters. Try widening your search.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <ItemCard key={v.id} img={v.img} title={v.name} price={v.price}
                badges={<span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{v.location}</span>}
                subtitle={<span className="flex items-center gap-4"><span className="flex items-center gap-1"><Users className="h-4 w-4" /> {v.capacity} guests</span><span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {v.location}</span></span>}
                footer={<Button to="/enquiry" variant="outline" className="mt-5 w-full py-2.5 min-h-0">Enquire</Button>}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VenuesPage;
