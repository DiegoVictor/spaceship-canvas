import SpaceshipCanvas from "./SpaceshipCanvas";

class Key extends SpaceshipCanvas {
  constructor(props) {
    super(props);
    this.keys = {
      y: 7,
      n: 8,
      r: 9
    };
  }

  draw(ctx) {
    let key = this.keys[this.props.value];
    if (SpaceshipCanvas.spritesheet) {
      ctx.drawImage(
        SpaceshipCanvas.spritesheet, 1 + key * 40, 118, 34, 33,
        this.props.x, this.props.y, 34, 33
      );
    }
  }
}

export default Key;