"use client"

import type React from "react"
import Image from "next/image"
import { ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { GlobalContainer, sectionSpacing } from "./ui/global-container"

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  life: number
  maxLife: number
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

function HolographicCard({ smoothMouseX, smoothMouseY }: { smoothMouseX: any; smoothMouseY: any }) {
  const rotX = useTransform(smoothMouseY, [0, 1000], [10, -10])
  const rotY = useTransform(smoothMouseX, [0, 1920], [-10, 10])

  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, perspective: 1000 }}
      className="relative h-[500px] w-[380px] group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative h-full w-full rounded-[2.5rem] border border-border bg-card overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <Image
          src="/sandesh.jpg"
          alt="Sandesh Subedi"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />

        {/* Glass Overlay UI */}
        <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-primary mb-1">DESIGNER & DEV</p>
              <h3 className="text-2xl font-bold tracking-tight">SANDESH.SYS</h3>
            </div>
            <div className="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-primary/50 shadow-[0_0_15px_var(--primary)] z-20 opacity-20"
        />
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    const particles: Particle[] = []

    class ParticleClass implements Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.life = 0
        this.maxLife = 200 + Math.random() * 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life++
        if (this.life > this.maxLife) this.life = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = Math.sin((this.life / this.maxLife) * Math.PI) * 0.3
        ctx.fillStyle = `oklch(0.75 0.18 195 / ${opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1 + this.z / 1000, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    for (let i = 0; i < 40; i++) particles.push(new ParticleClass())

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "oklch(0.3 0.025 240 / 0.1)"
      ctx.lineWidth = 1
      const gap = 80

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const offX = (mouseX.get() - window.innerWidth / 2) * 0.02
          const offY = (mouseY.get() - window.innerHeight / 2) * 0.02

          ctx.beginPath()
          ctx.moveTo(x + offX, 0)
          ctx.lineTo(x + offX, canvas.height)
          ctx.moveTo(0, y + offY)
          ctx.lineTo(canvas.width, y + offY)
          ctx.stroke()
        }
      }

      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mouseX, mouseY])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),transparent_0%,var(--background)_80%)] opacity-40"
        style={
          {
            "--mouse-x": `${smoothMouseX.get()}px`,
            "--mouse-y": `${smoothMouseY.get()}px`,
          } as React.CSSProperties
        }
      />

      <GlobalContainer className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                Full Stack Architect
              </span>
            </div>

            <h1 className={sectionSpacing.headerTitle}>
              Engineering Digital <span className="text-primary">Ecosystems</span>
            </h1>

            <p className={sectionSpacing.headerSubtitle}>
              Crafting high-performance web experiences where aesthetic mastery meets technical precision. Next.js,
              React, and Supabase.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                View Work
              </Button>
              <Button className="px-8 py-3 rounded-xl border border-border hover:border-primary transition-colors">
                Get In Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <HolographicCard smoothMouseX={smoothMouseX} smoothMouseY={smoothMouseY} />
          </motion.div>
        </div>
      </GlobalContainer>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
