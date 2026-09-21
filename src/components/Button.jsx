import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  icon = false,
  children,
  className = '',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5 shadow-lg hover:shadow-[0_0_24px_rgba(109,106,255,0.35)]",
    secondary: "border border-border bg-bg-card text-text-primary hover:border-accent hover:bg-accent/10 hover:text-accent-light hover:-translate-y-0.5",
    outline: "border border-border bg-transparent text-text-secondary hover:border-accent hover:text-text-primary hover:-translate-y-0.5"
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Component>
  );
}
