'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCommentDots } from 'react-icons/fa';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    // @ts-ignore
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // @ts-ignore
    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong");

            alert("🌠 Message transmitted to the mothership!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("🛑 Transmission failed. Please try again.");
        }
    };

    return (
        <main className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center overflow-hidden relative">
            {/* Planetary Orbit Rings as Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] rounded-full border border-dashed border-[var(--foreground)] opacity-10 animate-spin-slow" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[300vw] rounded-full border border-dashed border-[var(--foreground)] opacity-5 animate-spin-reverse-slower" />

            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center py-24 px-6 md:px-20"
            >
                <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-[#00a86b] to-[#ff931e] bg-clip-text text-transparent">
                    Get In Touch 🚀
                </h1>
                <p className="max-w-2xl mx-auto mt-6 text-lg opacity-80">
                    We are here to provide all kinds of CCTV Solutions
                </p>
            </motion.section>

            <section className="z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 pb-20">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-[#00a86b]/10 to-[#ff931e]/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-6">📡 Contact Us</h2>
                    <ul className="space-y-6 text-base">
                        <li className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-[#00a86b] text-xl mt-1" />
                            <span>SF21 DARSHANAM TRADE CENTRE-3,<br />  NR SURYA PALACE HOTEL,
                                <br />SAYAJIGUNJ, <br /> GUJARAT - 390020.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <FaPhoneAlt className="text-[#ff931e] text-xl mt-7" />
                            <span>
                                Sales: <a href="tel:+919727128593" className="hover:underline">+91 97271 28593</a> (Himanshu Thakor)<br />
                                Service: <a href="tel:+918160923809" className="hover:underline">+91 81609 23809</a> (Mayur Thakor)<br />
                                Project: <a href="tel:+919537747139" className="hover:underline">+91 95377 47130</a> (Himanshu Patel)
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <FaEnvelope className="text-[#00a86b] text-xl mt-7" />
                            <span>
                                <a href="mailto:himanshu.t@rustechnet.com" className="hover:underline">himanshu.t@rustechnet.com</a><br />
                                <a href="mailto:mayur.t@rustechnet.com" className="hover:underline">mayur.t@rustechnet.com</a><br />
                                <a href="mailto:himanshu.p@rustechnet.com" className="hover:underline">himanshu.p@rustechnet.com</a>
                            </span>
                        </li>
                    </ul>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    onSubmit={handleSubmit}
                    className="relative bg-gradient-to-br from-[#ff931e]/10 to-[#00a86b]/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6"
                >
                    <div className="relative">
                        <label htmlFor="name" className="absolute left-10 top-[-10px] bg-[var(--background)] px-2 text-sm font-medium">Name</label>
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00a86b]" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-100/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a86b] text-[#0a0a0a]"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="absolute left-10 top-[-10px] bg-[var(--background)] px-2 text-sm font-medium">Email</label>
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff931e]" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-100/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff931e] text-[#0a0a0a]"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="message" className="absolute left-10 top-[-10px] bg-[var(--background)] px-2 text-sm font-medium">Message</label>
                        <FaCommentDots className="absolute left-3 top-4 text-[#00a86b]" />
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-100/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a86b] resize-none text-[#0a0a0a]"
                            placeholder="Broadcast your thoughts..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-md font-bold bg-[#00a86b]  hover:bg-[#ff931e] transition-all duration-300 shadow-xl text-[var(--background)]"
                    >
                        Send A Message
                    </button>
                </motion.form>
            </section>

            {/* Starfield effect */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle,_#00a86b_1px,_transparent_1px)] [background-size:20px_20px] opacity-5"></div>
            </div>

            {/* Map - stylized as a satellite window */}
            <div className="relative w-full h-[400px] mt-20 rounded-xl overflow-hidden shadow-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3400048137305!2d73.18110937586641!3d22.30297744279727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf005fc4d501%3A0xdf9ccf9d7275c0b3!2sRus%20Technet%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1751525858870!5m2!1sen!2sin"
                    className="w-full h-full border-none grayscale-[30%] contrast-125 brightness-90"
                    loading="lazy"
                ></iframe>
            </div>
        </main>
    );
}
