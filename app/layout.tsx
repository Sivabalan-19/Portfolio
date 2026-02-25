"use client";

import { Navbar } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { fontDisplay, fontMono, fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import "../styles/globals.css";


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
      <body
        className={cn(
          "h-screen w-screen z-10 overflow-hidden bg-black items-center justify-center",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable
        )}
      >
        <>
          <ShootingStars className="z-10" />
          <StarsBackground className="z-10" />

          <div className="h-[9vh] w-full bg-transparent z-10 relative">
            <Navbar />
          </div>

          <div className="h-[91vh] overflow-y-scroll max-xs:scrollbar-hide z-10 relative">
            {children}
          </div>
        </>
      </body>
    </html>
  );
}
