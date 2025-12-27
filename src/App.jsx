import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Languages } from 'lucide-react';
import { translations } from './translations';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
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

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'cs' : 'en');
  };

  const getIcon = (name) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Email': return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <div className="portfolio">
      <div
        ref={cursorRef}
        className="cursor-pixel"
      />

      <nav className="navbar">
        <div className="pixel-text logo">Vkylar</div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about" className="pixel-text">{t.nav.about}</a>
            <a href="#work" className="pixel-text">{t.nav.work}</a>
            <a href="#connect" className="pixel-text">{t.nav.connect}</a>
          </div>
          <button onClick={toggleLang} className="lang-toggle pixel-border">
            <Languages size={18} />
            <span className="pixel-text">{lang.toUpperCase()}</span>
          </button>
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
            {t.hero.title} <span className="accent">{t.hero.accent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bio"
          >
            {t.hero.bio}
          </motion.p>
        </section>

        <section id="work" className="experience-section">
          <h2 className="pixel-text section-title">{t.experience.title}</h2>
          <div className="experience-list">
            {t.experience.items.map((exp, i) => (
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
          <h2 className="pixel-text section-title">{t.connect.title}</h2>
          <div className="links-grid">
            {t.connect.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                whileHover={{ scale: 1.05 }}
                className="link-item pixel-border"
              >
                {getIcon(link.name)}
                <span className="pixel-text">{link.name}</span>
                <ArrowRight size={16} />
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="pixel-text">{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
