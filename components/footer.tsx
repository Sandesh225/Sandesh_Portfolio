"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Cpu, Globe } from "lucide-react";
import { GlobalContainer, sectionSpacing } from "./ui/global-container";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/10 overflow-hidden backdrop-blur-xl">
      {/* Ambient Glows - Reduced height */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Reduced py-12 to py-8 */}
      <div className="relative z-10 py-8">
        <GlobalContainer>
          {/* Reduced gap and mb-20 to mb-10 */}
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                {/* Scaled down icon from w-12 to w-10 */}
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <Terminal className="text-primary-foreground w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tighter uppercase">
                    Sandesh Subedi
                  </h3>
                </div>
              </div>

              <div className="flex gap-3">
                <SocialIcon
                  href="https://github.com"
                  icon={<Github className="w-4 h-4" />}
                />
                <SocialIcon
                  href="https://linkedin.com"
                  icon={<Linkedin className="w-4 h-4" />}
                />
                <SocialIcon
                  href="mailto:sandesh@example.com"
                  icon={<Mail className="w-4 h-4" />}
                />
              </div>
            </motion.div>

            {/* Sitemap Column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex md:justify-end"
            >
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em]">
                  Sitemap_Module
                </h4>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs font-mono text-muted-foreground">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-foreground transition-colors"
                    >
                      01 // About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#stack"
                      className="hover:text-foreground transition-colors"
                    >
                      02 // Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-foreground transition-colors"
                    >
                      03 // Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-foreground transition-colors"
                    >
                      04 // Contact
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom - Reduced pt-12 to pt-6 */}
          <div className="pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} — Designed & Engineered by Sandesh
              Subedi
            </div>

            <div className="flex items-center gap-6">
              {/* Heart / Physics Section */}
              <div className="flex items-center gap-2 text-[9px] font-mono text-muted-foreground uppercase tracking-widest group">
                <Cpu className="w-3 h-3 text-primary/70 group-hover:text-primary transition-colors" />
                <span className="drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                  ❤️
                </span>
                <span className="hidden sm:inline opacity-70">
                  Built_With_Soul
                </span>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      className="p-2.5 rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
