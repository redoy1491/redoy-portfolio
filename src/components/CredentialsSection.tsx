"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, FileText, GraduationCap, PlayCircle, Users } from "lucide-react";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  CLUBS_AND_ACTIVITIES,
  EDUCATION,
  LANGUAGES_SPOKEN,
  PROFILE,
} from "@/data/portfolio";

interface CredentialsSectionProps {
  onOpenVideo: () => void;
  onOpenCV: () => void;
}

export function EducationSection() {
  return (
    <section id="education" className="band-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            05 / Academics
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            Education
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="clean-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                    {edu.period}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-950 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">
                  {edu.institution}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-900/[0.06] dark:border-slate-400/[0.1] font-mono text-xs text-slate-500 dark:text-slate-400">
                {edu.grade}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CredentialsSection({
  onOpenVideo,
  onOpenCV,
}: CredentialsSectionProps) {
  return (
    <section id="achievements" className="band-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            07 / Milestones
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            Achievements &amp; Certifications
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="clean-card rounded-2xl p-5 flex items-start gap-3.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-950 dark:text-white">
                    {ach.title}
                  </h3>
                  <p className="font-mono text-[11px] text-sky-600 dark:text-sky-400">
                    {ach.org}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {ach.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="clean-card rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <BadgeCheck className="h-4 w-4 text-sky-400" />
                Certifications &amp; Training
              </div>
              <ul className="mt-4 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title}>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {cert.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="clean-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <Users className="h-4 w-4 text-teal-400" />
                  Memberships, Languages &amp; Intro
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {CLUBS_AND_ACTIVITIES.join(" · ")}
                </p>
                <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  Languages: {LANGUAGES_SPOKEN.map((l) => `${l.name} (${l.level})`).join(" • ")}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-900/[0.06] dark:border-slate-400/[0.1]">
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  {PROFILE.goal}
                </p>
                <div className="flex flex-wrap gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={onOpenCV}
                    className="glass-pill inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:border-sky-400/60 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-sky-400" />
                    Show CV
                  </button>
                  <button
                    type="button"
                    onClick={onOpenVideo}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:brightness-105 cursor-pointer"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Video Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
