import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/SessionApiUtil';
import { logout } from './actions/SessionActions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore();
  }
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
