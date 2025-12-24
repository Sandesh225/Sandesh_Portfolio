"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Terminal, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { GlobalContainer, sectionSpacing } from "./ui/global-container";
const EXPERIENCES = [
  {
    id: 1,
    role: "Lead Full-Stack Architect",
    company: "AppsVed",
    period: "2025 - Present",
    description:
      "Orchestrating high-scale digital ecosystems with a focus on structural resilience and Next.js 15 optimization.",
    achievements: [
      "Engineered a 40% reduction in LCP through advanced caching strategies",
      "Architected infrastructure supporting a global user base of 1M+",
      "Standardized development workflows for high-performance delivery",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    role: "Founding Systems Engineer",
    company: "AppsVed",
    period: "2024 - 2025",
    description:
      "Transformed conceptual designs into a market-ready MVP using a robust React/Node.js architecture.",
    achievements: [
      "Technical lead for MVP that secured $2M in Series A funding",
      "Scalability design supporting 20K+ daily active users from launch",
      "Integrated real-time data sync with 99.9% uptime",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    role: "Performance Specialist",
    company: "WebStudio",
    period: "2020 - 2021",
    description:
      "Crafted accessible, pixel-perfect interfaces with a focus on the intersection of design and code.",
    achievements: [
      "Achieved 100/100 Lighthouse accessibility and SEO scores",
      "Delivered award-winning UI/UX for high-profile client projects",
      "Implemented rigorous automated testing for zero-regession deployments",
    ],
    color: "from-green-500 to-green-600",
  },
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className={`${sectionSpacing.container} bg-background text-foreground relative overflow-hidden`}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <GlobalContainer>
        {/* Section Header - Centered on Desktop, Left on Mobile */}
        <div
          className={`${sectionSpacing.headerMargin} flex flex-col items-start lg:items-center text-left lg:text-center`}
        >
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            className={sectionSpacing.headerTitle}
          >
            PROFESSIONAL <br />
            <span className="text-primary italic">MILESTONES</span>
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Animated Center Spine - Responsive */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-[2px] h-full bg-border/30">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-chart-1 to-chart-4"
            />
            {/* Trailing Glow Head */}
            <motion.div
              style={{
                top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                opacity: glowOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-20 bg-primary/40 blur-xl"
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {EXPERIENCES.map((exp, index) => (
              <TimelineItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: (typeof EXPERIENCES)[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative flex flex-col md:flex-row items-start justify-between gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Content Card - Responsive Width */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[45%] md:pl-0 pl-12"
      >
        <Card className="group relative p-8 rounded-[2rem] border border-border bg-card/50 hover:bg-card/80 backdrop-blur-xl transition-all duration-500">
          <div
            className={`absolute -inset-[1px] bg-gradient-to-br ${exp.color} rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity blur-md`}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-1">
                  {String(index + 1).padStart(2, "0")} // Experience
                </p>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <Award className="w-5 h-5 text-primary/40 group-hover:text-primary/60 transition-colors" />
            </div>

            <p className="text-sm text-muted-foreground mb-6">{exp.description}</p>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">→</span>
                  {achievement}
                </li>
              ))}
            </ul>

            <p className="text-xs font-mono text-muted-foreground/60 mt-6 pt-6 border-t border-border/50">
              {exp.period}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Timeline Dot - Responsive Position */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

      {/* Mobile Left Dot */}
      <div className="md:hidden absolute left-0 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-lg mt-2" />
    </div>
  )
}
