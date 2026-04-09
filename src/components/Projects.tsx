"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";

const projects = [
    {
        title: "Wanderlust",
        description:
            "A full-featured property rental and booking platform with listings, reviews, dashboards, and multi-filter search. Implemented PassportJS authentication, MVC architecture, Cloudinary media pipeline, and Render deployment.",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
        featured: true,
        highlights: [
            "Scalable MVC architecture with modular routing",
            "Cloudinary media pipeline integration",
            "PassportJS auth with session management",
        ],
    },
    {
        title: "Expert System for Video Games",
        description:
            "An intelligent expert system processing 165,000+ game entries with sub-0.5s decision latency. Built a fault-tolerant CSV ingestion pipeline achieving 100% parsing accuracy and 95% recommendation correctness.",
        tech: ["Python", "Rule-Based AI"],
        featured: true,
        highlights: [
            "165K+ entries with sub-500ms latency",
            "95% recommendation correctness",
            "Fault-tolerant data pipeline",
        ],
    },
    {
        title: "Real Estate UI Platform",
        description:
            "A modern real estate listing and browsing platform with an intuitive UI for property discovery.",
        tech: ["React", "Node.js"],
        featured: false,
    },
    {
        title: "Library Management System",
        description:
            "A robust library management system built with test-driven development principles.",
        tech: ["Java", "TDD"],
        featured: false,
    },
    {
        title: "Kafka JSON Streaming Tool",
        description:
            "A real-time JSON streaming tool leveraging Apache Kafka for high-throughput data processing.",
        tech: ["Python", "Kafka"],
        featured: false,
    },
];

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="projects" className="section-wrapper">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        03 — Projects
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Things I&apos;ve <span className="gradient-text">built</span>
                    </h2>
                </motion.div>

                {/* Featured Projects */}
                <div className="space-y-8 mb-16">
                    {projects
                        .filter((p) => p.featured)
                        .map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                                className="glass-card p-6 sm:p-8 project-card-shine group"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center">
                                            <HiOutlineFolder size={22} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-accent font-mono uppercase tracking-wider">
                                                Featured Project
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <button
                                            aria-label="GitHub"
                                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] hover:text-accent transition-all"
                                        >
                                            <FaGithub size={16} />
                                        </button>
                                        <button
                                            aria-label="External Link"
                                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] hover:text-accent transition-all"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-text-secondary leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {project.highlights && (
                                    <ul className="space-y-2 mb-5">
                                        {project.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="flex items-center gap-2 text-sm text-text-secondary"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="skill-badge text-xs">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                </div>

                {/* Other Projects Grid */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-xl font-bold text-center mb-8 text-text-secondary"
                >
                    Other Noteworthy Projects
                </motion.h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects
                        .filter((p) => !p.featured)
                        .map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                                className="glass-card p-6 group hover:border-[var(--accent)] flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <HiOutlineFolder size={28} className="text-accent" />
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaGithub
                                            size={16}
                                            className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-2">
                                    {project.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-text-muted font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
