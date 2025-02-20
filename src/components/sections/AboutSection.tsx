'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiJavascript, SiMongodb } from 'react-icons/si';
import { FaMapMarkerAlt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

const skills = [
    {
        name: "HTML & CSS",
        icon: FaHtml5,
        color: "from-[#FF4D4D] to-[#F9CB28]",
        description: "Modern ve responsive web tasarımı",
        technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
        features: [
            "Responsive Tasarım",
            "Modern UI",
            "CSS Animasyonları",
            "Cross-browser Uyumluluk"
        ]
    },
    {
        name: "JavaScript & Node.js",
        icon: FaNodeJs,
        color: "from-[#00DFD8] to-[#007CF0]",
        description: "JavaScript ve Node.js ile geliştirme",
        technologies: ["JavaScript", "Node.js", "Express.js", "REST API"],
        features: [
            "Backend Geliştirme",
            "API Tasarımı",
            "Asenkron İşlemler",
            "Performans Optimizasyonu"
        ]
    },
    {
        name: "C#",
        icon: TbBrandCSharp,
        color: "from-[#7928CA] to-[#FF0080]",
        description: ".NET teknolojileri ile geliştirme",
        technologies: ["C#", ".NET Core", "LINQ", "Entity Framework"],
        features: [
            "OOP Prensipleri",
            "SOLID Prensipler",
            "Design Patterns",
            "Clean Code"
        ]
    },
    {
        name: "ASP.NET Core MVC",
        icon: SiNextdotjs,
        color: "from-[#FF0080] to-[#7928CA]",
        description: "Web uygulamaları geliştirme",
        technologies: ["ASP.NET Core", "MVC", "Razor Pages", "Web API"],
        features: [
            "MVC Pattern",
            "Dependency Injection",
            "Middleware",
            "Authentication"
        ]
    },
    {
        name: "React",
        icon: SiReact,
        color: "from-[#00DFD8] to-[#007CF0]",
        description: "Modern frontend geliştirme",
        technologies: ["React", "Redux", "Hooks", "Context API"],
        features: [
            "Component Mimarisi",
            "State Yönetimi",
            "React Router",
            "Custom Hooks"
        ]
    },
    {
        name: "Veritabanı Sistemleri",
        icon: DiMysql,
        color: "from-[#FF4D4D] to-[#F9CB28]",
        description: "İlişkisel ve NoSQL veritabanı yönetimi",
        technologies: ["MySQL", "MongoDB", "MSSQL"],
        features: [
            "Veritabanı Tasarımı",
            "Query Optimizasyonu",
            "Veri Modelleme",
            "Backup & Recovery"
        ]
    }
];

const education = [
    {
        year: "2023 - halen",
        title: "Yönetim Bilişim Sistemleri",
        institution: "Anadolu Üniversitesi - Açıköğretim Fakültesi",
        description: "İşletme ve bilişim teknolojilerinin entegrasyonu, veri analizi ve yönetim sistemleri üzerine eğitim.",
        technologies: ["Veri Analizi", "Yönetim Sistemleri", "İşletme Yönetimi", "Bilgi Teknolojileri"],
        color: "from-blue-500 to-indigo-600"
    },
    {
        year: "2020 - 2022",
        title: "Bilgisayar Programcılığı",
        institution: "Akdeniz Üniversitesi",
        description: "Akdeniz Üniversitesi Bilgisayar Programcılığı bölümünden 2022 yılında mezun oldum. Üniversitemizde temel olarak C#, Python, Angular ve ASP.NET Web API eğitimi aldık. Yazılımcı olarak HTML, CSS, C#, Javascript, NodeJS teknolojilerini kullanarak projeler geliştiriyorum. Her zaman kendime yeni bilgiler katmayı misyon ediniyorum.",
        technologies: ["C#", "Python", "Angular", "ASP.NET Web API", "HTML", "CSS", "JavaScript", "NodeJS"],
        color: "from-purple-500 to-pink-600"
    }
];

const technologies = [
    { name: 'React', Icon: SiReact },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'MySQL', Icon: DiMysql }
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

const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
        opacity: [0.5, 0.7, 0.5],
        scale: [0.8, 1, 0.8],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen py-20 bg-[#0a0a0a] overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto space-y-24"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-block"
                        >
                            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                Hakkımda
                            </h2>
                        </motion.div>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Modern web teknolojileri konusunda tutkulu bir Full Stack Developer olarak,
                            öğrenmiş olduğum bilgi ve birikimle kullanıcı deneyimini ön planda tutan yaratıcı çözümler üretiyorum.
                            <span className="block mt-2 text-purple-400">
                                4+ yıldır kendime yeni bilgiler katmaya ve bu yönde gelişmeye devam ediyorum.
                            </span>
                        </motion.p>
                    </motion.div>

                    {/* Profil Kartı */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative group transform-gpu"
                    >
                        {/* Arkaplan Efekti */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transition-all duration-300" />
                        <div className="relative p-8 rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                {/* Profil Fotoğrafı */}
                                <motion.div
                                    className="relative w-48 h-48 rounded-2xl overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src="/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover/image:scale-110"
                                        sizes="(max-width: 768px) 192px, 192px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Profil Bilgileri */}
                                <div className="text-center md:text-left flex-1 flex flex-col md:flex-row items-start justify-between gap-8">
                                    <div>
                                        <motion.h3
                                            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            Metin Mert Hot
                                        </motion.h3>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-2xl text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                                                Full Stack Developer
                                            </p>
                                            <p className="text-gray-300 leading-relaxed max-w-2xl hover:text-white transition-colors duration-300 text-lg">
                                                Web teknolojileri ve modern geliştirme araçları konusunda kendimi geliştirmeye devam ediyorum.
                                                Kullanıcı deneyimini merkeze alan çözümler üreten bir geliştiriciyim.
                                            </p>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="flex items-center gap-4 p-6 transition-all duration-300 md:self-start"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                    >
                                        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                            <FaMapMarkerAlt className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">Konum</h4>
                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Antalya, Türkiye</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>


                        </div>
                    </motion.div>

                    {/* Yetenekler */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.02 }}
                                className="relative group transform-gpu"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10 rounded-2xl transition-all duration-300`} />
                                <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                                    <div className="flex items-start gap-6 mb-8">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 shrink-0`}
                                        >
                                            <skill.icon className="text-4xl text-white" />
                                        </motion.div>
                                        <div>
                                            <h4 className="text-2xl font-medium text-gray-200 mb-2">{skill.name}</h4>
                                            <p className="text-gray-400 text-base">{skill.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Teknolojiler */}
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-300 mb-3">Teknolojiler</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.technologies.map((tech) => (
                                                    <motion.span
                                                        key={tech}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${skill.color} bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300`}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Özellikler */}
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-300 mb-3">Özellikler</h5>
                                            <div className="grid grid-cols-2 gap-3">
                                                {skill.features.map((feature) => (
                                                    <motion.div
                                                        key={feature}
                                                        whileHover={{ x: 5 }}
                                                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-300"
                                                    >
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            viewport={{ once: true }}
                                                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                                        />
                                                        {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Eğitim Bölümü */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <motion.div variants={itemVariants} className="text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 inline-block"
                            >
                                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                        Eğitim
                                    </span>
                                </h2>
                            </motion.div>
                        </motion.div>
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.year}
                                whileHover={{ scale: 1.02 }}
                                className="relative group transform-gpu"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-10 rounded-2xl transition-all duration-300`} />
                                <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="lg:w-1/4">
                                            <motion.span
                                                whileHover={{ scale: 1.05 }}
                                                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
                                            >
                                                {edu.year}
                                            </motion.span>
                                            <motion.h4
                                                whileHover={{ x: 5 }}
                                                className="text-xl font-medium text-gray-200 mt-2 hover:text-white transition-colors duration-300"
                                            >
                                                {edu.title}
                                            </motion.h4>
                                            <p className="text-purple-300 mt-1 hover:text-purple-200 transition-colors duration-300">{edu.institution}</p>
                                        </div>
                                        <div className="lg:w-3/4 space-y-4">
                                            <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                                                {edu.description}
                                            </p>
                                            <div>
                                                <h5 className="text-sm font-medium text-gray-300 mb-3 hover:text-white transition-colors duration-300">
                                                    Öğrenilen Teknolojiler
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.technologies.map((tech) => (
                                                        <motion.span
                                                            key={tech}
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300`}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Teknolojiler */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-3 sm:grid-cols-6 gap-6 pt-12"
                    >
                        {technologies.map(({ name, Icon }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="group relative flex flex-col items-center"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <Icon className="w-12 h-12 mb-2 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                                </motion.div>
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 