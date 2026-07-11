import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const styles = {
  primary: 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25',
  gold: 'bg-[hsl(var(--gold))] text-[hsl(var(--deepred))] hover:brightness-105 shadow-lg shadow-[hsl(var(--gold))]/30',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  ghost: 'bg-white text-foreground border border-border hover:bg-secondary',
};

function Button({ as = 'button', to, href, variant = 'primary', className, children, ...props }) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 min-h-[48px] font-semibold text-base transition-all duration-200 active:scale-[0.97]',
    styles[variant],
    className
  );
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  const Tag = as;
  return <Tag className={cls} {...props}>{children}</Tag>;
}

export default Button;
