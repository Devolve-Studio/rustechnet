import Link from "next/link";

const blog = {
    title: "Fire Prevention in Solar Farms: A New Approach",
    author: "Himanshu Patel",
    content: "Solar farms harness the raw power of the sun—but when fire risk enters the picture, that same power can turn volatile. As installations scale up, stretching across acres of open land and remote regions, fire prevention becomes not just a safety measure—it becomes mission-critical.\n" +
        "\n" +
        "Contrary to popular belief, solar farms are not immune to fire hazards. Overheated inverters, poor wiring, panel faults, and even nearby dry vegetation can turn a sunny day into a smoky disaster. And in isolated locations where response time is already a challenge, even a small flame can cause widespread damage before help arrives.\n" +
        "\n" +
        "But here’s the truth: Prevention is the new protection.\n" +
        "\n" +
        "Modern solar farms must integrate fire prevention systems by design, not as an afterthought. That begins with intelligent sensor grids—heat detectors, smoke sensors, thermal imaging cameras—all wired into a smart network that constantly scans for anomalies. These aren’t just passive alarms; when paired with AI analytics, they predict patterns and catch threats before they become emergencies.\n" +
        "\n" +
        "One of the most underrated heroes in this landscape is the surveillance system. When your IP cameras are equipped with infrared vision and real-time thermal mapping, they become more than guards—they become firefighters with foresight. Combined with edge computing, they detect a heat spike in seconds—even in pitch darkness.\n" +
        "\n" +
        "Then there’s zoning—designing your solar field with firebreaks, controlled vegetation, and spaced arrays that prevent one fault from triggering a cascade. Grounding and surge protection also play vital roles, especially in regions prone to lightning.\n" +
        "\n" +
        "And let’s not forget the automated suppression systems—dry powder and clean-agent modules that can neutralize an ignition point before it becomes a wildfire. Imagine a localized, intelligent extinguisher system that knows exactly where and when to act—no panic, no human delay.\n" +
        "\n" +
        "But fire prevention isn’t just about equipment. It’s about planning, auditing, and education. Your field technicians need drills. Your systems need weekly self-checks. Your control room needs live dashboards. And your investors? They need assurance that your clean energy doesn't come at a hidden risk.\n" +
        "\n" +
        "The sun doesn’t wait—and neither should safety. In the silent fields where energy flows by day and sleeps by night, your fire prevention strategy is what ensures that the sunrise is always safe to greet.\n" +
        "\n" +
        "Because a solar farm isn’t truly green… until it’s truly protected.",
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