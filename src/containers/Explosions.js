import React from 'react';
import { connect } from "react-redux";
import Explosion from "../components/Explosion";
import Group from './Group';

class Explosions extends React.Component {
  render() {
    return (<Group>{this.props.children.map(
      (explosion, i) => <Explosion key={i} {...explosion} />
    )}</Group>);
  }
}

export default connect(state => ({
  children: state.explosions
}))(Explosions);