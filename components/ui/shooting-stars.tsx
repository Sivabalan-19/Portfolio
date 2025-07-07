"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offsetX = Math.random() * window.innerWidth;
  const offsetY = Math.random() * window.innerHeight;

  switch (side) {
    case 0:
      return { x: offsetX, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offsetY, angle: 135 };
    case 2:
      return { x: offsetX, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offsetY, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Spawns a new star after a random delay
  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutRef.current = window.setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  // Animation loop to move the star smoothly
  useEffect(() => {
    const moveStar = () => {
      setStar((prevStar) => {
        if (!prevStar) return null;

        const radianAngle = (prevStar.angle * Math.PI) / 180;
        const newX = prevStar.x + prevStar.speed * Math.cos(radianAngle);
        const newY = prevStar.y + prevStar.speed * Math.sin(radianAngle);
        const newDistance = prevStar.distance + prevStar.speed;
        const newScale = 1 + newDistance / 100;

        if (
          newX < -20 ||
          newX > window.innerWidth + 20 ||
          newY < -20 ||
          newY > window.innerHeight + 20
        ) {
          return null; // star out of bounds, remove it to spawn a new one
        }

        return {
          ...prevStar,
          x: newX,
          y: newY,
          distance: newDistance,
          scale: newScale,
        };
      });

      animationFrameId.current = requestAnimationFrame(moveStar);
    };

    animationFrameId.current = requestAnimationFrame(moveStar);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className
      )}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};