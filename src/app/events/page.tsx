'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
    {
        title: "GreenTech Conclave",
        date: "July 2024",
        location: "Ahmedabad, India",
        desc: "Our team unveiled the next-gen solar surveillance AI at one of India's leading green expos.",
        image: "/events/greentech.jpg"
    },
    {
        title: "Wind & Wire Summit",
        date: "May 2024",
        location: "Bangalore, India",
        desc: "RTSPL showcased long-range turbine monitoring and hosted a security workshop.",
        image: "/events/windwire.jpg"
    },
    {
        title: "SecureGrid 2023",
        date: "Nov 2023",
        location: "Vadodara HQ",
        desc: "A landmark event where we launched our hybrid grid-connected monitoring ecosystem.",
        image: "/events/securegrid.jpg"
    }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-28 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto mb-20"
            >
                <h1 className="text-5xl font-bold mb-4">RTSPL Events</h1>
                <p className="text-lg opacity-70">
                    Where innovation meets collaboration. Here’s where we’ve been shaping the future of green energy surveillance.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                        <div className="relative w-full h-56">
                            <Image src={event.image} alt={event.title} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{event.date} · {event.location}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{event.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
