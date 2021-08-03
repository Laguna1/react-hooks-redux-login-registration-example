import { combineReducers } from 'redux';
import sessionReducer from 'redux-session';

const rootReducer = combineReducers({
  session: sessionReducer,
});
export default rootReducer;
