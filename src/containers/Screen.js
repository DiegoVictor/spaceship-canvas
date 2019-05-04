import React from 'react';
import { connect } from 'react-redux';
import Group from '../components/Group';

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    /* Recursive arrow function XD */
    ((frame) => {
      frame(frame);
    })(frame => {
      requestAnimationFrame(() => {
        this.setState(state => ({
          timestamp: new Date().getTime()
        }));
        frame(frame);
      });
    });
  }

  render() {
    return (<Group>
      {this.props.children}{this.props.screen}
    </Group>)
  }
}

export default connect(state => ({
  screen: state.screen.current
}))(Screen);