import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import Background from '../containers/Background';
import Group from '../containers/Group';
import Key from '../components/Key';
import Text from '../components/Text';

import { collided } from '../store/actions/spaceship';
import { setScreen } from '../store/actions/screen';
import { setStatus } from '../store/actions/game';
import { clearPressedKeys } from "../store/actions/keyboard";

import Game from './Game';
import GameOver from './GameOver';

import { HALF_HEIGHT, HALF_WIDTH } from '../globals';


class Continue extends Screen {
  constructor(props) {
    super(props);
    this.attach('keyup', event => {
      switch (event.key) {
        case 'y':
          props.setScreen(<Game />);
          break;

        case 'n':
          props.setScreen(<GameOver />);
          break;
        
        default:
      }
    });
  }

  componentDidMount() {
    this.props.setStatus('continue');
    this.props.collided();
    this.props.clearPressedKeys();
  }

  render() {
    return (<Group>
      <Background />
      {['Do you wish to', 'continue?'].map((text, i) => 
        <Text value={text} textAlign="left" key={i}
          x={HALF_WIDTH - 72} y={HALF_HEIGHT + i * 25}
        />
      )}
      {['y', 'n'].map((key, i) => 
        <Key key={i} value={key}
          x={HALF_WIDTH - 34 + i * 36} y={HALF_HEIGHT + 40}
        />
      )}
    </Group>);
  }
}

export default connect(
  null,
  { setStatus, setScreen, collided, clearPressedKeys }
)(Continue);