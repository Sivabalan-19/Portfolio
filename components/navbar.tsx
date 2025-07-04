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
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }, // You need to add this section or remove link
  ];

  const handleScroll = (e: any, href: any) => {
    e.preventDefault();
    setMenuOpen(false); // close mobile menu if open
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      className="text-[#B13BFF]  backdrop-blur-md bg-white/5 border-b border-white/15 shadow-xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(177, 59, 255, 0.08) 0%, rgba(71, 19, 150, 0.12) 50%, rgba(9, 0, 64, 0.15) 100%)",
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
      }}
    >
      {/* Left Content - Logo/Brand */}
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex justify-start items-center gap-2"
          >
            {/* <Logo className="text-white" /> */}
            <Image
              src={logo}
              alt="About Developer"
              width={50}
              height={50}
              priority
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Right Content - Desktop Navigation */}
      <NavbarContent className="hidden md:flex gap-8" justify="end">
        {navLinks.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={clsx(
                "relative text-white font-medium text-sm lg:text-base px-2 py-2 transition-all duration-300 hover:text-[#B13BFF]",
                "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5",
                "before:bg-gradient-to-r before:from-[#B13BFF] before:to-[#4713FF] before:transition-all before:duration-300",
                "hover:before:w-full"
              )}
            >
              {item.label}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Right Content */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          className="text-[#B13BFF] hover:bg-white/8 hover:backdrop-blur-sm transition-all duration-300 rounded-lg p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      {menuOpen && (
        <NavbarMenu
          className="text-[#B13BFF] min-h-[50vh] max-h-[52vh] top-0 backdrop-blur-md border-b border-white/15 shadow-xl overflow-y-auto"
          style={{
            background:
              "linear-gradient(135deg, rgba(177, 59, 255, 0.1) 0%, rgba(71, 19, 150, 0.15) 50%, rgba(9, 0, 64, 0.2) 100%)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
          }}
        >
          <div className="mx-4 mt-4 flex flex-col gap-3 pb-4">
            {navLinks.map((item, index) => (
              <NavbarMenuItem key={`mobile-${item.href}-${index}`}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="relative text-[#B13BFF] font-medium px-4 py-3 rounded-lg block transition-all duration-300 hover:text-white hover:bg-white/8 hover:backdrop-blur-sm hover:shadow-lg"
                >
                  {item.label}
                </a>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}
    </HeroUINavbar>
  );
};
