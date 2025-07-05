'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const pages = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed w-full top-0 z-[100] backdrop-blur-lg bg-black/60 text-white shadow-[0_0_20px_#00000066]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.png" alt="PKEL Logo" width={80} height={40} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase tracking-wide">
                    {pages.map((link, i) => (
                        <motion.div
                            key={link.href}
                            whileHover={{ y: -1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                href={link.href}
                                className="hover-border-once relative px-2 py-2 transition-all duration-300 ease-in-out"
                            >
                                <div className="border top"></div>
                                <div className="hover:!text-[#ff931e] !text-white px-2">{link.name}</div>
                                <div className="border bottom"></div>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Hamburger */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu className="w-7 h-7 text-white" />
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 h-full w-64 bg-[#111111] shadow-xl z-50 flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                                <span className="text-lg font-semibold">Menu</span>
                                <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            <nav className="flex flex-col mt-6 px-6 space-y-5 text-base font-medium">
                                {pages.map((link) => (
                                    <motion.div
                                        key={link.href}
                                        whileTap={{ scale: 0.98 }}
                                        whileHover={{ x: 6 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white hover:text-[#ff931e] transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
