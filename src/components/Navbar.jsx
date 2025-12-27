import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export const Navbar = ({ t, currentLang, toggleLang, activeSection }) => {
    const navItems = [
        { id: 'about', label: t.nav.about },
        { id: 'work', label: t.nav.work },
        { id: 'education', label: t.nav.education },
        { id: 'connect', label: t.nav.connect },
    ];

    const handleClick = (e, id) => {
        if (id === 'about') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '#about');
        }
    };

    return (
        <>
            <div className="progressive-blur" />
            <nav className="fixed top-0 left-0 right-0 z-[101]">
                <div className="max-w-[1200px] mx-auto px-8 h-20 flex justify-between items-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="pixel-text text-2xl font-bold cursor-none"
                    >
                        Vkylar
                    </button>
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => handleClick(e, item.id)}
                                    className={`pixel-text text-[0.8rem] transition-all relative group py-1 ${activeSection === item.id
                                        ? 'opacity-100 text-brand-accent'
                                        : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleLang}
                            className="pixel-border bg-brand-card text-white flex items-center gap-2 px-3 py-2 cursor-none outline-none hover:border-brand-accent hover:text-brand-accent transition-all"
                        >
                            <Languages size={18} />
                            <span className="text-[0.7rem] font-bold tracking-wider">{currentLang === 'cs' ? 'CZ' : 'EN'}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
