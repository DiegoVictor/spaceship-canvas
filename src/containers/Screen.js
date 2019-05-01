import React from 'react';
import { connect } from 'react-redux';
import Group from '../components/Group';

class Screen extends React.Component {
  render() {
    return (<Group>
      {this.props.children}
      {this.props.screen}
    </Group>)
  }
}

export default connect(state => ({
  screen: state.screen.current
}))(Screen);