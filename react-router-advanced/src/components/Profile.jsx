// src/components/Profile.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default Profile;
