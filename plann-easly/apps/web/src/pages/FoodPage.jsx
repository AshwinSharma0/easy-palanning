import React, { useState } from 'react';
import PageHead from '@/components/PageHead';
import { foodMenu } from '@/data/content';

function FoodPage() {
  const cats = Object.keys(foodMenu);
  const [active, setActive] = useState(cats[0]);

  return (
    <div className="pb-16">
      <PageHead eyebrow="Food & Catering" title="A Feast to Remember" subtitle="Priced per plate. Mix and match across categories to build your menu." />
      <div className="mx-auto max-w-[72rem] px-6">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 min-h-[44px] text-sm font-semibold transition-colors ${active === c ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground/70 hover:text-primary'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {foodMenu[active].map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="flex items-center gap-3">
                <span className={`grid place-items-center h-5 w-5 rounded-sm border-2 ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
                </span>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.veg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                </div>
              </div>
              <p className="font-bold text-primary whitespace-nowrap">₹{item.price}<span className="text-xs text-muted-foreground font-normal"> /plate</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodPage;
