import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { ProjectCard } from '../components/Projects';
import { projects, projectFilterCategories } from '../data/portfolioData';

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects | Amoakohene Vincent';
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category === activeCategory || p.tags?.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <main className="pt-28 pb-24 md:pt-36">
      <div className="container-x">
        {/* Back Link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={16} />
          <span>Back home</span>
        </Link>

        {/* Section Header */}
        <SectionHeader
          eyebrow="Portfolio"
          title="All Projects"
          subtitle="Enterprise systems, relational database architecture & ERDs, open-source ecosystems, and collaborative learning platforms."
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
      </div>
    </main>
  );
}
