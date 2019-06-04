import React from 'react';
import { connect } from "react-redux";
import SpaceshipCanvas from '../components/SpaceshipCanvas';
import Number from '../components/Number';

class Score extends SpaceshipCanvas {
  draw() {
    return (<Number {...this.props} />);
  }
}

export default connect(state => ({
  value: state.player.score
}))(Score);