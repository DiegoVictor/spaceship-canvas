import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import { setScreen } from './store/actions/screen';
import { moveBackgroundBy, setBackground } from './store/actions/background';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Screen from './containers/Screen';
import Background from './containers/Background';

Store.dispatch(setBackground('img/bg.png'));



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

// Set game's initial screen
Store.dispatch(setScreen(<Loading>
  <Progress />
</Loading>));


ReactDOM.render(
  <Provider store={Store}>
    <Screen>
      <Background />
    </Screen>
  </Provider>,
  SpaceshipCanvas.canvas
);


/* Creates game main loop */
requestAnimationFrame(
  function frame() {
    Store.dispatch(moveBackgroundBy(1));

    requestAnimationFrame(frame);
  }
);