"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Sparkles,
  
  
  
  ArrowRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlobalContainer, sectionSpacing } from "./ui/global-container";
import { cn } from "@/lib/utils";

// --- Types ---
interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

// --- Components ---

function HolographicCard({
  smoothMouseX,
  smoothMouseY,
}: {
  smoothMouseX: any;
  smoothMouseY: any;
}) {
  const rotX = useTransform(smoothMouseY, [0, 1000], [5, -5]);
  const rotY = useTransform(smoothMouseX, [0, 1920], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, perspective: 1000 }}
      className="relative h-[450px] w-[320px] sm:h-[500px] sm:w-[380px] group transition-all duration-300"
    >
      <div className="absolute -inset-4 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative h-full w-full rounded-[2.5rem] border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <Image
          src="/sandesh.jpg"
          alt="Sandesh Subedi"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />

        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gradient-to-t from-background via-background/90 to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-xs font-mono text-primary mb-1 tracking-wider">
                DESIGNER & DEV
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                SANDESH.SYS
              </h3>
            </div>
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
          </div>
        </div>

        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-x-0 h-[2px] bg-primary/50 shadow-[0_0_15px_var(--primary)] z-20 opacity-20"
        />
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    class ParticleClass implements Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        if (this.life > this.maxLife) this.life = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = Math.sin((this.life / this.maxLife) * Math.PI) * 0.3;
        ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1 + this.z / 1000, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 40; i++) particles.push(new ParticleClass());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(150, 150, 150, 0.03)";
      ctx.lineWidth = 1;
      const gap = 80;

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const offX = (mouseX.get() - window.innerWidth / 2) * 0.02;
          const offY = (mouseY.get() - window.innerHeight / 2) * 0.02;

          ctx.beginPath();
          ctx.moveTo(x + offX, 0);
          ctx.lineTo(x + offX, canvas.height);
          ctx.moveTo(0, y + offY);
          ctx.lineTo(canvas.width, y + offY);
          ctx.stroke();
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-24 pb-12 sm:pt-20"
      id="home"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),transparent_0%,var(--background)_80%)] opacity-40"
        style={
          {
            "--mouse-x": `${smoothMouseX.get()}px`,
            "--mouse-y": `${smoothMouseY.get()}px`,
          } as React.CSSProperties
        }
      />

      <GlobalContainer className="relative z-10 w-full">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* LEFT: Hero Content (ORDER 1 on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-[0_0_10px_-4px_var(--primary)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-primary uppercase">
                  Available for Work
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className={cn(sectionSpacing.headerTitle, "flex flex-col")}>
                <span className="text-3xl sm:text-4xl font-medium text-muted-foreground/80 tracking-tight">
                  I am,
                </span>
                {/* BIGGER NAME */}
                <span className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 pb-2">
                  Sandesh
                </span>
                <span className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] text-foreground">
                  Subedi
                </span>
              </h1>

              <p
                className={cn(
                  sectionSpacing.headerSubtitle,
                  "max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground pt-4"
                )}
              >
                I build the map while the team is already driving the car.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button
                onClick={(e) => handleScroll(e, "#projects")}
                className="h-14 px-8 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform shadow-xl shadow-primary/20"
              >
                View Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={(e) => handleScroll(e, "#contact")}
                className="h-14 px-8 rounded-full border-2 border-border/50 bg-background/50 backdrop-blur-sm text-lg font-medium hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links (Added Back for UI Enhancement) */}
           
          </motion.div>

          {/* RIGHT: Holographic Image (ORDER 2 on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center order-2 lg:order-2"
          >
            <div className="scale-[0.85] sm:scale-95 lg:scale-100 transform-gpu">
              <HolographicCard
                smoothMouseX={smoothMouseX}
                smoothMouseY={smoothMouseY}
              />
            </div>
          </motion.div>
        </div>
      </GlobalContainer>

     
    </section>
  );
}
