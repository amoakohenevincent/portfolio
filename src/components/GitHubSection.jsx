import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projects, profile } from '../data/portfolioData';

export default function GitHubSection() {
  const featuredRepos = projects.slice(0, 4);

  return (
    <section id="github" className="bg-bg-secondary py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Open Source"
          title="Building & Learning"
          subtitle="Selected repositories and projects. Check my GitHub profile for full repositories, commits, and open-source contributions."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featuredRepos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.githubUrl || profile.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-primary">
                  <FolderGit2 size={18} className="text-accent-light" />
                  <span className="font-mono text-sm font-semibold transition-colors group-hover:text-accent-light">
                    {repo.title}
                  </span>
                </div>
                <ExternalLink
                  size={15}
                  className="text-text-secondary transition-colors group-hover:text-text-primary"
                />
              </div>

              <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-2">
                {repo.description}
              </p>

              <div className="mt-auto flex items-center justify-between text-xs text-text-secondary pt-2 border-t border-border/40">
                <span className="font-mono text-accent-light">
                  {repo.category}
                </span>
                <span className="text-text-secondary/70">
                  {repo.technologies[0]} • {repo.technologies[1] || 'Web'}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
