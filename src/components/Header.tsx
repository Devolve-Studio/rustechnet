import Image from "next/image";
import Link from "next/link";

export default function Header() {

    const pages = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="bg-[#0a0a0a] text-white">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="PKEL Logo" width={80} height={40} />
                    {/* Optional tagline if you want */}
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-2 text-md font-medium uppercase tracking-wider">
                    {pages.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="py-4 hover-border-once">
                            <div className="border top"></div>
                            <div
                                className="hover:!text-[#ff931e] !text-white  transform transition-all duration-300 px-4">
                                {link.name}
                            </div>
                            <div className="border bottom"></div>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
