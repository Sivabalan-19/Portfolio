"use client";

import { useEffect, useRef } from "react";

export default function Typing() {
  const typedRef = useRef(null);

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
    <div className="flex items-center font-serif  pl-[3.4rem] text-[2.5rem] sm:text-[3.5rem]  md:text-[4.5rem] lg:text-[7.2rem]  text-gray-200 font-bold">
      <span ref={typedRef}></span>
      <span className="animate-blink">|</span>
    </div>
  );
}
