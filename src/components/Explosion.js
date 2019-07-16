import SpaceshipCanvas from "./SpaceshipCanvas";

class Explosion extends SpaceshipCanvas {
  draw(ctx) {
    ctx.save();
    ctx.translate(this.props.x , this.props.y);
    ctx.rotate(this.props.rotation);
    ctx.drawImage(
      SpaceshipCanvas.spritesheet, 99, 24, 24, 24,
      -this.props.width / 2, -this.props.height / 2,
      this.props.width, this.props.height
    );
    ctx.restore();
  }
}

export default Explosion;