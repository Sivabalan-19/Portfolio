"use client";

import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import ProjectDetails from "@/components/pages/Project";
import { ToastContainer } from "react-toastify";
import Homes from "../components/pages/Home";
export default function Home() {
  return (
    <div className="text-white h-full font-sans relative z-20">
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
        theme="dark" // Optional: use "light", "dark", or "colored"
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

      <section id="contact" className="h-full">
        <Contact />
      </section>
    </div>
  );
}
