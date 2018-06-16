import React from "react";
import Header from './Header';
import BackgroundMedia from "./BackgroundMedia";
import Pages from './Pages';

class MainArea extends React.Component {
  state = { page: "" };

  render() {
    const { siteTitle, sections, children, url } = this.props;
    return (
      <div className="h-screen flex relative bg-black-true">
        <Header siteTitle={siteTitle} sections={sections} />
        <BackgroundMedia page={url} />
        <div className="w-full h-full flex absolute text-black overflow-scroll scrolling-touch">
          <Pages children={children} page={url} />
        </div>
      </div>
    );
  }
}

export default MainArea;
