"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            02 / Professional Growth
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="mt-10 max-w-4xl mx-auto space-y-5">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
              className="clean-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-sky-600 dark:text-sky-400">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <span className="self-start rounded-full bg-slate-100/90 dark:bg-slate-800/80 px-3 py-1 font-mono text-xs text-slate-600 dark:text-slate-300 shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {exp.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
