import React from "react";
import { HashLink } from "react-router-hash-link";

interface Prop {
  highlight?: string;
}

export const Navbar: React.FC<Prop> = ({ highlight = "" }) => {
  return (
    <>
      <nav className="navbar">
        <HashLink to="/#" title="Home">
          <img
            alt="website logo"
            src={"banner2.png"}
            className="navIcon"
            style={{ marginRight: "5px", height: "40px" }}
          />
        </HashLink>
        <div className="navItems">
          <HashLink
            title="Home"
            to="/#"
            className={highlight === "home" ? "highlightedNav" : ""}
          >
            Home
          </HashLink>
          <HashLink
            title="About"
            to="/#about"
            className={highlight === "about" ? "highlightedNav" : ""}
          >
            About
          </HashLink>
          <HashLink
            title="Downloads"
            to="/#downloads"
            className={highlight === "downloads" ? "highlightedNav" : ""}
          >
            Downloads
          </HashLink>
        </div>
        {/* <div className="hamburger">
            <HiMenu
              color="#73CDF3"
              size={30}
              title="Open Navigation Menu"
              onClick={clickedHamburger}
            />
          </div> */}
      </nav>
    </>
  );
};
