import React from "react";

import { Navbar } from "./Navbar";

export const PageNotFound: React.FC = () => {
  return (
    <div className="main_block">
      <Navbar />
      <div className="main_block download error">
        <div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img src={"bird.gif"} alt="bird gif" title="Bird is the word" />
          </div>
          <h2 style={{ textAlign: "center", margin: 0, paddingTop: "5vh" }}>
            404 Error
          </h2>
          <p>Looks like your page was stolen by a bird 😳</p>
        </div>
      </div>
    </div>
  );
};
