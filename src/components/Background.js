import SpaceshipCanvas from './SpaceshipCanvas';

class Background extends SpaceshipCanvas {
  constructor(props) {
		super(props);
    this.state = {y: 0};

    if (typeof props.loop === 'string'
    && props.loop === 'infinite') {
      /* Create background movement effect cycle */
      requestAnimationFrame(function animate() {
          /* Move the background */
          if (SpaceshipCanvas.bg) {
              this.setState(prevState => {
                  let y = prevState.y + 1;
                  if (y > SpaceshipCanvas.bg.height) {
                      y = 0;
                  }

                  return {
                      y: y
                  };
              });
          }

          requestAnimationFrame(animate.bind(this));
      }.bind(this));
    }
  }

  draw(ctx) {
    if (typeof SpaceshipCanvas.bg === 'object'
    && typeof ctx === 'object') {
			ctx.drawImage(
				SpaceshipCanvas.bg, 0, this.state.y
			);

			/* Draw a second image to make the infine scroll effect */
			if (this.props.loop === 'infinite') {
				ctx.drawImage(
					SpaceshipCanvas.bg, 0, 
					this.state.y - SpaceshipCanvas.bg.height
				);
			}
		}
  }
}

export default Background;