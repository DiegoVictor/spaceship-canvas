import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import Group from './Group';

class Items extends React.Component {
  render() {
    return (<Group>{this.props.children.map(
      (item, i) => <Item key={i} {...item} />
    )}</Group>);
  }
}

export default connect(state => ({
  children: state.items
}))(Items);