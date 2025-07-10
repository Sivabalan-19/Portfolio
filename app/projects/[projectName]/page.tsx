"use client";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Code,
  Eye,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "../../json/index";

interface ProjectDetailsProps {
  params: {
    projectName: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const router = useRouter();
  const projectName = params.projectName;

  // Find the project by name slug
  const project = projects.find(
    (p) => p.projectName.toLowerCase().replace(/\s+/g, "-") === projectName
  );


  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.back()}
            className="bg-[#3dcf91] hover:bg-[#3dcf91]/80 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-300 hover:text-[#3dcf91] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.projectName} Hero`}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
          <div className="max-w-7xl mx-auto px-4 lg:px-20 h-full flex items-end pb-12">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-100">
                {project.projectName}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
                <Eye className="text-[#3dcf91]" size={24} />
                Project Overview
              </h2>
              <div className="bg-gray-800/50 border border-white/10 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {project.longDescription || project.description}
                </p>

                {/* Additional project details */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">
                    About this project
                  </h3>
                  <p className="text-gray-300">
                    This project demonstrates modern web development practices
                    using {project.stacksUsed.slice(0, -1).join(", ")}
                    {project.stacksUsed.length > 1
                      ? ` and ${project.stacksUsed.slice(-1)}`
                      : project.stacksUsed[0]}
                    . It showcases responsive design, clean code architecture,
                    and user-friendly interface design.
                  </p>
                </div>
              </div>
            </section>

            {/* Technologies Used */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
                <Code className="text-[#3dcf91]" size={24} />
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.stacksUsed.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="bg-[#3dcf91]/10 border border-[#3dcf91]/30 rounded-lg p-4 text-center hover:bg-[#3dcf91]/20 transition-colors group"
                  >
                    <span className="text-[#3dcf91] font-medium group-hover:text-[#3dcf91] transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Preview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Project Preview
              </h2>
              <div className="grid gap-6">
                {/* Main project image */}
                <div
                  className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <Image
                    src={project.image}
                    alt={`${project.projectName} Preview`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white text-sm">
                        Click to view live demo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project showcase cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-100 mb-3 flex items-center gap-2">
                      <Star className="text-[#3dcf91]" size={20} />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#3dcf91] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Modern and responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#3dcf91] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Clean and maintainable code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#3dcf91] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Optimized performance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-100 mb-3 flex items-center gap-2">
                      <Zap className="text-[#3dcf91]" size={20} />
                      Performance
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Loading Speed</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-[#3dcf91] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-400">Fast</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Mobile Friendly</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-[#3dcf91] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-400">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            {project.features && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">
                  Key Features
                </h2>
                <div className="grid gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-white/10 rounded-lg p-4 flex items-start gap-3 hover:bg-gray-800/70 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#3dcf91] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-100 mb-6">
                Project Details
              </h3>

              {/* Project Info */}
              <div className="space-y-4 mb-8">
                {project.completionDate && (
                  <div className="flex items-center gap-3">
                    <Calendar className="text-[#3dcf91]" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Completed</p>
                      <p className="text-gray-200">{project.completionDate}</p>
                    </div>
                  </div>
                )}

                {project.category && (
                  <div className="flex items-center gap-3">
                    <User className="text-[#3dcf91]" size={20} />
                    <div>
                      <p className="text-gray-400 text-sm">Category</p>
                      <p className="text-gray-200">{project.category}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Code className="text-[#3dcf91]" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Tech Stack</p>
                    <p className="text-gray-200">
                      {project.stacksUsed.length} Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#3dcf91] hover:bg-[#3dcf91]/80 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
