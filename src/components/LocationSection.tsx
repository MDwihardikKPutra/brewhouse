"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";

const LocationSection = () => {
    return (
        <section id="location" className="py-40 md:py-64 bg-coffee-dark relative">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    {/* Left Side: Info with Reveal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-24"
                    >
                        <div className="space-y-10">
                            <span className="inline-block text-accent tracking-[0.5em] font-light text-[10px] uppercase">
                                Our Sanctuary
                            </span>
                            <h2 className="text-4xl md:text-5xl font-sans font-extralight text-white tracking-[0.1em] leading-[1.2]">
                                Visit <span className="font-serif italic font-light text-white/20 tracking-normal lowercase">Sanctuary</span> <br /> in Bandung.
                            </h2>
                            <p className="text-[15px] text-white/20 font-light leading-relaxed max-w-sm tracking-wide">
                                A minimal escape in the heart of the city. Join us for a moment of silence and quality.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 pt-10 border-t border-white/5"
                        >
                            <div className="space-y-4 group">
                                <h4 className="text-[10px] uppercase tracking-[0.4em] font-light text-white/10 group-hover:text-accent/40 transition-colors duration-500">Address</h4>
                                <p className="text-base font-sans text-white/40 leading-relaxed font-extralight tracking-[0.15em] uppercase text-[11px] group-hover:text-white/60 transition-colors duration-500">
                                    Jl. Rindang Setiabudi No. 42,<br />
                                    Bandung, West Java
                                </p>
                            </div>

                            <div className="space-y-4 group">
                                <h4 className="text-[10px] uppercase tracking-[0.4em] font-light text-white/10 group-hover:text-accent/40 transition-colors duration-500">Timeline</h4>
                                <p className="text-base font-sans text-white/40 leading-relaxed font-extralight tracking-[0.15em] uppercase text-[11px] group-hover:text-white/60 transition-colors duration-500">
                                    Mon — Sun <br />
                                    08.00 — 22.00
                                </p>
                            </div>

                            <div className="space-y-8 lg:col-span-2">
                                <h4 className="text-[10px] uppercase tracking-[0.4em] font-light text-white/10">Socials</h4>
                                <div className="flex items-center gap-12">
                                    {[Instagram, Facebook, Mail].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5, color: '#fff' }}
                                            className="text-white/20 cursor-pointer transition-colors duration-500"
                                        >
                                            <Icon size={18} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Map with Reveal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-[600px] w-full grayscale contrast-125 brightness-[0.4] rounded-sm overflow-hidden border border-white/5 group"
                    >
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.789184542!2d107.5843472!3d-6.8660721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e14620021c37%3A0x6b4c10c4369e9690!2sSetiabudi%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1708848000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark to-transparent opacity-60 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
