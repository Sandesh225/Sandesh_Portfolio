"use client"

import { useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import type React from "react"

interface MagneticWrapperProps {
  children: React.ReactNode
  disabled?: boolean
}

export function MagneticWrapper({ children, disabled = false }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }; // Tweaked for snappier feel
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={!disabled ? { x: xSpring, y: ySpring } : {}}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}