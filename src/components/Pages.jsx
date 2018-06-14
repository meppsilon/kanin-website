import React from "react";
import { Motion, spring } from "react-motion";

const pageState = ['empty', 'occupied', 'changing'];

class Pages extends React.Component {
  state = { page: pageState[0] };

  componentWillReceiveProps(nextProps) {
    console.log('args', nextProps, this.props);
  }

  render() {
    const { page, children } = this.props;
    return (
      <Motion style={{ opacity: spring(page === '' ? 0 : 0.75), margin: spring(page === 'empty' ? 0 : page === 'changing' ? 40 : 20) }}>
        {({ opacity, margin }) => (
          <div className="z-10 w-full bg-black-true" style={{ opacity: opacity }}>
            {console.log('page', page)}
            <div style={{ marginTop: `${margin}px`}}>{children()}</div>
          </div>
        )}
      </Motion>
    )
  }
}

export default Pages;
