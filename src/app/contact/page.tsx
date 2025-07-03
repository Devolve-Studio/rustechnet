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
            <section className="relative w-full bg-[#171717] text-white py-20 px-6 md:px-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold tracking-wide"
                >
                    Let's Build Something Together
                </motion.h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Connect with RUS Technet Solutions Pvt. Ltd. for project inquiries, partnership opportunities, or to simply say hello.
                </p>
            </section>

            {/* Fullscreen Map with Floating Elements */}
            <section className="relative w-full h-[800px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3400048137305!2d73.18110937586641!3d22.30297744279727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf005fc4d501%3A0xdf9ccf9d7275c0b3!2sRus%20Technet%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1751525858870!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 contrast-125 brightness-90 transition-all duration-700 border-none z-0"
                    loading="lazy"
                    style={{ pointerEvents: 'none' }}
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-br from-[#171717]/50 to-transparent z-10"></div>

                <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-100 px-6 md:px-20 z-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#e5e5e5] p-8 rounded-xl shadow-2xl max-w-md w-full backdrop-blur-md bg-opacity-90"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-[#171717]">Contact Information</h2>
                        <div className="space-y-4 text-md text-[#171717]">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#3fa9f5]" />
                                <span>Vadodara, Gujarat, India</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-[#ff931e]" />
                                <a href="tel:+919876543210" className="hover:text-[#3fa9f5] transition">+91 98765 43210</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-[#3fa9f5]" />
                                <a href="mailto:info@rustechnet.com" className="hover:text-[#ff931e] transition">info@rustechnet.com</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="bg-[#e5e5e5] p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6 border border-gray-200 backdrop-blur-md bg-opacity-90"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold">Your Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                            <label htmlFor="email" className="text-sm font-semibold">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                            <label htmlFor="message" className="text-sm font-semibold">Message</label>
                            <div className="relative">
                                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
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
                            className="w-full bg-[#3fa9f5] hover:bg-[#ff931e] text-white font-bold py-3 rounded-md transition-all"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </section>
        </main>
    );
}