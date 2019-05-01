import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import { setScreen } from './store/screen/actions';

import SpaceshipCanvas from './components/SpaceshipCanvas';
import Screen from './containers/Screen';
import Background from './components/Background';

SpaceshipCanvas.bg = new Image();
SpaceshipCanvas.bg.src = 'img/bg.png';


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


ReactDOM.render(
  <Provider store={Store}>
    <Screen>
      <Background loop="infinite" />
    </Screen>
  </Provider>,
  SpaceshipCanvas.canvas
);