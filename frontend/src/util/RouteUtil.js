import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!loggedIn ? <Component {...props} /> : <Redirect to='/tweets' />)}
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (loggedIn ? <Component {...props} /> : <Redirect to='/signin' />)}
  />
);

const mapStateToProps = (state) => ({ loggedIn: state.session.isAuthenticated });
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
