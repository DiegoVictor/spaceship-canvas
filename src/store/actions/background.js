import { MOVE_BACKGROUND, SET_BACKGROUND, ADVANCE_PROGRESS } from "../action_types";

/* Create background movement effect cycle */
export function moveBackgroundBy(increment) {
  return { type: MOVE_BACKGROUND, payload: increment };
};

export function setBackground(path) {
  return dispatch => {
    let img = new Image();

    img.onload = () => {
      dispatch({ type: ADVANCE_PROGRESS });

      return dispatch({
        type: SET_BACKGROUND,
        payload: img 
      });
    };

    img.src = path;
  };
};