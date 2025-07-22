import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsFan from "./ProjectsFan";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
    return (
        <section className="relative w-full px-8 py-8 bg-black/60 backdrop-blur-md">
            <div className="relative not-odd:z-10 container max-w-6xl mx-auto py-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold">Projects</h2>
                <p className="w-10/12 py-3 pb-4 text-lg leading-relaxed text-center text-muted-foreground">
                    A curated selection of personal projects I&apos;ve developed — showcasing my technical growth, problem-solving skills,
                    and passion for cybersecurity and software engineering.
                </p>

                <ProjectsFan />
                <Link href="/projects" className="mb-6">
                    <Button variant="outline" className="rounded-lg">
                        View All Projects
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>

                <div className="grid gap-6 md:grid-cols-2 w-full"></div>
            </div>
        </section>
    );
};

export default ProjectsSection;
