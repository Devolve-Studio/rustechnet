import Link from "next/link";

const blog = {
    title: "Guardians of the Grid: Securing Remote Wind Farms",
    author: "Himanshu Thakor",
    content: "Wind farms are majestic symbols of sustainable progress, standing tall in remote landscapes and harnessing the invisible power of the wind. But these isolated giants are also highly vulnerable — not just to the forces of nature, but to increasingly sophisticated threats from human interference. Protecting these vital energy assets isn't just an option; it's a necessity.\n" +
        "\n" +
        "At RTSPL, we specialize in crafting security solutions tailored for the unique challenges of wind farms. These facilities are often spread across miles of open terrain, far removed from urban infrastructure. This makes traditional security setups inadequate. Our approach begins with advanced perimeter surveillance, powered by high-range PTZ and thermal cameras. These devices offer 360° coverage and night vision, allowing continuous vigilance even in pitch darkness or dense fog.\n" +
        "\n" +
        "But cameras are only one piece of the puzzle. We integrate them with solar-powered systems, ensuring surveillance continues without interruption even in off-grid locations. Each camera unit is backed by high-efficiency batteries and protected in IP67-certified enclosures to withstand harsh weather. Whether it’s rain, dust, or extreme temperature fluctuations, the equipment keeps working without compromise.\n" +
        "\n" +
        "Connectivity is key, especially in areas where mobile networks fluctuate. That’s why we deploy LTE-based NVRs and routers capable of functioning on low bandwidth while still allowing real-time remote access. These systems can be monitored from anywhere, reducing the need for physical patrols.\n" +
        "\n" +
        "Our AI-powered analytics take things further. Intrusion detection, loitering analysis, and object tracking ensure only real threats trigger alerts — minimizing false alarms. If a drone flies too close, or an unauthorized person enters a turbine base, alerts are dispatched instantly to security personnel and system operators.\n" +
        "\n" +
        "Additionally, remote diagnostics and self-healing firmware allow our clients to reboot or troubleshoot systems without stepping foot on site. We also support integrations with SCADA and site automation tools, enabling unified visibility and response coordination.\n" +
        "\n" +
        "In a world rapidly transitioning to renewable energy, ensuring the integrity and uptime of wind farms is mission-critical. With smart surveillance, resilient infrastructure, and AI-driven insights, RTSPL transforms every wind farm into a digitally fortified fortress — keeping the blades turning, the lights on, and the future green.",
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