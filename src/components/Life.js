import SpaceshipCanvas from './SpaceshipCanvas';

/* Draw life icon */
class Life extends SpaceshipCanvas {
	draw(ctx) {
		ctx.drawImage(
			SpaceshipCanvas.spritesheet, 241, 0, 13, 21,
			this.props.x, this.props.y, 9, 14
		);
	}
}

export default Life;