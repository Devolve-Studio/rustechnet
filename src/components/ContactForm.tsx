"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: handle form submission (API call, toast, etc.)
        alert("Message sent! 🚀");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 space-y-6 border border-gray-300">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff931e] transition"
                        placeholder="John Doe"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3fa9f5] transition"
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <div className="relative">
                    <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3fa9f5] transition resize-none"
                        placeholder="Write your message..."
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-[#3fa9f5] hover:bg-[#ff931e] text-white font-semibold py-2 rounded-md transition-colors"
            >
                Send Message
            </button>
        </form>
    );
}
