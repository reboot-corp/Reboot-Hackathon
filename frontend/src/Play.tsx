import React, { useEffect } from "react";
import { Navbar } from "./Navbar";

export const Play: React.FC = () => {
  // sets title
  useEffect(() => {
    document.title = "Reboot | Play";
  }, []);

  return (
    <div className="block" style={{ backgroundColor: "#333046" }}>
      <Navbar />
    </div>
  );
};
