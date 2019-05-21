import React from 'react';
import { connect } from 'react-redux';

class Group extends React.Component {
  render() {
    /* Redraw the children components */
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        timestamp: this.props.timestamp
      });
    });
  }
}

export default connect(state => ({
  timestamp: state.screen.timestamp
}))(Group);