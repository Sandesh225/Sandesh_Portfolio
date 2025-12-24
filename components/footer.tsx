"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal, Cpu, Globe } from "lucide-react"
import { GlobalContainer, sectionSpacing } from "./ui/global-container"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 overflow-hidden backdrop-blur-xl">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className={`${sectionSpacing.container} relative z-10`}>
        <GlobalContainer>
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                  <Terminal className="text-primary-foreground w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter uppercase">Sandesh.sys</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      Instance_Active_v2.6
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
                Building robust digital infrastructures that bridge the gap between complex backend logic and immersive
                frontend physics.
              </p>

              <div className="flex gap-4">
                <SocialIcon href="https://github.com" icon={<Github />} />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
                <SocialIcon href="mailto:sandesh@example.com" icon={<Mail />} />
              </div>
            </motion.div>

            {/* System Diagnostic Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em]">Sitemap_Module</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#about" className="hover:text-foreground transition-colors">
                      01 // About
                    </a>
                  </li>
                  <li>
                    <a href="#stack" className="hover:text-foreground transition-colors">
                      02 // Stack
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-foreground transition-colors">
                      03 // Work
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-foreground transition-colors">
                      04 // Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-[0.2em]">Environment_Log</h4>
                <div className="p-4 rounded-2xl bg-muted/30 border border-border font-mono text-[10px] space-y-2">
                  <p className="text-muted-foreground/60 leading-none">
                    OS: <span className="text-foreground">NEXT_JS_15</span>
                  </p>
                  <p className="text-muted-foreground/60 leading-none">
                    LOC: <span className="text-foreground">28.2096° N, 83.9856° E</span>
                  </p>
                  <p className="text-muted-foreground/60 leading-none">
                    LAT: <span className="text-emerald-500">~14ms (STABLE)</span>
                  </p>
                  <p className="text-muted-foreground/60 leading-none">
                    TLS: <span className="text-foreground">v1.3_AES_256</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} — Designed & Engineered by Sandesh Subedi
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                <Cpu className="w-3 h-3 text-primary" />
                <span>Matter.js_Physics</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                <Globe className="w-3 h-3 text-primary" />
                <span>Edge_Deployed</span>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      className="p-3 rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
    >
      {icon}
    </motion.a>
  )
}
