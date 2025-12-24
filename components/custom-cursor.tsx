"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = `${e.clientX}px`
            followerRef.current.style.top = `${e.clientY}px`
          }
        }, 50)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-primary/30 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  )
}
