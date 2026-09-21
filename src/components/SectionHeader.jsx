import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="mb-2 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
          // {eyebrow}
        </span>
      )}
      <h2 className="text-section font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
