import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';

class Background extends SpaceshipCanvas {
  draw(ctx) {
    if (this.props.img !== null && typeof ctx === 'object') {
      /* Draw a two images to make the infinite scroll effect */
      [0, this.props.img.height].forEach(value => {
        ctx.drawImage(
          this.props.img, 0, this.props.y - value
        );
      });
    }
  }
}

export default connect(state => ({
  y: state.background.y,
  img: state.background.img
}))(Background);