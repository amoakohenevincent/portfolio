import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, ArrowRight, Server, Layout } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { projects, projectFilterCategories } from '../data/portfolioData';

export function ProjectCard({ project, index = 0 }) {
  const isFullStack = project.category === 'Full Stack';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-bg-card p-7 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-2xl"
    >
      <div>
        {/* Card Header: Icon & Category/Role */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-light transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
            {isFullStack ? <Server size={22} /> : <Layout size={22} />}
          </div>
          <div className="flex items-center gap-2">
            {project.role && (
              <span className="font-mono text-xs text-text-secondary">
                {project.role}
              </span>
            )}
            <span className="rounded-full border border-border/80 bg-bg-secondary px-3 py-1 font-mono text-[11px] font-semibold text-accent-light">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-accent-light">
            {project.title}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-3.5 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/60 bg-bg-secondary px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors group-hover:border-accent/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-5">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light transition-colors hover:text-white"
            >
              <span>Live Demo</span>
              <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary transition-colors hover:text-white"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-text-secondary/60">
              <Lock size={12} />
              <span>Private</span>
            </span>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light transition-colors group-hover:text-white"
        >
          <span>Case Study</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category === activeCategory || p.tags?.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Software Engineering Projects"
          subtitle="Comprehensive enterprise systems and open-source platforms engineered from architecture to deployment."
        />

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'border-accent bg-accent text-white shadow-lg shadow-accent/20'
                  : 'border-border bg-bg-card text-text-secondary hover:border-accent hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-14 text-center">
          <Link to="/projects">
            <Button variant="secondary" icon={true}>
              View All Projects &amp; Filters
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
