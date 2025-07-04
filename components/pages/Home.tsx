"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import image from "../../public/assets/image.png";
function Homes({ sub }) {
  return (
    <div className="h-full mb-3 flex">
      <div className="h-full w-[53rem] flex items-center justify-center">
        <div className="w-full  justify-center md:pl-[8rem]">
          <h1 className="pb-[15px] text-[2.4em] pl-[40px]">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          {/* Fixed name: not animated */}
          <h1 className="text-[2.5em] pl-[40px]">
            I'M <strong className="text-[#cd5ff8]">SIVA BALAN</strong>
          </h1>
          {/* Only this part animates */}
          <div className="p-2 text-[2rem] mb-7 h-[20px] md:pt-[50px] text-[2em] text-[#cd5ff8]  pl-[45px]">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Freelancer",
                  "MERN Stack Developer",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center h-full w-[53rem]">
        <Image
          src={image}
          alt="About Developer"
          width={600}
          height={505}
          priority
        />
      </div>
    </div>
  );
}

export default Homes;
