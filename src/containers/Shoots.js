import React from 'react';
import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';
import Shoot from '../components/Shoot';

class Shoots extends SpaceshipCanvas {
  draw(ctx) {
    return (this.props.children.map(
      (shoot, i) => <Shoot key={i} {...shoot} />
    ));
  }
}

export default connect(state => ({
  children: state.shoots
}))(Shoots);