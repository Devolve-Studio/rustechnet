import { motion } from "framer-motion";

export default function TestimonialsSection() {
return(
    <section className="py-24 px-6 md:px-20 bg-[#f8f8f8] text-[var(--foreground)]">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Voices from the Field</h2>
            <p className="opacity-70">Real feedback from clients securing solar and wind projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
                {
                    quote: "Their system detected an attempted breach within 10 seconds. Absolutely game-changing.",
                    name: "Mr. Hitesh Chavda",
                    role: "-Opera Energy Pvt. Ltd."
                },
                {
                    quote: "Our wind farm is now fully protected and automated, no blind spots anymore.",
                    name: "Mr. Bala Prajapati",
                    role: "-Amplus Iru Pvt Ltd."
                },
                {
                    quote: "Quick deployment and seamless integration with our existing infrastructure.",
                    name: "Mr. Bablu Dale",
                    role: "-JSW Energy Ltd."
                },
                {
                    quote: "Their system detected an attempted breach within 10 seconds. Absolutely game-changing.",
                    name: "Mr. Hitesh Chavda",
                    role: "-Opera Energy Pvt. Ltd."
                },
                {
                    quote: "Our wind farm is now fully protected and automated, no blind spots anymore.",
                    name: "Mr. Bala Prajapati",
                    role: "-Amplus Iru Pvt Ltd."
                },
                {
                    quote: "Quick deployment and seamless integration with our existing infrastructure.",
                    name: "Mr. Bablu Dale",
                    role: "-JSW Energy Ltd."
                }
            ].map((testimonial, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white rounded-xl shadow-md"
                >
                    <p className="!text-md italic mb-4">"{testimonial.quote}"</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="!text-sm opacity-60">{testimonial.role}</p>
                </motion.div>
            ))}
        </div>
    </section>
);
}