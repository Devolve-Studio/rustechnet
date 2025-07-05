// Revamped and Extended About Us Page for RUS Technet

'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

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
                            "Project-Specific Managers",
                            "Skilled CAD Design Team",
                            "Local Support & Service Center",
                            "Tailored AMC Services",
                            "Rapid Response Teams",
                            "Industry-Certified Equipment"
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#ededed] dark:bg-[#1c1c1c] p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[#3fa9f5]">{point}</h3>
                                <p className="text-sm opacity-70">
                                    Reliable support and custom solutions for each project’s success.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Split Section */}
            <section className="py-24 px-6 md:px-20 bg-[#f8f8f8] dark:bg-[#121212] flex flex-col md:flex-row items-center gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h2 className="text-3xl font-bold text-[#ff931e] mb-4">Solutions That Scale</h2>
                    <p className="opacity-80 text-lg">
                        Whether you manage a remote wind farm or a solar power substation, RTSPL delivers scalable surveillance that evolves with your infrastructure.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl" />
                </motion.div>
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
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="relative min-h-screen py-24 px-6 md:px-20 bg-gradient-to-tl from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto z-10 relative"
                >
                    <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#3fa9f5] to-[#ff931e] text-transparent bg-clip-text">
                        Industry Recognition & Timeline
                    </h2>
                    <p className="text-xl opacity-70">
                        Each step we take is powered by precision, passion, and progress. Scroll to orbit our highlights.
                    </p>
                    <section className="relative min-h-screen py-32 px-6 md:px-20 text-white overflow-hidden">
                        <div className="relative max-w-5xl mx-auto border-l-4 border-dashed border-[#3fa9f5]/30 pl-10">
                            {[{
                                year: "2016",
                                title: "Foundation Laid",
                                desc: "RUS Technet began its journey with a passion to redefine surveillance for renewable energy."
                            }, {
                                year: "2018",
                                title: "First Wind Farm Deployed",
                                desc: "Completed full-scale monitoring setup for 120+ turbines across Gujarat."
                            }, {
                                year: "2020",
                                title: "Solar Scaling",
                                desc: "Introduced AI-based detection and infrared thermal cameras for solar plants."
                            }, {
                                year: "2023",
                                title: "Private Limited Company",
                                desc: "RUS Technet Solutions Pvt. Ltd. is registered with GSTIN and CIN. Growth continues."
                            }].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    className="mb-16 relative group"
                                >
                                    <div className="absolute -left-[27px] top-1 w-5 h-5 bg-[#ff931e] border-[3px] border-white rounded-full z-10 transition group-hover:scale-125"></div>
                                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 shadow-xl">
                                        <div className="text-[#3fa9f5] font-bold text-lg mb-2">{item.year}</div>
                                        <h3 className="text-2xl font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative dots and animation */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ff931e_1px,_transparent_1px)] [background-size:30px_30px] opacity-10 z-0 pointer-events-none animate-pulse-slow"></div>
                    </section>
                </motion.div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#3fa9f5_1px,_transparent_1px)] [background-size:40px_40px] opacity-5 z-0 animate-pulse"></div>
            </section>

            <section className="relative max-h-[70vh] w-full bg-black text-white overflow-hidden px-6 md:px-20 py-32 flex items-center justify-center">
                {/* Background overlays & starfield */}
                <div className="absolute inset-0 bg-[url('/images/director-bg.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(#3fa9f5_1px,_transparent_1px)] [background-size:40px_40px] opacity-5 z-0 animate-pulse-slow" />
                <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#3fa9f5]/20 blur-3xl rounded-full z-0 animate-ping" />
                <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#ff931e]/20 blur-3xl rounded-full z-0 animate-ping" />

                {/* Floating orbit animation */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="absolute w-[600px] h-[600px] border border-dashed border-[#ffffff22] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                />

                {/* Message box */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 max-w-3xl text-center bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-xl shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#ff931e]">
                        Message from the Managing Director
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-200">
                    <span className="italic">
                        "We don’t just install cameras — we build safety systems that breathe
                        with the rhythm of the wind, and shine with the sun."
                    </span>
                        <br />
                        <span className="text-[#3fa9f5] font-bold block mt-4">– Mayur Thakor</span>
                    </p>
                </motion.div>
            </section>

            <section className="min-h-screen py-32 px-6 md:px-20 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-40 left-0 w-[300px] h-[300px] bg-[#3fa9f5]/20 blur-3xl rounded-full animate-pulse-slow z-0" />
                <div className="absolute -bottom-40 right-0 w-[300px] h-[300px] bg-[#ff931e]/20 blur-3xl rounded-full animate-pulse-slower z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(#3fa9f5_1px,_transparent_1px)] [background-size:30px_30px] opacity-5 z-0" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-[#3fa9f5] to-[#ff931e] text-transparent bg-clip-text"
                    >
                        Our Vision & Mission
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#3fa9f5]/10 to-[#3fa9f5]/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all"
                        >
                            <h3 className="text-3xl font-extrabold text-[#3fa9f5] mb-4">Vision</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                To redefine security for renewable energy infrastructures by creating seamless, intelligent, and eco-aligned
                                surveillance solutions that inspire global trust.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#ff931e]/10 to-[#ff931e]/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all"
                        >
                            <h3 className="text-3xl font-extrabold text-[#ff931e] mb-4">Mission</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                To continuously evolve tech-based protection systems tailored for solar farms, wind turbines, and future-ready
                                facilities with seamless integration and real-time response.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

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