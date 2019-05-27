import React from 'react';
import { connect } from 'react-redux';
import SpaceshipCanvas from '../components/SpaceshipCanvas';
import Group from "./Group";
import Life from '../components/Life';

/* Group life icons */
class Lifebar extends SpaceshipCanvas {
	draw() {
		return (
			<Group>{Array.from(Array(this.props.credits).keys())
				.map((index) => {
					return (
						<Life x={this.props.x + (index * 12)} y={this.props.y} key={index} />
					);
				}
			)}</Group>
		);
	}
}

export default connect(state => ({
  credits: state.player.credits
}))(Lifebar);