import React from "react";
import { Transition, config } from "react-spring";
import { TimingAnimation, Easing } from 'react-spring/dist/addons';

const BackgroundImage = ({ photo }) => (
  <Transition
    keys={photo}
    impl={TimingAnimation}
    config={{ duration: 1500, easing: Easing.linear }}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {styles => (
      <img
        alt=""
        className="cover min-w-full min-h-full fixed md:top-20"
        style={styles}
        src={photo}
      />
    )}
  </Transition>
);

export default BackgroundImage;
