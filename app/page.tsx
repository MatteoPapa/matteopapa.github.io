"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HomeSections/HeroSection/HeroSection";
import EducationSection from "./components/HomeSections/EducationSection/EducationSection";
import CyberChallengeSection from "./components/HomeSections/CyberChallengeSection/CyberChallengeSection";
import ProjectsSection from "./components/HomeSections/ProjectsSection/ProjectsSection";
import WriteupsSection from "./components/HomeSections/WriteupsSection/WriteupsSection";
import SkillsSection from "./components/HomeSections/SkillsSection/SkillsSection";
import ContactMeSection from "./components/HomeSections/ContactMeSection/ContactMeSection";
import FadeInSection from "./components/FadeInSection/FadeInSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center gap-0 pt-32"
    >
      <HeroSection />
      <FadeInSection><EducationSection /></FadeInSection>
      <FadeInSection><CyberChallengeSection /></FadeInSection>
      <FadeInSection><ProjectsSection /></FadeInSection>
      <FadeInSection><WriteupsSection /></FadeInSection>
      <FadeInSection><SkillsSection /></FadeInSection>
      <FadeInSection><ContactMeSection /></FadeInSection>
    </motion.div>
  );
}
