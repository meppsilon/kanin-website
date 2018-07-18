import React from 'react';
import { Motion, spring } from 'react-motion';
import bannerImage from '../assets/banner-image.jpg';

export const BackgroundMediaTemplate = ({ isOpaque, type, media }) => {
  return (
    <Motion style={{ opacity: spring(isOpaque ? 0.2 : 1) }}>
      {({ opacity }) =>
        type === 'image' ? (
          <img
            className="cover min-w-full min-h-full fixed transform-xy-center"
            style={{
              // filter: 'sepia(100%) brightness(90%) grayscale(60%)',
              opacity: opacity,
            }}
            src={media}
          />
        ) : (
          <video autoplay muted loop>
            <source src={media} type="video/mp4" />
          </video>
        )
      }
    </Motion>
  );
};

const BackgroundMedia = ({ isOpaque, backgroundMedia }) => (
  <BackgroundMediaTemplate
    isOpaque={isOpaque}
    type={backgroundMedia.frontmatter.type}
    media={backgroundMedia.frontmatter.media}
  />
);

export default BackgroundMedia;
