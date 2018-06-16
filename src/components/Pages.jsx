import React from "react";
import { Motion, spring } from "react-motion";

const pageState = ["empty", "occupied", "changing"];

class Pages extends React.Component {
  state = { page: pageState[0] };

  render() {
    const { page, children } = this.props;
    return (
      <Motion
        style={{
          margin: spring(page === "empty" ? 0 : page === "changing" ? 40 : 20)
        }}
      >
        {({ margin }) => (
          <div
            className="w-full overflow-auto flex justify-center"
            style={
              {
                // WebkitTransform: "translateZ(0px)",
                // WebkitTransform: "translate3d(0,0,0)",
                // WebkitPerspective: 1000,
              }
            }
          >
            <div
              className=""
              style={{
                marginTop: `${90}px`
              }}
            >
              {children()}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default Pages;
