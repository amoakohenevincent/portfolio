import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Terminal, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { campusLeadership, techInitiatives } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg-secondary/50 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Leadership & Impact"
          title="Campus Leadership & Tech Initiatives"
          subtitle="Empowering peer developers through collaborative study collectives and participating in competitive technology initiatives."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Feature: Rhiza Study Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent/40 bg-bg-card p-8 shadow-2xl lg:col-span-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent-light">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {campusLeadership.organization}
                  </h3>
                  <p className="text-xs font-mono text-accent-light">
                    {campusLeadership.role} • {campusLeadership.location}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent-light">
                Founder & Lead
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              {campusLeadership.description}
            </p>

            <div className="mt-6 space-y-3.5">
              {campusLeadership.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent-light" />
                  <span className="text-sm leading-relaxed text-text-secondary">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-border/60">
              <span className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary">
                Peer Code Reviews
              </span>
              <span className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary">
                Structural Database Design (ERDs)
              </span>
              <span className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary">
                Full-Stack JS (React & Node.js)
              </span>
              <span className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary">
                Data Structures & Core IT
              </span>
            </div>
          </motion.div>

          {/* Right Column: Professional Certifications & Tech Initiatives */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent-light">
              <Trophy size={16} />
              <span>Certifications & Initiatives</span>
            </h4>

            {techInitiatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-border bg-bg-card p-5 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-border bg-bg-secondary px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-light">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-text-secondary">
                    {item.role}
                  </span>
                </div>
                <h5 className="mt-3 text-base font-bold text-text-primary transition-colors group-hover:text-accent-light">
                  {item.title}
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
