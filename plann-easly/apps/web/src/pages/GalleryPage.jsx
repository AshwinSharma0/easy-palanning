import React from 'react';
import PageHead from '@/components/PageHead';
import { gallery } from '@/data/content';

function GalleryPage() {
  return (
    <div className="pb-16">
      <PageHead eyebrow="Gallery" title="Moments We've Created" subtitle="A glimpse into some of the celebrations we've had the joy of planning." />
      <div className="mx-auto max-w-[90rem] px-6 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {gallery.map((src, i) => (
          <img key={i} src={src} alt={`Past event ${i + 1}`} loading="lazy"
            className="w-full rounded-2xl break-inside-avoid hover:opacity-90 transition" />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
