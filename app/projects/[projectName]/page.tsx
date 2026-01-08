"use client";

import { Calendar, CheckCircle, ExternalLink, Github, Tag } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

// Mock photo import - replace with your actual photo import

// Define the project type
interface Project {
  projectName: string;
  description: string;
  longDescription: string;
  stacksUsed: string[];
  gitHubLink: string;
  liveLink: string;
  image: string;
  additionalImages: string[];
  features: string[];
  completionDate: string;
  category: string;
  developmentProcess?: string;
  challengesAndSolutions?: string;
}

interface ProjectDetailPageProps {
  project: Project;
  onGoBack?: () => void;
}

function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allImages = [project.image, ...project.additionalImages];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-3">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            {project.projectName}
          </h1>
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar size={16} />
              <span>Completed: {project.completionDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Tag size={16} />
              <span>{project.category}</span>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={allImages[selectedImageIndex]}
                alt={`${project.projectName} Screenshot ${selectedImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className=""
                priority
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-[#3dcf91] opacity-100"
                      : "border-gray-600 opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stacksUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#3dcf91]/10 text-[#3dcf91] border border-[#3dcf91] px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Project Links
              </h3>
              <div className="flex gap-4">
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white rounded-lg px-6 py-3 transition-colors duration-300"
                >
                  <Github size={20} className="text-[#3dcf91]" />
                  View Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3dcf91] hover:bg-[#3dcf91]/80 font-bold text-white rounded-lg px-6 py-3 transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project Info Card */}
            <div className="bg-[rgba(55,56,56,0.3)] border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Project Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[rgba(55,56,56,0.3)] border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
            <CheckCircle className="text-[#3dcf91]" size={24} />
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  className="text-[#3dcf91] mt-0.5 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgba(55,56,56,0.3)] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">
              Development Process
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project?.developmentProcess}
            </p>
          </div>

          <div className="bg-[rgba(55,56,56,0.3)] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">
              Challenges & Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project?.challengesAndSolutions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component with sample data
import { projects } from "@/app/json";

// Wrapper component: find the correct project from the single `projects` array
export default function ProjectDetailDemo() {
  const params = useParams();
  const router = useRouter();

  // dynamic segment name is `projectName` (from folder [projectName])
  const projectSlug = params?.projectName ?? "";

  const sampleProject =
    projects.find(
      (p) => p.projectName.toLowerCase().replace(/\s+/g, "-") === projectSlug
    ) || projects[0];

  return <ProjectDetailPage project={sampleProject} />;
}

// Export the main component for use in your app
export { ProjectDetailPage };
