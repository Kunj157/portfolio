"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const highlights = [
    { icon: <FaBriefcase />, label: "Currently at", value: "Sentics — ML / Computer Vision" },
    { icon: <FaGraduationCap />, label: "Studying", value: "MSc CS — Philipps University of Marburg" },
    { icon: <FaMapMarkerAlt />, label: "Based in", value: "Giessen, Hesse, Germany" },
    { icon: <FaCode />, label: "Focus", value: "Computer Vision, Perception & Real-time C++" },
];

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="section-wrapper">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        01 — About
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                        Get to know <span className="gradient-text">me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-3 space-y-5"
                    >
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I&apos;m a <span className="text-foreground font-medium">Software Engineer</span> with
                            two years of industry experience in Python, C++, machine learning and real-time
                            perception, currently a working student in ML / Computer Vision at{" "}
                            <span className="text-accent font-medium">Sentics</span> in Wolfsburg, Germany.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            At Sentics I fine-tune YOLO detection models (mAP50-95 from 0.611 to 0.698 on
                            previously unseen cameras), build automated training and evaluation pipelines, and
                            write simulation and replay tools for multi-camera sensor fusion. Before that I
                            optimised C++/OpenCV tracking pipelines and a low-latency MQTT braking module.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I&apos;m pursuing an <span className="text-foreground font-medium">MSc in Computer
                                Science</span> at Philipps University of Marburg. Outside work I build open-source
                            tools: perception regression testing, a flight recorder for AI coding agents, an AI
                            SRE platform and a Qt/C++ industrial monitoring app.
                        </p>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-2 space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                className="glass-card p-5 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-accent flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-text-muted text-sm">{item.label}</p>
                                    <p className="text-foreground font-medium">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
