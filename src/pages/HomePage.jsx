import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Leadership from '../components/Leadership';
import Services from '../components/Services';
import Journey from '../components/Journey';
import GitHubSection from '../components/GitHubSection';
import Contact from '../components/Contact';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Amoakohene Vincent | Full-Stack Developer & IT Education Scholar';
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Services />
      <Journey />
      <GitHubSection />
      <Contact />
    </main>
  );
}
