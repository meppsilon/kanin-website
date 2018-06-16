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
        <header>
          <div className="absolute w-full mx-auto text-center pt-6 font-extrabold text-4xl text-white fixed z-10">Kanin</div>
          <div className="absolute flex transform-y-center fixed z-10" style={{ marginTop: '-20px' }}>
            <SocialMedia />
          </div>
          <nav className="absolute self-center z-10 transform-y-center" style={{ right: '36px' }}>
            <Nav
              siteTitle={siteTitle}
              sections={sections}
            />
          </nav>
        </header>
        <BackgroundMedia page={url} />
        <div className="w-full h-full flex absolute text-black">
          <Pages children={children} page={url} />
        </div>
      </div>
    );
  }
}

export default MainArea;
