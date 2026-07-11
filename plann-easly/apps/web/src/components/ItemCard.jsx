import React from 'react';
import { MapPin, Users } from 'lucide-react';

function ItemCard({ img, title, subtitle, price, priceLabel = 'Starting', badges, footer }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {img && (
        <div className="aspect-[3/2] overflow-hidden">
          <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-600 text-foreground">{title}</h3>
          {badges}
        </div>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>}
        {price != null && (
          <p className="mt-4 text-sm text-muted-foreground">
            {priceLabel} <span className="text-lg font-bold text-primary">₹{price.toLocaleString('en-IN')}</span>
          </p>
        )}
        {footer}
      </div>
    </div>
  );
}

export { MapPin, Users };
export default ItemCard;
