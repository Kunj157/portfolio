"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaEnvelope,
    FaLinkedinIn,
    FaGithub,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const contactLinks = [
    {
        icon: <FaEnvelope size={20} />,
        label: "Email",
        value: "kunjrp157@gmail.com",
        href: "mailto:kunjrp157@gmail.com",
        color: "#6366f1",
    },
    {
        icon: <FaPhoneAlt size={18} />,
        label: "Phone",
        value: "+49 15737901931",
        href: "tel:+4915737901931",
        color: "#a855f7",
    },
    {
        icon: <FaLinkedinIn size={20} />,
        label: "LinkedIn",
        value: "kunj-patel-65182b245",
        href: "https://linkedin.com/in/kunj-patel-65182b245",
        color: "#0077b5",
    },
    {
        icon: <FaGithub size={20} />,
        label: "GitHub",
        value: "github.com/Kunj157",
        href: "https://github.com/Kunj157",
        color: "#e8e8ed",
    },
    {
        icon: <FaMapMarkerAlt size={20} />,
        label: "Location",
        value: "Marburg, Hesse, Germany",
        href: "https://maps.google.com/?q=Marburg,Germany",
        color: "#06b6d4",
    },
];

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="contact" className="section-wrapper relative overflow-hidden">
            {/* Background orb */}
            <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px] pointer-events-none" />

            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        06 — Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                        Let&apos;s <span className="gradient-text">connect</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
                        I&apos;m always open to discussing new opportunities, interesting
                        projects, or just having a conversation about technology.
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="max-w-3xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="glass-card p-5 flex items-center gap-4 group cursor-pointer"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: `${link.color}15`,
                                        color: link.color,
                                    }}
                                >
                                    {link.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-text-muted text-xs font-medium uppercase tracking-wider">
                                        {link.label}
                                    </p>
                                    <p className="text-foreground font-medium truncate">
                                        {link.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Big CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center"
                    >
                        <a
                            href="mailto:kunjrp157@gmail.com"
                            className="cta-button inline-flex items-center gap-3 text-lg !px-10 !py-4"
                        >
                            <HiPaperAirplane size={20} className="-rotate-12" />
                            Say Hello
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
