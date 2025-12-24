"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GlowButton({ children, className, ...props }: GlowButtonProps) {
  return (
    <button
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900",
        className
      )}
      {...props}
    >
      {/* Animated Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Button Content */}
      <span className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90">
        {children}
      </span>
    </button>
  );
}