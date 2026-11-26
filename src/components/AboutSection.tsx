"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Microscope, Trophy } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const HIGHLIGHTS = [
  {
    icon: <Microscope className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
    value: "Medical AI",
    label: "Researcher · DIU NLP Lab",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-teal-500 dark:text-teal-400" />,
    value: "2 Papers",
    label: "Under Review (BMC & Sci. Rep.)",
  },
  {
    icon: <Trophy className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
    value: "FinSphere AI",
    label: "Finalist · Bonik Bondhu",
  },
  {
    icon: <Award className="h-5 w-5 text-teal-500 dark:text-teal-400" />,
    value: "Dean’s Award",
    label: "Spring 2024 Recipient",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="band-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7">
            <div className="text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
                01 / Introduction
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
                About Me
              </h2>
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I’m <span className="font-semibold text-slate-900 dark:text-white">{PROFILE.name}</span>, a final-year{" "}
                <span className="font-medium text-slate-900 dark:text-white">Computer Science &amp; Engineering</span> undergraduate at{" "}
                <span className="font-medium text-slate-900 dark:text-white">{PROFILE.university}</span>, based in{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">{PROFILE.location}</span>.
              </p>
              <p>
                As a Medical AI researcher with strong experience in academic research, data analysis, and software development, I focus on machine learning, deep learning, computer vision, and building technology-driven solutions to real-world problems.
              </p>
              <p>
                Beyond coursework and research manuscripts, I am a member of the{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">DIU NLP Lab, DIU Computer Programming Club,</span> and{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">DIU Voluntary Service Club</span>, alongside teaching and competitive programming.
              </p>
              <p className="pt-1 text-xs sm:text-sm italic text-slate-500 dark:text-slate-400">
                “{PROFILE.quotes.top}”
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="clean-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 dark:bg-slate-800/80">
                  {item.icon}
                </div>
                <div className="mt-4">
                  <div className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                    {item.value}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
