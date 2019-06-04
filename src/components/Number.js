import SpaceshipCanvas from './SpaceshipCanvas';

/* Draw numbers using the spritesheet */
class Number extends SpaceshipCanvas {
  draw(ctx) {
    let number = this.props.value.toString();
    /* Draw every number separately */
		number.split('')
		.forEach((n, index) => {
			ctx.drawImage(
				SpaceshipCanvas.spritesheet, parseInt(n, 10) * 22, 1, 20, 20,
				this.props.x - (number.length - index) * 13, this.props.y, 13, 13
			);
		});
	}
}

export default Number;