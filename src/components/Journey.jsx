import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { journeyMilestones, profile } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Academic & Technical Progression"
          title="Education & Engineering Journey"
          subtitle="From foundational computer science theory and programming principles to advanced relational database engineering and campus leadership."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Left: Milestones Timeline */}
          <div className="lg:col-span-6">
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-accent-light">
              // Timeline Milestones
            </h3>
            <ol className="relative border-l border-border pl-8">
              {journeyMilestones.map((milestone, index) => (
                <motion.li
                  key={milestone}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="mb-8 last:mb-0 relative"
                >
                  {/* Glowing timeline node */}
                  <span className="absolute -left-[39px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent shadow-[0_0_10px_rgba(109,106,255,0.8)]" />

                  <span className="font-mono text-xs text-accent-light">
                    Phase {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-1 text-base font-semibold text-text-primary">
                    {milestone}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Right: Academic Education Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-6"
          >
            {/* University Degree Card */}
            <div className="rounded-2xl border border-accent/40 bg-bg-card p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-accent-light">
                  <GraduationCap size={20} />
                  <h4 className="font-mono text-xs uppercase tracking-[0.15em]">
                    Higher Education
                  </h4>
                </div>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent-light">
                  {profile.education.year}
                </span>
              </div>

              <h5 className="text-lg font-bold text-text-primary">
                {profile.education.degree}
              </h5>
              <p className="mt-1 text-sm text-accent-light font-medium">
                {profile.education.institute}
              </p>
              <p className="text-xs text-text-secondary">
                {profile.education.location}
              </p>

              <div className="mt-5 rounded-xl border border-border/80 bg-bg-secondary/70 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Core Technical Electives:
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {profile.education.electives.map((el) => (
                    <span
                      key={el}
                      className="rounded-md border border-border/60 bg-bg-card px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-text-secondary">
                <Award size={14} className="mt-0.5 shrink-0 text-accent-light" />
                <span>
                  <strong>Academic Standing:</strong> Demonstrating consistent high performance in software practicals, technical presentations, and hands-on laboratory implementations.
                </span>
              </div>
            </div>

            {/* Secondary Education Card */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-secondary">
                  <School size={18} className="text-accent-light" />
                  <h4 className="font-mono text-xs uppercase tracking-[0.15em]">
                    Secondary Education
                  </h4>
                </div>
                <span className="rounded-full border border-border bg-bg-secondary px-3 py-0.5 font-mono text-xs text-text-secondary">
                  Graduated {profile.education.secondary.year}
                </span>
              </div>

              <h5 className="text-base font-bold text-text-primary">
                {profile.education.secondary.qualification}
              </h5>
              <p className="mt-1 text-sm text-text-secondary">
                {profile.education.secondary.school} — {profile.education.secondary.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
