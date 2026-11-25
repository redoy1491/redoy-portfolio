"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, ProjectCategory, ProjectItem } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "AI & ML",
  "Software & GUI",
  "Core CS & DSA",
  "Systems & Hardware",
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filtered =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
              06 / Portfolio
            </span>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
              My Projects
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              Click any card to view its architecture &amp; full details.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-semibold shadow-sm"
                      : "glass-pill text-slate-600 dark:text-slate-300 hover:border-sky-400/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Water-Glass Project Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.22, delay: idx * 0.03 }}
              onClick={() => setActiveProject(project)}
              className="clean-card group rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-4 cursor-pointer hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-medium text-sky-600 dark:text-sky-400">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${project.title} on GitHub`}
                    className="rounded-full p-1 text-slate-400 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </div>

                <h3 className="mt-2 text-base font-bold text-slate-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-400/15 dark:border-white/[0.08]">
                <span className="truncate font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  {project.stack.slice(0, 3).join(" · ")}
                </span>
                <span className="inline-flex items-center gap-0.5 font-mono text-[11px] font-medium text-sky-600 dark:text-sky-400 shrink-0">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
