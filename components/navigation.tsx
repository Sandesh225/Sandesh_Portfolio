"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/50"
    >
      <nav className="container-grid py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-sm font-bold tracking-tighter uppercase hidden sm:block">Sandesh</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <MagneticWrapper key={link.href} disabled>
              <Button asChild variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                <a href={link.href}>{link.label}</a>
              </Button>
            </MagneticWrapper>
          ))}
        </div>

        <MagneticWrapper>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-6">
            Let's Talk
          </Button>
        </MagneticWrapper>
      </nav>
    </motion.header>
  )
}
