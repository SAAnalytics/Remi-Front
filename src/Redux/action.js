import {
  ACTION_STATE,
} from './actionTypes';


export const testingAction = (flag) => {
  return (dispatch) => {
    dispatch({ type: ACTION_STATE, payload: flag });
  }
}