import React, { useEffect } from "react";
import { Navbar } from "./Navbar";

export const Play: React.FC = () => {
  // sets title
  useEffect(() => {
    document.title = "Reboot | Play";
  }, []);

  return (
    <div className="main_block play" style={{ backgroundColor: "#333046" }}>
      <Navbar />
      {/* insert iframe here: */}
      <p>Recommend fullscreen for best experience</p>
    </div>
  );
};
