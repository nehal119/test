import { GET_USER } from '../actions/types';

const DEFAULT_USER = {};

export default (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};