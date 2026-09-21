import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Button from './Button';
import { profile, codeSnippet } from '../data/portfolioData';

// Custom WhatsApp SVG Icon
function WhatsAppIcon({ size = 18 }) {
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

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container-x grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* Left Column: Bio & Action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Avatar, Greeting Badge, and Location */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {profile.photo && (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-16 w-16 rounded-full border-2 border-accent/40 object-cover shadow-xl shadow-accent/10"
                style={{ objectPosition: 'center 20%' }}
              />
            )}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-sm font-semibold text-accent-light">
                Hi, I'm {profile.name}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                <MapPin size={12} className="text-accent-light" />
                <span>Kumasi, Ghana</span>
                <span className="text-[11px] font-mono text-accent-light/80">• USTED Scholar</span>
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-hero font-extrabold text-text-primary">
            Architecting Robust Backends{' '}
            <span className="text-gradient">& Scalable Full-Stack Systems.</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            {profile.heroSupporting}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              icon={true}
              onClick={() => scrollTo('projects')}
            >
              View Engineering Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollTo('contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="rounded-xl border border-border bg-bg-card p-3 text-text-secondary transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-text-primary hover:shadow-lg hover:shadow-accent/10"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-xl border border-border bg-bg-card p-3 text-text-secondary transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-text-primary hover:shadow-lg hover:shadow-accent/10"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="rounded-xl border border-border bg-bg-card p-3 text-text-secondary transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-text-primary hover:shadow-lg hover:shadow-accent/10"
            >
              <Mail size={19} />
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="rounded-xl border border-border bg-bg-card p-3 text-[#25D366] transition-all duration-200 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <WhatsAppIcon size={19} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-card shadow-2xl">
            {/* Window header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-[#111111]">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-text-secondary">
                developer.js
              </span>
            </div>

            {/* Code lines */}
            <div className="p-6 font-mono text-sm leading-8 md:text-base">
              {codeSnippet.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  className="font-mono"
                >
                  {line.text.includes(':') && line.indent > 0 ? (
                    <span>
                      <span className="text-accent-light">
                        {line.text.split(':')[0]}
                      </span>
                      <span className="text-text-primary">
                        :{line.text.split(':').slice(1).join(':')}
                      </span>
                    </span>
                  ) : (
                    <span className="text-text-primary">
                      {line.text}
                    </span>
                  )}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <div className="mt-2 flex items-center gap-1 text-xs text-accent-light">
                <span className="inline-block h-4 w-2 bg-accent animate-pulse" />
                <span className="text-[11px] text-text-secondary">Ready to build scalable software</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
