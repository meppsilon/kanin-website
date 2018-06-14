import React from "react";
import BackgroundMedia from "./BackgroundMedia";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";
import Pages from './Pages';

class MainArea extends React.Component {
  state = { page: "" };

  render() {
    const { siteTitle, sections, children } = this.props;
    console.log('url', this.props.url, this.state.page);

    return (
      <div className="h-screen flex relative bg-black">
        <BackgroundMedia />
        <div className="w-full h-full flex absolute z-20 text-black">
          <SocialMedia />
          <Nav
            siteTitle={siteTitle}
            sections={sections}
            onClickHandler={page => this.setState({ page: page })}
          />
        </div>
        <Pages children={children} page={this.state.page} />
      </div>
    );
  }
}

export default MainArea;
