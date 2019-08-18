import SpaceshipCanvas from "./SpaceshipCanvas";

class Meteor extends SpaceshipCanvas {
  positions = [3, 33, 63, 93, 123, 153, 183, 213, 243, 273, 303, 333];

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.props.x + this.props.width / 2,
      this.props.y + this.props.height / 2
    );

    ctx.rotate(this.props.rotation);
    ctx.drawImage(
      SpaceshipCanvas.spritesheet, this.positions[this.props.version], 55, 28, 28,
      -this.props.width / 2, -this.props.height / 2, this.props.width, this.props.height
    );
    ctx.restore();
  }
}

export default Meteor;