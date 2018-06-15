import React from "react";
import BackgroundMedia from "./BackgroundMedia";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";
import Pages from './Pages';

class MainArea extends React.Component {
  state = { page: "" };

  render() {
    const { siteTitle, sections, children, url } = this.props;
    return (
      <div className="h-screen flex relative bg-black-true">
        <BackgroundMedia page={url} />
        <div className="w-full h-full flex absolute text-black">
          <div className="absolute w-full mx-auto text-center pt-6 font-extrabold text-4xl text-white">Kanin</div>
          <SocialMedia />
          <Nav
            siteTitle={siteTitle}
            sections={sections}
          />
          <Pages children={children} page={url} />
        </div>
      </div>
    );
  }
}

export default MainArea;
