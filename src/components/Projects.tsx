"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";

type Project = {
    title: string;
    description: string;
    tech: string[];
    featured: boolean;
    highlights?: string[];
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        title: "PerceptionGuard",
        description:
            "CI-gated regression testing for perception models. Scenario-aware evaluation on BDD100K correlates YOLOv8 accuracy with weather, lighting and road scenes, flags safety-relevant coverage gaps, and blocks deployment when category-level mAP drops below baseline.",
        tech: ["Python", "YOLOv8", "ONNX", "OpenVINO", "BDD100K", "GitHub Actions", "Docker", "SQLite", "Streamlit"],
        featured: true,
        highlights: [
            "Per-scenario mAP instead of a single aggregate score",
            "Dataset coverage analysis surfaces underrepresented scenarios",
            "GitHub Actions gate blocks merges on accuracy regressions",
        ],
        github: "https://github.com/Kunj157/PerceptionGuard",
    },
    {
        title: "FinBrain",
        description:
            "AI-powered personal finance dashboard with bank and statement import (including German bank PDFs), ML transaction categorisation, budgets, goals, forecasting and an LLM financial advisor.",
        tech: ["Python", "FastAPI", "XLM-RoBERTa", "Scikit-learn", "PostgreSQL", "React", "TypeScript", "Three.js"],
        featured: true,
        highlights: [
            "Fine-tuned XLM-RoBERTa: 86.5% test accuracy across 10 categories",
            "Keyword fallback keeps categorisation reliable without the model",
            "Cash-flow forecasting with Prophet, ARIMA and linear regression",
        ],
        github: "https://github.com/Kunj157/FinBrain",
        live: "https://kunj157.github.io/FinBrain/",
    },
    {
        title: "Wyrdline",
        description:
            "Causal flight recorder and rewind engine for AI coding agents. Runs an agent in a sandboxed cell, records what it intended (hooks, MCP, OpenTelemetry) and what it actually did (eBPF), checkpoints every tool call, and lets you rewind, fork and replay sessions.",
        tech: ["Rust", "eBPF", "WebAssembly", "TypeScript", "PostgreSQL", "Docker"],
        featured: true,
        highlights: [
            "Correlates every kernel effect with the tool call that caused it",
            "Flags intent–effect divergence, e.g. \"tests pass\" with no test run",
            "Signed .wyrd bundles replay offline in the browser via Wasm",
        ],
        github: "https://github.com/Kunj157/wyrdline",
        live: "https://kunj157.github.io/wyrdline/",
    },
    {
        title: "OpsPilot",
        description:
            "AI-assisted SRE platform that detects incidents, investigates them with LangGraph agents and ML, proposes evidence-backed remediation, runs it only after human approval, verifies recovery and writes the postmortem.",
        tech: ["Python", "LangGraph", "TypeScript", "Kubernetes", "Terraform", "Keycloak"],
        featured: true,
        highlights: [
            "Full incident loop on a Kubernetes demo shop",
            "Human-approved, allow-listed rollbacks with audit log",
            "Evaluations dashboard: detection delay, MTTA, MTTR, agent cost",
        ],
        github: "https://github.com/Kunj157/opspilot",
        live: "https://kunj157.github.io/opspilot/",
    },
    {
        title: "ForgeSight",
        description:
            "Qt/C++ desktop platform for real-time industrial device monitoring: live dashboards, a 3D plant floor, alarm rules and historical analytics over MQTT-fed sensor data.",
        tech: ["C++20", "Qt 6", "QML", "MQTT", "PostgreSQL", "SQLite", "CMake", "Docker"],
        featured: true,
        highlights: [
            "Load-tested to 600 devices (~1,800 msg/s) with sub-second p95 ingestion",
            "Offline cache queues alarm acks and flushes them on reconnect",
            "ctest suite, AddressSanitizer CI job, AppImage releases",
        ],
        github: "https://github.com/Kunj157/ForgeSight",
        live: "https://kunj157.github.io/ForgeSight/",
    },
    {
        title: "Wanderlust",
        description:
            "Property rental and booking platform with listings, reviews and multi-filter search. MVC architecture, PassportJS authentication and a Cloudinary media pipeline.",
        tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
        featured: false,
        github: "https://github.com/Kunj157/Wanderlust",
    },
    {
        title: "Play-Smart: Video Game Expert System",
        description:
            "Rule-based expert system that recommends video games from a dataset of 16,000+ titles, with a GUI for filtering by platform, genre and more.",
        tech: ["Python", "Rule-Based AI"],
        featured: false,
        github: "https://github.com/Kunj157/rule-based-game-recommendation",
    },
    {
        title: "Travel Accommodation UI",
        description:
            "React web app for finding and booking unique accommodations, with search by name or location and category filtering.",
        tech: ["React", "TypeScript"],
        featured: false,
        github: "https://github.com/Kunj157/travel-vibe-website",
    },
    {
        title: "Library Management System",
        description:
            "Library management kata solved with test-driven development, built through small incremental commits.",
        tech: ["TDD"],
        featured: false,
        github: "https://github.com/Kunj157/Library-Management-System",
    },
    {
        title: "Weather App",
        description:
            "Responsive weather app with automatic location detection and city search, powered by the OpenWeatherMap API.",
        tech: ["JavaScript", "OpenWeatherMap API"],
        featured: false,
        github: "https://github.com/Kunj157/Weather-App",
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
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} on GitHub`}
                                                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] hover:text-accent transition-all"
                                            >
                                                <FaGithub size={16} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live site`}
                                                className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] hover:text-accent transition-all"
                                            >
                                                <FaExternalLinkAlt size={14} />
                                            </a>
                                        )}
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
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} on GitHub`}
                                            className="text-text-muted hover:text-accent transition-colors"
                                        >
                                            <FaGithub size={16} />
                                        </a>
                                    )}
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
