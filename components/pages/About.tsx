"use client";

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
  const languages = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      hover:
        "text-yellow-400 lg:text-white lg:border-gray-500 hover:text-yellow-400 hover:border-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact />,
      hover:
        "text-cyan-400 lg:text-white lg:border-gray-500 hover:text-cyan-400 hover:border-cyan-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      hover:
        "text-blue-500 lg:text-white lg:border-gray-500 hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      hover:
        "text-orange-500 lg:text-white lg:border-gray-500 hover:text-orange-500 hover:border-orange-500",
    },
    {
      name: "Python",
      icon: <FaPython />,
      hover:
        "text-yellow-300 lg:text-white lg:border-gray-500 hover:text-yellow-300 hover:border-yellow-300",
    },
    {
      name: "C",
      icon: <SiC />,
      hover:
        "text-blue-400 lg:text-white lg:border-gray-500 hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      hover:
        "text-blue-300 lg:text-white lg:border-gray-500 hover:text-blue-300 hover:border-blue-300",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      hover:
        "text-sky-400 lg:text-white lg:border-gray-500 hover:text-sky-400 hover:border-sky-400",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      hover:
        "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      hover:
        "text-green-500 lg:text-white lg:border-gray-500 hover:text-green-500 hover:border-green-500",
    },
  ];

  const tools = [
    {
      name: "Slack",
      icon: <FaSlack />,
      hover:
        "text-pink-400 lg:text-white lg:border-gray-500 hover:text-pink-400 hover:border-pink-400",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      hover:
        "text-orange-400 lg:text-white lg:border-gray-500 hover:text-orange-400 hover:border-orange-400",
    },
    {
      name: "VS Code",
      icon: <DiVisualstudio />,
      hover:
        "text-blue-400 lg:text-white lg:border-gray-500 hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      hover:
        "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      hover:
        "text-gray-200 lg:text-white lg:border-gray-500 hover:text-gray-200 hover:border-gray-200",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      hover:
        "text-pink-500 lg:text-white lg:border-gray-500 hover:text-pink-500 hover:border-pink-500",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      hover:
        "text-yellow-400 lg:text-white lg:border-gray-500 hover:text-yellow-400 hover:border-yellow-400",
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      hover:
        "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
    },
  ];

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
