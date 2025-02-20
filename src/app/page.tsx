'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
                style={{ scaleX }}
            />
            <main ref={containerRef} className="relative">
                <section className="h-screen snap-start">
                    <HeroSection />
                </section>
                <section className="min-h-screen snap-start">
                    <AboutSection />
                </section>
                <section className="min-h-screen snap-start">
                    <ProjectsSection />
                </section>
                <section className="min-h-screen snap-start">
                    <SkillsSection />
                </section>
                <section className="min-h-screen snap-start">
                    <ContactSection />
                </section>
            </main>
        </>
    );
} 