import React from 'react';
import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';
import Number from '../components/Number';

class Multiplier extends SpaceshipCanvas {
	draw(ctx) {
		/* Draw the "x" before the multiplier number */
		ctx.drawImage(
			SpaceshipCanvas.spritesheet, 221, 3, 17, 17,
			this.props.x - this.props.value.toString().length * 23, this.props.y + 2, 10, 10
    );

    return (<Number {...this.props} />);
	}
}

export default connect(state => ({
  value: state.player.multiplier
}))(Multiplier);