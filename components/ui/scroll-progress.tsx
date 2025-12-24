"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(Math.round(latest * 100))
    })
  }, [scrollYProgress])

  return (
    <>
      {/* Enhanced progress bar with gradient */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-cyan-500/50"
      />

      {/* Scroll percentage indicator */}
      {progress > 10 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-40 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <span className="text-sm font-mono font-bold text-primary">{progress}%</span>
        </motion.div>
      )}
    </>
  )
}
