"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        role: "Software Engineer",
        company: "Sentics",
        location: "Wolfsburg, Germany",
        period: "Oct 2024 — Present",
        tech: ["C++", "CMake", "GitHub Actions", "Conan", "JFrog", "MQTT", "Kafka", "OpenCV"],
        highlights: [
            "Architected a modular CI/CD pipeline using GitHub Actions, reusable workflows, and Conan — automating build, packaging, caching, and conditional artifact publishing to JFrog Artifactory.",
            "Engineered a networked vehicle-speed reduction module in C++ using MQTT, reducing braking response latency by 30ms under real-time constraints.",
            "Profiled and optimized a multi-camera sensor-fusion pipeline using OpenCV, eliminating memory leaks and improving runtime stability.",
            "Refactored the object-matching algorithm in a multi-perception system, improving matching accuracy and reducing execution overhead.",
            "Implemented multi-tenancy via configuration-driven environment isolation, enabling multi-environment deployment without code duplication.",
            "Reduced overall C++ codebase size by 5% through targeted refactoring and modularization.",
        ],
    },
    {
        role: "Software Intern",
        company: "TatvaSoft",
        location: "Ahmedabad, India",
        period: "Jun 2024 — Jul 2024",
        tech: ["REST", "PostgreSQL", "Angular", ".NET"],
        highlights: [
            "Built a virtual community platform for buying and selling books with full CRUD functionality.",
            "Developed REST APIs in .NET with PostgreSQL-backed persistence.",
            "Integrated Angular frontend components with backend services.",
        ],
    },
];

export default function Experience() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="experience" className="section-wrapper">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        02 — Experience
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Where I&apos;ve <span className="gradient-text">worked</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-16 space-y-12">
                    {/* Timeline line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline dot */}
                            <div className="timeline-dot" style={{ top: "8px" }} />

                            <div className="glass-card p-6 sm:p-8 project-card-shine">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <FaBriefcase className="text-accent flex-shrink-0" />
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                                {exp.role}
                                            </h3>
                                        </div>
                                        <p className="text-accent-secondary font-medium text-lg">
                                            {exp.company}
                                            <span className="text-text-muted font-normal text-sm ml-2">
                                                · {exp.location}
                                            </span>
                                        </p>
                                    </div>
                                    <span className="text-text-muted text-sm font-mono bg-[var(--surface)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="skill-badge text-xs">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-3">
                                    {exp.highlights.map((h, j) => (
                                        <li key={j} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                                            <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
