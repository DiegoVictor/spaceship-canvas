import React from 'react';

class Function extends React.Component {
  render() {
    return (this.props.children());
  }
}

export default Function;