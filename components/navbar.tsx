"use client";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll on click
  const handleScroll = (e: any, href: any) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Scroll listener to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // More than 60% of section in view
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[9vh] bg-transparent w-full fixed top-0 z-50">
      <div className="w-screen h-full bg-transparent">
        <div className="w-full h-full px-4 md:px-8 flex items-center">
          {/* Left - Logo */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="flex items-center pl-6 gap-2"
            >
              <Image
                src={logo}
                alt="Logo"
                width={45}
                height={45}
                priority
                className="rounded-full"
              />
            </a>
          </div>

          {/* Center - Nav items (Desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center gap-4 rounded-full px-2.5 py-2.5 bg-transparent backdrop-blur-lg border border-white/20 shadow-md">
            {navLinks.map((item, index) => (
              <a
                key={`${item.href}-${index}`}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={clsx(
                  "font-medium text-xs lg:text-sm px-3 py-1 rounded-full transition-all duration-300",
                  activeSection === item.href.replace("#", "")
                    ? " bg-gray-800 backdrop-blur-md text-white shadow-md  "
                    : "text-white bg-transparent hover:bg-white/10"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right - Social icons */}
          <div className="ml-auto flex md:flex gap-5">
            <a
              href="https://github.com/Sivabalan-19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:text-white hover:text-[#6e5494] transition"
            >
              <FaGithub className="text-[1.7rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/sivabalan1906/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] md:text-white hover:text-[#0A66C2]  transition"
            >
              <FaLinkedin className="text-[1.7rem]" />
            </a>
            <a
              href="https://leetcode.com/u/Sivabalan_1906/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFA116] md:text-white hover:text-[#FFA116]  transition"
            >
              <FaCode className="text-[1.7rem]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
