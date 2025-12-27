import React from 'react';
import { Languages } from 'lucide-react';

export const Navbar = ({ t, currentLang, toggleLang }) => {
    return (
        <>
            <div className="progressive-blur" />
            <nav className="fixed top-0 left-0 right-0 z-[101]">
                <div className="max-w-[1200px] mx-auto px-8 h-20 flex justify-between items-center">
                    <div className="pixel-text text-2xl font-bold">Vkylar</div>
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex gap-8">
                            <a href="#about" className="pixel-text text-[0.8rem] opacity-60 hover:opacity-100 hover:text-brand-accent transition-all">
                                {t.nav.about}
                            </a>
                            <a href="#work" className="pixel-text text-[0.8rem] opacity-60 hover:opacity-100 hover:text-brand-accent transition-all">
                                {t.nav.work}
                            </a>
                            <a href="#connect" className="pixel-text text-[0.8rem] opacity-60 hover:opacity-100 hover:text-brand-accent transition-all">
                                {t.nav.connect}
                            </a>
                        </div>
                        <button
                            onClick={toggleLang}
                            className="pixel-border bg-brand-card text-white flex items-center gap-2 px-3 py-2 cursor-none outline-none hover:border-brand-accent hover:text-brand-accent transition-all"
                        >
                            <Languages size={18} />
                            <span className="pixel-text text-[0.7rem] font-bold">{currentLang.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
