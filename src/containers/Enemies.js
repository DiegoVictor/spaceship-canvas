import React from 'react';
import Group from '../containers/Group';
import Meteor from '../components/Meteor';
import UFO from '../components/UFO';
import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';

class Enemies extends SpaceshipCanvas {
  draw(ctx) {
    return (<Group>{this.props.items.map((enemy, i) => {
      switch(enemy.type) {
        case 'meteor':
          return (<Meteor key={i} {...enemy} />);

        case 'ufo':
        default:
          return (<UFO key={i} {...enemy} />);
      }
    })}</Group>);
  }
}

export default connect(state => ({
  items: state.enemies
}))(Enemies);