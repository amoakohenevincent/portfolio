import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Services', id: 'services' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-1 text-lg font-bold tracking-tight text-text-primary transition-colors"
        >
          <span>Vince</span>
          <span className="text-blue-500 transition-transform duration-200 group-hover:scale-110">.dev</span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-4 py-2 text-xs font-semibold text-text-primary transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent-light"
          >
            <FileText size={13} />
            <span>CV</span>
            <ArrowUpRight size={13} className="text-text-secondary" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs font-semibold text-text-primary"
          >
            <span>CV</span>
            <ArrowUpRight size={12} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="rounded-lg border border-border bg-bg-card p-2 text-text-secondary transition-colors hover:text-text-primary"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col space-y-3 py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-text-secondary/50"># {link.id}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
