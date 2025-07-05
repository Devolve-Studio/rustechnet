import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-[#171717] text-white pt-16 pb-8 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand & Tagline */}
                <div>
                    <div className="text-3xl font-extrabold mb-4 tracking-wide">
                        <span className="text-[#3fa9f5]">RUS</span>
                        <span className="text-[#ff931e]"> Technet</span>
                    </div>
                    <p className="text-base text-gray-300 leading-relaxed">
                        At RUS Technet Solutions Pvt. Ltd., we deliver intelligent systems, automation strategies, and digital products that scale. Every project is engineered with precision, creativity, and care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-xl font-semibold mb-5 text-[#ff931e] uppercase tracking-wider">Explore</h3>
                    <ul className="space-y-3 text-md text-gray-300">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/about" },
                            { name: "Services", href: "/services" },
                            { name: "Blog", href: "/blog" },
                            { name: "Contact", href: "/contact" },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="group flex items-center justify-between hover:text-[#3fa9f5] transition duration-300"
                                >
                                    <span>{item.name}</span>
                                    <ArrowRight
                                        className="ml-2 w-4 h-4 text-[#ff931e] group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-5 text-[#ff931e] uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-4 text-md text-gray-300">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#3fa9f5]" />
                            Vadodara, Gujarat, India
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#3fa9f5]" />
                            <a href="mailto:info@rustechnet.com" className="hover:text-[#ff931e]">info@rustechnet.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#3fa9f5]" />
                            <a href="tel:+919876543210" className="hover:text-[#ff931e]">+91 98765 43210</a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-5 text-[#ff931e] uppercase tracking-wider">Connect</h3>
                    <div className="flex space-x-5 text-2xl text-white">
                        <a
                            href="https://instagram.com/rus.technet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ff931e] transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com/company/rustechnet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#3fa9f5] transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:info@rustechnet.com"
                            className="hover:text-[#3fa9f5] transition"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-5">
                        We'd love to hear from you.
                    </p>
                </div>
            </div>

            {/* Divider & Credits */}
            <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} RUS Technet Solutions Pvt. Ltd. All rights reserved.</p>
                <p className="mt-2 text-gray-500">
                    Designed & Developed by <a href="https://devolvestudio.space" target="_blank" className="text-white font-medium hover:text-[#3fa9f5]">Devolve Studio</a>
                </p>
            </div>
        </footer>
    );
}
