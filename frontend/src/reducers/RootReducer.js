import { combineReducers } from 'redux';
import session from './SessionReducer';

const RootReducer = combineReducers({
  session,
});

export default RootReducer;
