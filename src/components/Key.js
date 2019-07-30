import SpaceshipCanvas from "./SpaceshipCanvas";

class Key extends SpaceshipCanvas {
  constructor(props) {
    super(props);
    this.keys = {
      y: 1,
      n: 2,
      r: 3
    };
  }

  draw(ctx) {
    let key = this.keys[this.props.value];
    if (SpaceshipCanvas.spritesheet) {
      ctx.drawImage(
        SpaceshipCanvas.spritesheet, 3 + key * 40, 85, 34, 33,
        this.props.x, this.props.y, 34, 33
      );
    }
  }
}

export default Key;