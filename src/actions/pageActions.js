import { CHANGE_SIZE } from './types';

export const changeSize = (size) => dispatch => {
  dispatch( {
      type: CHANGE_SIZE,
      payload: size
  })
}