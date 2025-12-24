"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        isScrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-border/80 shadow-sm"
          : "backdrop-blur-md bg-background/40 border-b border-border/50"
      )}
    >
      <nav className="container-grid py-3 flex items-center justify-between">
        {/* Brand Section with Avatar */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Avatar className="h-10 w-10 border border-primary/20 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all">
              {/* Replace with your actual image path */}
              <AvatarImage src="/logo.png" alt="Sandesh Subedi" />
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                SS
              </AvatarFallback>
            </Avatar>

            {/* Online Status Indicator */}
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
          </motion.div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tighter uppercase leading-none">
              Sandesh
            </span>
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <MagneticWrapper disabled>
                <Button
                  asChild
                  variant="ghost"
                  className="relative text-sm font-medium hover:text-primary transition-colors group"
                >
                  <a href={link.href}>
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                  </a>
                </Button>
              </MagneticWrapper>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <MagneticWrapper>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-6 shadow-lg shadow-primary/10 rounded-full">
              Let's Talk
            </Button>
          </motion.div>
        </MagneticWrapper>
      </nav>
    </motion.header>
  );
}
