import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`section-spacing relative overflow-hidden ${className}`}>
      <div className="container-grid relative z-10">{children}</div>
    </section>
  )
}
