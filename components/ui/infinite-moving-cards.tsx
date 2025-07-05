"use client";
import React, { useEffect, useState } from "react";
export const InfiniteSkillScroller = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  skills,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  skills: { name: string; icon: React.ReactNode; hover: string }[];
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "10s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden max-w-full group ${className ?? ""} [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]`}
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full flex-nowrap gap-8 py-6 items-center ${start ? "animate-scroll" : ""} ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        {skills.map(({ name, icon, hover }) => (
          <li key={name} className="select-none">
            <div
              className={`border border-gray-500 rounded-2xl p-6 min-w-[160px] flex flex-col items-center justify-center text-white text-5xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 ${hover}`}
            >
              <div>{icon}</div>
              <span className="mt-3 text-base font-semibold text-white text-center">
                {name}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
      `}</style>
    </div>
  );
};
