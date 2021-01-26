import React, { useContext } from 'react'
import { withAuth, AuthContext } from "./AuthContext";

export const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return <h1>Profile</h1>
}

export const ProfileWithAuth = withAuth(Profile);