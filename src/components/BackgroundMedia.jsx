import React from "react";
import { Motion, spring } from "react-motion";

const BackgroundMedia = ({ page }) => {
  return (
    <Motion style={{ opacity: spring(page === "" ? 1 : 0.2) }}>
      {({ opacity }) => (
        <img
          className="absolute cover h-screen w-screen"
          style={{
            filter: "sepia(100%) brightness(90%) grayscale(60%)",
            opacity: opacity
          }}
          src="https://scontent-lax3-2.cdninstagram.com/vp/32225afe5338117b4aad2c8101440afc/5BA727F2/t51.2885-15/e35/26871991_210236116205238_8712684632765628416_n.jpg"
        />
      )}
    </Motion>
  );
};

export default BackgroundMedia;
