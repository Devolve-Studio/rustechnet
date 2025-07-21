// Services Page with SVGs, Blobs, Framer Animations

'use client'


import { motion } from "framer-motion";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import FooterBanner from "@/components/FooterBanner";

export default function ServicesPage() {
    // @ts-ignore
    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
            {/* Hero Banner */}
            <HeroBanner
                // @ts-ignore
                heading={["Empowering Green Energy With AI Surveillance"]}
                subheading={[
                    // @ts-ignore
                    "Advanced surveillance and safety systems built for modern energy infrastructure.",
                    // @ts-ignore
                    "Tailored for solar farms, wind projects, and industrial sites.",
                ]} />
            {/* Services Grid */}
            <section className="py-24 px-6 md:px-20 dark:bg-[#1c1c1c] bg-[#ffffff]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-12 text-[#ff931e]">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {["CCTV Systems for Solar & Wind Farms", "Fire Alarm Systems for Substations", "LAN Networking & Infra", "EPABX / Intercom Solutions", "PA System Integration", "AMC & Remote Monitoring"].map((title, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#ededed] dark:bg-[#111111] p-6 rounded-xl shadow-xl hover:shadow-[#3fa9f5]/30 transition"
                            >
                                <h3 className="text-xl font-semibold text-[#3fa9f5] mb-2">{title}</h3>
                                <p className="text-sm opacity-70">Tailored, scalable, and energy-efficient security technology.</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* SVG Blob Transition */}
            <section className="relative w-full py-32 bg-[var(--background)]">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="absolute w-[300px] h-[300px] border border-dashed dark:border-[#ffffff22] border-gray-600 rounded-full  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                />
                <svg className="absolute top-0 left-0 w-full h-64 opacity-10" viewBox="0 0 600 600" fill="#ff931e">
                    <path d="M300,0C465,0,600,135,600,300C600,465,465,600,300,600C135,600,0,465,0,300C0,135,135,0,300,0Z" />
                </svg>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-[#3fa9f5] mb-6">Total Lifecycle Support</h2>
                    <p className="text-lg opacity-80">From design to deployment to maintenance—we’re with you at every step.</p>
                </motion.div>
            </section>

            {/* New Rich Section - Integration Process */}
            <section className="py-32 px-6 md:px-20 bg-[#1c1c1c] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#ff931e] mb-8">Our Integration Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {["Site Survey & Consultation", "Custom Design & Planning", "Flawless Implementation"].map((title, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#2c2c2c] p-6 rounded-lg shadow-xl"
                            >
                                <h3 className="text-xl font-semibold text-[#3fa9f5] mb-2">{title}</h3>
                                <p className="text-sm opacity-80">We ensure a seamless workflow with real-time updates and minimal disruptions.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#ff931e]">Annual Maintenance Contracts (AMC)</h2>
                    <p className="text-md opacity-70">
                        RUS Technet offers robust AMC plans for long-term system reliability, performance checks, and peace of mind.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {["Quarterly health audits", "Remote firmware updates", "On-site emergency support"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg text-center"
                        >
                            <h4 className="text-xl font-semibold text-white mb-3">{item}</h4>
                            <p className="text-sm text-gray-300">Our engineers ensure your surveillance runs smooth, always.</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* New Rich Section - Industry Focus */}
            <section className="py-32 px-6 md:px-20 bg-[#ededed] dark:bg-[#121212] text-center">
                <h2 className="text-4xl font-bold text-[#3fa9f5] mb-6">Industry-Centric Solutions</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                    We tailor systems for renewable energy farms, substations, and industrial facilities, ensuring security and operational resilience.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Renewable Energy", "Industrial Automation", "Remote Infrastructure"].map((industry, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-xl bg-white dark:bg-[#1c1c1c] shadow-md">
                            <h3 className="text-lg font-semibold text-[#ff931e] mb-2">{industry}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Our systems operate where uptime and safety are non-negotiable.</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <FooterBanner
                heading="Ready to secure your infrastructure?"
                subheading="Discover how RTSPL’s systems can safeguard your renewable energy investments."
                buttonText="Get in Touch"
                buttonLink="/contact"
            />
        </main>
    );
}