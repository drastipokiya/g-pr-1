import React from 'react';
import UserDetails from './UserDetails';

function User({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <UserDetails user={user} />
    </div>
  );
}

export default User;
