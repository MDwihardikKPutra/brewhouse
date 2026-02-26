"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const textRevealVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-coffee-dark">
            {/* Background Image with Cinematic Overlay and Scroll Parallax */}
            <motion.div style={{ y: y1, scale }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
                    alt="Barista pouring coffee"
                    fill
                    className="object-cover object-center grayscale-[0.2] brightness-[0.6]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-transparent to-coffee-dark/40 opacity-90" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center"
            >

                {/* Monolithic Light Headline with Split Text Reveal */}
                <div className="flex flex-col items-center max-w-6xl">
                    <div className="overflow-hidden">
                        <motion.h1
                            variants={textRevealVariants}
                            className="text-[clamp(2.5rem,9vw,7rem)] leading-[1.1] font-sans font-extralight tracking-[0.05em] text-white/95"
                        >
                            Brewing <span className="font-serif italic font-light text-white/70 tracking-normal">Happiness</span>
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            variants={textRevealVariants}
                            className="text-[clamp(2.5rem,9vw,7rem)] leading-[1.1] font-sans font-extralight tracking-[0.05em] text-white/95 mt-2"
                        >
                            One Cup at a Time
                        </motion.h1>
                    </div>
                </div>

                {/* Simplified Subtext with Fade Reveal */}
                <motion.p
                    variants={itemVariants}
                    className="mt-12 text-[13px] md:text-[14px] text-white/20 max-w-lg font-light leading-relaxed px-4 tracking-[0.25em] uppercase"
                >
                    A premium coffee experience.
                </motion.p>

                {/* Minimal CTA with Magnetic-like Hover Effect */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 group"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative border border-white/20 text-white px-16 py-5 rounded-sm text-[10px] uppercase tracking-[0.5em] font-light transition-all duration-700 hover:bg-white hover:text-black hover:border-white overflow-hidden"
                    >
                        <span className="relative z-10">Discovery</span>
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 bg-white z-0"
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{ opacity }}
                className="absolute bottom-12 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-light">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
