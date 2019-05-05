import SpaceshipCanvas from '../components/SpaceshipCanvas';
import { connect } from 'react-redux';
import React from 'react';

class Screen extends SpaceshipCanvas {
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
}))(Screen);