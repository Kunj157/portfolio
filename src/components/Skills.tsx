"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiGithubactions,
    SiApachekafka,
    SiLinux,
    SiHtml5,
    SiCss,
    SiAngular,
    SiOpencv,
    SiGit,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skillCategories = [
    {
        title: "Languages",
        color: "#6366f1",
        skills: [
            { name: "C++", icon: <SiCplusplus size={24} /> },
            { name: "Python", icon: <SiPython size={24} /> },
            { name: "JavaScript", icon: <SiJavascript size={24} /> },
            { name: "TypeScript", icon: <SiTypescript size={24} /> },
        ],
    },
    {
        title: "Frontend",
        color: "#a855f7",
        skills: [
            { name: "React", icon: <SiReact size={24} /> },
            { name: "Angular", icon: <SiAngular size={24} /> },
            { name: "HTML5", icon: <SiHtml5 size={24} /> },
            { name: "CSS3", icon: <SiCss size={24} /> },
        ],
    },
    {
        title: "Backend",
        color: "#06b6d4",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs size={24} /> },
            { name: "Express", icon: <SiExpress size={24} /> },
            { name: "Flask", icon: <SiFlask size={24} /> },
        ],
    },
    {
        title: "Databases",
        color: "#f59e0b",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
            { name: "MongoDB", icon: <SiMongodb size={24} /> },
            { name: "Redis", icon: <SiRedis size={24} /> },
        ],
    },
    {
        title: "DevOps & Tools",
        color: "#10b981",
        skills: [
            { name: "Docker", icon: <SiDocker size={24} /> },
            { name: "GitHub Actions", icon: <SiGithubactions size={24} /> },
            { name: "Kafka", icon: <SiApachekafka size={24} /> },
            { name: "Linux", icon: <SiLinux size={24} /> },
            { name: "Git", icon: <SiGit size={24} /> },
            { name: "OpenCV", icon: <SiOpencv size={24} /> },
        ],
    },
];

export default function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="skills" className="section-wrapper">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase">
                        04 — Skills
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        My <span className="gradient-text">toolkit</span>
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="glass-card p-6 group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-1 h-8 rounded-full"
                                    style={{ background: category.color }}
                                />
                                <h3 className="text-lg font-bold text-foreground">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, j) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.15 * i + 0.05 * j }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(99,102,241,0.08)] border border-transparent hover:border-[rgba(99,102,241,0.2)] transition-all duration-300 cursor-default group/skill"
                                    >
                                        <span
                                            className="text-text-muted group-hover/skill:scale-110 transition-transform duration-300"
                                            style={{ color: category.color }}
                                        >
                                            {skill.icon}
                                        </span>
                                        <span className="text-sm font-medium text-text-secondary group-hover/skill:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
