import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import Background from '../Background';
import Group from '../Group';
import Key from '../../components/Key';
import Text from '../../components/Text';

import { collided } from '../../store/actions/spaceship';
import { setScreen } from '../../store/actions/screen';
import { setStatus } from '../../store/actions/game';

import Game from './Game';
import GameOver from './GameOver';

import { HHEIGHT, HWIDTH } from '../../globals';


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
      }
    });
  }

  componentDidMount() {
    this.props.setStatus('continue');
    this.props.collided();
  }

  render() {
    return (<Group>
      <Background />
      {['Do you wish to', 'continue?'].map((text, i) => 
        <Text value={text} textAlign="left" key={i}
          x={HWIDTH - 72} y={HHEIGHT + i * 25}
        />
      )}
      {['y', 'n'].map((key, i) => 
        <Key key={i} value={key}
          x={HWIDTH - 34 + i * 36} y={HHEIGHT + 40}
        />
      )}
    </Group>);
  }
}

export default connect(
  null,
  { setStatus, setScreen, collided }
)(Continue);