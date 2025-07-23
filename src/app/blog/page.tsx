// Blog Page Emphasizing Green Energy
'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";

export default function BlogPage() {

    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
            {/* Hero Section */}
            <HeroBanner
                // @ts-ignore
                heading={["Green Energy Insights"]}
                subheading={[
                    // @ts-ignore
                    "Exploring innovation, security, and sustainability in renewable power systems.\n"
                ]} />

            {/* Featured Articles */}
            <section className="py-24 px-6 md:px-20" id="blogs">
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#00a86b]">Latest Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Guardians of the Grid: Securing Remote Wind Farms",
                                excerpt:
                                    "Wind farms often span desolate terrains. Discover how remote monitoring and IoT surveillance keep these giants safe from both nature and human error.",
                                link: "/blog/wind-farm-security",
                            },
                            {
                                title: "Solar-Powered Surveillance: Breaking Energy Barriers",
                                excerpt:
                                    "Unplug from the grid. This post explores how CCTV systems powered by the sun are revolutionizing security infrastructure in off-grid zones.",
                                link: "/blog/solar-surveillance",
                            },
                            {
                                title: "The Silent Watchers: AI in Green Power Monitoring",
                                excerpt:
                                    "AI-powered cameras aren't just watching — they're learning. Dive into how edge AI is being deployed in clean energy sites for predictive safety.",
                                link: "/blog/ai-green-security",
                            },
                            {
                                title: "Eco-Conscious Cabling: Smart Networks for Solar Sites",
                                excerpt:
                                    "Laying cable in solar fields? It's not just wiring — it's strategy. Learn how low-footprint networking is shaping the backbone of green surveillance.",
                                link: "/blog/solar-networking",
                            },
                            {
                                title: "Fire in the Fields: Prevention Tech for Solar Farms",
                                excerpt:
                                    "With intense heat and flammable surfaces, fire risk is real. Here's how next-gen sensors and thermal cameras are detecting danger before disaster strikes.",
                                link: "/blog/fire-prevention-solar",
                            },
                            {
                                title: "Sustainability Metrics: Auditing Green Security Systems",
                                excerpt:
                                    "Security systems can be green too. Track how we're measuring energy consumption, maintenance footprint, and long-term sustainability ROI.",
                                link: "/blog/security-sustainability-metrics",
                            },
                        ].map(({ title, excerpt, link }, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#ededed] p-6 rounded-xl shadow-md flex flex-col"
                            >
                                <h3 className="text-xl font-semibold text-[#ff931e] mb-2">{title}</h3>
                                <p className="text-sm opacity-70 flex-grow">{excerpt}</p>
                                <Link
                                    href={link}
                                    className="mt-4 text-[#00a86b] hover:underline font-medium"
                                >
                                    Read More →
                                </Link>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-24 bg-gradient-to-tr from-white to-[#00a86b] text-[var(--foreground)] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Renewable Tech</h2>
                    <p className="opacity-90 mb-8">We cover the latest in solar, wind, and sustainable surveillance technology.</p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-3 rounded-md text-[var(--foreground)] w-full sm:w-auto border border-gray-700 dark:border-gray-300"
                        />
                        <button
                            type="submit"
                            className="bg-[#ff931e] hover:bg-[#171717] text-[#1c1c1c] hover:text-white font-bold py-3 px-6 rounded-md transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </section>
        </main>
    );
}