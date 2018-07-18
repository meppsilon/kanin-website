import React from "react";
import { Motion, spring } from "react-motion";
import bannerImage from "../assets/banner-image.jpg";

export const BackgroundMediaTemplate = ({ isOpaque, image }) => {
  return (
    <Motion style={{ opacity: spring(isOpaque ? 0.2 : 1) }}>
      {({ opacity }) => (
        <img
          className="cover min-w-full min-h-full fixed pin-t"
          style={{
            // filter: 'sepia(100%) brightness(90%) grayscale(60%)',
            opacity: opacity
          }}
          src={image}
        />
      )}
    </Motion>
  );
};

const BackgroundMedia = ({ isOpaque, backgroundMedia }) => (
  <BackgroundMediaTemplate
    isOpaque={isOpaque}
    image={backgroundMedia.frontmatter.image}
  />
);

export default BackgroundMedia;
