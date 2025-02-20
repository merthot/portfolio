'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiNodedotjs, SiNextdotjs } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';

interface Certificate {
    title: string;
    icon: React.ElementType;
    issuer: string;
    date: string;
    skills: string[];
    color: string;
}

const certificates: Certificate[] = [
    {
        title: "Node.js ile Sıfırdan İleri Düzey Web Geliştirme",
        icon: SiNodedotjs,
        issuer: "Udemy",
        date: "2024",
        skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
        color: "from-emerald-500 to-green-600"
    },
    {
        title: "Yapay Zeka Uzmanlığı Bootcamp",
        icon: FaGraduationCap,
        issuer: "Tech İstanbul",
        date: "2024",
        skills: ["Python", "Machine Learning", "Deep Learning", "AI"],
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "ASP.NET Core MVC",
        icon: SiNextdotjs,
        issuer: "BTK Akademi",
        date: "2024",
        skills: ["C#", ".NET Core", "MVC", "Entity Framework"],
        color: "from-purple-500 to-pink-600"
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

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        y: -5,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            className="group relative transform-gpu perspective"
            style={{ transformStyle: "preserve-3d" }}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-10 rounded-2xl transition-all duration-300 group-hover:opacity-20`} />
            <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 min-h-[250px] flex flex-col justify-between">
                {/* Başlık ve İkon */}
                <div className="flex items-start gap-4 mb-6">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${certificate.color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shrink-0`}
                    >
                        <certificate.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300 mb-2 line-clamp-2"
                        >
                            {certificate.title}
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 flex-wrap"
                        >
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {certificate.issuer}
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${certificate.color}`}>
                                {certificate.date}
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Yetenekler */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {certificate.skills.map((skill, skillIndex) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.8,
                                y: isInView ? 0 : 20
                            }}
                            transition={{
                                delay: 0.4 + (skillIndex * 0.1),
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${certificate.color} bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300`}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            id="certificates"
            className="relative min-h-screen py-32 bg-[#0a0a0a] overflow-hidden"
        >


            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Başlık */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-block"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                    Sertifikalar
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Sürekli öğrenme ve gelişim yolculuğumda edindiğim sertifikalar.
                        </motion.p>
                    </motion.div>

                    {/* Sertifikalar Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {certificates.map((certificate, index) => (
                            <CertificateCard
                                key={certificate.title}
                                certificate={certificate}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 