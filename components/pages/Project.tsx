"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/app/json";

function ProjectCard({ project }: { project: any }) {
  const router = useRouter();

  const handleProjectClick = () => {
    // Navigate to project details page using project name as slug
    const projectSlug = project.projectName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/projects/${projectSlug}`);
  };

  return (
    <div className="border cursor-pointer border-white/50 rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all flex flex-col font-sans">
      {/* Project image - clickable */}
      <div
        className="relative w-full h-48 mb-4 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        onClick={handleProjectClick}
      >
        <Image
          src={project.image}
          alt={`${project.projectName} Screenshot`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          priority
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-semibold font-sans">
            View Details
          </span>
        </div>
      </div>

      {/* Text content */}
      <h2
        className="text-gray-100 text-xl font-display font-bold mb-2 cursor-pointer hover:text-[#3dcf91] transition-colors"
        onClick={handleProjectClick}
      >
        {project.projectName}
      </h2>
      <p className="text-gray-300 mb-4 font-sans">{project.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.stacksUsed.map((tech: any, i: any) => (
            <span
              key={i}
              className="text-xs bg-[#3dcf91]/10 text-[#3dcf91] border border-[#3dcf91] px-3 py-1 rounded-lg font-medium font-sans"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex gap-3 mt-auto pt-2 border-t border-[#3dcf91]/20">
        <a
          href={project.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[14px] rounded-[10px] px-4 py-3 w-full justify-center transition-colors duration-300 whitespace-nowrap font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={18} className="text-[#3dcf91]" /> GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[14px] rounded-[10px] px-4 py-3 w-full justify-center transition-colors duration-300 whitespace-nowrap font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={18} className="text-[#3dcf91]" /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 font-sans">
      <div className="max-w-6xl">
        <h1 className="text-gray-100 text-3xl font-display font-bold mb-10 text-center">
          My <span className="text-[#3dcf91]">Projects</span>
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 justify-between md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
