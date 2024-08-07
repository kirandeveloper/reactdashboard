import React from 'react';

function Welcome({ onLogout }) {
  return (
    <div>
      <h2>Welcome, you are logged in!</h2>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
}

export default Welcome;
