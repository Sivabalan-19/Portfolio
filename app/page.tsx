"use client";

import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Education from "@/components/pages/Education";
import HorizontalScrollCarousel from "@/components/pages/Experience";
import { } from /* SpinningText removed; loader moved to layout */ "@/components/ui/spinning-text";
import { ToastContainer } from "react-toastify";
import Homes from "../components/pages/Home";
import ProjectDetails from "../components/pages/Project";

export default function Home() {
  return (
    <div className="text-white h-full font-sans relative z-20">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <section id="home" className="h-full">
          <Homes />
        </section>

        <section id="about" className="">
          <About />
        </section>

        <section id="project">
          <ProjectDetails />
        </section>

        <section id="about" className="">
          <HorizontalScrollCarousel />
        </section>

        <section id="education">
          <Education />
        </section>
        <section id="contact" className="h-full">
          <Contact />
        </section>
      </div>
    </div>
  );
}
