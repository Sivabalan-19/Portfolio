"use client";

import About from "@/components/pages/About";
import Homes from "../components/pages/Home";

export default function Home() {
  return (
    <div className="text-white h-full">
      <section id="home" className="h-full">
        <Homes />
      </section>

      <section id="about" className="h-full">
        <About />
      </section>

      {/*  <section id="project" className="h-full">
        <Homes sub={"Project"}/>
      </section>

      <section id="resume" className="h-full">
        <Homes sub={"resu"}/>
      </section> */}
    </div>
  );
}
