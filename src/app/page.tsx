'use client';


import HeroSecion from "@/components/HeroSecion";
import StatsCounterSection from "@/components/StatsCounterSection";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import FooterBanner from "@/components/FooterBanner";
import CoreServices from "@/components/CoreServices";
import ClientsScroller from "@/components/ClientsScroller";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <section className="bg-[var(--background)] py-5">
                <HeroSecion />
            </section>

            <StatsCounterSection />

            {/* Services Section */}
            <CoreServices />

            {/* Process Animation Section */}
            <section className="bg-[var(--background)] text-[var(--foreground)] py-24 px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-4">How We Work</h2>
                    <p className="opacity-70">
                        From planning to real-time monitoring, our systems are designed to adapt to the landscape and energy goals.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    {[
                        {
                            title: "Assessment",
                            image: "/Assessment.png",
                            desc: "We analyze site layout, environmental conditions, and energy goals."
                        },
                        {
                            title: "Deployment",
                            image: "/Deployment.png",
                            desc: "Installation of solar-compatible cameras, motion AI nodes, and secure servers."
                        },
                        {
                            title: "Monitoring",
                            image: "/Monitoring.png",
                            desc: "Live alerts, intelligent tracking, and long-term reporting dashboards."
                        }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="rounded-xl p-6 shadow-md bg-[#ededed] text-center"
                        >
                            <Image src={step.image} alt={step.title} width={300} height={300} draggable={false} contextMenu={"none"} className="cursor-ponter pointer-events-none mx-auto mb-4 bg-none select-none" />
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm opacity-70">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Clients Section with auto-scroll */}
            <section className="py-24 px-6 md:px-20 bg-[var(--background)] text-[var(--foreground)]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
                    <p className="opacity-70">We’ve helped power and protect facilities across India and beyond.</p>
                </div>
                <ClientsScroller />
                <style jsx>{`
                    @keyframes scroll-x {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-x {
                        animation: scroll-x 20s linear infinite;
                        width: max-content;
                    }
                `}</style>
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Call to Action Section */}
            <FooterBanner
                heading="Let’s Secure Your Energy Grid"
                subheading="Whether you're building solar fields in the desert or managing offshore wind turbines—our surveillance systems are engineered for resilience."
                buttonText="Talk to Us ➜"
                buttonLink="/contact"
            />
        </main>
    );
}