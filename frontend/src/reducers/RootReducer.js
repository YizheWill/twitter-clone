import { combineReducers } from 'redux';
import session from './SessionApiReducer';
import errors from './ErrorsReducer';
import tweets from './TweetsReducer';

export default combineReducers({
  tweets,
  errors,
  session,
});
