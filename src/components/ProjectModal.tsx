"use client";

import { useEffect } from "react";
import { ArrowRight, ExternalLink, Github, Layers, X } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="clean-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
              {project.category}
            </span>
            <h3 className="mt-1.5 text-xl font-bold text-slate-950 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>

        <div className="mt-6 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.14] bg-slate-50 dark:bg-[#0b1120] p-4">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Layers className="h-3.5 w-3.5 text-sky-400" />
            System Architecture Flow
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.architectureFlow.map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <div className="rounded-lg border border-slate-900/[0.08] dark:border-slate-400/[0.16] bg-white dark:bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-200">
                  {node}
                </div>
                {i < project.architectureFlow.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-teal-400/25 bg-teal-400/10 p-3"
              >
                <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  {m.label}
                </div>
                <div className="font-mono text-base font-bold text-teal-600 dark:text-teal-300">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Engineering Highlights
          </h4>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-slate-900/[0.08] dark:border-slate-400/[0.12] pt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
