import React from "react";
import { Link } from "react-router";

interface Prop {
  highlight?: string;
}

export const Navbar: React.FC<Prop> = ({ highlight = "" }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/#" title="Home">
          <img
            alt="website logo"
            src={"banner2.png"}
            className="navIcon"
            style={{ marginRight: "5px", height: "40px" }}
          />
        </Link>
        <div className="navItems">
          <Link
            title="Home"
            to="/#"
            className={highlight === "home" ? "highlightedNav" : ""}
          >
            Home
          </Link>
          <Link
            title="About"
            to="/#about"
            className={highlight === "about" ? "highlightedNav" : ""}
          >
            About
          </Link>
          <Link
            title="Downloads"
            to="/#downloads"
            className={highlight === "downloads" ? "highlightedNav" : ""}
          >
            Downloads
          </Link>
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
