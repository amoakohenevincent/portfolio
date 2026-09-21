import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Cpu,
  Bot,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { services } from '../data/portfolioData';

const serviceIcons = [
  Globe,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Cpu,
  Bot,
  ShieldCheck,
  Smartphone
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Services"
          title="What I Can Build"
          subtitle="From idea to production — complete web applications built with real architecture behind them."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length] || Globe;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
                className="group rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent-dim hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 block font-mono text-xs text-accent-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 text-base font-semibold text-text-primary transition-colors group-hover:text-accent-light">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
