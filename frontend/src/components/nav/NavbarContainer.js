import { connect } from 'react-redux';

import { logout } from '../../actions/SessionActions';
import Navbar from './Navbar';

export default connect(
  (state) => ({
    loggedIn: state.session.isAuthenticated,
  }),
  { logout }
)(Navbar);
