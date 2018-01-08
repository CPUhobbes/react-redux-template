import { combineReducers } from 'redux';
import settings from './settings';
import moreSettings from './moreSettings';

const rootReducer = combineReducers({
  // short hand property names
  settings,
  moreSettings,
});

export default rootReducer;
