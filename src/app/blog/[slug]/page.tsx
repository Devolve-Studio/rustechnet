import { notFound } from "next/navigation";
import {
    windFarmSecurity,
    solarSurveillance,
    aiGreenSecurity,
    solarNetworking,
    firePreventionSolar,
    sustainabilityMetrics,
} from "@/data/blogs";
import Link from "next/link";

// Updated type to include writer
type Blog = {
    title: string;
    content: string;
    author: string;
};

const blogMap: Record<string, Blog> = {
    "wind-farm-security": windFarmSecurity,
    "solar-surveillance": solarSurveillance,
    "ai-green-security": aiGreenSecurity,
    "solar-networking": solarNetworking,
    "fire-prevention-solar": firePreventionSolar,
    "security-sustainability-metrics": sustainabilityMetrics,
};

export async function generateStaticParams() {
    return Object.keys(blogMap).map((slug) => ({ slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {

    const handleScrollToBlogs = () => {
        const blogsElement = document.getElementById("blogs");
        if (blogsElement) {
            blogsElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const blog = blogMap[params.slug];

    if (!blog) return notFound();

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
            <article className="prose prose-invert max-w-none whitespace-pre-wrap text-lg opacity-90 text-justify">
                {blog.content}
            </article>
            <p className="!text-sm text-gray-500 dark:text-gray-400 mt-10 font-semibold">
                - {blog.author}
            </p>
        </main>
    );
}