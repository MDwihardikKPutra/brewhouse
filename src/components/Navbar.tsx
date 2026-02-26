"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Menu", href: "#menu" },
        { name: "Location", href: "#location" },
        { name: "Join Us", href: "#" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? "bg-black/95 backdrop-blur-xl py-5" : "bg-transparent py-10"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
                {/* Logo with Hover Reveal */}
                <Link href="/" className="flex items-center group">
                    <motion.div
                        className="text-2xl font-sans font-extralight text-white tracking-[0.2em] uppercase relative"
                    >
                        <span className="relative z-10">BrewHaven</span>
                        <span className="text-accent opacity-50 relative z-10">.</span>
                        <motion.div
                            className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-700 ease-in-out"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Links - Elegant Hover */}
                <div className="hidden lg:flex items-center gap-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-[9px] uppercase tracking-[0.5em] font-light text-white/40 hover:text-white transition-all duration-500 group"
                        >
                            {link.name}
                            <motion.span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500"
                            />
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="border border-white/10 text-white px-10 py-3 rounded-sm text-[9px] uppercase tracking-[0.5em] font-light hover:bg-white hover:text-black transition-all duration-700 overflow-hidden relative group"
                    >
                        <span className="relative z-10 transition-colors duration-700 group-hover:text-black">Registry</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white/80 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Staggered Links */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 bg-black flex flex-col items-center justify-center gap-12 z-40 px-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[14px] uppercase tracking-[0.6em] font-light text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                        <button className="p-4 text-white/20 mt-12 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
