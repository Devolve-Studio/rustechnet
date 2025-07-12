// Revamped and Extended About Us Page for RUS Technet

'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import Timeline from "@/components/Timeline";
import MissionSection from "@/components/MissionSection";

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
                                src="/Windmill.gif"
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
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Timeline />

            <section className="relative max-h-[70vh] w-full bg-black text-white overflow-hidden px-6 md:px-20 py-32 flex items-center justify-center">
                {/* Background overlays & starfield */}
                <div className="absolute inset-0 bg-[url('/images/director-bg.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(#3fa9f5_1px,_transparent_1px)] [background-size:40px_40px] opacity-5 z-0 animate-pulse-slow" />
                <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#3fa9f5]/20 blur-3xl rounded-full z-0 animate-ping" />
                <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#ff931e]/20 blur-3xl rounded-full z-0 animate-ping" />

                {/* Floating orbit animation */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    className="absolute w-[600px] h-[600px] border border-dashed border-[#ffffff22] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                />

                {/* Messages container */}
                <div className="z-10 grid gap-10 md:grid-cols-3 max-w-7xl w-full">
                    {/* Director 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-xl shadow-2xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#ff931e]">
                            Message from the Director
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
        <span className="italic">
          "We don’t just install cameras — we build safety systems that breathe
          with the rhythm of the wind, and shine with the sun."
        </span>
                            <br />
                            <span className="text-[#3fa9f5] font-bold block mt-4">– Mayur Thakor</span>
                        </p>
                    </motion.div>

                    {/* Director 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-xl shadow-2xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#ff931e]">
                            Message from the Director
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
        <span className="italic">
          "In every frame we capture, we commit to peace of mind and
          uninterrupted clarity."
        </span>
                            <br />
                            <span className="text-[#3fa9f5] font-bold block mt-4">– Himanshu Thakor</span>
                        </p>
                    </motion.div>

                    {/* Director 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-xl shadow-2xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#ff931e]">
                            Message from the Director
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
        <span className="italic">
          "Technology is only powerful when paired with trust — that's what we
          aim to earn with every installation."
        </span>
                            <br />
                            <span className="text-[#3fa9f5] font-bold block mt-4">– Lorem Ipsum</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <MissionSection />

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