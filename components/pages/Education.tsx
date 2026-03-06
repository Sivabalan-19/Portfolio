"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "../section-header";

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  district: string;
  duration: string;
  grade?: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Bannari Amman Institute of Technology",
    district: "Erode",
    duration: "2023 – 2027",
    grade: "CGPA: 8.63 / 10",
    description:
      "Focused on software development, data structures, and web technologies.",
  },
  {
    id: 2,
    degree: "Higher Secondary (XII)",
    institution: "Sri Jayam Matriculation Higher Secondary School",
    district: "Tiruvannamalai",
    duration: "2022 – 2023",
    grade: "Percentage: 91%",
    description:
      "Specialized in Computer Science with Mathematics and Physics.",
  },

];

export default function Education() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 font-sans">
      <SectionHeader title="Education" className="mb-10 sm:mb-14" />

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3dcf91] via-[#3dcf91]/40 to-transparent" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[0.55rem] sm:left-[1.05rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#3dcf91] bg-[#0b0b0b]">
                <GraduationCap className="h-3.5 w-3.5 text-[#3dcf91]" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:p-7 transition-all hover:border-[#3dcf91]/40 hover:shadow-[0_0_30px_rgba(61,207,145,0.08)]">
                <span className="mb-2 inline-block rounded-full bg-[#3dcf91]/10 px-3 py-1 text-xs font-semibold text-[#3dcf91]">
                  {item.duration}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-white/60">
                  {item.institution}
                  <span className="ml-2 text-white/40">· {item.district}</span>
                </p>
                {item.grade && (
                  <p className="mt-2 text-sm font-medium text-[#3dcf91]">
                    {item.grade}
                  </p>
                )}
                {item.description && (
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
