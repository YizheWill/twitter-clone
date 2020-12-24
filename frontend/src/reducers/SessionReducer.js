import { RECEIVE_USER_LOGOUT } from '../actions/SessionActions';
const _initState = { isAuthenticated: false, user: {} };
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return oldState;
  }
};
