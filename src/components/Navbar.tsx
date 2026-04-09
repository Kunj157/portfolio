"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "nav-glass shadow-lg shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="relative group">
                        <span className="text-xl font-bold tracking-tight">
                            <span className="gradient-text">K</span>
                            <span className="text-foreground">P</span>
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] group-hover:w-full transition-all duration-300" />
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                        ? "text-foreground"
                                        : "text-text-muted hover:text-foreground"
                                    }`}
                            >
                                {activeSection === link.href.replace("#", "") && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-[rgba(99,102,241,0.1)] rounded-lg border border-[rgba(99,102,241,0.2)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Resume CTA */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 cta-button text-sm !py-2.5 !px-5"
                    >
                        Resume
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-foreground p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-2xl pt-24 px-8"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-medium py-3 text-text-secondary hover:text-foreground transition-colors border-b border-[var(--border)]"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button text-center mt-4 text-lg"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
