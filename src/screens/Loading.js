import React from 'react';
import { connect } from 'react-redux';

import Background from '../containers/Background';
import Group from '../containers/Group';
import Progress from '../containers/Progress';
import Text from '../components/Text';

import { setStatus } from '../store/actions/game';

import { HEIGHT, WIDTH } from '../globals';

class Loading extends React.Component {
  componentDidMount() {
    this.props.setStatus('loading');
  }

  render() {
    return (<Group>
      <Background />
      {/* Set the position and the number of files to be loaded */}
      <Progress x={WIDTH / 2 - 55} y={HEIGHT / 2}
        process={3} oncomplete={this.props.oncomplete}
      />
      <Text value="Loading" x={WIDTH / 2} y={HEIGHT / 2 - 10} />
    </Group>);
  }
}

export default connect(
  null,
  { setStatus }
)(Loading);