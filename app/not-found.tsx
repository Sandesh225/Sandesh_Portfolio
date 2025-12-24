"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden font-mono">
      {/* Dynamic Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none mix-blend-overlay" />

      {/* Background Animated 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute text-[25vw] font-black text-primary tracking-tighter select-none blur-sm"
      >
        404
      </motion.h1>

      <div className="z-10 text-center space-y-8 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase">
            <Terminal className="w-3 h-3" />
            Critical Error: Route_Not_Found
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            You've Entered <br />
            <span className="text-primary">The Void</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed"
        >
          The requested signal has been lost in transmission. The sector you are
          looking for does not exist in the current architectural map.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <MagneticWrapper>
            <Button
              asChild
              className="px-10 py-7 rounded-2xl bg-primary text-primary-foreground font-bold text-sm tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
            >
              <Link href="/">RE-INITIALIZE BASE_SYSTEM</Link>
            </Button>
          </MagneticWrapper>
        </motion.div>
      </div>

      {/* Decorative Corner Scanning Lines */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/10" />
    </div>
  );
}
