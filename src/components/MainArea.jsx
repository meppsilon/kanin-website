import React from "react";
import Header from "./Header";
import BackgroundMedia from "./BackgroundMedia";
import Pages from "./Pages";

const MainArea = ({ siteTitle, sections, children, url }) => (
  <div className="h-screen flex relative bg-black-true">
    <Header siteTitle={siteTitle} sections={sections} url={url} />
    <BackgroundMedia page={url} />
    <div className="w-full h-full flex absolute text-black overflow-scroll scrolling-touch">
      <Pages children={children} page={url} />
    </div>
  </div>
);

export default MainArea;
