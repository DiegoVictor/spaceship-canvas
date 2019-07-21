import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import Background from '../Background';
import Enemies from '../Enemies';
import Group from '../Group';
import Lifebar from '../Lifebar';
import Multiplier from '../Multiplier';
import Score from '../Score';
import Shoots from '../Shoots';
import Spaceship from '../Spaceship';
import Explosions from '../Explosions';
import Items from '../Items';

import { setStatus } from '../../store/actions/game';
import { toggleKey } from '../../store/actions/keyboard';
import { toggleMovementSpeed } from '../../store/actions/spaceship';
import { clearPressedKeys } from "../../store/actions/keyboard";

import { HEIGHT, WIDTH } from '../../globals';


class Game extends Screen {
  constructor(props) {
    super(props);
    ['keydown', 'keyup'].forEach(event_name => {
      this.attach(event_name, event => {
        const key = event.key.replace('Arrow', '').toLowerCase();
        let pressing = true;

        if (event.type === 'keyup') {
          pressing = false;
        }

        if (!props.keyboard[key] || !pressing) {
          switch (key) {
            case 'shift':
              props.toggleMovementSpeed(pressing);
              break;
  
            default:
              if (['z', 'up', 'right', 'down', 'left'].indexOf(key) > -1) {
                props.toggleKey(key, pressing);
              }
          }
        }
      });
    });
  }

  componentDidMount() {
    this.props.setStatus('playing');
    this.props.clearPressedKeys();
  }

  render() {
    return (<Group>
      <Background />

      {/* Player's hud */}
      <Lifebar x={8} y={10} />
      <Multiplier x={WIDTH - 8} y={HEIGHT - 24} />
      <Score x={WIDTH - 8} y={10} />

      <Spaceship />

      {/* Draw arrays */}
      <Shoots />
      <Enemies />
      <Items />
      <Explosions />
    </Group>);
  }
}

export default connect(
  state => ({
    keyboard: state.keyboard,
  }),
  { toggleKey, toggleMovementSpeed, setStatus, clearPressedKeys }
)(Game);