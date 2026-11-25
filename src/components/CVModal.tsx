"use client";

import { useEffect } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES_SPOKEN,
  PROFILE,
  PROJECTS,
  RESEARCH_WORKS,
  TECH_STACK,
} from "@/data/portfolio";

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: CVModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 sm:p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="clean-card w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Download & Open Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900/[0.08] dark:border-slate-400/[0.14] px-4 sm:px-6 py-3.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="h-4 w-4 text-sky-500 dark:text-sky-400" />
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              Curriculum Vitae — {PROFILE.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.cvUrl}
              download="Ashraful_Islam_Redoy_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-sm hover:brightness-105"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>

            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-sky-400/50"
            >
              <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="rounded-xl p-1.5 text-slate-500 hover:bg-slate-900/[0.06] dark:text-slate-400 dark:hover:bg-white/[0.08] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop/Tablet PDF Embed */}
        <div className="hidden sm:block flex-1 bg-slate-200/70 dark:bg-slate-950/80 p-3">
          <iframe
            src={`${PROFILE.cvUrl}#view=FitH`}
            title="Ashraful Islam Redoy CV"
            className="h-full w-full rounded-xl border border-slate-900/[0.08] bg-white"
          />
        </div>

        {/* Mobile Native Scrollable CV Preview */}
        <div className="sm:hidden flex-1 overflow-y-auto bg-white text-slate-900 p-5 space-y-5 text-xs leading-relaxed">
          <div className="border-l-4 border-sky-700 pl-3">
            <h3 className="text-base font-bold text-slate-950">
              {PROFILE.name.toUpperCase()}
            </h3>
            <p className="text-[11px] font-medium text-sky-800">
              Final-Year B.Sc. in CSE | Undergraduate Researcher — Medical AI
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              {PROFILE.location} | {PROFILE.phone} | {PROFILE.emailPrimary}
            </p>
          </div>

          <p className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-slate-700">
            {PROFILE.summary}
          </p>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h4>
            <div className="space-y-2">
              {EDUCATION.map((edu) => (
                <div key={edu.degree}>
                  <div className="font-semibold text-slate-950">{edu.degree}</div>
                  <div className="text-slate-600">
                    {edu.institution} ({edu.period}) · {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Research Experience
            </h4>
            {EXPERIENCE.map((exp) => (
              <div key={exp.role}>
                <div className="font-semibold text-slate-950">{exp.role}</div>
                <div className="text-slate-600">
                  {exp.organization} ({exp.period})
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-700">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Research Works (2025 – Present)
            </h4>
            <div className="space-y-2">
              {RESEARCH_WORKS.map((r, i) => (
                <div key={r.id}>
                  <div className="font-semibold text-slate-950">
                    {i + 1}. {r.title}
                  </div>
                  <p className="text-slate-600">{r.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h4>
            <div className="space-y-1">
              {TECH_STACK.map((g) => (
                <p key={g.id}>
                  <span className="font-semibold text-slate-950">{g.title}:</span>{" "}
                  {g.items.map((x) => x.name).join(", ")}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Projects
            </h4>
            <div className="space-y-2">
              {PROJECTS.map((p, i) => (
                <div key={p.id}>
                  <div className="font-semibold text-slate-950">
                    {i + 1}. {p.title}
                  </div>
                  <p className="text-slate-600">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-1 mb-2">
              Honors, Certifications &amp; Languages
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong> — {a.org}
                </li>
              ))}
              {CERTIFICATIONS.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong> — {c.issuer}
                </li>
              ))}
              <li>
                <strong>Languages:</strong>{" "}
                {LANGUAGES_SPOKEN.map((l) => `${l.name} (${l.level})`).join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
