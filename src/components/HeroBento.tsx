"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Mail, PlayCircle } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface HeroBentoProps {
  onOpenVideo: () => void;
  onOpenCV: () => void;
}

const ROLES = [
  "Medical AI Researcher · DIU NLP Lab",
  "Final-Year CSE Student at DIU",
  "Machine Learning & Computer Vision",
  "International AI Builders Finalist",
];

export default function HeroBento({ onOpenVideo, onOpenCV }: HeroBentoProps) {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <p className="font-mono text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
              Hello, I’m
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-950 dark:text-white">
              {PROFILE.name}
            </h1>

            <div className="mt-3 min-h-[28px] flex items-center justify-center lg:justify-start">
              <span className="font-mono text-sm sm:text-base lg:text-lg font-medium text-teal-600 dark:text-teal-300">
                {ROLES[roleIdx]}
              </span>
              <span className="ml-1 inline-block h-4 sm:h-5 w-0.5 bg-sky-400 animate-pulse" />
            </div>

            <p className="mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {PROFILE.summary}
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-2.5 sm:py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all hover:brightness-105"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="glass-pill inline-flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:border-sky-400/60 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-teal-400" />
                Show CV
              </button>

              <a
                href="#contact"
                className="glass-pill inline-flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:border-sky-400/60"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                Get In Touch
              </a>

              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:text-sky-500 dark:hover:text-cyan-300 cursor-pointer"
              >
                <PlayCircle className="h-4 w-4 text-teal-400" />
                Video Resume
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Portrait with subtle Orbit Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative p-4">
              {/* Subtle orbiting ring */}
              <div className="orbit-ring pointer-events-none absolute inset-0 rounded-full border border-sky-400/20 dark:border-sky-400/15">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_3px_rgba(56,189,248,0.65)]" />
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.55)]" />
              </div>

              <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/25 via-teal-400/15 to-transparent blur-2xl" />
              <div className="clean-card relative w-60 sm:w-72 md:w-80 rounded-3xl p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl bg-slate-800 aspect-[4/4.3]">
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 px-2 pb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Medical AI · Final Year
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-teal-600 dark:text-teal-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                    DIU, Dhaka
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
