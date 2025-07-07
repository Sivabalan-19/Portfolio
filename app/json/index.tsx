// lib/data.js (or data/tech.js)
import { DiVisualstudio } from "react-icons/di";
import {
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiFigma,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import photo from "../../public/assets/project.png";

export const languages = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    hover:
      "text-yellow-400 lg:text-white lg:border-gray-500 hover:text-yellow-400 hover:border-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    hover:
      "text-cyan-400 lg:text-white lg:border-gray-500 hover:text-cyan-400 hover:border-cyan-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    hover:
      "text-blue-500 lg:text-white lg:border-gray-500 hover:text-blue-500 hover:border-blue-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    hover:
      "text-orange-500 lg:text-white lg:border-gray-500 hover:text-orange-500 hover:border-orange-500",
  },
  {
    name: "Python",
    icon: <FaPython />,
    hover:
      "text-yellow-300 lg:text-white lg:border-gray-500 hover:text-yellow-300 hover:border-yellow-300",
  },
  {
    name: "C",
    icon: <SiC />,
    hover:
      "text-blue-400 lg:text-white lg:border-gray-500 hover:text-blue-400 hover:border-blue-400",
  },
  {
    name: "Java",
    icon: <FaJava />, // using react-icons
    hover:
      "text-orange-500 lg:text-white lg:border-gray-500 hover:text-orange-500 hover:border-orange-500",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    hover:
      "text-blue-300 lg:text-white lg:border-gray-500 hover:text-blue-300 hover:border-blue-300",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    hover:
      "text-sky-400 lg:text-white lg:border-gray-500 hover:text-sky-400 hover:border-sky-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    hover:
      "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    hover:
      "text-green-500 lg:text-white lg:border-gray-500 hover:text-green-500 hover:border-green-500",
  },
];

export const tools = [
  {
    name: "Slack",
    icon: <FaSlack />,
    hover:
      "text-pink-400 lg:text-white lg:border-gray-500 hover:text-pink-400 hover:border-pink-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    hover:
      "text-orange-400 lg:text-white lg:border-gray-500 hover:text-orange-400 hover:border-orange-400",
  },
  {
    name: "VS Code",
    icon: <DiVisualstudio />,
    hover:
      "text-blue-400 lg:text-white lg:border-gray-500 hover:text-blue-400 hover:border-blue-400",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    hover:
      "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    hover:
      "text-gray-200 lg:text-white lg:border-gray-500 hover:text-gray-200 hover:border-gray-200",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    hover:
      "text-pink-500 lg:text-white lg:border-gray-500 hover:text-pink-500 hover:border-pink-500",
  },
  {
    name: "Notion",
    icon: <SiNotion />,
    hover:
      "text-white lg:text-white lg:border-gray-500 hover:text-white hover:border-white",
  },
];

export const projects = [
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
