"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/assets/logo.png";

export type LogoPhase = "intro" | "animating";

interface FloatingLogoProps {
  phase: LogoPhase;
  onAnimationComplete?: () => void;
}

export function FloatingLogo({ phase, onAnimationComplete }: FloatingLogoProps) {
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const measure = () =>
      setDims({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (!dims) return null;

  const endX = 44;
  const endY = Math.max(0, (dims.h * 0.09 - 45) / 2);
  const centerX = dims.w / 2 - 72;  // half of 144px logo
  const centerY = dims.h / 2 - 72;

  // center → navbar
  if (phase === "animating") {
    return (
      <motion.div
        style={{ position: "fixed", top: 0, left: 0, zIndex: 200, pointerEvents: "none" }}
        initial={{ x: centerX, y: centerY, width: 144, height: 144 }}
        animate={{ x: endX, y: endY, width: 45, height: 45 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      >
        <Image src={logo} alt="Logo" fill priority className="rounded-full object-contain" />
      </motion.div>
    );
  }

  // intro — static at center
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate(${centerX}px, ${centerY}px)`,
        width: 144,
        height: 144,
        zIndex: 200,
        pointerEvents: "none",
      }}
    >
      <Image src={logo} alt="Logo" fill priority className="rounded-full object-contain" />
    </div>
  );
}
