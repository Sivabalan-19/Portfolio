"use client";

import { languages, tools } from "../../app/json/index";
import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaPython,
  FaNodeJs,
  FaSlack,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiVercel,
  SiFigma,
  SiFirebase,
  SiNotion,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

import { InfiniteSkillScroller } from "../ui/infinite-moving-cards";

function About() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-medium">
        Know Who <strong className="text-[#3dcf91]">I'M</strong>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-12 max-w-screen-lg mx-auto">
        <div className="w-full text-[1rem] md:text-[1.1rem] text-white leading-relaxed text-justify">
          Hi! I'm <strong className="text-[#3dcf91]">Sivabalan</strong>, a
          front-end developer with a passion for creating user-friendly
          websites. My passion for web development motivates me to expand my
          knowledge and turn complex challenges into solutions. My ultimate goal
          is to become a full stack developer, learning both the front-end and
          back-end technologies. <br />
          <br />
          Are you looking to bring your digital vision to life or seeking a
          dedicated developer to join your team? Let's connect and explore how
          we can create something extraordinary together.
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-[200px] h-[200px] bg-gray-800 rounded-full flex items-center justify-center text-white text-4xl">
            {/* Placeholder for image or content */}
            👨‍💻
          </div>
        </div>
      </div>

      <div className="text-center text-2xl sm:text-3xl md:text-4xl mb-8">
        What I <strong className="text-[#3dcf91]">Work</strong> With
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-full">
          <InfiniteSkillScroller
            direction="left"
            speed="normal"
            skills={languages}
          />
        </div>
        <div className="w-full">
          <InfiniteSkillScroller
            direction="right"
            speed="normal"
            skills={tools}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
