import { SET_SPRITESHEET, ADVANCE_PROGRESS } from '../action_types';
import SpaceshipCanvas from '../../components/SpaceshipCanvas';

export function setSpriteSheet(path) {
  return dispatch => {
    let img = new Image();

    img.onload = () => {
      dispatch({ type: ADVANCE_PROGRESS });

      // TODO Try use state to set the spritesheet on SpaceshipCanvas component
      SpaceshipCanvas.spritesheet = img;
      return dispatch({
        type: SET_SPRITESHEET,
        payload: img
      });
    };

    img.src = path;
  }
};