"use client";

import { Navbar } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { fontDisplay, fontMono, fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { SpinningText } from "@/components/ui/spinning-text";
import "../styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 4 seconds loader

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

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

          {/* Loader overlay */}
          {loading ? (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
              <SpinningText>learn more • earn more • grow more •</SpinningText>
            </div>
          ) : (
            <>
              <div className="h-[9vh] w-full bg-transparent z-10 relative">
                <Navbar />
              </div>

              <div className={"relative z-10"}>{children}</div>
            </>
          )}
        </>
      </body>
    </html>
  );
}
