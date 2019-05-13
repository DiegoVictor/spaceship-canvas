import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import { setScreen, newFrame } from './store/actions/screen';
import { moveBackgroundBy, setBackground } from './store/actions/background';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Screen from './containers/Screen';
import Background from './containers/Background';
import Progress from './containers/Progress';

Store.dispatch(setBackground('img/bg.png'));

SpaceshipCanvas.spritesheet = new Image();
SpaceshipCanvas.spritesheet.src = 'img/spritesheet.png';


// Insert canvas into HTML body
ReactDOM.render(
  <canvas height={550} width={320} ref={e => {
    SpaceshipCanvas.canvas = e;

    // Retrieve canvas' context and store in the 
    // SpaceshipCanvas class making the context available 
    // to all its children components
    SpaceshipCanvas.ctx = e.getContext('2d');
  }} />,
  document.getElementById('app')
);

// Show Loading screen as initial screen
Store.dispatch(setScreen(<Screen>
  <Background />
  <Progress x={120} y={275} to_process={2} />
</Screen>));

// Draw the game
ReactDOM.render(
  <Provider store={Store}>
    {Store.getState().screen.current}
  </Provider>,
  SpaceshipCanvas.canvas
);


/* Creates game main loop */
((frame) => {
  frame(frame);
})(frame => {
  requestAnimationFrame(() => {
    Store.dispatch(moveBackgroundBy(1));

    Store.dispatch(newFrame());
    frame(frame);
  });
});