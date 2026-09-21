import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData';

// Custom WhatsApp SVG Icon
function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.79 14.1c-.24.68-1.39 1.3-1.92 1.36-.5.06-1.12.08-3.62-.95-3.19-1.32-5.24-4.57-5.4-4.78-.16-.21-1.29-1.72-1.29-3.28s.82-2.33 1.11-2.65c.29-.32.64-.4.86-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.27.64.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.15.35-.3.53-.15.18-.32.4-.46.54-.15.15-.3.32-.13.62.17.29.77 1.27 1.65 2.05 1.14 1.01 2.09 1.33 2.39 1.48.29.15.46.13.64-.07.17-.21.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.74.82 2.04.97.3.15.5.23.57.35.07.13.07.74-.17 1.42z" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              onClick={() => scrollTo('home')}
              className="group inline-flex items-center gap-1 text-lg font-bold tracking-tight text-text-primary"
            >
              <span>Vince</span>
              <span className="text-accent">.dev</span>
            </Link>
            <p className="mt-2 text-xs text-text-secondary">
              © {new Date().getFullYear()} {profile.name}. All rights reserved. Full-Stack Developer & IT Education Scholar (Kumasi, Ghana).
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-text-secondary">
            <button onClick={() => scrollTo('home')} className="hover:text-text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('about')} className="hover:text-text-primary transition-colors">About</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-text-primary transition-colors">Skills</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-text-primary transition-colors">Projects</button>
            <button onClick={() => scrollTo('leadership')} className="hover:text-text-primary transition-colors">Leadership</button>
            <button onClick={() => scrollTo('services')} className="hover:text-text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('journey')} className="hover:text-text-primary transition-colors">Journey</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-text-primary transition-colors">Contact</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-text-secondary transition-colors hover:text-[#25D366]"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
