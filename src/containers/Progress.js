import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';

class Progress extends SpaceshipCanvas {
  draw(ctx) {
    if (SpaceshipCanvas.spritesheet) {
      /* Draw the fillable progress bar */
      ctx.fillStyle = '#949394';
      ctx.fillRect(
        this.props.x, this.props.y,
        110, 5
      );

      /* Fill the progress bar */
      ctx.drawImage(
        SpaceshipCanvas.spritesheet, 261, 1, this.props.percent, 20,
        this.props.x, this.props.y - 8, this.props.percent, 20
      );
    }
  }
}

export default connect(state => ({
  percent: 10,
  x: 120,
  y: 275
}))(Progress);