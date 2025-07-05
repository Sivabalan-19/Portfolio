"use client";

import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
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
          <AnimatedGridPattern
            duration={1}
            width={30}
            numSquares={20}
            height={30}
            repeatDelay={1}
            maxOpacity={0.25}
          />
      <body className="h-screen w-screen z-10 overflow-hidden bg-black  items-center justify-center">
        <>

          {/* <BackgroundBeams /> */}
          {/* <VantaBackground /> */}
          {/* <RetroGrid /> */}
          {/* <ScrollProgress className="top-[65px]" /> */}

          <div className="h-[9vh] w-full bg-transparent ">
            <Navbar />
          </div>

          <div className="h-[91vh] overflow-y-scroll">{children}</div>
        </>
      </body>
    </html>
  );
}
