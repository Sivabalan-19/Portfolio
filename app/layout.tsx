"use client";

import { Navbar } from "@/components/navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { fontDisplay, fontMono, fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { FloatingLogo } from "@/components/floating-logo";
import logo from "../public/assets/logo.png";
import "../styles/globals.css";

type Phase = "loading" | "intro" | "animating" | "ready";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);

  // Progress bar counter: 0 → 100 over 2.5 s
  useEffect(() => {
    if (phase !== "loading") return;
    const duration = 2500;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const val = Math.min(Math.round((current / steps) * 100), 100);
      setProgress(val);
      if (val >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("intro"), 400);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Scroll / swipe triggers logo animation (400 ms guard prevents instant re-fire)
  useEffect(() => {
    if (phase !== "intro") return;
    let armed = false;
    const arm = setTimeout(() => {
      armed = true;
    }, 400);
    const trigger = () => {
      if (!armed) return;
      setPhase("animating");
    };
    window.addEventListener("wheel", trigger);
    window.addEventListener("touchmove", trigger);
    return () => {
      clearTimeout(arm);
      window.removeEventListener("wheel", trigger);
      window.removeEventListener("touchmove", trigger);
    };
  }, [phase]);

  return (
    <html lang="en">
      <head>
        <title>Sivabalan | Portfolio</title>
      </head>
      <body
        className={cn(
          "min-h-screen w-screen z-10 bg-black items-center justify-center",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable,
        )}
      >
        <>
          <ShootingStars className="z-10" />
          <StarsBackground className="z-10" />

          {/* ── Phase 1: Progress loader ── */}
          <AnimatePresence>
            {phase === "loading" && (
              <motion.div
                key="loader"
                className="fixed inset-0 z-[9999] bg-black"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Logo — exact same position as FloatingLogo intro center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36">
                  <Image
                    src={logo}
                    alt="Logo"
                    fill
                    priority
                    className="rounded-full object-contain"
                  />
                </div>
                {/* Progress bar below the logo */}
                <div className="absolute top-[calc(50%+90px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-32">
                  <div className="w-full h-[4px] bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-white/50 text-xs font-mono tracking-widest">
                    {progress}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Phase 2 & 3: Centered logo + scroll hint ── */}
          {(phase === "intro" || phase === "animating") && (
            <>
              <FloatingLogo
                phase={phase === "intro" ? "intro" : "animating"}
                onAnimationComplete={() => setPhase("ready")}
              />
              <AnimatePresence>
                {phase === "intro" && (
                  <motion.div
                    key="scroll-hint"
                    className="fixed bottom-10 inset-x-0 z-[300] flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-sans">
                      Scroll to explore
                    </span>
                    <motion.svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.6}
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.3,
                        ease: "easeInOut",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* ── Navbar: always visible after loading; logo hidden until ready ── */}
          {phase !== "loading" && (
            <div className="h-[9vh] w-full bg-transparent z-10 relative">
              <Navbar showLogo={phase === "ready"} />
            </div>
          )}

          {/* ── Scroll progress bar ── */}
          {phase === "ready" && <ScrollProgress />}

          {/* ── Page content: fades in when ready ── */}
          <AnimatePresence>
            {phase === "ready" && (
              <motion.div
                key="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative z-10">{children}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </body>
    </html>
  );
}
