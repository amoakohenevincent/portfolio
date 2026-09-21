import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  Server,
  Layers,
  CheckCircle2,
  Workflow,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import Button from '../components/Button';
import { projects } from '../data/portfolioData';

function DetailSection({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent-light">
        // {title}
      </h3>
      <div className="text-base leading-relaxed text-text-secondary md:text-lg">
        {children}
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Amoakohene Vincent`;
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="pb-24 pt-28 md:pt-36">
      <div className="container-x">
        {/* Back Link */}
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={16} />
          <span>Back to projects</span>
        </Link>

        {/* Project Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            {project.role && (
              <span className="font-mono text-xs text-text-secondary">
                {project.role} •
              </span>
            )}
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
              {project.category}
            </span>
          </div>

          <h1 className="text-section font-extrabold text-text-primary">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                icon={true}
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl ? (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </Button>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-6 py-3 text-sm text-text-secondary">
                <Lock size={15} />
                <span>Repository private</span>
              </div>
            )}

            {project.backendUrl && (
              <Button
                as="a"
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <Server size={15} />
                <span>View API</span>
              </Button>
            )}
          </div>
        </div>

        {/* Case Study Details & Breakdown */}
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Left: Narrative & Architecture */}
          <div className="md:col-span-2">
            {/* Overview */}
            <DetailSection title="Overview">
              <p>{project.longIntro || project.description}</p>
            </DetailSection>

            {/* Problem & Solution */}
            {project.problem && (
              <DetailSection title="The Problem">
                <div className="flex gap-4 rounded-xl border border-border bg-bg-card p-6">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <AlertTriangle size={18} />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                    {project.problem}
                  </p>
                </div>
              </DetailSection>
            )}

            {project.solution && (
              <DetailSection title="The Solution">
                <div className="flex gap-4 rounded-xl border border-border bg-bg-card p-6">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                    <Lightbulb size={18} />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                    {project.solution}
                  </p>
                </div>
              </DetailSection>
            )}

            {/* Key Features Breakdown */}
            {project.keyFeatures && (
              <DetailSection title="Key Architecture & Features">
                <div className="space-y-6">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-bg-card p-6"
                    >
                      <h4 className="text-base font-semibold text-text-primary">
                        {feature.title}
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {feature.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-accent-light"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {/* Workflow Diagram */}
            {project.workflow && (
              <DetailSection title="System Workflow">
                <div className="rounded-xl border border-border bg-bg-card p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.workflow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-primary">
                          {step}
                        </span>
                        {idx < project.workflow.length - 1 && (
                          <span className="text-xs text-accent-light">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </DetailSection>
            )}

            {/* Challenges & What I Learned */}
            {project.challenges && (
              <DetailSection title="Engineering Challenges">
                <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                  {project.challenges}
                </p>
              </DetailSection>
            )}

            {project.learned && (
              <DetailSection title="Key Takeaways & Lessons">
                <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                  {project.learned}
                </p>
              </DetailSection>
            )}
          </div>

          {/* Right: Technical Specs Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-28 rounded-2xl border border-border bg-bg-card p-6 shadow-xl">
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent-light">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Architecture Layer */}
              {project.architecture && (
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent-light">
                    Architecture Stack
                  </h4>
                  <div className="space-y-2">
                    {project.architecture.map((layer, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-lg border border-border/50 bg-bg-secondary/50 px-3 py-2 text-xs text-text-secondary"
                      >
                        <Layers size={13} className="shrink-0 text-accent-light" />
                        <span>{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="mt-8 space-y-2 border-t border-border pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border bg-bg-secondary p-3 text-xs text-text-primary transition-colors hover:border-accent hover:text-accent-light"
                  >
                    <span>Live Application</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border bg-bg-secondary p-3 text-xs text-text-primary transition-colors hover:border-accent hover:text-accent-light"
                  >
                    <span>Backend Server / API</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border bg-bg-secondary p-3 text-xs text-text-primary transition-colors hover:border-accent hover:text-accent-light"
                  >
                    <span>GitHub Repository</span>
                    <Github size={14} />
                  </a>
                ) : (
                  <div className="flex items-center justify-between rounded-xl border border-border bg-bg-secondary p-3 text-xs text-text-secondary/60">
                    <span>Source Code (Private)</span>
                    <Lock size={13} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
