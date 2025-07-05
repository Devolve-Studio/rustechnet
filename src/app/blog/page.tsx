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
            <section className="py-24 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#3fa9f5]">Latest Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#ededed] dark:bg-[#1c1c1c] p-6 rounded-xl shadow-md flex flex-col"
                            >
                                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-[#ff931e] mb-2">Green Surveillance: Solar Sites</h3>
                                <p className="text-sm opacity-70 flex-grow">
                                    Learn how solar farm security is evolving through smart camera integration and AI.
                                </p>
                                <Link
                                    href="/blog/solar-surveillance"
                                    className="mt-4 text-[#3fa9f5] hover:underline font-medium"
                                >
                                    Read More →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-24 bg-gradient-to-tr from-[#1c1c1c] to-[#3fa9f5] text-white text-center">
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
                            className="px-4 py-3 rounded-md text-black w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-[#ff931e] hover:bg-[#171717] text-black font-bold py-3 px-6 rounded-md transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </section>
        </main>
    );
}
