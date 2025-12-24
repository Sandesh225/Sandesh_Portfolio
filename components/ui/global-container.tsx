"use client"

import type React from "react"

interface GlobalContainerProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

/**
 * GlobalContainer: Unified layout wrapper for all sections
 * Ensures consistent grid, spacing, and left-rail alignment across desktop/mobile
 * Desktop: max-w-7xl centered with px-6 md:px-12 lg:px-20
 * Mobile: Full width with px-6 padding
 */
export function GlobalContainer({ children, className = "", asChild = false }: GlobalContainerProps) {
  const containerClass = `container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl ${className}`

  if (asChild) {
    return <div className={containerClass}>{children}</div>
  }

  return <div className={containerClass}>{children}</div>
}

/**
 * Section spacing standardization:
 * Reduced excessive gaps: py-12 md:py-16 lg:py-20 for section containers
 * Reduced header margin: mb-8 md:mb-12 for section headers
 * Use this utility to ensure consistent vertical rhythm with tighter spacing
 */
export const sectionSpacing = {
  container: "py-12 md:py-16 lg:py-20",
  headerMargin: "mb-8 md:mb-12",
  headerTitle: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter",
  headerSubtitle: "text-base md:text-lg text-muted-foreground leading-relaxed",
}
