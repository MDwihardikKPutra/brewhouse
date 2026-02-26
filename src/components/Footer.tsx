import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#050404] py-32 px-8 md:px-16 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
                    {/* Branding */}
                    <div className="lg:col-span-2 space-y-12">
                        <h3 className="text-4xl font-sans font-extralight text-white tracking-[0.2em] uppercase">
                            BrewHaven<span className="text-accent opacity-50">.</span>
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/10 max-w-sm leading-loose font-light">
                            Crafting silent escapes.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-10">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-light text-white/20">Navigate</span>
                        <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.4em] font-light">
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">Origins</Link>
                            <Link href="#menu" className="text-white/40 hover:text-white transition-colors">Essentials</Link>
                            <Link href="#location" className="text-white/40 hover:text-white transition-colors">Sanctuary</Link>
                        </div>
                    </div>

                    {/* Newsletter Join */}
                    <div className="space-y-10">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-light text-white/20">Community</span>
                        <div className="flex border-b border-white/10 pb-4 group">
                            <input
                                type="text"
                                placeholder="YOUR@EMAIL.COM"
                                className="bg-transparent text-[11px] font-light tracking-[0.3em] outline-none flex-grow placeholder:text-white/5 text-white"
                            />
                            <button className="text-[11px] font-light tracking-widest text-accent group-hover:translate-x-2 transition-transform duration-500">JOIN</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-12">
                    <div className="text-[8px] text-white/10 uppercase tracking-[0.6em] font-light">
                        &copy; 2024 BrewHaven — Handcrafted Moments.
                    </div>
                    <div className="flex gap-12 text-[8px] text-white/10 uppercase tracking-[0.6em] font-light">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
