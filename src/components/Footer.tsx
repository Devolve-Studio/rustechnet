"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-section", {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white pt-28 pb-20 px-6 md:px-32 overflow-hidden"
        >
            {/* Decorative SVGs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#3fa9f5]/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#ff931e]/10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                {/* Brand / About */}
                <div className="footer-section">
                    <h2 className="text-5xl font-black text-[#3fa9f5] mb-6">
                        RUS <span className="text-[#ff931e]">Technet</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed !text-lg">
                        We engineer intelligent surveillance for energy giants — from wind to solar, from cities to silent hills.
                        Our systems never sleep.
                    </p>
                </div>

                {/* Navigation */}
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-6 text-[#ff931e] uppercase tracking-wider">Navigate</h3>
                    <ul className="space-y-4 text-md text-gray-300">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Blog", href: "/blog" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }) => (
                            <li key={label} className="hover:translate-x-2 transition-transform">
                                <Link href={href} className="hover:text-[#3fa9f5]">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-6 text-[#ff931e] uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-4 text-md text-gray-300">
                        <li className="flex gap-4 items-start">
                            <FaMapMarkerAlt className="text-[#3fa9f5] mt-1" />
                            <span>Vadodara, Gujarat, India – 390001</span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaPhoneAlt className="text-[#ff931e]" />
                            <a href="tel:+919727128593" className="hover:text-[#3fa9f5]">
                                +91 97271 28593
                            </a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaPhoneAlt className="text-[#ff931e]" />
                            <a href="tel:+918160923809" className="hover:text-[#3fa9f5]">
                                +91 81609 23809
                            </a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaPhoneAlt className="text-[#ff931e]" />
                            <a href="tel:+919537747139" className="hover:text-[#3fa9f5]">
                                +91 95377 47139
                            </a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaEnvelope className="text-[#3fa9f5]" />
                            <a href="mailto:info@rustechnet.com" className="hover:text-[#ff931e]">
                                info@rustechnet.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="footer-section">
                    <h3 className="text-xl font-semibold mb-6 text-[#ff931e] uppercase tracking-wider">Connect</h3>
                    <div className="flex items-center space-x-6">
                        {[{
                            href: "https://instagram.com/rus.technet",
                            icon: <FaInstagram />,
                            label: "Instagram",
                            hoverColor: "hover:text-[#ff931e]"
                        }, {
                            href: "https://www.linkedin.com/company/rus-technet-solutions-pvt-ltd/",
                            icon: <FaLinkedin />,
                            label: "LinkedIn",
                            hoverColor: "hover:text-[#3fa9f5]"
                        }, {
                            href: "mailto:info@rustechnet.com",
                            icon: <FaEnvelope />,
                            label: "Email",
                            hoverColor: "hover:text-white hover:bg-white"
                        }].map(({ href, icon, label, hoverColor }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`text-white text-2xl p-3 rounded-full shadow-lg transition-all duration-300 ${hoverColor} hover:scale-110 bg-white/10 backdrop-blur-md border border-white/10`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <p className="!text-sm text-gray-500 mt-6">We’re always listening.</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-20 pt-8 border-t border-white/10 text-center !text-sm text-gray-500">
                <p>© {new Date().getFullYear()} RUS Technet Solutions Pvt. Ltd.</p>
                <p className="mt-1">
                    Built by <a href="https://devolvestudio.space" target="_blank" className="text-white hover:text-[#3fa9f5] font-semibold">Devolve Studio</a>
                </p>
            </div>
        </footer>
    );
}
