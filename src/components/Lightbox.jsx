import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close Preview"
        className="absolute top-6 right-6 rounded-full border border-border bg-bg-card p-2 text-text-secondary transition-colors hover:border-accent hover:text-white"
      >
        <X size={20} />
      </button>

      <div
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-border bg-bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt || 'Screenshot preview'}
          className="max-h-[85vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}
