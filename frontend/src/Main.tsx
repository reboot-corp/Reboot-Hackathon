import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import { Navbar } from "./Navbar";

interface Prop {
  highlight?: string;
}

export const Main: React.FC<Prop> = ({ highlight = "" }) => {
  // sets title
  useEffect(() => {
    document.title = "natHACKS | Home";
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="home"
        className="block"
        style={{ backgroundImage: `url(${"demo.gif"})` }}
      >
        <div className="overlay">
          <div>
            <h1>Some Slogan</h1>
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
      <div id="about" className="block about_block">
        <h2>About</h2>
        <p>
          This is a Unity Game built for{" "}
          <a
            href="https://nathacks.devpost.com/"
            target="_blank"
            rel="noreferrer"
          >
            natHacks 2021
          </a>
        </p>
      </div>
      <div id="downloads" className="block download">
        <h2>Downloads</h2>
        <p></p>
      </div>
    </div>
  );
};
