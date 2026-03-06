"use client";

import { Navbar } from "@/components/navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { fontDisplay, fontMono, fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import { FloatingLogo } from "@/components/floating-logo";
import logo from "../public/assets/logo.png";
import "../styles/globals.css";

type Phase = "loading" | "intro" | "animating" | "ready";

interface RootLayoutProps {
  children: ReactNode;
}

/* ── Scramble text hook ── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
function useScramble(text: string, trigger: boolean, delay = 0) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const total = 18;
    timeout = setTimeout(() => {
      const id = setInterval(() => {
        frame++;
        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (frame / total > i / text.length) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );
        if (frame >= total) clearInterval(id);
      }, 55);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [trigger, text, delay]);
  return display;
}

/* ── Shockwave ring component ── */
function ShockwaveRings({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="fixed inset-0 z-[290] pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="rounded-full border border-white/40"
                initial={{ width: 80, height: 80, opacity: 0.7 }}
                animate={{ width: 700, height: 700, opacity: 0 }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.18,
                  ease: [0.2, 0.8, 0.4, 1],
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Orbital rings around logo ── */
function OrbitalRings() {
  return (
    <div className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center">
      {/* Ring 1 – slow rotation */}
      <motion.div
        className="absolute rounded-full border border-white/10"
        style={{ width: 220, height: 220 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {/* Bright dot on ring */}
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/70"
          style={{ boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)" }}
        />
      </motion.div>

      {/* Ring 2 – counter-rotation, tilted */}
      <motion.div
        className="absolute rounded-full border border-white/8"
        style={{
          width: 300,
          height: 300,
          rotateX: 65,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/50"
          style={{ boxShadow: "0 0 6px 2px rgba(255,255,255,0.5)" }}
        />
      </motion.div>

      {/* Ring 3 – dashed, slower */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 370,
          height: 370,
          border: "1px dashed rgba(255,255,255,0.06)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20"
          initial={{ width: 100, height: 100, opacity: 0.4 }}
          animate={{ width: 280, height: 280, opacity: 0 }}
          transition={{
            duration: 2.8,
            delay: i * 0.9,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Ambient glow beneath logo ── */
function AmbientGlow() {
  return (
    <motion.div
      className="fixed inset-0 z-[190] pointer-events-none flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/* ── Corner bracket decorations ── */
function CornerBrackets() {
  const corners = [
    "top-8 left-8 border-t border-l",
    "top-8 right-8 border-t border-r",
    "bottom-8 left-8 border-b border-l",
    "bottom-8 right-8 border-b border-r",
  ];
  return (
    <>
      {corners.map((cls, i) => (
        <motion.div
          key={i}
          className={`fixed z-[250] w-8 h-8 border-white/30 ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
        />
      ))}
    </>
  );
}

/* ── Floating particles ── */
function FloatingParticles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    dur: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-[180] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -40, -80],
            x: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Progress loader with glitch effect ── */
function GlitchLoader({
  progress,
  onExit,
}: {
  progress: number;
  onExit: boolean;
}) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 80);
      }
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered logo (matches intro) */}
      <FloatingLogo phase="intro" zIndex={10000} />
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
      />

      <div className="flex flex-col items-center gap-6">
        {/* Glitching logo */}
        <div className="relative w-36 h-36">
          {/* Glitch chromatic layers */}
          <AnimatePresence>
            {glitch && (
              <>
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: 0 }}
                  animate={{ x: [-4, 4, -2, 0] }}
                  transition={{ duration: 0.08 }}
                  style={{
                    filter: "hue-rotate(90deg) saturate(3)",
                    opacity: 0.5,
                  }}
                >
                  <Image src={logo} alt="" fill className="object-contain" />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: 0 }}
                  animate={{ x: [3, -3, 1, 0] }}
                  transition={{ duration: 0.08 }}
                  style={{
                    filter: "hue-rotate(200deg) saturate(3)",
                    opacity: 0.5,
                  }}
                >
                  <Image src={logo} alt="" fill className="object-contain" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {/* base logo removed; FloatingLogo provides the centered logo */}
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-2 w-40">
          <div className="w-full h-[3px] bg-white/15 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.075 }}
            />
            {/* Shimmer on bar */}
            <motion.div
              className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: [-40, 200] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="flex items-center justify-center w-full">
            
            <span className="text-white/60 text-xs font-mono tracking-widest">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const [shockwave, setShockwave] = useState(false);
  const scrambleText = "SCROLL TO EXPLORE";

  // Progress counter
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

  // Scroll/swipe trigger with shockwave
  useEffect(() => {
    if (phase !== "intro") return;
    let armed = false;
    const arm = setTimeout(() => {
      armed = true;
    }, 400);
    const trigger = () => {
      if (!armed) return;
      setShockwave(true);
      setTimeout(() => setPhase("animating"), 150);
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

          {/* ── Phase 1: Glitch progress loader ── */}
          <AnimatePresence>
            {phase === "loading" && (
              <GlitchLoader progress={progress} onExit={phase !== "loading"} />
            )}
          </AnimatePresence>

          {/* ── Intro-only decorations ── */}
          <AnimatePresence>
            {phase === "intro" && (
              <>
                <FloatingParticles />
                <CornerBrackets />
              </>
            )}
          </AnimatePresence>

          {/* ── Shockwave on scroll trigger ── */}
          <ShockwaveRings trigger={shockwave} />

          {/* ── Phase 2 & 3: Centered logo + scroll hint ── */}
          {(phase === "intro" || phase === "animating") && (
            <>
              <FloatingLogo
                phase={phase === "intro" ? "intro" : "animating"}
                onAnimationComplete={() => setPhase("ready")}
              />

              {/* ── Scroll hint with scrambled text ── */}
              <AnimatePresence>
                {phase === "intro" && (
                  <motion.div
                    key="scroll-hint"
                    className="fixed bottom-10 inset-x-0 z-[300] flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {/* Scramble text */}
                    <span
                      className="text-white/70 tracking-[0.35em] uppercase font-mono text-xs"
                      aria-label="Scroll to explore"
                    >
                      {scrambleText}
                    </span>

                    {/* Animated mouse icon */}
                    <div className="relative flex flex-col items-center gap-1.5">
                      <svg
                        width="22"
                        height="34"
                        viewBox="0 0 22 34"
                        fill="none"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="1.5"
                      >
                        <rect x="1" y="1" width="20" height="32" rx="10" />
                        <motion.line
                          x1="11"
                          y1="8"
                          x2="11"
                          y2="14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          animate={{ y1: [8, 12, 8], y2: [14, 18, 14] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.4,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>

                      {/* Dotted trail */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-0.5 h-0.5 rounded-full bg-white/40"
                          animate={{ opacity: [0, 0.6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.4,
                            delay: i * 0.22,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* ── Navbar: visible after loading ── */}
          {phase !== "loading" && (
            <motion.div
              className="h-[9vh] w-full bg-transparent z-10 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Navbar showLogo={phase === "ready"} />
            </motion.div>
          )}

          {/* ── Scroll progress bar ── */}
          {phase === "ready" && <ScrollProgress />}

          {/* ── Page content fades in ── */}
          <AnimatePresence>
            {phase === "ready" && (
              <motion.div
                key="page"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
