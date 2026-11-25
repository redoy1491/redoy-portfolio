"use client";

import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import { RESEARCH_WORKS } from "@/data/portfolio";

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            04 / Medical AI &amp; ML
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
            Research Works
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400">
            Ongoing undergraduate research in healthcare prediction, multimodal deep learning, and medical computer vision.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {RESEARCH_WORKS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className={`clean-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between ${
                idx === RESEARCH_WORKS.length - 1 && RESEARCH_WORKS.length % 2 === 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-sky-600 dark:text-sky-400">
                    <Microscope className="h-3.5 w-3.5" />
                    {item.domain}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-3.5 text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-900/[0.06] dark:border-slate-400/[0.12] flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100/90 dark:bg-slate-800/75 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
