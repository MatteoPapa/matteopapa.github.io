"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import config from "../../next.config"

const projects = [
    {
        title: "Cannavaro",
        description:
            "A tactical VM manager for CTF defense teams, automating SSH, Git, and Docker tasks with speed and clarity.",
        imageUrl: "/img/projects/cannavaro.png",
        githubUrl: "https://github.com/MatteoPapa/Cannavaro",
        skills: [
            "Python",
            "Flask",
            "React",
            "Vite.js",
            "Docker",
            "Material UI",
            "SSH",
            "Git",
            "YAML",
        ],
    },
    {
        title: "AngelPit",
        description:
            "A regex-driven WAF built on mitmproxy, enabling real-time HTTPS inspection, header filtering, and automated PCAP logging for security research.",
        imageUrl: "/img/projects/angelpit.png",
        githubUrl: "https://github.com/MatteoPapa/AngelPit",
        skills: [
            "Python",
            "mitmproxy",
            "Regex",
            "TLS Interception",
            "PCAP",
            "HTTP",
            "HTTPS",
            "WAF",
        ],
    },
    {
        title: "QuoridorX",
        description:
            "A PyQt6-based Quoridor game featuring AI opponents powered by Minimax with alpha-beta pruning and intelligent pathfinding.",
        imageUrl: "/img/projects/quoridorx.png",
        githubUrl: "https://github.com/MatteoPapa/QuoridorX",
        skills: [
            "Python",
            "PyQt6",
            "Minimax",
            "Alpha-Beta Pruning",
            "BFS",
            "DFS",
            "QGraphicsView",
        ],
    },
    {
        title: "Totti",
        description:
            "A high-performance flag submission UI for attack-defense CTFs, built with React, Vite.js, and ECharts to visualize real-time exploit and team performance.",
        imageUrl: "/img/projects/totti.png",
        githubUrl: "https://github.com/TheRomanXpl0it/TOTTI-2",
        skills: [
            "React",
            "Vite.js",
            "Material UI",
            "ECharts",
            "X-Charts",
            "Docker",
        ],
    },
    {
        title: "ManageMyYoutube",
        description:
            "A Ruby on Rails web application that connects YouTube content creators with channel managers, enabling collaboration, analytics, and YouTube/Calendar API integration.",
        imageUrl: "/img/projects/managemyyoutube.png",
        githubUrl: "https://github.com/MatteoPapa/ManageMyYoutube",
        skills: [
            "Ruby",
            "Ruby on Rails",
            "OAuth 2.0",
            "YouTube API",
            "Google Calendar API",
            "PostgreSQL",
            "Docker",
            "REST API",
        ],
    },
    {
        title: "StudyPal",
        description:
            "A PHP-based web platform that helps students find compatible study partners through profile matching, post sharing, and search filtering—built as a social-style application with custom frontend and MySQL database integration.",
        imageUrl: "/img/projects/studypal.png",
        githubUrl: "https://github.com/MatteoPapa/StudyPal",
        skills: [
            "PHP",
            "MySQLi",
            "JavaScript",
            "jQuery",
            "AJAX",
            "HTML",
            "CSS",
            "Bootstrap",
        ],
    },

    // Add more projects here
];

const ProjectPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full flex flex-col justify-center items-center pt-32 px-4 pb-16"
        >
            {/* Header */}
            <div className="max-w-3xl text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-muted-foreground text-lg">
                    A collection of projects spanning full-stack web
                    development, cybersecurity, systems engineering and more.
                </p>
            </div>

            {/* Grid of project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageUrl={config.basePath + project.imageUrl}
                        githubUrl={project.githubUrl}
                        skills={project.skills}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectPage;
