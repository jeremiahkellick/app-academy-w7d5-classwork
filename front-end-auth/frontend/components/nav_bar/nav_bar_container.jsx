import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logOut } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, { logOut })(NavBar);
