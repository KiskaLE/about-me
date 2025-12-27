import React from 'react';
import { motion } from 'framer-motion';

export const Education = ({ t }) => {
    return (
        <section id="education" className="mb-40">
            <h2 className="pixel-text text-2xl mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-white after:opacity-10">
                {t.education.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.education.items.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        className="edu-card pixel-border p-8 bg-brand-card hover:border-brand-accent transition-all group"
                    >
                        <div className="mb-4">
                            <span className="pixel-text text-[0.7rem] text-brand-accent mb-2 block">{edu.period}</span>
                            <h3 className="text-xl mb-1 group-hover:text-brand-accent transition-colors">{edu.degree}</h3>
                            <div className="pixel-text text-[0.8rem] font-bold opacity-60">{edu.school}</div>
                        </div>
                        <p className="text-brand-text-secondary text-sm">{edu.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
