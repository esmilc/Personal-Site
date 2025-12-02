// components/PopupWindow.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"] as const;
type Section = (typeof SECTIONS)[number];

const sectionLabels: Record<Section, string> = {
  about: ">_ About",
  experience: "{} Experience",
  projects: "<> Projects",
  skills: "∑ Skills",
  contact: "@ Contact",
};

export default function PopupWindow() {
  const [active, setActive] = useState<Section>("about");

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-zinc-300">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="ml-3 font-mono text-[11px] text-zinc-400">
            esmil@cs: ~/personal-site
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
          <span>github</span>
          <span>linkedin</span>
          <span className="rounded-full border border-white/10 px-2 py-0.5">
            dark
          </span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <nav className="flex w-40 flex-col border-r border-white/10 bg-zinc-950/60 p-2 text-xs">
          {SECTIONS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`mb-1 flex w-full items-center rounded-lg px-3 py-2 text-left font-mono transition
                ${
                  active === key
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                    : "text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100"
                }`}
            >
              {sectionLabels[key]}
            </button>
          ))}
        </nav>

        {/* Content area */}
        <div className="relative min-h-[320px] flex-1 overflow-hidden p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="h-full"
            >
              {active === "about" && <AboutSection />}
              {active === "experience" && <ExperienceSection />}
              {active === "projects" && <ProjectsSection />}
              {active === "skills" && <SkillsSection />}
              {active === "contact" && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer / status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-zinc-950/80 px-4 py-2 text-[11px] font-mono text-zinc-500">
        <span>INSERT</span>
        <span>127.0.0.1</span>
        <span>Built with Next.js • Tailwind • Framer Motion</span>
      </div>
    </div>
  );
}

/* --- super simple placeholder sections; fill these with real content later --- */

function AboutSection() {
  return (
    <div className="font-mono text-sm text-zinc-200 space-y-2">
      <p className="text-emerald-300">~/about/esmil.log</p>
      <p>&gt; booting esmil.exe...</p>
      <p>&gt; loading modules: applied-ml, full-stack, teaching, mentoring</p>
      <p>&gt; status: online, exploring new systems to break + build</p>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="space-y-3 text-sm text-zinc-100">
      {/* cards or “git log” style entries */}
      <p className="font-mono text-emerald-300">~/experience</p>
      <p>// Fill in Google, CodePath, UF, etc.</p>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="font-mono text-sm text-zinc-100 space-y-2">
      <p className="text-emerald-300">ls projects/</p>
      <p>drwx  2024  MindMates        - Gamified mental health companion</p>
      <p>drwx  2024  GatorMarketplace - UF-only marketplace for safe trading</p>
      <p>drwx  2023  WadFS            - Userspace filesystem over WAD files</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="space-y-2 text-sm text-zinc-100">
      <p className="font-mono text-emerald-300">~/skills</p>
      <p>// tags for languages, frameworks, systems, teaching, leadership...</p>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-2 text-sm text-zinc-100">
      <p className="font-mono text-emerald-300">~/contact</p>
      <p>// links + maybe a “mailto” or contact form later</p>
    </div>
  );
}