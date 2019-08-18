import SpaceshipCanvas from "./SpaceshipCanvas";

class UFO extends SpaceshipCanvas {
  positions = [3, 37, 71, 105];

  draw(ctx) {
    ctx.drawImage(
      SpaceshipCanvas.spritesheet, this.positions[this.props.version], 123, 32, 32,
      this.props.x, this.props.y, this.props.width, this.props.height
    );
  }
}

export default UFO;
