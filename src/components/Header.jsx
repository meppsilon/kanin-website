import React from "react";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";

const Header = ({ siteTitle, sections }) => (
  <header>
    <div className="absolute w-full mx-auto text-center pt-6 font-extrabold text-4xl text-white fixed z-10">
      Kanin
    </div>
    <div
      className="absolute flex transform-y-center fixed z-10"
      style={{ marginTop: "-20px" }}
    >
      <SocialMedia />
    </div>
    <nav
      className="fixed self-center z-10 transform-y-center"
      style={{ right: "36px" }}
    >
      <Nav siteTitle={siteTitle} sections={sections} />
    </nav>
  </header>
);

export default Header;
