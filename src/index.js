import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { HEIGHT, WIDTH } from './globals';

import Store from './store';
import { setScreen, newFrame } from './store/actions/screen';
import { moveBackgroundBy, setBackground } from './store/actions/background';
import { setSpriteSheet } from './store/actions/spaceship-canvas';
import { advanceProgress } from './store/actions/progress';
import { moveSpaceship, reloadSpaceshipLaser } from './store/actions/spaceship';
import { shoot, moveShoots, removeShoot } from './store/actions/shoots';
import { createMeteor } from './store/actions/meteor';
import { moveEnemies, destroyEnemy } from './store/actions/enemies';
import { updateExplosions } from './store/actions/explosions';
import { moveItems, collectItem } from './store/actions/items';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Screen from './containers/Screen';

import Loading from './containers/screens/Loading';
import Game from './containers/screens/Game';
import Continue from './containers/screens/Continue';
import GameOver from './containers/screens/GameOver';

import CollisorAnalyzer from './libs/CollisorAnalyzer';



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
Store.dispatch(setScreen(<Loading oncomplete={() => {
  /* All files were loaded, so go to the next screen */
  setTimeout(() => {
    Store.dispatch(setScreen(<Game />));
  }, 1000);
}}/>));

/* Creates game main loop */
((frame) => {
  frame(frame, Store.getState());
})((frame, state) => {
  requestAnimationFrame(() => {
    if (!state.keyboard.p) {
      Store.dispatch(moveBackgroundBy(1));
    }

    if (state.game.status !== 'playing') {
      Store.dispatch(newFrame());
      return frame(frame, Store.getState());
    }

    /**
     * Doing things that depends of the keys 
     * are being pressed
     **/
    Object.keys(state.keyboard).forEach(key => {
      /* Move the spaceship */
      if (state.keyboard[key]
        && ['left', 'up', 'right', 'down'].indexOf(key) > -1) {
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

    /* Check collisions */
    for(let i in state.enemies) {
      /* Was the spaceship reached? */
      if (CollisorAnalyzer.wasSpaceshipHitted(state.spaceship, state.enemies[i])) {
        if (state.player.credits > 1) {
          Store.dispatch(setScreen(<Continue />));
          break;
        }
        Store.dispatch(setScreen(<GameOver />));
        break;
      }

      /* A spaceship's shoot reached a meteor? */
      for(let j in state.shoots) {
        if (CollisorAnalyzer.verify(state.shoots[j], state.enemies[i])) {
          Store.dispatch(destroyEnemy(state.enemies[i], i));
          Store.dispatch(removeShoot(j));
          i--;
          break;
        }
      }
    }

    /*  Collect items */
    for(let i in state.items) {
      if (CollisorAnalyzer.wasSpaceshipHitted(state.spaceship, state.items[i])) {
        Store.dispatch(collectItem(state.items[i], i--));
      }
    }

    /* Decrement the time until the spaceship's next shoot */
    Store.dispatch(reloadSpaceshipLaser());

    /* Create meteors */
    Store.dispatch(createMeteor(1));

    /* Update things' positions on the screen */
    Store.dispatch(moveShoots()); 
    Store.dispatch(moveEnemies());
    Store.dispatch(updateExplosions());
    Store.dispatch(moveItems());

    /* Make the other components redraw */
    Store.dispatch(newFrame());
    frame(frame, Store.getState());
  });
});