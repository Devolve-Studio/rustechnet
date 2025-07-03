'use client';

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Your message has been sent! ✨");
    };

    return (
        <main className="bg-[#e5e5e5] text-[#171717] overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full bg-[var(--background)] text-[var(--foreground)] py-20 px-6 md:px-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold tracking-wide"
                >
                    Let's Build Something Together
                </motion.h1>
                <p className="mt-4 text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                    Connect with RUS Technet Solutions Pvt. Ltd. for project inquiries, partnership opportunities, or to simply say hello.
                </p>
            </section>

            {/* Fullscreen Map with Floating Elements Only for Desktops */}
            <section className="relative w-full h-[800px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3400048137305!2d73.18110937586641!3d22.30297744279727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf005fc4d501%3A0xdf9ccf9d7275c0b3!2sRus%20Technet%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1751525858870!5m2!1sen!2sin&zoom=200"
                    className="absolute inset-0 w-full h-full contrast-125 brightness-90 transition-all duration-700 border-none z-0 hidden md:block"
                    loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-br from-[#171717]/50 to-transparent z-10 hidden md:block"></div>

                <div className="relative md:absolute inset-0 flex flex-col md:flex-row justify-center items-center md:gap-100 gap-10 mt-10 md:mt-0 px-6 md:px-20 z-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--background)] p-8 rounded-xl shadow-black shadow-2xl max-w-md w-full backdrop-blur-md bg-opacity-90"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Contact Information</h2>
                        <div className="space-y-4 text-md text-[#171717]">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#3fa9f5] hover:text-[#ff931e] transition duration-300 mb-13" />
                                <a href="https://maps.app.goo.gl/Wv8caidbJncQ1JEc6" target="_blank">
                                    <span className="text-[var(--foreground)] hover:text-[#ff931e] tartget-blank transition duration-300">
                                        DARSHANAM TRADE CENTER,<br />
                                        Kala Ghoda Cir, Opp. M.S. University<br />
                                        Sayajiganj, Vadodara, Gujarat 390001
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-[#ff931e] hover:text-[#3fa9f5] transition duration-300" />
                                <a href="tel:+919876543210" className="text-[var(--foreground)] hover:text-[#3fa9f5] transition">+91 98765 43210</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-[#3fa9f5] hover:text-[#ff931e] transition duration-300" />
                                <a href="mailto:info@rustechnet.com" className="hover:text-[#ff931e] transition text-[var(--foreground)]">info@rustechnet.com</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="relative bg-[var(--background)] p-8 rounded-xl shadow-black shadow-2xl max-w-md w-full space-y-6 backdrop-blur-md bg-opacity-90"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">Your Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2c2c2c]" />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3fa9f5] bg-gray-50"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2c2c2c]" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff931e] bg-gray-50"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">Message</label>
                            <div className="relative">
                                <FaCommentDots className="absolute left-3 top-4 text-[#2c2c2c]" />
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3fa9f5] bg-gray-50 resize-none"
                                    placeholder="Tell us about your idea..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full dark:bg-[#ededed] bg-[#1c1c1c] hover:bg-[#3fa9f5] hover:text-[var(--foreground)] text-[var(--background)] font-bold py-3 rounded-md transition-all duration-300 transform"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3400048137305!2d73.18110937586641!3d22.30297744279727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf005fc4d501%3A0xdf9ccf9d7275c0b3!2sRus%20Technet%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1751525858870!5m2!1sen!2sin&zoom=200"
                className="relative inset-0 w-screen h-[80vh] contrast-125 brightness-90 transition-all duration-700 border-none z-0 md:hidden block"
                loading="lazy"
            ></iframe>
        </main>
    );
}