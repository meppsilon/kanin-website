import React from "react";
import { Motion, spring } from "react-motion";
import bannerImage from "../assets/banner-image.jpg";

const BackgroundMedia = ({ page }) => {
  return (
    <Motion style={{ opacity: spring(page === "" ? 1 : 0.2) }}>
      {({ opacity }) => (
        <img
          className="cover min-w-full min-h-full fixed transform-xy-center"
          style={{
            filter: "sepia(100%) brightness(90%) grayscale(60%)",
            opacity: opacity,
          }}
          src={bannerImage}
        />
      )}
    </Motion>
  );
};

export default BackgroundMedia;
