"use client";

import { useEffect, useState } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface NavbarProps {
  onOpenCommand: () => void;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("redoy-theme");
      const dark = saved !== "light";
      document.documentElement.classList.toggle("dark", dark);
      setIsDark(dark);
    } catch {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("redoy-theme", next ? "dark" : "light");
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-40 px-3 sm:px-4">
      <div className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white shrink-0"
        >
          <BrandLogo size={32} className="shrink-0 drop-shadow-sm" />
          <span>
            Redoy<span className="text-sky-400">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            aria-label="Open command palette"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.18] px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-300 transition-colors hover:border-sky-400/50 cursor-pointer"
          >
            <Command className="h-3.5 w-3.5 text-sky-400" />
            <kbd className="font-mono text-[11px]">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.18] text-slate-700 dark:text-slate-200 transition-colors hover:border-sky-400/50 cursor-pointer"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.18] text-slate-700 dark:text-slate-200 lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass-nav mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden shadow-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-sky-500/10 hover:text-sky-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
