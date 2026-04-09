"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative border-t border-[var(--border)] py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div>
                        <a href="#" className="text-lg font-bold">
                            <span className="gradient-text">Kunj</span>
                            <span className="text-foreground"> Patel</span>
                        </a>
                        <p className="text-text-muted text-sm mt-1">
                            Software Engineer · Germany
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        {[
                            {
                                icon: <FaGithub size={18} />,
                                href: "https://github.com/Kunj157",
                                label: "GitHub",
                            },
                            {
                                icon: <FaLinkedinIn size={18} />,
                                href: "https://linkedin.com/in/kunj-patel-65182b245",
                                label: "LinkedIn",
                            },
                            {
                                icon: <FaEnvelope size={18} />,
                                href: "mailto:kunjrp157@gmail.com",
                                label: "Email",
                            },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-foreground hover:bg-[rgba(99,102,241,0.08)] border border-transparent hover:border-[var(--border)] transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
                    <p className="text-text-muted text-sm">
                        Designed & Built by{" "}
                        <span className="text-accent font-medium">Kunj Patel</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
