import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<div>Details Section</div>} />
        <Route path="settings" element={<div>Settings Section</div>} />
      </Routes>
    </div>
  );
};

export default Profile;
