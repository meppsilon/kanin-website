import React, { Component } from "react";
import { TransitionMotion, Motion, spring } from "react-motion";
import BackgroundImage from './BackgroundImage';

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

  willEnter = () => ({ opacity: 0 });

  willLeave = () => ({
    opacity: spring(0)
  });

  render() {
    const { isOpaque, photos, musicLink } = this.props;
    const { index } = this.state;
    return (
      <Motion style={{ opacity: spring(isOpaque ? 0.2 : 1) }}>
        {({ opacity }) => (
          <div style={{ opacity }}>
            <div className="flex absolute h-full w-full">
              <a
                className="font-bold self-center mx-auto z-10 border-2 px-4 py-2 text-2xl text-white cursor-pointer"
                href={musicLink}
              >
                <div>Listen Now</div>
              </a>
            </div>
            <BackgroundImage photo={photos[index].photo}/>
          </div>
        )}
      </Motion>
    );
  }
}

const BackgroundMedia = ({ isOpaque, backgroundMedia }) => (
  <BackgroundMediaTemplate
    isOpaque={isOpaque}
    photos={backgroundMedia.frontmatter.photos}
    musicLink={backgroundMedia.frontmatter.musicLink}
    transitionTime={backgroundMedia.frontmatter.transitionTime}
  />
);

export default BackgroundMedia;
