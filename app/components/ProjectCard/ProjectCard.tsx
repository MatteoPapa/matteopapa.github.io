"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  githubUrl: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  skills,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInteraction = () => {
    // Toggle on tap for mobile OR hover for desktop
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-full rounded-2xl shadow-lg"
      onMouseEnter={handleInteraction}
      onMouseLeave={handleLeave}
      onClick={handleInteraction} // mobile tap
    >
      {/* Image with blur animation */}
      <motion.div
        animate={{
          filter: isHovered ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full h-72"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* Overlay with controlled maxHeight */}
      <motion.div
        animate={{
          maxHeight: isHovered ? "300px" : "56px",
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md overflow-hidden"
      >
        <div className="p-3 flex flex-col gap-1">
          <span className="font-bold text-3xl mb-1">{title}</span>
          <div className="text-white font-bold text-xs flex flex-row gap-2 flex-wrap">
            {skills.map((skill) => (
              <div className="bg-gray-700 p-1 rounded" key={skill}>
                {skill}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-2">{description}</p>
          <Button variant="outline" asChild>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={30} />
              View on GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
