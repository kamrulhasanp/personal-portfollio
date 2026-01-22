'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import ButtonWithDesign from "../common/ButtonWithDesign";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("Home")

    // Detect scroll to change navbar styling (e.g., smaller padding or more blur)
    useEffect(() => {
        const handleScrollBg = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScrollBg);
        return () => window.removeEventListener('scroll', handleScrollBg);
    }, []);

    const scrollToSection = (e, href) => {
        // Only apply logic if it's an internal hash link
        if (href.startsWith("#")) {
            e.preventDefault(); // Stop the URL from changing to /#section

            // 1. Handle "Home" or "Logo" click (Scroll to top)
            if (href === "/" || href === "#home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                setIsOpen(false);
                return;
            }

            // 2. Handle Hash Links (#about, #services, etc.)
            if (href.startsWith("#")) {
                const targetId = href.replace("#", "");
                const elem = document.getElementById(targetId);

                if (elem) {
                    const offset = 80; // Navbar height offset
                    const elementPosition = elem.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    setIsOpen(false);
                }
            }
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Papers", href: "#papers" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md py-2"
            : "bg-white/50 backdrop-blur-md py-4"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center h-16">

                    {/* Left: Logo with Hover Effect */}
                    <div className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
                        <Link href="/" onClick={(e) => scrollToSection(e, "/")}>
                            <Image
                                alt="Kamrul Hasan"
                                src="/logo/logo_kamrul.png"
                                height={45}
                                width={140}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Center: Desktop Links with Modern Underline Effect */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.name}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="relative group px-4 py-2 text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300"
                            >
                                <span>{link.name}</span>
                                {/* Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </div>

                    {/* Right: CTA Button */}
                    <div className="hidden md:block">
                        <ButtonWithDesign />
                    </div>

                    {/* Mobile Menu Button - Hamburger with Animation */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-around overflow-hidden">
                                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Smooth Slide & Fade */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl text-lg font-bold transition-all border border-transparent hover:border-blue-100"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-4 px-2">
                        <ButtonWithDesign className="w-full justify-center py-4 text-lg" />
                    </div>
                </div>
            </div>

        </nav>
    )
}