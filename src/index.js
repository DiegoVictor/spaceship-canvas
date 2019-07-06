import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { HEIGHT, WIDTH } from './globals';

import Store from './store';
import { setScreen, newFrame } from './store/actions/screen';
import { moveBackgroundBy, setBackground } from './store/actions/background';
import { setSpriteSheet } from './store/actions/spaceship-canvas';
import { advanceProgress } from './store/actions/progress';
import { toggleKey } from './store/actions/keyboard';
import { moveSpaceship, toggleMovementSpeed, reloadSpaceshipLaser } from './store/actions/spaceship';
import { shoot, moveShoots } from './store/actions/shoots';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Text from './components/Text';
import Shoots from './containers/Shoots';
import Group from './containers/Group';
import Screen from './containers/Screen';
import Background from './containers/Background';
import Progress from './containers/Progress';
import Lifebar from './containers/Lifebar';
import Score from './containers/Score';
import Spaceship from './containers/Spaceship';
import Multiplier from './containers/Multiplier';


/* Load resources (background and spritesheet) */
Store.dispatch(setBackground('img/bg.png'));
Store.dispatch(setSpriteSheet('img/spritesheet.png'));

/* Import font */
ReactDOM.render(
  <link href="css/bebas-neue.css" onLoad={() => {
    Store.dispatch(advanceProgress());
  }} rel="stylesheet" />,
  document.head
);

/* Insert canvas into HTML body */
ReactDOM.render(
  <canvas height={HEIGHT} width={WIDTH} ref={e => {
    SpaceshipCanvas.canvas = e;

    /**
     * Retrieve canvas' context and store in the 
     * SpaceshipCanvas class making the context available 
     * to all its children components
     **/
    SpaceshipCanvas.ctx = e.getContext('2d');
  }} />,
  document.getElementById('app')
);

/* Draw the game */
ReactDOM.render(
  <Provider store={Store}><Screen /></Provider>,
  SpaceshipCanvas.canvas
);

/* Show Loading screen as initial screen */
Store.dispatch(setScreen(<Group>
  <Background />
  {/* Set the position and the number of files to be loaded */}
  <Progress x={WIDTH / 2 - 55} y={HEIGHT / 2} process={3}
  oncomplete={() => {

    /* All files were loaded, so go to the next screen */
    setTimeout(() => {
      Store.dispatch(setScreen(<Group>
        <Background />

        {/* Player's hud */}
        <Lifebar x={8} y={10} />
        <Multiplier x={WIDTH - 8} y={HEIGHT - 24} />
        <Score x={WIDTH - 8} y={10} />

        <Spaceship />

        {/* Draw player and enemies' shoots */}
        <Shoots />
      </Group>));
    }, 1000);
  }} />
  <Text value="Loading" x={WIDTH / 2} y={HEIGHT / 2 - 10} />
</Group>));

['keydown', 'keyup'].forEach(event_name => {
  document.addEventListener(event_name, event => {
    let key = event.key.replace('Arrow', '');

    if (!Store.getState().keyboard[key]
    || event_name === 'keyup') {
      switch (key) {
        case 'Shift':
          Store.dispatch(toggleMovementSpeed());
          break;

        case 'z':
        default:
          Store.dispatch(toggleKey(key));
      }
    }
  });
});

/* Creates game main loop */
((frame) => {
  frame(frame);
})(frame => {
  requestAnimationFrame(() => {
    Store.dispatch(moveBackgroundBy(1));

    /**
     * Doing things that depends of the keys 
     * are being pressed
     **/
    (state => {
      Object.keys(state.keyboard).forEach(key => {
        let directional = ['Left', 'Up', 'Right', 'Down'].indexOf(key);

        /* Move the spaceship */
        if (state.keyboard[key] && directional > -1) {
          Store.dispatch(moveSpaceship(key));
        }
      });

      /**
       * Create new shoots when 'z' key is pressed and the
       * spaceship's laser is loaded
       **/
      if (state.keyboard.z
      && state.spaceship.cadence.remmaning === 0) {
        Store.dispatch(shoot({
          height: 13,
          step: 6,
          x: state.spaceship.x,
          y: state.spaceship.y,
          width: 4
        }));
      }
    })(Store.getState());

    /* Update shoots' positions */
    Store.dispatch(moveShoots()); 
    Store.dispatch(reloadSpaceshipLaser());

    /* Make the other components redraw */
    Store.dispatch(newFrame());
    frame(frame);
  });
});