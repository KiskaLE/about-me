import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import { translations } from './translations';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Education } from './components/Education';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import './index.css';

function PortfolioContent() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about');

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  useEffect(() => {
    const sections = ['about', 'work', 'education', 'connect'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we are at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('connect');
        return;
      }

      // Otherwise, find the section that occupies the top part of the viewport
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleLang = () => {
    const nextLang = currentLang === 'en' ? 'cs' : 'en';
    navigate(`/${nextLang}${window.location.hash}`);
  };

  if (!translations[lang]) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#111111_0%,#080808_100%)]">
      <CustomCursor />

      <Navbar t={t} currentLang={currentLang} toggleLang={toggleLang} activeSection={activeSection} />

      <main className="max-w-[1000px] mx-auto px-8 pt-32 pb-16">
        <Hero t={t} />
        <Work t={t} />
        <Education t={t} />
        <Connect t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<PortfolioContent />} />
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}

export default App;
