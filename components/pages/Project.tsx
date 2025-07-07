"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import photo from "../../public/assets/project.png";

const projects = [
  {
    projectName: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    stacksUsed: ["React", "Tailwind CSS", "Next.js"],
    gitHubLink: "https://github.com/username/portfolio-website",
    liveLink: "https://username.github.io/portfolio-website",
    image: photo,
  },
  {
    projectName: "E-commerce Store",
    description:
      "An online store for electronics with shopping cart and payment integration.",
    stacksUsed: ["React", "Node.js", "Express", "MongoDB"],
    gitHubLink: "https://github.com/username/ecommerce-store",
    liveLink: "https://ecommerce-store.example.com",
    image: photo,
  },
  {
    projectName: "Chat App",
    description:
      "A real-time chat application with rooms and private messaging.",
    stacksUsed: ["React", "Socket.io", "Node.js"],
    gitHubLink: "https://github.com/username/chat-app",
    liveLink: "https://chat-app.example.com",
    image: photo,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="border border-white/50 rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all flex flex-col">
      {/* Project image */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.projectName} Screenshot`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          priority
        />
      </div>

      {/* Text content */}
      <h2 className="text-gray-100 text-xl font-bold mb-2">
        {project.projectName}
      </h2>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.stacksUsed.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-[#3dcf91]/10 text-[#3dcf91] border border-[#3dcf91] px-3 py-1 rounded-lg font-medium"
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
          className="inline-flex items-center gap-2 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[14px] rounded-[10px] px-4 py-3 w-full justify-center transition-colors duration-300 whitespace-nowrap"
        >
          <Github size={18} className="text-[#3dcf91]" /> GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[14px] rounded-[10px] px-4 py-3 w-full justify-center transition-colors duration-300 whitespace-nowrap"
        >
          <ExternalLink size={18} className="text-[#3dcf91]" /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <section id="project" className="py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-100 text-3xl font-bold mb-10 text-center">
          My <span className="text-[#3dcf91]">Projects</span>
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
