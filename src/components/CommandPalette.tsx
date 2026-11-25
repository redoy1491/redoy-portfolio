"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  PlayCircle,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenVideo: () => void;
  onOpenCV: () => void;
}

interface ActionItem {
  id: string;
  label: string;
  hint: string;
  group: string;
  run: () => void;
}

export default function CommandPalette({
  open,
  onClose,
  onOpenVideo,
  onOpenCV,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
      } else if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const actions: ActionItem[] = useMemo(
    () => [
      {
        id: "nav-overview",
        label: "Go to Home",
        hint: "#home",
        group: "Navigation",
        run: () => {
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-about",
        label: "Go to About Me",
        hint: "#about",
        group: "Navigation",
        run: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-experience",
        label: "Go to Experience",
        hint: "#experience",
        group: "Navigation",
        run: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-stack",
        label: "Go to My Skills",
        hint: "#skills",
        group: "Navigation",
        run: () => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-research",
        label: "Go to Research Works",
        hint: "#research",
        group: "Navigation",
        run: () => {
          document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-education",
        label: "Go to Education",
        hint: "#education",
        group: "Navigation",
        run: () => {
          document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-projects",
        label: "Go to Projects & Architectures",
        hint: "#projects",
        group: "Navigation",
        run: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-credentials",
        label: "Go to Achievements & Roadmap",
        hint: "#achievements",
        group: "Navigation",
        run: () => {
          document
            .getElementById("achievements")
            ?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-contact",
        label: "Go to Contact",
        hint: "#contact",
        group: "Navigation",
        run: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "action-show-cv",
        label: "Show CV (Preview & Download)",
        hint: "Modal",
        group: "Actions",
        run: () => {
          onClose();
          onOpenCV();
        },
      },
      {
        id: "action-video",
        label: "Watch Video Resume",
        hint: "YouTube",
        group: "Actions",
        run: () => {
          onClose();
          onOpenVideo();
        },
      },
      {
        id: "action-copy-email",
        label: copied ? "Copied DIU Email!" : `Copy Email (${PROFILE.emailPrimary})`,
        hint: "Clipboard",
        group: "Actions",
        run: () => {
          navigator.clipboard?.writeText(PROFILE.emailPrimary);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        },
      },
      {
        id: "action-github",
        label: "Open GitHub Profile",
        hint: "github.com/redoy1491",
        group: "External",
        run: () => {
          window.open(PROFILE.socials.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "action-linkedin",
        label: "Open LinkedIn Profile",
        hint: "in/redoy1491",
        group: "External",
        run: () => {
          window.open(PROFILE.socials.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ],
    [copied, onClose, onOpenVideo, onOpenCV]
  );

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.hint.toLowerCase().includes(query.toLowerCase()) ||
      a.group.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="clean-card w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-900/[0.08] dark:border-slate-400/[0.12] px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section or action..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-xs text-slate-500">
              No matching commands found.
            </p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.run}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 transition-colors hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-300 cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  {item.id === "action-show-cv" ? (
                    <FileText className="h-4 w-4 text-teal-400" />
                  ) : item.id === "action-video" ? (
                    <PlayCircle className="h-4 w-4 text-sky-400" />
                  ) : item.id === "action-copy-email" ? (
                    copied ? (
                      <Check className="h-4 w-4 text-teal-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-400" />
                    )
                  ) : item.id === "action-github" ? (
                    <Github className="h-4 w-4 text-slate-400" />
                  ) : item.id === "action-linkedin" ? (
                    <Linkedin className="h-4 w-4 text-slate-400" />
                  ) : (
                    <Sparkles className="h-4 w-4 text-sky-400" />
                  )}
                  <span>{item.label}</span>
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                  {item.hint}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
