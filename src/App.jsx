import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import './App.css';

const experiences = [
  {
    role: "Senior Pixel Architect",
    company: "Future Systems",
    period: "2023 - Present",
    desc: "Designing high-fidelity digital experiences with minimalist precision."
  },
  {
    role: "Fullstack Developer",
    company: "Digital Horizons",
    period: "2020 - 2023",
    desc: "Crafting scalable web applications with a focus on luxury performance."
  },
  {
    role: "UI Engineer",
    company: "Creative Labs",
    period: "2018 - 2020",
    desc: "Specialized in micro-interactions and pixel-perfect interfaces."
  }
];

const links = [
  { name: "GitHub", icon: <Github size={20} />, url: "https://github.com" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com" },
  { name: "Email", icon: <Mail size={20} />, url: "mailto:hello@example.com" }
];

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio">
      <div
        ref={cursorRef}
        className="cursor-pixel"
      />

      <nav className="navbar">
        <div className="pixel-text logo">Vkylar</div>
        <div className="nav-links">
          <a href="#about" className="pixel-text">About</a>
          <a href="#work" className="pixel-text">Work</a>
          <a href="#connect" className="pixel-text">Connect</a>
        </div>
      </nav>

      <main className="container">
        <section id="about" className="hero">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pixel-text main-title"
          >
            Digital <span className="accent">Artisan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bio"
          >
            Building high-end digital experiences where minimalism meets pixel perfection. Based in the heart of Europe, crafting code that feels like art.
          </motion.p>
        </section>

        <section id="work" className="experience-section">
          <h2 className="pixel-text section-title">History</h2>
          <div className="experience-list">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="exp-card pixel-border"
              >
                <div className="exp-header">
                  <span className="period pixel-text">{exp.period}</span>
                  <h3 className="role">{exp.role}</h3>
                  <div className="company accent">{exp.company}</div>
                </div>
                <p className="desc">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="connect" className="links-section">
          <h2 className="pixel-text section-title">Connect</h2>
          <div className="links-grid">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                whileHover={{ scale: 1.05 }}
                className="link-item pixel-border"
              >
                {link.icon}
                <span className="pixel-text">{link.name}</span>
                <ArrowRight size={16} />
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="pixel-text">© 2025 VKYLAR.COM / ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default App;
