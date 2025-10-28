// lib/data.js (or data/tech.js)
import { DiVisualstudio } from "react-icons/di";
import {
  FaGitAlt,
  FaGithub,
  FaJava,
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

import photo1 from "../../public/assets/project/portfolio/image1.png";
import photo2 from "../../public/assets/project/portfolio/image2.png";
import photo3 from "../../public/assets/project/portfolio/image3.png";

import photo1int from "../../public/assets/project/interview/image1.png";

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
      "A personal portfolio website to showcase my skills and projects with modern design and smooth animations.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include smooth scrolling, dark mode, project showcases, contact forms, and optimized performance. The site is fully responsive and includes animations that enhance user experience without compromising loading speed.",
    stacksUsed: ["React", "Tailwind CSS", "Next.js"],
    gitHubLink: "https://github.com/Sivabalan-19/Portfolio",
    liveLink: "https://username.github.io/portfolio-website",
    image: photo1,
    additionalImages: [photo2, photo3],
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
  },
  {
    projectName: "Intview Scheduler",
    description:
      "An online scheduling tool for interviews with calendar integration and user management.",
    longDescription:
      "Intview Scheduler is a comprehensive scheduling tool designed for managing interviews efficiently. It features calendar integration, user authentication, and a responsive design. Built with the MERN stack, it allows users to create, update, and delete interview slots, send notifications, and manage candidates seamlessly.",
    stacksUsed: ["Next.js", "Prisma", "PostgresQL", "Node.js", "LiveKit"],
    gitHubLink: "https://github.com/username/intview-scheduler",
    liveLink: "https://the-codemeet.vercel.app/",
    image: photo1int,
    additionalImages: [photo1int, photo1int],
    features: [
      "Role-based authentication for Admin, Interviewer, and Candidate",
      "Admin approval system for new users",
      "Interview scheduling based on availability",
      "Real-time video and audio communication using LiveKit",
      "Built-in collaborative code editor with auto-evaluation",
      "Automatic test case checking and result scoring",
      "Interviewer feedback system with ratings and comments",
      "Candidate onboarding with resume and skill upload",
      "Admin dashboard for managing users and interviews",
      "Interview history and performance tracking",
      "Email or notification system for interview updates",
    ],
    completionDate: "October 2025",
    category: "Full Stack Development",
    developmentProcess:
      "The development process involved thorough planning and iterative development using the MERN stack. Key features were prioritized to enhance user experience and functionality.",
    challengesAndSolutions:
      "One of the main challenges was implementing real-time communication and collaborative coding. This was addressed by integrating LiveKit for video/audio and building a custom code editor with auto-evaluation capabilities.",
  },
  {
    projectName: "Chat App",
    description:
      "A real-time chat application with rooms, private messaging, and file sharing capabilities.",
    longDescription:
      "A modern real-time chat application built with Socket.io and React. Features include private messaging, group chats, file sharing, emoji support, and typing indicators. The application supports multiple chat rooms, user presence indicators, and message history with a clean, intuitive interface.",
    stacksUsed: ["React", "Socket.io", "Node.js"],
    gitHubLink: "https://github.com/username/chat-app",
    liveLink: "https://chat-app.example.com",
    image: photo1,
    additionalImages: [photo2, photo3],
    features: [
      "Real-time messaging with Socket.io",
      "Private messaging between users",
      "Group chat rooms with admin controls",
      "File and image sharing",
      "Emoji picker and reactions",
      "Typing indicators and read receipts",
      "User presence and online status",
      "Message search and history",
      "Responsive design for mobile chat",
      "User authentication and profiles",
    ],
    completionDate: "November 2024",
    category: "Real-time Applications",
  },
];
