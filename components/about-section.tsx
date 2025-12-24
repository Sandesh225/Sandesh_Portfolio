"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Target, ShieldCheck, Terminal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { GlobalContainer, sectionSpacing } from "./ui/global-container"


const FEATURES = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Modular, type-safe systems that prioritize long-term maintainability.",
    metrics: "SOLID / DRY",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Obsessed with Core Web Vitals and sub-second response times.",
    metrics: "99+ LIGHTHOUSE",
  },
  {
    icon: Target,
    title: "Outcome Driven",
    description: "Bridge business objectives with technical implementation precision.",
    metrics: "USER_CENTRIC",
  },
  {
    icon: ShieldCheck,
    title: "Security & Scale",
    description: "Robust auth patterns and cloud-native infrastructure.",
    metrics: "SUPABASE / AWS",
  },
]

export function AboutSection() {
  return (
    <section id="about" className={`${sectionSpacing.container} relative bg-background overflow-hidden`}>
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

      <GlobalContainer>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
          {/* LEFT: System Persona - Left-Rail Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                Identity_Verified
              </span>
            </div>

            <div className="space-y-4">
              <h2 className={sectionSpacing.headerTitle}>
                Core <span className="text-muted-foreground/40 italic">Philosophy</span>
              </h2>
              <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="p-8 rounded-[2rem] border border-border bg-card/50 backdrop-blur-xl relative overflow-hidden group">
              <Terminal className="absolute top-4 right-4 w-5 h-5 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />

              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                I am a <span className="text-foreground font-medium">Full-Stack Architect</span> specializing in
                performance and aesthetics. I design <span className="text-primary italic">digital ecosystems</span>{" "}
                that are resilient and beautiful.
              </p>

              <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap gap-6">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Location</p>
                  <p className="text-sm font-bold">Pokhara, Nepal</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Focus</p>
                  <p className="text-sm font-bold">Next.js / Supabase</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Experience</p>
                  <p className="text-sm font-bold">Senior Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Feature Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </GlobalContainer>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative h-full p-8 bg-card/50 border-border hover:border-primary/40 backdrop-blur-md rounded-[2rem] transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="w-12 h-12 rounded-2xl bg-secondary/80 border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <feature.icon className="w-6 h-6" />
          </div>

          <div className="mb-4">
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>

          <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
            <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground/60 uppercase group-hover:text-primary/60 transition-colors">
              Metric
            </span>
            <span className="text-xs font-mono font-bold text-foreground">{feature.metrics}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
