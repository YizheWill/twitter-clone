import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import { Switch } from 'react-router-dom';
import MainPage from './main/MainPage';

import NavbarContainer from './nav/NavbarContainer';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <AuthRoute exact path='/' component={MainPage} />
      <ProtectedRoute exact path='/login' component={LoginFormContainer} />
      <ProtectedRoute exact path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
