import {motion} from "framer-motion";
import MissionSection from "@/components/MissionSection";
import MapContent from "@/components/MapContent";

export default function DirectorsMessage() {
    return (
        <section className="relative max-h-screen md:max-h-[70vh] scroll-mt-20 w-full bg-black text-white overflow-hidden px-6 md:px-20 py-32 flex items-center justify-center">
            {/* Background overlays & starfield */}
            <div className="absolute inset-0 bg-[url('/images/director-bg.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 dark:bg-black/70 bg-[var(--background)] backdrop-blur-md z-0" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(#3fa9f5_1px,_transparent_1px)] dark:[background-size:30px_30px] dark:opacity-5 bg-[radial-gradient(#000000_1px,_transparent_1px)] [background-size:30px_30px] opacity-10 z-0" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#3fa9f5]/20 blur-3xl rounded-full z-0 animate-ping" />
            <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#ff931e]/20 blur-3xl rounded-full z-0 animate-ping" />

            {/* Floating orbit animation */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                className="absolute w-[600px] h-[600px] border border-dashed border-[#ffffff22] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            />

            {/* Messages container */}
            <div className="z-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl w-full">
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
                    <p className="!text-sm !sm:text-base md:text-lg leading-relaxed text-[var(--foreground)] ">
        <span className="italic">
          "We don’t just install cameras — we build safety systems that breathe
          with the rhythm of the wind, and shine with the sun."
        </span>
                        <br />
                        <span className="text-[#3fa9f5] font-bold block mt-4">– Himanshu Thakor</span>
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
                    <p className="!text-sm !sm:text-base leading-relaxed text-[var(--foreground)]">
        <span className="italic">
          "In every frame we capture, we commit to peace of mind and
          uninterrupted clarity."
        </span>
                        <br />
                        <span className="text-[#3fa9f5] font-bold block mt-4">– Mayur Thakor</span>
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
                    <p className="!text-sm !sm:text-base leading-relaxed text-[var(--foreground)]">
        <span className="italic">
          "Technology is only powerful when paired with trust — that's what we
          aim to earn with every installation."
        </span>
                        <br />
                        <span className="text-[#3fa9f5] font-bold block mt-4">– Himanshu Patel</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}