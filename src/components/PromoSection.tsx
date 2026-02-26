"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PromoSection = () => {
    const [revealed1, setRevealed1] = useState(false);
    const [revealed2, setRevealed2] = useState(false);

    const Card = ({
        revealed,
        setRevealed,
        title,
        offer,
        offerSub,
        tag,
        image,
        bgColor,
        border
    }: any) => (
        <div
            className="relative h-[500px] w-full perspective-1000 cursor-pointer group"
            onClick={() => setRevealed(!revealed)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: revealed ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                {/* Front Side: CTA */}
                <div
                    className={`absolute inset-0 w-full h-full backface-hidden ${bgColor} ${border ? 'border-l border-white/5' : ''} p-12 md:p-20 flex flex-col items-center justify-center text-center`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <span className="text-[10px] uppercase tracking-[0.8em] text-accent/60 mb-8 font-light">Surprise</span>
                    <h3 className="text-3xl font-sans font-extralight text-white tracking-[0.3em] uppercase transition-all duration-700 group-hover:tracking-[0.4em]">
                        Claim the reward
                    </h3>
                    <div className="mt-12 w-12 h-[1px] bg-white/10 group-hover:w-24 transition-all duration-700" />
                </div>

                {/* Back Side: The actual discount */}
                <div
                    className={`absolute inset-0 w-full h-full backface-hidden ${bgColor} ${border ? 'border-l border-white/5' : ''} p-12 md:p-20 flex flex-col items-start text-left`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <span className="text-[9px] uppercase tracking-[0.7em] text-accent mb-10 font-medium">{tag}</span>
                    <h3 className="font-serif italic text-3xl text-white/70 mb-4 tracking-normal font-light">{title}</h3>
                    <p className="font-sans font-extralight text-5xl md:text-6xl text-white mb-14 tracking-[0.12em]">
                        {offer} <span className="font-serif italic text-accent/40 tracking-normal text-4xl">{offerSub}</span>
                    </p>

                    <button className="group relative pr-12 py-4 text-[10px] uppercase tracking-[0.4em] font-light text-white/60 transition-all duration-500 overflow-hidden">
                        <span className="relative z-10">Claimed</span>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-accent/30" />
                    </button>

                    {/* Background Subtle Image */}
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none grayscale overflow-hidden">
                        <Image
                            src={image}
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return (
        <section className="py-40 bg-coffee-medium px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 shadow-2xl overflow-hidden rounded-sm">

                <Card
                    revealed={revealed1}
                    setRevealed={setRevealed1}
                    tag="Limited Offering"
                    title="Monday Ritual"
                    offer="30%"
                    offerSub="Off"
                    image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
                    bgColor="bg-coffee-dark"
                />

                <Card
                    revealed={revealed2}
                    setRevealed={setRevealed2}
                    tag="Membership"
                    title="Coffee Time"
                    offer="Buy 1"
                    offerSub="Get 1"
                    image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop"
                    bgColor="bg-[#050404]"
                    border={true}
                />

            </div>

            {/* Perspective Styles */}
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </section>
    );
};

export default PromoSection;
