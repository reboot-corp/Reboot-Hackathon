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
          </div>
        </div>
      </div>
    </div>
  );
};
