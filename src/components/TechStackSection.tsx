"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Cpu, Wrench } from "lucide-react";
import { TECH_STACK } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
  "ml-ds": <BrainCircuit className="h-5 w-5 text-teal-500 dark:text-teal-400" />,
  "cv-methods": <Cpu className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
  tools: <Wrench className="h-5 w-5 text-teal-500 dark:text-teal-400" />,
};

export default function TechStackSection() {
  return (
    <section id="skills" className="band-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            03 / Capabilities
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            My Skills
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400">
            Languages, ML/DL frameworks, research methods, and engineering tools.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="clean-card rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 dark:bg-slate-800/80">
                {CATEGORY_ICONS[group.id] ?? (
                  <Cpu className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {group.subtitle}
              </p>

              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
                    <span>{item.name}</span>
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
