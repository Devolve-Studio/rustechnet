import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#0a0a0a] text-white">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="PKEL Logo" width={80} height={40} />
                    {/* Optional tagline if you want */}
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-2 text-md font-medium uppercase tracking-wider">
                    <Link href="/" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">Home</Link>
                    <Link href="/solution" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">Solutions</Link>
                    <Link href="/about" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">About Us</Link>
                    <Link href="/Events" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">Events</Link>
                    <Link href="/blog" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">Blog</Link>
                    <Link href="/contact" className="hover:text-[#ff931e] transform transition-all duration-500 hover-border">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}
