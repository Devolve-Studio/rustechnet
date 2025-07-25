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
            <section className="py-24 px-6 md:px-20 bg-[#ffffff]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-12 text-[#ff931e]">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "CCTV Systems for Solar & Wind Farms",
                                desc: "AI-powered surveillance tailored for vast, remote green energy landscapes."
                            },
                            {
                                title: "Fire Alarm Systems for Substations",
                                desc: "Early-detection fire safety designed for high-voltage, high-risk zones."
                            },
                            {
                                title: "LAN Networking & Infra",
                                desc: "Robust, high-speed infrastructure built for industrial-grade reliability."
                            },
                            {
                                title: "EPABX / Intercom Solutions",
                                desc: "Seamless internal communication with scalable, smart routing systems."
                            },
                            {
                                title: "PA System Integration",
                                desc: "Clear, far-reaching announcements for safety, alerts, and coordination."
                            },
                            {
                                title: "AMC & Remote Monitoring",
                                desc: "Ongoing expert maintenance with real-time visibility and peace of mind."
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#ededed] p-6 rounded-xl shadow-xl hover:shadow-[#00a86b]/30 transition"
                            >
                                <h3 className="text-xl font-semibold text-[#00a86b] mb-2">{service.title}</h3>
                                <p className="text-sm opacity-70">{service.desc}</p>
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
                    className="absolute w-[300px] h-[300px] border border-dashed border-gray-600 rounded-full  left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
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
                    <h2 className="text-4xl font-bold text-[#00a86b] mb-6">Total Lifecycle Support</h2>
                    <p className="text-lg opacity-80">From design to deployment to maintenance—we’re with you at every step.</p>
                </motion.div>
            </section>

            {/* New Rich Section - Integration Process */}
            <section className="py-32 px-6 md:px-20 bg-[#1c1c1c] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#ff931e] mb-8">Our Integration Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Site Survey & Consultation",
                                desc: "We visit your site to understand the terrain, risks, and exact operational needs — no guesswork, only ground truth."
                            },
                            {
                                title: "Custom Design & Planning",
                                desc: "We engineer a tailored solution that fits your energy goals, infrastructure, and future scaling — down to the last cable."
                            },
                            {
                                title: "Flawless Implementation",
                                desc: "From deployment to testing, we handle every step with surgical precision — fast, clean, and built to last."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#2c2c2c] p-6 rounded-lg shadow-xl"
                            >
                                <h3 className="text-xl font-semibold text-[#00a86b] mb-2">{step.title}</h3>
                                <p className="text-sm opacity-80">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-20 text-black">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#ff931e]">Annual Maintenance Contracts (AMC)</h2>
                    <p className="text-md opacity-70">
                        RUS Technet’s AMC plans are designed for zero-downtime operations, continuous optimization, and total peace of mind.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {[
                        {
                            title: "Quarterly Health Audits",
                            desc: "We inspect, test, and tune all system components every quarter — preventing problems before they appear."
                        },
                        {
                            title: "Remote Firmware Updates",
                            desc: "Your systems stay up-to-date with the latest features and security patches, deployed remotely and seamlessly."
                        },
                        {
                            title: "On-site Emergency Support",
                            desc: "When every second counts, our experts are on-ground fast — minimizing downtime and restoring operations swiftly."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/90 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg text-center"
                        >
                            <h4 className="text-xl font-semibold text-black mb-3">{item.title}</h4>
                            <p className="text-sm text-black/80">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* New Rich Section - Industry Focus */}
            <section className="py-32 px-6 md:px-20 bg-[#ededed] text-center">
                <h2 className="text-4xl font-bold text-[#00a86b] mb-6">Industry-Centric Solutions</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700">
                    Our solutions are engineered for environments where reliability, real-time data, and safety are mission-critical.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Renewable Energy",
                            desc: "Surveillance and control systems built to thrive in remote, rugged solar and wind farm environments."
                        },
                        {
                            title: "Industrial Automation",
                            desc: "Integrating security with real-time operations — ensuring uptime across complex machinery and networks."
                        },
                        {
                            title: "Remote Infrastructure",
                            desc: "From substations to telecom towers — secure, monitor, and manage off-grid assets with zero compromise."
                        }
                    ].map((industry, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-white dark:bg-[#1c1c1c] shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-[#ff931e] mb-2">{industry.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{industry.desc}</p>
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