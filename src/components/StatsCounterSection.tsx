'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function StatsCounterSection() {
    const [ref, inView] = useInView({ triggerOnce: true });

    const stats = [
        {
            title: 'Projects',
            end: 400,
            gifLight: '/gifs/project-dark.webp',
        },
        {
            title: 'Solar Farms',
            end: 25,
            gifLight: '/gifs/solar-dark.webp',
        },
        {
            title: 'Wind Farms',
            end: 38,
            gifLight: '/gifs/wind-dark.webp',
        },
        {
            title: 'Customers',
            end: 200,
            gifLight: '/gifs/customer-dark.webp',
        },
        {
            title: 'Upcoming Projects',
            end: 12,
            gifLight: '/gifs/upcoming-dark.webp',
        },
    ];

    return (
        <section className="bg-[var(--background)] py-16 px-6 text-[var(--foreground)]">
            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className=" bg-[#ededed] rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <picture>
                            <img
                                src={stat.gifLight}
                                alt={stat.title}
                                className="w-16 h-16 object-contain"
                                loading="lazy"
                            />
                        </picture>
                        <h3 className="text-4xl font-bold mt-3">
                            {inView && <CountUp end={stat.end} duration={2} />}+
                        </h3>
                        <p className="mt-1 !text-sm text-gray-400 uppercase tracking-wide whitespace-nowrap">{stat.title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
