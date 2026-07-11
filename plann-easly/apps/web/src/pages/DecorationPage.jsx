import React from 'react';
import PageHead from '@/components/PageHead';
import ItemCard from '@/components/ItemCard';
import Button from '@/components/Button';
import { themes } from '@/data/content';

function DecorationPage() {
  return (
    <div className="pb-16">
      <PageHead eyebrow="Decoration" title="Set the Perfect Mood" subtitle="Pick a theme and we'll bring it to life with flowers, drapes and lighting." />
      <div className="mx-auto max-w-[90rem] px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => (
          <ItemCard key={t.name} img={t.img} title={t.name} subtitle={t.desc} price={t.price}
            footer={<Button to="/enquiry" variant="outline" className="mt-5 w-full py-2.5 min-h-0">Enquire</Button>} />
        ))}
      </div>
    </div>
  );
}

export default DecorationPage;
