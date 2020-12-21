import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import jwtDecode from 'jwt-decode';
import { setAuthToken } from './util/SessionApiUtil';
import { logout } from './actions/sessionActions';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localstorage.jwtToken);
    const decodedUser = jwtDecode(localstorage.jwtToken);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser,
      },
    };
    store = configureStore(preloadedState);
    const currentTime = Data.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementsById('root');
  ReactDOM.render(<Root store={store} />, root);
});
