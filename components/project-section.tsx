"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Terminal, Construction, Cpu, Code2 } from "lucide-react";
import { useInView } from "framer-motion";
import { GlobalContainer, sectionSpacing } from "./ui/global-container";

const PROJECTS = [
  {
    id: 1,
    title: "Smart Pokhara",
    description: "Digital Twin & Smart City Platform",
    tags: ["Next.js", "Supabase", "IoT"],
    metrics: "Active Development",
    version: "v0.8.4",
  },
  {
    id: 2,
    title: "Analytics Engine",
    description: "Real-time data visualization and insights",
    tags: ["React", "PostgreSQL", "D3.js"],
    metrics: "Architecture Phase",
    version: "v0.2.1",
  },
  {
    id: 3,
    title: "Commerce Hub",
    description: "Headless e-commerce infrastructure",
    tags: ["Next.js", "Stripe", "Turborepo"],
    metrics: "In Review",
    version: "v1.0.0-rc",
  },
];

export function ProjectSection() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`${sectionSpacing.container} bg-background relative overflow-hidden`}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

      <GlobalContainer>
        {/* Section Header */}
        <div className={`${sectionSpacing.headerMargin} space-y-4`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={sectionSpacing.headerTitle}
          >
            Selected <span className="italic font-serif">Works</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          {/* LEFT: Project Navigation */}
          <div className="space-y-2">
            {PROJECTS.map((project) => (
              <ProjectListItem
                key={project.id}
                project={project}
                isActive={activeProject.id === project.id}
                onHover={() => setActiveProject(project)}
              />
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="pt-10"
            >
              <Link
                href="/archive"
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="text-sm font-mono font-bold uppercase tracking-widest">
                  Explore Full Archive
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Project Viewport (Architect Terminal) */}
          <div className="hidden lg:block sticky top-32">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl group">
              {/* Animated Blueprint Grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 p-12 flex flex-col"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-orange-500 uppercase">
                        Architect.Status: Compiling_Design
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                      Build_ID: {activeProject.version}
                    </span>
                  </div>

                  {/* Dynamic Console Text */}
                  <div className="flex-1 font-mono text-xs space-y-3">
                    <div className="flex gap-4">
                      <span className="text-white/20">01</span>
                      <p className="text-primary/80 italic text-sm">
                        {"//"} Initializing system core for{" "}
                        {activeProject.title}...
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20">02</span>
                      <p className="text-zinc-400">
                        Loading_Module:{" "}
                        <span className="text-blue-400">@sandesh/arch-viz</span>
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20">03</span>
                      <p className="text-zinc-400">
                        Status:{" "}
                        <span className="text-green-400 font-bold">
                          Resilient_Sync_Complete
                        </span>
                      </p>
                    </div>

                    {/* Architectural Data Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2 text-white/40">
                          <Code2 className="w-3 h-3" />
                          <span className="text-[10px] uppercase tracking-widest">
                            Stack
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 text-[11px] text-white/90">
                          {activeProject.tags.map((tag) => (
                            <span key={tag}>[{tag}]</span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2 text-white/40">
                          <Cpu className="w-3 h-3" />
                          <span className="text-[10px] uppercase tracking-widest">
                            Stage
                          </span>
                        </div>
                        <p className="text-[11px] text-primary font-bold uppercase tracking-tighter">
                          {activeProject.metrics}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Large Coming Soon Text */}
                  <div className="mt-auto pt-8 border-t border-white/5 flex items-end justify-between">
                    <div className="space-y-1">
                      <h3 className="text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
                        Coming <span className="text-primary">Soon</span>
                      </h3>
                      <p className="text-[11px] text-white/40 uppercase tracking-widest">
                        {activeProject.description}
                      </p>
                    </div>
                    <Construction className="w-12 h-12 text-white/10" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Laser Scanning Indicator */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20"
              />
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

function ProjectListItem({
  project,
  isActive,
  onHover,
}: {
  project: (typeof PROJECTS)[0];
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.button
      onHoverStart={onHover}
      className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 border ${
        isActive
          ? "bg-primary/5 border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]"
          : "border-transparent hover:border-border/50"
      }`}
      whileHover={{ x: 6 }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p
            className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {String(project.id).padStart(2, "0")} // System_Build
          </p>
          <p
            className={`text-xl font-bold transition-all ${
              isActive ? "translate-x-1" : ""
            }`}
          >
            {project.title}
          </p>
        </div>
        <div
          className={`text-[10px] font-mono transition-colors ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {project.version}
        </div>
      </div>
    </motion.button>
  );
}