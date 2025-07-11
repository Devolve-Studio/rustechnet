import {motion} from "framer-motion";

export default function Timeline() {
    return (
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
    );
}