import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducers(state = initialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      // state.push(action.course);
      return action.authors;
    default:
      return state;
  }
}
