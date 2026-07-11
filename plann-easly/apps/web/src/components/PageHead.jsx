import React from 'react';

function PageHead({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-[72rem] px-6 pt-14 pb-8 text-center">
      {eyebrow && <p className="text-primary font-semibold uppercase tracking-wide text-sm">{eyebrow}</p>}
      <h1 className="mt-2 font-display text-4xl md:text-5xl font-700">{title}</h1>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default PageHead;
