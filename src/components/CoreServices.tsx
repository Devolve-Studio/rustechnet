import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
    const services = [
        {
            title: "Solar Plant Surveillance",
            desc: "Thermal + AI Cameras for 24/7 remote security.",
            icon: "/slides/SolarFarm.jpg",
        },
        {
            title: "Wind Turbine Monitoring",
            desc: "High-altitude & vibration-resistant camera solutions.",
            icon: "/slides/WindFarm.jpg",
        },
        {
            title: "Smart Fire Detection",
            desc: "AI-based heat tracking to spot threats in real time.",
            icon: "/slides/FireAlarm.jpg",
        },
    ];

    return (
        <section className="bg-[var(--background)] text-[var(--foreground)] py-24 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
                <p className="opacity-70">
                    At RUS Technet Solutions, we craft intelligent security solutions
                    tailored for green energy facilities. Our systems protect massive
                    solar farms, wind parks, and critical infrastructure with precision.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {services.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="group relative h-[340px] bg-[#ededed] dark:bg-[#111111] overflow-hidden rounded-xl shadow-xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                fill
                                className="object-cover object-center filter blur-[1px] brightness-[0.9]"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
                            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm opacity-80 text-black dark:text-white">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}