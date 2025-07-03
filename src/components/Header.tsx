'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        <header className="relative bg-[#0a0a0a] text-white top-0 left-0 right-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="PKEL Logo" width={80} height={40} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-2 text-md font-medium uppercase tracking-wider">
                    {pages.map((link) => (
                        <Link key={link.href} href={link.href} className="py-4 hover-border-once">
                            <div className="border top"></div>
                            <div className="hover:!text-[#ff931e] !text-white transform transition-all duration-300 px-4">
                                {link.name}
                            </div>
                            <div className="border bottom"></div>
                        </Link>
                    ))}
                </nav>

                {/* Hamburger for mobile */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu className="w-7 h-7 text-white" />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>
                <nav className="flex flex-col mt-4 space-y-4 px-6">
                    {pages.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white text-lg hover:text-[#ff931e] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </header>
    );
}
