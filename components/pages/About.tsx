"use client";

import { languages, tools } from "../../app/json/index";
import Image from "next/image";
import { InfiniteSkillScroller } from "../ui/infinite-moving-cards";
import { LinkPreview } from "../ui/link-preview";
import Crayond from "../../public/assets/crayon.png";

function About() {
  return (
    <div className="w-full px-6 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-medium">
        Get to <span className="text-[#3dcf91]">Know Me</span>
        {/* <span className="text-[#3dcf91]">Internship</span> & Training */}
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-12 max-w-screen-lg mx-auto">
        <div className="w-full text-[1rem] md:text-[1.1rem] text-white  text-justify">
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
          {/* I completed a one-year trainee role at{" "}
          <LinkPreview
            url="https://www.crayond.com/"
            className="text-[#3dcf91]"
          >
            Crayon’d
          </LinkPreview>
          , a product engineering company in Chennai. As a Frontend Developer, I
          worked with React, Next.js, Tailwind CSS, and REST APIs to build
          responsive web interfaces.
          <br />
          <br /> One of my key contributions was to{" "}
          <LinkPreview
            url="https://emtax.vercel.app/login"
            className="text-[#3dcf91]"
          >
            Emtax
          </LinkPreview>
          , a finance management app, where I developed UI screens based on
          given designs and integrated them with APIs. */}
        </div>

        {/* <div className="w-full flex items-center justify-center">
          <div className="w-[200px] h-[200px] bg-gray-800 rounded-full flex items-center justify-center text-white text-4xl">
            <Image src={Crayond} alt="Crayon'd" />
          </div>
        </div> */}

        <div className="w-full flex items-center justify-center">
          <a className="w-[200px] h-[200px] bg-gray-800 rounded-full flex items-center justify-center text-white text-4xl">
            {/* Placeholder for image or content */} 👨‍💻
          </a>
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
