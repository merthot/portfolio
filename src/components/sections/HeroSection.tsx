'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer } from 'react-icons/si';

const floatingIcons = [
    { Icon: SiNextdotjs, color: 'text-white', delay: 0 },
    { Icon: SiReact, color: 'text-blue-400', delay: 0.2 },
    { Icon: SiTailwindcss, color: 'text-cyan-400', delay: 0.4 },
    { Icon: SiTypescript, color: 'text-blue-500', delay: 0.6 },
    { Icon: SiFramer, color: 'text-purple-400', delay: 0.8 },
];

const socialLinks = [
    { href: 'https://github.com/merthot', Icon: FiGithub, label: 'GitHub' },
    { href: 'https://linkedin.com/in/metin-mert-hot', Icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'mailto:metin.mert.hot@gmail.com', Icon: FiMail, label: 'Email' },
];

// Sol Üst Avatar Bileşeni
const LeftAvatar = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-0 left-10 w-[500px] h-[500px] z-10 hidden lg:block"
    >
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="w-full h-full relative"
            style={{
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
            }}
        >
            <Image
                src="/3d/avatar2.svg"
                alt="Sol Avatar"
                fill
                className="object-contain"
                priority
            />
        </motion.div>
    </motion.div>
);

// Sağ Alt Avatar Bileşeni
const RightAvatar = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 right-10 w-[500px] h-[500px] z-10 hidden lg:block"
    >
        <motion.div
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="w-full h-full relative"
            style={{
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
            }}
        >
            <Image
                src="/3d/avatar.svg"
                alt="Sağ Avatar"
                fill
                className="object-contain"
                priority
            />
        </motion.div>
    </motion.div>
);

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const container = containerRef.current;
            if (!container) return;

            const { width, height, left, top } = container.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;

            mouseRef.current = {
                x: (x / width - 0.5) * 2,
                y: (y / height - 0.5) * 2
            };

            // Parallax efekti için elementleri güncelle
            const elements = container.getElementsByClassName('parallax');
            Array.from(elements).forEach((el) => {
                const element = el as HTMLElement;
                const speed = parseFloat(element.dataset.speed || '1');
                const rotateX = mouseRef.current.y * 10 * speed;
                const rotateY = mouseRef.current.x * 10 * speed;
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black"
        >
            {/* Arkaplan Efektleri */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,40,200,0.1),transparent_50%)]" />
                {/* Floating Icons */}
                {floatingIcons.map(({ Icon, color, delay }, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${color} opacity-20`}
                        initial={{ y: 0 }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            delay: delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            left: `${15 + index * 20}%`,
                            top: `${20 + (index % 3) * 20}%`,
                        }}
                    >
                        <Icon className="w-12 h-12 md:w-16 md:h-16" />
                    </motion.div>
                ))}
            </div>

            {/* Ana İçerik */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex h-full min-h-screen items-center justify-center px-4"
            >
                <div className="text-center">
                    {/* Giriş Başlığı */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-block rounded-full bg-purple-500/10 px-6 py-2 backdrop-blur-sm"
                    >
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Yazılım Geliştirici
                        </span>
                    </motion.div>

                    {/* Ana Başlık */}
                    <motion.div
                        className="parallax mb-6"
                        data-speed="0.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl font-bold md:text-7xl">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Merhaba, Ben
                            </span>{' '}
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Metin Mert Hot
                            </span>
                        </h1>
                    </motion.div>

                    {/* Açıklama */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
                    >
                        Modern web teknolojileri ile etkileyici kullanıcı deneyimleri oluşturuyorum.
                        <br />
                    </motion.p>

                    {/* Butonlar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:opacity-90"
                        >
                            İletişime Geç
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full border border-purple-500/30 px-8 py-3 text-lg font-semibold text-purple-400 transition-colors hover:bg-purple-500/10"
                        >
                            Projelerimi Gör
                        </motion.a>
                    </motion.div>

                    {/* Sosyal Medya Linkleri */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 flex justify-center gap-6"
                    >
                        {socialLinks.map(({ href, Icon, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <Icon className="h-6 w-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-0 right-0 mx-auto w-fit"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="flex flex-col items-center"
                >
                    <span className="mb-2 text-sm text-gray-400">Aşağı Kaydır</span>
                    <div className="h-10 w-6 rounded-full border-2 border-gray-400 p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="h-2 w-2 rounded-full bg-purple-400"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Avatars */}
            <LeftAvatar />
            <RightAvatar />
        </section>
    );
} 