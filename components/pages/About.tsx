"use client";

import Image from "next/image";
import { languages, tools } from "../../app/json/index";
import SectionHeader from "../section-header";
import { InfiniteSkillScroller } from "../ui/infinite-moving-cards";
import { LinkPreview } from "../ui/link-preview";
import Crayond from "../../public/assets/crayon.png";
import Profile_photo from "../../public/assets/img.jpg";

function About() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 font-sans">
      <SectionHeader title="About" className="mb-6 sm:mb-8 md:mb-12" />

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-8 sm:py-10 md:py-12 max-w-screen-xl mx-auto">
        <div className="w-full lg:w-3/5 text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify order-2 lg:order-1">
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

        <div className="w-full lg:w-2/5 flex items-center justify-center order-1 lg:order-2">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full flex items-center justify-center text-white text-4xl">
            {/* <Image src={Crayond} alt="Crayon'd" /> */}
            {/* <a className="rounded-full  flex items-center justify-center text-white text-4xl"> */}
            <Image
              src={Profile_photo}
              alt="Profile Photo"
              className="rounded-full w-full h-full object-cover"
            />
            {/* </a> */}
          </div>
        </div>
      </div>

      <SectionHeader title="Experience" className="mb-6 sm:mb-8 md:mb-12" />

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-8 sm:py-10 md:py-12 max-w-screen-xl mx-auto">
        <div className="w-full  lg:w-3/5 text-sm sm:text-base md:text-lg lg:text-xl text-white text-justify">
          I completed a one-year trainee role at{" "}
          <LinkPreview
            url="https://www.crayond.com/"
            className="text-[#3dcf91] font-semibold"
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
            className="text-[#3dcf91] font-semibold"
          >
            Emtax
          </LinkPreview>
          , a finance management app, where I developed UI screens based on
          given designs and integrated them with APIs.
        </div>

        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full flex items-center justify-center text-white text-4xl bg-white/10 backdrop-blur-sm">
            <Image
              src={Crayond}
              alt="Crayon'd"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
            />
          </div>
        </div>
      </div>

      <SectionHeader
        title="Skills"
        switch={true}
        className=" mb-6 sm:mb-8 md:mb-12"
      />

      <div className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
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
