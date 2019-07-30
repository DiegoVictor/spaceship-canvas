import SpaceshipCanvas from "./SpaceshipCanvas";

class Item extends SpaceshipCanvas {
  draw(ctx) {
    let x = (Math.floor(this.props.score / 150) * 23);
    ctx.drawImage(
      SpaceshipCanvas.spritesheet, 126 + x, 28, 20, 20,
      this.props.x, this.props.y, this.props.width, this.props.height
    );
  }
}

export default Item;