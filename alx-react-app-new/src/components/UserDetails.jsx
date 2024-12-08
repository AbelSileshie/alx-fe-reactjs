// UserDetails.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserDetails;
