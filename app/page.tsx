"use client";

import About from "@/components/pages/About";
import Homes from "../components/pages/Home";
import Contact from "@/components/pages/Contact";
import { ToastContainer, toast } from "react-toastify";
import Project from "@/components/pages/Project";
export default function Home() {
  return (
    <div className="text-white h-full">
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

      <section id="project">
        <Project />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="contact" className="h-full">
        <Contact />
      </section>
    </div>
  );
}
