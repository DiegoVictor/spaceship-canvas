import React from 'react';
import Group from '../containers/Group';
import Background from '../containers/Background';
import Progress from '../containers/Progress';
import Text from '../components/Text';

import { HEIGHT, WIDTH } from '../globals';

class Loading extends React.Component {
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

export default Loading;