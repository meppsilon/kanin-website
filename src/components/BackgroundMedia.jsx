import React from 'react';
import { Motion, spring } from 'react-motion';
import bannerImage from '../assets/banner-image.jpg';

export const BackgroundMediaTemplate = ({ page, type, media }) => {
  return (
    <Motion style={{ opacity: spring(page === '' ? 1 : 0.2) }}>
      {({ opacity }) =>
        type === 'image' ? (
          <img
            className="cover min-w-full min-h-full fixed transform-xy-center"
            style={{
              filter: 'sepia(100%) brightness(90%) grayscale(60%)',
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

const BackgroundMedia = ({ page, backgroundMedia }) => (
  <BackgroundMediaTemplate
    page={page}
    type={backgroundMedia.frontmatter.type}
    media={backgroundMedia.frontmatter.media}
  />
);

export default BackgroundMedia;
