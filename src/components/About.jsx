import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { profile } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="About" title="About Me" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Left: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {profile.about.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-base leading-relaxed text-text-secondary md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                as="a"
                href={profile.resumeUrl}
                download="Amoakohene_Vincent_CV.pdf"
                variant="primary"
                className="gap-2"
              >
                <FileDown size={17} />
                <span>Download CV</span>
              </Button>
            </div>
          </motion.div>

          {/* Right: Portrait & Key Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Portrait Card */}
            {profile.photo && (
              <div className="overflow-hidden rounded-2xl border border-border bg-bg-card shadow-xl group">
                <div className="relative aspect-[4/5] max-h-72 w-full overflow-hidden bg-bg-secondary">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="font-bold text-text-primary text-base">{profile.name}</p>
                    <p className="text-xs font-mono text-accent-light">USTED Scholar • Kumasi, Ghana</p>
                  </div>
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-xl">
              <div className="mb-5 flex items-center gap-2 text-accent-light">
                <Sparkles size={20} />
                <h3 className="font-mono text-xs uppercase tracking-[0.15em]">
                  Key Strengths & Competencies
                </h3>
              </div>

              <div className="space-y-3">
                {profile.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-bg-secondary/60 p-3 transition-colors hover:border-accent/50"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-accent-light" />
                    <span className="text-sm font-medium text-text-primary">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
