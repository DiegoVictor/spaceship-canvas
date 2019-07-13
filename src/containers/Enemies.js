import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';

class Enemies extends SpaceshipCanvas {
  draw(ctx) {
    this.props.items.forEach(enemy => {
      ctx.save();
      ctx.translate(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
      ctx.rotate(enemy.rotation);
      ctx.drawImage(
        SpaceshipCanvas.spritesheet, 3 + enemy.type * 30, 87, 28, 28,
        -enemy.width / 2, -enemy.height / 2, enemy.width, enemy.height
      );
      ctx.restore();
    });
  }
}

export default connect(state => ({
  items: state.enemies
}))(Enemies);