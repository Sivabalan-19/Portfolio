"use client";
import Image from "next/image";
import logo from "../public/assets/logos.png";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import clsx from "clsx";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: any, href: any) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="h-[9vh] bg-transparent w-full">
      <div className="w-screen h-full bg-transparent">
        <div className="w-full h-full  px-4 md:px-8 flex items-center">
          {/* Left - Logo */}
          <div className="">
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
                    ? "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md"
                    : "text-white bg-transparent hover:bg-white/10"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right - Social icons */}
          <div className="ml-auto hidden md:flex gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#6e5494]  transition"
            >
              <FaGithub className="text-[1.7rem]" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition"
            >
              <FaLinkedin className="text-[1.7rem]"  />
            </a>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFA116] transition"
            >
              <FaCode className="text-[1.7rem]"  />
            </a>
          </div>

          {/* Mobile Toggle Hidden */}
        </div>
      </div>
    </div>
  );
};
