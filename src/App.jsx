import React from 'react';
import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import { translations } from './translations';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import './index.css';

function PortfolioContent() {
  const { lang } = useParams();
  const navigate = useNavigate();

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

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

      <Navbar t={t} currentLang={currentLang} toggleLang={toggleLang} />

      <main className="max-w-[1000px] mx-auto px-8 pt-32 pb-16">
        <Hero t={t} />
        <Work t={t} />
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
