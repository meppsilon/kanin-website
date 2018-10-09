import React, { Component } from "react";
import { Motion, spring } from "react-motion";

export class BackgroundMediaTemplate extends Component {
  state = { invervalId: null, index: 0 };

  componentDidMount() {
    let transitionTime;
    if (this.props.transitionTime) {
      transitionTime = this.props.transitionTime * 1000;
    } else {
      transitionTime = 10000;
    }
    const intervalId = setInterval(this.setIndex, transitionTime);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setIndex = () => {
    const { photos } = this.props;
    const max = photos.length - 1;
    const { index } = this.state;
    const newIndex = index === max ? 0 : index + 1;
    this.setState({ index: newIndex });
  };

  willEnter = () => {
    return { opacity: 0 };
  };

  willLeave = () => {
    return {
      opacity: spring(0, { stiffness: 90, damping: 11 })
    };
  };

  render() {
    const { isOpaque, photos } = this.props;
    const { index } = this.state;
    return (
      <Motion
        style={{ opacity: spring(isOpaque ? 0.2 : 1) }}
        willEnter={this.willEnter()}
        willLeave={this.willLeave()}
      >
        {({ opacity }) => (
          <img
            alt=""
            className="cover min-w-full min-h-full fixed md:top-20"
            style={{
              opacity: opacity
            }}
            src={photos[index].photo}
          />
        )}
      </Motion>
    );
  }
}

const BackgroundMedia = ({ isOpaque, backgroundMedia }) => (
  <BackgroundMediaTemplate
    isOpaque={isOpaque}
    photos={backgroundMedia.frontmatter.photos}
    transitionTime={backgroundMedia.frontmatter.transitionTime}
  />
);

export default BackgroundMedia;
