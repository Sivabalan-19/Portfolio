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
  },
  {
    projectName: "E-commerce Store",
    description:
      "An online store for electronics with shopping cart, payment integration, and admin dashboard.",
    longDescription:
      "A full-featured e-commerce platform for electronics with secure payment processing, inventory management, and user authentication. Built with the MERN stack, it includes features like product filtering, user reviews, order tracking, and a comprehensive admin panel for managing products, orders, and customers.",
    stacksUsed: ["React", "Node.js", "Express", "MongoDB"],
    gitHubLink: "https://github.com/username/ecommerce-store",
    liveLink: "https://ecommerce-store.example.com",
    image: photo,
    additionalImages: [photo, photo, photo],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment gateway integration",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Customer reviews and ratings system",
      "Email notifications for orders",
      "Responsive design for mobile shopping",
    ],
    completionDate: "December 2024",
    category: "Full Stack Development",
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
    image: photo,
    additionalImages: [photo, photo, photo],
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
