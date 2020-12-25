import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/SessionActions';
import { Link } from 'react-router-dom';
import './Navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link style={{ marginRight: 10 }} to={'/tweets'}>
            All Tweets
          </Link>
          <Link style={{ marginRight: 10 }} to={'/profile'}>
            Profile
          </Link>
          <Link style={{ marginRight: 10 }} to={'/new_tweet'}>
            Write a Tweet
          </Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link style={{ marginRight: 10 }} to={'/signup'}>
            Signup
          </Link>
          <Link style={{ marginRight: 10 }} to={'/signin'}>
            Login
          </Link>
          <Link style={{ marginRight: 10 }} to={'/tweets'}>
            tweets
          </Link>
          <Link style={{ marginRight: 10 }} to={'/profile'}>
            profile
          </Link>
          <Link to={'/new_tweet'}>new tweet</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Chirper</h1>
        {this.getLinks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
