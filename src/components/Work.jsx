import React from 'react';
import { motion } from 'framer-motion';

export const Work = ({ t }) => {
    return (
        <section id="work" className="mb-40">
            <h2 className="pixel-text text-2xl mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-white after:opacity-10">
                {t.experience.title}
            </h2>
            <div className="flex flex-col gap-12 mb-8">
                {t.experience.items.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        className="exp-card pixel-border p-8 bg-brand-card transition-transform hover:translate-x-[10px]"
                    >
                        <div className="mb-6">
                            <span className="pixel-text text-[0.7rem] text-brand-accent mb-2 block">{exp.period}</span>
                            <h3 className="text-2xl mb-1">{exp.role}</h3>
                            <div className="pixel-text text-[0.9rem] font-bold text-brand-accent">{exp.company}</div>
                        </div>
                        <p className="text-brand-text-secondary">{exp.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
