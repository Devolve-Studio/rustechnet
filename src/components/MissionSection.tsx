import {motion} from "framer-motion";
import Link from "next/link";

export default function MissionSection() {
    return(
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

                <div className="grid md:grid-cols-2 gap-12 mb-10">
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
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#ff931e]/10 to-[#ff931e]/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all"
                    >
                        <h3 className="text-3xl font-extrabold text-[#ff931e] mb-4">Foundation</h3>
                        <p className="text-base leading-relaxed text-white/80">
                            Our foundation is built on unwavering trust, a commitment to innovation, and a purpose to create safer,
                            smarter spaces for every generation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#3fa9f5]/10 to-[#3fa9f5]/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all"
                    >
                        <h3 className="text-3xl font-extrabold text-[#3fa9f5] mb-4">Core Values</h3>
                        <p className="text-base leading-relaxed text-white/80">
                            We value integrity in every action, precision in every install, and growth through responsibility
                            — shaping a future where technology empowers peace of mind
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}