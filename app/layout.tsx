"use client";

import { Navbar } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";
import "../styles/globals.css";
const VantaBackground = dynamic(() => import("../components/back"), {
  ssr: false,
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Sivabalan | Portfolio</title>
      </head>
      <body className="h-screen w-screen z-10 overflow-hidden bg-black  items-center justify-center">
        <>
          <ShootingStars className="z-10" />
          <StarsBackground className="z-10" />

          {/* <AnimatedGridPattern
            duration={1}
            width={30}
            numSquares={20}
            height={30}
            repeatDelay={1}
            maxOpacity={0.25}
          /> */}
          {/* <BackgroundBeams /> */}
          {/* <VantaBackground /> */}
          {/* <RetroGrid /> */}
          {/* <ScrollProgress className="top-[65px]" /> */}

          <div className="h-[9vh] w-full bg-transparent z-10 relative">
            <Navbar />
          </div>

          <div className="h-[91vh] overflow-y-scroll z-10 relative">{children}</div>
        </>
      </body>
    </html>
  );
}
