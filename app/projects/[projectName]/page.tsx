"use client";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Mock photo import - replace with your actual photo import
const photo = "/api/placeholder/600/400";

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
}

interface ProjectDetailPageProps {
  project: Project;
  onGoBack?: () => void;
}

function ProjectDetailPage({ project, onGoBack }: ProjectDetailPageProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      router.push("/projects");
    }
  };

  const allImages = [project.image, ...project.additionalImages];

  return (
    <div className="min-h-screen py-8 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-[#3dcf91] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

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
                objectFit="cover"
                className="rounded-xl"
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
              This project was built using modern web development practices with
              a focus on performance, accessibility, and user experience. The
              development process included thorough planning, iterative
              development, and comprehensive testing to ensure a robust final
              product.
            </p>
          </div>

          <div className="bg-[rgba(55,56,56,0.3)] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-100 mb-3">
              Challenges & Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed">
              During development, various challenges were encountered and solved
              through careful research and implementation of best practices. The
              final solution demonstrates effective problem-solving and
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component with sample data
export default function ProjectDetailDemo() {
  // Sample project data for demonstration
  const sampleProject = {
    projectName: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects with modern design and smooth animations.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include smooth scrolling, dark mode, project showcases, contact forms, and optimized performance. The site is fully responsive and includes animations that enhance user experience without compromising loading speed.",
    stacksUsed: ["React", "Tailwind CSS", "Next.js"],
    gitHubLink: "https://github.com/username/portfolio-website",
    liveLink: "https://username.github.io/portfolio-website",
    image: photo,
    additionalImages: [photo, photo, photo],
    features: [
      "Responsive design that works on all devices",
      "Dark mode with smooth transitions",
      "Smooth scrolling navigation",
      "Contact form with email integration",
      "Project showcase with filtering",
      "SEO optimized with meta tags",
      "Fast loading with Next.js optimization",
    ],
    completionDate: "January 2025",
    category: "Frontend Development",
  };

  return <ProjectDetailPage project={sampleProject} />;
}

// Export the main component for use in your app
export { ProjectDetailPage };
