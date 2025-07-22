'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
    state: string;
    companies: string[];
}

interface ProjectMapProps {
    projects: Project[];
}

export default function ProjectsScroller({ projects }: ProjectMapProps) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [projects.length]);

    const currentProject = projects[currentIndex];
    return (
        <div className="w-[440px] md:mb-0 mb-10">
        <motion.div
            key={currentProject.state}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md bg-[var(--foreground)] text-[var(--background)] p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/10"
        >
            <h3 className="text-2xl font-bold mb-4">
                Our Footprints in <span className="text-[#3fa9f5]">{currentProject.state}</span>
            </h3>
            <ul className="space-y-2 text-sm list-disc list-inside">
                {currentProject.companies.map((company, idx) => (
                    <li key={idx} className="opacity-80 hover:opacity-100 transition-all duration-300">
                        {company}
                    </li>
                ))}
            </ul>
        </motion.div>
        </div>
    );
}