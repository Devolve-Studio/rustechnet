import Link from "next/link";

const blog = {
    title: "Sustainability Metrics: Auditing Green Security Systems",
    author: "Himanshu Thakor",
    content: "What good is clean energy if the systems protecting it leave a carbon footprint of their own?\n" +
        "\n" +
        "As solar and wind farms bloom across the map, so do the layers of surveillance, networking, and protection that support them. But here's the catch—security systems themselves consume energy, require materials, and demand maintenance. If we truly aim for net-zero futures, we must audit not just the power plants… but the protections around them.\n" +
        "\n" +
        "Enter sustainability metrics—a new frontier in green system design.\n" +
        "\n" +
        "Let’s start with the basics: power consumption. Every CCTV camera, every router, every IoT sensor adds to the wattage drawn from the site. Smart planning means choosing devices with low standby consumption, solar-powered alternatives, and edge-processing units that cut out the need for round-the-clock data transmission.\n" +
        "\n" +
        "But energy is just the beginning. What about material sustainability? Are we deploying metal-heavy, plastic-coated behemoths that will choke landfills in 10 years? Or are we prioritizing recyclable casings, modular builds, and biodegradable sensor packaging?\n" +
        "\n" +
        "Next up: maintenance footprint. How many vehicle trips are needed for system checks? How often does firmware need manual updates? Modern green security solutions should self-diagnose, update over-the-air, and run long lifecycles with minimal human intervention. Fewer visits, fewer emissions.\n" +
        "\n" +
        "Then there’s data impact. You heard that right. Every gigabyte stored in the cloud has a carbon cost. Smarter data retention policies—like pruning unnecessary video footage or compressing archival logs—go a long way in keeping the security system lean, not bloated.\n" +
        "\n" +
        "Let’s not forget water usage—especially for systems with cooling components in desert zones—or the heat signatures of large surveillance hubs. Green security must blend in with the ecosystem, not disturb it.\n" +
        "\n" +
        "Finally, we come to the ROI of sustainability itself. Investors are now asking tougher questions. They want measurable returns—not just in protection, but in efficiency, recyclability, and carbon neutrality. If your security strategy can’t be benchmarked against clear sustainability metrics, it’s no longer future-proof—just future-deaf.\n" +
        "\n" +
        "The path to a greener world isn't lit by solar panels alone. It’s paved by decisions—small and large—that measure what truly matters.\n" +
        "\n" +
        "And in that audit, every security screw, every software update, every byte of data counts."
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