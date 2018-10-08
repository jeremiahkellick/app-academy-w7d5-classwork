import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/sign_up">Sign Up</Link>
      <Link className="btn" to="/log_in">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
