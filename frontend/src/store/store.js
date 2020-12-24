import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

export default (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
