import './App.css';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import { Switch } from 'react-router-dom';
import MainPage from './main/MainPage';

import Navbar from './nav/Navbar';
import SigninForm from './session/SigninForm';
import SignupForm from './session/SignupForm';
import Tweets from './tweets/Tweets';
import Profile from './profile/Profile';
import ComposeTweet from './tweets/ComposeTweet';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <AuthRoute exact path='/' component={MainPage} />
        <AuthRoute exact path='/signin' component={SigninForm} />
        <AuthRoute exact path='/signup' component={SignupForm} />
        <ProtectedRoute exact path='/tweets' component={Tweets} />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <ProtectedRoute exact path='/new_tweet' component={ComposeTweet} />
      </Switch>
    </div>
  );
}

export default App;
