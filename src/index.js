import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import { setScreen, newFrame } from './store/actions/screen';
import { moveBackgroundBy, setBackground } from './store/actions/background';
import { setSpriteSheet } from './store/actions/spaceship-canvas';
import { advanceProgress } from './store/actions/progress';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Group from './containers/Group';
import Text from './components/Text';
import Screen from './containers/Screen';
import Background from './containers/Background';
import Progress from './containers/Progress';
import Lifebar from './containers/Lifebar';
import Score from './containers/Score';
import Multiplier from './containers/Multiplier';


// Load resources (background and spritesheet)
Store.dispatch(setBackground('img/bg.png'));
Store.dispatch(setSpriteSheet('img/spritesheet.png'));

// Import font
ReactDOM.render(
  <link href="css/bebas-neue.css" onLoad={() => {
    Store.dispatch(advanceProgress());
  }} rel="stylesheet" />,
  document.head
);

// Insert canvas into HTML body
ReactDOM.render(
  <canvas height={550} width={350} ref={e => {
    SpaceshipCanvas.canvas = e;

    // Retrieve canvas' context and store in the 
    // SpaceshipCanvas class making the context available 
    // to all its children components
    SpaceshipCanvas.ctx = e.getContext('2d');
  }} />,
  document.getElementById('app')
);

// Draw the game
ReactDOM.render(
  <Provider store={Store}><Screen /></Provider>,
  SpaceshipCanvas.canvas
);

// Show Loading screen as initial screen
Store.dispatch(setScreen(<Group>
  <Background />
  {/* Set the position and the number of files to be loaded */}
  <Progress x={120} y={275} process={3} oncomplete={() => {

    // All files were loaded, so go to the next screen
    setTimeout(() => {
      Store.dispatch(setScreen(<Group>
        <Background />
        {/* Player's hud */}
        <Lifebar x={8} y={10} />
        <Score x={342} y={10} />
        <Multiplier x={342} y={526} />
      </Group>));
    }, 1000);
  }}/>
  <Text value="Loading" x={175} y={265} />
</Group>));

/* Creates game main loop */
((frame) => {
  frame(frame);
})(frame => {
  requestAnimationFrame(() => {
    Store.dispatch(moveBackgroundBy(1));

    // Make the other components redraw
    Store.dispatch(newFrame());
    frame(frame);
  });
});