import axios from 'axios';
import { FETCH_TEST, ADD_USER, GET_USER, GET_TOTAL_DATA } from './types';

// const API_ROOT = '/api';

// eslint-disable-next-line import/prefer-default-export
export function fetchTest() {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/test').then((response) => {
      dispatch({
        type: FETCH_TEST,
        payload: response.data,
      });
    });
  };
}

export function addUser(item) {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/userdata', item).then((response) => {
      dispatch({
        type: ADD_USER,
        payload: response.data,
      });
    });
  };
}
export function getUser() {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/userdata').then((response) => {
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    });
  };
}
export function getTotalData(data) {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/totaldata', data).then((response) => {
      dispatch({
        type: GET_TOTAL_DATA,
        payload: response.data,
      });
    });
  };
}
