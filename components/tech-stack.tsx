"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GlobalContainer, sectionSpacing } from "./ui/global-container"

const TECHS = [
  {
    category: "Frontend",
    items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Supabase", "PostgreSQL", "Vercel Functions", "tRPC"],
  },
  {
    category: "DevOps",
    items: ["Vercel", "GitHub Actions", "Docker", "AWS", "Monitoring"],
  },
]

export function TechStack() {
  return (
    <section id="stack" className={`${sectionSpacing.container} bg-background relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <GlobalContainer>
        <div className={`${sectionSpacing.headerMargin} space-y-4`}>
          <motion.h2 className={sectionSpacing.headerTitle}>
            Tech <span className="text-primary">Arsenal</span>
          </motion.h2>
          <p className={sectionSpacing.headerSubtitle}>Modern stack built for performance and scalability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHS.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 border-border rounded-[2rem] h-full">
                <h3 className="text-lg font-bold mb-6 text-primary">{tech.category}</h3>
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </GlobalContainer>
    </section>
  )
}
