// // import { ADD_USER } from '../actions/types';

// // const initialState = {
// //   items: [],
// //   loading: false
// // };

// // export default function(state = initialState, action) {
// //   switch (action.type) {
// //     case ADD_ITEM:
// //       return {
// //         ...state,
// //         items: [action.payload, ...state.items]
// //       };
// //     default:
// //       return state;
// //   }
// // }

import { ADD_USER } from '../actions/types';

const DEFAULT_USER = {};

export default (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};