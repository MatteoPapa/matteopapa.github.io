import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Code2,
    ShieldCheck,
    Lock,
    Cpu,
    Server,
    Brain,
    BookOpenCheck,
} from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Web Development",
        items: [
            "HTML, CSS, JavaScript",
            "React, Next.js, Vite, React Native",
            "Tailwind CSS, ShadCN/UI, Material UI, Bootstrap",
            "Node.js, PHP, Flask",
            "REST APIs, SSR, SPA",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Cybersecurity & Ethical Hacking",
        items: [
            "Ethical Hacking, Red Teaming, Security Governance",
            "Network Defense, Vulnerability Scanning (Nmap)",
            "Malware Analysis, Digital Forensics (IDA, GDB)",
            "Binary Exploitation, pwntools",
            "Firewall Configuration (iptables)",
        ],
    },
    {
        icon: Lock,
        title: "Cryptography & Blockchain",
        items: [
            "Encryption, Hash Functions, Secure Protocols",
            "Blockchain Security, Smart Contracts",
            "Applied Cryptography & Cryptanalysis",
        ],
    },
    {
        icon: Cpu,
        title: "Programming Languages",
        items: [
            "Python, Java, PHP, Ruby, JavaScript, C#",
            "C, C++",
            ".NET, Flask, Node.js",
            "Object-Oriented & Functional Programming",
        ],
    },
    {
        icon: Server,
        title: "Systems & Tooling",
        items: [
            "Linux, UNIX (Kali, Ubuntu)",
            "Docker, CLI Tools",
            "GDB, IDA Pro, Git, CI/CD",
        ],
    },
    {
        icon: Brain,
        title: "Software Engineering & Design",
        items: [
            "Secure Development, Agile Methods",
            "Software Architecture & Patterns",
            "Distributed Systems, Project Planning",
            "Statistical Analysis & Risk Management",
        ],
    },
    {
        icon: BookOpenCheck,
        title: "Foundations & Theoretical Knowledge",
        items: [
            "Algorithms, Data Structures, Automata",
            "Calculus, Probability, Linear Algebra",
            "Operational Research, Systems Theory",
            "Networks, Databases, Cyber Law",
        ],
    },
];

const SkillsSection = () => {
    return (
        <section className="relative w-full px-8 py-8 bg-black/60 backdrop-blur-md">
            <div className="relative container max-w-6xl mx-auto py-4 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                <p className="w-10/12 py-3 pb-4 text-lg leading-relaxed text-center text-muted-foreground">
                    A snapshot of the tools, technologies, and techniques I
                    worked with, ranging from software engineering to
                    cybersecurity and more.
                </p>
                <div className="flex flex-col w-full max-w-3xl gap-8 justify-center items-center">
                    <div className="w-full md:w-2/3 flex justify-center">
                        <Accordion
                            type="multiple"
                            className="w-full text-muted-foreground"
                        >
                            {skills.map((group, index) => {
                                const Icon = group.icon;
                                return (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                    >
                                        <AccordionTrigger className="hover:no-underline hover:text-white">
                                            <Icon className="w-4 h-4 mr-2 text-white" />
                                            {group.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="w-full flex justify-center">
                                                <ul className="list-disc list-inside space-y-2">
                                                    {group.items.map(
                                                        (item, j) => (
                                                            <li key={j}>
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
