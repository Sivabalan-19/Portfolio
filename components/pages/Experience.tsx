"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Crayond from "../../public/assets/crayon.png";
import ThinkuniLogo from "../ThinkuniLogo";
import SectionHeader from "../section-header";

type Internship = {
  id: number;
  index: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: any;
  accent: string;
};

const internships: Internship[] = [
  {
    id: 1,
    index: "01",
    company: "Crayon'd",
    role: "Full-Stack Developer Intern",
    duration: "Sep 2024 – Apr 2025  ·  7 months",
    description:
      "Completed the Crayon'd Full-Stack Development Program, actively participating in rigorous learning sessions and contributing to real-world product development. Worked with React, Next.js, Tailwind CSS, Node.js, and REST APIs to build responsive web interfaces. A key contribution was to Emtax, a finance management app, where I developed UI screens based on designs and integrated them with APIs.",
    logo: Crayond,
    accent: "#3dcf91",
  },
  {
    id: 2,
    index: "02",
    company: "Thinkuni",
    role: "Frontend Developer Intern",
    duration: "Sep 2025 – Current  ·  Ongoing",
    description:
      "Working at Thinkuni, an all-in-one platform that brings together career, education, entertainment, food, and fashion services. Building the frontend using React and Tailwind CSS to deliver a seamless user experience across all verticals of the platform.",
    logo: "thinkuni",
    accent: "#3dcf91",
  },
];

const InternshipCard = ({ data }: { data: Internship }) => {
  return (
    <div className="relative w-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      <span
        className="absolute top-8 right-8 text-[10rem] sm:text-[14rem] font-black leading-none select-none pointer-events-none"
        style={{ color: data.accent, opacity: 0.06 }}
      >
        {data.index}
      </span>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-5">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: data.accent }}
          >
            Internship {data.index}
          </span>

          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              {data.company}
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-medium text-white/60">
              {data.role}
            </p>
          </div>

          <div
            className="flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full w-fit"
            style={{
              background: `${data.accent}18`,
              border: `1px solid ${data.accent}40`,
              color: data.accent,
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {data.duration}
          </div>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed text-justify">
            {data.description}
          </p>
        </div>

        {/* Right — logo card */}
        <div className="flex items-center justify-center">
          <div
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl flex items-center justify-center"
            style={{
              background: `${data.accent}10`,
              border: `1px solid ${data.accent}30`,
              boxShadow: `0 0 60px ${data.accent}18`,
            }}
          >
            {data.logo === "thinkuni" ? (
              <ThinkuniLogo className="w-28 h-10 sm:w-36 sm:h-14 md:w-40 md:h-16" />
            ) : (
              <Image
                src={data.logo}
                alt={data.company}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function Experience() {
  const totalCards = internships.length;
  const [activeCard, setActiveCard] = useState(0);
  const isAnimatingRef = useRef(false);
  const activeCardRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const DOWN_THRESHOLD = 28;

  useEffect(() => {
    activeCardRef.current = activeCard;
  }, [activeCard]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;

      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      if (deltaY >= DOWN_THRESHOLD && activeCardRef.current < totalCards - 1) {
        e.preventDefault();
        isAnimatingRef.current = true;
        setActiveCard((prev) => {
          const next = Math.min(prev + 1, totalCards - 1);
          activeCardRef.current = next;
          return next;
        });
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 550);
        return;
      }

      if (deltaY <= -DOWN_THRESHOLD && activeCardRef.current > 0) {
        e.preventDefault();
        isAnimatingRef.current = true;
        setActiveCard((prev) => {
          const next = Math.max(prev - 1, 0);
          activeCardRef.current = next;
          return next;
        });
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 550);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [totalCards]);

  const cardCounter = `${String(activeCard + 1).padStart(2, "0")} / ${String(totalCards).padStart(2, "0")}`;

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden font-sans"
    >
      {/* Header — absolute so it never affects card layout */}
      <div className="absolute top-6 sm:top-8 md:top-12 left-4 sm:left-6 md:left-8 lg:left-16 xl:left-20 2xl:left-32 z-30">
        <SectionHeader title="Experience" />
      </div>

      {/* Sliding cards — full h-screen */}
      <div className="relative h-full overflow-hidden">
        <motion.div
          animate={{ x: `-${activeCard * 100}vw` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex h-full"
        >
          {internships.map((data) => (
            <InternshipCard key={data.id} data={data} />
          ))}
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 text-white/20 text-xs font-mono">
          {cardCounter}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {internships.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background:
                  i === activeCard ? "#3dcf91" : "rgba(255,255,255,0.2)",
                transform: i === activeCard ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
export { Experience as HorizontalScrollCarousel };
