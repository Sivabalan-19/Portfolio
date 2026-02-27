"use client";

import { languages, tools } from "../../app/json/index";
import SectionHeader from "../section-header";
import { InfiniteSkillScroller } from "../ui/infinite-moving-cards";

export default function Skill() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 font-sans">
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
