import React from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ t }) => {
    return (
        <section id="about" className="text-center mb-32">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pixel-text text-4xl md:text-6xl mb-6 leading-[1.1]"
            >
                {t.hero.title} <span className="text-brand-accent">{t.hero.accent}</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-brand-text-secondary max-w-[600px] mx-auto font-light"
            >
                {t.hero.bio}
            </motion.p>
        </section>
    );
};
