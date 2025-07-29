"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Director {
    id: string;
    name: string;
    designation: string;
    image: string;
    quote: string;
}

interface DirectorsMessageProps {
    directors?: Director[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const CeoQuote: React.FC<DirectorsMessageProps> = ({
                                                               directors = [
                                                                   {
                                                                       id: "1",
                                                                       name: "Himanshu Thakor",
                                                                       designation: "Managing Director",
                                                                       image: "/directors/HimanshuThakor.webp",
                                                                       quote: "Our commitment to excellence drives everything we do. We believe in creating value not just for our shareholders, but for our employees, customers, and the communities we serve."
                                                                   },
                                                                   {
                                                                       id: "2",
                                                                       name: "Himanshu Patel",
                                                                       designation: "Managing Director",
                                                                       image: "/directors/HimanshuPatel.webp",
                                                                       quote: "Innovation fuels our mission. We relentlessly explore new frontiers to create bold solutions that reshape industries and enrich lives."
                                                                   },
                                                                   {
                                                                       id: "3",
                                                                       name: "Mayur Thakor",
                                                                       designation: "Managing Director",
                                                                       image: "/directors/MayurThakor.webp",
                                                                       quote: "Innovation is at the heart of our strategy. We're constantly pushing boundaries to deliver cutting-edge solutions that transform industries and improve lives."
                                                                   }
                                                               ],
                                                               title = "Message from the Leadership",
                                                               subtitle = "Hear from our visionary leaders who guide our mission and values",
                                                               className = ""
                                                           }) => {
    const isSingleDirector = directors.length === 1;

    return (
        <section className={`w-full py-16 md:py-24 lg:py-32 bg-background ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Directors Grid */}
                <div className={`grid gap-12 lg:gap-16 ${
                    isSingleDirector
                        ? "grid-cols-1 max-w-6xl mx-auto"
                        : "grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto"
                }`}>
                    {directors.map((director, index) => (
                        <motion.div
                            key={director.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true }}
                            className={`group relative ${
                                isSingleDirector
                                    ? "flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
                                    : "flex flex-col"
                            }`}
                        >
                            {/* Director Image */}
                            <div className={`relative overflow-hidden rounded-2xl ${
                                isSingleDirector
                                    ? "w-full lg:w-1/2 aspect-[4/5] lg:aspect-[4/5]"
                                    : "w-full aspect-[41/56] mb-6"
                            }`}>
                                <motion.img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    whileHover={{ scale: 1.02 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className={`relative ${
                                isSingleDirector
                                    ? "w-full lg:w-1/2 flex flex-col justify-center"
                                    : "w-full"
                            }`}>
                                {/* Quote Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2 + 0.3,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    viewport={{ once: true }}
                                    className="mb-6"
                                >
                                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary opacity-60" />
                                </motion.div>

                                {/* Quote Text */}
                                <motion.blockquote
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2 + 0.4
                                    }}
                                    viewport={{ once: true }}
                                    className="text-sm md:text-md lg:text-lg leading-relaxed text-foreground mb-8 font-medium italic"
                                >
                                    "{director.quote}"
                                </motion.blockquote>

                                {/* Director Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2 + 0.6
                                    }}
                                    viewport={{ once: true }}
                                    className="border-l-4 border-primary pl-6"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                        {director.name}
                                    </h3>
                                    <p className="text-base md:text-lg text-muted-foreground font-medium">
                                        {director.designation}
                                    </p>
                                </motion.div>

                                {/* Decorative Element */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.2 + 0.8
                                    }}
                                    viewport={{ once: true }}
                                    className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-8"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default CeoQuote;