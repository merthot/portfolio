'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeLines = [
    {
        text: '// Portfolio yükleniyor...',
        color: 'text-gray-500'
    }
];

const typingSpeed = 30;

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentText, setCurrentText] = useState('');

    // Yazma animasyonu
    useEffect(() => {
        if (currentLine >= codeLines.length) return;

        const line = codeLines[currentLine].text;
        if (currentText.length < line.length) {
            const timeout = setTimeout(() => {
                setCurrentText(line.slice(0, currentText.length + 1));
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
                setCurrentText('');
            }, typingSpeed * 2);
            return () => clearTimeout(timeout);
        }
    }, [currentLine, currentText]);

    // Progress ve yükleme animasyonu
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] px-4"
                >
                    <div className="relative flex flex-col items-center max-w-full">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 sm:mb-8 flex items-center space-x-2"
                        >
                            <div className="flex overflow-hidden">
                                {'MMH'.split('').map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        className="inline-block text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Kod Animasyonu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-6 sm:mb-8 w-full sm:w-[480px] bg-black/50 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm backdrop-blur-sm border border-white/10"
                        >
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50"
                                />
                            </div>
                            <div className="space-y-1">
                                {codeLines.slice(0, currentLine).map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={line.color}
                                    >
                                        {line.text}
                                    </motion.div>
                                ))}
                                {currentLine < codeLines.length && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={codeLines[currentLine].color}
                                    >
                                        {currentText}
                                        <motion.span
                                            animate={{ opacity: [0, 1] }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                repeatType: 'reverse'
                                            }}
                                            className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-white/50 ml-0.5"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* Progress Bar ve Yüzde */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="w-full sm:w-48 space-y-2"
                        >
                            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: progress / 100 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 origin-left"
                                />
                            </div>
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <span className="text-gray-400">Yükleniyor...</span>
                                <motion.span
                                    key={progress}
                                    initial={{ opacity: 1, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-white font-medium"
                                >
                                    %{progress}
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 