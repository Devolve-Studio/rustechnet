'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDir, setScrollDir] = useState('up');
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null);
    const logoRef = useRef(null);

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    const opacityTransform = useTransform(scrollYProgress, [0, 0.15], [1, 0.5]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(logoRef.current, {
                scale: 0.85,
                y: -10,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: "top top",
                    end: "bottom+=300 top",
                    scrub: true
                }
            });

            gsap.from(".nav-item", {
                opacity: 0,
                y: -10,
                stagger: 0.1,
                duration: 1,
                ease: "expo.out"
            });
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateDir = () => {
            const currentY = window.scrollY;
            setScrollDir(currentY < lastScrollY ? 'up' : 'down');
            lastScrollY = currentY;
        };
        window.addEventListener('scroll', updateDir);
        return () => window.removeEventListener('scroll', updateDir);
    }, []);

    const pages = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#00a86b] to-[#ff931e] z-[999]"
                style={{ width: scaleProgress }}
            />

            <motion.header
                style={{
                    y: scrollDir === 'up' ? 0 : -100,
                    opacity: opacityTransform,
                    transition: 'all 0.3s ease-in-out'
                }}
                className="fixed w-full top-0 z-[100] bg-[#e5e5e5] backdrop-blur-xl text-[#444444]  border-b border-[#00a86b]/30 font-orbitron"
                ref={scrollRef}
            >{/*shadow-[0_0_40px_#00000099]*/}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between"
                >
                    <motion.div
                        ref={logoRef}
                        className="inline-block text-left"
                        whileHover={{ scale: 1.1}} //rotate: 2
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link href="/" className="block">
                            <Image src="/logo.png" alt="RUS Technet" width={250} height={200} />
                            {/*<h1 className="text-[42px] sm:text-[42px] !roboto-slab font-extrabold text-[#00A650] lowercase leading-none tracking-wider select-none pointer-events-none cursor-default">
                                rustechnet
                            </h1>
                            <p className="text-[10px] sm:text-[10px] text-[#00A650] uppercase mt-1">
                                Smart Surveillance For A Greener Future
                            </p>*/}
                        </Link>
                    </motion.div>


                    <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase">
                        {pages.map((link) => (
                            <motion.div
                                key={link.href}
                                className="nav-item"
                                whileHover={{ scale: 1.15, rotate: -1 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-4 py-1 rounded-xl transition-all duration-300 ${pathname === link.href ? 'bg-[#ff931e] text-black shadow-md' : 'hover:text-[#00A86B]'}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="w-7 h-7 text-white" />
                    </motion.button>
                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100%', opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#111111] to-[#1c1c1c] backdrop-blur-md shadow-2xl z-50 flex flex-col border-l border-[#00a86b]/20 rounded-l-xl"
                            >
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center justify-between p-4 border-b border-[#00A86B]/20"
                                >
                                    <span className="text-lg font-semibold">Navigation</span>
                                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </motion.div>

                                <nav className="flex flex-col mt-6 px-6 space-y-6 text-base font-medium">
                                    {pages.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ x: 40, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1, type: 'spring' }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block py-2 px-3 rounded-lg transition-all duration-300 ${pathname === link.href ? 'bg-[#ff931e] text-black' : 'text-white hover:text-[#ff931e]'}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-40 md:hidden"
                                onClick={() => setIsOpen(false)}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
