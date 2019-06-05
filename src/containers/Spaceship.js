import SpaceshipCanvas from '../components/SpaceshipCanvas';
import { connect } from 'react-redux';

/* Player spaceship */
class Spaceship extends SpaceshipCanvas {
	draw(ctx) {
		ctx.drawImage(
			SpaceshipCanvas.spritesheet, 53, 26, 32, 21, 
      this.props.x - this.props.width / 2, this.props.y,
      this.props.width, this.props.height
		);
	}
}

export default connect(state => ({
  x: state.spaceship.x,
  y: state.spaceship.y
}))(Spaceship);