import SpaceshipCanvas from '../components/SpaceshipCanvas';
import { connect } from 'react-redux';

class Screen extends SpaceshipCanvas {
}

export default connect(state => ({
  children: state.screen.current
}))(Screen);