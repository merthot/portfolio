'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'MERN E-Ticaret Platformu',
        description: 'MERN Stack (MongoDB, Express.js, React.js, Node.js) kullanılarak geliştirilmiş modern bir e-ticaret platformu. Redux ile state yönetimi, JWT ile güvenli kimlik doğrulama.',
        image: '/projects/ecommerce.jpg',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT'],
        github: 'https://github.com/merthot/mern-ecommerce',
        color: 'from-green-600 to-blue-600'
    },
    {
        title: 'Real-time Chat Uygulaması',
        description: 'Socket.IO ve MERN Stack kullanılarak geliştirilmiş gerçek zamanlı sohbet uygulaması. Anlık mesajlaşma, çevrimiçi durum takibi, okundu bildirimi ve modern arayüz tasarımı.',
        image: '/projects/chat.jpg',
        tags: ['Socket.IO', 'Express.js', 'Node.js', 'JWT'],
        github: 'https://github.com/merthot/ChatApp',
        color: 'from-purple-600 to-pink-600'
    },
    {
        title: 'Eğitim Portalı',
        description: 'ASP.NET Web API ve Angular kullanarak hazırladığım eğitim portalı projesi. Üyelik ve giriş sistemi ile oluşturduğum ve giriş yapan üyelerin kendilerine göre eğitim alabileceği, sevebildiği ve ürün alabildiği bir platform oluşturdum. Yöneticiler için özel bir panel var ve buradan üye ekleme, silme ve düzenleme yapabiliyorlar.',
        image: '/projects/education.jpg',
        tags: ['ASP.NET Web API', 'TypeScript', 'C#', 'Angular'],
        github: 'https://github.com/merthot/ASPNETveAngular',
        color: 'from-blue-600 to-purple-600'
    }
];

export default function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentProject, setCurrentProject] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { scrollXProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
        axis: "x"
    });

    const springConfig = { mass: 0.2, stiffness: 30, damping: 20 };

    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [400, 0, -500, -550]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(scrollXProgress, [0, 1], ["0%", "-66.666%"]),
        springConfig
    );

    const imageScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [1, 1]),
        { mass: 0.2, stiffness: 30, damping: 20 }
    );

    useEffect(() => {
        if (isMobile) {
            const handleScroll = () => {
                if (!containerRef.current) return;
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                const progress = scrollLeft / (scrollWidth - clientWidth);
                const projectIndex = Math.min(
                    Math.floor(progress * projects.length),
                    projects.length - 1
                );
                setCurrentProject(projectIndex);
            };

            containerRef.current?.addEventListener('scroll', handleScroll);
            return () => containerRef.current?.removeEventListener('scroll', handleScroll);
        } else {
            const unsubscribe = scrollYProgress.on("change", (latest) => {
                const projectIndex = Math.min(
                    Math.floor(latest * projects.length),
                    projects.length - 1
                );
                setCurrentProject(projectIndex);
            });

            return () => unsubscribe();
        }
    }, [scrollYProgress, isMobile]);

    return (
        <section
            ref={containerRef}
            id="projects"
            className={`relative ${isMobile ? 'h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory' : 'min-h-[300vh]'} bg-[#0a0a0a]`}
        >
            {isMobile ? (
                // Mobil Görünüm
                <div className="h-full w-[300vw] flex items-center">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="w-screen h-full flex flex-col items-center justify-center px-4 snap-center"
                        >
                            <div className="w-full max-w-lg space-y-8">
                                {/* Proje Görseli */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                    <div className={`absolute inset-0 ${project.color} opacity-20`} />
                                </div>

                                {/* Proje Detayları */}
                                <div className="relative bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-white/80`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm hover:opacity-90 transition-all duration-300"
                                    >
                                        GitHub
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="ml-2"
                                        >
                                            →
                                        </motion.span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Masaüstü Görünüm
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="container mx-auto px-4">
                        {/* Başlık */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="sticky top-10 z-50 text-center mb-12 sm:mb-20"
                        >
                            <motion.div className="inline-block">
                                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                        Projelerim
                                    </span>
                                </h2>
                            </motion.div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Sol Kolon - Proje Detayları */}
                            <div className="relative min-h-[400px] sm:min-h-[500px]">
                                <motion.div
                                    style={{ y: translateY }}
                                    className="space-y-64 sm:space-y-32 md:space-y-32 relative"
                                >
                                    {projects.map((project, index) => (
                                        <motion.div
                                            key={project.title}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="relative group"
                                        >
                                            {/* Arka plan efekti */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />

                                            <div className="relative bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                                                {/* Proje numarası */}
                                                <div className="absolute -left-4 top-8 -rotate-90 origin-left hidden sm:block">
                                                    <span className="text-4xl sm:text-6xl font-bold text-white/10">
                                                        {(index + 1).toString().padStart(2, '0')}
                                                    </span>
                                                </div>

                                                {/* İçerik */}
                                                <div className="sm:ml-8">
                                                    <h3 className={`text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                                        {project.title}
                                                    </h3>

                                                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span
                                                                key={tagIndex}
                                                                className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-white/80`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                                        {project.description}
                                                    </p>

                                                    <div className="flex gap-3 sm:gap-4">
                                                        <motion.a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full inline-flex justify-center items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/5 border-white/10 text-gray-300 
                                                            font-medium text-sm sm:text-base hover:bg-white/10 transition-all 
                                                            duration-300"
                                                        >
                                                            GitHub
                                                            <motion.span
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="ml-2"
                                                            >
                                                                →
                                                            </motion.span>
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Sağ Kolon - Sabit Proje Görseli */}
                            <div className="relative lg:sticky lg:top-1/2 lg:-translate-y-1/2 aspect-[4/3] rounded-2xl overflow-hidden hidden sm:block">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={false}
                                        animate={{
                                            opacity: currentProject === index ? 1 : 0,
                                            scale: currentProject === index ? 1 : 1.05,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                        style={{ scale: imageScale }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-2xl"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index === 0}
                                        />
                                        <div className={`absolute inset-0 ${project.color} opacity-20 rounded-2xl`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll Progress Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {projects.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-white/20"
                        animate={{
                            scale: currentProject === index ? 1.5 : 1,
                            backgroundColor: currentProject === index ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </section>
    );
} 