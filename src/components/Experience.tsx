"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        role: "Working Student – ML / Computer Vision",
        company: "Sentics",
        location: "Wolfsburg, Germany",
        period: "Feb 2026 — Present",
        tech: ["Python", "PyTorch", "YOLO", "ONNX", "OpenCV", "Sensor Fusion"],
        highlights: [
            "Fine-tuned computer vision models with PyTorch and YOLO, improving mAP50-95 from 0.611 to 0.698 across 1,677 images from five previously unseen cameras.",
            "Built an automated ML pipeline covering data collection, auto-labelling, dataset preparation, splitting, training and evaluation for reproducible experiments.",
            "Implemented Python simulation and replay tools to evaluate perception and sensor-fusion changes on recorded multi-camera and IMU data, including synthetic scenarios with realistic timing variations.",
            "Validated deployment consistency by comparing PyTorch and ONNX inference outputs across 40 test images.",
            "Investigated perception failures in customer-deployed systems from camera recordings, sensor data and tracking behaviour, documenting root causes for the engineering team.",
        ],
    },
    {
        role: "Software Engineer (Freelance, Full-Time)",
        company: "Sentics",
        location: "Remote (India)",
        period: "Oct 2024 — Sep 2025",
        tech: ["C++", "Python", "OpenCV", "Kalman Filters", "MQTT", "CMake", "GitHub Actions", "Conan"],
        highlights: [
            "Optimised multi-camera object detection and association pipelines with Python, C++, OpenCV and Kalman filters, improving object-matching consistency in real-time perception.",
            "Developed object-tracking and matching algorithms that keep consistent object identities across multiple camera streams.",
            "Engineered a C++/MQTT vehicle-speed reduction module for perception-to-control communication, reducing braking latency by 30 ms.",
            "Refactored the C++/OpenCV sensor-fusion pipeline, reducing codebase size by 5% while improving maintainability and execution efficiency.",
            "Built a modular CI/CD pipeline with GitHub Actions, reusable workflows and Conan, automating build, packaging, caching and artifact publishing to JFrog Artifactory.",
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
