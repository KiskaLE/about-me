import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export const Connect = ({ t }) => {
    const getIcon = (name) => {
        switch (name) {
            case 'GitHub': return <Github size={20} />;
            case 'LinkedIn': return <Linkedin size={20} />;
            case 'Email': return <Mail size={20} />;
            default: return null;
        }
    };

    return (
        <section id="connect">
            <h2 className="pixel-text text-2xl mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-white after:opacity-10">
                {t.connect.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.connect.links.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.url}
                        target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="link-item pixel-border flex items-center justify-between p-6 bg-brand-card peer cursor-none"
                    >
                        {getIcon(link.name)}
                        <span className="pixel-text text-[0.9rem]">{link.name}</span>
                        <ArrowRight size={16} />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
