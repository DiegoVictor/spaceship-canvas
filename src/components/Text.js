import SpaceshipCanvas from './SpaceshipCanvas';

class Text extends SpaceshipCanvas {
	draw(ctx) {
		['textBaseline', 'fillStyle', 'font', 'textAlign']
		.forEach(property => {
			if (typeof this.props[property] === 'string') {
				ctx[property] = this.props[property];
			}
		});

		ctx.fillText(
			this.props.value, this.props.x, this.props.y
		);
	}
}

export default Text;