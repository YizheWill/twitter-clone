import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER_LOGOUT,
} from '../actions/SessionActions';

const _initSession = {
  isAuthenticated: false,
  user: {},
};

export default (oldState = _initSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...oldState,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...oldState,
        isSignedIn: true,
      };
    default:
      return oldState;
  }
};
