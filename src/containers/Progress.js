import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';

class Progress extends SpaceshipCanvas {
  constructor(props) {
    super(props);
    this.state = { percent: 1 };
  }

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
        SpaceshipCanvas.spritesheet, 261, 1, this.state.percent * 110, 20,
        this.props.x, this.props.y - 8, this.state.percent * 110, 20
      );
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      percent: props.processed * 1 / props.process
    };
  }
}

export default connect(state => ({
  processed: state.progress.processed
}))(Progress);