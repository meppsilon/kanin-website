import React from "react";
import { Motion, spring } from "react-motion";

const pageState = ['empty', 'occupied', 'changing'];

class Pages extends React.Component {
  state = { page: pageState[0] };

  render() {
    const { page, children } = this.props;
    return (
      <Motion style={{ margin: spring(page === 'empty' ? 0 : page === 'changing' ? 40 : 20) }}>
        {({ margin }) => (
          <div className="w-full">
            <div style={{ marginTop: `${80}px`}}>{children()}</div>
          </div>
        )}
      </Motion>
    )
  }
}

export default Pages;
