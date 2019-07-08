import React from 'react';
import Group from '../containers/Group';
import Background from '../containers/Background';
import Shoots from '../containers/Shoots';
import Enemies from '../containers/Enemies';
import Lifebar from '../containers/Lifebar';
import Score from '../containers/Score';
import Spaceship from '../containers/Spaceship';
import Multiplier from '../containers/Multiplier';

import { HEIGHT, WIDTH } from '../globals';

class Game extends React.Component {
  render() {
    return (<Group>
      <Background />

      {/* Player's hud */}
      <Lifebar x={8} y={10} />
      <Multiplier x={WIDTH - 8} y={HEIGHT - 24} />
      <Score x={WIDTH - 8} y={10} />

      <Spaceship />

      {/* Draw player and enemies' shoots */}
      <Shoots />

      {/* Draw enemies */}
      <Enemies />
    </Group>);
  }
}

export default Game;