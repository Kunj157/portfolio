"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

const roles = [
    "Software Engineer",
    "C++ Developer",
    "Full-Stack Developer",
    "DevOps Enthusiast",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.slice(0, displayText.length - 1)
                            : currentRole.slice(0, displayText.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Ambient Orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-50" />

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] mb-8"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    <span className="text-sm text-text-secondary font-medium">
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
                >
                    <span className="block text-foreground">Hi, I&apos;m</span>
                    <span className="block gradient-text mt-2">Kunj Patel</span>
                </motion.h1>

                {/* Typewriter Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <span className="text-lg sm:text-xl md:text-2xl font-mono text-text-muted">
                        {">"}{" "}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl font-mono text-accent-secondary">
                        {displayText}
                    </span>
                    <span className="w-[3px] h-7 bg-[var(--accent)] animate-pulse" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Building high-performance systems at the intersection of{" "}
                    <span className="text-accent-tertiary font-medium">C++</span>,{" "}
                    <span className="text-accent font-medium">real-time computing</span>, and{" "}
                    <span className="text-accent-secondary font-medium">modern web technologies</span>.
                    Currently engineering at{" "}
                    <span className="text-foreground font-semibold">Sentics</span> in Germany.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <a href="#contact" className="cta-button">
                        Get in Touch
                    </a>
                    <a href="#projects" className="cta-button-outline">
                        View Projects
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex items-center justify-center gap-4"
                >
                    {[
                        { icon: <FaGithub size={20} />, href: "https://github.com/Kunj157", label: "GitHub" },
                        {
                            icon: <FaLinkedinIn size={20} />,
                            href: "https://linkedin.com/in/kunj-patel-65182b245",
                            label: "LinkedIn",
                        },
                        { icon: <FaEnvelope size={20} />, href: "mailto:kunjrp157@gmail.com", label: "Email" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] text-text-muted hover:text-foreground hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.08)] transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <HiArrowDown size={20} />
                </motion.div>
            </motion.a>
        </section>
    );
}
