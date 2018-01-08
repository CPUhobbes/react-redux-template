import Types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_API:
      return state.setIn(['api'], action.api);

    default:
      return state;
  }
}
