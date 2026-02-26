"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
    {
        id: 1,
        name: "Cloud Velvet",
        description: "Espresso with thick, velvety milk foam and a hint of vanilla bean.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Silent Black",
        description: "Micro-batch roasted beans brewed for 18 hours for a clean, pure finish.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Ebony Mocha",
        description: "Dark artisanal chocolate melted into intense double-shot espresso.",
        price: "$7.00",
        image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Amber Pour",
        description: "Single-origin beans with notes of honey and roasted walnut.",
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop",
    },
];

const MenuSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="menu" className="py-40 bg-coffee-dark">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block text-accent tracking-[0.5em] font-medium text-[10px] mb-8 uppercase">
                            The Curated Selection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-sans font-light text-white tracking-[0.15em] uppercase">
                            Menu <span className="font-serif italic font-light text-white/30 tracking-normal capitalize">Essentials</span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] mb-10 overflow-hidden bg-coffee-medium rounded-sm shadow-2xl">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100"
                                />
                                {/* Soft Overlay on Hover */}
                                <div className="absolute inset-0 bg-coffee-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[13px] font-sans font-light text-white/80 group-hover:text-accent transition-colors duration-500 tracking-[0.2em] uppercase">
                                        {item.name}
                                    </h3>
                                    <span className="text-[12px] font-sans font-extralight text-white/20 tracking-widest">{item.price}</span>
                                </div>

                                <motion.p
                                    className="text-[11px] text-white/10 group-hover:text-white/30 transition-colors duration-700 leading-relaxed font-light line-clamp-2 uppercase tracking-wider"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MenuSection;
