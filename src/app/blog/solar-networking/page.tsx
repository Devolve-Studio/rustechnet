import Link from "next/link";

const blog = {title: "Solar Networking: Building the Backbone of Smart Solar Farms",
    author: "Mayur Thakor",
    content: "When we think of solar farms, we imagine endless rows of sun-drenched panels converting light into power. But behind the glass and silicon lies an unsung hero—the network. Without proper networking, even the most advanced solar farm becomes a disconnected island, blind to inefficiencies, delays, and risks. That’s where solar networking steps in—binding technology, energy, and intelligence into a single connected ecosystem.\n" +
        "\n" +
        "In today’s era of smart infrastructure, networking in solar farms is no longer optional—it’s foundational. Every solar panel, inverter, weather sensor, surveillance camera, and fire alarm system needs to communicate seamlessly. A well-planned networking layout enables real-time data flow across vast sites, ensuring not only efficiency but also safety and scalability.\n" +
        "\n" +
        "Take this example: A storm damages a set of panels at the edge of a 100-acre solar field. Without intelligent networking, it might take hours—or even days—to identify and fix the issue. But with a smart network in place, the system instantly detects the fault, locates it precisely, and alerts the operations team. That’s the magic of network-first solar design.\n" +
        "\n" +
        "Networking also plays a pivotal role in remote monitoring and control. With the rise of cloud dashboards and AI-based energy analytics, stakeholders can track performance metrics, power output, and hardware status from anywhere in the world. Whether you’re in Vadodara or Vancouver, your farm is always under your digital watch.\n" +
        "\n" +
        "Security, too, leans heavily on strong networking. IP-based CCTV, motion sensors, and AI video analytics depend on fast, secure, and redundant connections. Combine this with edge computing and you get real-time threat detection that doesn’t rely solely on cloud latency—a must-have in remote regions with patchy connectivity.\n" +
        "\n" +
        "As solar farms grow into solar cities, the importance of mesh networks, fiber backbones, and wireless redundancy cannot be overstated. From LoRaWAN for long-range sensors to fiber-optic rings for high-speed core links, your farm’s intelligence is only as strong as its nervous system—its network.\n" +
        "\n" +
        "In the end, networking is not just wires, routers, and switches—it’s the connective tissue of modern solar energy. As green energy scales up, it's the robust digital backbone that will determine whether we merely produce clean energy—or produce it intelligently, securely, and sustainably.\n" +
        "\n" +
        "The sun may power the panels. But networks power the future.\n" +
        "\n"
};

export default function BlogDetailPage(){
    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-32 py-24 max-w-6xl mx-auto">
            <Link
                href="/blog#blogs"
                className=" text-[#00a86b] hover:underline font-medium"
            >
                ← Back to Blogs
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-[#ff931e] mb-4 mt-10">{blog.title}</h1>

            {/* Author + Writer info */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                By <span className="font-semibold text-[#00a86b]">{blog.author}</span>
            </p>

            {/* Blog content */}
            <article className="prose prose-invert max-w-none whitespace-pre-wrap text-lg opacity-90">
                {blog.content}
            </article>
            <p className="!text-sm text-gray-500 dark:text-gray-400 mt-10 font-semibold">
                - {blog.author}
            </p>
        </main>
    );
}