import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import { Navbar } from "./Navbar";

interface Prop {
  highlight?: string;
}

export const Main: React.FC<Prop> = ({ highlight = "" }) => {
  // sets title
  useEffect(() => {
    document.title = "Reboot | Home";
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="home"
        className="block"
        style={{
          backgroundImage: `url(${"demo.gif"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div>
            <h1>Reboot</h1>
            <h2>Play your pain away</h2>

            <HashLink
              title="Try demo"
              to="/play"
              className={highlight === "home" ? "highlightedNav" : ""}
            >
              <button style={{ marginRight: "50px", marginTop: "50px" }}>
                <p>Try demo</p>
              </button>
            </HashLink>
            <HashLink
              title="Download"
              to="/#downloads"
              className={highlight === "home" ? "highlightedNav" : ""}
            >
              <button>
                <p>Download</p>
              </button>
            </HashLink>
          </div>
        </div>
      </div>
      <div id="about" className="about_block" style={{ minHeight: "100vh" }}>
        <h2>About</h2>
        <p
          style={{
            paddingRight: "23vw",
            lineHeight: "1.4",
          }}
        >
          <b>REBOOT</b> is a "hands-off" <b>VR/PC</b> prototype for use in pain
          research and rehabilitation to help address financial barriers in the
          delivery of VR neurofeedback intervention.
        </p>
        <p
          style={{
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Currently supported hardware include:
        </p>
        <ul style={{ marginBottom: "40px" }}>
          <li style={{ paddingBottom: "10px" }}>OpenBCI</li>
          <li>Muse</li>
        </ul>
        <p>
          See the course code along with the abstract on{" "}
          <a
            href="https://github.com/Zeyu-Li/natHACKS"
            title="GitHub repo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
      <div id="downloads" className="download" style={{ minHeight: "100vh" }}>
        <h2>Downloads</h2>
        <div className="downloadSection">
          <p style={{ flex: 1 }}>
            <HashLink title="Try demo" to="/play">
              <img
                src="https://img.icons8.com/ios-filled/250/000000/monitor--v1.png"
                style={{ filter: "invert(1)" }}
                alt="Monitor"
              />
              <p>Play online</p>
            </HashLink>
          </p>
          <p style={{ flex: 1 }}>
            <HashLink title="Download for Windows" to="/">
              <img
                src="https://raw.githubusercontent.com/Zeyu-Li/natHACKS/main/frontend/public/windows.svg"
                style={{
                  filter: "brightness(0) invert(1)",
                  height: "230px",
                  paddingBottom: "20px",
                }}
                alt="Windows Logo"
              />
              {/* <div style={{ width: "250px", height: "250px" }}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#00ADEF"
                  d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"
                ></path>
              </svg>
            </div> */}

              <p>
                Download for <br />
                Windows
              </p>
            </HashLink>
          </p>
        </div>
      </div>
    </div>
  );
};
