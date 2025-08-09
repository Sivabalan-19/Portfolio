"use client";

import { useEffect, useRef } from "react";

export default function Typing() {
  const typedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const text = "Sivabalan";
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const el = typedRef.current;
      if (!el) return;

      if (isDeleting) {
        charIndex--;
        el.textContent = text.slice(0, charIndex);
      } else {
        charIndex++;
        el.textContent = text.slice(0, charIndex);
      }

      // if (!isDeleting && charIndex === text.length) {
      //   setTimeout(() => {
      //     isDeleting = true;
      //     type();
      //   }, 1000); // wait before deleting
      //   return;
      // }

      // if (isDeleting && charIndex === 0) {
      //   isDeleting = false;
      // }

      setTimeout(type, 120);
    };

    type();
  }, []);

  return (
    <div className="flex items-center justify-center sm:justify-start lg:ml-8 xl:ml-12 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-200 font-display font-bold">
      <span ref={typedRef}></span>
      <span className="animate-blink">|</span>
    </div>
  );
}
