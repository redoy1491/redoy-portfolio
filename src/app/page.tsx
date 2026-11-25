"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import HeroBento from "@/components/HeroBento";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ResearchSection from "@/components/ResearchSection";
import CredentialsSection, {
  EducationSection,
} from "@/components/CredentialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactFooter from "@/components/ContactFooter";
import VideoModal from "@/components/VideoModal";
import CVModal from "@/components/CVModal";

export default function HomePage() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Calm Liquid Water Ambient Backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="water-orb-a absolute -top-24 -left-20 h-[440px] w-[440px] rounded-full bg-sky-400/35 dark:bg-sky-500/30 blur-[95px]" />
        <div className="water-orb-b absolute top-[26%] -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/30 dark:bg-teal-400/25 blur-[100px]" />
        <div className="water-orb-c absolute bottom-[-8%] left-[20%] h-[460px] w-[520px] rounded-full bg-blue-400/30 dark:bg-cyan-400/25 blur-[105px]" />
      </div>

      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main>
        <HeroBento
          onOpenVideo={() => setVideoOpen(true)}
          onOpenCV={() => setCvOpen(true)}
        />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <ResearchSection />
        <EducationSection />
        <ProjectsSection />
        <CredentialsSection
          onOpenVideo={() => setVideoOpen(true)}
          onOpenCV={() => setCvOpen(true)}
        />
        <ContactFooter />
      </main>

      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenVideo={() => setVideoOpen(true)}
        onOpenCV={() => setCvOpen(true)}
      />

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
