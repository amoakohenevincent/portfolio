import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, Github, Linkedin, MapPin, Phone, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { profile } from '../data/portfolioData';

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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success flow
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect & Collaborate"
          subtitle="Have an engineering role, technical project, or academic collaboration in mind? Feel free to reach out."
          align="center"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-5">
          {/* Left: Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-6 md:col-span-2"
          >
            <div className="space-y-4">
              {/* Email Card */}
              <div className="rounded-2xl border border-border bg-bg-card p-5">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-secondary text-xs font-mono uppercase tracking-wider">
                    <Mail size={14} className="text-accent-light" />
                    <span>Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-text-secondary transition-colors hover:border-accent hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm md:text-base font-medium text-text-primary hover:text-accent-light transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              {/* WhatsApp & Phone Card */}
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-border bg-bg-card p-5 transition-all hover:border-[#25D366] hover:bg-[#25D366]/5"
              >
                <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#25D366]">
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp & Direct Call</span>
                </div>
                <p className="text-base font-medium text-text-primary group-hover:text-[#25D366] transition-colors">
                  {profile.whatsapp}
                </p>
                <span className="mt-1 block text-xs text-text-secondary">
                  Chat directly on WhatsApp →
                </span>
              </a>

              {/* Location Card */}
              <div className="rounded-2xl border border-border bg-bg-card p-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-secondary">
                  <MapPin size={14} className="text-accent-light" />
                  <span>Location</span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-text-primary">
                  {profile.location}
                </p>
              </div>

              {/* Status / Availability Badge */}
              <div className="rounded-2xl border border-border bg-bg-card p-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#27C93F] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </span>
                  <span className="text-xs font-semibold text-text-primary">
                    Open for Opportunities
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  Available for full-stack engineering roles, database architecture, contracts, and campus initiatives.
                </p>
              </div>

              {/* References Note */}
              <div className="rounded-2xl border border-border/70 bg-bg-secondary/70 p-4">
                <div className="flex items-start gap-2">
                  <Award size={15} className="mt-0.5 shrink-0 text-accent-light" />
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {profile.references}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-secondary transition-all hover:border-accent hover:text-white"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-secondary transition-all hover:border-accent hover:text-white"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 shadow-xl"
            >
              {isSubmitted && (
                <div className="mb-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                  ✓ Thank you! Your message has been sent to Amoakohene Vincent. I will get back to you promptly.
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Kwame Mensah"
                    className={`w-full rounded-xl border bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-red-400">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. kwame@example.com"
                    className={`w-full rounded-xl border bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-red-400">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Enterprise Full-Stack Project / Collaboration"
                    className={`w-full rounded-xl border bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent focus:outline-none ${
                      errors.subject ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.subject && (
                    <span className="mt-1 block text-xs text-red-400">{errors.subject}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role, or proposal..."
                    className={`w-full rounded-xl border bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.message && (
                    <span className="mt-1 block text-xs text-red-400">{errors.message}</span>
                  )}
                </div>

                <Button type="submit" variant="primary" className="w-full gap-2">
                  <Send size={15} />
                  <span>Send Message</span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
