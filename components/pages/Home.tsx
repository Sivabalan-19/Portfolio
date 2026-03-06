"use client";

import { FileText, Mail } from "lucide-react";

import { TypingAnimation } from "../ui/typing-animation";
function Homes() {
  return (
    <div className="min-h-[100vh] sm:min-h-[90vh] flex items-center justify-start font-sans">
      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 font-sans">
          <h3 className="text-[#3dcf91] uppercase text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 text-center sm:text-left font-sans">
            Hi There!, I&apos;m-
          </h3>

          <div className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 text-center sm:text-left leading-tight break-words">
            <TypingAnimation typeSpeed={100}>Sivabalan</TypingAnimation>
          </div>

          <h3 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[rgba(204,204,204,0.65)] uppercase tracking-wide mb-4 sm:mb-6 text-center sm:text-left font-sans">
            I am a <span className="text-white">Front End Developer</span>
            <br className="hidden sm:block" />
          </h3>

          <div className="mt-2 sm:mt-4 text-center sm:text-left">
            <p className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-[rgba(204,204,204,0.65)] max-w-2xl mx-auto sm:mx-0 font-sans">
              Currently specializing in Frontend (Next.js, React)
            </p>

            <div className="flex flex-col xs:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-4 pb-6 sm:pb-10">
              <a
                href="mailto:pmsiva.1906@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-xs xs:text-sm sm:text-base rounded-lg px-4 py-3 min-w-40  justify-center font-sans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={16} className="text-[#3dcf91] sm:w-5 sm:h-5" />{" "}
                Email
              </a>

              <a
                href="/resume/resume.pdf"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-xs xs:text-sm sm:text-base rounded-lg px-4 py-3 min-w-40 justify-center font-sans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} className="text-[#3dcf91] sm:w-5 sm:h-5" />{" "}
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
