import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal, GitBranch, Palette, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  'Backend Frameworks & Logic': Server,
  'Database Design & Management': Database,
  'Frontend Web Technologies': Layout,
  'Programming & Electives': Terminal,
  'Workflows & Methodologies': GitBranch,
  'Graphic Design & Media': Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-secondary/40 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Skills & Competencies"
          title="Technical Expertise"
          subtitle="Engineering robust backends, relational database schemas with ERDs, and intuitive responsive frontend systems."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.category] || Wrench;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="group flex flex-col rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1"
              >
                {/* Header with icon & category title */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-light transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-accent-light">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
