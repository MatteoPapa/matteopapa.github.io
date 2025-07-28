"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import config from "../../next.config";
import FadeInCard from "../components/ProjectCard/FadeInCard";
import Lottie from "lottie-react";
import animationData from "../../public/animations/coding.json";
import { Separator } from "@/components/ui/separator";

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
        title: "AYF",
        description:
            "A real-time multiplayer party game where players eliminate each other through stealth-based tasks. Built with a React frontend, Node.js backend, and enhanced with WebSockets, MongoDB, Firebase, and Cloudinary for live interactions, media, and authentication.",
        imageUrl: "/img/projects/assassin.png",
        githubUrl: "https://github.com/MatteoPapa/AssassinateYourFriends",
        skills: [
            "React",
            "Node.js",
            "Express",
            "WebSockets",
            "MongoDB",
            "Firebase",
            "Cloudinary",
            "JWT",
        ],
    },
    {
        title: "Jobify",
        description:
            "A Node.js web app that connects employers and job seekers with job listings, real-time chat via RabbitMQ, and Google OAuth-based authentication. Includes Dockerized services and Google API integration for resumes and interview scheduling.",
        imageUrl: "/img/projects/jobify.png",
        githubUrl: "https://github.com/matteo-cutroni/progettordc",
        skills: [
            "Node.js",
            "Express",
            "Google OAuth",
            "Passport.js",
            "Docker",
            "RabbitMQ",
            "Mocha",
            "Google Drive API",
            "Google Calendar API",
            "EJS",
        ],
    },
    {
        title: "TennisScore",
        description:
            "A ZeppOS smartwatch app that tracks tennis scores with intuitive UI for match management. Supports points, games, sets, tiebreaks, and persistent storage with reset controls—optimized for small screens.",
        imageUrl: "/img/projects/tennisscore.png",
        githubUrl: "https://github.com/MatteoPapa/TennisScore",
        skills: [
            "JavaScript",
            "Zeus CLI",
            "ZeppOS SDK",
            "UI Widgets",
            "Wearable UX",
        ],
    },
    {
        title: "TreeGraphBuilder.Js",
        description:
            "An interactive JavaScript tool for building hierarchical trees from CSV data, featuring real-time layout customization, CSV parsing with PapaParse, and dynamic graph rendering via vis.js.",
        imageUrl: "/img/projects/treegraph.png",
        githubUrl: "https://github.com/MatteoPapa/TreeGraphBuilder.Js",
        skills: [
            "JavaScript",
            "HTML",
            "CSS",
            "PapaParse",
            "vis.js",
            "CSV Parsing",
            "Data Visualization",
            "UI Design",
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

    // TODO: More Projects Here
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
            <div className="flex flex-col md:flex-row mb-4 w-full max-w-6xl items-center">
                {/* Lottie background container */}
                {/* Foreground text block */}
                <div className="md:w-1/3 flex justify-center items-center">
                    <Lottie
                        animationData={animationData}
                        style={{ width: 400 }}
                    />
                </div>
                <div className="w-full h-full px-4 rounded-lg items-center justify-center text-center md:text-start">
                    <h1 className="text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-muted-foreground text-lg">
                        A collection of projects spanning full-stack web
                        development, cybersecurity, systems engineering and
                        more.
                    </p>
                </div>{" "}
            </div>
            <Separator className="z-20 mb-6 max-w-6xl" />

            {/* Grid of project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {projects.map((project) => (
                    <FadeInCard key={project.title}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={config.basePath + project.imageUrl}
                            githubUrl={project.githubUrl}
                            skills={project.skills}
                        />
                    </FadeInCard>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectPage;
