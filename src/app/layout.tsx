import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Metin Mert Hot - Full Stack Developer",
    description: "Modern web teknolojileri konusunda tutkulu bir Full Stack Developer olarak, kullanıcı deneyimini ön planda tutan yaratıcı çözümler üretiyorum.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className="scroll-smooth">
            <body className={`${inter.className} bg-black text-white antialiased`}>
                <LoadingScreen />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
} 