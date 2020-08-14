import { FETCH_TEST, ADD_USER } from '../actions/types';

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_TEST:
      return action.payload;
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};