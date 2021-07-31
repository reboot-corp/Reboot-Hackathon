import React, { useEffect } from "react";
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
      <div className="block" style={{ backgroundImage: `url(${"demo.gif"})` }}>
        <div className="overlay">
          <div>
            <h1>Some Slogan</h1>
            <h2>Play your pain away</h2>

            <a title="Try demo">
              <button style={{ marginRight: "50px", marginTop: "50px" }}>
                <p>Try demo</p>
              </button>
            </a>
            <a title="Download">
              <button>
                <p>Download</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
