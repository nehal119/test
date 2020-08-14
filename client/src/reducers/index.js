import { combineReducers } from 'redux';
import test from './testReducer';
import user from './userReducer';
import oneuser from './userDataReducer';
import totaldata from './totalDataReducer';

const rootReducer = combineReducers({
  test,
  user,
  oneuser,
  totaldata,
});

export default rootReducer;
