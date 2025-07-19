"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
    state: string;
    companies: string[];
}

interface ProjectMapProps {
    activeStates: string[];
    projects: Project[];
}

const stateCoordinates: Record<string, { top: number; left: number }> = {
    "Andhra Pradesh": { top: 65, left: 60 },
    "Arunachal Pradesh": { top: 30, left: 95 },
    Assam: { top: 33, left: 85 },
    Bihar: { top: 40, left: 70 },
    Chhattisgarh: { top: 50, left: 65 },
    Goa: { top: 65, left: 45 },
    Gujarat: { top: 53, left: 7 },
    Haryana: { top: 30, left: 55 },
    "Himachal Pradesh": { top: 20, left: 55 },
    Jharkhand: { top: 45, left: 72 },
    Karnataka: { top: 77, left: 17 },
    Kerala: { top: 85, left: 52 },
    "Madhya Pradesh": { top: 50, left: 55 },
    Maharashtra: { top: 63, left: 15 },
    Manipur: { top: 35, left: 93 },
    Meghalaya: { top: 33, left: 87 },
    Mizoram: { top: 40, left: 95 },
    Nagaland: { top: 32, left: 92 },
    Odisha: { top: 58, left: 70 },
    Punjab: { top: 25, left: 50 },
    Rajasthan: { top: 40, left: 40 },
    Sikkim: { top: 30, left: 75 },
    "Tamil Nadu": { top: 87, left: 23 },
    Telangana: { top: 65, left: 58 },
    Tripura: { top: 37, left: 90 },
    "Uttar Pradesh": { top: 35, left: 60 },
    Uttarakhand: { top: 28, left: 58 },
    "West Bengal": { top: 40, left: 78 },
    Delhi: { top: 27, left: 57 },
    "Jammu and Kashmir": { top: 10, left: 50 },
    Ladakh: { top: 8, left: 60 },
    Chandigarh: { top: 24, left: 53 },
    "Dadra and Nagar Haveli and Daman and Diu": { top: 58, left: 43 },
    "Andaman and Nicobar Islands": { top: 95, left: 80 },
    Puducherry: { top: 88, left: 62 },
    Lakshadweep: { top: 92, left: 40 },
};

export default function MapContent({ activeStates, projects }: ProjectMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapSize, setMapSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const updateMapSize = () => {
            if (mapRef.current) {
                const rect = mapRef.current.getBoundingClientRect();
                setMapSize({ width: rect.width, height: rect.height });
            }
        };

        updateMapSize();
        window.addEventListener("resize", updateMapSize);
        return () => window.removeEventListener("resize", updateMapSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [projects.length]);

    const currentProject = projects[currentIndex];

    return (
        <section className="relative bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
            {/* Decorative Blobs */}
            <div className="absolute -bottom-40 left-0 w-[300px] h-[300px] bg-[#3fa9f5]/20 blur-3xl rounded-full animate-pulse-slow z-0" />
            <div className="absolute -top-40 right-0 w-[300px] h-[300px] bg-[#ff931e]/20 blur-3xl rounded-full animate-pulse-slower z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(#3fa9f5_1px,_transparent_1px)] [background-size:30px_30px] opacity-5 z-0" />

            {/* Map Section */}
            <div
                ref={mapRef}
                className="relative w-full max-w-4xl h-[90vh] bg-[url('/india.svg')] bg-contain bg-no-repeat bg-center"
            >
                {mapSize.width > 0 &&
                    activeStates.map((state, idx) => {
                        const coords = stateCoordinates[state];
                        if (!coords) return null;

                        const topPx = (coords.top / 100) * mapSize.height;
                        const leftPx = (coords.left / 100) * mapSize.width;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="absolute z-10"
                                style={{
                                    top: topPx,
                                    left: leftPx,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div className="w-4 h-4 bg-[#3fa9f5] rounded-full animate-ping" />
                                <div className="w-2 h-2 bg-[#3fa9f5] rounded-full absolute top-1 left-1" />
                            </motion.div>
                        );
                    })}
            </div>

            {/* Project Info Section */}
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
        </section>
    );
}