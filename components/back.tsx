"use client"

import React, { useCallback } from "react";
import Head from "next/head";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function VantaBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <>
      <Head>
        <title>tsParticles | Stars Preset | JavaScript Particles, Confetti and Fireworks animations for your website</title>
        <meta
          name="description"
          content="tsParticles - Easily create highly customizable particles, confetti and fireworks animations and use them as animated backgrounds for your website."
        />
        <meta name="author" content="Matteo Bruni" />
        <meta
          name="keywords"
          content="html css javascript typescript particles js ts jsx tsx canvas confetti fireworks animations react vue angular svelte libraries how to create add"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@HollowMatt_ITA" />
        <meta name="twitter:image:src" content="https://particles.js.org/images/demo2.png" />
        <meta property="og:title" content="tsParticles - JavaScript Particles, Confetti and Fireworks animations for your website" />
        <meta property="og:site_name" content="tsParticles" />
        <meta property="og:url" content="https://particles.js.org/" />
        <meta
          property="og:description"
          content="Easily create highly customizable particles, confetti and fireworks animations and use them as animated backgrounds for your website."
        />
        <meta property="og:image" content="https://particles.js.org/images/demo2.png" />
        <link rel="shortcut icon" href="https://particles.js.org/tsParticles-64.png" />

        {/* Analytics scripts */}
        <script async src="https://www.clarity.ms/tag/8q4bxin4tm"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-922Z47NPS0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-922Z47NPS0');
            `,
          }}
        />
        {/* Microsoft Clarity snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "8q4bxin4tm");
            `,
          }}
        />
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          background: {
            color: "#000000",
          },
        }}
      />
      {/* Your content here */}
    </>
  );
}
// "use client";

// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import type { Engine, Container } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// function VantaBackground() {
//   // Initialize tsparticles engine
//   const particlesInit = useCallback(async (engine: Engine) => {
//     // This loads the tsparticles package bundle with all features
//     await loadFull(engine);
//   }, []);

//   // Optional: callback after particles are loaded
//   const particlesLoaded = useCallback(
//     async (container: Container | undefined) => {
//       // console.log(container);
//     },
//     []
//   );

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               area: 1500, // changed value_area to area per tsparticles docs
//             },
//           },
//           links: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               quantity: 1, // changed particles_nb to quantity
//             },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// }

// export default VantaBackground;
