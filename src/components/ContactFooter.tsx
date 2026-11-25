"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import BrandLogo from "./BrandLogo";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(PROFILE.emailPrimary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
              08 / Get In Touch
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950 dark:text-white">
              Contact Me
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Open to AI/ML internships, Android &amp; software engineering roles, and meaningful technical collaborations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="clean-card rounded-2xl p-7 lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Direct Contact Information
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Feel free to reach out via email, phone, or social channels.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                    <a
                      href={`mailto:${PROFILE.emailPrimary}`}
                      className="hover:text-sky-400 break-all"
                    >
                      {PROFILE.emailPrimary}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Mail className="h-4 w-4 text-teal-400 shrink-0" />
                    <a
                      href={`mailto:${PROFILE.emailPersonal}`}
                      className="hover:text-sky-400 break-all"
                    >
                      {PROFILE.emailPersonal}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                    <a href={PROFILE.phoneHref} className="font-mono hover:text-sky-400">
                      {PROFILE.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <MapPin className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 pt-5 border-t border-slate-900/[0.06] dark:border-slate-400/[0.12]">
                <a
                  href={`mailto:${PROFILE.emailPrimary}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                >
                  <Send className="h-4 w-4" />
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-900/[0.1] dark:border-slate-400/[0.2] px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-200 hover:border-sky-400/50 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-teal-400" />
                      Copied Email
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy DIU Email
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="clean-card rounded-2xl p-7 lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Social Profiles
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Explore my repositories or connect professionally.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.14] px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.14] px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.14] px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                  <a
                    href={PROFILE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-900/[0.08] dark:border-slate-400/[0.14] px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>

              <p className="mt-6 text-xs italic text-slate-500 dark:text-slate-400">
                “{PROFILE.quotes.bottom}”
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="band-alt border-t border-slate-900/[0.06] dark:border-slate-400/[0.12] py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2.5 font-semibold text-slate-800 dark:text-slate-200">
            <BrandLogo size={24} className="shrink-0" />
            <span>
              {PROFILE.name} <span className="text-sky-400">·</span> {PROFILE.university}
            </span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#home" className="hover:text-sky-400">Home</a>
            <a href="#about" className="hover:text-sky-400">About</a>
            <a href="#skills" className="hover:text-sky-400">Skills</a>
            <a href="#projects" className="hover:text-sky-400">Projects</a>
            <a href="#contact" className="hover:text-sky-400">Contact</a>
          </div>
          <p className="font-mono" suppressHydrationWarning>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
        </div>
      </footer>
    </>
  );
}
