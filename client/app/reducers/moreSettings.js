import { Map } from 'immutable';
import Types from '../actions/actionTypes';

const initialSettings = Map({
  location: '',
});

export default function (state = initialSettings, action) {
  switch (action.type) {
    case Types.UPDATE_LOCATION:
      return state.setIn(['location'], action.location);
    default:
      return state;
  }
}
