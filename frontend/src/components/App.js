import './App.css';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import { Switch } from 'react-router-dom';
import MainPage from './main/MainPage';

import Navbar from './nav/Navbar';
import SigninForm from './session/SigninForm';
import SignupForm from './session/SignupForm';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <AuthRoute exact path='/' component={MainPage} />
        <AuthRoute exact path='/signin' component={SigninForm} />
        <AuthRoute exact path='/signup' component={SignupForm} />
      </Switch>
    </div>
  );
}

export default App;
