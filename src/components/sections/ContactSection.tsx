'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
    {
        name: 'GitHub',
        icon: FiGithub,
        url: 'https://github.com/merthot',
        color: 'from-gray-600 to-gray-400',
        description: 'Projelerimi ve kaynak kodlarımı inceleyebilirsiniz.'
    },
    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: 'https://linkedin.com/in/metin-mert-hot',
        color: 'from-blue-600 to-blue-400',
        description: 'LinkedIn profilimi ziyaret edebilirsiniz.'
    },
    {
        name: 'Email',
        icon: FiMail,
        url: 'mailto:metin.mert.hot@gmail.com',
        color: 'from-red-600 to-red-400',
        description: 'metin.mert.hot@gmail.com adresinden bana ulaşabilirsiniz.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative min-h-screen py-20 bg-[#0a0a0a] overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    {/* Başlık */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-block"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                    İletişim
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Benimle iletişime geçmek veya iş birliği yapmak için
                            aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsiniz.
                        </motion.p>
                    </motion.div>

                    {/* Sosyal Medya Kartları */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="group relative transform-gpu"
                            >
                                {/* Arkaplan Efekti */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-10 rounded-2xl blur-lg transition-all duration-300 group-hover:opacity-20`} />

                                <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className={`p-4 rounded-xl bg-gradient-to-r ${social.color} bg-opacity-20 shrink-0`}
                                        >
                                            <social.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-medium text-white mb-2">{social.name}</h3>
                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                {social.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 