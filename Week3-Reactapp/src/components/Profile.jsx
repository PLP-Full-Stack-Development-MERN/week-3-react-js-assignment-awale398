import React from 'react';
import "../styles/index.css";

const Profile = ({ name, email }) => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;