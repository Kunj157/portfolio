"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

const education = [
    {
        degree: "M.S. in Computer Science",
        school: "Marburg University",
        location: "Germany",
        icon: <HiAcademicCap size={24} />,
        color: "#6366f1",
    },
    {
        degree: "B.E. in Computer Engineering",
        school: "L.D. College of Engineering",
        location: "India",
        icon: <FaGraduationCap size={22} />,
        color: "#a855f7",
    },
];

const certifications = [
    {
        title: "Google Cloud Foundations",
        subtitle: "Networking & Security",
        issuer: "Google Cloud",
    },
    {
        title: "Introduction to Generative AI",
        subtitle: "",
        issuer: "Google Cloud",
    },
    {
        title: "Smart India Hackathon",
        subtitle: "Participant",
        issuer: "Government of India",
    },
];

export default function Education() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="education" className="section-wrapper">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        05 — Education & Certifications
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Learning <span className="gradient-text">journey</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                            <FaGraduationCap className="text-accent" />
                            Education
                        </h3>
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                                className="glass-card p-6 flex items-start gap-5"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${edu.color}15`, color: edu.color }}
                                >
                                    {edu.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-accent-secondary font-medium">
                                        {edu.school}
                                    </p>
                                    <p className="text-text-muted text-sm mt-1">
                                        {edu.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                            <FaCertificate className="text-accent" />
                            Certifications
                        </h3>
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                                className="glass-card p-6 flex items-start gap-5"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[rgba(6,182,212,0.1)] flex items-center justify-center flex-shrink-0 text-accent-tertiary">
                                    <HiBadgeCheck size={26} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">
                                        {cert.title}
                                    </h4>
                                    {cert.subtitle && (
                                        <p className="text-text-secondary text-sm">
                                            {cert.subtitle}
                                        </p>
                                    )}
                                    <p className="text-text-muted text-sm mt-1">{cert.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
