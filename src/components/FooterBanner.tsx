'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FooterBannerProps {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonLink?: string;
}

export default function FooterBanner({
                                         heading,
                                         subheading,
                                         buttonText,
                                         buttonLink = "/contact",
                                     }: FooterBannerProps) {
    return (
        <section className="py-32 px-6 md:px-20 text-center
            bg-gradient-to-br from-[#ff931e] to-[#3fa9f5] text-black
            dark:bg-gradient-to-tr dark:from-[#3fa9f5] dark:via-[#1c1c1c] dark:to-[#ff931e] dark:text-white
            transition-colors duration-500">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-6"
            >
                {heading}
            </motion.h2>

            <p className="mb-8 opacity-80 max-w-2xl mx-auto">
                {subheading}
            </p>

            <Link
                href={buttonLink}
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-md shadow-lg
                    hover:bg-white hover:text-black
                    dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white
                    transition-all"
            >
                {buttonText}
            </Link>
        </section>
    );
}
