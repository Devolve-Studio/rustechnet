// Revamped and Extended About Us Page for RUS Technet

'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import Timeline from "@/components/Timeline";
import MissionSection from "@/components/MissionSection";
import MapContent from "@/components/MapContent";
import DirectorsMessage from "@/components/DirectorsMessage";

export default function AboutUs() {
    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
            {/* Hero Section */}
            <HeroBanner
                // @ts-ignore
                heading={["Empowering Green Security"]}
                subheading={[
                    // @ts-ignore
                    "RTSPL pioneers CCTV surveillance and fire safety solutions for solar and wind energy infrastructures across India"                    // @ts-ignore
                ]} />

            {/* SVG Blobs Section */}
            <section className="relative w-full py-32 bg-[var(--background)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <svg className="absolute opacity-10 -top-20 -left-20 animate-pulse" width="600" height="600" fill="#3fa9f5" viewBox="0 0 600 600">
                        <path d="M300,0C465,0,600,135,600,300C600,465,465,600,300,600C135,600,0,465,0,300C0,135,135,0,300,0Z" />
                    </svg>
                    <svg className="absolute opacity-10 -bottom-20 -right-20 animate-pulse delay-200" width="500" height="500" fill="#ff931e" viewBox="0 0 600 600">
                        <path d="M300,0C465,0,600,135,600,300C600,465,465,600,300,600C135,600,0,465,0,300C0,135,135,0,300,0Z" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Why Choose RTSPL?</h2>
                    <p className="text-lg opacity-80">
                        Our team of experts brings over 8 years of experience in fire alarm & CCTV integration, with a unique focus on renewable energy sites.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Project-Specific Managers",
                                description:
                                    "Dedicated experts guiding your project from blueprint to final handover, ensuring no detail is overlooked.",
                            },
                            {
                                title: "Skilled CAD Design Team",
                                description:
                                    "Precision-driven designers who transform ideas into accurate, scalable, and executable plans.",
                            },
                            {
                                title: "Local Support & Service Center",
                                description:
                                    "On-ground presence for faster service, minimal downtime, and long-term partnership reliability.",
                            },
                            {
                                title: "Tailored AMC Services",
                                description:
                                    "Annual Maintenance Contracts crafted to match your system’s exact needs — no fluff, just function.",
                            },
                            {
                                title: "Rapid Response Teams",
                                description:
                                    "Swift deployment units ready to tackle critical faults and ensure operational continuity.",
                            },
                            {
                                title: "Industry-Certified Equipment",
                                description:
                                    "We deploy only rigorously tested, certified hardware that meets international safety and quality standards.",
                            },
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#ededed] dark:bg-[#1c1c1c] p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[#3fa9f5]">{point.title}</h3>
                                <p className="!text-sm opacity-70">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Split Section */}
            <section className="py-12 px-6 md:px-20 bg-[#f8f8f8] dark:bg-[#121212]">
                <div
                    className="flex flex-col md:flex-row items-center gap-0 max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="flex-1 h-64"
                    >
                        {/*<div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl" />*/}
                        <picture>
                            <img
                                src="/gifs/Windmill.gif"
                                alt="Windmill GIF"
                                className="w-64 h-64 object-contain scale-130 select-none"
                                draggable="false"
                                loading="lazy"
                            />
                        </picture>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold text-[#ff931e] mb-4">Solutions That Scale</h2>
                        <p className="opacity-80 text-lg">
                            Whether you manage a remote wind farm or a solar power substation, RTSPL delivers scalable
                            surveillance that evolves with your infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-20 bg-[var(--background)] text-[var(--foreground)]">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Core Values That Guide Us
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {[{
                        title: "Precision Engineering",
                        desc: "Every product and solution is built with discipline, accuracy and safety in mind."
                    }, {
                        title: "Green Commitment",
                        desc: "We help renewables stay safe while staying mindful of energy and sustainability."
                    }, {
                        title: "Rapid Adaptability",
                        desc: "From terrain to tech, we evolve to match every challenge thrown at our systems."
                    }].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#ff931e]">{item.title}</h3>
                            <p className="text-sm dark:text-gray-300 text-gray-700">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            {/*<Timeline />*/}

            {/* Director Messages Section */}
            <DirectorsMessage />

            <MissionSection />

            <MapContent
                activeStates={["Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu"]}
                projects={[
                    {
                        state: "Gujarat",
                        companies: [
                            "Powerica Limited",
                            "KPI Green Energy Pvt. Ltd.",
                            "Opera Energy Pvt. Ltd.",
                            "Onix Renewable Limited",
                            "GP Wind Pvt. Ltd.",
                            "Sundrops Energia Pvt. Ltd.",
                        ],
                    },
                    {
                        state: "Maharashtra",
                        companies: [
                            "Fourth Partner Energy Pvt. Ltd.",
                            "Serentica Renewables India Pvt. Ltd.",
                        ],
                    },
                    {
                        state: "Karnataka",
                        companies: [
                            "JSW Renewable Energy Pvt. Ltd.",
                            "Fourth Partner Energy Pvt. Ltd.",
                            "Solaris Electrical Services Pvt. Ltd.",
                        ],
                    },
                    {
                        state: "Tamil Nadu",
                        companies: [
                            "Watsun Infrabuild Pvt. Ltd.",
                            "AMPLUS Iru Pvt. Ltd.",
                        ],
                    },
                ]}
            />

            <section className="min-h-[50vh] bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 md:px-20 relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#ff931e_1px,_transparent_1px)] [background-size:30px_30px] opacity-10 z-0 animate-[pulse_10s_infinite]" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="z-10 text-center max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Secure your energy ecosystem</h2>
                    <p className="opacity-70 mb-10 text-lg">
                        Join hundreds of energy leaders who trust RTSPL with their surveillance systems.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#ff931e] hover:bg-[#3fa9f5] text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
                    >
                        Let’s Talk
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}