import Link from "next/link";

const blog = {
    title: "AI-Powered Green Security: The Future of Smart Energy Infrastructure",
    author: "Himanshu Patel",
    content: "In the evolving landscape of green energy, traditional security measures are no longer enough. As solar farms, wind turbines, and hybrid power plants scale in size and complexity, the need for intelligent, responsive, and predictive security systems becomes paramount. This is where AI-powered green security steps in—not just as a protective layer, but as a core enabler of sustainable and resilient infrastructure.\n" +
        "\n" +
        "At its heart, AI-based security doesn’t just detect threats—it learns from them. With real-time monitoring via advanced sensors, AI systems can differentiate between actual intrusions and environmental anomalies like wildlife movement or weather changes. This dramatically reduces false alarms, ensuring that personnel respond only to legitimate risks, saving time, energy, and resources.\n" +
        "\n" +
        "Green energy installations often sprawl across remote or harsh terrains. Manual patrols are inefficient and environmentally taxing. By deploying AI-enabled drones and smart surveillance cameras, operators can monitor large areas 24/7, with automatic anomaly detection, thermal imaging, and pattern recognition. These tools act like ever-watchful sentinels, capable of flagging issues before they escalate—be it an attempted theft, overheating panel, or malfunctioning turbine.\n" +
        "\n" +
        "But the benefits of AI go beyond physical protection. Predictive maintenance, powered by machine learning, can analyze performance data to forecast failures before they happen. This reduces downtime, extends equipment lifespan, and minimizes the carbon footprint of reactive servicing. For instance, instead of driving technicians miles into a solar desert for routine checks, AI can direct them only when anomalies occur, aligning security with sustainability.\n" +
        "\n" +
        "Another game-changer is AI's ability to integrate with energy management systems, ensuring not just safe but optimized performance. Imagine a system that knows when to increase surveillance during peak production hours, or reroute energy flows in response to detected threats. That’s not sci-fi—it’s already happening in next-gen installations across Europe and Asia.\n" +
        "\n" +
        "AI-powered green security is not about replacing human oversight, but enhancing it—augmenting teams with tools that see farther, respond faster, and think smarter. In a world striving for net-zero emissions, even our security systems must align with eco-friendly values. With AI in the mix, the future of clean energy is not just bright—it’s secure, smart, and self-improving.\n" +
        "\n" +
        "Let’s not just power the planet. Let’s protect it, intelligently."
};

export default function BlogDetailPage(){
    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] px-6 md:px-32 py-24 max-w-6xl mx-auto">
            <Link
                href="/blog#blogs"
                className=" text-[#3fa9f5] hover:underline font-medium"
            >
                ← Back to Blogs
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-[#ff931e] mb-4 mt-10">{blog.title}</h1>

            {/* Author + Writer info */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
                By <span className="font-semibold text-[#3fa9f5]">{blog.author}</span>
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