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
    <div className="min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center px-4 py-8 sm:py-12 md:py-0">
      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center sm:items-start">
        <div className="tracking-wide w-full px-2 xs:px-4 sm:px-6 md:pl-11 lg:px-8 xl:px-0">
          <h3 className="text-[#3dcf91] uppercase text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 text-center sm:text-left">
            Hi There!, I'm-
          </h3>

          <div className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-center sm:text-left leading-tight break-words">
            <Typing />
          </div>

          <h3 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[rgba(204,204,204,0.65)] uppercase tracking-wide mb-4 sm:mb-6 text-center sm:text-left">
            I am a <span className="text-white">Front End Developer</span>
            <br className="hidden sm:block" />
          </h3>

          <div className="mt-2 sm:mt-4 text-center sm:text-left">
            <p className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-[rgba(204,204,204,0.65)] max-w-2xl mx-auto sm:mx-0">
              Currently specializing in Frontend (Next.js, React)
            </p>

            <div className="flex flex-col xs:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-4 pb-6 sm:pb-10">
              <a
                href="mailto:pmsiva.1906@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-xs xs:text-sm sm:text-base rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 min-w-[120px] sm:min-w-[140px] justify-center transition-colors duration-300 w-full xs:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={16} className="text-[#3dcf91] sm:w-5 sm:h-5" /> Email
              </a>

              <a
                href="https://github.com/Cruz3196"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[rgba(55,56,56,0.5)] hover:bg-[rgba(55,56,56,0.7)] font-bold text-white text-xs xs:text-sm sm:text-base rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 min-w-[120px] sm:min-w-[140px] justify-center transition-colors duration-300 w-full xs:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} className="text-[#3dcf91] sm:w-5 sm:h-5" /> Resume
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
