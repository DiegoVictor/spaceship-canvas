import SpaceshipCanvas from "./SpaceshipCanvas";

class Item extends SpaceshipCanvas {
  positions = {50: 126, 150: 149, 300: 172};

  draw(ctx) {
    let position;

    position = this.positions[this.props.score];
    if (this.props.type === 'mult') {
      position = 195;
    }

    ctx.drawImage(
      SpaceshipCanvas.spritesheet, position, 27, 20, 20,
      this.props.x, this.props.y, this.props.width, this.props.height
    );
  }
}

export default Item;