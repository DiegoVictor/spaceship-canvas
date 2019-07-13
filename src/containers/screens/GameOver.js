import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import Background from '../Background';
import Group from '../Group';
import Key from '../../components/Key';
import Text from '../../components/Text';

import { collided } from '../../store/actions/spaceship';
import { restart } from '../../store/actions/game';
import { setScreen } from '../../store/actions/screen';
import { setStatus } from '../../store/actions/game';
import { clearPressedKeys } from "../../store/actions/keyboard";

import Game from './Game';

import { HALF_WIDTH, HALF_HEIGHT } from '../../globals';


class GameOver extends Screen {
  constructor(props) {
    super(props);
    this.attach('keyup', event => {
      if (event.key === 'r') {
        props.restart();
        props.setScreen(<Game />);
      }
    });
  }

  componentDidMount() {
    this.props.setStatus('gameover');
    this.props.collided();
    this.props.clearPressedKeys();
  }

  render() {
    return(<Group>
      <Background />
        <Text value="Game Over" textAlign="center"
          x={HALF_WIDTH} y={HALF_HEIGHT + 15}
        />
        <Key value="r" x={HALF_WIDTH - 17} y={HALF_HEIGHT + 25} />
        <Text value="etry" textAlign="left" font="22px Bebas Neue"
          x={HALF_WIDTH + 20} y={HALF_HEIGHT + 50}
        />
    </Group>);
  }
}


export default connect(
  null,
  { setStatus, setScreen, restart, collided, clearPressedKeys }
)(GameOver);