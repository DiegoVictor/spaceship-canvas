import SpaceshipCanvas from './SpaceshipCanvas';

class Shoot extends SpaceshipCanvas {
	draw(ctx) {
		ctx.drawImage(
      SpaceshipCanvas.spritesheet, 88, 26, 7, 21,
      this.props.x - this.props.width / 2, this.props.y - this.props.height,
      this.props.width, this.props.height
    );
	}
}

export default Shoot;