"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "framer-motion"
import { GlobalContainer, sectionSpacing } from "./ui/global-container"

const PROJECTS = [
  {
    id: 1,
    title: "AI Email Suite",
    description: "Smart email composition with AI-powered suggestions",
    image: "/ai-email-app.jpg",
    tags: ["Next.js", "Supabase", "OpenAI"],
    color: "from-blue-500 to-cyan-500",
    metrics: "50K+ Users",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and insights platform",
    image: "/analytics-dashboard.png",
    tags: ["React", "Chart.js", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
    metrics: "2M Events/day",
  },
  {
    id: 3,
    title: "Commerce Platform",
    description: "Headless e-commerce with Stripe integration",
    image: "/ecommerce-platform.jpg",
    tags: ["Next.js", "Stripe", "Vercel"],
    color: "from-green-500 to-emerald-500",
    metrics: "$2M Revenue",
  },
]

export function ProjectSection() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0])
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })

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
        {/* Section Header - Left-Rail Aligned */}
        <div className={`${sectionSpacing.headerMargin} space-y-4`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase">
              Project_Archive_v2.0
            </span>
          </motion.div>

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
                <span className="text-sm font-mono font-bold uppercase tracking-widest">Explore Full Archive</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Project Viewport */}
          <div className="hidden lg:block sticky top-32">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-border bg-card/30 backdrop-blur-xl shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeProject.image || "/placeholder.svg"}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-sm text-white/80">{activeProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  )
}

function ProjectListItem({
  project,
  isActive,
  onHover,
}: {
  project: (typeof PROJECTS)[0]
  isActive: boolean
  onHover: () => void
}) {
  return (
    <motion.button
      onHoverStart={onHover}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
        isActive ? "bg-primary/10 border border-primary/30" : "border border-border/50 hover:border-border"
      }`}
      whileHover={{ x: 4 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className={`text-sm font-mono font-bold uppercase tracking-widest transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
          >
            {String(project.id).padStart(2, "0")}
          </p>
          <p className="text-lg font-bold mt-1">{project.title}</p>
        </div>
        <div className="text-xs font-mono text-muted-foreground">{project.metrics}</div>
      </div>
    </motion.button>
  )
}
