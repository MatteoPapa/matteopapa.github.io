"use client";
import React from "react";
import { ShieldCheck, Trophy, Presentation, Target } from "lucide-react";
import CyberCarousel from "./CyberCarousel";
import Image from "next/image";
import config from "../../.././../next.config"

const highlights = [
    {
        title: "National Winner",
        description:
            "Won Italy’s top university-level cybersecurity CTF organized by CINI (40+ universities).",
        icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
    {
        title: "Best Defense Award",
        description:
            "For outstanding resilience and mitigation strategies during the competition.",
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    },
    {
        title: "Best Presentation Award",
        description:
            "For a clear, structured, and engaging final report and live presentation.",
        icon: <Presentation className="w-6 h-6 text-blue-400" />,
    },
    {
        title: "Top 10 – Jeopardy Competition",
        description:
            "Ranked in the top 10 out of 300+ participants in the local selection phase of Italy’s national cybersecurity training program.",
        icon: <Target className="w-6 h-6 text-purple-400" />,
    },
];

const CyberChallengeSection = () => {
    return (
        <section className="relative w-full px-8 py-8">
            <div className="relative container max-w-3xl mx-auto flex flex-col items-center">
                <div className="w-lg flex flex-col md:flex-row justify-center items-center gap-9">
                    <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex items-center justify-center">
                        <Image
                            src={config.basePath + "/img/ccit_logo.png"}
                            alt="Cyberchallenge Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 200px"
                            priority
                        />
                    </div>

                    <div className="flex flex-col items-center md:items-start w-md-[60%]">
                        <h2 className="text-3xl font-bold text-center md:text-left">
                            CyberChallenge Experience
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed pt-3 text-center md:text-left">
                            Together with Team Sapienza, I won the 2025 edition
                            of CyberChallenge.it — Italy&#39;s national
                            cybersecurity training program and CTF competition
                            for university students, organized by CINI.
                        </p>
                    </div>
                </div>

                <CyberCarousel />
                <div className="w-full space-y-6 pt-8 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-center"> Awards</h3>
                    <div className="flex flex-col gap-3">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 r pl-6 relative"
                            >
                                <div className="absolute -left-[14px] top-1">
                                    <div className="bg-background rounded-full p-1 shadow-md">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberChallengeSection;
