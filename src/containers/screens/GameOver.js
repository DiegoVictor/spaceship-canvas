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

import Game from './Game';

import { HWIDTH, HHEIGHT } from '../../globals';


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
  }

  render() {
    return(<Group>
      <Background />
        <Text value="Game Over" textAlign="center"
          x={HWIDTH} y={HHEIGHT + 15}
        />
        <Key value="r" x={HWIDTH - 17} y={HHEIGHT + 25} />
        <Text value="etry" textAlign="left" font="22px Bebas Neue"
          x={HWIDTH + 20} y={HHEIGHT + 50}
        />
    </Group>);
  }
}


export default connect(
  null,
  { setStatus, setScreen, restart, collided }
)(GameOver);