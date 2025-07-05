"use client";

import React, { useEffect, useState } from "react";
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
  //   SiVisualstudiocode,/
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
      hover: "hover:text-yellow-400 hover:border-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact />,
      hover: "hover:text-cyan-400 hover:border-cyan-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      hover: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      hover: "hover:text-orange-500 hover:border-orange-500",
    },
    {
      name: "Python",
      icon: <FaPython />,
      hover: "hover:text-yellow-300 hover:border-yellow-300",
    },
    {
      name: "C",
      icon: <SiC />,
      hover: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      hover: "hover:text-blue-300 hover:border-blue-300",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      hover: "hover:text-sky-400 hover:border-sky-400",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      hover: "hover:text-white hover:border-white",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      hover: "hover:text-green-500 hover:border-green-500",
    },
  ];

  const tools = [
    {
      name: "Slack",
      icon: <FaSlack />,
      hover: "hover:text-pink-400 hover:border-pink-400",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      hover: "hover:text-orange-400 hover:border-orange-400",
    },
    {
      name: "VS Code",
      icon: <DiVisualstudio />,
      hover: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      hover: "hover:text-white hover:border-white",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      hover: "hover:text-gray-200 hover:border-gray-200",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      hover: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      hover: "hover:text-yellow-400 hover:border-yellow-400",
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      hover: "hover:text-white hover:border-white",
    },
   
  ];

  return (
    <div className="h-full">
      <div className="w-full pt-[2.1rem] flex justify-center text-[2rem]">
        Know Who&nbsp;<strong className="text-[#cd5ff8]"> I'M</strong>
      </div>
      <div className="py-[5.2rem] w-[55rem] flex items-center justify-between">
        <div className="w-full text-justify md:pl-[4rem] pr-[4rem] text-[1.4rem] text-justify">
          Hi! I'm <strong className="text-[#cd5ff8]">Sivabalan</strong>, a
          front-end developer with a passion for creating user-friendly
          websites. My passion for web development motivates me to expand my
          knowledge and turn complex challenges into solutions. My ultimate goal
          is to become a full stack developer, learning both the front-end and
          back-end technologies. <br /> <br />
          Are you looking to bring your digital vision to life or seeking a
          dedicated developer to join your team? Let's connect and explore how
          we can create something extraordinary together. Whether you're a
          potential client or employer, I'm excited to discuss how my skills and
          passion can contribute to your success.
        </div>
        <div>hioi</div>
      </div>
      <div className="w-full text-center text-[2.1rem]">
        What I <strong className="text-[#cd5ff8]">Work</strong> With
      </div>

      <div className="w-full flex flex-col items-center py-5 gap-4">
        <div className="w-[90rem]">
          <InfiniteSkillScroller
            direction="right"
            speed="normal"
            skills={tools}
          />
        </div>
        <div className="w-[90rem]">
          <InfiniteSkillScroller
            direction="left"
            speed="normal"
            skills={languages}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
