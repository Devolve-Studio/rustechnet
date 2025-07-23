'use client';

import { motion } from 'framer-motion';

export default function HeroBanner({ heading = [], subheading = [] }) {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 md:px-20 
            bg-gradient-to-br from-[#ff931e] to-[#00a86b] via-white
            text-black transition-colors duration-500">
            {/*dark:from-[#00a86b] dark:via-[#1c1c1c] dark:to-[#ff931e]*/}

            {heading.length > 0 ? heading.map((text, i) => (
                <motion.h1
                    key={`heading-${i}`}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 + i * 0.2 }}
                    className="text-5xl md:text-7xl font-bold drop-shadow-lg"
                >
                    {text}
                </motion.h1>
            )) : (
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold drop-shadow-lg"
                >
                    Our Expertise
                </motion.h1>
            )}

            {subheading && subheading.length > 0 ? subheading.map((text, i) => (
                <motion.p
                    key={`subheading-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.2, duration: 1 }}
                    className="mt-6 max-w-3xl text-lg md:text-xl text-black/80"
                >
                    {text}
                </motion.p>
            )) : (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-6 max-w-3xl text-lg md:text-xl text-black/80"
                >
                    Advanced surveillance and safety systems built for modern energy infrastructure.
                </motion.p>
            )}
        </section>
    );
}
