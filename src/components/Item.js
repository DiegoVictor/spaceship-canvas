import SpaceshipCanvas from "./SpaceshipCanvas";

class Item extends SpaceshipCanvas {
  draw(ctx) {
    ctx.drawImage(
      SpaceshipCanvas.spritesheet, 5 + (Math.floor(this.props.score / 150) * 37), 53, 34, 33,
      this.props.x, this.props.y, this.props.width, this.props.height
    );
  }
}

export default Item;