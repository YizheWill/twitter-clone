import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import { logout } from '../../actions/SessionActions';
const useStyles = makeStyles((theme) => ({}));

function Navbar({ loggedIn }) {
  const classes = useStyles();
  const logoutUser = 'a';
  const getLinks = 'b';
  const logOutUser = (e) => {
    e.preventDefault();
    logout();
  };
  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <Link to={'/tweets'}>All Tweets</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/new_twee'}>Write a Tweet</Link>
          <Button onClick={logOutUser}>Log Out</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Sign up</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Chirps</h1>
      {getLinks}
    </div>
  );
}

export default Navbar;
