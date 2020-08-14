import { GET_TOTAL_DATA } from '../actions/types';

const DEFAULT_USER = {};

export default (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case GET_TOTAL_DATA:
      return action.payload;
    default:
      return state;
  }
};