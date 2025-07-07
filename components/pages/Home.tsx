"use client";

import { FileText, Mail } from "lucide-react";

import Typing from "../Type/Type";
function Homes() {
  const words = [
    {
      text: "Siva",
      className: "text-white text-[2rem]",
    },
    {
      text: "Balan",
      className: "text-white text-[2rem]",
    },
  ];
  return (
    <div className="h-[90vh]  flex items-center justify-center px-4">
      <div className="w-full max-w-5xl relative  z-10 flex flex-col items-center sm:items-start ">
        <div className="tracking-wide w-full md:pl-11 lg:p-0">
          <h3 className="text-[#3dcf91] uppercase text-[16px] sm:text-[1.1rem] font-bold mb-2 text-center sm:text-left">
            Hi There!, I'm-
          </h3>

          <div className="text-[2.2rem] sm:text-[4rem] md:text-[5rem] font-bold mb-6 text-center sm:text-left leading-tight break-words">
            <Typing />
          </div>

          <h3 className="font-bold text-sm sm:text-[1.2rem] text-[rgba(204,204,204,0.65)] uppercase tracking-wide mb-6 text-center sm:text-left">
            I am a <span className="text-white">Front End Developer</span>
            <br className="hidden sm:block" />
          </h3>

          <div className="mt-4 text-center sm:text-left">
            <p className="mb-4 text-sm sm:text-base font-medium text-[rgba(204,204,204,0.65)]">
              Currently specializing in Frontend (Next.js, React)
            </p>

            <div className="flex  items-center sm:items-start justify-center sm:justify-start gap-4 pb-10">
              <a
                href="mailto:pmsiva.1906@gmail.com"
                className="inline-flex items-center gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[15px] rounded-[10px] px-8 py-[12px] min-w-[140px] justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} className="text-[#3dcf91]" /> Email
              </a>

              <a
                href="https://github.com/Cruz3196"
                className="inline-flex items-center gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-[15px] rounded-[10px] px-8 py-[12px] min-w-[140px] justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={20} className="text-[#3dcf91]" /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;

// <div className="h-full w-[53rem] flex items-center justify-center">
//       <div className="w-full  justify-center md:pl-[8rem]">
//         <h1 className="pb-[15px] text-[2.4em] pl-[40px]">
//           Hi There!{" "}
//           <span className="wave" role="img" aria-labelledby="wave">
//             👋🏻
//           </span>
//         </h1>
//         {/* Fixed name: not animated */}
//         <h1 className="text-[2.5em] pl-[40px]">
//           I'M <strong className="text-[#3dcf91]">SIVA BALAN</strong>
//         </h1>
//         {/* Only this part animates */}
//         <div className="p-2 text-[2rem] mb-7 h-[20px] md:pt-[50px] text-[2em] text-[#3dcf91]  pl-[45px]">
//           <Typewriter
//             options={{
//               strings: [
//                 "Software Developer",
//                 "Freelancer",
//                 "MERN Stack Developer",
//                 "Open Source Contributor",
//               ],
//               autoStart: true,
//               loop: true,
//               deleteSpeed: 50,
//             }}
//           />
//         </div>
//       </div>
//     </div>

//     <div className="hidden md:flex justify-center items-center h-full w-[53rem]">
//       <Image
//         src={image}
//         alt="About Developer"
//         width={600}
//         height={505}
//         priority
//       />
//     </div>
