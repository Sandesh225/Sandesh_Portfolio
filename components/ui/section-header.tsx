"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge: string
}

export function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24 space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono tracking-widest uppercase"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-pulse absolute h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        {badge}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-title"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
