"use client";

import React, { useState } from "react";
import { Brain, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BorderBeam } from "./ui/border-beam";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Explore", href: "/" },
        { name: "Docs", href: "/docs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 px-4"
            >
                <div className="relative w-full max-w-2xl rounded-full bg-black/80 backdrop-blur-xl shadow-2xl flex items-center justify-between p-3 pl-6 pr-3 overflow-hidden">
                    <BorderBeam
                        size={80} // Optimized small size for smooth cornering
                        duration={4} // Slightly faster for flow
                        delay={0}
                        colorFrom="#FFA500"
                        colorTo="#FF4500"
                    />

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-10">
                        <div className="bg-orange-600 p-2.5 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                            <Brain size={20} className="text-white" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
                            Lintelligence
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-2 z-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors font-medium hover:bg-white/5 rounded-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3 z-10">
                        <Link href="/sign-in" className="hidden md:block">
                            <HoverBorderGradient>Sign In</HoverBorderGradient>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                        >
                            {isOpen ? <X s ize={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-28 left-4 right-4 z-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="p-4 text-center text-lg text-gray-200 hover:bg-white/10 rounded-2xl transition-colors font-medium border border-transparent hover:border-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/sign-in"
                            onClick={() => setIsOpen(false)}
                            className="p-4 text-center bg-white text-black rounded-2xl font-bold mt-2 hover:bg-gray-200 transition-colors text-lg"
                        >
                            Sign In
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
