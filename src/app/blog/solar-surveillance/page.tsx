import Link from "next/link";

const blog = {
    title: 'Solar Sanctuaries: Securing the Heart of Renewable Power',
    author: "Mayur Thakor",
    content: "Sprawling across barren fields and arid lands, solar farms capture sunlight and convert it into lifeblood for modern civilization. But while they shine in their mission of clean energy, these installations are often left exposed — vulnerable to theft, vandalism, and environmental stress. At RTSPL, we understand that securing solar farms is just as important as building them.\n" +
        "\n" +
        "The challenge with solar farms isn’t just their scale — it’s their silence. No moving parts, no obvious activity. That makes them easy targets for unnoticed trespassing. Copper wires, panels, and batteries have resale value, and the remote nature of these farms often delays incident response. That's where our layered, intelligent security systems come in.\n" +
        "\n" +
        "We begin with perimeter monitoring using rugged bullet and PTZ cameras with IR capabilities, covering fences, gates, and blind spots. All hardware is chosen for extreme weather durability, with IP67 and IK10 ratings as standard. In large installations, we deploy zone-based surveillance, enabling site managers to isolate and address specific breaches without shutting down entire areas.\n" +
        "\n" +
        "Power isn't always reliable in these remote zones — but our systems are. We build solar-powered surveillance units with onboard batteries, meaning cameras remain active even if grid supply falters or vandals cut cables. These are paired with wireless bridges to cover wide areas without laying kilometers of fiber.\n" +
        "\n" +
        "But cameras alone can’t do it all. We integrate AI-driven object recognition to detect human presence vs animals, identify suspicious loitering, and even trigger alarms if movement occurs near critical assets like inverters and battery banks. Thermal sensors are used to monitor for overheating components or potential fire hazards — giving proactive alerts before damage occurs.\n" +
        "\n" +
        "For connectivity, we deploy 4G/5G routers with failover and cloud-linked NVRs. This allows operators to access live feeds and health diagnostics from their phones — whether they’re at headquarters or halfway across the country. Events are logged, time-stamped, and can be escalated automatically to response teams.\n" +
        "\n" +
        "Beyond surveillance, RTSPL offers remote access control, sirens, lighting triggers, and AMC support — ensuring not just eyes on the field, but hands ready to respond.\n" +
        "\n" +
        "A solar farm is a promise to the future. But that promise is only as strong as its protection. With RTSPL, every sunlit acre is watched, guarded, and empowered to deliver — securely and without pause.\n" +
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