import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ color: "#87ceeb", display: "flex", fontSize: "1rem" }}>
      hii{" "}
      <div className="home-header">
        {/* <h1 style={{ paddingBottom: 15 }} className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name">
          I'M
          <strong className="main-name"> SOUMYAJIT BEHERA</strong>
        </h1> */}

        {/* <div style={{ padding: 50, textAlign: "left" }}>
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
        </div> */}
      </div>
    </div>
  );
}

export default Type;
