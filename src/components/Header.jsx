import React from "react";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";
import whiteLogo from "../assets/logo-white.png";
import blackLogo from "../assets/logo-black.png";

const Header = ({ siteTitle, sections, url, socialLinks, renderedColor }) => (
  <header>
    <div
      className="fixed w-full text-center pt-6 z-10 flex"
      style={{ height: "20%" }}
    >
      <img
        className="mx-auto max-h-full flex self-center"
        src={renderedColor === "white" ? whiteLogo : blackLogo}
        style={{ width: "30%", maxWidth: '200px', minHeight: '60px' }}
      />
    </div>
    <div
      className="fixed flex transform-y-center fixed z-10"
      style={{ marginTop: "-20px" }}
    >
      <SocialMedia socialLinks={socialLinks} renderedColor={renderedColor}/>
    </div>
    <nav
      className="fixed self-center z-10 transform-y-center"
      style={{ right: "36px" }}
    >
      <Nav siteTitle={siteTitle} sections={sections} url={url} renderedColor={renderedColor}/>
    </nav>
  </header>
);

export default Header;
