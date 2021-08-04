import { combineReducers } from 'redux';
import sessionReducer from 'redux-session';
import itemReducer from './item/itemReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  session: sessionReducer,
});

export default rootReducer;
