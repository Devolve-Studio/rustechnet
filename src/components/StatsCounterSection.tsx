'use client';

import CountUp from 'react-countup';
import { FaSun, FaWind, FaUsers, FaProjectDiagram, FaRegClock } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function StatsCounterSection() {
    const [ref, inView] = useInView({ triggerOnce: true });

    const stats = [
        {
            title: 'Projects',
            end: 120,
            icon: <FaProjectDiagram className="text-yellow-400 w-8 h-8" />,
        },
        {
            title: 'Solar Plants',
            end: 45,
            icon: <FaSun className="text-orange-500 w-8 h-8" />,
        },
        {
            title: 'Wind Plants',
            end: 38,
            icon: <FaWind className="text-blue-400 w-8 h-8" />,
        },
        {
            title: 'Customers',
            end: 200,
            icon: <FaUsers className="text-green-400 w-8 h-8" />,
        },
        {
            title: 'Upcoming Projects',
            end: 12,
            icon: <FaRegClock className="text-purple-400 w-8 h-8" />,
        },
    ];

    return (
        <section className="dark:bg-[#0a0a0a] bg-[var(--background py-16 px-6 text-[var(--foreground)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" ref={ref}>
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="dark:bg-[#111111] bg-[#ededed] rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        {stat.icon}
                        <h3 className="text-4xl font-bold mt-3">
                            {inView && <CountUp end={stat.end} duration={2} />}+
                        </h3>
                        <p className="mt-1 text-sm text-gray-400 uppercase tracking-wide">{stat.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
