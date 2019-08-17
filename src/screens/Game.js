import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import Background from '../containers/Background';
import Enemies from '../containers/Enemies';
import Group from '../containers/Group';
import Lifebar from '../containers/Lifebar';
import Multiplier from '../containers/Multiplier';
import Score from '../containers/Score';
import Shoots from '../containers/Shoots';
import Spaceship from '../containers/Spaceship';
import Explosions from '../containers/Explosions';
import Items from '../containers/Items';
import Text from '../components/Text';

import { setStatus } from '../store/actions/game';
import { toggleKey } from '../store/actions/keyboard';
import { toggleMovementSpeed } from '../store/actions/spaceship';
import { clearPressedKeys } from "../store/actions/keyboard";

import { HEIGHT, HALF_HEIGHT, WIDTH, HALF_WIDTH } from '../globals';


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

            case 'p':
              if (event_name === 'keydown') {
                let value = this.props.keyboard.p;
                props.toggleKey('p', !value);
                props.setStatus('playing');
                if (!value) {
                  props.setStatus('pause');
                }
              }
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


      {this.props.keyboard.p &&
        <Text value="Pause" textAlign="center"
          x={HALF_WIDTH} y={HALF_HEIGHT + 11}
        />
      }
    </Group>);
  }
}

export default connect(
  state => ({
    keyboard: state.keyboard,
  }),
  { toggleKey, toggleMovementSpeed, setStatus, clearPressedKeys }
)(Game);