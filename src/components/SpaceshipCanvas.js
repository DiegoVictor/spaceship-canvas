import React from 'react';

class SpaceshipCanvas extends React.Component {
  render() {
    let ctx;

    /* Get context if it is setted */
    if (typeof SpaceshipCanvas.ctx !== 'undefined') {
      ctx = SpaceshipCanvas.ctx;

      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = 'white';
      ctx.font = '30px Bebas Neue';
      ctx.textAlign = 'center';
    }

    /* Call draw only whether it is setted */
    if (typeof this.draw === 'function') {
      let component = this.draw(ctx);
      if (component) { /* case draw return a component */
        return component;
      }
    }

    /* Whether a component has children components render it */
    if (typeof this.props.children !== 'undefined') {
      return (this.props.children);
    }

    return null;
  }
}

export default SpaceshipCanvas;