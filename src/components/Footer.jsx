import React from 'react';

export const Footer = ({ t }) => {
    return (
        <footer className="p-16 text-center border-t border-white/5 mt-16">
            <p className="pixel-text text-[0.7rem] opacity-30">{t.footer}</p>
        </footer>
    );
};
